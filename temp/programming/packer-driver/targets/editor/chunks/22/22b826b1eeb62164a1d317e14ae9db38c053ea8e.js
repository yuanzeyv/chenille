System.register(["__unresolved_0", "cc", "nanoid", "immer"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, nanoid, produce, applyPatches, enablePatches, _crd, NodeStatus, NodeType, _StoreKey, nodes;

  function _resetFinalStates(node, root) {
    switch (node.type) {
      case NodeType.Action:
        if (!node.getValue(_StoreKey.WasRun)) {
          node.setValue(_StoreKey.Status, NodeStatus.Ready);
        }

        break;

      case NodeType.Portal:
      case NodeType.Invert:
      case NodeType.Parallel:
      case NodeType.Sequence:
      case NodeType.Selector:
        {
          // TODO: Clean up this logic
          const children = Array.isArray(node.children) ? node.children : [node.children];
          const hasRunningChildren = children.some(item => item.getValue(_StoreKey.Status) === NodeStatus.Running);
          const isSequence = node.type === NodeType.Sequence;
          const hasSequenceFinished = isSequence ? node.getValue(_StoreKey.SequenceIndex) + 1 === children.length || node.getValue(_StoreKey.WasRun) === false : true;

          if (!hasRunningChildren && hasSequenceFinished) {
            node.setValue(_StoreKey.Status, NodeStatus.Ready);

            if (node.type === NodeType.Sequence) {
              node.setValue(_StoreKey.SequenceIndex, 0);
            }

            children.forEach(item => {
              item.setValue(_StoreKey.Status, NodeStatus.Ready);
            });
          }

          for (let i = 0; i < children.length; i++) {
            _resetFinalStates(children[i], root);
          }

          break;
        }

      default:
        break;
    }

    node.setValue(_StoreKey.WasRun, false);
  }

  function _interpret(node, root, options = {
    props: {},
    setState: () => {}
  }) {
    const {
      state
    } = root;
    node.setValue(_StoreKey.WasRun, true);

    switch (node.type) {
      case NodeType.Action:
        {
          const status = node.getValue(_StoreKey.Status); // This is an async action

          if (status === NodeStatus.Running) {
            const patches = node.getValue(_StoreKey.Patches); // If patches is not undefined then action has resolved and we can apply it's result to current state

            if (patches) {
              // Apply patches to current state
              const nextState = (_crd && applyPatches === void 0 ? (_reportPossibleCrUseOfapplyPatches({
                error: Error()
              }), applyPatches) : applyPatches)(state, patches); // Reset patches array

              node.setValue(_StoreKey.Patches, undefined);
              node.setValue(_StoreKey.Status, NodeStatus.Success);
              root.state = nextState;
              options.setState == null ? void 0 : options.setState(nextState);
              root.tick(options.props);
              return NodeStatus.Success;
            }

            return status;
          }

          bump(node);
          const nextState = (_crd && produce === void 0 ? (_reportPossibleCrUseOfproduce({
            error: Error()
          }), produce) : produce)(state, draft => node.fn(draft, options.props || {}), patches => {
            node.setValue(_StoreKey.Patches, patches);

            if (isPromise(nextState)) {
              root.tick();
            }
          });

          if (isPromise(nextState)) {
            node.setValue(_StoreKey.Status, NodeStatus.Running);
            return NodeStatus.Running;
          } // TODO: Handle errors(failure status)


          root.state = nextState;
          options.setState == null ? void 0 : options.setState(nextState);
          node.setValue(_StoreKey.Status, NodeStatus.Success);
          return NodeStatus.Success;
        }

      case NodeType.Condition:
        {
          bump(node);
          node.setValue(_StoreKey.Status, NodeStatus.Running);

          if (node.exec({
            state,
            node,
            root
          }, options.props || {})) {
            node.setValue(_StoreKey.Status, NodeStatus.Success);
            return NodeStatus.Success;
          } else {
            node.setValue(_StoreKey.Status, NodeStatus.Failure);
            return NodeStatus.Failure;
          }
        }

      case NodeType.Invert:
        {
          bump(node);
          node.setValue(_StoreKey.Status, NodeStatus.Running);

          const status = _interpret(node.children, root, options);

          if (status === NodeStatus.Failure) {
            node.setValue(_StoreKey.Status, NodeStatus.Success);
            return NodeStatus.Success;
          }

          if (status === NodeStatus.Success) {
            node.setValue(_StoreKey.Status, NodeStatus.Failure);
            return NodeStatus.Failure;
          }

          return status;
        }

      case NodeType.State:
        {
          bump(node);
          return _interpret(node.children, root, options);
        }

      case NodeType.Decorator:
        {
          bump(node);
          return node.decorator(_interpret(node.children, root, options));
        }

      case NodeType.Portal:
      case NodeType.Parallel:
        {
          bump(node);
          node.setValue(_StoreKey.Status, NodeStatus.Running);
          let states = [];

          for (let i = 0; i < node.children.length; i++) {
            node.children[i].parent = node;
            states[i] = _interpret(node.children[i], root, options);
          } // TODO: Make this a prop


          const nSuccess = states.filter(status => status === NodeStatus.Success).length; // TODO: Make this a prop

          const nFailure = states.filter(status => status === NodeStatus.Failure).length;

          if (nSuccess === node.children.length) {
            node.setValue(_StoreKey.Status, NodeStatus.Success);
            return NodeStatus.Success;
          } else if (nFailure === node.children.length) {
            node.setValue(_StoreKey.Status, NodeStatus.Failure);
            return NodeStatus.Failure;
          }

          node.setValue(_StoreKey.Status, NodeStatus.Running);
          return NodeStatus.Running;
        }

      case NodeType.Sequence:
        {
          bump(node);
          node.setValue(_StoreKey.Status, NodeStatus.Running);
          let index = node.getValue(_StoreKey.SequenceIndex, 0);

          while (index < node.children.length) {
            const child = node.children[index];
            child.parent = node;

            const status = _interpret(child, root, options);

            if (status === NodeStatus.Success) {
              node.setValue(_StoreKey.SequenceIndex, ++index);
              continue;
            } else if (status === NodeStatus.Running) {
              node.setValue(_StoreKey.Status, NodeStatus.Running);
              return NodeStatus.Running;
            } else if (status === NodeStatus.Failure) {
              node.setValue(_StoreKey.SequenceIndex, 0);
              node.setValue(_StoreKey.Status, NodeStatus.Failure);
              return NodeStatus.Failure;
            }
          }

          node.setValue(_StoreKey.SequenceIndex, 0);
          node.setValue(_StoreKey.Status, NodeStatus.Success);
          return NodeStatus.Success;
        }

      case NodeType.Selector:
        {
          bump(node);
          node.setValue(_StoreKey.Status, NodeStatus.Running);

          for (const child of node.children) {
            child.parent = node;

            const status = _interpret(child, root, options);

            if (status === NodeStatus.Success || status === NodeStatus.Running) {
              node.setValue(_StoreKey.Status, status);
              return status;
            }
          }

          node.setValue(_StoreKey.Status, NodeStatus.Failure);
          return NodeStatus.Failure;
        }

      default:
        throw new Error('Invalid node type!');
    }
  }

  function bump(node) {
    const currentValue = node.getValue(_StoreKey.Count, 0);
    node.setValue(_StoreKey.Count, currentValue + 1);
  }

  function createNodeState(customState) {
    return {
      $nodeState: {
        [_StoreKey.Count]: 0,
        [_StoreKey.WasRun]: false,
        [_StoreKey.Status]: NodeStatus.Ready,
        ...customState
      },

      setValue(key, value) {
        this['$nodeState'][key] = value;
      },

      getValue(key, defaultValue) {
        if (this['$nodeState'] === undefined) {
          return defaultValue === undefined ? undefined : defaultValue;
        }

        return this['$nodeState'][key] === undefined ? defaultValue : this['$nodeState'][key];
      }

    };
  }

  function isPromise(item) {
    return item && typeof item.then === 'function';
  }

  function _reportPossibleCrUseOfnanoid(extras) {
    _reporterNs.report("nanoid", "nanoid", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproduce(extras) {
    _reporterNs.report("produce", "immer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfapplyPatches(extras) {
    _reporterNs.report("applyPatches", "immer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatch(extras) {
    _reporterNs.report("Patch", "immer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenablePatches(extras) {
    _reporterNs.report("enablePatches", "immer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_nanoid) {
      nanoid = _nanoid.default;
    }, function (_immer) {
      produce = _immer.default;
      applyPatches = _immer.applyPatches;
      enablePatches = _immer.enablePatches;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a711e0pD7JI8rmwpBEvUmKq", "index", undefined);

      (_crd && enablePatches === void 0 ? (_reportPossibleCrUseOfenablePatches({
        error: Error()
      }), enablePatches) : enablePatches)();

      _export("NodeStatus", NodeStatus = {
        Ready: "Ready",
        Success: "Success",
        Failure: "Failure",
        Running: "Running"
      });

      _export("NodeType", NodeType = {
        Action: "Action",
        Condition: "Condition",
        Decorator: "Decorator",
        Invert: "Invert",
        Parallel: "Parallel",
        Portal: "Portal",
        Root: "Root",
        Selector: "Selector",
        Sequence: "Sequence",
        State: "State"
      });

      _export("_StoreKey", _StoreKey = {
        Patches: "$patches",
        SequenceIndex: "$sequenceIndex",
        Status: "$status",
        Count: "$count",
        WasRun: "$wasRun"
      });

      _export("nodes", nodes = {
        root: function (name, childrenFactory) {
          return (initialState, options = {
            props: {},
            setState: () => {}
          }) => {
            const registrations = {};

            const getListeners = function (type) {
              if (!(type in registrations)) registrations[type] = [];
              return registrations[type];
            };

            const root = {
              id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
                error: Error()
              }), nanoid) : nanoid)(),
              name,
              type: NodeType.Root,
              children: childrenFactory(),
              state: initialState,
              tick: function tick(props) {
                if (typeof window === 'undefined') {
                  return undefined;
                }

                this.dispatchEvent(new CustomEvent('tickstart'));

                const nodeStatus = _interpret(this.children, this, { ...options,
                  props
                });

                _resetFinalStates(this.children, this);

                this.dispatchEvent(new CustomEvent('tickend'));
                return nodeStatus;
              },
              addEventListener: (type, listener) => {
                const listeners = getListeners(type);
                const index = listeners.indexOf(listener);
                if (index === -1) registrations[type].push(listener);
              },
              removeEventListener: (type, listener) => {
                const listeners = getListeners(type);
                const index = listeners.indexOf(listener);
                if (index !== -1) registrations[type].splice(index, 1);
              },
              dispatchEvent: event => {
                var listeners = getListeners(event.type).slice();

                for (var i = 0; i < listeners.length; i++) listeners[i].call(this, event);

                return !event.defaultPrevented;
              },
              ...createNodeState()
            };
            root.addEventListener = root.addEventListener.bind(root);
            root.removeEventListener = root.removeEventListener.bind(root);
            root.dispatchEvent = root.dispatchEvent.bind(root);
            root.tick = root.tick.bind(root);
            return root;
          };
        },

        /**
         * Runs child nodes in sequence until it finds one that succeeds. Succeeds when it finds the first child that succeeds. For child nodes that fail, it moves forward to the next child node. While a child is running it stays on that child node without moving forward.
         */
        selector: function (children) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Selector,
            children,
            ...createNodeState()
          };
        },

        /**
         * Runs each child node one by one. Fails for the first child node that fails. Moves to the next child when the current running child succeeds. Stays on the current child node while it returns running. Succeeds when all child nodes have succeeded.
         */
        sequence: function (children) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Sequence,
            children,
            ...createNodeState({
              [_StoreKey.SequenceIndex]: 0
            })
          };
        },

        /**
         * Runs all child nodes in parallel. Continues to run until a required number of child nodes have either failed or succeeded.
         */
        parallel: function (children) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Parallel,
            children,
            ...createNodeState()
          };
        },
        condition: function (name, fn) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            name,
            type: NodeType.Condition,
            exec: (args, props) => {
              if (typeof fn === 'function') {
                return fn(args.state, props);
              } else {
                return true;
              }
            },
            ...createNodeState()
          };
        },
        portal: function () {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Portal,
            children: [],
            ...createNodeState(),
            clear: function () {
              this.children.splice(0, this.children.length);
              return this;
            },
            mount: function (children) {
              if (this.children.find(item => item.id === children.id)) return this;
              this.children.push(children);
              return this;
            },
            unmount: function (children) {
              const index = this.children.findIndex(item => item.id === children.id);
              this.children.splice(index, 1);
              return this;
            }
          };
        },
        state: function (state, children) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.State,
            children,
            state,
            ...createNodeState()
          };
        },
        invert: function (children) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Invert,
            children,
            ...createNodeState()
          };
        },
        action: function (name, fn) {
          return {
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            name,
            type: NodeType.Action,
            fn,
            ...createNodeState()
          };
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22b826b1eeb62164a1d317e14ae9db38c053ea8e.js.map