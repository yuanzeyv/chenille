System.register(["__unresolved_0", "cc", "nanoid", "immer"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, nanoid, produce, applyPatches, enablePatches, _crd, NodeStatus, NodeType, _StoreKey, nodes;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
          var _children = Array.isArray(node.children) ? node.children : [node.children];

          var hasRunningChildren = _children.some(item => item.getValue(_StoreKey.Status) === NodeStatus.Running);

          var isSequence = node.type === NodeType.Sequence;
          var hasSequenceFinished = isSequence ? node.getValue(_StoreKey.SequenceIndex) + 1 === _children.length || node.getValue(_StoreKey.WasRun) === false : true;

          if (!hasRunningChildren && hasSequenceFinished) {
            node.setValue(_StoreKey.Status, NodeStatus.Ready);

            if (node.type === NodeType.Sequence) {
              node.setValue(_StoreKey.SequenceIndex, 0);
            }

            _children.forEach(item => {
              item.setValue(_StoreKey.Status, NodeStatus.Ready);
            });
          }

          for (var i = 0; i < _children.length; i++) {
            _resetFinalStates(_children[i], root);
          }

          break;
        }

      default:
        break;
    }

    node.setValue(_StoreKey.WasRun, false);
  }

  function _interpret(node, root, options) {
    if (options === void 0) {
      options = {
        props: {},
        setState: () => {}
      };
    }

    var {
      state
    } = root;
    node.setValue(_StoreKey.WasRun, true);

    switch (node.type) {
      case NodeType.Action:
        {
          var _status = node.getValue(_StoreKey.Status); // This is an async action


          if (_status === NodeStatus.Running) {
            var patches = node.getValue(_StoreKey.Patches); // If patches is not undefined then action has resolved and we can apply it's result to current state

            if (patches) {
              // Apply patches to current state
              var _nextState = (_crd && applyPatches === void 0 ? (_reportPossibleCrUseOfapplyPatches({
                error: Error()
              }), applyPatches) : applyPatches)(state, patches); // Reset patches array


              node.setValue(_StoreKey.Patches, undefined);
              node.setValue(_StoreKey.Status, NodeStatus.Success);
              root.state = _nextState;
              options.setState == null ? void 0 : options.setState(_nextState);
              root.tick(options.props);
              return NodeStatus.Success;
            }

            return _status;
          }

          bump(node);
          var nextState = (_crd && produce === void 0 ? (_reportPossibleCrUseOfproduce({
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

          var _status2 = _interpret(node.children, root, options);

          if (_status2 === NodeStatus.Failure) {
            node.setValue(_StoreKey.Status, NodeStatus.Success);
            return NodeStatus.Success;
          }

          if (_status2 === NodeStatus.Success) {
            node.setValue(_StoreKey.Status, NodeStatus.Failure);
            return NodeStatus.Failure;
          }

          return _status2;
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
          var states = [];

          for (var i = 0; i < node.children.length; i++) {
            node.children[i].parent = node;
            states[i] = _interpret(node.children[i], root, options);
          } // TODO: Make this a prop


          var nSuccess = states.filter(status => status === NodeStatus.Success).length; // TODO: Make this a prop

          var nFailure = states.filter(status => status === NodeStatus.Failure).length;

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
          var index = node.getValue(_StoreKey.SequenceIndex, 0);

          while (index < node.children.length) {
            var child = node.children[index];
            child.parent = node;

            var _status3 = _interpret(child, root, options);

            if (_status3 === NodeStatus.Success) {
              node.setValue(_StoreKey.SequenceIndex, ++index);
              continue;
            } else if (_status3 === NodeStatus.Running) {
              node.setValue(_StoreKey.Status, NodeStatus.Running);
              return NodeStatus.Running;
            } else if (_status3 === NodeStatus.Failure) {
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

          for (var _child of node.children) {
            _child.parent = node;

            var _status4 = _interpret(_child, root, options);

            if (_status4 === NodeStatus.Success || _status4 === NodeStatus.Running) {
              node.setValue(_StoreKey.Status, _status4);
              return _status4;
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
    var currentValue = node.getValue(_StoreKey.Count, 0);
    node.setValue(_StoreKey.Count, currentValue + 1);
  }

  function createNodeState(customState) {
    return {
      $nodeState: _extends({
        [_StoreKey.Count]: 0,
        [_StoreKey.WasRun]: false,
        [_StoreKey.Status]: NodeStatus.Ready
      }, customState),

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
        root: function root(name, childrenFactory) {
          var _this = this;

          return function (initialState, options) {
            if (options === void 0) {
              options = {
                props: {},
                setState: () => {}
              };
            }

            var registrations = {};

            var getListeners = function getListeners(type) {
              if (!(type in registrations)) registrations[type] = [];
              return registrations[type];
            };

            var root = _extends({
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

                var nodeStatus = _interpret(this.children, this, _extends({}, options, {
                  props
                }));

                _resetFinalStates(this.children, this);

                this.dispatchEvent(new CustomEvent('tickend'));
                return nodeStatus;
              },
              addEventListener: (type, listener) => {
                var listeners = getListeners(type);
                var index = listeners.indexOf(listener);
                if (index === -1) registrations[type].push(listener);
              },
              removeEventListener: (type, listener) => {
                var listeners = getListeners(type);
                var index = listeners.indexOf(listener);
                if (index !== -1) registrations[type].splice(index, 1);
              },
              dispatchEvent: event => {
                var listeners = getListeners(event.type).slice();

                for (var i = 0; i < listeners.length; i++) {
                  listeners[i].call(_this, event);
                }

                return !event.defaultPrevented;
              }
            }, createNodeState());

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
        selector: function selector(children) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Selector,
            children
          }, createNodeState());
        },

        /**
         * Runs each child node one by one. Fails for the first child node that fails. Moves to the next child when the current running child succeeds. Stays on the current child node while it returns running. Succeeds when all child nodes have succeeded.
         */
        sequence: function sequence(children) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Sequence,
            children
          }, createNodeState({
            [_StoreKey.SequenceIndex]: 0
          }));
        },

        /**
         * Runs all child nodes in parallel. Continues to run until a required number of child nodes have either failed or succeeded.
         */
        parallel: function parallel(children) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Parallel,
            children
          }, createNodeState());
        },
        condition: function condition(name, fn) {
          return _extends({
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
            }
          }, createNodeState());
        },
        portal: function portal() {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Portal,
            children: []
          }, createNodeState(), {
            clear: function clear() {
              this.children.splice(0, this.children.length);
              return this;
            },
            mount: function mount(children) {
              if (this.children.find(item => item.id === children.id)) return this;
              this.children.push(children);
              return this;
            },
            unmount: function unmount(children) {
              var index = this.children.findIndex(item => item.id === children.id);
              this.children.splice(index, 1);
              return this;
            }
          });
        },
        state: function (_state) {
          function state(_x, _x2) {
            return _state.apply(this, arguments);
          }

          state.toString = function () {
            return _state.toString();
          };

          return state;
        }(function (state, children) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.State,
            children,
            state
          }, createNodeState());
        }),
        invert: function invert(children) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            type: NodeType.Invert,
            children
          }, createNodeState());
        },
        action: function action(name, fn) {
          return _extends({
            id: (_crd && nanoid === void 0 ? (_reportPossibleCrUseOfnanoid({
              error: Error()
            }), nanoid) : nanoid)(),
            name,
            type: NodeType.Action,
            fn
          }, createNodeState());
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b0cfb554c84c935fed4c8d717602cd492732403.js.map