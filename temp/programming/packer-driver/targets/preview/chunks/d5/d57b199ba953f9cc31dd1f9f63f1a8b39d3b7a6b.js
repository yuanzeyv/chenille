System.register(["__unresolved_0", "benchmark", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_benchmark) {
      _req = _benchmark.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * Just a small benchmarking script, just for the sake of it.
         *
         * Run with `npx babel-node src/benchmark.js`
         *
         * My last run:
         * without introspection x 111,056 ops/sec ±1.36% (91 runs sampled)
         * with introspection x 48,040 ops/sec ±2.06% (89 runs sampled)
         * task without introspection x 390,802 ops/sec ±0.86% (88 runs sampled)
         * task with introspection x 243,472 ops/sec ±1.20% (93 runs sampled)
         */
        var Benchmark = require('benchmark');

        var {
          SUCCESS,
          BehaviorTree,
          Sequence,
          Task,
          Introspector,
          Decorator
        } = require('./index.node.js');

        var suite = new Benchmark.Suite();
        var task1 = new Task({
          start: function start(blackboard) {
            ++blackboard.start1;
          },
          end: function end(blackboard) {
            ++blackboard.end1;
          },
          run: function run(blackboard) {
            ++blackboard.run1;
            return SUCCESS;
          }
        });
        var task2 = new Task({
          start: function start(blackboard) {
            ++blackboard.start2;
          },
          end: function end(blackboard) {
            ++blackboard.end2;
          },
          run: function run(blackboard) {
            ++blackboard.run2;
            return blackboard.task2Result;
          }
        });
        var task3 = new Task({
          start: function start(blackboard) {
            ++blackboard.start3;
          },
          end: function end(blackboard) {
            ++blackboard.end3;
          },
          run: function run(blackboard) {
            ++blackboard.run3;
            return SUCCESS;
          }
        });
        var decoratedTask2 = new Decorator({
          start: function start(blackboard) {
            ++blackboard.startDeco;
          },
          end: function end(blackboard) {
            ++blackboard.endDeco;
          },
          node: task2
        });
        var sequence = new Sequence({
          start: function start(blackboard) {
            ++blackboard.startSeq;
          },
          end: function end(blackboard) {
            ++blackboard.endSeq;
          },
          nodes: [task1, decoratedTask2, task3]
        });
        var blackboard = {
          task2Result: SUCCESS,
          start1: 0,
          run1: 0,
          end1: 0,
          start2: 0,
          run2: 0,
          end2: 0,
          start3: 0,
          run3: 0,
          end3: 0,
          startSeq: 0,
          endSeq: 0,
          startDeco: 0,
          endDeco: 0
        };
        var bTree = new BehaviorTree({
          tree: sequence,
          blackboard
        });
        var introspector = new Introspector();
        var taskTree = new BehaviorTree({
          tree: task1,
          blackboard
        }); // add tests

        suite.add('without introspection', function () {
          bTree.step();
        }).add('with introspection', function () {
          bTree.step({
            introspector
          });
        }).add('task without introspection', function () {
          taskTree.step();
        }).add('task with introspection', function () {
          taskTree.step({
            introspector
          });
        }) // add listeners
        .on('cycle', function (event) {
          console.log(String(event.target));
        }).on('complete', function () {
          console.log('Fastest is ' + this.filter('fastest').map('name'));
        }) // run async
        .run({
          async: true
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'benchmark': _req,
        './index.node.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=d57b199ba953f9cc31dd1f9f63f1a8b39d3b7a6b.js.map