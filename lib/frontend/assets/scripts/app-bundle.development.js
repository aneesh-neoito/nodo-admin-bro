var AdminBro = (function (React, reactRedux, reactRouterDom, styled, reactI18next, i18n, DesignSystem, reactRouter, axios, flat$1, Select, Select$1, reactDom, redux) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
	var DesignSystem__namespace = /*#__PURE__*/_interopNamespace(DesignSystem);
	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
	var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
	var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Base Params for a any function
	 * @alias ActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    var _globalAny$REDUX_STAT;

	    return options || ((_globalAny$REDUX_STAT = globalAny$2.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths);
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }
	  /**
	   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  editUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'edit',
	      search
	    });
	  }
	  /**
	   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  showUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'show',
	      search
	    });
	  }
	  /**
	   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  deleteUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'delete',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  newUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'new',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  listUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'list',
	      search
	    });
	  }
	  /**
	   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {Array<string>} recordIds   separated by comma records
	   * @param {string} [search]        optional query string
	   */


	  bulkDeleteUrl(resourceId, recordIds, search) {
	    return this.bulkActionUrl({
	      resourceId,
	      recordIds,
	      actionName: 'bulkDelete',
	      search
	    });
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   * @param   {string}  [options.search]        optional query string
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {Array<string>}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @return {string}
	   */


	  assetPath(asset) {
	    if (this.options.assetsCDN) {
	      const url = new URL(asset, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	module.exports["default"] = module.exports, module.exports.__esModule = true;
	});

	var _extends = /*@__PURE__*/getDefaultExportFromCjs(_extends_1);

	/**
	 * @private
	 *
	 * @classdesc
	 * Overrides one of the component form AdminBro core when user pass its name to
	 * {@link AdminBro.bundle} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * AdminBro.bundle('./path/to/component', 'SidebarFooter')
	 */
	function allowOverride(OriginalComponent, name) {
	  // ssr
	  if (typeof window === 'undefined') {
	    return OriginalComponent;
	  }

	  const WrapperComponent = props => {
	    let globalAny = window;
	    globalAny = window;
	    let Component = OriginalComponent;

	    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
	      Component = globalAny.AdminBro.UserComponents[name];
	      return /*#__PURE__*/React__default['default'].createElement(Component, _extends({}, props, {
	        OriginalComponent: OriginalComponent
	      }));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Component, props);
	  };

	  return WrapperComponent;
	}

	const StyledLogo = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__StyledLogo",
	  componentId: "sc-1ozeetj-0"
	})(["text-align:center;display:flex;align-content:center;justify-content:center;flex-shrink:0;padding:", " ", " ", ";text-decoration:none;& > h1{text-decoration:none;font-weight:", ";font-size:", ";color:", ";font-size:", ";line-height:", ";}& > img{max-width:170px;}&:hover h1{color:", ";}"], DesignSystem.themeGet('space', 'lg'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('colors', 'grey80'), DesignSystem.themeGet('fontSizes', 'xl'), DesignSystem.themeGet('lineHeights', 'xl'), DesignSystem.themeGet('colors', 'primary100'));
	const h$4 = new ViewHelpers();

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  return /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
	    className: DesignSystem.cssClass('Logo'),
	    to: h$4.dashboardUrl()
	  }, logo ? /*#__PURE__*/React__default['default'].createElement("img", {
	    src: logo,
	    alt: companyName
	  }) : /*#__PURE__*/React__default['default'].createElement("h1", null, companyName));
	};

	var SidebarBranding$1 = allowOverride(SidebarBranding, 'SidebarBranding');

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto$1.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;

	/** Used to compose unicode capture groups. */
	var rsCombo$2 = '[' + rsComboRange$3 + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo$2, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange$2 = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$1 = '[' + rsComboRange$2 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = _createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst_1(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  var _realOptions$defaultV;

	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return (_realOptions$defaultV = realOptions.defaultValue) !== null && _realOptions$defaultV !== void 0 ? _realOptions$defaultV : startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'admin-bro'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * @classdesc
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 * @returns {UseTranslationResponse}
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = reactI18next.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	const h$3 = new ViewHelpers();

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();

	  if (!pages || !pages.length) {
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
	  }

	  const isActive = page => !!location.pathname.match(`/pages/${page.name}`);

	  const elements = pages.map(page => ({
	    id: page.name,
	    label: page.name,
	    isSelected: isActive(page),
	    icon: page.icon,
	    href: h$3.pageUrl(page.name),
	    onClick: (event, element) => {
	      event.preventDefault();

	      if (element.href) {
	        history.push(element.href);
	      }
	    }
	  }));
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('pages'),
	    elements: elements
	  });
	};

	const SidebarFooter = () => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	  mt: "lg"
	}, /*#__PURE__*/React__default['default'].createElement(DesignSystem.SoftwareBrothers, null));

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminBro API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'admin-bro'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 * @hideconstructor
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios__default['default'].create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    var _globalAny$REDUX_STAT;

	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, (_globalAny$REDUX_STAT = globalAny$1.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
	   * @param   {String}  options.query       query string
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', (recordIds || []).join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<AxiosResponse<any>>} response from the handler function defined in
	   *                                     {@link AdminBroOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<AxiosResponse<any>>}     response from the handler of given page
	   *                                            defined in {@link AdminBroOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const FORM_VALUE_NULL = '__FORM_VALUE_NULL__';
	const FORM_VALUE_EMPTY_OBJECT = '__FORM_VALUE_EMPTY_OBJECT__';
	const FORM_VALUE_EMPTY_ARRAY = '__FORM_VALUE_EMPTY_ARRAY__';

	const isObjectOrArray = value => typeof value === 'object' && value.constructor !== File && !(value instanceof Date);
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * FormData is required because we are sending files via the wire. But it has limitations.
	 * Namely it can only transport files and strings. That is why we have to convert some
	 * standard types like NULL to constants so they can be property converted back by the backend.
	 * And thus properly handled.
	 *
	 * @private
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */


	function paramsToFormData(params) {
	  const formData = new FormData(); // Assume that params are flatted

	  Object.entries(params).forEach(([key, value]) => {
	    // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
	    // them changed to "[object Object]" we have to set them to empty strings.
	    if (value === null) {
	      return formData.set(key, FORM_VALUE_NULL);
	    } // File objects has to go through because they are handled by FormData


	    if (isObjectOrArray(value)) {
	      if (Array.isArray(value)) {
	        return formData.set(key, FORM_VALUE_EMPTY_ARRAY);
	      }

	      return formData.set(key, FORM_VALUE_EMPTY_OBJECT);
	    } // Rest goes as a standard value


	    return formData.set(key, value);
	  });
	  return formData;
	}

	const ADD_NOTICE = 'ADD_NOTICE';
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: ADD_NOTICE,
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});

	/**
	 * @classdesc
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```javascript
	 * import { useNotice, Button } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 */
	const useNotice = () => {
	  const dispatch = reactRedux.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	const DELIMITER = '.';

	// this is the regex used to find all existing properties starting with a key
	const propertyKeyRegex = (propertyPath, options) => {
	  const delimiter = new RegExp(`\\${DELIMITER}`, 'g');
	  const escapedDelimiter = `\\${DELIMITER}`; // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
	  // and this is intentional because user can give an one index in property path for with deeply
	  // nested arrays

	  const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
	  const path = options !== null && options !== void 0 && options.includeAllSiblings ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
	  return new RegExp(`^${path}($|${escapedDelimiter})`, '');
	};

	/**
	 * @load ./select-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @param {GetOptions} [options]
	 * @returns {FlattenParams}
	 */
	const selectParams = (params, properties, options) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath, options);
	    const filtered = Object.keys(params) // filter all keys which starts with property path
	    .filter(key => key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	    return { ...globalMemo,
	      ...filtered
	    };
	  }, {});
	  return selected;
	};

	/**
	 * @load ./filter-out-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @returns {FlattenParams}
	 */
	const filterOutParams = (params, properties) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath);
	    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	  }, params);
	};

	/**
	 * @memberof module:flat
	 * @alias PathToPartsOptions
	 */

	/**
	 * @load ./path-to-parts.doc.md
	 * @param   {string}              propertyPath
	 * @param   {PathToPartsOptions}  options
	 * @returns  {PathParts}
	 *
	 * @memberof module:flat
	 * @alias pathToParts
	 */
	const pathToParts = (propertyPath, options = {}) => {
	  let allParts = propertyPath.split('.');

	  if (options.skipArrayIndexes) {
	    // eslint-disable-next-line no-restricted-globals
	    allParts = allParts.filter(part => isNaN(+part));
	  }

	  return allParts.reduce((memo, part) => {
	    if (memo.length) {
	      return [...memo, [memo[memo.length - 1], part].join('.')];
	    }

	    return [part];
	  }, []);
	};

	const isObject = value => {
	  // Node environment
	  if (typeof File === 'undefined') {
	    return typeof value === 'object' && value !== null;
	  } // Window environment


	  return typeof value === 'object' && !(value instanceof File) && value !== null;
	};
	/**
	 * @load ./set.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string} propertyPath
	 * @param {any} [value]       if not give function will only try to remove old keys
	 * @returns {FlattenParams}
	 */


	const set = (params = {}, propertyPath, value) => {
	  const regex = propertyKeyRegex(propertyPath); // remove all existing keys

	  const paramsCopy = Object.keys(params).filter(key => !key.match(regex)).reduce((memo, key) => {
	    memo[key] = params[key];
	    return memo;
	  }, {});

	  if (typeof value !== 'undefined') {
	    if (isObject(value) && !(value instanceof Date)) {
	      const flattened = flat$1.flatten(value);

	      if (Object.keys(flattened).length) {
	        Object.keys(flattened).forEach(key => {
	          paramsCopy[`${propertyPath}${DELIMITER}${key}`] = flattened[key];
	        });
	      } else if (Array.isArray(value)) {
	        paramsCopy[propertyPath] = [];
	      } else {
	        paramsCopy[propertyPath] = {};
	      }
	    } else {
	      paramsCopy[propertyPath] = value;
	    } // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
	    // nested should be removed


	    const parts = pathToParts(propertyPath).slice(0, -1);

	    if (parts.length) {
	      return Object.keys(paramsCopy).filter(key => !parts.includes(key)).reduce((memo, key) => {
	        memo[key] = paramsCopy[key];
	        return memo;
	      }, {});
	    }
	  }

	  return paramsCopy;
	};

	const TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
	/**
	 * @load ./get.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams}   params      flatten params from which property has to be taken
	 * @param {string}          [propertyPath]  name of the property
	 * @param {GetOptions}      options     options
	 * @returns {any}                       when property key exists directly it returns what is inside,
	 *                                      otherwise it tries to find any nested objects and returns
	 *                                      them
	 */

	const get = (params = {}, propertyPath, options) => {
	  if (!propertyPath) {
	    return flat$1.unflatten(params);
	  } // when object has this key - simply return it
	  // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
	  // undefined and in such case if would pass and function would return [undefined]


	  if (Object.keys(params).find(key => key === propertyPath)) {
	    return params[propertyPath];
	  }

	  const regex = propertyKeyRegex(propertyPath, options);
	  const selectedParams = selectParams(params, propertyPath, options);
	  const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index) => {
	    let newKey = key.replace(regex, `${TEMP_HOLDING_KEY}${DELIMITER}`); // when user wants to take allSiblings we have to fix the indexes so nested items from
	    // different siblings don't overlap
	    //
	    // Example for key `nested.1.el`:
	    //  'nested.0.el.0.value': 'val0.0',
	    //  'nested.0.el.1.value': 'val0.1',
	    //  'nested.1.el.0.value': 'val1',
	    //  'nested.1.el.1.value': 'val2',
	    //
	    // has to be changed to:
	    //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
	    //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
	    //  'TEMP_HOLDING_KEY.2.value': 'val1',
	    //  'TEMP_HOLDING_KEY.3.value': 'val2',

	    if (options !== null && options !== void 0 && options.includeAllSiblings) {
	      newKey = newKey.replace(new RegExp(`${TEMP_HOLDING_KEY}\\${DELIMITER}(\\d*)`), `${TEMP_HOLDING_KEY}${DELIMITER}${index}`);
	    }

	    memo[newKey] = selectedParams[key];
	    return memo;
	  }, {});

	  if (Object.keys(nestedProperties).length) {
	    return flat$1.unflatten(nestedProperties)[TEMP_HOLDING_KEY];
	  }

	  return undefined;
	};

	/**
	 * Merges params together and returns flatten result
	 *
	 * @param {any} params
	 * @param {Array<any>} ...mergeParams
	 * @returns {FlattenParams}
	 * @memberof module:flat
	 */

	const merge = (params = {}, ...mergeParams) => {
	  const flattenParams = flat$1.flatten(params); // reverse because we merge from right

	  return mergeParams.reverse().reduce((globalMemo, mergeParam) => Object.keys(mergeParam).reduce((memo, key) => set(memo, key, mergeParam[key]), globalMemo), flattenParams);
	};

	/**
	 * @load ./remove-path.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {...string} properties
	 * @returns {FlattenParams}
	 */

	const removePath = (params, path) => {
	  // by default simply filter out elements from the object
	  let filtered = filterOutParams(params, path); // reverse means that we iterate from the closes parent

	  const parentPaths = pathToParts(path).reverse(); // but if one of the parent is an array

	  parentPaths.find((parentPath, parentIndex) => {
	    const parent = get(params, parentPath);

	    if (Array.isArray(parent)) {
	      // previous element is stringified index like 'property.1'
	      const previousPaths = parentPaths[parentIndex - 1].split(DELIMITER); // so this is the index: 1

	      const previousPathIndex = previousPaths[previousPaths.length - 1];
	      parent.splice(+previousPathIndex, 1);
	      filtered = set(params, parentPath, parent); // this works just for the firstly found array item, because in case of removing the last one
	      // it leaves `[]` as a value.

	      return true;
	    }

	    return false;
	  });
	  return filtered;
	};

	/**
	 * @module flat
	 * @name flat
	 * @new in version 3.3
	 * @load ./flat.doc.md
	 */
	const flat = {
	  /**
	   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  flatten: flat$1.flatten,

	  /**
	   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  unflatten: flat$1.unflatten,
	  set,
	  get,
	  selectParams,
	  filterOutParams,
	  removePath,
	  DELIMITER,
	  pathToParts,
	  merge
	};

	/**
	 * HOF returning a function which takes a record and returns an updated record.
	 * This way we can pass this to setState in react, which takes old state
	 * (in our case previousRecord) as an argument.
	 *
	 * Function is used when to the {@link OnPropertyChange} callback, user passes
	 * key (property name) and the value (followed by an optional selectedRecord).
	 *
	 * The responsibility of the function is to:
	 * - clear old values under passed key: so when user passes property === `some.key`
	 *   function removes `some.key.1`, `some.key.2` etc
	 * - sets new value under the passed key for primitive types
	 * - in case of objects - it flattens them first and then sets all the resulted values
	 *   under the path provided in the property argument
	 * - it fills value in RecordJSON#populated when selectedRecord is given
	 * - finally it invalidates populated for given property
	 *
	 *
	 * @param {string}      property        property that must be updated, supports nesting
	 *                                      with dots
	 * @param {any}         value           value that must be set, undefined or null if
	 *                                      deleting, will be flattened
	 * @param {RecordJSON}  selectedRecord  if value is reference ID, this must be a record
	 *                                      it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, selectedRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = flat.set(previousRecord.params, property, value);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  }

	  if (selectedRecord) {
	    populatedCopy[property] = selectedRecord;
	    populatedModified = true;
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined' // user can pass property and omit value. This makes sense when
	// third argument of the function (selectedRecord) is passed to onChange
	// callback
	&& !(typeof propertyOrRecord === 'string') // we assume that only params has to be given
	&& propertyOrRecord.params);

	const filterRecordParams = function (record, options = {}) {
	  if (options.includeParams && record) {
	    return { ...record,
	      params: flat.selectParams(record.params || {}, options.includeParams)
	    };
	  }

	  return record;
	};
	const isPropertyPermitted = (propertyName, options = {}) => {
	  const {
	    includeParams
	  } = options;

	  if (includeParams) {
	    const parts = flat.pathToParts(propertyName, {
	      skipArrayIndexes: true
	    });
	    return parts.some(part => includeParams.includes(part));
	  }

	  return true;
	};

	const api$4 = new ApiClient();
	/**
	 * @load ./use-record.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {RecordJSON} [initialRecord],
	 * @param {string} resourceId
	 * @param {UseRecordOptions} [options]
	 * @return {UseRecordResult}
	 */

	const useRecord = (initialRecord, resourceId, options) => {
	  var _filteredRecord$param, _initialRecord$errors, _initialRecord$popula;

	  // setting up state
	  const [loading, setLoading] = React.useState(false);
	  const [isSynced, setIsSynced] = React.useState(true);
	  const [progress, setProgress] = React.useState(0);
	  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
	  const [record, setRecord] = React.useState({ ...filteredRecord,
	    params: (_filteredRecord$param = filteredRecord === null || filteredRecord === void 0 ? void 0 : filteredRecord.params) !== null && _filteredRecord$param !== void 0 ? _filteredRecord$param : {},
	    errors: (_initialRecord$errors = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && _initialRecord$errors !== void 0 ? _initialRecord$errors : {},
	    populated: (_initialRecord$popula = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && _initialRecord$popula !== void 0 ? _initialRecord$popula : {}
	  }); // it keeps the same format as useState function which can take either value or function

	  const setFilteredRecord = React.useCallback(value => {
	    const newRecord = value instanceof Function ? value(record) : value;
	    setRecord(filterRecordParams(newRecord, options));
	  }, [options, record]);
	  const onNotice = useNotice();
	  const handleChange = React.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (isEntireRecordGiven(propertyOrRecord, value)) {
	      setFilteredRecord(propertyOrRecord);
	    } else if (isPropertyPermitted(propertyOrRecord, options)) {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    } else {
	      // eslint-disable-next-line no-console
	      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
	    }

	    setIsSynced(false);
	  }, [setRecord, options]);
	  const handleSubmit = React.useCallback((customParams = {}, submitOptions) => {
	    setLoading(true);
	    const mergedParams = flat.merge(record.params, customParams);
	    const formData = paramsToFormData(mergedParams);
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = record.id ? api$4.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api$4.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if ((submitOptions === null || submitOptions === void 0 ? void 0 : submitOptions.updateOnSave) !== false) {
	        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
	      }

	      setProgress(0);
	      setLoading(false);
	      setIsSynced(true);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress, setRecord]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress,
	    setRecord: setFilteredRecord,
	    isSynced
	  };
	};

	const actionHasComponent = action => typeof action.component !== 'undefined' && action.component === false;

	const h$2 = new ViewHelpers();
	const actionHref = (action, params) => {
	  const actionName = action.name;

	  if (!action.component && !action.hasHandler) {
	    return null;
	  }

	  const hrefMap = {
	    record: () => h$2.recordActionUrl({ ...params,
	      actionName
	    }),
	    resource: () => h$2.resourceActionUrl({
	      resourceId: params.resourceId,
	      actionName
	    }),
	    bulk: () => h$2.bulkActionUrl({ ...params,
	      actionName
	    })
	  };

	  if (hrefMap[action.actionType]) {
	    return hrefMap[action.actionType]();
	  }

	  throw new Error('"actionType" should be either record, resource or bulk');
	};

	const api$3 = new ApiClient();
	function callActionApi(action, params, search) {
	  let promise;
	  const {
	    recordId,
	    recordIds,
	    resourceId
	  } = params;

	  switch (action.actionType) {
	    case 'record':
	      if (!recordId) {
	        throw new Error('You have to specify "recordId" for record action');
	      }

	      promise = api$3.recordAction({
	        resourceId,
	        actionName: action.name,
	        recordId,
	        search
	      });
	      break;

	    case 'resource':
	      promise = api$3.resourceAction({
	        resourceId,
	        actionName: action.name
	      });
	      break;

	    case 'bulk':
	      if (!recordIds) {
	        throw new Error('You have to specify "recordIds" for bulk action');
	      }

	      promise = api$3.bulkAction({
	        resourceId,
	        actionName: action.name,
	        recordIds,
	        search
	      });
	      break;

	    default:
	      throw new Error('"actionType" should be either record, resource or bulk');
	  }

	  return promise;
	}

	/* eslint-disable arrow-parens */
	const buildActionCallApiTrigger = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    search
	  } = options;

	  const callApi = () => {
	    const promise = callActionApi(action, params, search);
	    promise.then(actionResponseHandler).catch(error => {
	      throw error;
	    });
	    return promise;
	  };

	  return callApi;
	};

	const buildActionTestId = action => `action-${action.name}`;

	/* eslint-disable no-restricted-globals */
	const buildActionClickHandler = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    push
	  } = options;

	  const handleActionClick = event => {
	    event.preventDefault();
	    event.stopPropagation();
	    const href = actionHref(action, params);
	    const callApi = buildActionCallApiTrigger({
	      params,
	      action,
	      actionResponseHandler
	    });

	    if (action.guard && !confirm(action.guard)) {
	      return;
	    }

	    if (actionHasComponent(action)) {
	      callApi();
	    } else if (href) {
	      push(href);
	    }
	  };

	  return handleActionClick;
	};

	const REFRESH_KEY = 'refresh';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  var _ref;

	  const searchParamsIdx = url.lastIndexOf('?');
	  const urlSearchParams = searchParamsIdx !== -1 ? url.substring(searchParamsIdx + 1) : null;
	  const oldParams = (_ref = search !== null && search !== void 0 ? search : urlSearchParams) !== null && _ref !== void 0 ? _ref : window.location.search;
	  const newParams = new URLSearchParams(oldParams);
	  newParams.set(REFRESH_KEY, 'true');
	  const newUrl = searchParamsIdx !== -1 ? url.substring(0, searchParamsIdx) : url;
	  return `${newUrl}?${newParams.toString()}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const useActionResponseHandler = onActionCall => {
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  return response => {
	    const {
	      data
	    } = response;

	    if (data.notice) {
	      addNotice(data.notice);
	    }

	    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	      const appended = appendForceRefresh(data.redirectUrl);
	      history.push(appended);
	    }

	    if (onActionCall) {
	      onActionCall(data);
	    }
	  };
	};

	/**
	 * @load ./use-action.doc.md
	 * @subcategory Hooks
	 *
	 * @param {ActionJSON}   action      action object
	 * @param {ActionParams} params
	 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
	 * @return {UseActionResult}
	 * @new In version 3.3
	 * @class
	 * @hideconstructor
	 */

	function useAction(action, params, onActionCall) {
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(onActionCall);
	  const href = actionHref(action, params);
	  const callApi = buildActionCallApiTrigger({
	    action,
	    params,
	    actionResponseHandler
	  });
	  const handleClick = buildActionClickHandler({
	    action,
	    params,
	    actionResponseHandler,
	    push: history.push
	  });
	  return {
	    href,
	    callApi,
	    handleClick
	  };
	}

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';
	const setCurrentAdmin = (data = null) => ({
	  type: SESSION_INITIALIZE,
	  data
	});

	/**
	 * @classdesc
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ### Usage
	 *
	 * ```javascript
	 * import { useCurrentAdmin } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @returns {UseCurrentAdminResponse}
	 * @hideconstructor
	 */
	function useCurrentAdmin() {
	  const currentAdmin = reactRedux.useSelector(state => state.session);
	  const dispatch = reactRedux.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	}
	/**
	 * Result of the {@link useCurrentAdmin}.
	 * It is a tuple containing value and the setter
	 *
	 * @typedef {Array} UseCurrentAdminResponse
	 * @memberof useCurrentAdmin
	 * @alias UseCurrentAdminResponse
	 * @property {CurrentAdmin | null} [0]    current admin
	 * @property {React.Dispatch<React.SetStateAction<CurrentAdmin>>} [1]    value setter compatible
	 *                                                                       with react useState
	 */

	/* eslint-disable no-console */

	/**
	 * @load ./use-local-storage.doc.md
	 * @subcategory Hooks
	 * @class
	 * @see https://usehooks.com/useLocalStorage
	 *
	 * @param {string} key          key under which hook will store the data
	 * @param {T}      initialValue    value which will be stringified and stored
	 * @return {UseLocalStorageResult<T>}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useLocalStorage(key, initialValue) {
	  // State to store our value
	  // Pass initial state function to useState so logic is only executed once
	  const [storedValue, setStoredValue] = React.useState(() => {
	    try {
	      // Get from local storage by key
	      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

	      return item ? JSON.parse(item) : initialValue;
	    } catch (error) {
	      // If error also return initialValue
	      console.log(error);
	      return initialValue;
	    }
	  }); // Return a wrapped version of useState's setter function that ...
	  // ... persists the new value to localStorage.

	  const setValue = value => {
	    try {
	      // Allow value to be a function so we have same API as useState
	      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

	      setStoredValue(valueToStore); // Save to local storage

	      window.localStorage.setItem(key, JSON.stringify(valueToStore));
	    } catch (error) {
	      // A more advanced implementation would handle the error case
	      console.log(error);
	    }
	  };

	  return [storedValue, setValue];
	}

	const isSelected = (href, location) => {
	  const regExp = new RegExp(`${href}($|/)`);
	  return !!location.pathname.match(regExp);
	};

	function useNavigationResources(resources) {
	  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
	  const history = reactRouter.useHistory();
	  const location = reactRouter.useLocation();
	  const enrichResource = React.useMemo(() => (resource, icon) => ({
	    href: resource.href || undefined,
	    icon,
	    isSelected: isSelected(resource.href, location),
	    label: resource.name,
	    id: resource.id,
	    onClick: event => {
	      if (resource.href) {
	        event.preventDefault();
	        history.push(resource.href);
	      }
	    }
	  }), [location, history]); // grouping resources into parents

	  const map = resources.filter(res => res.href) // first filter out resource which are not visible
	  .reduce((memo, resource) => {
	    var _resource$navigation, _resource$navigation3;

	    // in case resource has the same name as parent we namespace it wit "resource-""
	    const key = ((_resource$navigation = resource.navigation) === null || _resource$navigation === void 0 ? void 0 : _resource$navigation.name) || ['resource', resource.name].join('-');

	    if (!resource.navigation || resource.navigation.name === null) {
	      var _resource$navigation2;

	      memo[key] = enrichResource(resource, (_resource$navigation2 = resource.navigation) === null || _resource$navigation2 === void 0 ? void 0 : _resource$navigation2.icon);
	    } else if (memo[key] && memo[key].elements && (_resource$navigation3 = resource.navigation) !== null && _resource$navigation3 !== void 0 && _resource$navigation3.name) {
	      memo[key].elements.push(enrichResource(resource));
	    } else {
	      var _resource$navigation4, _resource$navigation5;

	      memo[key] = {
	        elements: [enrichResource(resource)],
	        label: (_resource$navigation4 = resource.navigation) === null || _resource$navigation4 === void 0 ? void 0 : _resource$navigation4.name,
	        icon: (_resource$navigation5 = resource.navigation) === null || _resource$navigation5 === void 0 ? void 0 : _resource$navigation5.icon,
	        onClick: () => setOpenElements({ ...openElements,
	          [key]: !openElements[key]
	        }),
	        isOpen: !!openElements[key]
	      };
	    }

	    return memo;
	  }, {});
	  return Object.values(map);
	}

	const api$2 = new ApiClient();
	/**
	 * @load ./use-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 *
	 * @param {string} resourceId      id of a resource for which you want to fetch records
	 * @return {UseRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */

	function useRecords(resourceId) {
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const [perPage, setPerPage] = React.useState(10);
	  const [page, setPage] = React.useState(1);
	  const [total, setTotal] = React.useState(0);
	  const [direction, setDirection] = React.useState('asc');
	  const [sortBy, setSortBy] = React.useState();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$2.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        history.push(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      history.replace([location.pathname, removeForceRefresh(location.search).toString()].join('?'));
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	}

	/**
	 * @load ./use-selected-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
	 * @return {UseSelectedRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useSelectedRecords(records) {
	  const [selectedRecords, setSelectedRecords] = React.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	}

	/**
	 * @load ./use-resource.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @new in version 3.3
	 * @bundle
	 * @param {string} resourceId    Id of a resource you want to get
	 */
	const useResource = resourceId => {
	  const resources = reactRedux.useSelector(state => state.resources);
	  const foundResource = resources.find(resource => resource.id === resourceId);
	  return foundResource;
	};

	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useRecord: useRecord,
		isEntireRecordGiven: isEntireRecordGiven,
		FORM_VALUE_NULL: FORM_VALUE_NULL,
		FORM_VALUE_EMPTY_OBJECT: FORM_VALUE_EMPTY_OBJECT,
		FORM_VALUE_EMPTY_ARRAY: FORM_VALUE_EMPTY_ARRAY,
		paramsToFormData: paramsToFormData,
		updateRecord: updateRecord,
		useAction: useAction,
		useActionResponseHandler: useActionResponseHandler,
		useCurrentAdmin: useCurrentAdmin,
		useLocalStorage: useLocalStorage,
		useNavigationResources: useNavigationResources,
		useNotice: useNotice,
		useRecords: useRecords,
		useSelectedRecords: useSelectedRecords,
		useTranslation: useTranslation,
		useResource: useResource
	});

	/**
	 * @alias SidebarResourceSectionProps
	 * @memberof SidebarResourceSection
	 */

	/**
	 * Groups resources by sections and renders the list in {@link Sidebar}
	 *
	 * ### Usage
	 *
	 * ```
	 * import { SidebarResourceSection } from 'admin-bro`
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @name SidebarResourceSection
	 */
	const SidebarResourceSectionOriginal = ({
	  resources
	}) => {
	  const elements = useNavigationResources(resources);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('navigation'),
	    elements: elements
	  });
	}; // Rollup cannot handle type exports well - that is why we need to do this hack with
	// exporting default and named SidebarResourceSection


	const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');

	const StyledSidebar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "sidebar__StyledSidebar",
	  componentId: "z5zut0-0"
	})(["transition:left 0.3s;top:0;bottom:0;flex-shrink:0;overflow-y:auto;&.hidden{left:-", ";}&.visible{left:0;}"], DesignSystem.themeGet('sizes', 'sidebarWidth'));
	StyledSidebar.defaultProps = {
	  position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
	  width: 'sidebarWidth',
	  borderRight: 'default',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 50,
	  bg: 'white'
	};

	const Sidebar = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = reactRedux.useSelector(state => [state.branding, state.resources, state.pages]);
	  return /*#__PURE__*/React__default['default'].createElement(StyledSidebar, {
	    className: isVisible ? 'visible' : 'hidden'
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarBranding$1, {
	    branding: branding
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Resources')
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarResourceSection, {
	    resources: resources
	  })), /*#__PURE__*/React__default['default'].createElement(SidebarPages, {
	    pages: pages
	  }), (branding === null || branding === void 0 ? void 0 : branding.softwareBrothers) && /*#__PURE__*/React__default['default'].createElement(SidebarFooter$1, null));
	};

	var Sidebar$1 = allowOverride(Sidebar, 'Sidebar');

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const dropActions = [{
	    label: translateButton('logout'),
	    onClick: event => {
	      event.preventDefault();
	      window.location.href = paths.logoutPath;
	    },
	    icon: 'Logout'
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CurrentUserNav, {
	    name: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl,
	    dropActions: dropActions
	  }));
	};

	const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default['default'](DesignSystem.Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "rgspw3-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};
	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: DesignSystem.cssClass('Version')
	  }, admin && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const NavBar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-1qk1nql-0"
	})(["height:", ";border-bottom:", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, DesignSystem.themeGet('borders', 'default'), ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: DesignSystem.cssClass('NavBar')
	};
	const TopBar = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = reactRedux.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default['default'].createElement(NavBar, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default['default'].createElement(Version, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default['default'].createElement(OverridableLoggedIn, {
	    session: session,
	    paths: paths
	  }) : '');
	};
	var TopBar$1 = allowOverride(TopBar, 'Topbar');

	const DROP_NOTICE = 'DROP_NOTICE';
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';
	const setNoticeProgress = data => ({
	  type: SET_NOTICE_PROGRESS,
	  data
	});

	const TIME_TO_DISAPPEAR = 3;
	class NoticeElement extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      "data-testid": "notice-wrapper"
	    }, /*#__PURE__*/React__default['default'].createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement("div", null);
	};

	const mapStateToProps$4 = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps$1 = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	const ConnectedNoticeBox = reactRedux.connect(mapStateToProps$4, mapDispatchToProps$1)(NoticeBox);

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;
	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "relative",
	    overflow: "hidden"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    opacity: 0.8
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminbro.com/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminbro.com/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminbro.com/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminbro.com/tutorial-rbac.html'
	}];

	const Card = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "y6jxa9-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};
	const Dashboard$2 = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(DashboardHeader, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default['default'].createElement(DesignSystem.Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    href: box.href
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, box.subtitle))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('community_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/admin-bro/issues"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SoftwareBrothersLogo"
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    as: "a",
	    variant: "primary",
	    href: "https://softwarebrothers.co/services"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, error.toString()), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminBro.UserComponents[dashboard.component]) {
	      Component = AdminBro.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard$2;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$3 = state => ({
	  dashboard: state.dashboard
	});

	var Dashboard$1 = reactRedux.connect(mapStateToProps$3)(Dashboard);

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), label);
	};

	const PropertyLabel = props => {
	  const {
	    property,
	    props: labelProps
	  } = props;

	  if (property.hideLabel) {
	    return null;
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, _extends({
	    htmlFor: property.path,
	    required: property.isRequired
	  }, labelProps), property.label);
	};

	/**
	 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
	 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
	 * ,because it was already handled, so that itemRenderer can render property as a regular one
	 *
	 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
	 * @param {Number}        index         index under which sub-property should be placed
	 * @private
	 * @hide
	 */
	const convertToSubProperty$1 = (arrayProperty, index) => ({ ...arrayProperty,
	  path: [arrayProperty.path, index].join(DELIMITER),
	  label: `[${index + 1}]`,
	  isArray: false
	});

	/**
	 * Removes selected array item from given record. It performs following tasks:
	 * 1. removes array item from the array
	 * 2. reorders keys in new array item
	 * 3. if property has populated fields it also reorders them
	 * it uses {@link flat } module and its removePath method
	 *
	 * @param {RecordJSON} record
	 * @param {string}     subPropertyPath            which has to be removed. It has to be flattened
	 *                                                in notation, and ending with array index
	 * @private
	 * @hide
	 */
	const removeSubProperty = (record, subPropertyPath) => {
	  // by default populated is flatten just to the path level - object itself is not flatten. That is
	  // why we have to retrieve the original state. That is why we have to replace record.populated to
	  // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
	  // then remove keys, and refill back some.nested.1.key to the value from the original populated
	  // object.
	  const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey) => ({ ...memo,
	    [propertyKey]: propertyKey
	  }), {});
	  const newPopulatedKeyMap = flat.removePath(populatedKeyMap, subPropertyPath);
	  const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey]) => ({ ...memo,
	    [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey === null || oldPropertyKey === void 0 ? void 0 : oldPropertyKey.toString()]
	  }), {});
	  return { ...record,
	    params: flat.removePath(record.params, subPropertyPath),
	    populated: newPopulated
	  };
	};

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    onDelete
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center",
	    "data-testid": property.path
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(ItemComponent, props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    ml: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "default",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event, property),
	    variant: "danger"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  }))));
	};

	const InputsInSection = props => {
	  const {
	    property,
	    record,
	    resource,
	    onChange
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  const addNew = React.useCallback(event => {
	    const newItems = [...items, property.subProperties.length ? {} : ''];
	    onChange(property.path, newItems);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const removeItem = React.useCallback((event, subProperty) => {
	    const newRecord = removeSubProperty(record, subProperty.path);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, {
	    mt: "xl"
	  }, items.map((item, i) => {
	    const itemProperty = convertToSubProperty$1(props.property, i);
	    return /*#__PURE__*/React__default['default'].createElement(ItemRenderer, _extends({}, props, {
	      property: itemProperty,
	      key: itemProperty.path,
	      onDelete: removeItem
	    }));
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    onClick: addNew,
	    type: "button",
	    rounded: true
	  }, /*#__PURE__*/React__default['default'].createElement(AddNewItemButton, {
	    resource: resource,
	    property: property
	  })));
	};

	const Edit$9 = props => {
	  const {
	    property,
	    record,
	    testId
	  } = props;
	  const error = record.errors && record.errors[property.propertyPath];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(InputsInSection, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const List$7 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const values = flat.get(record.params, property.path) || [];
	  return /*#__PURE__*/React__default['default'].createElement("span", null, `length: ${values.length}`);
	};

	class Show$8 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record,
	      ItemComponent
	    } = this.props;
	    const items = flat.get(record.params, property.path) || [];
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, (items || []).map((item, i) => {
	      const itemProperty = convertToSubProperty$1(property, i);
	      return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, this.props, {
	        key: itemProperty.path,
	        property: itemProperty
	      }));
	    })));
	  }

	}

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$8,
		edit: Edit$9,
		list: List$7
	});

	function convertToSubProperty(property, subProperty) {
	  return { ...subProperty,
	    path: [property.path, subProperty.name].join(DELIMITER)
	  };
	}

	const Edit$8 = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const Show$7 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })));
	};

	// TODO: define ItemComponent interface
	class List$6 extends React__default['default'].PureComponent {
	  renderItems() {
	    const {
	      property,
	      ItemComponent
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	      const subPropertyWithPath = convertToSubProperty(property, subProperty);
	      return /*#__PURE__*/React__default['default'].createElement("div", {
	        key: subPropertyWithPath.path
	      }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	        inline: true
	      }, `${subProperty.label}: `), /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends({}, this.props, {
	        property: subPropertyWithPath
	      })));
	    }));
	  }

	  render() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const showAction = record.recordActions.find(a => a.name === 'show');

	    if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
	      const h = new ViewHelpers();
	      const href = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: 'show'
	      });
	      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
	        to: href
	      }, this.renderItems());
	    }

	    return this.renderItems();
	  }

	}

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$7,
		edit: Edit$8,
		list: List$6
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, null, (option === null || option === void 0 ? void 0 : option.label) || rawValue);
	  }

	  return rawValue;
	};

	class Show$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props));
	  }

	}

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.path];
	  const nextValue = nextProps.record.params[nextProps.property.path];
	  const prevError = prevProps.record.errors[prevProps.property.path];
	  const nextError = nextProps.record.errors[nextProps.property.path];
	  return prevValue === nextValue && prevError === nextError;
	};

	const Edit$7 = props => {
	  var _record$errors;

	  const {
	    property,
	    record
	  } = props;
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), property.availableValues ? /*#__PURE__*/React__default['default'].createElement(SelectEdit, props) : /*#__PURE__*/React__default['default'].createElement(TextEdit, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const SelectEdit = props => {
	  var _record$params$proper, _record$params;

	  const {
	    theme,
	    record,
	    property,
	    onChange
	  } = props;

	  if (!property.availableValues) {
	    return null;
	  }

	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const styles = DesignSystem.selectStyles(theme);
	  const selected = property.availableValues.find(av => av.value === propValue);
	  return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], _extends({
	    isClearable: true,
	    styles: styles,
	    value: selected,
	    options: property.availableValues,
	    onChange: s => {
	      var _s$value;

	      return onChange(property.path, (_s$value = s === null || s === void 0 ? void 0 : s.value) !== null && _s$value !== void 0 ? _s$value : '');
	    },
	    isDisabled: property.isDisabled
	  }, property.props));
	};

	const TextEdit = props => {
	  var _record$params$proper2, _record$params2;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = (_record$params$proper2 = (_record$params2 = record.params) === null || _record$params2 === void 0 ? void 0 : _record$params2[property.path]) !== null && _record$params$proper2 !== void 0 ? _record$params$proper2 : '';
	  const [value, setValue] = React.useState(propValue);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value) // handle clicking ENTER
	    ,
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props));
	};

	var edit$6 = styled.withTheme( /*#__PURE__*/React.memo(Edit$7, recordPropertyIsEqual));

	class Filter$4 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  renderInput() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const filterKey = `filter-${property.path}`;
	    const value = filter[property.path] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        styles: DesignSystem.filterStyles(theme),
	        onChange: this.handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, {
	      name: filterKey,
	      onChange: this.handleInputChange,
	      value: value
	    });
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	      variant: "filter"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), this.renderInput());
	  }

	}

	var filter$2 = styled.withTheme(Filter$4);

	class List$5 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props);
	  }

	}

	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$6,
		edit: edit$6,
		filter: filter$2,
		list: List$5
	});

	const parseValue = value => !(!value || value === 'false');

	const Edit$6 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.path]);
	  const error = record.errors && record.errors[property.path];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.path, !value);
	    }
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, _extends({
	    id: property.path,
	    name: property.path,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property,
	    props: {
	      inline: true
	    }
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$5 = /*#__PURE__*/React.memo(Edit$6, recordPropertyIsEqual);

	var mapValue$1 = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue$1(rawValue);
	  const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	class Show$5 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props));
	  }

	}

	class List$4 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props);
	  }

	}

	class Filter$3 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  render() {
	    const {
	      property,
	      filter = {},
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const options = [{
	      value: true,
	      label: mapValue$1(true)
	    }, {
	      value: false,
	      label: mapValue$1(false)
	    }];
	    const selected = options.find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      options: options,
	      styles: DesignSystem.filterStyles(theme),
	      onChange: this.handleChange
	    }));
	  }

	}

	var filter$1 = styled.withTheme(Filter$3);

	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$5,
		show: Show$5,
		list: List$4,
		filter: filter$1
	});

	const Edit$5 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.path] || '';
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, _extends({
	    value: value,
	    disabled: property.isDisabled,
	    onChange: data => onChange(property.path, data),
	    propertyType: property.type
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$4 = /*#__PURE__*/React.memo(Edit$5, recordPropertyIsEqual);

	var mapValue = ((value, propertyType) => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);

	  if (date) {
	    return DesignSystem.formatDateProperty(date, propertyType);
	  }

	  return '';
	});

	class Show$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value);
	  }

	}

	class List$3 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	  }

	}

	const PARAM_SEPARATOR$1 = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$2 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat$1.unflatten(flat$1.flatten(filters), {
	      delimiter: PARAM_SEPARATOR$1
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$2.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => {
	      memo[path] = {
	        path,
	        property: this.resource.property(path),
	        value: normalized[path]
	      };
	      return memo;
	    }, {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate() {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      var _this$resource$decora;

	      const key = keys[index];
	      const referenceResource = (_this$resource$decora = this.resource.decorate().getPropertyByKey(key)) === null || _this$resource$decora === void 0 ? void 0 : _this$resource$decora.reference();

	      if (referenceResource) {
	        this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR$1,
		Filter: Filter$2,
		'default': Filter$2
	});

	const {
	  PARAM_SEPARATOR
	} = BackendFilter;

	const Filter$1 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const fromKey = `${property.path}${PARAM_SEPARATOR}from`;
	  const toKey = `${property.path}${PARAM_SEPARATOR}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, "- From: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: fromValue,
	    onChange: data => onChange(fromKey, data),
	    propertyType: property.type
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	    mt: "default"
	  }, "- To: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: toValue,
	    onChange: data => onChange(toKey, data),
	    propertyType: property.type
	  })));
	};

	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$4,
		show: Show$4,
		list: List$3,
		filter: Filter$1
	});

	const Edit$4 = props => {
	  var _record$params$proper, _record$params;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const error = record.errors && record.errors[property.path];
	  const {
	    props: propertyProps
	  } = property;
	  const {
	    quill = {},
	    ...customProps
	  } = propertyProps || {};
	  quill.theme = quill.theme || 'snow';
	  quill.modules = {
	    toolbar: DesignSystem.DefaultQuillToolbarOptions,
	    ...(quill.modules || {})
	  };
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.RichText, _extends({}, customProps, {
	    value: value,
	    onChange: content => onChange(property.path, content),
	    quill: quill
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$3 = /*#__PURE__*/React.memo(Edit$4, recordPropertyIsEqual);

	class Show$3 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.contentRef = /*#__PURE__*/React__default['default'].createRef();
	  }

	  componentDidMount() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path];
	    this.contentRef.current.innerHTML = value;
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      variant: "grey",
	      border: "default"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	      ref: this.contentRef
	    })));
	  }

	}

	const List$2 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const original = record.params[property.path] || '';
	  const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		show: Show$3,
		list: List$2
	});

	const Edit$3 = props => {
	  var _record$populated$pro;

	  const {
	    onChange,
	    property,
	    record,
	    theme
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.path}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.path, selected.value, selected.record);
	    } else {
	      onChange(property.path, null);
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record === null || record === void 0 ? void 0 : record.errors[property.path];
	  const selectedId = record === null || record === void 0 ? void 0 : record.params[property.path];
	  const [loadedRecord, setLoadedRecord] = React.useState();
	  const [loadingRecord, setLoadingRecord] = React.useState(0);
	  const selectedValue = (_record$populated$pro = record === null || record === void 0 ? void 0 : record.populated[property.path]) !== null && _record$populated$pro !== void 0 ? _record$populated$pro : loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  const styles = DesignSystem.selectStyles(theme);
	  React.useEffect(() => {
	    if (!selectedValue && selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedValue, selectedId, resourceId]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], _extends({
	    cacheOptions: true,
	    value: selectedOption,
	    styles: styles,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isClearable: true,
	    isDisabled: property.isDisabled,
	    isLoading: loadingRecord
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$2 = styled.withTheme(Edit$3);

	const StyledLink$1 = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "flgaqr-0"
	})(["", ";padding-left:", ";padding-right:", ";"], DesignSystem.ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.path];
	  const populated = record.populated[property.path];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.path}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default['default'].createElement(StyledLink$1, {
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	class Show$2 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    }));
	  }

	}

	class List$1 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    });
	  }

	}

	class Filter extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.api = new ApiClient();
	    this.options = [];
	    this.loadOptions = this.loadOptions.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, selected ? selected.value : '');
	  }

	  async loadOptions(inputValue) {
	    const {
	      property
	    } = this.props;
	    const records = await this.api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    this.options = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    return this.options;
	  }

	  render() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const selected = (this.options || []).find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      cacheOptions: true,
	      styles: DesignSystem.filterStyles(theme),
	      loadOptions: this.loadOptions,
	      onChange: this.handleChange,
	      defaultOptions: true
	    }));
	  }

	}

	var filter = styled.withTheme(Filter);

	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: Show$2,
		list: List$1,
		filter: filter
	});

	class Show$1 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path] || '';
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	    /*#__PURE__*/
	    // eslint-disable-next-line react/no-array-index-key
	    React__default['default'].createElement(React__default['default'].Fragment, {
	      key: i
	    }, line, /*#__PURE__*/React__default['default'].createElement("br", null))));
	  }

	}

	const Edit$2 = props => {
	  var _record$params$proper, _record$params, _record$errors;

	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const [value, setValue] = React.useState(propValue);
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$1 = /*#__PURE__*/React.memo(Edit$2, recordPropertyIsEqual);

	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$1,
		edit: edit$1
	});

	const Edit$1 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params[property.path];
	  const [value, setValue] = React.useState(propValue);
	  const error = record.errors && record.errors[property.path];
	  const [isInput, setIsInput] = React.useState(false);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.InputGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends({
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.path,
	    name: property.path,
	    onChange: event => setValue(event.target.value),
	    onBlur: () => onChange(property.path, value),
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value !== null && value !== void 0 ? value : '',
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit = /*#__PURE__*/React.memo(Edit$1, recordPropertyIsEqual);

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit
	});

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  mixed: null
	};
	/**
	 * @load ./base-property-component.doc.md
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @class
	 * @hideconstructor
	 */

	const BasePropertyComponent = props => {
	  const {
	    property: baseProperty,
	    resource,
	    record,
	    filter,
	    where,
	    onChange
	  } = props;
	  const property = React.useMemo(() => ({ ...baseProperty,
	    // we fill the path if it is not there. That is why all the actual Component Renderers are
	    // called with the path set to this root path. Next mixed and array components adds to this
	    // path either index (for array) or subProperty name.
	    path: baseProperty.path || baseProperty.propertyPath
	  }), [baseProperty]);
	  const testId = `property-${where}-${property.path}`;
	  let Component = types[property.type] && types[property.type][where] || defaultType[where];

	  if (property.components && property.components[where]) {
	    const component = property.components[where];

	    if (!component) {
	      throw new Error(`there is no "${property.path}.components.${where}"`);
	    }

	    Component = globalAny.AdminBro.UserComponents[component];
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      "data-testid": testId
	    }, /*#__PURE__*/React__default['default'].createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	  const Array = ArrayType[where];
	  const Mixed = MixedType[where];

	  if (baseProperty.isArray) {
	    if (!Array) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Array, _extends({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'mixed') {
	    if (!Mixed) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Mixed, _extends({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(Component, {
	    property: property,
	    resource: resource,
	    record: record,
	    filter: filter,
	    onChange: onChange,
	    where: where
	  })));
	};

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	const BasePropertyComponentExtended = Object.assign(BasePropertyComponent, {
	  DefaultType: camelizePropertyType(defaultType),
	  Boolean: camelizePropertyType(boolean),
	  DateTime: camelizePropertyType(datetime),
	  RichText: camelizePropertyType(richtext),
	  Reference: camelizePropertyType(reference),
	  TextArea: camelizePropertyType(textarea),
	  Password: camelizePropertyType(password)
	});

	const BreadcrumbLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "yjyesi-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Breadcrumbs')
	  }, /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, "Dashboard"), /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name), action && action.name !== 'list' && /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label));
	};

	const actionsToButtonGroup = options => {
	  const {
	    actions,
	    params,
	    handleClick
	  } = options;
	  const buttons = actions.map(action => {
	    const href = actionHref(action, params);
	    return {
	      icon: action.icon,
	      label: action.label,
	      variant: action.variant,
	      source: action,
	      href: href || undefined,
	      // when href is not defined - handle click should also be not defined
	      // This prevents from "cursor: pointer;"
	      onClick: href ? handleClick : undefined,
	      'data-testid': buildActionTestId(action),
	      buttons: []
	    };
	  }); // nesting buttons

	  const buttonsMap = buttons.reduce((memo, button) => {
	    const action = button.source;

	    if (action.parent) {
	      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
	        label: action.parent
	      };
	      parent.buttons = parent.buttons || [];
	      parent.buttons.push(button);
	      return { ...memo,
	        [action.parent]: parent
	      };
	    }

	    return { ...memo,
	      [button.source.name]: button
	    };
	  }, {});
	  return Object.values(buttonsMap);
	};

	const StyledLink = styled__default['default'](({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "styled-back-button__StyledLink",
	  componentId: "uyhg9d-0"
	})(["", ""], DesignSystem.ButtonCSS);
	const h$1 = new ViewHelpers();
	const StyledBackButton = props => {
	  const {
	    resourceId,
	    showInDrawer
	  } = props;
	  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  return /*#__PURE__*/React__default['default'].createElement(StyledLink, {
	    size: "icon",
	    to: h$1.resourceUrl({
	      resourceId,
	      search: window.location.search
	    }),
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: cssCloseIcon
	  }));
	};

	/* eslint-disable jsx-a11y/anchor-is-valid */
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeader = props => {
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(actionPerformed);

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const params = {
	    resourceId,
	    recordId: record === null || record === void 0 ? void 0 : record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const actionButtons = actionsToButtonGroup({
	    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
	    params,
	    handleClick: handleActionClick
	  });

	  if (toggleFilter) {
	    actionButtons.push({
	      label: translateButton('filter', resource.id),
	      onClick: toggleFilter,
	      icon: 'SettingsAdjust'
	    });
	  } // list and new actions are special and are are always


	  const customResourceButtons = actionsToButtonGroup({
	    actions: resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)),
	    params: {
	      resourceId
	    },
	    handleClick: handleActionClick
	  });
	  const title = action ? action.label : resource.name;
	  const isList = action && action.name === 'list';
	  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? DesignSystem.H3 : DesignSystem.H2;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass('ActionHeader')
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(Breadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: customResourceButtons
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(CssHComponent, {
	    mb: "lg"
	  }, !isList && listAction ? /*#__PURE__*/React__default['default'].createElement(StyledBackButton, {
	    resourceId: resourceId,
	    showInDrawer: action.showInDrawer
	  }) : '', title, tag ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: actionButtons
	  }))));
	};

	const LayoutElementRenderer = props => {
	  const {
	    layoutElement,
	    resource,
	    where,
	    record,
	    onChange
	  } = props;
	  const {
	    props: layoutProps,
	    properties: propertyNames,
	    layoutElements: innerLayoutElements,
	    component
	  } = layoutElement;
	  const {
	    children,
	    ...other
	  } = layoutProps;
	  const properties = propertyNames.map(name => resource.properties[name]);
	  const Component = DesignSystem__namespace[component];

	  if (!Component) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      size: "sm",
	      message: "Javascript Error",
	      variant: "danger",
	      py: "xl"
	    }, "There is no component by the name of", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, component), "in @admin-bro/design-system. Change", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, `@${component}`), "to available component like @Header");
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Component, other, properties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    key: property.propertyPath
	  }, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: where,
	    property: property,
	    resource: resource,
	    record: record,
	    onChange: onChange
	  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer, _extends({}, props, {
	    // eslint-disable-next-line react/no-array-index-key
	    key: i,
	    layoutElement: innerLayoutElement
	  }))), children);
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const Edit = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "show"
	  }))) : properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React.useState(recordFromProps);
	  const history = reactRouterDom.useHistory();
	  const handleActionCallback = React.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed, record]);
	  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
	  React.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const action = show || edit;

	  const handleClick = event => {
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      buildActionClickHandler({
	        action,
	        params: {
	          resourceId: resource.id,
	          recordId: record.id
	        },
	        actionResponseHandler,
	        push: history.push
	      })(event);
	    }
	  };

	  const actionParams = {
	    resourceId: resource.id,
	    recordId: record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params: actionParams,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const buttons = [{
	    icon: 'OverflowMenuHorizontal',
	    variant: 'light',
	    label: undefined,
	    'data-testid': 'actions-dropdown',
	    buttons: actionsToButtonGroup({
	      actions: recordActions,
	      params: actionParams,
	      handleClick: handleActionClick
	    })
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    onClick: handleClick,
	    "data-id": record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    style: {
	      cursor: 'pointer'
	    },
	    key: property.propertyPath,
	    "data-property-name": property.propertyPath,
	    display: display(property.isTitle)
	  }, isLoading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Placeholder, {
	    style: {
	      height: 14
	    }
	  }) : /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "list",
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: buttons
	  }) : ''));
	};

	class SortLink extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.isActive = this.isActive.bind(this);
	  }

	  isActive() {
	    const {
	      sortBy,
	      property
	    } = this.props;
	    return sortBy === property.propertyPath;
	  }

	  render() {
	    const {
	      property,
	      location,
	      direction
	    } = this.props;
	    const query = new URLSearchParams(location.search);
	    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
	    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	    query.set('direction', oppositeDirection);
	    query.set('sortBy', property.propertyPath);
	    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
	      to: {
	        search: query.toString()
	      },
	      className: DesignSystem.cssClass('SortLink')
	    }, property.label, this.isActive() ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	      icon: sortedByIcon,
	      color: "primary100",
	      ml: "default"
	    }) : '');
	  }

	}

	var SortLink$1 = reactRouterDom.withRouter(SortLink);

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.propertyPath === titleProperty.propertyPath;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default['default'].createElement(SortLink$1, props) : property.label);
	};

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeaderProps
	 */

	/**
	 * Prints `thead` section for table with records.
	 *
	 * ```
	 * import { RecordsTableHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */
	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableHead, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, onSelectAll ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default['default'].createElement(PropertyHeader, {
	    display: display(property.isTitle),
	    key: property.propertyPath,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	/**
	 * Renders Button which redirects to given action
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionButton } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */
	const ActionButton = props => {
	  const {
	    children,
	    action,
	    actionPerformed,
	    resourceId,
	    recordId,
	    recordIds
	  } = props;
	  const {
	    href,
	    handleClick
	  } = useAction(action, {
	    resourceId,
	    recordId,
	    recordIds
	  }, actionPerformed);

	  if (!action) {
	    return null;
	  }

	  const firstChild = React__default['default'].Children.toArray(children)[0];

	  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
	    throw new Error('ActionButton has to have one child');
	  }

	  const WrappedElement = /*#__PURE__*/React__default['default'].cloneElement(firstChild, {
	    onClick: handleClick,
	    'data-testid': buildActionTestId(action),
	    href
	  });
	  return WrappedElement;
	}; // TODO - remove this hack

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.InfoBox, {
	    title: translateMessage('noRecords', resource.id)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mb: "xxl"
	  }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default['default'].createElement(ActionButton, {
	    action: canCreate,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const params = {
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const bulkButtons = actionsToButtonGroup({
	    actions: getBulkActionsFromRecords(selectedRecords),
	    params,
	    handleClick: handleActionClick
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCaption, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    py: "sm",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Title, {
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: bulkButtons
	  })));
	};

	/**
	 * @classdesc
	 * Renders an entire records table. To fill the data you might need:
	 *
	 * - {@link useRecords} and
	 * - {@link useSelectedRecords} hooks
	 *
	 * so make sure to see at the documentation pages for both of them
	 *
	 * @component
	 * @class
	 * @hideconstructor
	 * @subcategory Application
	 * @new in version 3.3
	 */
	const RecordsTable = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(SelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords
	  }), /*#__PURE__*/React__default['default'].createElement(RecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(RecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const List = ({
	  resource,
	  setTag
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    history.push({
	      search: search.toString()
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(RecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * Higher Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'admin-bro/core'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => reactRedux.connect(null, mapDispatchToProps)(Component);

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice,
	    history
	  } = props;
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        history.push(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, action !== null && action !== void 0 && action.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, _extends({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	const FormattedBulkDelete = withNotice(reactRouter.withRouter(BulkDelete));

	const actions = {
	  new: New,
	  edit: Edit,
	  show: Show,
	  list: List,
	  bulkDelete: FormattedBulkDelete
	};

	const DOCS = 'https://adminbro.com';
	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  loginPath: '/admin/login',
	};

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminBro options
	 * const AdminBroOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: AdminBro.bundle('./my-new-action'),
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'admin-bro'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminBro.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag
	    }));
	  }

	  return Action || /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default['default'].createElement(reactI18next.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @memberof ErrorMessageBox
	 * @alias ErrorMessageBoxProps
	 */

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapper = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "gd2y70-0"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    ...rest
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, _extends({}, rest, {
	    variant: "grey",
	    mx: "auto"
	  }), children);
	};

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { DrawerPortal } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React.useState(window.document.getElementById(DRAWER_PORTAL_ID));

	  if (!drawerElement && window) {
	    const innerWrapper = window.document.createElement('div');
	    const DrawerWrapper = /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	      theme: window.THEME
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	      id: DRAWER_PORTAL_ID,
	      className: "hidden"
	    }));
	    window.document.body.appendChild(innerWrapper);
	    reactDom.render(DrawerWrapper, innerWrapper, () => {
	      setDrawerElement(window.document.getElementById(DRAWER_PORTAL_ID));
	    });
	  }

	  React.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DesignSystem.DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/reactDom.createPortal(children, drawerElement);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterDrawer = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React.useState(parseQuery(location));
	  const match = reactRouterDom.useRouteMatch();
	  const history = reactRouterDom.useHistory();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  React.useEffect(() => setFilter({}), [match.params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    search.set('page', '1');
	    history.push(`${history.location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    history.push(history.location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H3, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg"
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white"
	  }, translateButton('resetFilter', resource.id))));
	};

	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SortLink: SortLink$1,
		NoRecords: NoRecords,
		PropertyHeader: PropertyHeader,
		RecordInList: RecordInList,
		RecordsTableHeader: RecordsTableHeader,
		RecordsTable: RecordsTable,
		SelectedRecords: SelectedRecords,
		SidebarResourceSection: SidebarResourceSection,
		Sidebar: Sidebar$1,
		ActionButton: ActionButton,
		ActionHeader: ActionHeader,
		BaseActionComponent: BaseActionComponent,
		BreadcrumbLink: BreadcrumbLink,
		Breadcrumbs: Breadcrumbs,
		DashboardHeader: DashboardHeader,
		Dashboard: Dashboard$2,
		ErrorBoundary: ErrorBoundary,
		DrawerPortal: DrawerPortal,
		NoResourceError: NoResourceError,
		NoActionError: NoActionError,
		NoRecordError: NoRecordError,
		ErrorMessageBox: ErrorMessageBox,
		FilterDrawer: FilterDrawer,
		LoggedIn: OverridableLoggedIn,
		NoticeElement: NoticeElement,
		NoticeBox: ConnectedNoticeBox,
		TopBar: TopBar,
		Version: Version
	});

	const api$1 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React.useState();
	  const [loading, setLoading] = React.useState(true);
	  const match = reactRouter.useRouteMatch();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = match.params;
	  const resource = useResource(resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$1.recordAction(match.params).then(response => {
	      setLoading(false);
	      setRecord(response.data.record);
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  } // When the user visits this route (record action) from a different, than the current one, record.
	  // It renders everything with a new resource. The old record remains until useEffect fetches data
	  // from the API. that is why we have to check if the current record has correct record.id.
	  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
	  // we cannot be sure that the component wont be rendered (it will be at least once) with the
	  // wrong data.


	  const hasDifferentRecord = record && record.id.toString() !== recordId;

	  if (loading || hasDifferentRecord) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource !== null && actionFromResource !== void 0 && actionFromResource.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default['default'].createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record
	  }));
	};

	const ResourceAction$1 = props => {
	  const {
	    resources,
	    match
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource
	  }));
	};

	const mapStateToProps$2 = state => ({
	  resources: state.resources
	});

	var ResourceAction$2 = reactRedux.connect(mapStateToProps$2)(ResourceAction$1);

	const api = new ApiClient();

	const BulkAction = () => {
	  const match = reactRouter.useRouteMatch();
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = useResource(resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api.bulkAction({
	      resourceId,
	      recordIds,
	      actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecords();
	  }, [match.params.resourceId, match.params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default['default'].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource !== null && actionFromResource !== void 0 && actionFromResource.showInDrawer ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, !(action !== null && action !== void 0 && action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	class Page extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      pages,
	      match
	    } = this.props;
	    const {
	      params
	    } = match;
	    const {
	      pageName
	    } = params;
	    const {
	      isClient
	    } = this.state;
	    const currentPage = pages.find(page => page.name === pageName);

	    if (!currentPage) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "There is no page of given name"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "Page:", /*#__PURE__*/React__default['default'].createElement("b", null, ` "${pageName}" `), "does not exist."));
	    }

	    const Component = AdminBro.UserComponents[currentPage.component];

	    if (!Component || !isClient) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "No component specified"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "You have to specify component which will render this Page"));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$1 = state => ({
	  pages: state.pages
	});

	var Page$1 = reactRedux.connect(mapStateToProps$1)(Page);

	var queryHasFilter = (queryString => {
	  const query = new URLSearchParams(queryString);

	  for (const key of query.keys()) {
	    if (key.match('filters.')) {
	      return true;
	    }
	  }

	  return false;
	});

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouterDom.useRouteMatch(resourceActionUrl);
	  const recordActionMatch = reactRouterDom.useRouteMatch(recordActionUrl);
	  const bulkActionMatch = reactRouterDom.useRouteMatch(bulkActionUrl);
	  const action = (resourceActionMatch === null || resourceActionMatch === void 0 ? void 0 : resourceActionMatch.params.actionName) || (recordActionMatch === null || recordActionMatch === void 0 ? void 0 : recordActionMatch.params.actionName) || (bulkActionMatch === null || bulkActionMatch === void 0 ? void 0 : bulkActionMatch.params.actionName);
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction = props => {
	  const {
	    resources,
	    match,
	    location
	  } = props;
	  const {
	    resourceId
	  } = match.params;
	  const [filterVisible, setFilerVisible] = React.useState(queryHasFilter(location.search));
	  const [tag, setTag] = React.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilerVisible(!filterVisible) : undefined;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "grey",
	    width: listAction.containerWidth,
	    mx: "auto"
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default['default'].createElement(FilterDrawer, {
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilerVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps = state => ({
	  resources: state.resources
	});

	var Resource = reactRedux.connect(mapStateToProps)(ResourceAction);

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${({
  theme
}) => theme.colors.grey100}
  }
`;
	const h = new ViewHelpers();

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React.useState(false);
	  const location = reactRouter.useLocation();
	  React.useEffect(() => {
	    if (sidebarVisible) {
	      toggleSidebar(false);
	    }
	  }, [location]);
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h.pageUrl(pageName);
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Reset, null), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    height: "100%",
	    flex: true
	  }, sidebarVisible ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default['default'].createElement(Sidebar$1, {
	    isVisible: sidebarVisible
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg"
	  }, /*#__PURE__*/React__default['default'].createElement(TopBar$1, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 0,
	    zIndex: "2000"
	  }, /*#__PURE__*/React__default['default'].createElement(ConnectedNoticeBox, null)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass(['Main']),
	    flex: true,
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: h.dashboardUrl(),
	    exact: true,
	    component: Dashboard$1
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceUrl,
	    component: Resource
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    exact: true,
	    component: Page$1
	  })), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: recordActionUrl,
	    component: RecordAction
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceActionUrl,
	    component: ResourceAction$2
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: bulkActionUrl,
	    component: BulkAction
	  }))))));
	};

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case RESOURCES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case PAGES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case LOCALE_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case BRANDING_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const assetsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case ASSETS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case PATHS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case DASHBOARD_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case SESSION_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case VERSIONS_INITIALIZE:
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case ADD_NOTICE:
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case DROP_NOTICE:
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case SET_NOTICE_PROGRESS:
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = redux.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  assets: assetsReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer
	});
	var createStore = ((initialState = {}) => redux.createStore(reducer, initialState));

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const {
	  locale
	} = window.REDUX_STATE;
	i18n__default['default'].use(reactI18next.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
	  store: store
	}, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(App, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  BasePropertyComponent: BasePropertyComponentExtended,
	  env,
	  ...AppComponents,
	  ...Hooks,
	  flat,
	  // TODO: remove this from the next release
	  flatten: flat.flatten,
	  unflatten: flat.unflatten
	};

	return bundleEntry;

}(React, ReactRedux, ReactRouterDOM, styled, ReactI18Next, i18n, AdminBroDesignSystem, ReactRouter, axios, flat, ReactSelect, ReactSelectAsync, ReactDOM, Redux));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycy50cyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWJyYW5kaW5nLnRzeCIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCIuLi8uLi8uLi91dGlscy90cmFuc2xhdGUtZnVuY3Rpb25zLmZhY3RvcnkudHMiLCIuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24udHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcGFnZXMudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWZvb3Rlci50c3giLCIuLi8uLi91dGlscy9hcGktY2xpZW50LnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9wYXJhbXMtdG8tZm9ybS1kYXRhLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5vdGljZS50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3Byb3BlcnR5LWtleS1yZWdleC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvc2VsZWN0LXBhcmFtcy50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZmlsdGVyLW91dC1wYXJhbXMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3BhdGgtdG8tcGFydHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3NldC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZ2V0LnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9tZXJnZS50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvcmVtb3ZlLXBhdGgudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L2ZsYXQtbW9kdWxlLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91cGRhdGUtcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9maWx0ZXItcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkLnRzeCIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1oYXMtY29tcG9uZW50LnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9jYWxsLWFjdGlvbi1hcGkudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9idWlsZC1hY3Rpb24tYXBpLWNhbGwtdHJpZ2dlci50cyIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2J1aWxkLWFjdGlvbi10ZXN0LWlkLnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYnVpbGQtYWN0aW9uLWNsaWNrLWhhbmRsZXIudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gudHMiLCIuLi8uLi9ob29rcy91c2UtYWN0aW9uL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlci50cyIsIi4uLy4uL2hvb2tzL3VzZS1hY3Rpb24vdXNlLWFjdGlvbi50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4udHMiLCIuLi8uLi9ob29rcy91c2UtY3VycmVudC1hZG1pbi50cyIsIi4uLy4uL2hvb2tzL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5hdmlnYXRpb24tcmVzb3VyY2VzLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMudHMiLCIuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZXNvdXJjZS91c2UtcmVzb3VyY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbG9nZ2VkLWluLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3ZlcnNpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvdG9wLWJhci50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbm90aWNlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2RlZmF1bHQtZGFzaGJvYXJkLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL2Rhc2hib2FyZC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS91dGlscy9wcm9wZXJ0eS1sYWJlbC9wcm9wZXJ0eS1sYWJlbC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvY29udmVydC10by1zdWItcHJvcGVydHkudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2FycmF5L3JlbW92ZS1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvY29udmVydC10by1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2RlZmF1bHQtcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9maWx0ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vbWFwLXZhbHVlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYm9vbGVhbi9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvbWFwLXZhbHVlLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2xpc3QudHN4IiwiLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9yZWZlcmVuY2UtdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWZlcmVuY2UvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2luZGV4LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2JyZWFkY3J1bWJzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL3N0eWxlZC1iYWNrLWJ1dHRvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9uZXcudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9kaXNwbGF5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3JkLWluLWxpc3QudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc29ydC1saW5rLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcHJvcGVydHktaGVhZGVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvbm8tcmVjb3Jkcy50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS9zZWxlY3RlZC1yZWNvcmRzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS50c3giLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvbGlzdC50c3giLCIuLi8uLi9ob2Mvd2l0aC1ub3RpY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYnVsay1kZWxldGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2luZGV4LnRzIiwiLi4vLi4vLi4vY29uc3RhbnRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLW1lc3NhZ2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvdXRpbHMvd3JhcHBlci50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9kcmF3ZXItcG9ydGFsLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2ZpbHRlci1kcmF3ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVjb3JkLWFjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9yZXNvdXJjZS1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvYnVsay1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcGFnZS50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy91dGlscy9xdWVyeS1oYXMtZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVzb3VyY2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtYXNzZXRzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWJyYW5kaW5nLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWRhc2hib2FyZC50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5pdGlhbGl6ZS1sb2NhbGUudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGFnZXMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGF0aHMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcmVzb3VyY2VzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLXZlcnNpb25zLnRzIiwiLi4vLi4vc3RvcmUvc3RvcmUudHMiLCIuLi8uLi9idW5kbGUtZW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFkbWluQnJvT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vLi4vLi4vZnJvbnRlbmQvc3RvcmUvc3RvcmUnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgUGFyYW1zIGZvciBhIGFueSBmdW5jdGlvblxuICogQGFsaWFzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvblBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBSZXNvdXJjZSBJRFxuICAgKi9cbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAvKipcbiAgICogQWN0aW9uIG5hbWVcbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHF1ZXJ5IHN0cmluZzogPy4uLi5cbiAgICovXG4gIHNlYXJjaD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGFyYW1zIGZvciBhIHJlY29yZCBhY3Rpb25cbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtcyAmIHtcbiAgLyoqXG4gICAqIFJlY29yZCBJRFxuICAgKi9cbiAgcmVjb3JkSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgYnVsayBhY3Rpb25cbiAqIEBhbGlhcyBCdWxrQWN0aW9uUGFyYW1zXG4gKiBAZXh0ZW5kcyBBY3Rpb25QYXJhbXNcbiAqIEBtZW1iZXJvZiBWaWV3SGVscGVyc1xuICovXG5leHBvcnQgdHlwZSBCdWxrQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zICYge1xuICAvKipcbiAgICogQXJyYXkgb2YgUmVjb3JkcyBJRFxuICAgKi9cbiAgcmVjb3JkSWRzPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgcmVzb3VyY2UgYWN0aW9uXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zXG5cbmNvbnN0IHJ1bkRhdGUgPSBuZXcgRGF0ZSgpXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBoZWxwZXIgbWV0aG9kcyBhdmFpbGFibGUgaW4gdGhlIHZpZXdzXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3SGVscGVycyB7XG4gIHB1YmxpYyBvcHRpb25zOiBQYXRoc1xuXG4gIGNvbnN0cnVjdG9yKHsgb3B0aW9ucyB9OiB7IG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMgfSA9IHt9KSB7XG4gICAgbGV0IG9wdHM6IFBhdGhzID0gVmlld0hlbHBlcnMuZ2V0UGF0aHMob3B0aW9ucylcblxuICAgIG9wdHMgPSBvcHRzIHx8IHtcbiAgICAgIHJvb3RQYXRoOiAnL2FkbWluJyxcbiAgICB9XG5cbiAgICAvLyB3aGVuIFZpZXdIZWxwZXJzIGFyZSB1c2VkIG9uIHRoZSBmcm9udGVuZCwgcGF0aHMgYXJlIHRha2VuIGZyb20gZ2xvYmFsIFJlZHV4IFN0YXRlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0c1xuICB9XG5cbiAgc3RhdGljIGdldFBhdGhzKG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMpOiBQYXRocyB7XG4gICAgcmV0dXJuIG9wdGlvbnMgfHwgKGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMpXG4gIH1cblxuICAvKipcbiAgICogVG8gZWFjaCByZWxhdGVkIHBhdGggYWRkcyByb290UGF0aCBwYXNzZWQgYnkgdGhlIHVzZXIsIGFzIHdlbGwgYXMgYSBxdWVyeSBzdHJpbmdcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gW3BhdGhzXSAgICAgIGxpc3Qgb2YgcGFydHMgb2YgdGhlIHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIHBhdGhcbiAgICogQHJldHVybiB7cXVlcnl9ICAgICAgICBbc2VhcmNoPScnXSBxdWVyeSBzdHJpbmcgd2hpY2ggY2FuIGJlIGZldGNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBgbG9jYXRpb24uc2VhcmNoYFxuICAgKi9cbiAgdXJsQnVpbGRlcihwYXRoczogQXJyYXk8c3RyaW5nPiA9IFtdLCBzZWFyY2ggPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJy8nXG4gICAgY29uc3QgcmVwbGFjZSA9IG5ldyBSZWdFeHAoYCR7c2VwYXJhdG9yfXsxLH1gLCAnZycpXG5cbiAgICBsZXQgeyByb290UGF0aCB9ID0gdGhpcy5vcHRpb25zXG4gICAgaWYgKCFyb290UGF0aC5zdGFydHNXaXRoKHNlcGFyYXRvcikpIHsgcm9vdFBhdGggPSBgJHtzZXBhcmF0b3J9JHtyb290UGF0aH1gIH1cblxuICAgIGNvbnN0IHBhcnRzID0gW3Jvb3RQYXRoLCAuLi5wYXRoc11cbiAgICByZXR1cm4gYCR7cGFydHMuam9pbihzZXBhcmF0b3IpLnJlcGxhY2UocmVwbGFjZSwgc2VwYXJhdG9yKX0ke3NlYXJjaH1gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dpbiBVUkxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG9naW5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbG9nb3V0IFVSTFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ291dFBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBmb3IgdGhlIGRhc2hib2FyZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBkYXNoYm9hcmRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJvb3RQYXRoXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgZm9yIGdpdmVuIHBhZ2UgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgICAgICAgcGFnZSBuYW1lIHdoaWNoIGlzIGEgdW5pcXVlIGtleSBzcGVjaWZpZWQgaW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnN9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHBhZ2VVcmwocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3BhZ2VzJywgcGFnZU5hbWVdKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBlZGl0YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZWRpdFVybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWU6ICdlZGl0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYHNob3dgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgcmVjb3JkQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCAgICBpZCB0byB0aGUgcmVjb3JkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBzaG93VXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ3Nob3cnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgZGVsZXRlYCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ2RlbGV0ZScsIHNlYXJjaCB9KVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYG5ld2AgYWN0aW9uIGluIGdpdmVuIFJlc291cmNlLiBVc2VzIHtAbGluayByZXNvdXJjZUFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgbmV3VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICduZXcnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgbmV3YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlc291cmNlQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBsaXN0VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICdsaXN0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYGJ1bGtEZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgYnVsa0FjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHJlY29yZElkcyAgIHNlcGFyYXRlZCBieSBjb21tYSByZWNvcmRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBidWxrRGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWRzOiBBcnJheTxzdHJpbmc+LCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWU6ICdidWxrRGVsZXRlJywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZXNvdXJjZUFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uUGFyYW1zfSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcbiAgICogQHBhcmFtICAge3N0cmluZ30gIFtvcHRpb25zLnNlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgcmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lLCBzZWFyY2ggfTogUmVzb3VyY2VBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkLCAnYWN0aW9ucycsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICByZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaCB9OiBPbWl0PFJlc291cmNlQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZSc+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyKFsncmVzb3VyY2VzJywgcmVzb3VyY2VJZF0sIHNlYXJjaClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlY29yZEFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZWNvcmRJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5hY3Rpb25OYW1lXG4gICAqXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAqL1xuICByZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgc2VhcmNoIH06IFJlY29yZEFjdGlvblBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3Jlc291cmNlcycsIHJlc291cmNlSWQsICdyZWNvcmRzJywgcmVjb3JkSWQsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBidWxrQWN0aW9uIHVybFxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7QXJyYXk8c3RyaW5nPn0gIFtvcHRpb25zLnJlY29yZElkc11cbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMuYWN0aW9uTmFtZVxuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkcywgYWN0aW9uTmFtZSwgc2VhcmNoIH06IEJ1bGtBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsQnVpbGRlcihbXG4gICAgICAncmVzb3VyY2VzJywgcmVzb3VyY2VJZCwgJ2J1bGsnLCBhY3Rpb25OYW1lLFxuICAgIF0pXG4gICAgaWYgKHJlY29yZElkcyAmJiByZWNvcmRJZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICAgICAgcXVlcnkuc2V0KCdyZWNvcmRJZHMnLCByZWNvcmRJZHMuam9pbignLCcpKVxuICAgICAgcmV0dXJuIGAke3VybH0/JHtxdWVyeS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcmV0dXJuIGAke3VybH0ke3NlYXJjaCB8fCAnJ31gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhYnNvbHV0ZSBwYXRoIHRvIGEgZ2l2ZW4gYXNzZXQuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXNzZXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgYXNzZXRQYXRoKGFzc2V0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGFzc2V0LCB0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKS5ocmVmXG5cbiAgICAgIC8vIGFkZGluZyB0aW1lc3RhbXAgdG8gdGhlIGhyZWYgaW52YWxpZGF0ZXMgdGhlIENETiBjYWNoZVxuICAgICAgcmV0dXJuIGAke3VybH0/ZGF0ZT0ke3J1bkRhdGUuZ2V0VGltZSgpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ2Zyb250ZW5kJywgJ2Fzc2V0cycsIGFzc2V0XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3SGVscGVyc1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE92ZXJyaWRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdXRpbHMvb3ZlcnJpZGFibGUtY29tcG9uZW50J1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKlxuICogQGNsYXNzZGVzY1xuICogT3ZlcnJpZGVzIG9uZSBvZiB0aGUgY29tcG9uZW50IGZvcm0gQWRtaW5Ccm8gY29yZSB3aGVuIHVzZXIgcGFzcyBpdHMgbmFtZSB0b1xuICoge0BsaW5rIEFkbWluQnJvLmJ1bmRsZX0gbWV0aG9kLlxuICpcbiAqIElmIGNhc2Ugb2YgYmVpbmcgb3ZlcnJpZGRlbiwgY29tcG9uZW50IHJlY2VpdmVzIGFkZGl0aW9uYWwgcHJvcDogYE9yaWdpbmFsQ29tcG9uZW50YFxuICpcbiAqIEBleGFtcGxlXG4gKiBBZG1pbkJyby5idW5kbGUoJy4vcGF0aC90by9jb21wb25lbnQnLCAnU2lkZWJhckZvb3RlcicpXG4gKi9cbmZ1bmN0aW9uIGFsbG93T3ZlcnJpZGU8UD4oXG4gIE9yaWdpbmFsQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+LFxuICBuYW1lOiBPdmVycmlkYWJsZUNvbXBvbmVudCxcbik6IENvbXBvbmVudFR5cGU8UCAmIHtPcmlnaW5hbENvbXBvbmVudD86IENvbXBvbmVudFR5cGU8UD59PiB7XG4gIC8vIHNzclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gT3JpZ2luYWxDb21wb25lbnRcbiAgfVxuXG4gIGNvbnN0IFdyYXBwZXJDb21wb25lbnQ6IFJlYWN0LkZDPFA+ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGdsb2JhbEFueTogYW55ID0gd2luZG93XG4gICAgZ2xvYmFsQW55ID0gd2luZG93XG5cbiAgICBsZXQgQ29tcG9uZW50ID0gT3JpZ2luYWxDb21wb25lbnRcblxuICAgIGlmIChnbG9iYWxBbnkuQWRtaW5Ccm9cbiAgICAgICYmIGdsb2JhbEFueS5BZG1pbkJyby5Vc2VyQ29tcG9uZW50c1xuICAgICAgJiYgZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXG4gICAgKSB7XG4gICAgICBDb21wb25lbnQgPSBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbbmFtZV1cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gT3JpZ2luYWxDb21wb25lbnQ9e09yaWdpbmFsQ29tcG9uZW50fSAvPlxuICAgIH1cblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyQ29tcG9uZW50XG59XG5cbmV4cG9ydCB7XG4gIGFsbG93T3ZlcnJpZGUgYXMgZGVmYXVsdCxcbiAgYWxsb3dPdmVycmlkZSxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNzc0NsYXNzLCB0aGVtZUdldCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEJyYW5kaW5nT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcblxudHlwZSBQcm9wcyA9IHtcbiAgYnJhbmRpbmc6IEJyYW5kaW5nT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQoTGluaylgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6ICR7dGhlbWVHZXQoJ3NwYWNlJywgJ2xnJyl9ICR7dGhlbWVHZXQoJ3NwYWNlJywgJ3h4bCcpfSAke3RoZW1lR2V0KCdzcGFjZScsICd4eGwnKX07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmID4gaDEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZUdldCgnZm9udFdlaWdodHMnLCAnYm9sZGVyJyl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFdlaWdodHMnLCAnYm9sZGVyJyl9O1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMnLCAnZ3JleTgwJyl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZUdldCgnZm9udFNpemVzJywgJ3hsJyl9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lR2V0KCdsaW5lSGVpZ2h0cycsICd4bCcpfTtcbiAgfVxuXG4gICYgPiBpbWcge1xuICAgIG1heC13aWR0aDogMTcwcHg7XG4gIH1cblxuICAmOmhvdmVyIGgxIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzJywgJ3ByaW1hcnkxMDAnKX07XG4gIH1cbmBcblxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmNvbnN0IFNpZGViYXJCcmFuZGluZzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYnJhbmRpbmcgfSA9IHByb3BzXG4gIGNvbnN0IHsgbG9nbywgY29tcGFueU5hbWUgfSA9IGJyYW5kaW5nXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExvZ29cbiAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ0xvZ28nKX1cbiAgICAgIHRvPXtoLmRhc2hib2FyZFVybCgpfVxuICAgID5cbiAgICAgIHtsb2dvID8gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgIGFsdD17Y29tcGFueU5hbWV9XG4gICAgICAgIC8+XG4gICAgICApIDogPGgxPntjb21wYW55TmFtZX08L2gxPn1cbiAgICA8L1N0eWxlZExvZ28+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyQnJhbmRpbmcsICdTaWRlYmFyQnJhbmRpbmcnKVxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eU9mO1xuIiwidmFyIGJhc2VQcm9wZXJ0eU9mID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5T2YnKTtcblxuLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xudmFyIGRlYnVycmVkTGV0dGVycyA9IHtcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxuICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcbiAgJ1xceGUwJzogJ2EnLCAgJ1xceGUxJzogJ2EnLCAnXFx4ZTInOiAnYScsICdcXHhlMyc6ICdhJywgJ1xceGU0JzogJ2EnLCAnXFx4ZTUnOiAnYScsXG4gICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcbiAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxuICAnXFx4YzgnOiAnRScsICAnXFx4YzknOiAnRScsICdcXHhjYSc6ICdFJywgJ1xceGNiJzogJ0UnLFxuICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxuICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxuICAnXFx4ZWMnOiAnaScsICAnXFx4ZWQnOiAnaScsICdcXHhlZSc6ICdpJywgJ1xceGVmJzogJ2knLFxuICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXG4gICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxuICAnXFx4ZjInOiAnbycsICAnXFx4ZjMnOiAnbycsICdcXHhmNCc6ICdvJywgJ1xceGY1JzogJ28nLCAnXFx4ZjYnOiAnbycsICdcXHhmOCc6ICdvJyxcbiAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcbiAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcbiAgJ1xceGRkJzogJ1knLCAgJ1xceGZkJzogJ3knLCAnXFx4ZmYnOiAneScsXG4gICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXG4gICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXG4gICdcXHhkZic6ICdzcycsXG4gIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXG4gICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxuICAnXFx1MDEwMSc6ICdhJywgICdcXHUwMTAzJzogJ2EnLCAnXFx1MDEwNSc6ICdhJyxcbiAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxuICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXG4gICdcXHUwMTBlJzogJ0QnLCAgJ1xcdTAxMTAnOiAnRCcsICdcXHUwMTBmJzogJ2QnLCAnXFx1MDExMSc6ICdkJyxcbiAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcbiAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcbiAgJ1xcdTAxMWMnOiAnRycsICAnXFx1MDExZSc6ICdHJywgJ1xcdTAxMjAnOiAnRycsICdcXHUwMTIyJzogJ0cnLFxuICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXG4gICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcbiAgJ1xcdTAxMjgnOiAnSScsICAnXFx1MDEyYSc6ICdJJywgJ1xcdTAxMmMnOiAnSScsICdcXHUwMTJlJzogJ0knLCAnXFx1MDEzMCc6ICdJJyxcbiAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcbiAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcbiAgJ1xcdTAxMzYnOiAnSycsICAnXFx1MDEzNyc6ICdrJywgJ1xcdTAxMzgnOiAnaycsXG4gICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXG4gICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXG4gICdcXHUwMTQzJzogJ04nLCAgJ1xcdTAxNDUnOiAnTicsICdcXHUwMTQ3JzogJ04nLCAnXFx1MDE0YSc6ICdOJyxcbiAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxuICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcbiAgJ1xcdTAxNGQnOiAnbycsICAnXFx1MDE0Zic6ICdvJywgJ1xcdTAxNTEnOiAnbycsXG4gICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxuICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcbiAgJ1xcdTAxNWEnOiAnUycsICAnXFx1MDE1Yyc6ICdTJywgJ1xcdTAxNWUnOiAnUycsICdcXHUwMTYwJzogJ1MnLFxuICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXG4gICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxuICAnXFx1MDE2Myc6ICd0JywgICdcXHUwMTY1JzogJ3QnLCAnXFx1MDE2Nyc6ICd0JyxcbiAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXG4gICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxuICAnXFx1MDE3NCc6ICdXJywgICdcXHUwMTc1JzogJ3cnLFxuICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcbiAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXG4gICdcXHUwMTdhJzogJ3onLCAgJ1xcdTAxN2MnOiAneicsICdcXHUwMTdlJzogJ3onLFxuICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcbiAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXG4gICdcXHUwMTQ5JzogXCInblwiLCAnXFx1MDE3Zic6ICdzJ1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnJMZXR0ZXI7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBkZWJ1cnJMZXR0ZXIgPSByZXF1aXJlKCcuL19kZWJ1cnJMZXR0ZXInKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXG52YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcblxuLyoqXG4gKiBEZWJ1cnJzIGBzdHJpbmdgIGJ5IGNvbnZlcnRpbmdcbiAqIFtMYXRpbi0xIFN1cHBsZW1lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluLTFfU3VwcGxlbWVudF8oVW5pY29kZV9ibG9jaykjQ2hhcmFjdGVyX3RhYmxlKVxuICogYW5kIFtMYXRpbiBFeHRlbmRlZC1BXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9FeHRlbmRlZC1BKVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzIGFuZCByZW1vdmluZ1xuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVidXJyKCdkw6lqw6AgdnUnKTtcbiAqIC8vID0+ICdkZWphIHZ1J1xuICovXG5mdW5jdGlvbiBkZWJ1cnIoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nLnJlcGxhY2UocmVMYXRpbiwgZGVidXJyTGV0dGVyKS5yZXBsYWNlKHJlQ29tYm9NYXJrLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlXb3JkcztcbiIsIi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGVXb3JkO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzRGluZ2JhdFJhbmdlID0gJ1xcXFx1MjcwMC1cXFxcdTI3YmYnLFxuICAgIHJzTG93ZXJSYW5nZSA9ICdhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmYnLFxuICAgIHJzTWF0aE9wUmFuZ2UgPSAnXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmNycsXG4gICAgcnNOb25DaGFyUmFuZ2UgPSAnXFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmJyxcbiAgICByc1B1bmN0dWF0aW9uUmFuZ2UgPSAnXFxcXHUyMDAwLVxcXFx1MjA2ZicsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNQdW5jdHVhdGlvblJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNNaXNjTG93ZXIgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNNaXNjVXBwZXIgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRDb250ckxvd2VyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRDb250clVwcGVyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc09yZExvd2VyID0gJ1xcXFxkKig/OjFzdHwybmR8M3JkfCg/IVsxMjNdKVxcXFxkdGgpKD89XFxcXGJ8W0EtWl9dKScsXG4gICAgcnNPcmRVcHBlciA9ICdcXFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXFxcZFRIKSg/PVxcXFxifFthLXpfXSknLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc0Vtb2ppID0gJyg/OicgKyBbcnNEaW5nYmF0LCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc1NlcTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggY29tcGxleCBvciBjb21wb3VuZCB3b3Jkcy4gKi9cbnZhciByZVVuaWNvZGVXb3JkID0gUmVnRXhwKFtcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNNaXNjVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyICsgcnNNaXNjTG93ZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyICsgJz8nICsgcnNNaXNjTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIsXG4gIHJzVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIsXG4gIHJzT3JkVXBwZXIsXG4gIHJzT3JkTG93ZXIsXG4gIHJzRGlnaXRzLFxuICByc0Vtb2ppXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqXG4gKiBTcGxpdHMgYSBVbmljb2RlIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVXb3JkcztcbiIsInZhciBhc2NpaVdvcmRzID0gcmVxdWlyZSgnLi9fYXNjaWlXb3JkcycpLFxuICAgIGhhc1VuaWNvZGVXb3JkID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZVdvcmQnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmljb2RlV29yZHMgPSByZXF1aXJlKCcuL191bmljb2RlV29yZHMnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGRlYnVyciA9IHJlcXVpcmUoJy4vZGVidXJyJyksXG4gICAgd29yZHMgPSByZXF1aXJlKCcuL3dvcmRzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIjtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29tcG91bmRlcjtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2xpY2U7XG4iLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9fYmFzZVNsaWNlJyk7XG5cbi8qKlxuICogQ2FzdHMgYGFycmF5YCB0byBhIHNsaWNlIGlmIGl0J3MgbmVlZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3Qgc2xpY2UuXG4gKi9cbmZ1bmN0aW9uIGNhc3RTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZDtcbiAgcmV0dXJuICghc3RhcnQgJiYgZW5kID49IGxlbmd0aCkgPyBhcnJheSA6IGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFNsaWNlO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZTtcbiIsIi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlUb0FycmF5O1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVRvQXJyYXk7XG4iLCJ2YXIgYXNjaWlUb0FycmF5ID0gcmVxdWlyZSgnLi9fYXNjaWlUb0FycmF5JyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlVG9BcnJheSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVUb0FycmF5Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvQXJyYXk7XG4iLCJ2YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmxvd2VyRmlyc3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYFN0cmluZ2AgY2FzZSBtZXRob2QgdG8gdXNlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FzZUZpcnN0KG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICB2YXIgc3RyU3ltYm9scyA9IGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FzZUZpcnN0O1xuIiwidmFyIGNyZWF0ZUNhc2VGaXJzdCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNhc2VGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51cHBlckZpcnN0KCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGUkVEJ1xuICovXG52YXIgdXBwZXJGaXJzdCA9IGNyZWF0ZUNhc2VGaXJzdCgndG9VcHBlckNhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cHBlckZpcnN0O1xuIiwidmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyksXG4gICAgdXBwZXJGaXJzdCA9IHJlcXVpcmUoJy4vdXBwZXJGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvXG4gKiBbc3RhcnQgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGV0dGVyX2Nhc2UjU3R5bGlzdGljX29yX3NwZWNpYWxpc2VkX3VzYWdlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMS4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RhcnQgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnLS1mb28tYmFyLS0nKTtcbiAqIC8vID0+ICdGb28gQmFyJ1xuICpcbiAqIF8uc3RhcnRDYXNlKCdmb29CYXInKTtcbiAqIC8vID0+ICdGb28gQmFyJ1xuICpcbiAqIF8uc3RhcnRDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ0ZPTyBCQVInXG4gKi9cbnZhciBzdGFydENhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/ICcgJyA6ICcnKSArIHVwcGVyRmlyc3Qod29yZCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydENhc2U7XG4iLCJpbXBvcnQgeyBpMThuIGFzIEkxOG4sIFRGdW5jdGlvbiwgVE9wdGlvbnMgfSBmcm9tICdpMThuZXh0J1xuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tICdsb2Rhc2gvc3RhcnRDYXNlJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBUcmFuc2xhdGVGdW5jdGlvbnNcbiAqIEBhbGlhcyBUcmFuc2xhdGVGdW5jdGlvblxuICovXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVGdW5jdGlvbiA9IChcbiAgLyoqXG4gICAqIGt3eSB3aGljaCBzaG91bGQgYmUgdHJhbnNsYXRlZCBpbiBhIGdpdmVuIG5hbWVzcGFjZVxuICAgKi9cbiAga2V5OiBzdHJpbmcsXG4gIC8qKlxuICAgKiBPcHRpb25hbCByZXNvdXJjZUlkIG9yIFtUcmFuc2xhdGUgb3B0aW9uc117QGxpbmsgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zfVxuICAgKi9cbiAgcmVzb3VyY2VJZD86IHN0cmluZyB8IFRPcHRpb25zLFxuICAvKipcbiAgICogW1RyYW5zbGF0ZSBvcHRpb25zXXtAbGluayBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnN9XG4gICAqL1xuICBvcHRpb25zPzogVE9wdGlvbnNcbikgPT4gc3RyaW5nXG5cbi8qKlxuICogVHJhbnNsYXRlIEZ1bmN0aW9ucyBhcmUgdGhlIGhlbHBlciBmdW5jdGlvbnMgd2hpY2ggeW91IGNhbiB1c2UgdG8gdHJhbnNsYXRlXG4gKiB5b3VyIGFwcGxpY2F0aW9uLlxuICpcbiAqIE9uIHRoZSBmcm9udGVkIHRoZXkgY2FuIGJlIHVzZWQgd2l0aCB7QGxpbmsgdXNlVHJhbnNsYXRpb259IGhvb2suIE9uIHRoZSBiYWNrZW5kXG4gKiB0aGV5IGFyZSBpbmplY3RlZCB0byBhbnkge0BsaW5rIEFkbWluQnJvfSBpbnN0YW5jZSBhbmQge0BsaW5rIEFjdGlvbkNvbnRleHR9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZUZ1bmN0aW9ucyB7XG4gIC8qKlxuICAgKiBzaG9ydGN1dCBmb3IgSTE4bi50cmFuc2xhdGUgZnVuY3Rpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvYXBpI3RcbiAgICovXG4gIHQ6IFRGdW5jdGlvbjtcbiAgLyoqXG4gICAqIEkxOG4udHJhbnNsYXRlIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2FwaSN0XG4gICAqL1xuICB0cmFuc2xhdGU6IFRGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZUFjdGlvbn1cbiAgICovXG4gIHRhOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIFthY3Rpb25zXXtAbGluayBBY3Rpb259LCB0byBiZSBtb3JlIHNwZWNpZmljIC0gdGhlaXIgbGFiZWxzLlxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0uYWN0aW9ucy57YWN0aW9uTmFtZX1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBhY3Rpb25zLnthY3Rpb25OYW1lfWAuXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgYWN0aW9uIG5hbWUuXG4gICAqL1xuICB0cmFuc2xhdGVBY3Rpb246IFRyYW5zbGF0ZUZ1bmN0aW9uO1xuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnMjdHJhbnNsYXRlQnV0dG9ufVxuICAgKi9cbiAgdGI6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbGwgYnV0dG9ucy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmJ1dHRvbnMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgYnV0dG9ucy57YWN0aW9uTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIGJ1dHRvbiBuYW1lLlxuICAgKi9cbiAgdHJhbnNsYXRlQnV0dG9uOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZUxhYmVsfVxuICAgKi9cbiAgdGw6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbGwgbGFiZWxzLiBNb3N0IG9mIGFsbCBhbGwgcmVzb3VyY2UgbmFtZXMgYXJlIHRyZWF0ZWQgYXMgbGFiZWxzLlxuICAgKiBBbHNvLCBsYWJlbHMgYXJlIHRleHRzIGluIHRoZSB1c2VyIGludGVyZmFjZSB3aGljaCBjYW5ub3QgYmUgcmVjb2duaXplZFxuICAgKiBhcyBhbnkgb3RoZXIgdHlwZS5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmxhYmVscy57YWN0aW9uTmFtZX1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBsYWJlbHMue2FjdGlvbk5hbWV9YC5cbiAgICogRmluYWxseSwgd2hlbiB0aGF0IGFsc28gZmFpbHMsIGl0IHJldHVybnMgc3RhcnRDYXNlIG9mIHRoZSBnaXZlbiBsYWJlbC5cbiAgICovXG4gIHRyYW5zbGF0ZUxhYmVsOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZVByb3BlcnR5fVxuICAgKi9cbiAgdHA6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xuICAvKipcbiAgICogVHJhbnNsYXRlcyBhbGwgdGhlIHByb3BlcnR5IG5hbWVzLlxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0ucHJvcGVydGllcy57cHJvcGVydHlQYXRofWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYHByb3BlcnRpZXMue3Byb3BlcnR5UGF0aH1gLiBXaGVuIHRoYXQgZmFpbHMsXG4gICAqIGl0IHJldHVybnMgc3RhcnRDYXNlIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lLlxuICAgKlxuICAgKiBXaGF0IGlzIGltcG9ydGFudCBoZXJlIGlzIHRoYXQgeW91IGNhbiBwdXQgbmVzdGVkIHByb3BlcnR5IGFzIHdlbGwsIEluIHRoYXRcbiAgICogY2FzZSB5b3UgaGF2ZSB0byBwYXNzIGRvdHRlZCBwYXRoOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHtcbiAgICogICBwcm9wZXJ0aWVzOiB7XG4gICAqICAgICAgcGFyZW50OiAncGFyZW50IHByb3BlcnR5JyxcbiAgICogICAgICAncGFyZW50Lm5lc3RlZCc6ICduZXN0ZWQgcHJvcGVydHknXG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgdHJhbnNsYXRlUHJvcGVydHk6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnMjdHJhbnNsYXRlTWVzc2FnZX1cbiAgICovXG4gIHRtOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIHRoZSBtZXNzYWdlcyBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5tZXNzYWdlcy57bWVzc2FnZU5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgbWVzc2FnZXMue21lc3NhZ2VOYW1lfWAuXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gbWVzc2FnZSBuYW1lLlxuICAgKi9cbiAgdHJhbnNsYXRlTWVzc2FnZTogVHJhbnNsYXRlRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROYW1lID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBuYW1lLnNwbGl0KCcuJykuam9pbignJiM0NjsnKVxuXG5jb25zdCB0cmFuc2xhdGUgPSAoXG4gIGkxOG46IEkxOG4sXG4gIGtleTogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHJlc291cmNlSWQ/OiBzdHJpbmcgfCBUT3B0aW9ucyxcbiAgb3B0aW9ucz86IFRPcHRpb25zLFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcmVhbE9wdGlvbnM6IFRPcHRpb25zID0gKHR5cGVvZiByZXNvdXJjZUlkID09PSAnc3RyaW5nJyA/IG9wdGlvbnMgOiByZXNvdXJjZUlkKSB8fCB7fVxuICBjb25zdCBmb3JtYXR0ZWROYW1lID0gZm9ybWF0TmFtZShuYW1lKVxuICBsZXQga2V5cyA9IFtgJHtrZXl9LiR7Zm9ybWF0dGVkTmFtZX1gXVxuICBpZiAocmVzb3VyY2VJZCkge1xuICAgIGtleXMgPSBbYHJlc291cmNlcy4ke3Jlc291cmNlSWR9LiR7a2V5fS4ke2Zvcm1hdHRlZE5hbWV9YCwgLi4ua2V5c11cbiAgfVxuICBpZiAoaTE4bi5leGlzdHMoa2V5cykpIHtcbiAgICByZXR1cm4gaTE4bi50KGtleXMsIHJlYWxPcHRpb25zKVxuICB9XG4gIHJldHVybiByZWFsT3B0aW9ucy5kZWZhdWx0VmFsdWUgPz8gc3RhcnRDYXNlKG5hbWUpXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvbnMgPSAoaTE4bjogSTE4bik6IFRyYW5zbGF0ZUZ1bmN0aW9ucyA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZUFjdGlvbjogVHJhbnNsYXRlRnVuY3Rpb24gPSAoYWN0aW9uTmFtZSwgcmVzb3VyY2VJZCwgb3B0aW9ucykgPT4gKFxuICAgIHRyYW5zbGF0ZShpMThuLCAnYWN0aW9ucycsIGFjdGlvbk5hbWUgYXMgc3RyaW5nLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlQnV0dG9uOiBUcmFuc2xhdGVGdW5jdGlvbiA9IChcbiAgICBidXR0b25MYWJlbCwgcmVzb3VyY2VJZCwgb3B0aW9ucyxcbiAgKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdidXR0b25zJywgYnV0dG9uTGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICBjb25zdCB0cmFuc2xhdGVMYWJlbDogVHJhbnNsYXRlRnVuY3Rpb24gPSAobGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ2xhYmVscycsIGxhYmVsIGFzIHN0cmluZywgcmVzb3VyY2VJZCwgb3B0aW9ucylcbiAgKVxuXG4gIGNvbnN0IHRyYW5zbGF0ZVByb3BlcnR5OiBUcmFuc2xhdGVGdW5jdGlvbiA9IChwcm9wZXJ0eU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ3Byb3BlcnRpZXMnLCBwcm9wZXJ0eU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICBjb25zdCB0cmFuc2xhdGVNZXNzYWdlOiBUcmFuc2xhdGVGdW5jdGlvbiA9IChtZXNzYWdlTmFtZSwgcmVzb3VyY2VJZCwgb3B0aW9ucykgPT4gKFxuICAgIHRyYW5zbGF0ZShpMThuLCAnbWVzc2FnZXMnLCBtZXNzYWdlTmFtZSwgcmVzb3VyY2VJZCwgb3B0aW9ucylcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgdHJhbnNsYXRlQWN0aW9uLFxuICAgIHRhOiB0cmFuc2xhdGVBY3Rpb24sXG4gICAgdHJhbnNsYXRlQnV0dG9uLFxuICAgIHRiOiB0cmFuc2xhdGVCdXR0b24sXG4gICAgdHJhbnNsYXRlTGFiZWwsXG4gICAgdGw6IHRyYW5zbGF0ZUxhYmVsLFxuICAgIHRyYW5zbGF0ZVByb3BlcnR5LFxuICAgIHRwOiB0cmFuc2xhdGVQcm9wZXJ0eSxcbiAgICB0cmFuc2xhdGVNZXNzYWdlLFxuICAgIHRtOiB0cmFuc2xhdGVNZXNzYWdlLFxuICAgIHQ6IGkxOG4udCxcbiAgICB0cmFuc2xhdGU6IGkxOG4udCxcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdXNlVHJhbnNsYXRpb24gYXMgb3JpZ2luYWxVc2VUcmFuc2xhdGlvbixcbn0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IFRGdW5jdGlvbiwgaTE4biB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCB7IFRyYW5zbGF0ZUZ1bmN0aW9ucywgY3JlYXRlRnVuY3Rpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRlLWZ1bmN0aW9ucy5mYWN0b3J5J1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9uc30uIEFwYXJ0IGZyb20gdGhhdCBpdCBhbHNvIHJldHVybnMgYWxsIHRoZSBwcm9wZXJ0aWVzXG4gKiBkZWZpbmVkIGJlbG93LlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IE15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICpcbiAqICAgcmV0dXJuIChcbiAqICAgICA8Qm94PlxuICogICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9ey4uLn0+e3RyYW5zbGF0ZUJ1dHRvbignc2F2ZScpfTxCdXR0b24+XG4gKiAgICAgPC9Cb3g+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiB1c2VUcmFuc2xhdGlvblxuICogQGFsaWFzIFVzZVRyYW5zbGF0aW9uUmVzcG9uc2VcbiAqXG4gKiBAcHJvcGVydHkge1RyYW5zbGF0ZUZ1bmN0aW9ufSAuLi4gQWxsIGZ1bmN0aW9ucyBkZWZpbmVkIGluIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9XG4gKi9cbmV4cG9ydCB0eXBlIFVzZVRyYW5zbGF0aW9uUmVzcG9uc2UgPSBUcmFuc2xhdGVGdW5jdGlvbnMgJiB7XG4gIHQ6IFRGdW5jdGlvbjtcbiAgLyoqXG4gICAqIEN1cnJlbnQgaTE4biBpbnN0YW5jZS5cbiAgICovXG4gIGkxOG46IGkxOG47XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdHJhbnNsYXRpb24gc3lzdGVtIGlzIHJlYWR5LiBJbiBBZG1pbkJybyBpdCBpcyBhbHdheXMgcmVhZHkgOikuXG4gICAqL1xuICByZWFkeTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFeHRlbmRzIHRoZSB1c2VUcmFuc2xhdGlvbiBob29rIGZyb20gcmVhY3QtaTE4bmV4dCBsaWJyYXJ5LlxuICpcbiAqIFJldHVybnMgYWxsIHRoZSB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zfSArIG1ldGhvZHMgcmV0dXJuZWQgYnkgdGhlIG9yaWdpbmFsXG4gKiB1c2VUcmFuc2xhdGlvbiBtZXRob2QgZnJvbSByZWFjdC1pMThuZXh0IGxpa2U6IGBpMThuYCBpbnN0YW5jZSBhbmQgYHJlYWR5YCBmbGFnLlxuICpcbiAqIEBjbGFzc1xuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAYnVuZGxlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcmV0dXJucyB7VXNlVHJhbnNsYXRpb25SZXNwb25zZX1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gKCk6IFVzZVRyYW5zbGF0aW9uUmVzcG9uc2UgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gIGNvbnN0IHsgaTE4biwgLi4ucmVzdCB9ID0gb3JpZ2luYWxVc2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHRyYW5zbGF0ZUZ1bmN0aW9ucyA9IGNyZWF0ZUZ1bmN0aW9ucyhpMThuKVxuXG4gIHJldHVybiB7XG4gICAgLi4ucmVzdCxcbiAgICBpMThuLFxuICAgIC4uLnRyYW5zbGF0ZUZ1bmN0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUcmFuc2xhdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2aWdhdGlvbiwgTmF2aWdhdGlvbkVsZW1lbnRQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhZ2VzPzogUmVkdXhTdGF0ZVsncGFnZXMnXTtcbn1cblxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmNvbnN0IFNpZGViYXJQYWdlczogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFnZXMgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGlmICghcGFnZXMgfHwgIXBhZ2VzLmxlbmd0aCkge1xuICAgIHJldHVybiAoPD48Lz4pXG4gIH1cblxuICBjb25zdCBpc0FjdGl2ZSA9IChwYWdlKTogYm9vbGVhbiA9PiAoXG4gICAgISFsb2NhdGlvbi5wYXRobmFtZS5tYXRjaChgL3BhZ2VzLyR7cGFnZS5uYW1lfWApXG4gIClcblxuICBjb25zdCBlbGVtZW50czogQXJyYXk8TmF2aWdhdGlvbkVsZW1lbnRQcm9wcz4gPSBwYWdlcy5tYXAocGFnZSA9PiAoe1xuICAgIGlkOiBwYWdlLm5hbWUsXG4gICAgbGFiZWw6IHBhZ2UubmFtZSxcbiAgICBpc1NlbGVjdGVkOiBpc0FjdGl2ZShwYWdlKSxcbiAgICBpY29uOiBwYWdlLmljb24sXG4gICAgaHJlZjogaC5wYWdlVXJsKHBhZ2UubmFtZSksXG4gICAgb25DbGljazogKGV2ZW50LCBlbGVtZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoZWxlbWVudC5ocmVmKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChlbGVtZW50LmhyZWYpXG4gICAgICB9XG4gICAgfSxcbiAgfSkpXG5cbiAgcmV0dXJuIChcbiAgICA8TmF2aWdhdGlvblxuICAgICAgbGFiZWw9e3RyYW5zbGF0ZUxhYmVsKCdwYWdlcycpfVxuICAgICAgZWxlbWVudHM9e2VsZW1lbnRzfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclBhZ2VzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNvZnR3YXJlQnJvdGhlcnMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcblxuY29uc3QgU2lkZWJhckZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxCb3ggbXQ9XCJsZ1wiPlxuICAgIDxTb2Z0d2FyZUJyb3RoZXJzIC8+XG4gIDwvQm94PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBhbGxvd092ZXJyaWRlKFNpZGViYXJGb290ZXIsICdTaWRlYmFyRm9vdGVyJylcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlLCBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcbmltcG9ydCB7XG4gIFJlc291cmNlQWN0aW9uUGFyYW1zLFxuICBCdWxrQWN0aW9uUGFyYW1zLFxuICBSZWNvcmRBY3Rpb25QYXJhbXMsXG4gIEFjdGlvblBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25SZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UsIEJ1bGtBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG5sZXQgZ2xvYmFsQW55OiBhbnkgPSB7fVxuXG50cnkge1xuICBnbG9iYWxBbnkgPSB3aW5kb3dcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGlmIChlcnJvci5tZXNzYWdlICE9PSAnd2luZG93IGlzIG5vdCBkZWZpbmVkJykge1xuICAgIHRocm93IGVycm9yXG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsQW55ID0geyBpc09uU2VydmVyOiB0cnVlIH1cbiAgfVxufVxuXG4vKipcbiAqIFR5cGUgb2YgYW4gW2F4aW9zIHJlcXVlc3Rde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M31cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBBeGlvc1JlcXVlc3RDb25maWdcbiAqIEBhbGlhcyBBeGlvc1JlcXVlc3RDb25maWdcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2Jsb2IvbWFzdGVyL2luZGV4LmQudHMjTDQzXG4gKi9cblxuY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXNwb25zZTogQXhpb3NSZXNwb25zZSk6IHZvaWQgPT4ge1xuICBpZiAoZ2xvYmFsQW55LmlzT25TZXJ2ZXIpIHsgcmV0dXJuIH1cbiAgY29uc3QgbG9naW5VcmwgPSBbZ2xvYmFsQW55LmxvY2F0aW9uLm9yaWdpbiwgZ2xvYmFsQW55LlJFRFVYX1NUQVRFLnBhdGhzLmxvZ2luUGF0aF0uam9pbignJylcbiAgLy8gaWYgcmVzcG9uc2UgaGFzIHJlZGlyZWN0IHRvIGxvZ2luVXJsXG4gIGlmIChyZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVVJMXG4gICAgICAmJiByZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVVJMLm1hdGNoKGxvZ2luVXJsKVxuICApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBhbGVydCgnWW91ciBzZXNzaW9uIGV4cGlyZWQuIFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gbG9naW4gc2NyZWVuJylcbiAgICBnbG9iYWxBbnkubG9jYXRpb24uYXNzaWduKGxvZ2luVXJsKVxuICB9XG59XG5cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICpcbiAqIEBhbGlhcyBBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIEFjdGlvblBhcmFtc1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uQVBJUGFyYW1zID0gQXhpb3NSZXF1ZXN0Q29uZmlnICYgUmVzb3VyY2VBY3Rpb25QYXJhbXMgJiB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKlxuICogQGFsaWFzIFJlY29yZEFjdGlvbkFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqL1xuZXhwb3J0IHR5cGUgUmVjb3JkQWN0aW9uQVBJUGFyYW1zID0gQXhpb3NSZXF1ZXN0Q29uZmlnICYgUmVjb3JkQWN0aW9uUGFyYW1zXG5cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQWN0aW9uQVBJUGFyYW1zfVxuICpcbiAqIEBhbGlhcyBCdWxrQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M1xuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqL1xuZXhwb3J0IHR5cGUgQnVsa0FjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIEJ1bGtBY3Rpb25QYXJhbXNcblxuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqXG4gKiBAYWxpYXMgR2V0UGFnZUFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqL1xuZXhwb3J0IHR5cGUgR2V0UGFnZUFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBwYWdlIG5hbWVcbiAgICovXG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2xpZW50IHdoaWNoIGFjY2VzcyB0aGUgYWRtaW4gQVBJLlxuICogVXNlIGl0IHRvIGZldGNoIGRhdGEgZnJvbSBhdXRvIGdlbmVyYXRlZCBBZG1pbkJybyBBUEkuXG4gKlxuICogSW4gdGhlIGJhY2tlbmQgaXQgdXNlcyBbYXhpb3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcykgY2xpZW50XG4gKiBsaWJyYXJ5LlxuICpcbiAqIFVzYWdlOlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICogLy8gZmV0Y2hpbmcgYWxsIHJlY29yZHNcbiAqIGFwaS5yZXNvdXJjZUFjdGlvbih7IHJlc291cmNlSWQ6ICdDb21tZW50cycsIGFjdGlvbk5hbWU6ICdsaXN0JyB9KS50aGVuKHJlc3VsdHMgPT4gey4uLn0pXG4gKiBgYGBcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEFwaUNsaWVudCB7XG4gIHByaXZhdGUgYmFzZVVSTDogc3RyaW5nXG5cbiAgcHJpdmF0ZSBjbGllbnQ6IEF4aW9zSW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VVUkwgPSBBcGlDbGllbnQuZ2V0QmFzZVVybCgpXG4gICAgdGhpcy5jbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIGlmIChnbG9iYWxBbnkuaXNPblNlcnZlcikgeyByZXR1cm4gJycgfVxuICAgIHJldHVybiBbZ2xvYmFsQW55LmxvY2F0aW9uLm9yaWdpbiwgZ2xvYmFsQW55LlJFRFVYX1NUQVRFPy5wYXRocy5yb290UGF0aF0uam9pbignJylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYnkgcXVlcnkgc3RyaW5nIGZvciByZWNvcmRzIGluIGEgZ2l2ZW4gcmVzb3VyY2UuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICBvcHRpb25zXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBvcHRpb25zLnJlc291cmNlSWQgIGlkIG9mIGEge0BsaW5rIFJlc291cmNlSlNPTn1cbiAgICogQHBhcmFtICAge1N0cmluZ30gIG9wdGlvbnMucXVlcnkgICAgICAgcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPFNlYXJjaFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIHNlYXJjaFJlY29yZHMoeyByZXNvdXJjZUlkLCBxdWVyeSB9OiB7XG4gICAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAgIHF1ZXJ5OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPEFycmF5PFJlY29yZEpTT04+PiB7XG4gICAgaWYgKGdsb2JhbEFueS5pc09uU2VydmVyKSB7IHJldHVybiBbXSB9XG4gICAgY29uc3QgYWN0aW9uTmFtZSA9ICdzZWFyY2gnXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlc291cmNlQWN0aW9uKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSwgcXVlcnkgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlY29yZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGdpdmVuIHJlc291cmNlIHtAbGluayBBY3Rpb259IG9uIHRoZSBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0gICB7UmVzb3VyY2VBY3Rpb25BUElQYXJhbXN9ICAgICBvcHRpb25zXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPEFjdGlvblJlc3BvbnNlPn0gICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIHJlc291cmNlQWN0aW9uKG9wdGlvbnM6IFJlc291cmNlQWN0aW9uQVBJUGFyYW1zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj4ge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSwgZGF0YSwgcXVlcnksIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG4gICAgbGV0IHVybCA9IGAvYXBpL3Jlc291cmNlcy8ke3Jlc291cmNlSWR9L2FjdGlvbnMvJHthY3Rpb25OYW1lfWBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGNvbnN0IHEgPSBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpXG4gICAgICB1cmwgPSBbdXJsLCBxXS5qb2luKCcvJylcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGdpdmVuIHJlY29yZCB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvbkFQSVBhcmFtc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxSZWNvcmRBY3Rpb25SZXNwb25zZT59ICAgICAgICAgICAgcmVzcG9uc2UgZnJvbSBhbiB7QGxpbmsgQWN0aW9ufVxuICAgKi9cbiAgYXN5bmMgcmVjb3JkQWN0aW9uKG9wdGlvbnM6IFJlY29yZEFjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxSZWNvcmRBY3Rpb25SZXNwb25zZT4+IHtcbiAgICBjb25zdCB7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lLCBkYXRhLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvYXBpL3Jlc291cmNlcy8ke3Jlc291cmNlSWR9L3JlY29yZHMvJHtyZWNvcmRJZH0vJHthY3Rpb25OYW1lfWAsXG4gICAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiBidWxrIHtAbGluayBBY3Rpb259IG9uIHRoZSBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvbkFQSVBhcmFtc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxCdWxrQWN0aW9uUmVzcG9uc2U+fSAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIGJ1bGtBY3Rpb24ob3B0aW9uczogQnVsa0FjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxCdWxrQWN0aW9uUmVzcG9uc2U+PiB7XG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWUsIGRhdGEsIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICBwYXJhbXMuc2V0KCdyZWNvcmRJZHMnLCAocmVjb3JkSWRzIHx8IFtdKS5qb2luKCcsJykpXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9idWxrLyR7YWN0aW9uTmFtZX1gLFxuICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAuLi5heGlvc1BhcmFtcyxcbiAgICAgIGRhdGEsXG4gICAgICBwYXJhbXMsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgZGFzaGJvYXJkIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtBeGlvc1JlcXVlc3RDb25maWd9ICAgICAgIG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn0gcmVzcG9uc2UgZnJvbSB0aGUgaGFuZGxlciBmdW5jdGlvbiBkZWZpbmVkIGluXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnMjZGFzaGJvYXJkfVxuICAgKi9cbiAgYXN5bmMgZ2V0RGFzaGJvYXJkKG9wdGlvbnM6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LmdldCgnL2FwaS9kYXNoYm9hcmQnLCBvcHRpb25zKVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBoYW5kbGVyIGZ1bmN0aW9uIG9mIGdpdmVuIHBhZ2UgYW5kIHJldHVybnMgaXRzIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7R2V0UGFnZUFQSVBhcmFtc30gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+fSAgICAgcmVzcG9uc2UgZnJvbSB0aGUgaGFuZGxlciBvZiBnaXZlbiBwYWdlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkIGluIHtAbGluayBBZG1pbkJyb09wdGlvbnMjcGFnZXN9XG4gICAqL1xuICBhc3luYyBnZXRQYWdlKG9wdGlvbnM6IEdldFBhZ2VBUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHsgcGFnZU5hbWUsIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9hcGkvcGFnZXMvJHtwYWdlTmFtZX1gLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIEFwaUNsaWVudCBhcyBkZWZhdWx0LFxuICBBcGlDbGllbnQsXG59XG4iLCJleHBvcnQgY29uc3QgRk9STV9WQUxVRV9OVUxMID0gJ19fRk9STV9WQUxVRV9OVUxMX18nXG5leHBvcnQgY29uc3QgRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1QgPSAnX19GT1JNX1ZBTFVFX0VNUFRZX09CSkVDVF9fJ1xuZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfRU1QVFlfQVJSQVkgPSAnX19GT1JNX1ZBTFVFX0VNUFRZX0FSUkFZX18nXG5cbmNvbnN0IGlzT2JqZWN0T3JBcnJheSA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiAoXG4gIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgJiYgKHZhbHVlIGFzIG9iamVjdCkuY29uc3RydWN0b3IgIT09IEZpbGVcbiAgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpXG4pXG5cbi8qKlxuICogQ2hhbmdlcyBSZWNvcmRKU09OIHRoYXQgaXQgY2FuIGJlIHNlbmQgYXMgYSBGb3JtRGF0YSB0byB0aGUgYmFja2VuZC5cbiAqXG4gKiBGb3JtRGF0YSBpcyByZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBzZW5kaW5nIGZpbGVzIHZpYSB0aGUgd2lyZS4gQnV0IGl0IGhhcyBsaW1pdGF0aW9ucy5cbiAqIE5hbWVseSBpdCBjYW4gb25seSB0cmFuc3BvcnQgZmlsZXMgYW5kIHN0cmluZ3MuIFRoYXQgaXMgd2h5IHdlIGhhdmUgdG8gY29udmVydCBzb21lXG4gKiBzdGFuZGFyZCB0eXBlcyBsaWtlIE5VTEwgdG8gY29uc3RhbnRzIHNvIHRoZXkgY2FuIGJlIHByb3BlcnR5IGNvbnZlcnRlZCBiYWNrIGJ5IHRoZSBiYWNrZW5kLlxuICogQW5kIHRodXMgcHJvcGVybHkgaGFuZGxlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtICAge1JlY29yZEpTT059ICByZWNvcmRcbiAqIEByZXR1cm4gIHtGb3JtRGF0YX1cbiAqL1xuZnVuY3Rpb24gcGFyYW1zVG9Gb3JtRGF0YShwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBGb3JtRGF0YSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAvLyBBc3N1bWUgdGhhdCBwYXJhbXMgYXJlIGZsYXR0ZWRcbiAgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAvLyB7QGxpbmsgdXBkYXRlUmVjb3JkfSBkb2VzIG5vdCBjaGFuZ2UgZW1wdHkgb2JqZWN0cyBcInt9XCIgLSBzbyBpbiBvcmRlciB0byBwcmV2ZW50IGhhdmluZ1xuICAgIC8vIHRoZW0gY2hhbmdlZCB0byBcIltvYmplY3QgT2JqZWN0XVwiIHdlIGhhdmUgdG8gc2V0IHRoZW0gdG8gZW1wdHkgc3RyaW5ncy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX05VTEwpXG4gICAgfVxuICAgIC8vIEZpbGUgb2JqZWN0cyBoYXMgdG8gZ28gdGhyb3VnaCBiZWNhdXNlIHRoZXkgYXJlIGhhbmRsZWQgYnkgRm9ybURhdGFcbiAgICBpZiAoaXNPYmplY3RPckFycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1EYXRhLnNldChrZXksIEZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUKVxuICAgIH1cblxuICAgIC8vIFJlc3QgZ29lcyBhcyBhIHN0YW5kYXJkIHZhbHVlXG4gICAgcmV0dXJuIGZvcm1EYXRhLnNldChrZXksIHZhbHVlIGFzIHN0cmluZylcbiAgfSlcbiAgcmV0dXJuIGZvcm1EYXRhXG59XG5cbmV4cG9ydCB7XG4gIHBhcmFtc1RvRm9ybURhdGEgYXMgZGVmYXVsdCxcbiAgcGFyYW1zVG9Gb3JtRGF0YSxcbn1cbiIsImltcG9ydCB7IE5vdGljZU1lc3NhZ2VJblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlIH0gZnJvbSAnLi4vLi4vaG9jL3dpdGgtbm90aWNlJ1xuXG5leHBvcnQgY29uc3QgQUREX05PVElDRSA9ICdBRERfTk9USUNFJ1xuXG5leHBvcnQgdHlwZSBBZGROb3RpY2VSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIEFERF9OT1RJQ0U7XG4gIGRhdGE6IE5vdGljZU1lc3NhZ2VJblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgYWRkTm90aWNlID0gKGRhdGE6IE5vdGljZU1lc3NhZ2UgPSB7IG1lc3NhZ2U6ICcnIH0pOiBBZGROb3RpY2VSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBBRERfTk9USUNFLFxuICBkYXRhOiB7XG4gICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSksXG4gICAgdHlwZTogZGF0YS50eXBlIHx8ICdzdWNjZXNzJyxcbiAgICBwcm9ncmVzczogMCxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkTm90aWNlIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlJ1xuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uL2hvYy93aXRoLW5vdGljZSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgdXNlTm90aWNlXG4gKiBAYWxpYXMgQWRkTm90aWNlXG4gKi9cbmV4cG9ydCB0eXBlIEFkZE5vdGljZSA9IChub3RpY2U6IE5vdGljZU1lc3NhZ2UpID0+IGFueTtcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBIb29rIHdoaWNoIGFsbG93cyB5b3UgdG8gYWRkIG5vdGljZSBtZXNzYWdlIHRvIHRoZSBhcHAuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgdXNlTm90aWNlLCBCdXR0b24gfSBmcm9tICdhZG1pbi1icm8nXG4gKlxuICogY29uc3QgbXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IHNlbmROb3RpY2UgPSB1c2VOb3RpY2UoKVxuICogICByZW5kZXIgKFxuICogICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2VuZE5vdGljZSh7IG1lc3NhZ2U6ICdJIGFtIGF3ZXNvbWUnIH0pfT5JIGFtIGF3ZXNvbWU8L0J1dHRvbj5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBidW5kbGVcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZU5vdGljZSA9ICgpOiBBZGROb3RpY2UgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgcmV0dXJuIChub3RpY2UpOiBhbnkgPT4gZGlzcGF0Y2goYWRkTm90aWNlKG5vdGljZSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU5vdGljZVxuIiwiaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG4vKipcbiAqIEhhbmRsZXJzIG9mIGFsbCBbQWN0aW9uc117QGxpbmsgQWN0aW9ufSBvZiB0eXBlIGByZWNvcmRgIHJldHVybnMgcmVjb3JkLlxuICogRGVwZW5kaW5nIG9uIGEgcGxhY2UgYW5kIHJlc3BvbnNlIHdlIGhhdmUgdG8gbWVyZ2Ugd2hhdCB3YXMgcmV0dXJuZWRcbiAqIHRvIHRoZSBhY3R1YWwgc3RhdGUuIEl0IGlzIGRvbmUgaW4gZm9sbG93aW5nIHBsYWNlczpcbiAqIC0ge0BsaW5rIHVzZVJlY29yZH0gaG9va1xuICogLSB7QGxpbmsgUmVjb3JkSW5MaXN0fSBjb21wb25lbnRcbiAqIC0ge0BsaW5rIFJlY29yZEFjdGlvbn0gY29tcG9uZW50XG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgbWVyZ2VSZWNvcmRSZXNwb25zZSA9IChyZWNvcmQ6IFJlY29yZEpTT04sIHJlc3BvbnNlOiBSZWNvcmRBY3Rpb25SZXNwb25zZSk6IFJlY29yZEpTT04gPT4gKHtcbiAgLy8gd2Ugc3RhcnQgZnJvbSB0aGUgcmVzcG9uc2UgYmVjYXVzZSBpdCBjYW4gaGF2ZSBkaWZmZXJlbnQgcmVjb3JkQWN0aW9ucyBvciBidWxrQWN0aW9uc1xuICAuLi4ocmVzcG9uc2UucmVjb3JkIHx8IHJlY29yZCksXG4gIC8vIHJlY29yZHMgaGFzIHRvIGJlIHJlc2V0IGV2ZXJ5IHRpbWUgYmVjYXVzZSBzbyB0aGF0IHVzZXIgd29udFxuICAvLyBzZWUgb2xkIGVycm9ycyB3aGljaCBhcmUgbm90IHJlbGV2YW50IGFueW1vcmVcbiAgZXJyb3JzOiByZXNwb25zZS5yZWNvcmQuZXJyb3JzLFxuICBwb3B1bGF0ZWQ6IHsgLi4ucmVjb3JkLnBvcHVsYXRlZCwgLi4ucmVzcG9uc2UucmVjb3JkLnBvcHVsYXRlZCB9LFxuICBwYXJhbXM6IHsgLi4ucmVjb3JkLnBhcmFtcywgLi4ucmVzcG9uc2UucmVjb3JkLnBhcmFtcyB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VSZWNvcmRSZXNwb25zZVxuIiwiY29uc3QgREVMSU1JVEVSID0gJy4nXG5cblxuZXhwb3J0IHsgREVMSU1JVEVSIH1cbiIsImltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4vZmxhdC50eXBlcydcbi8vIHRoaXMgaXMgdGhlIHJlZ2V4IHVzZWQgdG8gZmluZCBhbGwgZXhpc3RpbmcgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIGEga2V5XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0eUtleVJlZ2V4ID0gKHByb3BlcnR5UGF0aDogc3RyaW5nLCBvcHRpb25zPzogR2V0T3B0aW9ucyk6IFJlZ0V4cCA9PiB7XG4gIGNvbnN0IGRlbGltaXRlciA9IG5ldyBSZWdFeHAoYFxcXFwke0RFTElNSVRFUn1gLCAnZycpXG4gIGNvbnN0IGVzY2FwZWREZWxpbWl0ZXIgPSBgXFxcXCR7REVMSU1JVEVSfWBcbiAgLy8gYnV0IGZvciBgbmVzdGVkLjEucHJvcGVydHkuMGAgaXQgd2lsbCBwcm9kdWNlIGBuZXN0ZWQoXFwufFxcLlxcZCtcXC4pMShcXC58XFwuXFxkK1xcLilwcm9wZXJ0eS4wYFxuICAvLyBhbmQgdGhpcyBpcyBpbnRlbnRpb25hbCBiZWNhdXNlIHVzZXIgY2FuIGdpdmUgYW4gb25lIGluZGV4IGluIHByb3BlcnR5IHBhdGggZm9yIHdpdGggZGVlcGx5XG4gIC8vIG5lc3RlZCBhcnJheXNcbiAgY29uc3QgZXNjYXBlZERlbGltaXRlck9ySW5kZXggPSBgKCR7ZXNjYXBlZERlbGltaXRlcn18JHtlc2NhcGVkRGVsaW1pdGVyfVxcXFxkKyR7ZXNjYXBlZERlbGltaXRlcn0pYFxuICBjb25zdCBwYXRoID0gb3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzXG4gICAgPyBwcm9wZXJ0eVBhdGgucmVwbGFjZShkZWxpbWl0ZXIsIGVzY2FwZWREZWxpbWl0ZXJPckluZGV4KVxuICAgIDogcHJvcGVydHlQYXRoLnJlcGxhY2UoZGVsaW1pdGVyLCBlc2NhcGVkRGVsaW1pdGVyKVxuICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cGF0aH0oJHwke2VzY2FwZWREZWxpbWl0ZXJ9KWAsICcnKVxufVxuIiwiaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcywgR2V0T3B0aW9ucyB9IGZyb20gJy4vZmxhdC50eXBlcydcblxuLyoqXG4gKiBAbG9hZCAuL3NlbGVjdC1wYXJhbXMuZG9jLm1kXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7R2V0T3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3Qgc2VsZWN0UGFyYW1zID0gKFxuICBwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsXG4gIHByb3BlcnRpZXM6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4gIG9wdGlvbnM/OiBHZXRPcHRpb25zLFxuKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHByb3BlcnR5QXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXVxuICBjb25zdCBzZWxlY3RlZCA9IHByb3BlcnR5QXJyYXlcbiAgICAuZmlsdGVyKHByb3BlcnR5UGF0aCA9PiAhIXByb3BlcnR5UGF0aClcbiAgICAucmVkdWNlKChnbG9iYWxNZW1vLCBwcm9wZXJ0eVBhdGgpID0+IHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gcHJvcGVydHlLZXlSZWdleChwcm9wZXJ0eVBhdGgsIG9wdGlvbnMpXG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC8vIGZpbHRlciBhbGwga2V5cyB3aGljaCBzdGFydHMgd2l0aCBwcm9wZXJ0eSBwYXRoXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5tYXRjaChyZWdleCkpXG4gICAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgICAgIG1lbW9ba2V5XSA9IChwYXJhbXNba2V5XSBhcyBzdHJpbmcpXG4gICAgICAgICAgcmV0dXJuIG1lbW9cbiAgICAgICAgfSwge30gYXMgRmxhdHRlblBhcmFtcylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdsb2JhbE1lbW8sXG4gICAgICAgIC4uLmZpbHRlcmVkLFxuICAgICAgfVxuICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gIHJldHVybiBzZWxlY3RlZFxufVxuXG5leHBvcnQgeyBzZWxlY3RQYXJhbXMgfVxuIiwiaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4vZmxhdC50eXBlcydcblxuLyoqXG4gKiBAbG9hZCAuL2ZpbHRlci1vdXQtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3QgZmlsdGVyT3V0UGFyYW1zID0gKFxuICBwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsXG4gIHByb3BlcnRpZXM6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sXG4pOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgcHJvcGVydHlBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDogW3Byb3BlcnRpZXNdXG5cbiAgcmV0dXJuIHByb3BlcnR5QXJyYXlcbiAgICAuZmlsdGVyKHByb3BlcnR5UGF0aCA9PiAhIXByb3BlcnR5UGF0aClcbiAgICAucmVkdWNlKChnbG9iYWxGaWx0ZXJlZCwgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoZ2xvYmFsRmlsdGVyZWQpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+ICFrZXkubWF0Y2gocmVnZXgpKVxuICAgICAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgICAgICBtZW1vW2tleV0gPSAocGFyYW1zW2tleV0gYXMgc3RyaW5nKVxuICAgICAgICAgIHJldHVybiBtZW1vXG4gICAgICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gICAgfSwgcGFyYW1zKVxufVxuXG5leHBvcnQgeyBmaWx0ZXJPdXRQYXJhbXMgfVxuIiwiaW1wb3J0IHsgUGF0aFBhcnRzIH0gZnJvbSAnLi9wYXRoLXBhcnRzLnR5cGUnXG5cbi8qKlxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAYWxpYXMgUGF0aFRvUGFydHNPcHRpb25zXG4gKi9cbmV4cG9ydCB0eXBlIFBhdGhUb1BhcnRzT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhcnJheSBpbmRleGVzIHNob3VsZCBiZSBza2lwcGVkIGZyb20gdGhlIG91dGNvbWUuXG4gICAqL1xuICBza2lwQXJyYXlJbmRleGVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbG9hZCAuL3BhdGgtdG8tcGFydHMuZG9jLm1kXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICAgICAgcHJvcGVydHlQYXRoXG4gKiBAcGFyYW0gICB7UGF0aFRvUGFydHNPcHRpb25zfSAgb3B0aW9uc1xuICogQHJldHVybnMgIHtQYXRoUGFydHN9XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAYWxpYXMgcGF0aFRvUGFydHNcbiAqL1xuY29uc3QgcGF0aFRvUGFydHMgPSAocHJvcGVydHlQYXRoOiBzdHJpbmcsIG9wdGlvbnM6IFBhdGhUb1BhcnRzT3B0aW9ucyA9IHt9KTogUGF0aFBhcnRzID0+IHtcbiAgbGV0IGFsbFBhcnRzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJylcbiAgaWYgKG9wdGlvbnMuc2tpcEFycmF5SW5kZXhlcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBhbGxQYXJ0cyA9IGFsbFBhcnRzLmZpbHRlcihwYXJ0ID0+IGlzTmFOKCtwYXJ0KSlcbiAgfVxuICByZXR1cm4gYWxsUGFydHMucmVkdWNlKChtZW1vLCBwYXJ0KSA9PiB7XG4gICAgaWYgKG1lbW8ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5tZW1vLFxuICAgICAgICBbbWVtb1ttZW1vLmxlbmd0aCAtIDFdLCBwYXJ0XS5qb2luKCcuJyksXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiBbcGFydF1cbiAgfSwgW10gYXMgQXJyYXk8c3RyaW5nPilcbn1cblxuZXhwb3J0IHsgcGF0aFRvUGFydHMgfVxuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5pbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuLi9mbGF0J1xuaW1wb3J0IHsgcHJvcGVydHlLZXlSZWdleCB9IGZyb20gJy4vcHJvcGVydHkta2V5LXJlZ2V4J1xuaW1wb3J0IHsgcGF0aFRvUGFydHMgfSBmcm9tICcuL3BhdGgtdG8tcGFydHMnXG5cbmNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgLy8gTm9kZSBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIEZpbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGxcbiAgfVxuICAvLyBXaW5kb3cgZW52aXJvbm1lbnRcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbi8qKlxuICogQGxvYWQgLi9zZXQuZG9jLm1kXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlQYXRoXG4gKiBAcGFyYW0ge2FueX0gW3ZhbHVlXSAgICAgICBpZiBub3QgZ2l2ZSBmdW5jdGlvbiB3aWxsIG9ubHkgdHJ5IHRvIHJlbW92ZSBvbGQga2V5c1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IHNldCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMgPSB7fSwgcHJvcGVydHlQYXRoOiBzdHJpbmcsIHZhbHVlPzogYW55KTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gcHJvcGVydHlLZXlSZWdleChwcm9wZXJ0eVBhdGgpXG5cbiAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBrZXlzXG4gIGNvbnN0IHBhcmFtc0NvcHkgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgLmZpbHRlcihrZXkgPT4gIWtleS5tYXRjaChyZWdleCkpXG4gICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICBtZW1vW2tleV0gPSBwYXJhbXNba2V5XVxuXG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdHRlbih2YWx1ZSkgYXMgYW55XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhmbGF0dGVuZWQpLmxlbmd0aCkge1xuICAgICAgICBPYmplY3Qua2V5cyhmbGF0dGVuZWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIHBhcmFtc0NvcHlbYCR7cHJvcGVydHlQYXRofSR7REVMSU1JVEVSfSR7a2V5fWBdID0gZmxhdHRlbmVkW2tleV1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcGFyYW1zQ29weVtwcm9wZXJ0eVBhdGhdID0gW11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc0NvcHlbcHJvcGVydHlQYXRoXSA9IHt9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc0NvcHlbcHJvcGVydHlQYXRoXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgLy8gd2hlbiB1c2VyIGdhdmUgeyBcIm5lc3RlZC52YWx1ZVwiOiBcInNvbWV0aGluZ1wiIH0gYW5kIGhhZCBcIm5lc3RlZFwiIHNldCB0byBgbnVsbGAsIHRoZW5cbiAgICAvLyBuZXN0ZWQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGhUb1BhcnRzKHByb3BlcnR5UGF0aCkuc2xpY2UoMCwgLTEpXG4gICAgaWYgKHBhcnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtc0NvcHkpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+ICFwYXJ0cy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgICAgICBtZW1vW2tleV0gPSBwYXJhbXNDb3B5W2tleV1cblxuICAgICAgICAgIHJldHVybiBtZW1vXG4gICAgICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJhbXNDb3B5XG59XG5cbmV4cG9ydCB7IHNldCB9XG4iLCJpbXBvcnQgeyB1bmZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBzZWxlY3RQYXJhbXMgfSBmcm9tICcuL3NlbGVjdC1wYXJhbXMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi4vZmxhdCdcbmltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbmNvbnN0IFRFTVBfSE9MRElOR19LRVkgPSAnVEVNUF9IT0xESU5HX0tFWSdcblxuLyoqXG4gKiBAbG9hZCAuL2dldC5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSAgIHBhcmFtcyAgICAgIGZsYXR0ZW4gcGFyYW1zIGZyb20gd2hpY2ggcHJvcGVydHkgaGFzIHRvIGJlIHRha2VuXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgW3Byb3BlcnR5UGF0aF0gIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge0dldE9wdGlvbnN9ICAgICAgb3B0aW9ucyAgICAgb3B0aW9uc1xuICogQHJldHVybnMge2FueX0gICAgICAgICAgICAgICAgICAgICAgIHdoZW4gcHJvcGVydHkga2V5IGV4aXN0cyBkaXJlY3RseSBpdCByZXR1cm5zIHdoYXQgaXMgaW5zaWRlLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyd2lzZSBpdCB0cmllcyB0byBmaW5kIGFueSBuZXN0ZWQgb2JqZWN0cyBhbmQgcmV0dXJuc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1cbiAqL1xuY29uc3QgZ2V0ID0gKHBhcmFtczogRmxhdHRlblBhcmFtcyA9IHt9LCBwcm9wZXJ0eVBhdGg/OiBzdHJpbmcsIG9wdGlvbnM/OiBHZXRPcHRpb25zKTogYW55ID0+IHtcbiAgaWYgKCFwcm9wZXJ0eVBhdGgpIHtcbiAgICByZXR1cm4gdW5mbGF0dGVuKHBhcmFtcylcbiAgfVxuXG4gIC8vIHdoZW4gb2JqZWN0IGhhcyB0aGlzIGtleSAtIHNpbXBseSByZXR1cm4gaXRcbiAgLy8gd2UgY2Fubm90IHJlbHkgb24gdHlwZW9mIHBhcmFtc1twcm9wZXJ0eVBhdGggIT09ICd1bmRlZmluZWQnIGJlY2F1c2UgcGFyYW1zIGNhbiBhY3R1YWxseSBiZVxuICAvLyB1bmRlZmluZWQgYW5kIGluIHN1Y2ggY2FzZSBpZiB3b3VsZCBwYXNzIGFuZCBmdW5jdGlvbiB3b3VsZCByZXR1cm4gW3VuZGVmaW5lZF1cbiAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykuZmluZChrZXkgPT4gKGtleSA9PT0gcHJvcGVydHlQYXRoKSkpIHtcbiAgICByZXR1cm4gcGFyYW1zW3Byb3BlcnR5UGF0aF1cbiAgfVxuXG4gIGNvbnN0IHJlZ2V4ID0gcHJvcGVydHlLZXlSZWdleChwcm9wZXJ0eVBhdGgsIG9wdGlvbnMpXG4gIGNvbnN0IHNlbGVjdGVkUGFyYW1zID0gc2VsZWN0UGFyYW1zKHBhcmFtcywgcHJvcGVydHlQYXRoLCBvcHRpb25zKVxuXG4gIGNvbnN0IG5lc3RlZFByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzZWxlY3RlZFBhcmFtcykucmVkdWNlKChtZW1vLCBrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IG5ld0tleSA9IGtleS5yZXBsYWNlKHJlZ2V4LCBgJHtURU1QX0hPTERJTkdfS0VZfSR7REVMSU1JVEVSfWApXG5cbiAgICAvLyB3aGVuIHVzZXIgd2FudHMgdG8gdGFrZSBhbGxTaWJsaW5ncyB3ZSBoYXZlIHRvIGZpeCB0aGUgaW5kZXhlcyBzbyBuZXN0ZWQgaXRlbXMgZnJvbVxuICAgIC8vIGRpZmZlcmVudCBzaWJsaW5ncyBkb24ndCBvdmVybGFwXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlIGZvciBrZXkgYG5lc3RlZC4xLmVsYDpcbiAgICAvLyAgJ25lc3RlZC4wLmVsLjAudmFsdWUnOiAndmFsMC4wJyxcbiAgICAvLyAgJ25lc3RlZC4wLmVsLjEudmFsdWUnOiAndmFsMC4xJyxcbiAgICAvLyAgJ25lc3RlZC4xLmVsLjAudmFsdWUnOiAndmFsMScsXG4gICAgLy8gICduZXN0ZWQuMS5lbC4xLnZhbHVlJzogJ3ZhbDInLFxuICAgIC8vXG4gICAgLy8gaGFzIHRvIGJlIGNoYW5nZWQgdG86XG4gICAgLy8gICdURU1QX0hPTERJTkdfS0VZLjAudmFsdWUnOiAndmFsMC4wJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMS52YWx1ZSc6ICd2YWwwLjEnLFxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4yLnZhbHVlJzogJ3ZhbDEnLFxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4zLnZhbHVlJzogJ3ZhbDInLFxuICAgIGlmIChvcHRpb25zPy5pbmNsdWRlQWxsU2libGluZ3MpIHtcbiAgICAgIG5ld0tleSA9IG5ld0tleS5yZXBsYWNlKFxuICAgICAgICBuZXcgUmVnRXhwKGAke1RFTVBfSE9MRElOR19LRVl9XFxcXCR7REVMSU1JVEVSfShcXFxcZCopYCksXG4gICAgICAgIGAke1RFTVBfSE9MRElOR19LRVl9JHtERUxJTUlURVJ9JHtpbmRleH1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIG1lbW9bbmV3S2V5XSA9IHNlbGVjdGVkUGFyYW1zW2tleV1cblxuICAgIHJldHVybiBtZW1vXG4gIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG5cbiAgaWYgKE9iamVjdC5rZXlzKG5lc3RlZFByb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgIHJldHVybiAodW5mbGF0dGVuKG5lc3RlZFByb3BlcnRpZXMpIGFzIHt9KVtURU1QX0hPTERJTkdfS0VZXVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IHsgZ2V0IH1cbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4vZmxhdC50eXBlcydcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0J1xuXG4vKipcbiAqIE1lcmdlcyBwYXJhbXMgdG9nZXRoZXIgYW5kIHJldHVybnMgZmxhdHRlbiByZXN1bHRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IC4uLm1lcmdlUGFyYW1zXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICovXG5jb25zdCBtZXJnZSA9IChwYXJhbXM6IGFueSA9IHt9LCAuLi5tZXJnZVBhcmFtczogQXJyYXk8YW55Pik6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCBmbGF0dGVuUGFyYW1zID0gZmxhdHRlbihwYXJhbXMpXG5cbiAgLy8gcmV2ZXJzZSBiZWNhdXNlIHdlIG1lcmdlIGZyb20gcmlnaHRcbiAgcmV0dXJuIG1lcmdlUGFyYW1zLnJldmVyc2UoKS5yZWR1Y2UoKGdsb2JhbE1lbW8sIG1lcmdlUGFyYW0pID0+IChcbiAgICBPYmplY3Qua2V5cyhtZXJnZVBhcmFtKVxuICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiAoc2V0KG1lbW8sIGtleSwgbWVyZ2VQYXJhbVtrZXldKSksIGdsb2JhbE1lbW8pXG4gICksIGZsYXR0ZW5QYXJhbXMgYXMgUmVjb3JkPHN0cmluZywgYW55Pilcbn1cblxuZXhwb3J0IHsgbWVyZ2UgfVxuIiwiaW1wb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH0gZnJvbSAnLi9maWx0ZXItb3V0LXBhcmFtcydcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldCdcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0J1xuaW1wb3J0IHsgcGF0aFRvUGFydHMgfSBmcm9tICcuL3BhdGgtdG8tcGFydHMnXG5pbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcblxuLyoqXG4gKiBAbG9hZCAuL3JlbW92ZS1wYXRoLmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5jb25zdCByZW1vdmVQYXRoID0gKHBhcmFtczogRmxhdHRlblBhcmFtcywgcGF0aDogc3RyaW5nKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIC8vIGJ5IGRlZmF1bHQgc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgZnJvbSB0aGUgb2JqZWN0XG4gIGxldCBmaWx0ZXJlZCA9IGZpbHRlck91dFBhcmFtcyhwYXJhbXMsIHBhdGgpXG5cbiAgLy8gcmV2ZXJzZSBtZWFucyB0aGF0IHdlIGl0ZXJhdGUgZnJvbSB0aGUgY2xvc2VzIHBhcmVudFxuICBjb25zdCBwYXJlbnRQYXRocyA9IHBhdGhUb1BhcnRzKHBhdGgpLnJldmVyc2UoKVxuXG4gIC8vIGJ1dCBpZiBvbmUgb2YgdGhlIHBhcmVudCBpcyBhbiBhcnJheVxuICBwYXJlbnRQYXRocy5maW5kKChwYXJlbnRQYXRoLCBwYXJlbnRJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldChwYXJhbXMsIHBhcmVudFBhdGgpXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgLy8gcHJldmlvdXMgZWxlbWVudCBpcyBzdHJpbmdpZmllZCBpbmRleCBsaWtlICdwcm9wZXJ0eS4xJ1xuICAgICAgY29uc3QgcHJldmlvdXNQYXRocyA9IHBhcmVudFBhdGhzW3BhcmVudEluZGV4IC0gMV0uc3BsaXQoREVMSU1JVEVSKVxuICAgICAgLy8gc28gdGhpcyBpcyB0aGUgaW5kZXg6IDFcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF0aEluZGV4ID0gcHJldmlvdXNQYXRoc1twcmV2aW91c1BhdGhzLmxlbmd0aCAtIDFdXG4gICAgICBwYXJlbnQuc3BsaWNlKCtwcmV2aW91c1BhdGhJbmRleCwgMSlcbiAgICAgIGZpbHRlcmVkID0gc2V0KHBhcmFtcywgcGFyZW50UGF0aCwgcGFyZW50KVxuICAgICAgLy8gdGhpcyB3b3JrcyBqdXN0IGZvciB0aGUgZmlyc3RseSBmb3VuZCBhcnJheSBpdGVtLCBiZWNhdXNlIGluIGNhc2Ugb2YgcmVtb3ZpbmcgdGhlIGxhc3Qgb25lXG4gICAgICAvLyBpdCBsZWF2ZXMgYFtdYCBhcyBhIHZhbHVlLlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIGZpbHRlcmVkXG59XG5cbmV4cG9ydCB7IHJlbW92ZVBhdGggfVxuIiwiaW1wb3J0IHsgZmxhdHRlbiwgdW5mbGF0dGVuIH0gZnJvbSAnZmxhdCdcblxuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBzZWxlY3RQYXJhbXMgfSBmcm9tICcuL3NlbGVjdC1wYXJhbXMnXG5pbXBvcnQgeyBmaWx0ZXJPdXRQYXJhbXMgfSBmcm9tICcuL2ZpbHRlci1vdXQtcGFyYW1zJ1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9zZXQnXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuL2dldCdcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZSdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aCB9IGZyb20gJy4vcmVtb3ZlLXBhdGgnXG5cbmV4cG9ydCB0eXBlIEZsYXRNb2R1bGVUeXBlID0ge1xuICBmbGF0dGVuOiB0eXBlb2YgZmxhdHRlbjtcbiAgdW5mbGF0dGVuOiB0eXBlb2YgdW5mbGF0dGVuO1xuICBzZXQ6IHR5cGVvZiBzZXQ7XG4gIGdldDogdHlwZW9mIGdldDtcbiAgc2VsZWN0UGFyYW1zOiB0eXBlb2Ygc2VsZWN0UGFyYW1zO1xuICBmaWx0ZXJPdXRQYXJhbXM6IHR5cGVvZiBmaWx0ZXJPdXRQYXJhbXM7XG4gIERFTElNSVRFUjogdHlwZW9mIERFTElNSVRFUjtcbiAgcGF0aFRvUGFydHM6IHR5cGVvZiBwYXRoVG9QYXJ0cztcbiAgcmVtb3ZlUGF0aDogdHlwZW9mIHJlbW92ZVBhdGg7XG4gIG1lcmdlOiB0eXBlb2YgbWVyZ2U7XG59XG5cbi8qKlxuICogQG1vZHVsZSBmbGF0XG4gKiBAbmFtZSBmbGF0XG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXG4gKiBAbG9hZCAuL2ZsYXQuZG9jLm1kXG4gKi9cbmV4cG9ydCBjb25zdCBmbGF0OiBGbGF0TW9kdWxlVHlwZSA9IHtcbiAgLyoqXG4gICAqIFJhdyBgZmxhdHRlbmAgZnVuY3Rpb24gZXhwb3J0ZWQgZnJvbSBvcmlnaW5hbCB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxhdCBmbGF0fVxuICAgKiBwYWNrYWdlLlxuICAgKi9cbiAgZmxhdHRlbixcbiAgLyoqXG4gICAqIFJhdyBgdW5mbGF0dGVuYCBmdW5jdGlvbiBleHBvcnRlZCBmcm9tIG9yaWdpbmFsIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9mbGF0IGZsYXR9XG4gICAqIHBhY2thZ2UuXG4gICAqL1xuICB1bmZsYXR0ZW4sXG5cbiAgc2V0LFxuICBnZXQsXG4gIHNlbGVjdFBhcmFtcyxcbiAgZmlsdGVyT3V0UGFyYW1zLFxuICByZW1vdmVQYXRoLFxuICBERUxJTUlURVIsXG4gIHBhdGhUb1BhcnRzLFxuICBtZXJnZSxcbn1cbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mbGF0J1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogSE9GIHJldHVybmluZyBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIGEgcmVjb3JkIGFuZCByZXR1cm5zIGFuIHVwZGF0ZWQgcmVjb3JkLlxuICogVGhpcyB3YXkgd2UgY2FuIHBhc3MgdGhpcyB0byBzZXRTdGF0ZSBpbiByZWFjdCwgd2hpY2ggdGFrZXMgb2xkIHN0YXRlXG4gKiAoaW4gb3VyIGNhc2UgcHJldmlvdXNSZWNvcmQpIGFzIGFuIGFyZ3VtZW50LlxuICpcbiAqIEZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0byB0aGUge0BsaW5rIE9uUHJvcGVydHlDaGFuZ2V9IGNhbGxiYWNrLCB1c2VyIHBhc3Nlc1xuICoga2V5IChwcm9wZXJ0eSBuYW1lKSBhbmQgdGhlIHZhbHVlIChmb2xsb3dlZCBieSBhbiBvcHRpb25hbCBzZWxlY3RlZFJlY29yZCkuXG4gKlxuICogVGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBmdW5jdGlvbiBpcyB0bzpcbiAqIC0gY2xlYXIgb2xkIHZhbHVlcyB1bmRlciBwYXNzZWQga2V5OiBzbyB3aGVuIHVzZXIgcGFzc2VzIHByb3BlcnR5ID09PSBgc29tZS5rZXlgXG4gKiAgIGZ1bmN0aW9uIHJlbW92ZXMgYHNvbWUua2V5LjFgLCBgc29tZS5rZXkuMmAgZXRjXG4gKiAtIHNldHMgbmV3IHZhbHVlIHVuZGVyIHRoZSBwYXNzZWQga2V5IGZvciBwcmltaXRpdmUgdHlwZXNcbiAqIC0gaW4gY2FzZSBvZiBvYmplY3RzIC0gaXQgZmxhdHRlbnMgdGhlbSBmaXJzdCBhbmQgdGhlbiBzZXRzIGFsbCB0aGUgcmVzdWx0ZWQgdmFsdWVzXG4gKiAgIHVuZGVyIHRoZSBwYXRoIHByb3ZpZGVkIGluIHRoZSBwcm9wZXJ0eSBhcmd1bWVudFxuICogLSBpdCBmaWxscyB2YWx1ZSBpbiBSZWNvcmRKU09OI3BvcHVsYXRlZCB3aGVuIHNlbGVjdGVkUmVjb3JkIGlzIGdpdmVuXG4gKiAtIGZpbmFsbHkgaXQgaW52YWxpZGF0ZXMgcG9wdWxhdGVkIGZvciBnaXZlbiBwcm9wZXJ0eVxuICpcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICBwcm9wZXJ0eSAgICAgICAgcHJvcGVydHkgdGhhdCBtdXN0IGJlIHVwZGF0ZWQsIHN1cHBvcnRzIG5lc3RpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGRvdHNcbiAqIEBwYXJhbSB7YW55fSAgICAgICAgIHZhbHVlICAgICAgICAgICB2YWx1ZSB0aGF0IG11c3QgYmUgc2V0LCB1bmRlZmluZWQgb3IgbnVsbCBpZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW5nLCB3aWxsIGJlIGZsYXR0ZW5lZFxuICogQHBhcmFtIHtSZWNvcmRKU09OfSAgc2VsZWN0ZWRSZWNvcmQgIGlmIHZhbHVlIGlzIHJlZmVyZW5jZSBJRCwgdGhpcyBtdXN0IGJlIGEgcmVjb3JkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQncyByZWZlcmVuY2luZyB0b1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlY29yZCA9IChcbiAgcHJvcGVydHk6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgc2VsZWN0ZWRSZWNvcmQ/OiBSZWNvcmRKU09OLFxuKSA9PiAocHJldmlvdXNSZWNvcmQ6IFJlY29yZEpTT04pOiBSZWNvcmRKU09OID0+IHtcbiAgbGV0IHBvcHVsYXRlZE1vZGlmaWVkID0gZmFsc2VcbiAgY29uc3QgcG9wdWxhdGVkQ29weSA9IHsgLi4ucHJldmlvdXNSZWNvcmQucG9wdWxhdGVkIH1cbiAgY29uc3QgcGFyYW1zQ29weSA9IGZsYXQuc2V0KHByZXZpb3VzUmVjb3JkLnBhcmFtcywgcHJvcGVydHksIHZhbHVlKVxuXG4gIGlmIChwcm9wZXJ0eSBpbiBwb3B1bGF0ZWRDb3B5KSB7XG4gICAgZGVsZXRlIHBvcHVsYXRlZENvcHlbcHJvcGVydHldXG4gICAgcG9wdWxhdGVkTW9kaWZpZWQgPSB0cnVlXG4gIH1cblxuICBpZiAoc2VsZWN0ZWRSZWNvcmQpIHtcbiAgICBwb3B1bGF0ZWRDb3B5W3Byb3BlcnR5XSA9IHNlbGVjdGVkUmVjb3JkXG4gICAgcG9wdWxhdGVkTW9kaWZpZWQgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnByZXZpb3VzUmVjb3JkLFxuICAgIHBhcmFtczogcGFyYW1zQ29weSxcbiAgICBwb3B1bGF0ZWQ6IHBvcHVsYXRlZE1vZGlmaWVkID8gcG9wdWxhdGVkQ29weSA6IHByZXZpb3VzUmVjb3JkLnBvcHVsYXRlZCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVSZWNvcmRcbiIsImltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBpc0VudGlyZVJlY29yZEdpdmVuID0gKFxuICBwcm9wZXJ0eU9yUmVjb3JkOiBSZWNvcmRKU09OIHwgc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbik6IGJvb2xlYW4gPT4gISEodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgIC8vIHVzZXIgY2FuIHBhc3MgcHJvcGVydHkgYW5kIG9taXQgdmFsdWUuIFRoaXMgbWFrZXMgc2Vuc2Ugd2hlblxuICAgIC8vIHRoaXJkIGFyZ3VtZW50IG9mIHRoZSBmdW5jdGlvbiAoc2VsZWN0ZWRSZWNvcmQpIGlzIHBhc3NlZCB0byBvbkNoYW5nZVxuICAgIC8vIGNhbGxiYWNrXG4gICAgJiYgISh0eXBlb2YgcHJvcGVydHlPclJlY29yZCA9PT0gJ3N0cmluZycpXG4gICAgLy8gd2UgYXNzdW1lIHRoYXQgb25seSBwYXJhbXMgaGFzIHRvIGJlIGdpdmVuXG4gICAgJiYgcHJvcGVydHlPclJlY29yZC5wYXJhbXMpXG5cbmV4cG9ydCB7XG4gIGlzRW50aXJlUmVjb3JkR2l2ZW4gYXMgZGVmYXVsdCxcbiAgaXNFbnRpcmVSZWNvcmRHaXZlbixcbn1cbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgVXNlUmVjb3JkT3B0aW9ucyB9IGZyb20gJy4vdXNlLXJlY29yZC50eXBlJ1xuXG5leHBvcnQgY29uc3QgZmlsdGVyUmVjb3JkUGFyYW1zID0gZnVuY3Rpb248VCBleHRlbmRzIFJlY29yZEpTT04+IChcbiAgcmVjb3JkOiBULFxuICBvcHRpb25zOiBVc2VSZWNvcmRPcHRpb25zID0ge30sXG4pOiBUIHtcbiAgaWYgKG9wdGlvbnMuaW5jbHVkZVBhcmFtcyAmJiByZWNvcmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgcGFyYW1zOiBmbGF0LnNlbGVjdFBhcmFtcyhyZWNvcmQucGFyYW1zIHx8IHt9LCBvcHRpb25zLmluY2x1ZGVQYXJhbXMpLFxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVjb3JkXG59XG5cbmV4cG9ydCBjb25zdCBpc1Byb3BlcnR5UGVybWl0dGVkID0gKHByb3BlcnR5TmFtZSwgb3B0aW9uczogVXNlUmVjb3JkT3B0aW9ucyA9IHt9KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgaW5jbHVkZVBhcmFtcyB9ID0gb3B0aW9uc1xuICBpZiAoaW5jbHVkZVBhcmFtcykge1xuICAgIGNvbnN0IHBhcnRzID0gZmxhdC5wYXRoVG9QYXJ0cyhwcm9wZXJ0eU5hbWUsIHsgc2tpcEFycmF5SW5kZXhlczogdHJ1ZSB9KVxuICAgIHJldHVybiBwYXJ0cy5zb21lKHBhcnQgPT4gaW5jbHVkZVBhcmFtcy5pbmNsdWRlcyhwYXJ0KSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCBBcGlDbGllbnQsIHsgUmVjb3JkQWN0aW9uQVBJUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgcGFyYW1zVG9Gb3JtRGF0YSB9IGZyb20gJy4vcGFyYW1zLXRvLWZvcm0tZGF0YSdcbmltcG9ydCB1c2VOb3RpY2UgZnJvbSAnLi4vdXNlLW5vdGljZSdcbmltcG9ydCB7IFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuL21lcmdlLXJlY29yZC1yZXNwb25zZSdcbmltcG9ydCB1cGRhdGVSZWNvcmQgZnJvbSAnLi91cGRhdGUtcmVjb3JkJ1xuaW1wb3J0IHsgVXNlUmVjb3JkT3B0aW9ucywgVXNlUmVjb3JkUmVzdWx0LCBVc2VSZWNvcmRTdWJtaXRGdW5jdGlvbiB9IGZyb20gJy4vdXNlLXJlY29yZC50eXBlJ1xuaW1wb3J0IGlzRW50aXJlUmVjb3JkR2l2ZW4gZnJvbSAnLi9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuJ1xuaW1wb3J0IHsgZmlsdGVyUmVjb3JkUGFyYW1zLCBpc1Byb3BlcnR5UGVybWl0dGVkIH0gZnJvbSAnLi9maWx0ZXItcmVjb3JkJ1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1yZWNvcmQuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQGJ1bmRsZVxuICogQHBhcmFtIHtSZWNvcmRKU09OfSBbaW5pdGlhbFJlY29yZF0sXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZFxuICogQHBhcmFtIHtVc2VSZWNvcmRPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1VzZVJlY29yZFJlc3VsdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVJlY29yZCA9IChcbiAgaW5pdGlhbFJlY29yZDogUmVjb3JkSlNPTiB8IHVuZGVmaW5lZCxcbiAgcmVzb3VyY2VJZDogc3RyaW5nLFxuICBvcHRpb25zPzogVXNlUmVjb3JkT3B0aW9ucyxcbik6IFVzZVJlY29yZFJlc3VsdCA9PiB7XG4gIC8vIHNldHRpbmcgdXAgc3RhdGVcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1N5bmNlZCwgc2V0SXNTeW5jZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGZpbHRlcmVkUmVjb3JkID0gaW5pdGlhbFJlY29yZCA/IGZpbHRlclJlY29yZFBhcmFtcyhpbml0aWFsUmVjb3JkLCBvcHRpb25zKSA6IG51bGxcblxuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTj4oe1xuICAgIC4uLmZpbHRlcmVkUmVjb3JkLFxuICAgIHBhcmFtczogZmlsdGVyZWRSZWNvcmQ/LnBhcmFtcyA/PyB7fSxcbiAgICBlcnJvcnM6IGluaXRpYWxSZWNvcmQ/LmVycm9ycyA/PyB7fSxcbiAgICBwb3B1bGF0ZWQ6IGluaXRpYWxSZWNvcmQ/LnBvcHVsYXRlZCA/PyB7fSxcbiAgfSBhcyBSZWNvcmRKU09OKVxuXG4gIC8vIGl0IGtlZXBzIHRoZSBzYW1lIGZvcm1hdCBhcyB1c2VTdGF0ZSBmdW5jdGlvbiB3aGljaCBjYW4gdGFrZSBlaXRoZXIgdmFsdWUgb3IgZnVuY3Rpb25cbiAgY29uc3Qgc2V0RmlsdGVyZWRSZWNvcmQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFJlY29yZEpTT04+PiA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld1JlY29yZCA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShyZWNvcmQpIDogdmFsdWVcbiAgICBzZXRSZWNvcmQoZmlsdGVyUmVjb3JkUGFyYW1zKG5ld1JlY29yZCwgb3B0aW9ucykpXG4gIH0sIFtvcHRpb25zLCByZWNvcmRdKVxuXG4gIGNvbnN0IG9uTm90aWNlID0gdXNlTm90aWNlKClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoXG4gICAgcHJvcGVydHlPclJlY29yZDogUmVjb3JkSlNPTiB8IHN0cmluZyxcbiAgICB2YWx1ZT86IGFueSxcbiAgICBpbmNvbWluZ1JlY29yZD86IFJlY29yZEpTT04sXG4gICk6IHZvaWQgPT4ge1xuICAgIGlmIChpc0VudGlyZVJlY29yZEdpdmVuKHByb3BlcnR5T3JSZWNvcmQsIHZhbHVlKSkge1xuICAgICAgc2V0RmlsdGVyZWRSZWNvcmQocHJvcGVydHlPclJlY29yZCBhcyBSZWNvcmRKU09OKVxuICAgIH0gZWxzZSBpZiAoaXNQcm9wZXJ0eVBlcm1pdHRlZChwcm9wZXJ0eU9yUmVjb3JkIGFzIHN0cmluZywgb3B0aW9ucykpIHtcbiAgICAgIHNldFJlY29yZCh1cGRhdGVSZWNvcmQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIHZhbHVlLCBpbmNvbWluZ1JlY29yZCkpXG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgIGBZb3UgYXJlIHRyeWluZyB0byBzZXQgcHJvcGVydHk6IFwiJHtwcm9wZXJ0eU9yUmVjb3JkIGFzIHN0cmluZ31cIiB3aGljaGAsXG4gICAgICAgICdpcyBub3QgcGVybWl0dGVkLiBUYWtlIGEgbG9vayBhdCBgdXNlUmVjb3JkKC4uLiwgeyBpbmNsdWRlUGFyYW1zOiBbLi4uXX0pYCcsXG4gICAgICBdLmpvaW4oJ1xcbicpKVxuICAgIH1cbiAgICBzZXRJc1N5bmNlZChmYWxzZSlcbiAgfSwgW3NldFJlY29yZCwgb3B0aW9uc10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0OiBVc2VSZWNvcmRTdWJtaXRGdW5jdGlvbiA9IHVzZUNhbGxiYWNrKChcbiAgICBjdXN0b21QYXJhbXMgPSB7fSwgc3VibWl0T3B0aW9ucyxcbiAgKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFJlY29yZEFjdGlvblJlc3BvbnNlPj4gPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IGZsYXQubWVyZ2UocmVjb3JkLnBhcmFtcywgY3VzdG9tUGFyYW1zKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gcGFyYW1zVG9Gb3JtRGF0YShtZXJnZWRQYXJhbXMpXG5cbiAgICBjb25zdCBwYXJhbXM6IE9taXQ8UmVjb3JkQWN0aW9uQVBJUGFyYW1zLCAnYWN0aW9uTmFtZScgfCAncmVjb3JkSWQnPiA9IHtcbiAgICAgIHJlc291cmNlSWQsXG4gICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSk6IHZvaWQgPT4gc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgoZS5sb2FkZWQgKiAxMDApIC8gZS50b3RhbCkpLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSxcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlID0gcmVjb3JkLmlkXG4gICAgICA/IGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGFjdGlvbk5hbWU6ICdlZGl0JyxcbiAgICAgICAgcmVjb3JkSWQ6IHJlY29yZC5pZCxcbiAgICAgIH0pXG4gICAgICA6IGFwaS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgYWN0aW9uTmFtZTogJ25ldycsXG4gICAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PlxuXG4gICAgcHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWNlKSB7XG4gICAgICAgIG9uTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxuICAgICAgfVxuICAgICAgaWYgKHN1Ym1pdE9wdGlvbnM/LnVwZGF0ZU9uU2F2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmQocHJldiA9PiBtZXJnZVJlY29yZFJlc3BvbnNlKHByZXYsIHJlc3BvbnNlLmRhdGEpKVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3MoMClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRJc1N5bmNlZCh0cnVlKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIG9uTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyByZWNvcmQsIENoZWNrIG91dCBjb25zb2xlIHRvIHNlZSBtb3JlIGluZm9ybWF0aW9uLicsXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB9KVxuICAgICAgc2V0UHJvZ3Jlc3MoMClcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9LCBbcmVjb3JkLCByZXNvdXJjZUlkLCBzZXRMb2FkaW5nLCBzZXRQcm9ncmVzcywgc2V0UmVjb3JkXSlcblxuICByZXR1cm4ge1xuICAgIHJlY29yZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgc3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgbG9hZGluZyxcbiAgICBwcm9ncmVzcyxcbiAgICBzZXRSZWNvcmQ6IHNldEZpbHRlcmVkUmVjb3JkLFxuICAgIGlzU3luY2VkLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlY29yZFxuIiwiaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uSGFzQ29tcG9uZW50ID0gKGFjdGlvbjogQWN0aW9uSlNPTik6IGJvb2xlYW4gPT4gKFxuICB0eXBlb2YgYWN0aW9uLmNvbXBvbmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aW9uLmNvbXBvbmVudCA9PT0gZmFsc2VcbilcbiIsImltcG9ydCB7IFJlY29yZEFjdGlvblBhcmFtcywgVmlld0hlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkhyZWYgPSAoXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgY29uc3QgYWN0aW9uTmFtZSA9IGFjdGlvbi5uYW1lXG5cbiAgaWYgKCFhY3Rpb24uY29tcG9uZW50ICYmICFhY3Rpb24uaGFzSGFuZGxlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBocmVmTWFwID0ge1xuICAgIHJlY29yZDogKCk6IHN0cmluZyA9PiBoLnJlY29yZEFjdGlvblVybCh7XG4gICAgICAuLi5wYXJhbXMgYXMgUmVjb3JkQWN0aW9uUGFyYW1zLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgICByZXNvdXJjZTogKCk6IHN0cmluZyA9PiBoLnJlc291cmNlQWN0aW9uVXJsKHtcbiAgICAgIHJlc291cmNlSWQ6IHBhcmFtcy5yZXNvdXJjZUlkLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgICBidWxrOiAoKTogc3RyaW5nID0+IGguYnVsa0FjdGlvblVybCh7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICBhY3Rpb25OYW1lLFxuICAgIH0pLFxuICB9XG4gIGlmIChocmVmTWFwW2FjdGlvbi5hY3Rpb25UeXBlXSkge1xuICAgIHJldHVybiBocmVmTWFwW2FjdGlvbi5hY3Rpb25UeXBlXSgpXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdcImFjdGlvblR5cGVcIiBzaG91bGQgYmUgZWl0aGVyIHJlY29yZCwgcmVzb3VyY2Ugb3IgYnVsaycpXG59XG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBY3Rpb25BcGk8SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPihcbiAgYWN0aW9uOiBBY3Rpb25KU09OLFxuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcyxcbiAgc2VhcmNoPzogTG9jYXRpb25bJ3NlYXJjaCddLFxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PiB7XG4gIGxldCBwcm9taXNlOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8Sz4+XG4gIGNvbnN0IHsgcmVjb3JkSWQsIHJlY29yZElkcywgcmVzb3VyY2VJZCB9ID0gcGFyYW1zXG5cbiAgc3dpdGNoIChhY3Rpb24uYWN0aW9uVHlwZSkge1xuICBjYXNlICdyZWNvcmQnOlxuICAgIGlmICghcmVjb3JkSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gc3BlY2lmeSBcInJlY29yZElkXCIgZm9yIHJlY29yZCBhY3Rpb24nKVxuICAgIH1cbiAgICBwcm9taXNlID0gYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSwgcmVjb3JkSWQsIHNlYXJjaCxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBjYXNlICdyZXNvdXJjZSc6XG4gICAgcHJvbWlzZSA9IGFwaS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBjYXNlICdidWxrJzpcbiAgICBpZiAoIXJlY29yZElkcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBzcGVjaWZ5IFwicmVjb3JkSWRzXCIgZm9yIGJ1bGsgYWN0aW9uJylcbiAgICB9XG4gICAgcHJvbWlzZSA9IGFwaS5idWxrQWN0aW9uKHtcbiAgICAgIHJlc291cmNlSWQsIGFjdGlvbk5hbWU6IGFjdGlvbi5uYW1lLCByZWNvcmRJZHMsIHNlYXJjaCxcbiAgICB9KSBhcyBhbnlcbiAgICBicmVha1xuICBkZWZhdWx0OlxuICAgIHRocm93IG5ldyBFcnJvcignXCJhY3Rpb25UeXBlXCIgc2hvdWxkIGJlIGVpdGhlciByZWNvcmQsIHJlc291cmNlIG9yIGJ1bGsnKVxuICB9XG4gIHJldHVybiBwcm9taXNlXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZCdcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcywgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBjYWxsQWN0aW9uQXBpIH0gZnJvbSAnLi9jYWxsLWFjdGlvbi1hcGknXG5cbmV4cG9ydCB0eXBlIENhbGxBcGlGdW5jdGlvbjxLIGV4dGVuZHMgQWN0aW9uUmVzcG9uc2U+ID0gKCkgPT4gUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyT3B0aW9ucyA9IHtcbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcztcbiAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXI+O1xuICBzZWFyY2g/OiBMb2NhdGlvblsnc2VhcmNoJ107XG59XG5cbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyID0gPEs+KFxuICBvcHRpb25zOiBCdWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyT3B0aW9ucyxcbik6IENhbGxBcGlGdW5jdGlvbjxLPiA9PiB7XG4gIGNvbnN0IHsgYWN0aW9uLCBwYXJhbXMsIGFjdGlvblJlc3BvbnNlSGFuZGxlciwgc2VhcmNoIH0gPSBvcHRpb25zXG4gIGNvbnN0IGNhbGxBcGk6IENhbGxBcGlGdW5jdGlvbjxLPiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9taXNlID0gY2FsbEFjdGlvbkFwaShhY3Rpb24sIHBhcmFtcywgc2VhcmNoKVxuICAgIHByb21pc2UudGhlbihhY3Rpb25SZXNwb25zZUhhbmRsZXIpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb21pc2UgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuICB9XG4gIHJldHVybiBjYWxsQXBpXG59XG4iLCJpbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvblRlc3RJZCA9IChhY3Rpb246IEFjdGlvbkpTT04pOiBzdHJpbmcgPT4gYGFjdGlvbi0ke2FjdGlvbi5uYW1lfWBcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uSGFzQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24taGFzLWNvbXBvbmVudCdcbmltcG9ydCB7IGFjdGlvbkhyZWYgfSBmcm9tICcuL2FjdGlvbi1ocmVmJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciB9IGZyb20gJy4vYnVpbGQtYWN0aW9uLWFwaS1jYWxsLXRyaWdnZXInXG5cbmV4cG9ydCB0eXBlIEJ1aWxkQWN0aW9uQ2xpY2tPcHRpb25zID0ge1xuICBhY3Rpb246IEFjdGlvbkpTT047XG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xuICBhY3Rpb25SZXNwb25zZUhhbmRsZXI6IFJldHVyblR5cGU8dHlwZW9mIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcj47XG4gIHB1c2g6IChwYXRoOiBzdHJpbmcsIHN0YXRlPzogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNsaWNrUmV0dXJuID0gKGV2ZW50OiBhbnkpID0+IGFueVxuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgPSAoXG4gIG9wdGlvbnM6IEJ1aWxkQWN0aW9uQ2xpY2tPcHRpb25zLFxuKTogQnVpbGRBY3Rpb25DbGlja1JldHVybiA9PiB7XG4gIGNvbnN0IHsgYWN0aW9uLCBwYXJhbXMsIGFjdGlvblJlc3BvbnNlSGFuZGxlciwgcHVzaCB9ID0gb3B0aW9uc1xuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXG5cbiAgICBjb25zdCBjYWxsQXBpID0gYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlcih7XG4gICAgICBwYXJhbXMsIGFjdGlvbiwgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgIH0pXG5cbiAgICBpZiAoYWN0aW9uLmd1YXJkICYmICFjb25maXJtKGFjdGlvbi5ndWFyZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYWN0aW9uSGFzQ29tcG9uZW50KGFjdGlvbikpIHtcbiAgICAgIGNhbGxBcGkoKVxuICAgIH0gZWxzZSBpZiAoaHJlZikge1xuICAgICAgcHVzaChocmVmKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoYW5kbGVBY3Rpb25DbGlja1xufVxuIiwiZXhwb3J0IGNvbnN0IFJFRlJFU0hfS0VZID0gJ3JlZnJlc2gnXG5cbi8qKlxuICogQWRkcyByZWZyZXNoPXRydWUgdG8gdGhlIHVybCwgd2hpY2ggaW4gdHVybiBzaG91bGQgY2F1c2UgbGlzdCB0byByZWxvYWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgIHVybCB0byB3aGljaCBmdW5jdGlvbiBzaG91bGQgYWRkIGByZWZyZXNoYFxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWFyY2hdIG9wdGlvbmFsIHNlYXJjaCBxdWVyeSB3aGljaCBzaG91bGQgYmUgdXBkYXRlZCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBub3QgZ2l2ZW4gZnVuY3Rpb24gd2lsbCB1c2Ugd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZEZvcmNlUmVmcmVzaCA9ICh1cmw6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zSWR4ID0gdXJsLmxhc3RJbmRleE9mKCc/JylcbiAgY29uc3QgdXJsU2VhcmNoUGFyYW1zID0gc2VhcmNoUGFyYW1zSWR4ICE9PSAtMVxuICAgID8gdXJsLnN1YnN0cmluZyhzZWFyY2hQYXJhbXNJZHggKyAxKVxuICAgIDogbnVsbFxuXG4gIGNvbnN0IG9sZFBhcmFtcyA9IHNlYXJjaCA/PyB1cmxTZWFyY2hQYXJhbXMgPz8gd2luZG93LmxvY2F0aW9uLnNlYXJjaFxuICBjb25zdCBuZXdQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKG9sZFBhcmFtcylcblxuICBuZXdQYXJhbXMuc2V0KFJFRlJFU0hfS0VZLCAndHJ1ZScpXG5cbiAgY29uc3QgbmV3VXJsID0gc2VhcmNoUGFyYW1zSWR4ICE9PSAtMVxuICAgID8gdXJsLnN1YnN0cmluZygwLCBzZWFyY2hQYXJhbXNJZHgpXG4gICAgOiB1cmxcblxuICByZXR1cm4gYCR7bmV3VXJsfT8ke25ld1BhcmFtcy50b1N0cmluZygpfWBcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0ZvcmNlUmVmcmVzaCA9IChzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaClcbiAgcmV0dXJuICEhcGFyYW1zLmdldChSRUZSRVNIX0tFWSlcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZvcmNlUmVmcmVzaCA9IChzZWFyY2g6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICBpZiAocGFyYW1zLmdldChSRUZSRVNIX0tFWSkpIHtcbiAgICBwYXJhbXMuZGVsZXRlKFJFRlJFU0hfS0VZKVxuICB9XG4gIHJldHVybiBwYXJhbXMudG9TdHJpbmcoKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5pbXBvcnQgeyBBY3Rpb25DYWxsQ2FsbGJhY2sgfSBmcm9tICcuJ1xuaW1wb3J0IHsgdXNlTm90aWNlIH0gZnJvbSAnLi4vdXNlLW5vdGljZSdcblxuXG5leHBvcnQgY29uc3QgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gKG9uQWN0aW9uQ2FsbD86IEFjdGlvbkNhbGxDYWxsYmFjaykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxuXG4gIHJldHVybiAocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZVxuICAgIGlmIChkYXRhLm5vdGljZSkge1xuICAgICAgYWRkTm90aWNlKGRhdGEubm90aWNlKVxuICAgIH1cbiAgICBpZiAoZGF0YS5yZWRpcmVjdFVybCAmJiBsb2NhdGlvbi5wYXRobmFtZSAhPT0gZGF0YS5yZWRpcmVjdFVybCkge1xuICAgICAgY29uc3QgYXBwZW5kZWQgPSBhcHBlbmRGb3JjZVJlZnJlc2goZGF0YS5yZWRpcmVjdFVybClcbiAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRlZClcbiAgICB9XG4gICAgaWYgKG9uQWN0aW9uQ2FsbCkge1xuICAgICAgb25BY3Rpb25DYWxsKGRhdGEpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyLCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcywgQWN0aW9uQ2FsbENhbGxiYWNrLCBVc2VBY3Rpb25SZXN1bHQgfSBmcm9tICcuL3VzZS1hY3Rpb24udHlwZXMnXG5pbXBvcnQgeyBhY3Rpb25IcmVmIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYnXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlcidcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1hY3Rpb24uZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqXG4gKiBAcGFyYW0ge0FjdGlvbkpTT059ICAgYWN0aW9uICAgICAgYWN0aW9uIG9iamVjdFxuICogQHBhcmFtIHtBY3Rpb25QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtBY3Rpb25DYWxsQ2FsbGJhY2t9IG9uQWN0aW9uQ2FsbCAtIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGFjdGlvbiBpcyBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge1VzZUFjdGlvblJlc3VsdH1cbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9uPEsgZXh0ZW5kcyBBY3Rpb25SZXNwb25zZT4oXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXG4gIG9uQWN0aW9uQ2FsbD86IEFjdGlvbkNhbGxDYWxsYmFjayxcbik6IFVzZUFjdGlvblJlc3VsdDxLPiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIob25BY3Rpb25DYWxsKVxuXG4gIGNvbnN0IGhyZWYgPSBhY3Rpb25IcmVmKGFjdGlvbiwgcGFyYW1zKVxuXG4gIGNvbnN0IGNhbGxBcGkgPSBidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyPEs+KHtcbiAgICBhY3Rpb24sXG4gICAgcGFyYW1zLFxuICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgfSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcbiAgICBhY3Rpb24sXG4gICAgcGFyYW1zLFxuICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBocmVmLFxuICAgIGNhbGxBcGksXG4gICAgaGFuZGxlQ2xpY2ssXG4gIH1cbn1cbiIsImltcG9ydCB7IEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uLy4uLy4uL2N1cnJlbnQtYWRtaW4uaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgU0VTU0lPTl9JTklUSUFMSVpFID0gJ1NFU1NJT05fSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgU2V0Q3VycmVudEFkbWluUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBTRVNTSU9OX0lOSVRJQUxJWkU7XG4gIGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50QWRtaW4gPSAoZGF0YTogQ3VycmVudEFkbWluIHwgbnVsbCA9IG51bGwpOiBTZXRDdXJyZW50QWRtaW5SZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVNTSU9OX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBzZXRDdXJyZW50QWRtaW4gfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3NldC1jdXJyZW50LWFkbWluJ1xuaW1wb3J0IHsgQ3VycmVudEFkbWluIH0gZnJvbSAnLi4vLi4vY3VycmVudC1hZG1pbi5pbnRlcmZhY2UnXG5cbmV4cG9ydCB0eXBlIFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlID0gW1xuICBDdXJyZW50QWRtaW4gfCBudWxsLFxuICAoY3VycmVudEFkbWluOiBDdXJyZW50QWRtaW4gfCBudWxsKSA9PiBDdXJyZW50QWRtaW4gfCB7fVxuXVxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEhvb2sgd2hpY2ggYWxsb3dzIHlvdSB0byBnZXQgYW5kIHNldCBjdXJyZW50QWRtaW5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1c2VDdXJyZW50QWRtaW4gfSBmcm9tICdhZG1pbi1icm8nXG4gKlxuICogY29uc3QgbXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IFtjdXJyZW50QWRtaW4sIHNldEN1cnJlbnRBZG1pbl0gPSB1c2VDdXJyZW50QWRtaW4oKVxuICogICAvLyAuLi5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAYnVuZGxlXG4gKiBAcmV0dXJucyB7VXNlQ3VycmVudEFkbWluUmVzcG9uc2V9XG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIHVzZUN1cnJlbnRBZG1pbigpOiBVc2VDdXJyZW50QWRtaW5SZXNwb25zZSB7XG4gIGNvbnN0IGN1cnJlbnRBZG1pbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gc3RhdGUuc2Vzc2lvbilcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIHJldHVybiBbXG4gICAgY3VycmVudEFkbWluLFxuICAgIChhZG1pbjogQ3VycmVudEFkbWluIHwgbnVsbCk6IGFueSA9PiBkaXNwYXRjaChzZXRDdXJyZW50QWRtaW4oYWRtaW4pKSxcbiAgXVxufVxuXG5leHBvcnQge1xuICB1c2VDdXJyZW50QWRtaW4sXG4gIHVzZUN1cnJlbnRBZG1pbiBhcyBkZWZhdWx0LFxufVxuXG4vKipcbiAqIFJlc3VsdCBvZiB0aGUge0BsaW5rIHVzZUN1cnJlbnRBZG1pbn0uXG4gKiBJdCBpcyBhIHR1cGxlIGNvbnRhaW5pbmcgdmFsdWUgYW5kIHRoZSBzZXR0ZXJcbiAqXG4gKiBAdHlwZWRlZiB7QXJyYXl9IFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlXG4gKiBAbWVtYmVyb2YgdXNlQ3VycmVudEFkbWluXG4gKiBAYWxpYXMgVXNlQ3VycmVudEFkbWluUmVzcG9uc2VcbiAqIEBwcm9wZXJ0eSB7Q3VycmVudEFkbWluIHwgbnVsbH0gWzBdICAgIGN1cnJlbnQgYWRtaW5cbiAqIEBwcm9wZXJ0eSB7UmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Q3VycmVudEFkbWluPj59IFsxXSAgICB2YWx1ZSBzZXR0ZXIgY29tcGF0aWJsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggcmVhY3QgdXNlU3RhdGVcbiAqL1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VMb2NhbFN0b3JhZ2VSZXN1bHQgfSBmcm9tICcuL3VzZS1sb2NhbC1zdG9yYWdlLXJlc3VsdC50eXBlJ1xuXG4vKipcbiAqIEBsb2FkIC4vdXNlLWxvY2FsLXN0b3JhZ2UuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQHNlZSBodHRwczovL3VzZWhvb2tzLmNvbS91c2VMb2NhbFN0b3JhZ2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIGtleSB1bmRlciB3aGljaCBob29rIHdpbGwgc3RvcmUgdGhlIGRhdGFcbiAqIEBwYXJhbSB7VH0gICAgICBpbml0aWFsVmFsdWUgICAgdmFsdWUgd2hpY2ggd2lsbCBiZSBzdHJpbmdpZmllZCBhbmQgc3RvcmVkXG4gKiBAcmV0dXJuIHtVc2VMb2NhbFN0b3JhZ2VSZXN1bHQ8VD59XG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXG4gKiBAYnVuZGxlXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2U8VD4oa2V5OiBzdHJpbmcsIGluaXRpYWxWYWx1ZTogVCk6IFVzZUxvY2FsU3RvcmFnZVJlc3VsdDxUPiB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuICAvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGU8VD4oKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgICAvLyBQYXJzZSBzdG9yZWQganNvbiBvciBpZiBub25lIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgIH1cbiAgfSlcblxuICAvLyBSZXR1cm4gYSB3cmFwcGVkIHZlcnNpb24gb2YgdXNlU3RhdGUncyBzZXR0ZXIgZnVuY3Rpb24gdGhhdCAuLi5cbiAgLy8gLi4uIHBlcnNpc3RzIHRoZSBuZXcgdmFsdWUgdG8gbG9jYWxTdG9yYWdlLlxuICBjb25zdCBzZXRWYWx1ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VD4+ID0gKHZhbHVlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxuICAgICAgY29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlXG4gICAgICAvLyBTYXZlIHN0YXRlXG4gICAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpXG4gICAgICAvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEEgbW9yZSBhZHZhbmNlZCBpbXBsZW1lbnRhdGlvbiB3b3VsZCBoYW5kbGUgdGhlIGVycm9yIGNhc2VcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0b3JhZ2VcbiIsImltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7XG4gIE5hdmlnYXRpb25Qcm9wcyxcbiAgTmF2aWdhdGlvbkVsZW1lbnRQcm9wcyxcbiAgTmF2aWdhdGlvbkVsZW1lbnRXaXRoQ2hpbGRyZW5Qcm9wcyxcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnLi91c2UtbG9jYWwtc3RvcmFnZS91c2UtbG9jYWwtc3RvcmFnZSdcblxuY29uc3QgaXNTZWxlY3RlZCA9IChocmVmLCBsb2NhdGlvbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGAke2hyZWZ9KCR8LylgKVxuICByZXR1cm4gISFsb2NhdGlvbi5wYXRobmFtZS5tYXRjaChyZWdFeHApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzKFxuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj4sXG4pOiBOYXZpZ2F0aW9uUHJvcHNbJ2VsZW1lbnRzJ10ge1xuICBjb25zdCBbb3BlbkVsZW1lbnRzLCBzZXRPcGVuRWxlbWVudHNdID0gdXNlTG9jYWxTdG9yYWdlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+PihcbiAgICAnc2lkZWJhckVsZW1lbnRzJywge30sXG4gIClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICBjb25zdCBlbnJpY2hSZXNvdXJjZSA9IHVzZU1lbW8oKCkgPT4gKFxuICAgIHJlc291cmNlOiBSZXNvdXJjZUpTT04sXG4gICAgaWNvbj86IHN0cmluZyxcbiAgKTogTmF2aWdhdGlvbkVsZW1lbnRXaXRoQ2hpbGRyZW5Qcm9wcyA9PiAoe1xuICAgIGhyZWY6IHJlc291cmNlLmhyZWYgfHwgdW5kZWZpbmVkLFxuICAgIGljb24sXG4gICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZChyZXNvdXJjZS5ocmVmLCBsb2NhdGlvbiksXG4gICAgbGFiZWw6IHJlc291cmNlLm5hbWUsXG4gICAgaWQ6IHJlc291cmNlLmlkLFxuICAgIG9uQ2xpY2s6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHJlc291cmNlLmhyZWYpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoaXN0b3J5LnB1c2gocmVzb3VyY2UuaHJlZilcbiAgICAgIH1cbiAgICB9LFxuICB9KSwgW2xvY2F0aW9uLCBoaXN0b3J5XSlcblxuICAvLyBncm91cGluZyByZXNvdXJjZXMgaW50byBwYXJlbnRzXG4gIGNvbnN0IG1hcCA9IHJlc291cmNlc1xuICAgIC5maWx0ZXIocmVzID0+IHJlcy5ocmVmKSAvLyBmaXJzdCBmaWx0ZXIgb3V0IHJlc291cmNlIHdoaWNoIGFyZSBub3QgdmlzaWJsZVxuICAgIC5yZWR1Y2UoKG1lbW8sIHJlc291cmNlKSA9PiB7XG4gICAgICAvLyBpbiBjYXNlIHJlc291cmNlIGhhcyB0aGUgc2FtZSBuYW1lIGFzIHBhcmVudCB3ZSBuYW1lc3BhY2UgaXQgd2l0IFwicmVzb3VyY2UtXCJcIlxuICAgICAgY29uc3Qga2V5ID0gcmVzb3VyY2UubmF2aWdhdGlvbj8ubmFtZSB8fCBbJ3Jlc291cmNlJywgcmVzb3VyY2UubmFtZV0uam9pbignLScpXG5cbiAgICAgIGlmICghcmVzb3VyY2UubmF2aWdhdGlvbiB8fCByZXNvdXJjZS5uYXZpZ2F0aW9uLm5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgbWVtb1trZXldID0gZW5yaWNoUmVzb3VyY2UocmVzb3VyY2UsIHJlc291cmNlLm5hdmlnYXRpb24/Lmljb24pXG4gICAgICB9IGVsc2UgaWYgKG1lbW9ba2V5XSAmJiBtZW1vW2tleV0uZWxlbWVudHMgJiYgcmVzb3VyY2UubmF2aWdhdGlvbj8ubmFtZSkge1xuICAgICAgICAobWVtb1trZXldLmVsZW1lbnRzIGFzIEFycmF5PE5hdmlnYXRpb25FbGVtZW50UHJvcHM+KS5wdXNoKGVucmljaFJlc291cmNlKHJlc291cmNlKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW9ba2V5XSA9IHtcbiAgICAgICAgICBlbGVtZW50czogW2VucmljaFJlc291cmNlKHJlc291cmNlKV0sXG4gICAgICAgICAgbGFiZWw6IHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUsXG4gICAgICAgICAgaWNvbjogcmVzb3VyY2UubmF2aWdhdGlvbj8uaWNvbixcbiAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiBzZXRPcGVuRWxlbWVudHMoe1xuICAgICAgICAgICAgLi4ub3BlbkVsZW1lbnRzLFxuICAgICAgICAgICAgW2tleV06ICFvcGVuRWxlbWVudHNba2V5XSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpc09wZW46ICEhb3BlbkVsZW1lbnRzW2tleV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgTmF2aWdhdGlvbkVsZW1lbnRXaXRoQ2hpbGRyZW5Qcm9wcz4pXG5cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMobWFwKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgdXNlTm90aWNlIGZyb20gJy4uL3VzZS1ub3RpY2UnXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgeyBMaXN0QWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvbGlzdC9saXN0LWFjdGlvbidcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgaGFzRm9yY2VSZWZyZXNoLCByZW1vdmVGb3JjZVJlZnJlc2ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5pbXBvcnQgeyBVc2VSZWNvcmRzUmVzdWx0IH0gZnJvbSAnLi91c2UtcmVjb3Jkcy1yZXN1bHQudHlwZSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbi8qKlxuICogQGxvYWQgLi91c2UtcmVjb3Jkcy5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgICAgICBpZCBvZiBhIHJlc291cmNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCByZWNvcmRzXG4gKiBAcmV0dXJuIHtVc2VSZWNvcmRzUmVzdWx0fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiB1c2VSZWNvcmRzKHJlc291cmNlSWQ6IHN0cmluZyk6IFVzZVJlY29yZHNSZXN1bHQge1xuICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZTxBcnJheTxSZWNvcmRKU09OPj4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMClcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGU8J2FzYyd8ICdkZXNjJz4oJ2FzYycpXG4gIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IG9uTm90aWNlID0gdXNlTm90aWNlKClcblxuICBjb25zdCBmZXRjaERhdGEgPSAoKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPExpc3RBY3Rpb25SZXNwb25zZT4+ID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcblxuICAgIGNvbnN0IHByb21pc2UgPSBhcGkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgYWN0aW9uTmFtZTogJ2xpc3QnLCByZXNvdXJjZUlkLCBwYXJhbXM6IHF1ZXJ5LFxuICAgIH0pIGFzIFByb21pc2U8QXhpb3NSZXNwb25zZTxMaXN0QWN0aW9uUmVzcG9uc2U+PlxuXG4gICAgcHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgbGlzdEFjdGlvblJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YSBhcyBMaXN0QWN0aW9uUmVzcG9uc2VcbiAgICAgIGlmIChsaXN0QWN0aW9uUmVzcG9uc2Uubm90aWNlKSB7XG4gICAgICAgIG9uTm90aWNlKGxpc3RBY3Rpb25SZXNwb25zZS5ub3RpY2UpXG4gICAgICB9XG4gICAgICBpZiAobGlzdEFjdGlvblJlc3BvbnNlLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChsaXN0QWN0aW9uUmVzcG9uc2UucmVkaXJlY3RVcmwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXRSZWNvcmRzKGxpc3RBY3Rpb25SZXNwb25zZS5yZWNvcmRzKVxuICAgICAgc2V0UGFnZShsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5wYWdlKVxuICAgICAgc2V0UGVyUGFnZShsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5wZXJQYWdlKVxuICAgICAgc2V0VG90YWwobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEudG90YWwpXG4gICAgICBzZXREaXJlY3Rpb24obGlzdEFjdGlvblJlc3BvbnNlLm1ldGEuZGlyZWN0aW9uKVxuICAgICAgc2V0U29ydEJ5KGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnNvcnRCeSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgYWRkTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZSgnZXJyb3JGZXRjaGluZ1JlY29yZHMnLCByZXNvdXJjZUlkKSxcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaGFzRm9yY2VSZWZyZXNoKGxvY2F0aW9uLnNlYXJjaCkpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZShbXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLCByZW1vdmVGb3JjZVJlZnJlc2gobG9jYXRpb24uc2VhcmNoKS50b1N0cmluZygpLFxuICAgICAgXS5qb2luKCc/JykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoRGF0YSgpXG4gICAgfVxuICB9LCBbcmVzb3VyY2VJZCwgbG9jYXRpb24uc2VhcmNoXSlcblxuICByZXR1cm4ge1xuICAgIHJlY29yZHMsXG4gICAgbG9hZGluZyxcbiAgICBwYWdlLFxuICAgIHRvdGFsLFxuICAgIGRpcmVjdGlvbixcbiAgICBzb3J0QnksXG4gICAgcGVyUGFnZSxcbiAgICBmZXRjaERhdGEsXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdXNlUmVjb3JkcyBhcyBkZWZhdWx0LFxuICB1c2VSZWNvcmRzLFxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgVXNlU2VsZWN0ZWRSZWNvcmRzUmVzdWx0IH0gZnJvbSAnLi91c2Utc2VsZWN0ZWQtcmVjb3Jkcy1yZXN1bHQudHlwZSdcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1zZWxlY3RlZC1yZWNvcmRzLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXk8UmVjb3JkSlNPTj59IHJlY29yZHMgICAgIExpc3Qgb2YgcmVjb3JkcyBvbiB3aGljaCB5b3UgY2FuIHBlcmZvcm0gYHNlbGVjdGAgYWN0aW9uXG4gKiBAcmV0dXJuIHtVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHR9XG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXG4gKiBAYnVuZGxlXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHVzZVNlbGVjdGVkUmVjb3JkcyhyZWNvcmRzOiBBcnJheTxSZWNvcmRKU09OPik6IFVzZVNlbGVjdGVkUmVjb3Jkc1Jlc3VsdCB7XG4gIGNvbnN0IFtzZWxlY3RlZFJlY29yZHMsIHNldFNlbGVjdGVkUmVjb3Jkc10gPSB1c2VTdGF0ZTxBcnJheTxSZWNvcmRKU09OPj4oW10pXG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHJlY29yZDogUmVjb3JkSlNPTik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZFJlY29yZHMuZmluZEluZGV4KHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMoWy4uLnNlbGVjdGVkUmVjb3JkcywgcmVjb3JkXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRSZWNvcmRzID0gWy4uLnNlbGVjdGVkUmVjb3Jkc11cbiAgICAgIG5ld1NlbGVjdGVkUmVjb3Jkcy5zcGxpY2Uoc2VsZWN0ZWRJbmRleCwgMSlcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhuZXdTZWxlY3RlZFJlY29yZHMpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0QWxsID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1pc3NpbmcgPSByZWNvcmRzLmZpbHRlcihyZWNvcmQgPT4gKFxuICAgICAgIXNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXG4gICAgICAmJiByZWNvcmQuYnVsa0FjdGlvbnMubGVuZ3RoXG4gICAgKSlcbiAgICBpZiAobWlzc2luZy5sZW5ndGgpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbLi4uc2VsZWN0ZWRSZWNvcmRzLCAuLi5taXNzaW5nXSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRSZWNvcmRzID0gc2VsZWN0ZWRSZWNvcmRzLmZpbHRlcihzZWxlY3RlZCA9PiAoXG4gICAgICAgICFyZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gc2VsZWN0ZWQuaWQpXG4gICAgICApKVxuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKG5ld1NlbGVjdGVkUmVjb3JkcylcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhhbmRsZVNlbGVjdCxcbiAgICBoYW5kbGVTZWxlY3RBbGwsXG4gICAgc2VsZWN0ZWRSZWNvcmRzLFxuICAgIHNldFNlbGVjdGVkUmVjb3JkcyxcbiAgfVxufVxuXG5leHBvcnQge1xuICB1c2VTZWxlY3RlZFJlY29yZHMgYXMgZGVmYXVsdCxcbiAgdXNlU2VsZWN0ZWRSZWNvcmRzLFxufVxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcmVzb3VyY2UtanNvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cbi8qKlxuICogQGxvYWQgLi91c2UtcmVzb3VyY2UuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgICAgSWQgb2YgYSByZXNvdXJjZSB5b3Ugd2FudCB0byBnZXRcbiAqL1xuY29uc3QgdXNlUmVzb3VyY2UgPSAocmVzb3VyY2VJZDogc3RyaW5nKTogUmVzb3VyY2VKU09OIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgcmVzb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eFN0YXRlKSA9PiBzdGF0ZS5yZXNvdXJjZXMpXG5cbiAgY29uc3QgZm91bmRSZXNvdXJjZSA9IHJlc291cmNlcy5maW5kKHJlc291cmNlID0+IHJlc291cmNlLmlkID09PSByZXNvdXJjZUlkKVxuXG4gIHJldHVybiBmb3VuZFJlc291cmNlXG59XG5cbmV4cG9ydCB7XG4gIHVzZVJlc291cmNlIGFzIGRlZmF1bHQsXG4gIHVzZVJlc291cmNlLFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xuaW1wb3J0IHsgdXNlTmF2aWdhdGlvblJlc291cmNlcyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuXG4vKipcbiAqIEBhbGlhcyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uUHJvcHNcbiAqIEBtZW1iZXJvZiBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25Qcm9wcyA9IHtcbiAgLyoqIExpc3Qgb2YgdGhlIHJlc291cmNlcyB3aGljaCBzaG91bGQgYmUgcmVuZGVyZWQgKi9cbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG4vKipcbiAqIEdyb3VwcyByZXNvdXJjZXMgYnkgc2VjdGlvbnMgYW5kIHJlbmRlcnMgdGhlIGxpc3QgaW4ge0BsaW5rIFNpZGViYXJ9XG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIH0gZnJvbSAnYWRtaW4tYnJvYFxuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAbmFtZSBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG4gKi9cbmNvbnN0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbDogRkM8U2lkZWJhclJlc291cmNlU2VjdGlvblByb3BzPiA9ICh7IHJlc291cmNlcyB9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlTmF2aWdhdGlvblJlc291cmNlcyhyZXNvdXJjZXMpXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgnbmF2aWdhdGlvbicpfVxuICAgICAgZWxlbWVudHM9e2VsZW1lbnRzfVxuICAgIC8+XG4gIClcbn1cblxuLy8gUm9sbHVwIGNhbm5vdCBoYW5kbGUgdHlwZSBleHBvcnRzIHdlbGwgLSB0aGF0IGlzIHdoeSB3ZSBuZWVkIHRvIGRvIHRoaXMgaGFjayB3aXRoXG4vLyBleHBvcnRpbmcgZGVmYXVsdCBhbmQgbmFtZWQgU2lkZWJhclJlc291cmNlU2VjdGlvblxuY29uc3QgU2lkZWJhclJlc291cmNlU2VjdGlvbiA9IGFsbG93T3ZlcnJpZGUoU2lkZWJhclJlc291cmNlU2VjdGlvbk9yaWdpbmFsLCAnU2lkZWJhclJlc291cmNlU2VjdGlvbicpXG5cbmV4cG9ydCB7IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gfVxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclJlc291cmNlU2VjdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCb3gsIGNzc0NsYXNzLCB0aGVtZUdldCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQnJhbmRpbmdPcHRpb25zIH0gZnJvbSAnc3JjL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUGFnZUpTT04gfSBmcm9tICdzcmMvZnJvbnRlbmQvaW50ZXJmYWNlcydcbmltcG9ydCBTaWRlYmFyQnJhbmRpbmcgZnJvbSAnLi9zaWRlYmFyLWJyYW5kaW5nJ1xuaW1wb3J0IFNpZGViYXJQYWdlcyBmcm9tICcuL3NpZGViYXItcGFnZXMnXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgU2lkZWJhckZvb3RlciBmcm9tICcuL3NpZGViYXItZm9vdGVyJ1xuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xuXG5pbXBvcnQgU2lkZWJhclJlc291cmNlU2VjdGlvbiBmcm9tICcuL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbidcblxudHlwZSBQcm9wcyA9IHtcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRTaWRlYmFyID0gc3R5bGVkKEJveClgXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICYuaGlkZGVuIHtcbiAgICBsZWZ0OiAtJHt0aGVtZUdldCgnc2l6ZXMnLCAnc2lkZWJhcldpZHRoJyl9O1xuICB9XG4gICYudmlzaWJsZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuYFxuXG5TdHlsZWRTaWRlYmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IFsnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnYWJzb2x1dGUnLCAnaW5oZXJpdCddLFxuICB3aWR0aDogJ3NpZGViYXJXaWR0aCcsXG4gIGJvcmRlclJpZ2h0OiAnZGVmYXVsdCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHpJbmRleDogNTAsXG4gIGJnOiAnd2hpdGUnLFxufVxuXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc1Zpc2libGUgfSA9IHByb3BzXG4gIGNvbnN0IFticmFuZGluZywgcmVzb3VyY2VzLCBwYWdlc106IFtCcmFuZGluZ09wdGlvbnMsIFJlc291cmNlSlNPTltdLCBQYWdlSlNPTltdXSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gW1xuICAgICAgc3RhdGUuYnJhbmRpbmcsIHN0YXRlLnJlc291cmNlcywgc3RhdGUucGFnZXMsXG4gICAgXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNpZGViYXJcbiAgICAgIGNsYXNzTmFtZT17aXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG4gICAgPlxuICAgICAgPFNpZGViYXJCcmFuZGluZyBicmFuZGluZz17YnJhbmRpbmd9IC8+XG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdSZXNvdXJjZXMnKX0+XG4gICAgICAgIDxTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIHJlc291cmNlcz17cmVzb3VyY2VzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8U2lkZWJhclBhZ2VzIHBhZ2VzPXtwYWdlc30gLz5cbiAgICAgIHticmFuZGluZz8uc29mdHdhcmVCcm90aGVycyAmJiA8U2lkZWJhckZvb3RlciAvPn1cbiAgICA8L1N0eWxlZFNpZGViYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyLCAnU2lkZWJhcicpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDdXJyZW50VXNlck5hdiwgQm94LCBDdXJyZW50VXNlck5hdlByb3BzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmV4cG9ydCB0eXBlIExvZ2dlZEluUHJvcHMgPSB7XG4gIHNlc3Npb246IEN1cnJlbnRBZG1pbjtcbiAgcGF0aHM6IHtcbiAgICBsb2dvdXRQYXRoOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IExvZ2dlZEluOiBSZWFjdC5GQzxMb2dnZWRJblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNlc3Npb24sIHBhdGhzIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IGRyb3BBY3Rpb25zOiBDdXJyZW50VXNlck5hdlByb3BzWydkcm9wQWN0aW9ucyddID0gW3tcbiAgICBsYWJlbDogdHJhbnNsYXRlQnV0dG9uKCdsb2dvdXQnKSxcbiAgICBvbkNsaWNrOiAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhzLmxvZ291dFBhdGhcbiAgICB9LFxuICAgIGljb246ICdMb2dvdXQnLFxuICB9XVxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleFNocmluaz17MH0+XG4gICAgICA8Q3VycmVudFVzZXJOYXZcbiAgICAgICAgbmFtZT17c2Vzc2lvbi5lbWFpbH1cbiAgICAgICAgdGl0bGU9e3Nlc3Npb24udGl0bGV9XG4gICAgICAgIGF2YXRhclVybD17c2Vzc2lvbi5hdmF0YXJVcmx9XG4gICAgICAgIGRyb3BBY3Rpb25zPXtkcm9wQWN0aW9uc31cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgT3ZlcnJpZGFibGVMb2dnZWRJbiA9IGFsbG93T3ZlcnJpZGUoTG9nZ2VkSW4sICdMb2dnZWRJbicpXG5cbmV4cG9ydCB7XG4gIE92ZXJyaWRhYmxlTG9nZ2VkSW4gYXMgZGVmYXVsdCxcbiAgT3ZlcnJpZGFibGVMb2dnZWRJbiBhcyBMb2dnZWRJbixcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgVGV4dCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcbiAgdmVyc2lvbnM6IFZlcnNpb25Qcm9wcztcbn1cblxuY29uc3QgVmVyc2lvbkl0ZW0gPSBzdHlsZWQoVGV4dClgXG4gIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDA7XG5gXG5cblZlcnNpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogWydub25lJywgJ2Jsb2NrJ10sXG4gIGNvbG9yOiAnZ3JleTEwMCcsXG59XG5cbmV4cG9ydCBjb25zdCBWZXJzaW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9ucyB9ID0gcHJvcHNcbiAgY29uc3QgeyBhZG1pbiwgYXBwIH0gPSB2ZXJzaW9uc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleCBmbGV4R3Jvdz17MX0gcHk9XCJkZWZhdWx0XCIgcHg9XCJ4eGxcIiBjbGFzc05hbWU9e2Nzc0NsYXNzKCdWZXJzaW9uJyl9PlxuICAgICAge2FkbWluICYmIChcbiAgICAgICAgPFZlcnNpb25JdGVtPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnYWRtaW5WZXJzaW9uJywgeyB2ZXJzaW9uOiBhZG1pbiB9KX1cbiAgICAgICAgPC9WZXJzaW9uSXRlbT5cbiAgICAgICl9XG4gICAgICB7YXBwICYmIChcbiAgICAgICAgPFZlcnNpb25JdGVtPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnYXBwVmVyc2lvbicsIHsgdmVyc2lvbjogYXBwIH0pfVxuICAgICAgICA8L1ZlcnNpb25JdGVtPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNzc0NsYXNzLCBCb3gsIEljb24sIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgTG9nZ2VkSW4gZnJvbSAnLi9sb2dnZWQtaW4nXG5pbXBvcnQgVmVyc2lvbiBmcm9tICcuL3ZlcnNpb24nXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc2l6ZXMubmF2YmFySGVpZ2h0fTtcbiAgYm9yZGVyLWJvdHRvbTogJHt0aGVtZUdldCgnYm9yZGVycycsICdkZWZhdWx0Jyl9O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1zaHJpbms6IDA7XG5gXG5cbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogY3NzQ2xhc3MoJ05hdkJhcicpLFxufVxuXG50eXBlIFByb3BzID0ge1xuICB0b2dnbGVTaWRlYmFyOiAoYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVG9wQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVTaWRlYmFyIH0gPSBwcm9wc1xuICBjb25zdCBbc2Vzc2lvbiwgcGF0aHMsIHZlcnNpb25zXSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gW3N0YXRlLnNlc3Npb24sIHN0YXRlLnBhdGhzLCBzdGF0ZS52ZXJzaW9uc10sXG4gIClcbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPEJveFxuICAgICAgICBweT1cImxnXCJcbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZyddfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxuICAgICAgICBkaXNwbGF5PXtbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ25vbmUnXX1cbiAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgID5cbiAgICAgICAgPEljb24gaWNvbj1cIk1lbnVcIiBzaXplPXszMn0gY29sb3I9XCJncmV5MTAwXCIgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPFZlcnNpb24gdmVyc2lvbnM9e3ZlcnNpb25zfSAvPlxuICAgICAge3Nlc3Npb24gJiYgc2Vzc2lvbi5lbWFpbCA/IDxMb2dnZWRJbiBzZXNzaW9uPXtzZXNzaW9ufSBwYXRocz17cGF0aHN9IC8+IDogJyd9XG4gICAgPC9OYXZCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShUb3BCYXIsICdUb3BiYXInKVxuIiwiZXhwb3J0IGNvbnN0IERST1BfTk9USUNFID0gJ0RST1BfTk9USUNFJ1xuXG5leHBvcnQgdHlwZSBEcm9wTm90aWNlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBEUk9QX05PVElDRTtcbiAgZGF0YToge1xuICAgIG5vdGljZUlkOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBkcm9wTm90aWNlID0gKG5vdGljZUlkOiBzdHJpbmcpOiBEcm9wTm90aWNlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogJ0RST1BfTk9USUNFJyxcbiAgZGF0YTogeyBub3RpY2VJZCB9LFxufSlcbiIsIlxuZXhwb3J0IGNvbnN0IFNFVF9OT1RJQ0VfUFJPR1JFU1MgPSAnU0VUX05PVElDRV9QUk9HUkVTUydcblxuZXhwb3J0IHR5cGUgU2V0Tm90aWNlUHJvZ3Jlc3MgPSB7XG4gIG5vdGljZUlkOiBzdHJpbmc7XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFNldE5vdGljZVByb2dyZXNzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBTRVRfTk9USUNFX1BST0dSRVNTO1xuICBkYXRhOiBTZXROb3RpY2VQcm9ncmVzcztcbn1cblxuZXhwb3J0IGNvbnN0IHNldE5vdGljZVByb2dyZXNzID0gKGRhdGE6IFNldE5vdGljZVByb2dyZXNzKTogU2V0Tm90aWNlUHJvZ3Jlc3NSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTk9USUNFX1BST0dSRVNTLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IE1lc3NhZ2VCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IE5vdGljZU1lc3NhZ2VJblN0YXRlLCBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBkcm9wTm90aWNlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9kcm9wLW5vdGljZSdcbmltcG9ydCB7IHNldE5vdGljZVByb2dyZXNzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzJ1xuXG5jb25zdCBUSU1FX1RPX0RJU0FQUEVBUiA9IDNcblxuZXhwb3J0IHR5cGUgTm90aWZ5UHJvZ3Jlc3MgPSAob3B0aW9uczoge1xuICBub3RpY2VJZDogc3RyaW5nOyBwcm9ncmVzczogbnVtYmVyO1xufSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50UHJvcHMgPSB7XG4gIG5vdGljZTogTm90aWNlTWVzc2FnZUluU3RhdGU7XG4gIGRyb3A6ICgpID0+IGFueTtcbiAgbm90aWZ5UHJvZ3Jlc3M6IE5vdGlmeVByb2dyZXNzO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50U3RhdGUgPSB7XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpY2VFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5vdGljZUVsZW1lbnRQcm9wcywgTm90aWNlRWxlbWVudFN0YXRlPiB7XG4gIHByaXZhdGUgdGltZXI6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBub3RpY2UgfSA9IHByb3BzXG4gICAgdGhpcy50aW1lciA9IG51bGxcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5wcm9ncmVzcyB8fCAwLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZHJvcCwgbm90aWNlLCBub3RpZnlQcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gc3RhdGUucHJvZ3Jlc3MgKyAxMDAgLyBUSU1FX1RPX0RJU0FQUEVBUlxuICAgICAgICBub3RpZnlQcm9ncmVzcyh7IG5vdGljZUlkOiBub3RpY2UuaWQsIHByb2dyZXNzIH0pXG4gICAgICAgIHJldHVybiB7IHByb2dyZXNzIH1cbiAgICAgIH0pXG4gICAgfSwgMTAwMClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgICAgfVxuICAgICAgZHJvcCgpXG4gICAgfSwgMTAwMCAqIChUSU1FX1RPX0RJU0FQUEVBUiArIDEpKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IG5vdGljZSwgZHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TWVzc2FnZUJveFxuICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogJzQ4MHB4JyB9fVxuICAgICAgICBtZXNzYWdlPXtub3RpY2UubWVzc2FnZX1cbiAgICAgICAgdmFyaWFudD17bm90aWNlLnR5cGUgPT09ICdzdWNjZXNzJyA/ICdzdWNjZXNzJyA6ICdkYW5nZXInfVxuICAgICAgICBvbkNsb3NlQ2xpY2s9e2Ryb3B9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG50eXBlIE5vdGljZUJveFByb3BzRnJvbVN0YXRlID0ge1xuICBub3RpY2VzOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT47XG59XG5cbnR5cGUgTm90aWNlQm94RGlzcGF0Y2hGcm9tU3RhdGUgPSB7XG4gIGRyb3A6IChub3RpY2VJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBub3RpZnlQcm9ncmVzczogTm90aWZ5UHJvZ3Jlc3M7XG59XG5cbmNvbnN0IE5vdGljZUJveDogUmVhY3QuRkM8Tm90aWNlQm94UHJvcHNGcm9tU3RhdGUgJiBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcm9wLCBub3RpY2VzLCBub3RpZnlQcm9ncmVzcyB9ID0gcHJvcHNcbiAgY29uc3Qgbm90aWNlID0gbm90aWNlcy5sZW5ndGggPyBub3RpY2VzW25vdGljZXMubGVuZ3RoIC0gMV0gOiBudWxsXG4gIGlmIChub3RpY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cIm5vdGljZS13cmFwcGVyXCI+XG4gICAgICAgIDxOb3RpY2VFbGVtZW50XG4gICAgICAgICAga2V5PXtub3RpY2UuaWR9XG4gICAgICAgICAgbm90aWNlPXtub3RpY2V9XG4gICAgICAgICAgZHJvcD17KCk6IHZvaWQgPT4gZHJvcChub3RpY2UuaWQpfVxuICAgICAgICAgIG5vdGlmeVByb2dyZXNzPXtub3RpZnlQcm9ncmVzc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgLz5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBOb3RpY2VCb3hQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBub3RpY2VzOiBzdGF0ZS5ub3RpY2VzLFxufSlcblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpOiBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZSA9PiAoe1xuICBkcm9wOiAobm90aWNlSWQ6IHN0cmluZyk6IHZvaWQgPT4gZGlzcGF0Y2goZHJvcE5vdGljZShub3RpY2VJZCkpLFxuICBub3RpZnlQcm9ncmVzczogKHtcbiAgICBub3RpY2VJZCwgcHJvZ3Jlc3MsXG4gIH0pOiB2b2lkID0+IGRpc3BhdGNoKHNldE5vdGljZVByb2dyZXNzKHsgbm90aWNlSWQsIHByb2dyZXNzIH0pKSxcbn0pXG5cbmNvbnN0IENvbm5lY3RlZE5vdGljZUJveCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShOb3RpY2VCb3gpXG5cbmV4cG9ydCB7XG4gIENvbm5lY3RlZE5vdGljZUJveCBhcyBkZWZhdWx0LFxuICBDb25uZWN0ZWROb3RpY2VCb3ggYXMgTm90aWNlQm94LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7XG4gIEJveCxcbiAgSDIsXG4gIEg1LFxuICBINCxcbiAgVGV4dCxcbiAgSWxsdXN0cmF0aW9uLFxuICBJbGx1c3RyYXRpb25Qcm9wcyxcbiAgQnV0dG9uLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmNvbnN0IHBhZ2VIZWFkZXJIZWlnaHQgPSAyODRcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWSA9IDc0XG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1ggPSAyNTBcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxCb3ggcG9zaXRpb249XCJyZWxhdGl2ZVwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9ezUwfVxuICAgICAgICBsZWZ0PXstMTB9XG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XG4gICAgICAgIGFuaW1hdGVcbiAgICAgID5cbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiUm9ja2V0XCIgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgdG9wPXstNzB9XG4gICAgICAgIHJpZ2h0PXstMTV9XG4gICAgICAgIG9wYWNpdHk9e1swLjIsIDAuNCwgMV19XG4gICAgICAgIGFuaW1hdGVcbiAgICAgID5cbiAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiTW9vblwiIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3hcbiAgICAgICAgYmc9XCJncmV5MTAwXCJcbiAgICAgICAgaGVpZ2h0PXtwYWdlSGVhZGVySGVpZ2h0fVxuICAgICAgICBweT17cGFnZUhlYWRlclBhZGRpbmdZfVxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJywgcGFnZUhlYWRlclBhZGRpbmdYXX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxIMj57dHJhbnNsYXRlTWVzc2FnZSgnd2VsY29tZU9uQm9hcmRfdGl0bGUnKX08L0gyPlxuICAgICAgICAgIDxUZXh0IG9wYWNpdHk9ezAuOH0+XG4gICAgICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnd2VsY29tZU9uQm9hcmRfc3VidGl0bGUnKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbnR5cGUgQm94VHlwZSA9IHtcbiAgdmFyaWFudDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJveGVzID0gKHsgdHJhbnNsYXRlTWVzc2FnZSB9KTogQXJyYXk8Qm94VHlwZT4gPT4gW3tcbiAgdmFyaWFudDogJ1BsYW5ldCcsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdhZGRpbmdSZXNvdXJjZXNfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtcGFzc2luZy1yZXNvdXJjZXMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdEb2N1bWVudENoZWNrJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplUmVzb3VyY2VzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b21pemluZy1yZXNvdXJjZXMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdEb2N1bWVudFNlYXJjaCcsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1hY3Rpb25zLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnRmxhZ0luQ29nJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3dyaXRlT3duQ29tcG9uZW50c190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnd3JpdGVPd25Db21wb25lbnRzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC13cml0aW5nLXJlYWN0LWNvbXBvbmVudHMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdGb2xkZXJzJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbURhc2hib2FyZF90aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9tRGFzaGJvYXJkX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b20tZGFzaGJvYXJkLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnQXN0cm9uYXV0JyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgncm9sZUJhc2VkQWNjZXNzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1yYmFjLmh0bWwnLFxufV1cblxuY29uc3QgQ2FyZCA9IHN0eWxlZChCb3gpYFxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSk6IHN0cmluZyA9PiAoZmxleCA/ICdmbGV4JyA6ICdibG9jaycpfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeTEwMH07XG4gICAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNoYWRvd3MuY2FyZEhvdmVyfTtcbiAgfVxuYFxuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnY2FyZCcsXG59XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8RGFzaGJvYXJkSGVhZGVyIC8+XG4gICAgICA8Qm94XG4gICAgICAgIG10PXtbJ3hsJywgJ3hsJywgJy0xMDBweCddfVxuICAgICAgICBtYj1cInhsXCJcbiAgICAgICAgbXg9e1swLCAwLCAwLCAnYXV0byddfVxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJywgJ3h4bCcsICcwJ119XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBmbGV4XG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICB3aWR0aD17WzEsIDEsIDEsIDEwMjRdfVxuICAgICAgPlxuICAgICAgICB7Ym94ZXMoeyB0cmFuc2xhdGVNZXNzYWdlIH0pLm1hcCgoYm94LCBpbmRleCkgPT4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAyLCAxIC8gM119IHA9XCJsZ1wiPlxuICAgICAgICAgICAgPENhcmQgYXM9XCJhXCIgaHJlZj17Ym94LmhyZWZ9PlxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SWxsdXN0cmF0aW9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXtib3gudmFyaWFudCBhcyBJbGx1c3RyYXRpb25Qcm9wc1sndmFyaWFudCddfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SDUgbXQ9XCJsZ1wiPntib3gudGl0bGV9PC9INT5cbiAgICAgICAgICAgICAgICA8VGV4dD57Ym94LnN1YnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gcD1cImxnXCI+XG4gICAgICAgICAgPENhcmQgYXM9XCJhXCIgZmxleCBocmVmPVwiaHR0cHM6Ly9qb2luLnNsYWNrLmNvbS90L2FkbWluYnJvL3NoYXJlZF9pbnZpdGUvenQtZGpzcXh4cHotX1lDUzhVTXRROUFkZTZEUHVMUjdad1wiPlxuICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT48SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJTbGFja0xvZ29cIiAvPjwvQm94PlxuICAgICAgICAgICAgPEJveCBtbD1cInhsXCI+XG4gICAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnY29tbXVuaXR5X3RpdGxlJyl9PC9IND5cbiAgICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2NvbW11bml0eV9zdWJ0aXRsZScpfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAxIC8gMl19IHA9XCJsZ1wiPlxuICAgICAgICAgIDxDYXJkIGFzPVwiYVwiIGZsZXggaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2Z0d2FyZUJyb3RoZXJzL2FkbWluLWJyby9pc3N1ZXNcIj5cbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+PElsbHVzdHJhdGlvbiB2YXJpYW50PVwiR2l0aHViTG9nb1wiIC8+PC9Cb3g+XG4gICAgICAgICAgICA8Qm94IG1sPVwieGxcIj5cbiAgICAgICAgICAgICAgPEg0Pnt0cmFuc2xhdGVNZXNzYWdlKCdmb3VuZEJ1Z190aXRsZScpfTwvSDQ+XG4gICAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKCdmb3VuZEJ1Z19zdWJ0aXRsZScpfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCIgYm94U2hhZG93PVwiY2FyZFwiIHdpZHRoPXsxfSBtPVwibGdcIj5cbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD1cIlNvZnR3YXJlQnJvdGhlcnNMb2dvXCIgLz5cbiAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnbmVlZE1vcmVTb2x1dGlvbnNfdGl0bGUnKX08L0g0PlxuICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25lZWRNb3JlU29sdXRpb25zX3N1YnRpdGxlJyl9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgbXQ9XCJ4eGxcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NvZnR3YXJlYnJvdGhlcnMuY28vc2VydmljZXNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY29udGFjdFVzJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIE1lc3NhZ2VCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbnR5cGUgU3RhdGUgPSB7XG4gIGVycm9yOiBhbnk7XG59XG5cbmNvbnN0IEVycm9yTWVzc2FnZTogUmVhY3QuRkM8U3RhdGU+ID0gKHsgZXJyb3IgfSkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveCBtPVwieHhsXCIgdmFyaWFudD1cImRhbmdlclwiIG1lc3NhZ2U9XCJKYXZhc2NyaXB0IEVycm9yXCI+XG4gICAgICA8VGV4dD57ZXJyb3IudG9TdHJpbmcoKX08L1RleHQ+XG4gICAgICA8VGV4dCBtdD1cImRlZmF1bHRcIj57dHJhbnNsYXRlTWVzc2FnZSgnc2VlQ29uc29sZUZvck1vcmUnKX08L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICg8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuIHx8IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgRGVmYXVsdERhc2hib2FyZCBmcm9tICcuLi9hcHAvZGVmYXVsdC1kYXNoYm9hcmQnXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9hcHAvZXJyb3ItYm91bmRhcnknXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcbiAgVXNlckNvbXBvbmVudHM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uQ29tcG9uZW50Pjtcbn1cblxudHlwZSBTdGF0ZSA9IHtcbiAgaXNDbGllbnQ6IGJvb2xlYW47XG59XG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIGRhc2hib2FyZDoge1xuICAgIGNvbXBvbmVudD86IHN0cmluZztcbiAgfTtcbn1cblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzRnJvbVN0YXRlLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHNGcm9tU3RhdGUpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNDbGllbnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NsaWVudDogdHJ1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzQ2xpZW50IH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IENvbXBvbmVudFxuICAgIGlmIChkYXNoYm9hcmQgJiYgZGFzaGJvYXJkLmNvbXBvbmVudCAmJiBpc0NsaWVudFxuICAgICAgICAmJiBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tkYXNoYm9hcmQuY29tcG9uZW50XVxuICAgICkge1xuICAgICAgQ29tcG9uZW50ID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbZGFzaGJvYXJkLmNvbXBvbmVudF0gYXMgRnVuY3Rpb25Db21wb25lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgQ29tcG9uZW50ID0gRGVmYXVsdERhc2hib2FyZFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBkYXNoYm9hcmQ6IHN0YXRlLmRhc2hib2FyZCxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEYXNoYm9hcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG50eXBlIEFkZE5ld0l0ZW1CdXR0b25Qcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbn1cblxuY29uc3QgQWRkTmV3SXRlbUJ1dHRvbjogUmVhY3QuRkM8QWRkTmV3SXRlbUJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBwcm9wZXJ0eSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGxhYmVsID0gdHJhbnNsYXRlUHJvcGVydHkoXG4gICAgYCR7cHJvcGVydHkucGF0aH0uYWRkTmV3SXRlbWAsXG4gICAgcmVzb3VyY2UuaWQsIHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogdHJhbnNsYXRlQnV0dG9uKCdhZGROZXdJdGVtJywgcmVzb3VyY2UuaWQpLFxuICAgIH0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SWNvbiBpY29uPVwiQWRkXCIgLz5cbiAgICAgIHtsYWJlbH1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGROZXdJdGVtQnV0dG9uXG4iLCJpbXBvcnQgeyBMYWJlbCwgTGFiZWxQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5TGFiZWxQcm9wcyA9IHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcHJvcHM/OiBMYWJlbFByb3BzO1xufVxuXG5jb25zdCBQcm9wZXJ0eUxhYmVsOiBSZWFjdC5GQzxQcm9wZXJ0eUxhYmVsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHByb3BzOiBsYWJlbFByb3BzIH0gPSBwcm9wc1xuXG4gIGlmIChwcm9wZXJ0eS5oaWRlTGFiZWwpIHsgcmV0dXJuIG51bGwgfVxuXG4gIHJldHVybiAoXG4gICAgPExhYmVsXG4gICAgICBodG1sRm9yPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgcmVxdWlyZWQ9e3Byb3BlcnR5LmlzUmVxdWlyZWR9XG4gICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICA+XG4gICAgICB7cHJvcGVydHkubGFiZWx9XG4gICAgPC9MYWJlbD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBQcm9wZXJ0eUxhYmVsIGFzIGRlZmF1bHQsXG4gIFByb3BlcnR5TGFiZWwsXG59XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mbGF0L2NvbnN0YW50cydcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogQ29udmVydHMgcHJvcGVydHk6IFByb3BlcnR5SlNPTiBmcm9tIGFuIGFycmF5IHRvIGEgc3ViLXByb3BlcnR5IGZvciBhbiBhY3R1YWwgaXRlbSBpbiB0aGUgYXJyYXlcbiAqIEl0IGNoYW5nZSBwYXRoIHRoYXQgaXQgaGFzIGluZGV4IGluc2lkZSBhbG9uZyB3aXRoIHRoZSBsYWJlbC4gRnV0aGVybW9yZSBmbGF0IGlzQXJyYXkgaXMgcmVtb3ZlZFxuICogLGJlY2F1c2UgaXQgd2FzIGFscmVhZHkgaGFuZGxlZCwgc28gdGhhdCBpdGVtUmVuZGVyZXIgY2FuIHJlbmRlciBwcm9wZXJ0eSBhcyBhIHJlZ3VsYXIgb25lXG4gKlxuICogQHBhcmFtIHtQcm9wZXJ0eUpTT059ICBhcnJheVByb3BlcnR5IHByb3BlcnR5IHdpdGggcGF0aCBzZXQgdG8gYW4gcm9vdCBBcnJheSB0eXBlIHByb3BlcnR5LFxuICogQHBhcmFtIHtOdW1iZXJ9ICAgICAgICBpbmRleCAgICAgICAgIGluZGV4IHVuZGVyIHdoaWNoIHN1Yi1wcm9wZXJ0eSBzaG91bGQgYmUgcGxhY2VkXG4gKiBAcHJpdmF0ZVxuICogQGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1N1YlByb3BlcnR5ID0gKGFycmF5UHJvcGVydHk6IFByb3BlcnR5SlNPTiwgaW5kZXg6IG51bWJlcik6IFByb3BlcnR5SlNPTiA9PiAoXG4gIHtcbiAgICAuLi5hcnJheVByb3BlcnR5LFxuICAgIHBhdGg6IFthcnJheVByb3BlcnR5LnBhdGgsIGluZGV4XS5qb2luKERFTElNSVRFUiksXG4gICAgbGFiZWw6IGBbJHtpbmRleCArIDF9XWAsXG4gICAgaXNBcnJheTogZmFsc2UsXG4gIH1cbilcbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG4vKipcbiAqIFJlbW92ZXMgc2VsZWN0ZWQgYXJyYXkgaXRlbSBmcm9tIGdpdmVuIHJlY29yZC4gSXQgcGVyZm9ybXMgZm9sbG93aW5nIHRhc2tzOlxuICogMS4gcmVtb3ZlcyBhcnJheSBpdGVtIGZyb20gdGhlIGFycmF5XG4gKiAyLiByZW9yZGVycyBrZXlzIGluIG5ldyBhcnJheSBpdGVtXG4gKiAzLiBpZiBwcm9wZXJ0eSBoYXMgcG9wdWxhdGVkIGZpZWxkcyBpdCBhbHNvIHJlb3JkZXJzIHRoZW1cbiAqIGl0IHVzZXMge0BsaW5rIGZsYXQgfSBtb2R1bGUgYW5kIGl0cyByZW1vdmVQYXRoIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gcmVjb3JkXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgIHN1YlByb3BlcnR5UGF0aCAgICAgICAgICAgIHdoaWNoIGhhcyB0byBiZSByZW1vdmVkLiBJdCBoYXMgdG8gYmUgZmxhdHRlbmVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIG5vdGF0aW9uLCBhbmQgZW5kaW5nIHdpdGggYXJyYXkgaW5kZXhcbiAqIEBwcml2YXRlXG4gKiBAaGlkZVxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlU3ViUHJvcGVydHkgPSAocmVjb3JkOiBSZWNvcmRKU09OLCBzdWJQcm9wZXJ0eVBhdGg6IHN0cmluZyk6IFJlY29yZEpTT04gPT4ge1xuICAvLyBieSBkZWZhdWx0IHBvcHVsYXRlZCBpcyBmbGF0dGVuIGp1c3QgdG8gdGhlIHBhdGggbGV2ZWwgLSBvYmplY3QgaXRzZWxmIGlzIG5vdCBmbGF0dGVuLiBUaGF0IGlzXG4gIC8vIHdoeSB3ZSBoYXZlIHRvIHJldHJpZXZlIHRoZSBvcmlnaW5hbCBzdGF0ZS4gVGhhdCBpcyB3aHkgd2UgaGF2ZSB0byByZXBsYWNlIHJlY29yZC5wb3B1bGF0ZWQgdG9cbiAgLy8gZnJvbSB7ICdzb21lLm5lc3RlZC4xLmtleSc6IFJlY29yZEpTT04gfSB0byB7ICdzb21lLm5lc3RlZC4xLmtleSc6ICdzb21lLm5lc3RlZC4xLmtleScgfSxcbiAgLy8gdGhlbiByZW1vdmUga2V5cywgYW5kIHJlZmlsbCBiYWNrIHNvbWUubmVzdGVkLjEua2V5IHRvIHRoZSB2YWx1ZSBmcm9tIHRoZSBvcmlnaW5hbCBwb3B1bGF0ZWRcbiAgLy8gb2JqZWN0LlxuICBjb25zdCBwb3B1bGF0ZWRLZXlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBPYmplY3Qua2V5cyhyZWNvcmQucG9wdWxhdGVkKS5yZWR1Y2UoXG4gICAgKG1lbW8sIHByb3BlcnR5S2V5KSA9PiAoe1xuICAgICAgLi4ubWVtbyxcbiAgICAgIFtwcm9wZXJ0eUtleV06IHByb3BlcnR5S2V5LFxuICAgIH0pLFxuICAgIHt9LFxuICApXG5cbiAgY29uc3QgbmV3UG9wdWxhdGVkS2V5TWFwID0gZmxhdC5yZW1vdmVQYXRoKHBvcHVsYXRlZEtleU1hcCwgc3ViUHJvcGVydHlQYXRoKVxuICBjb25zdCBuZXdQb3B1bGF0ZWQgPSBPYmplY3QuZW50cmllcyhuZXdQb3B1bGF0ZWRLZXlNYXApLnJlZHVjZShcbiAgICAobWVtbywgW25ld1Byb3BlcnR5S2V5LCBvbGRQcm9wZXJ0eUtleV0pID0+ICh7XG4gICAgICAuLi5tZW1vLFxuICAgICAgW25ld1Byb3BlcnR5S2V5XTogb2xkUHJvcGVydHlLZXkgJiYgcmVjb3JkLnBvcHVsYXRlZFtvbGRQcm9wZXJ0eUtleT8udG9TdHJpbmcoKV0sXG4gICAgfSksIHt9LFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZWNvcmQsXG4gICAgcGFyYW1zOiBmbGF0LnJlbW92ZVBhdGgocmVjb3JkLnBhcmFtcywgc3ViUHJvcGVydHlQYXRoKSxcbiAgICBwb3B1bGF0ZWQ6IG5ld1BvcHVsYXRlZCxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlY3Rpb24sIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIEljb24sIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFkZE5ld0l0ZW1CdXR0b24gZnJvbSAnLi9hZGQtbmV3LWl0ZW0tdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wc0luQXJyYXkgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHJlbW92ZVN1YlByb3BlcnR5IH0gZnJvbSAnLi9yZW1vdmUtc3ViLXByb3BlcnR5J1xuXG50eXBlIEVkaXRQcm9wcyA9IFJlcXVpcmVkPEVkaXRQcm9wZXJ0eVByb3BzSW5BcnJheT5cblxudHlwZSBJdGVtUmVuZGVyZXJQcm9wcyA9IHtcbiAgb25EZWxldGU6IChldmVudDogTW91c2VFdmVudCwgcHJvcGVydHk6IFByb3BlcnR5SlNPTikgPT4gYm9vbGVhbjtcbn1cblxuY29uc3QgSXRlbVJlbmRlcmVyOiBSZWFjdC5GQzxFZGl0UHJvcHMgJiBJdGVtUmVuZGVyZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBJdGVtQ29tcG9uZW50LCBwcm9wZXJ0eSwgb25EZWxldGUgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGF0YS10ZXN0aWQ9e3Byb3BlcnR5LnBhdGh9PlxuICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XG4gICAgICAgIDxJdGVtQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBmbGV4U2hyaW5rPXswfSBtbD1cImxnXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgbWw9XCJkZWZhdWx0XCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImRlbGV0ZS1pdGVtXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KTogYm9vbGVhbiA9PiBvbkRlbGV0ZShldmVudCwgcHJvcGVydHkpfVxuICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj1cIlRyYXNoQ2FuXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBJbnB1dHNJblNlY3Rpb246IFJlYWN0LkZDPEVkaXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCByZXNvdXJjZSwgb25DaGFuZ2UgfSA9IHByb3BzXG4gIGNvbnN0IGl0ZW1zID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICBjb25zdCBhZGROZXcgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBuZXdJdGVtcyA9IFtcbiAgICAgIC4uLml0ZW1zLFxuICAgICAgcHJvcGVydHkuc3ViUHJvcGVydGllcy5sZW5ndGggPyB7fSA6ICcnLFxuICAgIF1cbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBuZXdJdGVtcylcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIFtyZWNvcmQsIG9uQ2hhbmdlLCBwcm9wZXJ0eV0pXG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCwgc3ViUHJvcGVydHk6IFByb3BlcnR5SlNPTik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5ld1JlY29yZCA9IHJlbW92ZVN1YlByb3BlcnR5KHJlY29yZCwgc3ViUHJvcGVydHkucGF0aClcbiAgICBvbkNoYW5nZShuZXdSZWNvcmQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBmYWxzZVxuICB9LCBbcmVjb3JkLCBvbkNoYW5nZSwgcHJvcGVydHldKVxuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gbXQ9XCJ4bFwiPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtUHJvcGVydHkgPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wcy5wcm9wZXJ0eSwgaSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SXRlbVJlbmRlcmVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBwcm9wZXJ0eT17aXRlbVByb3BlcnR5fVxuICAgICAgICAgICAga2V5PXtpdGVtUHJvcGVydHkucGF0aH1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtyZW1vdmVJdGVtfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGROZXd9IHR5cGU9XCJidXR0b25cIiByb3VuZGVkPlxuICAgICAgICA8QWRkTmV3SXRlbUJ1dHRvbiByZXNvdXJjZT17cmVzb3VyY2V9IHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgdGVzdElkIH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wcm9wZXJ0eVBhdGhdXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfSBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxJbnB1dHNJblNlY3Rpb24gey4uLnByb3BzfSAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgRWRpdCBhcyBkZWZhdWx0LFxuICBFZGl0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuY29uc3QgTGlzdDogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3QgdmFsdWVzID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPntgbGVuZ3RoOiAke3ZhbHVlcy5sZW5ndGh9YH08L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VjdGlvbiwgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIEl0ZW1Db21wb25lbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGl0ZW1zID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICB7KGl0ZW1zIHx8IFtdKS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcm9wZXJ0eSA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BlcnR5LCBpKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW1Qcm9wZXJ0eS5wYXRofVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PXtpdGVtUHJvcGVydHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvVmFsdWVHcm91cD5cbiAgICApXG4gIH1cbn1cbiIsIi8vIGltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcblxuZXhwb3J0IHtcbiAgU2hvdyBhcyBzaG93LFxuICBFZGl0IGFzIGVkaXQsXG4gIExpc3QgYXMgbGlzdCxcbn1cbiIsImltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZsYXQvY29uc3RhbnRzJ1xuaW1wb3J0IHsgUHJvcGVydHlKU09OLCBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1N1YlByb3BlcnR5KFxuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OLFxuICBzdWJQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTixcbik6IFByb3BlcnR5SlNPTiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3ViUHJvcGVydHksXG4gICAgcGF0aDogW3Byb3BlcnR5LnBhdGgsIHN1YlByb3BlcnR5Lm5hbWVdLmpvaW4oREVMSU1JVEVSKSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VjdGlvbiwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG50eXBlIFByb3BzID0ge1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxQcm9wcyAmIEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIEl0ZW1Db21wb25lbnQgfSA9IHByb3BzXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8U2VjdGlvbiB7Li4ucHJvcGVydHkucHJvcHN9PlxuICAgICAgICB7cHJvcGVydHkuc3ViUHJvcGVydGllcy5maWx0ZXIoc3ViUHJvcGVydHkgPT4gIXN1YlByb3BlcnR5LmlzSWQpLm1hcCgoc3ViUHJvcGVydHkpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGtleT17c3ViUHJvcGVydHlXaXRoUGF0aC5wYXRofVxuICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlY3Rpb24sIFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcbn1cblxuY29uc3QgU2hvdzogUmVhY3QuRkM8UHJvcHMgJiBCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgSXRlbUNvbXBvbmVudCB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIHtwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmZpbHRlcihzdWJQcm9wZXJ0eSA9PiAhc3ViUHJvcGVydHkuaXNJZCkubWFwKChzdWJQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9XG4gICAgICAgICAgICAgIHByb3BlcnR5PXtzdWJQcm9wZXJ0eVdpdGhQYXRofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvVmFsdWVHcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG4vLyBUT0RPOiBkZWZpbmUgSXRlbUNvbXBvbmVudCBpbnRlcmZhY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzICYgRWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVySXRlbXMoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgSXRlbUNvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmZpbHRlcihzdWJQcm9wZXJ0eSA9PiAhc3ViUHJvcGVydHkuaXNJZCkubWFwKChzdWJQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9PlxuICAgICAgICAgICAgICA8TGFiZWwgaW5saW5lPntgJHtzdWJQcm9wZXJ0eS5sYWJlbH06IGB9PC9MYWJlbD5cbiAgICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIHJlc291cmNlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2hvd0FjdGlvbiA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICdzaG93JylcblxuICAgIGlmIChyZXNvdXJjZS50aXRsZVByb3BlcnR5LnByb3BlcnR5UGF0aCA9PT0gcHJvcGVydHkucHJvcGVydHlQYXRoICYmIHNob3dBY3Rpb24pIHtcbiAgICAgIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuICAgICAgY29uc3QgaHJlZiA9IGgucmVjb3JkQWN0aW9uVXJsKHtcbiAgICAgICAgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkOiByZWNvcmQuaWQsIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayB0bz17aHJlZn0+e3RoaXMucmVuZGVySXRlbXMoKX08L0xpbms+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckl0ZW1zKClcbiAgfVxufVxuIiwiLy8gaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuXG5leHBvcnQge1xuICBTaG93IGFzIHNob3csXG4gIEVkaXQgYXMgZWRpdCxcbiAgTGlzdCBhcyBsaXN0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IERlZmF1bHRQcm9wZXJ0eVZhbHVlOiBSZWFjdC5GQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cblxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAocHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQob3B0ID0+IG9wdC52YWx1ZSA9PT0gcmF3VmFsdWUpXG5cbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgcmV0dXJuIHJhd1ZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYWRnZT57b3B0aW9uPy5sYWJlbCB8fCByYXdWYWx1ZX08L0JhZGdlPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiByYXdWYWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0UHJvcGVydHlWYWx1ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IERlZmF1bHRQcm9wZXJ0eVZhbHVlIGZyb20gJy4vZGVmYXVsdC1wcm9wZXJ0eS12YWx1ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U2hvd1Byb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8RGVmYXVsdFByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcywgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbi8qKlxuICogRnVuY3Rpb24gdXNlZCBpbiBSZWFjdCBtZW1vIHRvIGNvbXBhcmUgaWYgcHJldmlvdXMgcHJvcGVydHkgdmFsdWUgYW5kIG5leHRcbiAqIHByb3BlcnR5IHZhbHVlIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgcmVjb3JkUHJvcGVydHlJc0VxdWFsID0gKFxuICBwcmV2UHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzIHwgU2hvd1Byb3BlcnR5UHJvcHMsXG4gIG5leHRQcm9wczogRWRpdFByb3BlcnR5UHJvcHMgfCBTaG93UHJvcGVydHlQcm9wcyxcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBwcmV2VmFsdWUgPSBwcmV2UHJvcHMucmVjb3JkLnBhcmFtc1twcmV2UHJvcHMucHJvcGVydHkucGF0aF1cbiAgY29uc3QgbmV4dFZhbHVlID0gbmV4dFByb3BzLnJlY29yZC5wYXJhbXNbbmV4dFByb3BzLnByb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgcHJldkVycm9yID0gcHJldlByb3BzLnJlY29yZC5lcnJvcnNbcHJldlByb3BzLnByb3BlcnR5LnBhdGhdXG4gIGNvbnN0IG5leHRFcnJvciA9IG5leHRQcm9wcy5yZWNvcmQuZXJyb3JzW25leHRQcm9wcy5wcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiBwcmV2VmFsdWUgPT09IG5leHRWYWx1ZSAmJiBwcmV2RXJyb3IgPT09IG5leHRFcnJvclxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IElucHV0LCBGb3JtTWVzc2FnZSwgRm9ybUdyb3VwLCBzZWxlY3RTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAge3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlcyA/IDxTZWxlY3RFZGl0IHsuLi5wcm9wc30gLz4gOiA8VGV4dEVkaXQgey4uLnByb3BzfSAvPn1cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmNvbnN0IFNlbGVjdEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHJlY29yZCwgcHJvcGVydHksIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBpZiAoIXByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IHN0eWxlcyA9IHNlbGVjdFN0eWxlcyh0aGVtZSlcbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChhdiA9PiBhdi52YWx1ZSA9PT0gcHJvcFZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgaXNDbGVhcmFibGVcbiAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgb3B0aW9ucz17cHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzfVxuICAgICAgb25DaGFuZ2U9e3MgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgcz8udmFsdWUgPz8gJycpfVxuICAgICAgaXNEaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmNvbnN0IFRleHRFZGl0OiBGQzxDb21iaW5lZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgLy8gaGFuZGxlIGNsaWNraW5nIEVOVEVSXG4gICAgICBvbktleURvd249e2UgPT4gZS5rZXlDb2RlID09PSAxMyAmJiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbCkpXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgZmlsdGVyU3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWx0ZXJQcm9wZXJ0eVByb3BzICYgVGhlbWVQcm9wczxEZWZhdWx0VGhlbWU+PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdENoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcklucHV0KCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGZpbHRlcktleSA9IGBmaWx0ZXItJHtwcm9wZXJ0eS5wYXRofWBcbiAgICBjb25zdCB2YWx1ZSA9IGZpbHRlcltwcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICAgIGlmIChwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQoYXYgPT4gYXYudmFsdWUgPT09IHZhbHVlKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cbiAgICAgICAgICBzdHlsZXM9e2ZpbHRlclN0eWxlcyh0aGVtZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9e2ZpbHRlcktleX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgRGVmYXVsdFByb3BlcnR5VmFsdWUgZnJvbSAnLi9kZWZhdWx0LXByb3BlcnR5LXZhbHVlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICByZXR1cm4gKDxEZWZhdWx0UHJvcGVydHlWYWx1ZSB7Li4udGhpcy5wcm9wc30gLz4pXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGVja0JveCwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlKTogYm9vbGVhbiA9PiAhKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJylcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VWYWx1ZShyZWNvcmQucGFyYW1zICYmIHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0pXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghcHJvcGVydHkuaXNEaXNhYmxlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgIXZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8Q2hlY2tCb3hcbiAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gcHJvcHM9e3sgaW5saW5lOiB0cnVlIH19IC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImV4cG9ydCBkZWZhdWx0ICh2YWx1ZSk6ICdZZXMnIHwgJ05vJyB8ICcnID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gdmFsdWUgPyAnWWVzJyA6ICdObydcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xuXG5jb25zdCBCb29sZWFuUHJvcGVydHlWYWx1ZTogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkLCBwcm9wZXJ0eSwgcmVzb3VyY2UgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cblxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fCByYXdWYWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGJhc2UgPSBtYXBWYWx1ZShyYXdWYWx1ZSlcbiAgY29uc3QgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGVQcm9wZXJ0eShgJHtwcm9wZXJ0eS5wYXRofS4ke3Jhd1ZhbHVlfWAsIHJlc291cmNlLmlkLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBiYXNlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJhZGdlIG91dGxpbmUgc2l6ZT1cInNtXCI+e3RyYW5zbGF0aW9ufTwvQmFkZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblByb3BlcnR5VmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT4+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciA9IHt9LCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGZpbHRlcltwcm9wZXJ0eS5wYXRoXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGZpbHRlcltwcm9wZXJ0eS5wYXRoXVxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IHZhbHVlOiB0cnVlLCBsYWJlbDogbWFwVmFsdWUodHJ1ZSkgfSxcbiAgICAgIHsgdmFsdWU6IGZhbHNlLCBsYWJlbDogbWFwVmFsdWUoZmFsc2UpIH0sXG4gICAgXVxuICAgIGNvbnN0IHNlbGVjdGVkID0gb3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyIGFzIG5ldmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGVQaWNrZXIsIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gKHJlY29yZC5wYXJhbXMgJiYgcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSkgfHwgJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGRhdGEpfVxuICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCB7IGZvcm1hdERhdGVQcm9wZXJ0eSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWRhcHRlcnMvcHJvcGVydHkvYmFzZS1wcm9wZXJ0eSdcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlOiBEYXRlLCBwcm9wZXJ0eVR5cGU6IFByb3BlcnR5VHlwZSk6IHN0cmluZyA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXG4gIGlmIChkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGVQcm9wZXJ0eShkYXRlLCBwcm9wZXJ0eVR5cGUpXG4gIH1cbiAgcmV0dXJuICcnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgbWFwVmFsdWUgZnJvbSAnLi9tYXAtdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbWFwVmFsdWUocmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSwgcHJvcGVydHkudHlwZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBtYXBWYWx1ZShyZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdLCBwcm9wZXJ0eS50eXBlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBmbGF0IGZyb20gJ2ZsYXQnXG5pbXBvcnQgQmFzZVByb3BlcnR5IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5pbXBvcnQgQmFzZVJlc291cmNlIGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Jlc291cmNlL2Jhc2UtcmVzb3VyY2UnXG5pbXBvcnQgQmFzZVJlY29yZCBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQvYmFzZS1yZWNvcmQnXG5cbmV4cG9ydCBjb25zdCBQQVJBTV9TRVBBUkFUT1IgPSAnfn4nXG5cbmV4cG9ydCB0eXBlIEZpbHRlckVsZW1lbnQgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eTtcbiAgdmFsdWU6IHN0cmluZyB8IHtcbiAgICBmcm9tOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgcG9wdWxhdGVkPzogQmFzZVJlY29yZCB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZWR1Y2VDYWxsYmFjazxUPiB7XG4gIChtZW1vOiBULCBlbGVtZW50OiBGaWx0ZXJFbGVtZW50KTogVDtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgb2JqZWN0IHdyYXBwaW5nIHVwIHNlbGVjdGVkIGZpbHRlcnMuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgcHVibGljIGZpbHRlcnM6IHtba2V5OiBzdHJpbmddOiBGaWx0ZXJFbGVtZW50fVxuXG4gIHByaXZhdGUgcmVzb3VyY2U6IEJhc2VSZXNvdXJjZVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHJhdyBuZXN0ZWQgZmlsdGVycyB0byBmb3JtIE9iamVjdDxwYXRoLCB2YWx1ZT4uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGZpbHRlcnMgPSB7XG4gICAqICBuZXN0ZWQ6IHtmaWVsZDogJ2FsYSd9LFxuICAgKiAgJ2RhdGFGaWVsZH5+ZnJvbSc6ICcyMDE5LTA4LTE0J1xuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IG5vcm1hbGl6ZWQgPSBGaWx0ZXIubm9ybWFsaXplRmlsdGVycyhmaWx0ZXJzKVxuICAgKiAvLyB7XG4gICAqIC8vICAgJ25lc3RlZC5maWx0ZXInOiAnYWxhJyxcbiAgICogLy8gICAnZGF0YUZpZWxkJzoge2Zyb206ICcyMDE5LTA4LTE0J31cbiAgICogLy8gfVxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgZmlsdGVyc1xuICAgKlxuICAgKiBAcmV0dXJuICB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZUtleXMoZmlsdGVycyk6IE1hcDxzdHJpbmcsIGFueT4ge1xuICAgIHJldHVybiBmbGF0LnVuZmxhdHRlbihmbGF0LmZsYXR0ZW4oZmlsdGVycyksIHsgZGVsaW1pdGVyOiBQQVJBTV9TRVBBUkFUT1IgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0PFN0cmluZyxPYmplY3QgfCBTdHJpbmc+fSAgZmlsdGVycyAgIHNlbGVjdGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICAge0Jhc2VSZXNvdXJjZX0gICAgICAgICAgICAgICAgICAgIHJlc291cmNlICAgIHJlc291cmNlIHdoaWNoIGlzIGZpbHRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWx0ZXJzID0ge30sIHJlc291cmNlKSB7XG4gICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IEZpbHRlci5ub3JtYWxpemVLZXlzKGZpbHRlcnMpXG4gICAgdGhpcy5maWx0ZXJzID0gT2JqZWN0LmtleXMobm9ybWFsaXplZCkucmVkdWNlKChtZW1vLCBwYXRoKSA9PiB7XG4gICAgICBtZW1vW3BhdGhdID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBwcm9wZXJ0eTogdGhpcy5yZXNvdXJjZS5wcm9wZXJ0eShwYXRoKSxcbiAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZWRbcGF0aF0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmaWx0ZXIgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICBwcm9wZXJ0eSBrZXlcbiAgICogQHJldHVybnMge0ZpbHRlci5Qcm9wZXJ0eSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IEZpbHRlckVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJzW2tleV1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZXMgYWxsIGZpbHRlcmVkIHByb3BlcnRpZXMgd2hpY2ggcmVmZXJzIHRvIG90aGVyIHJlc291cmNlc1xuICAgKi9cbiAgYXN5bmMgcG9wdWxhdGUoKTogUHJvbWlzZTxGaWx0ZXI+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF1cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVJlc291cmNlID0gdGhpcy5yZXNvdXJjZS5kZWNvcmF0ZSgpLmdldFByb3BlcnR5QnlLZXkoa2V5KT8ucmVmZXJlbmNlKClcbiAgICAgIGlmIChyZWZlcmVuY2VSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpbHRlcnNba2V5XS5wb3B1bGF0ZWQgPSBhd2FpdCByZWZlcmVuY2VSZXNvdXJjZS5maW5kT25lKFxuICAgICAgICAgIHRoaXMuZmlsdGVyc1trZXldLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVkdWNlPFQ+KGNhbGxiYWNrOiBSZWR1Y2VDYWxsYmFjazxUPiwgaW5pdGlhbDogVCk6IFQge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZmlsdGVycykucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsIHx8IHt9IGFzIFQpXG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGhcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIERhdGVQaWNrZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCAqIGFzIEJhY2tlbmRGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyJ1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IHsgUEFSQU1fU0VQQVJBVE9SIH0gPSBCYWNrZW5kRmlsdGVyXG5cblxuY29uc3QgRmlsdGVyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZyb21LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfWZyb21gXG4gIGNvbnN0IHRvS2V5ID0gYCR7cHJvcGVydHkucGF0aH0ke1BBUkFNX1NFUEFSQVRPUn10b2BcbiAgY29uc3QgZnJvbVZhbHVlID0gZmlsdGVyW2Zyb21LZXldXG4gIGNvbnN0IHRvVmFsdWUgPSBmaWx0ZXJbdG9LZXldXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICA8TGFiZWw+LSBGcm9tOiA8L0xhYmVsPlxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIHZhbHVlPXtmcm9tVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKGZyb21LZXksIGRhdGEpfVxuICAgICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cbiAgICAgICAgLz5cbiAgICAgICAgPExhYmVsIG10PVwiZGVmYXVsdFwiPi0gVG86IDwvTGFiZWw+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgdmFsdWU9e3RvVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHRvS2V5LCBkYXRhKX1cbiAgICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG4gIEZvcm1NZXNzYWdlLFxuICBSaWNoVGV4dCxcbiAgUXVpbGxPcHRpb25zLFxuICBEZWZhdWx0UXVpbGxUb29sYmFyT3B0aW9ucyxcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbnR5cGUgQ3VzdG9tVHlwZSA9IHtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHF1aWxsPzogUXVpbGxPcHRpb25zO1xufVxuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICBjb25zdCB7IHByb3BzOiBwcm9wZXJ0eVByb3BzIH0gPSBwcm9wZXJ0eVxuXG4gIGNvbnN0IHsgcXVpbGwgPSB7fSwgLi4uY3VzdG9tUHJvcHMgfSA9IHByb3BlcnR5UHJvcHMgYXMgQ3VzdG9tVHlwZSB8fCB7fVxuICBxdWlsbC50aGVtZSA9IHF1aWxsLnRoZW1lIHx8ICdzbm93J1xuICBxdWlsbC5tb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IERlZmF1bHRRdWlsbFRvb2xiYXJPcHRpb25zLFxuICAgIC4uLihxdWlsbC5tb2R1bGVzIHx8IHt9KSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFJpY2hUZXh0XG4gICAgICAgIHsuLi5jdXN0b21Qcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBjb250ZW50KX1cbiAgICAgICAgcXVpbGw9e3F1aWxsfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3I/Lm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAsIFRleHQsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICBwcml2YXRlIGNvbnRlbnRSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LmlubmVySFRNTCA9IHZhbHVlXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIGJvcmRlcj1cImRlZmF1bHRcIj5cbiAgICAgICAgICA8VGV4dCByZWY9e3RoaXMuY29udGVudFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IG9yaWdpbmFsID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsLnN1YnN0cmluZygwLCAxNSkgKyAob3JpZ2luYWwubGVuZ3RoID4gMTUgPyAnLi4uJyA6ICcnKVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2FzeW5jJ1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIHNlbGVjdFN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIFNlbGVjdFJlY29yZCB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cbnR5cGUgU2VsZWN0UmVjb3JkRW5oYW5jZWQgPSBTZWxlY3RSZWNvcmQgJiB7XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbn1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgdGhlbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVmZXJlbmNlOiByZXNvdXJjZUlkIH0gPSBwcm9wZXJ0eVxuXG4gIGlmICghcmVzb3VyY2VJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlZmVyZW5jZSByZXNvdXJjZSBpbiBwcm9wZXJ0eSAnJHtwcm9wZXJ0eS5wYXRofSdgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlbGVjdGVkOiBTZWxlY3RSZWNvcmRFbmhhbmNlZCk6IHZvaWQgPT4ge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgc2VsZWN0ZWQudmFsdWUsIHNlbGVjdGVkLnJlY29yZClcbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgbnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2FkT3B0aW9ucyA9IGFzeW5jIChpbnB1dFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFNlbGVjdFJlY29yZEVuaGFuY2VkW10+ID0+IHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuICAgIGNvbnN0IG9wdGlvblJlY29yZHMgPSBhd2FpdCBhcGkuc2VhcmNoUmVjb3Jkcyh7XG4gICAgICByZXNvdXJjZUlkLFxuICAgICAgcXVlcnk6IGlucHV0VmFsdWUsXG4gICAgfSlcbiAgICByZXR1cm4gb3B0aW9uUmVjb3Jkcy5tYXAoKG9wdGlvblJlY29yZDogUmVjb3JkSlNPTikgPT4gKHtcbiAgICAgIHZhbHVlOiBvcHRpb25SZWNvcmQuaWQsXG4gICAgICBsYWJlbDogb3B0aW9uUmVjb3JkLnRpdGxlLFxuICAgICAgcmVjb3JkOiBvcHRpb25SZWNvcmQsXG4gICAgfSkpXG4gIH1cbiAgY29uc3QgZXJyb3IgPSByZWNvcmQ/LmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IHNlbGVjdGVkSWQgPSByZWNvcmQ/LnBhcmFtc1twcm9wZXJ0eS5wYXRoXSBhcyBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY29uc3QgW2xvYWRlZFJlY29yZCwgc2V0TG9hZGVkUmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04gfCB1bmRlZmluZWQ+KClcbiAgY29uc3QgW2xvYWRpbmdSZWNvcmQsIHNldExvYWRpbmdSZWNvcmRdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHJlY29yZD8ucG9wdWxhdGVkW3Byb3BlcnR5LnBhdGhdID8/IGxvYWRlZFJlY29yZFxuICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IChzZWxlY3RlZElkICYmIHNlbGVjdGVkVmFsdWUpID8ge1xuICAgIHZhbHVlOiBzZWxlY3RlZFZhbHVlLmlkLFxuICAgIGxhYmVsOiBzZWxlY3RlZFZhbHVlLnRpdGxlLFxuICB9IDoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBsYWJlbDogJycsXG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gc2VsZWN0U3R5bGVzKHRoZW1lKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkSWQpIHtcbiAgICAgIHNldExvYWRpbmdSZWNvcmQoYyA9PiBjICsgMSlcbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICAgICAgYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICAgIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgICAgcmVzb3VyY2VJZCxcbiAgICAgICAgcmVjb3JkSWQ6IHNlbGVjdGVkSWQsXG4gICAgICB9KS50aGVuKCh7IGRhdGEgfTogYW55KSA9PiB7XG4gICAgICAgIHNldExvYWRlZFJlY29yZChkYXRhLnJlY29yZClcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nUmVjb3JkKGMgPT4gYyAtIDEpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkVmFsdWUsIHNlbGVjdGVkSWQsIHJlc291cmNlSWRdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBjYWNoZU9wdGlvbnNcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICBpc0Rpc2FibGVkPXtwcm9wZXJ0eS5pc0Rpc2FibGVkfVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdSZWNvcmR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yPy5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEVkaXQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b25DU1MgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG59XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICR7QnV0dG9uQ1NTfTtcbiAgcGFkZGluZy1sZWZ0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHN9O1xuICBwYWRkaW5nLXJpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHN9O1xuYFxuXG5jb25zdCBSZWZlcmVuY2VWYWx1ZTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcblxuICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcbiAgY29uc3QgcmVmSWQgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdXG4gIGNvbnN0IHBvcHVsYXRlZCA9IHJlY29yZC5wb3B1bGF0ZWRbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgdmFsdWUgPSAocG9wdWxhdGVkICYmIHBvcHVsYXRlZC50aXRsZSkgfHwgcmVmSWRcblxuICBpZiAoIXByb3BlcnR5LnJlZmVyZW5jZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgcHJvcGVydHk6IFwiJHtwcm9wZXJ0eS5wYXRofVwiIGRvZXMgbm90IGhhdmUgYSByZWZlcmVuY2VgKVxuICB9XG5cbiAgaWYgKHBvcHVsYXRlZCAmJiBwb3B1bGF0ZWQucmVjb3JkQWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSAnc2hvdycpKSB7XG4gICAgY29uc3QgaHJlZiA9IGgucmVjb3JkQWN0aW9uVXJsKHtcbiAgICAgIHJlc291cmNlSWQ6IHByb3BlcnR5LnJlZmVyZW5jZSwgcmVjb3JkSWQ6IHJlZklkLCBhY3Rpb25OYW1lOiAnc2hvdycsXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExpbmsgdG89e2hyZWZ9Pnt2YWx1ZX08L1N0eWxlZExpbms+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VWYWx1ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFJlZmVyZW5jZVZhbHVlIGZyb20gJy4vcmVmZXJlbmNlLXZhbHVlJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8UmVmZXJlbmNlVmFsdWVcbiAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZWZlcmVuY2VWYWx1ZSBmcm9tICcuL3JlZmVyZW5jZS12YWx1ZSdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWZlcmVuY2VWYWx1ZVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2FzeW5jJ1xuaW1wb3J0IHsgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIGZpbHRlclN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcywgU2VsZWN0UmVjb3JkIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxudHlwZSBDb21iaW5lZFByb3BzID0gRmlsdGVyUHJvcGVydHlQcm9wcyAmIFRoZW1lUHJvcHM8RGVmYXVsdFRoZW1lPlxuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbWJpbmVkUHJvcHM+IHtcbiAgcHJpdmF0ZSBhcGk6IEFwaUNsaWVudFxuXG4gIHByaXZhdGUgb3B0aW9uczogQXJyYXk8U2VsZWN0UmVjb3JkPlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb21iaW5lZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5hcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAgICB0aGlzLm9wdGlvbnMgPSBbXVxuICAgIHRoaXMubG9hZE9wdGlvbnMgPSB0aGlzLmxvYWRPcHRpb25zLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZDogU2VsZWN0UmVjb3JkKTogdm9pZCB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJycpXG4gIH1cblxuICBhc3luYyBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PHt2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCB0aGlzLmFwaS5zZWFyY2hSZWNvcmRzKHtcbiAgICAgIHJlc291cmNlSWQ6IHByb3BlcnR5LnJlZmVyZW5jZSBhcyBzdHJpbmcsXG4gICAgICBxdWVyeTogaW5wdXRWYWx1ZSxcbiAgICB9KVxuICAgIHRoaXMub3B0aW9ucyA9IHJlY29yZHMubWFwKHIgPT4gKHsgdmFsdWU6IHIuaWQsIGxhYmVsOiByLnRpdGxlIH0pKVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciwgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBmaWx0ZXJbcHJvcGVydHkucGF0aF0gPT09ICd1bmRlZmluZWQnID8gJycgOiBmaWx0ZXJbcHJvcGVydHkucGF0aF1cbiAgICBjb25zdCBzZWxlY3RlZCA9ICh0aGlzLm9wdGlvbnMgfHwgW10pLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgdmFsdWU9e3R5cGVvZiBzZWxlY3RlZCA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHNlbGVjdGVkfVxuICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgY2FjaGVPcHRpb25zXG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIGxvYWRPcHRpb25zPXt0aGlzLmxvYWRPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGaWx0ZXIpXG4iLCJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0gfHwgJydcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICB7dmFsdWUuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS9nKS5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICkpfVxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0LCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbmNvbnN0IEVkaXQ6IEZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycz8uW3Byb3BlcnR5LnBhdGhdXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXtCb29sZWFuKGVycm9yKX0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIHJvd3M9eyh2YWx1ZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGggKyAxfVxuICAgICAgICBpZD17cHJvcGVydHkucGF0aH1cbiAgICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRWRpdCwgcmVjb3JkUHJvcGVydHlJc0VxdWFsKVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQsIEZvcm1Hcm91cCwgSW5wdXRHcm91cCwgRm9ybU1lc3NhZ2UsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3BWYWx1ZSlcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgW2lzSW5wdXQsIHNldElzSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPXtpc0lucHV0ID8gJ2lucHV0JyA6ICdwYXNzd29yZCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICAgICAgb25LZXlEb3duPXtlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSA/PyAnJ31cbiAgICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PXtpc0lucHV0ID8gJ3ByaW1hcnknIDogJ3RleHQnfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0lucHV0KCFpc0lucHV0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249XCJWaWV3XCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXA+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcblxuZXhwb3J0IHtcbiAgRWRpdCBhcyBlZGl0LFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50TGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2FwcC9lcnJvci1ib3VuZGFyeSdcblxuaW1wb3J0ICogYXMgQXJyYXlUeXBlIGZyb20gJy4vYXJyYXknXG5pbXBvcnQgKiBhcyBNaXhlZFR5cGUgZnJvbSAnLi9taXhlZCdcblxuaW1wb3J0ICogYXMgZGVmYXVsdFR5cGUgZnJvbSAnLi9kZWZhdWx0LXR5cGUnXG5pbXBvcnQgKiBhcyBib29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCAqIGFzIGRhdGV0aW1lIGZyb20gJy4vZGF0ZXRpbWUnXG5pbXBvcnQgKiBhcyByaWNodGV4dCBmcm9tICcuL3JpY2h0ZXh0J1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlIGZyb20gJy4vcmVmZXJlbmNlJ1xuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSdcbmltcG9ydCAqIGFzIHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcyB9IGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWRhcHRlcnMvcHJvcGVydHkvYmFzZS1wcm9wZXJ0eSdcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5jb25zdCB0eXBlczogUmVjb3JkPFByb3BlcnR5VHlwZSwgYW55PiA9IHtcbiAgdGV4dGFyZWEsXG4gIGJvb2xlYW4sXG4gIGRhdGV0aW1lLFxuICByZWZlcmVuY2UsXG4gIHBhc3N3b3JkLFxuICBkYXRlOiBkYXRldGltZSxcbiAgcmljaHRleHQsXG4gIHN0cmluZzogZGVmYXVsdFR5cGUsXG4gIG51bWJlcjogZGVmYXVsdFR5cGUsXG4gIGZsb2F0OiBkZWZhdWx0VHlwZSxcbiAgbWl4ZWQ6IG51bGwsXG59XG5cbi8qKlxuICogQGxvYWQgLi9iYXNlLXByb3BlcnR5LWNvbXBvbmVudC5kb2MubWRcbiAqIEBjb21wb25lbnRcbiAqIEBuYW1lIEJhc2VQcm9wZXJ0eUNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQmFzZVByb3BlcnR5Q29tcG9uZW50OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eTogYmFzZVByb3BlcnR5LCByZXNvdXJjZSwgcmVjb3JkLCBmaWx0ZXIsIHdoZXJlLCBvbkNoYW5nZSB9ID0gcHJvcHNcblxuICBjb25zdCBwcm9wZXJ0eTogUHJvcGVydHlKU09OID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIC4uLmJhc2VQcm9wZXJ0eSxcbiAgICAvLyB3ZSBmaWxsIHRoZSBwYXRoIGlmIGl0IGlzIG5vdCB0aGVyZS4gVGhhdCBpcyB3aHkgYWxsIHRoZSBhY3R1YWwgQ29tcG9uZW50IFJlbmRlcmVycyBhcmVcbiAgICAvLyBjYWxsZWQgd2l0aCB0aGUgcGF0aCBzZXQgdG8gdGhpcyByb290IHBhdGguIE5leHQgbWl4ZWQgYW5kIGFycmF5IGNvbXBvbmVudHMgYWRkcyB0byB0aGlzXG4gICAgLy8gcGF0aCBlaXRoZXIgaW5kZXggKGZvciBhcnJheSkgb3Igc3ViUHJvcGVydHkgbmFtZS5cbiAgICBwYXRoOiAoYmFzZVByb3BlcnR5IGFzIFByb3BlcnR5SlNPTikucGF0aCB8fCBiYXNlUHJvcGVydHkucHJvcGVydHlQYXRoLFxuICB9KSwgW2Jhc2VQcm9wZXJ0eV0pXG5cbiAgY29uc3QgdGVzdElkID0gYHByb3BlcnR5LSR7d2hlcmV9LSR7cHJvcGVydHkucGF0aH1gXG5cbiAgbGV0IENvbXBvbmVudDogUmVhY3RDb21wb25lbnRMaWtlID0gKHR5cGVzW3Byb3BlcnR5LnR5cGVdICYmIHR5cGVzW3Byb3BlcnR5LnR5cGVdW3doZXJlXSlcbiAgfHwgZGVmYXVsdFR5cGVbd2hlcmVdXG5cbiAgaWYgKHByb3BlcnR5LmNvbXBvbmVudHMgJiYgcHJvcGVydHkuY29tcG9uZW50c1t3aGVyZV0pIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBwcm9wZXJ0eS5jb21wb25lbnRzW3doZXJlXVxuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZXJlIGlzIG5vIFwiJHtwcm9wZXJ0eS5wYXRofS5jb21wb25lbnRzLiR7d2hlcmV9XCJgKVxuICAgIH1cbiAgICBDb21wb25lbnQgPSBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbY29tcG9uZW50XVxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPEJveCBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IEFycmF5ID0gQXJyYXlUeXBlW3doZXJlXVxuICBjb25zdCBNaXhlZCA9IE1peGVkVHlwZVt3aGVyZV1cblxuICBpZiAoYmFzZVByb3BlcnR5LmlzQXJyYXkpIHtcbiAgICBpZiAoIUFycmF5KSB7IHJldHVybiAoPGRpdiAvPikgfVxuICAgIHJldHVybiAoXG4gICAgICA8QXJyYXlcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIEl0ZW1Db21wb25lbnQ9e0Jhc2VQcm9wZXJ0eUNvbXBvbmVudH1cbiAgICAgICAgdGVzdElkPXt0ZXN0SWR9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIGlmIChiYXNlUHJvcGVydHkudHlwZSA9PT0gJ21peGVkJykge1xuICAgIGlmICghTWl4ZWQpIHsgcmV0dXJuICg8ZGl2IC8+KSB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxNaXhlZFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgSXRlbUNvbXBvbmVudD17QmFzZVByb3BlcnR5Q29tcG9uZW50fVxuICAgICAgICB0ZXN0SWQ9e3Rlc3RJZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgIDxCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB3aGVyZT17d2hlcmV9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0Vycm9yQm91bmRhcnk+XG4gIClcbn1cbmV4cG9ydCB7XG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCBhcyBkZWZhdWx0LFxuICBCYXNlUHJvcGVydHlDb21wb25lbnQsXG59XG4iLCJpbXBvcnQgQmFzZVByb3BlcnR5Q29tcG9uZW50IGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQnXG5pbXBvcnQgKiBhcyBkZWZhdWx0VHlwZSBmcm9tICcuL2RlZmF1bHQtdHlwZSdcbmltcG9ydCAqIGFzIGJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0ICogYXMgZGF0ZXRpbWUgZnJvbSAnLi9kYXRldGltZSdcbmltcG9ydCAqIGFzIHJpY2h0ZXh0IGZyb20gJy4vcmljaHRleHQnXG5pbXBvcnQgKiBhcyByZWZlcmVuY2UgZnJvbSAnLi9yZWZlcmVuY2UnXG5pbXBvcnQgKiBhcyB0ZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJ1xuaW1wb3J0ICogYXMgcGFzc3dvcmQgZnJvbSAnLi9wYXNzd29yZCdcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG50eXBlIEJhc2VQcm9wZXJ0eUNvbXBvbmVudFR5cGUgPSBSZWFjdC5GQzxCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcz4gJiB7XG4gIERlZmF1bHRUeXBlOiBhbnk7XG4gIEJvb2xlYW46IGFueTtcbiAgRGF0ZVRpbWU6IGFueTtcbiAgUmljaFRleHQ6IGFueTtcbiAgUmVmZXJlbmNlOiBhbnk7XG4gIFRleHRBcmVhOiBhbnk7XG4gIFBhc3N3b3JkOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsaXplUHJvcGVydHlUeXBlPFQ+KHR5cGU6IHtba2V5OiBzdHJpbmddOiBUfSk6IHtba2V5OiBzdHJpbmddOiBUfSB7XG4gIHJldHVybiB7XG4gICAgRWRpdDogdHlwZS5lZGl0LFxuICAgIFNob3c6IHR5cGUuc2hvdyxcbiAgICBMaXN0OiB0eXBlLmxpc3QsXG4gICAgRmlsdGVyOiB0eXBlLmZpbHRlcixcbiAgfVxufVxuXG5jb25zdCBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZDogQmFzZVByb3BlcnR5Q29tcG9uZW50VHlwZSA9IE9iamVjdC5hc3NpZ24oXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCwge1xuICAgIERlZmF1bHRUeXBlOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShkZWZhdWx0VHlwZSksXG4gICAgQm9vbGVhbjogY2FtZWxpemVQcm9wZXJ0eVR5cGUoYm9vbGVhbiksXG4gICAgRGF0ZVRpbWU6IGNhbWVsaXplUHJvcGVydHlUeXBlKGRhdGV0aW1lKSxcbiAgICBSaWNoVGV4dDogY2FtZWxpemVQcm9wZXJ0eVR5cGUocmljaHRleHQpLFxuICAgIFJlZmVyZW5jZTogY2FtZWxpemVQcm9wZXJ0eVR5cGUocmVmZXJlbmNlKSxcbiAgICBUZXh0QXJlYTogY2FtZWxpemVQcm9wZXJ0eVR5cGUodGV4dGFyZWEpLFxuICAgIFBhc3N3b3JkOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShwYXNzd29yZCksXG4gIH0sXG4pXG5cblxuZXhwb3J0IHtcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50RXh0ZW5kZWQgYXMgZGVmYXVsdCxcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50RXh0ZW5kZWQgYXMgQmFzZVByb3BlcnR5Q29tcG9uZW50LFxufVxuXG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94LCBjc3NDbGFzcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5cbmV4cG9ydCBjb25zdCBCcmVhZGNydW1iTGluayA9IHN0eWxlZChMaW5rKWBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMuZ3JleTQwfTtcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5mb250fTtcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5saW5lSGVpZ2h0cy5kZWZhdWx0fTtcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuZm9udFNpemVzLmRlZmF1bHR9O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeTEwMH07XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnLyc7XG4gICAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UuZGVmYXVsdH07XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICB9XG5gXG5cbi8qKlxuICogQG1lbWJlcm9mIEJyZWFkY3J1bWJzXG4gKi9cbmV4cG9ydCB0eXBlIEJyZWFkY3J1bWJQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFJlc291cmNlXG4gICAqL1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICAvKipcbiAgICogcmVjb3JkXG4gICAqL1xuICByZWNvcmQ/OiBSZWNvcmRKU09OIHwgbnVsbDtcbiAgLyoqXG4gICAqIE5hbWUgb2YgYW4gYWN0aW9uXG4gICAqL1xuICBhY3Rpb25OYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IEJyZWFkY3J1bWJzOiBSZWFjdC5GQzxCcmVhZGNydW1iUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHJlY29yZCwgYWN0aW9uTmFtZSB9ID0gcHJvcHNcblxuICBjb25zdCBhY3Rpb24gPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjdGlvbk5hbWUpXG4gIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4R3Jvdz17MX0gY2xhc3NOYW1lPXtjc3NDbGFzcygnQnJlYWRjcnVtYnMnKX0+XG4gICAgICA8QnJlYWRjcnVtYkxpbmsgdG89e2guZGFzaGJvYXJkVXJsKCl9PkRhc2hib2FyZDwvQnJlYWRjcnVtYkxpbms+XG4gICAgICA8QnJlYWRjcnVtYkxpbmsgdG89e3Jlc291cmNlLmhyZWYgPyByZXNvdXJjZS5ocmVmIDogJy8nfSBjbGFzc05hbWU9e3JlY29yZCA/ICdpcy1hY3RpdmUnIDogJyd9PlxuICAgICAgICB7cmVzb3VyY2UubmFtZX1cbiAgICAgIDwvQnJlYWRjcnVtYkxpbms+XG4gICAgICB7IGFjdGlvbiAmJiBhY3Rpb24ubmFtZSAhPT0gJ2xpc3QnICYmIDxCcmVhZGNydW1iTGluayB0bz1cIiNcIj57YWN0aW9uLmxhYmVsfTwvQnJlYWRjcnVtYkxpbms+fVxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJzXG4iLCJpbXBvcnQgeyBCdXR0b25Hcm91cFByb3BzLCBCdXR0b25Jbkdyb3VwUHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IGFjdGlvbkhyZWYsIEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uVGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuXG5leHBvcnQgdHlwZSBhY3Rpb25zVG9CdXR0b25Hcm91cE9wdGlvbnMgPSB7XG4gIGFjdGlvbnM6IEFycmF5PEFjdGlvbkpTT04+O1xuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcztcbiAgaGFuZGxlQ2xpY2s6IEJ1dHRvbkluR3JvdXBQcm9wc1snb25DbGljayddO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uc1RvQnV0dG9uR3JvdXAgPSAoXG4gIG9wdGlvbnM6IGFjdGlvbnNUb0J1dHRvbkdyb3VwT3B0aW9ucyxcbik6IEJ1dHRvbkdyb3VwUHJvcHNbJ2J1dHRvbnMnXSA9PiB7XG4gIGNvbnN0IHsgYWN0aW9ucywgcGFyYW1zLCBoYW5kbGVDbGljayB9ID0gb3B0aW9uc1xuICBjb25zdCBidXR0b25zID0gYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGhyZWYgPSBhY3Rpb25IcmVmKGFjdGlvbiwgcGFyYW1zKVxuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBhY3Rpb24uaWNvbixcbiAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwsXG4gICAgICB2YXJpYW50OiBhY3Rpb24udmFyaWFudCxcbiAgICAgIHNvdXJjZTogYWN0aW9uLFxuICAgICAgaHJlZjogaHJlZiB8fCB1bmRlZmluZWQsXG4gICAgICAvLyB3aGVuIGhyZWYgaXMgbm90IGRlZmluZWQgLSBoYW5kbGUgY2xpY2sgc2hvdWxkIGFsc28gYmUgbm90IGRlZmluZWRcbiAgICAgIC8vIFRoaXMgcHJldmVudHMgZnJvbSBcImN1cnNvcjogcG9pbnRlcjtcIlxuICAgICAgb25DbGljazogaHJlZiA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgJ2RhdGEtdGVzdGlkJzogYnVpbGRBY3Rpb25UZXN0SWQoYWN0aW9uKSxcbiAgICAgIGJ1dHRvbnM6IFtdLFxuICAgIH1cbiAgfSlcblxuICAvLyBuZXN0aW5nIGJ1dHRvbnNcbiAgY29uc3QgYnV0dG9uc01hcCA9IGJ1dHRvbnMucmVkdWNlKChtZW1vLCBidXR0b24pID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSBidXR0b24uc291cmNlXG4gICAgaWYgKGFjdGlvbi5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudDogQnV0dG9uSW5Hcm91cFByb3BzID0gbWVtb1thY3Rpb24ucGFyZW50XVxuICAgICAgICB8fCBidXR0b25zLmZpbmQoYnRuID0+IGJ0bi5zb3VyY2UubmFtZSA9PT0gYWN0aW9uLnBhcmVudClcbiAgICAgICAgfHwge1xuICAgICAgICAgIGxhYmVsOiBhY3Rpb24ucGFyZW50LFxuICAgICAgICB9XG5cbiAgICAgIHBhcmVudC5idXR0b25zID0gcGFyZW50LmJ1dHRvbnMgfHwgW11cbiAgICAgIHBhcmVudC5idXR0b25zLnB1c2goYnV0dG9uKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubWVtbyxcbiAgICAgICAgW2FjdGlvbi5wYXJlbnRdOiBwYXJlbnQsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5tZW1vLFxuICAgICAgW2J1dHRvbi5zb3VyY2UubmFtZV06IGJ1dHRvbixcbiAgICB9XG4gIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIEJ1dHRvbkluR3JvdXBQcm9wcz4pXG4gIHJldHVybiBPYmplY3QudmFsdWVzKGJ1dHRvbnNNYXApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIEJ1dHRvbkNTUyxcbiAgQnV0dG9uUHJvcHMsXG4gIEljb24sXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKCh7IHJvdW5kZWQsIC4uLnJlc3QgfSkgPT4gPFJvdXRlckxpbmsgey4uLnJlc3R9IC8+KTxCdXR0b25Qcm9wcz5gJHtCdXR0b25DU1N9YFxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmV4cG9ydCB0eXBlIFN0eWxlZEJhY2tCdXR0b25Qcm9wcyA9IHtcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICBzaG93SW5EcmF3ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCYWNrQnV0dG9uOiBSZWFjdC5GQzxTdHlsZWRCYWNrQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgc2hvd0luRHJhd2VyIH0gPSBwcm9wc1xuICBjb25zdCBjc3NDbG9zZUljb24gPSBzaG93SW5EcmF3ZXIgPyAnQ2hldnJvblJpZ2h0JyA6ICdDaGV2cm9uTGVmdCdcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRMaW5rXG4gICAgICBzaXplPVwiaWNvblwiXG4gICAgICB0bz17aC5yZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaDogd2luZG93LmxvY2F0aW9uLnNlYXJjaCB9KX1cbiAgICAgIHJvdW5kZWRcbiAgICAgIG1yPVwibGdcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAgPEljb24gaWNvbj17Y3NzQ2xvc2VJY29ufSAvPlxuICAgIDwvU3R5bGVkTGluaz5cbiAgKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIEJhZGdlLCBIMywgSDIsIEJ1dHRvbkdyb3VwLCBjc3NDbGFzcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuLi9icmVhZGNydW1icydcbmltcG9ydCB7IEFjdGlvbkhlYWRlclByb3BzIH0gZnJvbSAnLi9hY3Rpb24taGVhZGVyLXByb3BzJ1xuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xuaW1wb3J0IHsgU3R5bGVkQmFja0J1dHRvbiB9IGZyb20gJy4vc3R5bGVkLWJhY2stYnV0dG9uJ1xuXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvYWN0aW9uJ1xuXG4vKipcbiAqIEhlYWRlciBvZiBhbiBhY3Rpb24uIEl0IHJlbmRlcnMgQWN0aW9uIG5hbWUgd2l0aCBidXR0b25zIGZvciBhbGwgdGhlIGFjdGlvbnMuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvbkhlYWRlcjogUmVhY3QuRkM8QWN0aW9uSGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNvdXJjZSwgdG9nZ2xlRmlsdGVyLCBhY3Rpb25QZXJmb3JtZWQsIHJlY29yZCwgYWN0aW9uLCB0YWcsIG9taXRBY3Rpb25zLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcihhY3Rpb25QZXJmb3JtZWQpXG5cbiAgaWYgKGFjdGlvbi5oaWRlQWN0aW9uSGVhZGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHJlc291cmNlSWQgPSByZXNvdXJjZS5pZFxuICBjb25zdCBwYXJhbXMgPSB7IHJlc291cmNlSWQsIHJlY29yZElkOiByZWNvcmQ/LmlkIH1cblxuICBjb25zdCBoYW5kbGVBY3Rpb25DbGljayA9IChldmVudCwgc291cmNlQWN0aW9uOiBBY3Rpb25KU09OKTogdm9pZCA9PiAoXG4gICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgICAgYWN0aW9uOiBzb3VyY2VBY3Rpb24sXG4gICAgICBwYXJhbXMsXG4gICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gICAgfSkoZXZlbnQpXG4gIClcblxuICBjb25zdCBhY3Rpb25CdXR0b25zID0gYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgIGFjdGlvbnM6IHJlY29yZFxuICAgICAgPyByZWNvcmQucmVjb3JkQWN0aW9ucy5maWx0ZXIocmEgPT4gIWFjdGlvbiB8fCBhY3Rpb24ubmFtZSAhPT0gcmEubmFtZSlcbiAgICAgIC8vIG9ubHkgbmV3IGFjdGlvbiBzaG91bGQgYmUgc2VlbiBpbiByZWd1bGFyIFwiQmlnXCIgYWN0aW9ucyBwbGFjZVxuICAgICAgOiByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmlsdGVyKHJhID0+IHJhLm5hbWUgPT09ICduZXcnICYmICghYWN0aW9uIHx8IGFjdGlvbi5uYW1lICE9PSByYS5uYW1lKSksXG4gICAgcGFyYW1zLFxuICAgIGhhbmRsZUNsaWNrOiBoYW5kbGVBY3Rpb25DbGljayxcbiAgfSlcblxuICBpZiAodG9nZ2xlRmlsdGVyKSB7XG4gICAgYWN0aW9uQnV0dG9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiB0cmFuc2xhdGVCdXR0b24oJ2ZpbHRlcicsIHJlc291cmNlLmlkKSxcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZUZpbHRlcixcbiAgICAgIGljb246ICdTZXR0aW5nc0FkanVzdCcsXG4gICAgfSlcbiAgfVxuXG4gIC8vIGxpc3QgYW5kIG5ldyBhY3Rpb25zIGFyZSBzcGVjaWFsIGFuZCBhcmUgYXJlIGFsd2F5c1xuICBjb25zdCBjdXN0b21SZXNvdXJjZUJ1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XG4gICAgYWN0aW9uczogcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbHRlcihyYSA9PiAhWydsaXN0JywgJ25ldyddLmluY2x1ZGVzKHJhLm5hbWUpKSxcbiAgICBwYXJhbXM6IHsgcmVzb3VyY2VJZCB9LFxuICAgIGhhbmRsZUNsaWNrOiBoYW5kbGVBY3Rpb25DbGljayxcbiAgfSlcblxuICBjb25zdCB0aXRsZSA9IGFjdGlvbiA/IGFjdGlvbi5sYWJlbCA6IHJlc291cmNlLm5hbWVcbiAgY29uc3QgaXNMaXN0ID0gYWN0aW9uICYmIGFjdGlvbi5uYW1lID09PSAnbGlzdCdcbiAgY29uc3QgbGlzdEFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHJhID0+IHJhLm5hbWUgPT09ICdsaXN0JylcblxuICAvLyBzdHlsZWQgd2hpY2ggZGlmZmVycyBpZiBhY3Rpb24gaGVhZGVyIGlzIGluIHRoZSBkcmF3ZXIgb3Igbm90XG4gIGNvbnN0IGNzc0lzUm9vdEZsZXggPSAhYWN0aW9uLnNob3dJbkRyYXdlclxuICBjb25zdCBjc3NIZWFkZXJNVCA9IGFjdGlvbi5zaG93SW5EcmF3ZXIgPyAnJyA6ICdsZydcbiAgY29uc3QgY3NzQWN0aW9uc01CID0gYWN0aW9uLnNob3dJbkRyYXdlciA/ICd4bCcgOiAnZGVmYXVsdCdcbiAgY29uc3QgQ3NzSENvbXBvbmVudCA9IGFjdGlvbi5zaG93SW5EcmF3ZXIgPyBIMyA6IEgyXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ0FjdGlvbkhlYWRlcicpfT5cbiAgICAgIHthY3Rpb24uc2hvd0luRHJhd2VyID8gJycgOiAoXG4gICAgICAgIDxCb3ggZmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCIgcHg9e1snZGVmYXVsdCcsIDBdfT5cbiAgICAgICAgICA8QnJlYWRjcnVtYnMgcmVzb3VyY2U9e3Jlc291cmNlfSBhY3Rpb25OYW1lPXthY3Rpb24ubmFtZX0gcmVjb3JkPXtyZWNvcmR9IC8+XG4gICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzaXplPVwic21cIiByb3VuZGVkIGJ1dHRvbnM9e2N1c3RvbVJlc291cmNlQnV0dG9uc30gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAgPEJveCBkaXNwbGF5PXtbJ2Jsb2NrJywgY3NzSXNSb290RmxleCA/ICdmbGV4JyA6ICdibG9jayddfT5cbiAgICAgICAgPEJveCBtdD17Y3NzSGVhZGVyTVR9IGZsZXhHcm93PXsxfSBweD17WydkZWZhdWx0JywgMF19PlxuICAgICAgICAgIDxDc3NIQ29tcG9uZW50IG1iPVwibGdcIj5cbiAgICAgICAgICAgIHshaXNMaXN0ICYmIGxpc3RBY3Rpb24gPyAoXG4gICAgICAgICAgICAgIDxTdHlsZWRCYWNrQnV0dG9uIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IHNob3dJbkRyYXdlcj17YWN0aW9uLnNob3dJbkRyYXdlcn0gLz5cbiAgICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIHt0YWcgPyAoPEJhZGdlIHZhcmlhbnQ9XCJwcmltYXJ5XCIgbWw9XCJkZWZhdWx0XCI+e3RhZ308L0JhZGdlPikgOiAnJ31cbiAgICAgICAgICA8L0Nzc0hDb21wb25lbnQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7b21pdEFjdGlvbnMgPyAnJyA6IChcbiAgICAgICAgICA8Qm94IG10PVwieGxcIiBtYj17Y3NzQWN0aW9uc01CfSBmbGV4U2hyaW5rPXswfT5cbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBidXR0b25zPXthY3Rpb25CdXR0b25zfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSGVhZGVyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBEZXNpZ25TeXN0ZW0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgeyBQcm9wZXJ0eVBsYWNlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9wcm9wZXJ0eS1qc29uL3Byb3BlcnR5LWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgUGFyc2VkTGF5b3V0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvbGF5b3V0LWVsZW1lbnQtcGFyc2VyJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi8uLi9wcm9wZXJ0eS10eXBlL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbnR5cGUgUHJvcHMgPSBBY3Rpb25Qcm9wcyAmIHtcbiAgbGF5b3V0RWxlbWVudDogUGFyc2VkTGF5b3V0RWxlbWVudDtcbiAgd2hlcmU6IFByb3BlcnR5UGxhY2U7XG4gIG9uQ2hhbmdlPzogQmFzZVByb3BlcnR5UHJvcHNbJ29uQ2hhbmdlJ107XG59XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRFbGVtZW50UmVuZGVyZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxheW91dEVsZW1lbnQsIHJlc291cmNlLCB3aGVyZSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcHJvcHM6IGxheW91dFByb3BzLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnR5TmFtZXMsXG4gICAgbGF5b3V0RWxlbWVudHM6IGlubmVyTGF5b3V0RWxlbWVudHMsXG4gICAgY29tcG9uZW50LFxuICB9ID0gbGF5b3V0RWxlbWVudFxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBsYXlvdXRQcm9wc1xuXG4gIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0eU5hbWVzLm1hcChuYW1lID0+IHJlc291cmNlLnByb3BlcnRpZXNbbmFtZV0pXG5cbiAgY29uc3QgQ29tcG9uZW50ID0gRGVzaWduU3lzdGVtW2NvbXBvbmVudF1cbiAgaWYgKCFDb21wb25lbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERlc2lnblN5c3RlbS5NZXNzYWdlQm94XG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIG1lc3NhZ2U9XCJKYXZhc2NyaXB0IEVycm9yXCJcbiAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgIHB5PVwieGxcIlxuICAgICAgPlxuICAgICAgICBUaGVyZSBpcyBubyBjb21wb25lbnQgYnkgdGhlIG5hbWUgb2ZcbiAgICAgICAgPERlc2lnblN5c3RlbS5CYWRnZSBzaXplPVwic21cIiB2YXJpYW50PVwiZGFuZ2VyXCIgbXg9XCJkZWZhdWx0XCI+e2NvbXBvbmVudH08L0Rlc2lnblN5c3RlbS5CYWRnZT5cbiAgICAgICAgaW4gQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtLiBDaGFuZ2VcbiAgICAgICAgPERlc2lnblN5c3RlbS5CYWRnZSBzaXplPVwic21cIiB2YXJpYW50PVwiZGFuZ2VyXCIgbXg9XCJkZWZhdWx0XCI+e2BAJHtjb21wb25lbnR9YH08L0Rlc2lnblN5c3RlbS5CYWRnZT5cbiAgICAgICAgdG8gYXZhaWxhYmxlIGNvbXBvbmVudCBsaWtlIEBIZWFkZXJcbiAgICAgIDwvRGVzaWduU3lzdGVtLk1lc3NhZ2VCb3g+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50IHsuLi5vdGhlciBhcyBhbnl9PlxuICAgICAge3Byb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgPERlc2lnblN5c3RlbS5Cb3ggZmxleEdyb3c9ezF9IGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofT5cbiAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgIHdoZXJlPXt3aGVyZX1cbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGVzaWduU3lzdGVtLkJveD5cbiAgICAgICkpfVxuICAgICAge2lubmVyTGF5b3V0RWxlbWVudHMubWFwKChpbm5lckxheW91dEVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2lubmVyTGF5b3V0RWxlbWVudH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29tcG9uZW50PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0RWxlbWVudFJlbmRlcmVyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IERyYXdlckNvbnRlbnQsIEJveCwgRHJhd2VyRm9vdGVyLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcblxuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHVzZVJlY29yZCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL3VzZS1yZWNvcmQnXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXG5cbmNvbnN0IE5ldzogRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkOiBpbml0aWFsUmVjb3JkLCByZXNvdXJjZSwgYWN0aW9uIH0gPSBwcm9wc1xuICBjb25zdCB7XG4gICAgcmVjb3JkLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBzdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICBsb2FkaW5nLFxuICAgIHNldFJlY29yZCxcbiAgfSA9IHVzZVJlY29yZChpbml0aWFsUmVjb3JkLCByZXNvdXJjZS5pZClcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxSZWNvcmQpIHtcbiAgICAgIHNldFJlY29yZChpbml0aWFsUmVjb3JkKVxuICAgIH1cbiAgfSwgW2luaXRpYWxSZWNvcmRdKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiBib29sZWFuID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaGFuZGxlU3VibWl0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkpXG4gICAgICB9XG4gICAgICAvLyBpZiByZWNvcmQgaGFzIGlkID09PSBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWNvcmQuaWQpIHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlKHsgcGFyYW1zOiB7fSwgcG9wdWxhdGVkOiB7fSwgZXJyb3JzOiB7fSB9IGFzIFJlY29yZEpTT04pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJmb3JtXCJcbiAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICBmbGV4XG4gICAgICBmbGV4R3Jvdz17MX1cbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgID5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAgICB7YWN0aW9uLmxheW91dCA/IGFjdGlvbi5sYXlvdXQubWFwKChsYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgbGF5b3V0RWxlbWVudD17bGF5b3V0RWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKSA6IHJlc291cmNlLmVkaXRQcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0RyYXdlckNvbnRlbnQ+XG4gICAgICA8RHJhd2VyRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLXNhdmVcIj5cbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdzYXZlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCB7XG4gIE5ldyBhcyBkZWZhdWx0LFxuICBOZXcsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IERyYXdlckNvbnRlbnQsIEJveCwgRHJhd2VyRm9vdGVyLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXG5pbXBvcnQgdXNlUmVjb3JkIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvdXNlLXJlY29yZCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgYXBwZW5kRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IExheW91dEVsZW1lbnRSZW5kZXJlciBmcm9tICcuL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyJ1xuXG5jb25zdCBFZGl0OiBGQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWNvcmQ6IGluaXRpYWxSZWNvcmQsIHJlc291cmNlLCBhY3Rpb24gfSA9IHByb3BzXG5cbiAgY29uc3Qge1xuICAgIHJlY29yZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgc3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgbG9hZGluZyxcbiAgICBzZXRSZWNvcmQsXG4gIH0gPSB1c2VSZWNvcmQoaW5pdGlhbFJlY29yZCwgcmVzb3VyY2UuaWQpXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0aWFsUmVjb3JkKSB7XG4gICAgICBzZXRSZWNvcmQoaW5pdGlhbFJlY29yZClcbiAgICB9XG4gIH0sIFtpbml0aWFsUmVjb3JkXSlcblxuICBjb25zdCBzdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogYm9vbGVhbiA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGhhbmRsZVN1Ym1pdCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkge1xuICAgICAgICBoaXN0b3J5LnB1c2goYXBwZW5kRm9yY2VSZWZyZXNoKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiZm9ybVwiXG4gICAgICBvblN1Ym1pdD17c3VibWl0fVxuICAgICAgZmxleFxuICAgICAgZmxleEdyb3c9ezF9XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICA+XG4gICAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgICAge2FjdGlvbj8uc2hvd0luRHJhd2VyID8gPEFjdGlvbkhlYWRlciB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICAgICAge2FjdGlvbi5sYXlvdXQgPyBhY3Rpb24ubGF5b3V0Lm1hcCgobGF5b3V0RWxlbWVudCwgaSkgPT4gKFxuICAgICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2xheW91dEVsZW1lbnR9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgOiByZXNvdXJjZS5lZGl0UHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1zYXZlXCI+XG4gICAgICAgICAge2xvYWRpbmcgPyAoPEljb24gaWNvbj1cIkZhZGVcIiBzcGluIC8+KSA6IG51bGx9XG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignc2F2ZScsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBFZGl0IGFzIGRlZmF1bHQsXG4gIEVkaXQsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEcmF3ZXJDb250ZW50IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xuaW1wb3J0IExheW91dEVsZW1lbnRSZW5kZXJlciBmcm9tICcuL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyJ1xuXG4vKipcbiAqIEBuYW1lIFNob3dBY3Rpb25cbiAqIEBjYXRlZ29yeSBBY3Rpb25zXG4gKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBnaXZlbiByZWNvcmQuXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTaG93OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgcmVjb3JkLCBhY3Rpb24gfSA9IHByb3BzXG4gIGNvbnN0IHByb3BlcnRpZXMgPSByZXNvdXJjZS5zaG93UHJvcGVydGllc1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlckNvbnRlbnQ+XG4gICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAge2FjdGlvbi5sYXlvdXQgPyBhY3Rpb24ubGF5b3V0Lm1hcCgobGF5b3V0RWxlbWVudCwgaSkgPT4gKFxuICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBsYXlvdXRFbGVtZW50PXtsYXlvdXRFbGVtZW50fVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB3aGVyZT1cInNob3dcIlxuICAgICAgICAvPlxuICAgICAgKSkgOiBwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICB3aGVyZT1cInNob3dcIlxuICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgIDwvRHJhd2VyQ29udGVudD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBTaG93IGFzIGRlZmF1bHQsXG4gIFNob3csXG59XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheSA9IChpc1RpdGxlOiBib29sZWFuKTogQXJyYXk8c3RyaW5nPiA9PiBbXG4gIGlzVGl0bGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsXG4gIGlzVGl0bGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsXG4gICd0YWJsZS1jZWxsJyxcbiAgJ3RhYmxlLWNlbGwnLFxuXVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIFBsYWNlaG9sZGVyLCBUYWJsZVJvdywgVGFibGVDZWxsLCBDaGVja0JveCwgQnV0dG9uR3JvdXAsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi8uLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIsIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UsIFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtcmVjb3JkL21lcmdlLXJlY29yZC1yZXNwb25zZSdcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9hY3Rpb24taGVhZGVyL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xuXG5leHBvcnQgdHlwZSBSZWNvcmRJbkxpc3RQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICBhY3Rpb25QZXJmb3JtZWQ/OiAoYWN0aW9uOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xuICBvblNlbGVjdD86IChyZWNvcmQ6IFJlY29yZEpTT04pID0+IHZvaWQ7XG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUmVjb3JkSW5MaXN0OiBSZWFjdC5GQzxSZWNvcmRJbkxpc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlc291cmNlLCByZWNvcmQ6IHJlY29yZEZyb21Qcm9wcywgYWN0aW9uUGVyZm9ybWVkLFxuICAgIGlzTG9hZGluZywgb25TZWxlY3QsIGlzU2VsZWN0ZWQsXG4gIH0gPSBwcm9wc1xuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTj4ocmVjb3JkRnJvbVByb3BzKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoYWN0aW9uUmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGFjdGlvblJlc3BvbnNlLnJlY29yZCAmJiAhYWN0aW9uUmVzcG9uc2UucmVkaXJlY3RVcmwpIHtcbiAgICAgIHNldFJlY29yZChtZXJnZVJlY29yZFJlc3BvbnNlKHJlY29yZCwgYWN0aW9uUmVzcG9uc2UgYXMgUmVjb3JkQWN0aW9uUmVzcG9uc2UpKVxuICAgIH0gZWxzZSBpZiAoYWN0aW9uUGVyZm9ybWVkKSB7XG4gICAgICBhY3Rpb25QZXJmb3JtZWQoYWN0aW9uUmVzcG9uc2UpXG4gICAgfVxuICB9LCBbYWN0aW9uUGVyZm9ybWVkLCByZWNvcmRdKVxuXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcihoYW5kbGVBY3Rpb25DYWxsYmFjaylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFJlY29yZChyZWNvcmRGcm9tUHJvcHMpXG4gIH0sIFtyZWNvcmRGcm9tUHJvcHNdKVxuXG4gIGNvbnN0IHsgcmVjb3JkQWN0aW9ucyB9ID0gcmVjb3JkXG5cbiAgY29uc3Qgc2hvdyA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnc2hvdycpXG4gIGNvbnN0IGVkaXQgPSByZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ2VkaXQnKVxuICBjb25zdCBhY3Rpb24gPSBzaG93IHx8IGVkaXRcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHRhcmdldFRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoYWN0aW9uXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnYSdcbiAgICAgICYmIHRhcmdldFRhZ05hbWUgIT09ICdidXR0b24nXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnc3ZnJ1xuICAgICkge1xuICAgICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIHBhcmFtczogeyByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWQ6IHJlY29yZC5pZCB9LFxuICAgICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICAgIH0pKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdGlvblBhcmFtcyA9IHsgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkOiByZWNvcmQuaWQgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtczogYWN0aW9uUGFyYW1zLFxuICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgIH0pKGV2ZW50KVxuICApXG5cbiAgY29uc3QgYnV0dG9ucyA9IFt7XG4gICAgaWNvbjogJ092ZXJmbG93TWVudUhvcml6b250YWwnLFxuICAgIHZhcmlhbnQ6ICdsaWdodCcgYXMgY29uc3QsXG4gICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAnZGF0YS10ZXN0aWQnOiAnYWN0aW9ucy1kcm9wZG93bicsXG4gICAgYnV0dG9uczogYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgICAgYWN0aW9uczogcmVjb3JkQWN0aW9ucyxcbiAgICAgIHBhcmFtczogYWN0aW9uUGFyYW1zLFxuICAgICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICAgIH0pLFxuICB9XVxuXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3cgb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtaWQ9e3JlY29yZC5pZH0+XG4gICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnbm90LXNlbGVjdGVkJ30+XG4gICAgICAgIHtvblNlbGVjdCAmJiByZWNvcmQuYnVsa0FjdGlvbnMubGVuZ3RoID8gKFxuICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgb25DaGFuZ2U9eygpOiB2b2lkID0+IG9uU2VsZWN0KHJlY29yZCl9XG4gICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICB7cmVzb3VyY2UubGlzdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgZGF0YS1wcm9wZXJ0eS1uYW1lPXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgZGlzcGxheT17ZGlzcGxheShwcm9wZXJ0eS5pc1RpdGxlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8UGxhY2Vob2xkZXIgc3R5bGU9e3sgaGVpZ2h0OiAxNCB9fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgICB3aGVyZT1cImxpc3RcIlxuICAgICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgKSl9XG4gICAgICA8VGFibGVDZWxsIGtleT1cIm9wdGlvbnNcIj5cbiAgICAgICAge3JlY29yZEFjdGlvbnMubGVuZ3RoID8gKFxuICAgICAgICAgIDxCdXR0b25Hcm91cCBidXR0b25zPXtidXR0b25zfSAvPlxuICAgICAgICApIDogJyd9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZEluTGlzdFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2TGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBJY29uLCBjc3NDbGFzcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cblxuZXhwb3J0IHR5cGUgU29ydExpbmtQcm9wcyA9IHtcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICBzb3J0Qnk/OiBzdHJpbmc7XG59XG5cbmNsYXNzIFNvcnRMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTb3J0TGlua1Byb3BzICYgUm91dGVDb21wb25lbnRQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlLmJpbmQodGhpcylcbiAgfVxuXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiBzb3J0QnkgPT09IHByb3BlcnR5LnByb3BlcnR5UGF0aFxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgbG9jYXRpb24sIGRpcmVjdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSAodGhpcy5pc0FjdGl2ZSgpICYmIGRpcmVjdGlvbiA9PT0gJ2FzYycpID8gJ2Rlc2MnIDogJ2FzYydcbiAgICBjb25zdCBzb3J0ZWRCeUljb24gPSBgQ2FyZXQke2RpcmVjdGlvbiA9PT0gJ2FzYycgPyAnVXAnIDogJ0Rvd24nfWBcblxuICAgIHF1ZXJ5LnNldCgnZGlyZWN0aW9uJywgb3Bwb3NpdGVEaXJlY3Rpb24pXG4gICAgcXVlcnkuc2V0KCdzb3J0QnknLCBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkxpbmsgdG89e3sgc2VhcmNoOiBxdWVyeS50b1N0cmluZygpIH19IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ1NvcnRMaW5rJyl9PlxuICAgICAgICB7cHJvcGVydHkubGFiZWx9XG4gICAgICAgIHt0aGlzLmlzQWN0aXZlKCkgPyAoPEljb24gaWNvbj17c29ydGVkQnlJY29ufSBjb2xvcj1cInByaW1hcnkxMDBcIiBtbD1cImRlZmF1bHRcIiAvPikgOiAnJ31cbiAgICAgIDwvTmF2TGluaz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTb3J0TGluaylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgU29ydExpbmsgZnJvbSAnLi4vc29ydC1saW5rJ1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUhlYWRlclByb3BzID0ge1xuICBwcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcbiAgLyoqXG4gICAqIFByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIG1haW4gcHJvcGVydHkuXG4gICAqL1xuICB0aXRsZVByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xuICAvKipcbiAgICogY3VycmVudGx5IHNlbGVjdGVkIGRpcmVjdGlvbi4gRWl0aGVyICdhc2MnIG9yICdkZXNjJy5cbiAgICovXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAvKipcbiAgICogY3VycmVudGx5IHNlbGVjdGVkIGZpZWxkIGJ5IHdoaWNoIGxpc3QgaXMgc29ydGVkLlxuICAgKi9cbiAgc29ydEJ5Pzogc3RyaW5nO1xuXG4gIGRpc3BsYXk/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgUHJvcGVydHlIZWFkZXI6IFJlYWN0LkZDPFByb3BlcnR5SGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHRpdGxlUHJvcGVydHksIGRpc3BsYXkgfSA9IHByb3BzXG5cbiAgY29uc3QgaXNNYWluID0gcHJvcGVydHkucHJvcGVydHlQYXRoID09PSB0aXRsZVByb3BlcnR5LnByb3BlcnR5UGF0aFxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ2VsbFxuICAgICAgY2xhc3NOYW1lPXtpc01haW4gPyAnbWFpbicgOiB1bmRlZmluZWR9XG4gICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgID5cbiAgICAgIHtwcm9wZXJ0eS5pc1NvcnRhYmxlID8gPFNvcnRMaW5rIHsuLi5wcm9wc30gLz4gOiBwcm9wZXJ0eS5sYWJlbH1cbiAgICA8L1RhYmxlQ2VsbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eUhlYWRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tCb3gsIFRhYmxlSGVhZCwgVGFibGVSb3csIFRhYmxlQ2VsbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5SGVhZGVyIGZyb20gJy4vcHJvcGVydHktaGVhZGVyJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xuXG4vKipcbiAqIEBtZW1iZXJvZiBSZWNvcmRzVGFibGVIZWFkZXJcbiAqIEBhbGlhcyBSZWNvcmRzVGFibGVIZWFkZXJQcm9wc1xuICovXG5leHBvcnQgdHlwZSBSZWNvcmRzVGFibGVIZWFkZXJQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIGEgVGl0bGUgUHJvcGVydHlcbiAgICovXG4gIHRpdGxlUHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIC8qKlxuICAgKiBBbGwgcHJvcGVydGllcyB3aGljaCBzaG91bGQgYmUgcHJlc2VudGVkXG4gICAqL1xuICBwcm9wZXJ0aWVzOiBBcnJheTxCYXNlUHJvcGVydHlKU09OPjtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSBtYXJrZWQgYXMgY3VycmVudGx5IHNvcnRlZCBieVxuICAgKi9cbiAgc29ydEJ5Pzogc3RyaW5nO1xuICAvKipcbiAgICogU29ydCBkaXJlY3Rpb25cbiAgICovXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBpbnZva2VkIHdoZW4gY2hlY2tib3ggaXMgY2xpY2tlZC4gSWYgZ2l2ZW4gZXh0cmEgY29sdW1uXG4gICAqIHdpdGggY2hlY2tib3ggd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgb25TZWxlY3RBbGw/OiAoKSA9PiBhbnk7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgXCJidWxrXCIgY2hlY2tib3ggc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIHNlbGVjdGVkQWxsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBQcmludHMgYHRoZWFkYCBzZWN0aW9uIGZvciB0YWJsZSB3aXRoIHJlY29yZHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBSZWNvcmRzVGFibGVIZWFkZXIgfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkxpc3Qgd2l0aCAyIHByb3BlcnRpZXM8L2NhcHRpb24+XG4gKiBjb25zdCBwcm9wZXJ0aWVzID0gW3tcbiAqICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAqICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gKiAgIGlzU29ydGFibGU6IHRydWUsXG4gKiB9LCB7XG4gKiAgIGxhYmVsOiAnTGFzdCBOYW1lJyxcbiAqICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAqIH1dXG4gKiByZXR1cm4gKFxuICogPEJveCBweT1cInhsXCI+XG4gKiAgIDxUYWJsZT5cbiAqICAgIDxSZWNvcmRzVGFibGVIZWFkZXJcbiAqICAgICAgcHJvcGVydGllcz17cHJvcGVydGllc31cbiAqICAgICAgdGl0bGVQcm9wZXJ0eT17cHJvcGVydGllc1swXX1cbiAqICAgICAgc29ydEJ5PXsnZmlyc3ROYW1lJ31cbiAqICAgICAgZGlyZWN0aW9uPXsnYXNjJ31cbiAqICAgIC8+XG4gKiAgICA8VGFibGVCb2R5PlxuICogICAgICA8VGFibGVSb3c+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Kb2huPC9UYWJsZUNlbGw+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Eb2U8L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxuICogICAgICA8L1RhYmxlUm93PlxuICogICAgICA8VGFibGVSb3c+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5NYXg8L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPktvZGFseTwvVGFibGVDZWxsPlxuICogICAgICAgIDxUYWJsZUNlbGw+PC9UYWJsZUNlbGw+XG4gKiAgICAgIDwvVGFibGVSb3c+XG4gKiAgICA8L1RhYmxlQm9keT5cbiAqICAgPC9UYWJsZT5cbiAqIDwvQm94PlxuICogKVxuICovXG5leHBvcnQgY29uc3QgUmVjb3Jkc1RhYmxlSGVhZGVyOiBSZWFjdC5GQzxSZWNvcmRzVGFibGVIZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlUHJvcGVydHksIHByb3BlcnRpZXMsXG4gICAgc29ydEJ5LCBkaXJlY3Rpb24sXG4gICAgb25TZWxlY3RBbGwsIHNlbGVjdGVkQWxsIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWQ+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAge29uU2VsZWN0QWxsID8gKFxuICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpOiB2b2lkID0+IG9uU2VsZWN0QWxsKCl9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgPFByb3BlcnR5SGVhZGVyXG4gICAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5KHByb3BlcnR5LmlzVGl0bGUpfVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB0aXRsZVByb3BlcnR5PXt0aXRsZVByb3BlcnR5fVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgc29ydEJ5PXtzb3J0Qnl9XG4gICAgICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPFRhYmxlQ2VsbCBrZXk9XCJhY3Rpb25zXCIgc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZHNUYWJsZUhlYWRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25UZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5cblxuLyoqXG4gKiBAYWxpYXMgQWN0aW9uQnV0dG9uUHJvcHNcbiAqIEBtZW1iZXJvZiBBY3Rpb25CdXR0b25cbiAqL1xuZXhwb3J0IHR5cGUgQWN0aW9uQnV0dG9uUHJvcHMgPSB7XG4gIC8qKiBBY3Rpb24gdG8gd2hpY2ggYnV0dG9uIHNob3VsZCByZWRpcmVjdCAqL1xuICBhY3Rpb246IEFjdGlvbkpTT047XG4gIC8qKiBJZCBvZiBhIHJlc291cmNlIG9mIGFuIGFjdGlvbiAqL1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCByZWNvcmRJZCBmb3IgX3JlY29yZF8gYWN0aW9uICovXG4gIHJlY29yZElkPzogc3RyaW5nO1xuICAvKiogT3B0aW9uYWwgcmVjb3JkSWRzIGZvciBfYnVsa18gYWN0aW9uICovXG4gIHJlY29yZElkcz86IEFycmF5PHN0cmluZz47XG4gIC8qKiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIGFjdGlvbiBpcyBwZXJmb3JtZWQgKi9cbiAgYWN0aW9uUGVyZm9ybWVkPzogKGFjdGlvbjogQWN0aW9uUmVzcG9uc2UpID0+IGFueTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIEJ1dHRvbiB3aGljaCByZWRpcmVjdHMgdG8gZ2l2ZW4gYWN0aW9uXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBBY3Rpb25CdXR0b24gfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvbkJ1dHRvbjogUmVhY3QuRkM8QWN0aW9uQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGFjdGlvbiwgYWN0aW9uUGVyZm9ybWVkLCByZXNvdXJjZUlkLCByZWNvcmRJZCwgcmVjb3JkSWRzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgaHJlZiwgaGFuZGxlQ2xpY2sgfSA9IHVzZUFjdGlvbihhY3Rpb24sIHtcbiAgICByZXNvdXJjZUlkLCByZWNvcmRJZCwgcmVjb3JkSWRzLFxuICB9LCBhY3Rpb25QZXJmb3JtZWQpXG5cbiAgaWYgKCFhY3Rpb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZmlyc3RDaGlsZCA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzBdXG5cbiAgaWYgKCFmaXJzdENoaWxkXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdzdHJpbmcnXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdudW1iZXInXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uQnV0dG9uIGhhcyB0byBoYXZlIG9uZSBjaGlsZCcpXG4gIH1cblxuICBjb25zdCBXcmFwcGVkRWxlbWVudCA9IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdENoaWxkIGFzIFJlYWN0RWxlbWVudDxhbnk+LCB7XG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgJ2RhdGEtdGVzdGlkJzogYnVpbGRBY3Rpb25UZXN0SWQoYWN0aW9uKSxcbiAgICBocmVmLFxuICB9KVxuXG5cbiAgcmV0dXJuIFdyYXBwZWRFbGVtZW50XG59XG5cbi8vIFRPRE8gLSByZW1vdmUgdGhpcyBoYWNrXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiwgSWNvbiwgSW5mb0JveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbidcblxuZXhwb3J0IHR5cGUgTm9SZWNvcmRzUHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmNvbnN0IE5vUmVjb3Jkc09yaWdpbmFsOiBSZWFjdC5GQzxOb1JlY29yZHNQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24sIHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBjYW5DcmVhdGUgPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gJ25ldycpXG5cbiAgcmV0dXJuIChcbiAgICA8SW5mb0JveCB0aXRsZT17dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzJywgcmVzb3VyY2UuaWQpfT5cbiAgICAgIDxUZXh0IG1iPVwieHhsXCI+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub1JlY29yZHNJblJlc291cmNlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgPC9UZXh0PlxuICAgICAge2NhbkNyZWF0ZSA/IChcbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBhY3Rpb249e2NhbkNyZWF0ZX0gcmVzb3VyY2VJZD17cmVzb3VyY2UuaWR9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJBZGRcIiAvPlxuICAgICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY3JlYXRlRmlyc3RSZWNvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQWN0aW9uQnV0dG9uPlxuICAgICAgKSA6ICcnfVxuICAgIDwvSW5mb0JveD5cbiAgKVxufVxuXG4vLyBUaGlzIGhhY2sgcHJldmVudHMgcm9sbHVwIGZyb20gdGhyb3dpbmcgYW4gZXJyb3JcbmNvbnN0IE5vUmVjb3JkcyA9IGFsbG93T3ZlcnJpZGUoTm9SZWNvcmRzT3JpZ2luYWwsICdOb1JlY29yZHMnKVxuXG5leHBvcnQgeyBOb1JlY29yZHMgfVxuZXhwb3J0IGRlZmF1bHQgTm9SZWNvcmRzXG4iLCJpbXBvcnQgeyBBY3Rpb25KU09OLCBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyA9IChyZWNvcmRzOiBBcnJheTxSZWNvcmRKU09OPik6IEFycmF5PEFjdGlvbkpTT04+ID0+IHtcbiAgY29uc3QgYWN0aW9ucyA9IE9iamVjdC52YWx1ZXMocmVjb3Jkcy5yZWR1Y2UoKG1lbW8sIHJlY29yZCkgPT4gKHtcbiAgICAuLi5tZW1vLFxuICAgIC4uLnJlY29yZC5idWxrQWN0aW9ucy5yZWR1Y2UoKGFjdGlvbnNNZW1vLCBhY3Rpb24pID0+ICh7XG4gICAgICAuLi5hY3Rpb25zTWVtbyxcbiAgICAgIFthY3Rpb24ubmFtZV06IGFjdGlvbixcbiAgICB9KSwge30gYXMgUmVjb3JkPHN0cmluZywgQWN0aW9uSlNPTj4pLFxuICB9KSwge30gYXMgUmVjb3JkPHN0cmluZywgQWN0aW9uSlNPTj4pKVxuICByZXR1cm4gYWN0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZUNhcHRpb24sIFRpdGxlLCBCdXR0b25Hcm91cCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIsIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyBmcm9tICcuL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzJ1xuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9hY3Rpb24taGVhZGVyL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xuXG50eXBlIFNlbGVjdGVkUmVjb3Jkc1Byb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICBzZWxlY3RlZFJlY29yZHM/OiBBcnJheTxSZWNvcmRKU09OPjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkUmVjb3JkczogUmVhY3QuRkM8U2VsZWN0ZWRSZWNvcmRzUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHNlbGVjdGVkUmVjb3JkcyB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcigpXG5cbiAgaWYgKCFzZWxlY3RlZFJlY29yZHMgfHwgIXNlbGVjdGVkUmVjb3Jkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcGFyYW1zID0geyByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWRzOiBzZWxlY3RlZFJlY29yZHMubWFwKHJlY29yZHMgPT4gcmVjb3Jkcy5pZCkgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICB9KShldmVudClcbiAgKVxuXG4gIGNvbnN0IGJ1bGtCdXR0b25zID0gYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgIGFjdGlvbnM6IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMoc2VsZWN0ZWRSZWNvcmRzKSxcbiAgICBwYXJhbXMsXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ2FwdGlvbj5cbiAgICAgIDxCb3ggZmxleCBweT1cInNtXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8VGl0bGUgbXI9XCJsZ1wiPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnc2VsZWN0ZWRSZWNvcmRzJywgcmVzb3VyY2UuaWQsIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkUmVjb3Jkcy5sZW5ndGggfSl9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzaXplPVwic21cIiByb3VuZGVkIGJ1dHRvbnM9e2J1bGtCdXR0b25zfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9UYWJsZUNhcHRpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRSZWNvcmRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBMb2FkZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBSZWNvcmRJbkxpc3QgZnJvbSAnLi9yZWNvcmQtaW4tbGlzdCdcbmltcG9ydCBSZWNvcmRzVGFibGVIZWFkZXIgZnJvbSAnLi9yZWNvcmRzLXRhYmxlLWhlYWRlcidcbmltcG9ydCBOb1JlY29yZHMgZnJvbSAnLi9uby1yZWNvcmRzJ1xuXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgU2VsZWN0ZWRSZWNvcmRzIGZyb20gJy4vc2VsZWN0ZWQtcmVjb3JkcydcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5cbi8qKlxuICogQGFsaWFzIFJlY29yZHNUYWJsZVByb3BzXG4gKiBAbWVtYmVyb2YgUmVjb3Jkc1RhYmxlXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZHNUYWJsZVByb3BzID0ge1xuICAvKipcbiAgICogUmVzb3VyY2Ugd2hpY2ggdHlwZSByZWNvcmRzIGFyZSByZW5kZXJlZC4gQmFzZSBvbiB0aGF0IHdlIGRlZmluZSB3aGljaCBjb2x1bW5zIHNob3VsZCBiZSBzZWVuLlxuICAgKi9cbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgLyoqXG4gICAqIEFycmF5IG9mIHJlY29yZHMgc2VlbiBpbiB0aGUgdGFibGVcbiAgICovXG4gIHJlY29yZHM6IEFycmF5PFJlY29yZEpTT04+O1xuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBpbnZva2VkIHdoZW4gc29tZW9uZSBwZXJmb3JtcyBhY3Rpb24gd2l0aG91dCBjb21wb25lbnQgb24gYSBnaXZlbiByZWNvcmQuXG4gICAqIEFjdGlvbiB3aXRob3V0IGNvbXBvbmVudCBpcyBhIGBkZWxldGVgIGFjdGlvbiAtIHlvdSBtaWdodCB3YW50IHRvIHJlZnJlc2ggdGhlIGxpc3QgYWZ0ZXIgdGhhdFxuICAgKi9cbiAgYWN0aW9uUGVyZm9ybWVkPzogKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xuICAvKiogZGVmYXVsdCBzb3J0IGJ5IGNvbHVtbiAqL1xuICBzb3J0Qnk/OiBzdHJpbmc7XG4gIC8qKiBzb3J0IGRpcmVjdGlvbiAqL1xuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgLyoqIGluZGljYXRlcyBpZiB0aGUgdGFibGUgc2hvdWxkIGJlIGluIGxvYWRpbmcgc3RhdGUgKi9cbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbiAgLyoqIGxpc3Qgb2Ygc2VsZWN0ZWQgcmVjb3JkcyAqL1xuICBzZWxlY3RlZFJlY29yZHM/OiBBcnJheTxSZWNvcmRKU09OPjtcbiAgLyoqIGhhbmRsZXIgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gcmVjb3JkIGlzIHNlbGVjdGVkICovXG4gIG9uU2VsZWN0PzogKHJlY29yZDogUmVjb3JkSlNPTikgPT4gYW55O1xuICAvKiogaGFuZGxlciBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBhbGwgaXRlbXMgYXJlIHNlbGVjdGVkICovXG4gIG9uU2VsZWN0QWxsPzogKCkgPT4gYW55O1xufVxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgYW4gZW50aXJlIHJlY29yZHMgdGFibGUuIFRvIGZpbGwgdGhlIGRhdGEgeW91IG1pZ2h0IG5lZWQ6XG4gKlxuICogLSB7QGxpbmsgdXNlUmVjb3Jkc30gYW5kXG4gKiAtIHtAbGluayB1c2VTZWxlY3RlZFJlY29yZHN9IGhvb2tzXG4gKlxuICogc28gbWFrZSBzdXJlIHRvIHNlZSBhdCB0aGUgZG9jdW1lbnRhdGlvbiBwYWdlcyBmb3IgYm90aCBvZiB0aGVtXG4gKlxuICogQGNvbXBvbmVudFxuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBuZXcgaW4gdmVyc2lvbiAzLjNcbiAqL1xuZXhwb3J0IGNvbnN0IFJlY29yZHNUYWJsZTogUmVhY3QuRkM8UmVjb3Jkc1RhYmxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNvdXJjZSwgcmVjb3JkcyxcbiAgICBhY3Rpb25QZXJmb3JtZWQsIHNvcnRCeSxcbiAgICBkaXJlY3Rpb24sIGlzTG9hZGluZyxcbiAgICBvblNlbGVjdCwgc2VsZWN0ZWRSZWNvcmRzLFxuICAgIG9uU2VsZWN0QWxsLFxuICB9ID0gcHJvcHNcbiAgaWYgKCFyZWNvcmRzLmxlbmd0aCkge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoPExvYWRlciAvPilcbiAgICB9XG4gICAgcmV0dXJuICg8Tm9SZWNvcmRzIHJlc291cmNlPXtyZXNvdXJjZX0gLz4pXG4gIH1cblxuICBjb25zdCBzZWxlY3RlZEFsbCA9IHNlbGVjdGVkUmVjb3JkcyAmJiAhIXJlY29yZHMuZmluZChyZWNvcmQgPT4gKFxuICAgIHNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXG4gICkpXG5cbiAgY29uc3QgcmVjb3Jkc0hhdmVCdWxrQWN0aW9uID0gISFyZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5idWxrQWN0aW9ucy5sZW5ndGgpXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGU+XG4gICAgICA8U2VsZWN0ZWRSZWNvcmRzXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmRzPXtzZWxlY3RlZFJlY29yZHN9XG4gICAgICAvPlxuICAgICAgPFJlY29yZHNUYWJsZUhlYWRlclxuICAgICAgICBwcm9wZXJ0aWVzPXtyZXNvdXJjZS5saXN0UHJvcGVydGllc31cbiAgICAgICAgdGl0bGVQcm9wZXJ0eT17cmVzb3VyY2UudGl0bGVQcm9wZXJ0eX1cbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgIHNvcnRCeT17c29ydEJ5fVxuICAgICAgICBvblNlbGVjdEFsbD17cmVjb3Jkc0hhdmVCdWxrQWN0aW9uID8gb25TZWxlY3RBbGwgOiB1bmRlZmluZWR9XG4gICAgICAgIHNlbGVjdGVkQWxsPXtzZWxlY3RlZEFsbH1cbiAgICAgIC8+XG4gICAgICA8VGFibGVCb2R5PlxuICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IChcbiAgICAgICAgICA8UmVjb3JkSW5MaXN0XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXthY3Rpb25QZXJmb3JtZWR9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e1xuICAgICAgICAgICAgICBzZWxlY3RlZFJlY29yZHMgJiYgISFzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzVGFibGVcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgUGFnaW5hdGlvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgUmVjb3Jkc1RhYmxlIGZyb20gJy4uL2FwcC9yZWNvcmRzLXRhYmxlL3JlY29yZHMtdGFibGUnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IHVzZVJlY29yZHMgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMnXG5pbXBvcnQgdXNlU2VsZWN0ZWRSZWNvcmRzIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1zZWxlY3RlZC1yZWNvcmRzL3VzZS1zZWxlY3RlZC1yZWNvcmRzJ1xuaW1wb3J0IHsgUkVGUkVTSF9LRVkgfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAoeyByZXNvdXJjZSwgc2V0VGFnIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHJlY29yZHMsXG4gICAgbG9hZGluZyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc29ydEJ5LFxuICAgIHBhZ2UsXG4gICAgdG90YWwsXG4gICAgZmV0Y2hEYXRhLFxuICAgIHBlclBhZ2UsXG4gIH0gPSB1c2VSZWNvcmRzKHJlc291cmNlLmlkKVxuICBjb25zdCB7XG4gICAgc2VsZWN0ZWRSZWNvcmRzLFxuICAgIGhhbmRsZVNlbGVjdCxcbiAgICBoYW5kbGVTZWxlY3RBbGwsXG4gICAgc2V0U2VsZWN0ZWRSZWNvcmRzLFxuICB9ID0gdXNlU2VsZWN0ZWRSZWNvcmRzKHJlY29yZHMpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2V0VGFnKSB7XG4gICAgICBzZXRUYWcodG90YWwudG9TdHJpbmcoKSlcbiAgICB9XG4gIH0sIFt0b3RhbF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMoW10pXG4gIH0sIFtyZXNvdXJjZS5pZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBpZiAoc2VhcmNoLmdldChSRUZSRVNIX0tFWSkpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbXSlcbiAgICB9XG4gIH0sIFtsb2NhdGlvbi5zZWFyY2hdKVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvblBlcmZvcm1lZCA9ICgpOiBhbnkgPT4gZmV0Y2hEYXRhKClcblxuICBjb25zdCBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICAgIHNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlTnVtYmVyLnRvU3RyaW5nKCkpXG4gICAgaGlzdG9yeS5wdXNoKHsgc2VhcmNoOiBzZWFyY2gudG9TdHJpbmcoKSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiPlxuICAgICAgPFJlY29yZHNUYWJsZVxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAgIGFjdGlvblBlcmZvcm1lZD17aGFuZGxlQWN0aW9uUGVyZm9ybWVkfVxuICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxuICAgICAgICBvblNlbGVjdEFsbD17aGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICBzZWxlY3RlZFJlY29yZHM9e3NlbGVjdGVkUmVjb3Jkc31cbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgIHNvcnRCeT17c29ydEJ5fVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAvPlxuICAgICAgPFRleHQgbXQ9XCJ4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgcGVyUGFnZT17cGVyUGFnZX1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2luYXRpb25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTGlzdCBhcyBkZWZhdWx0LFxuICBMaXN0LFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGROb3RpY2UgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2FkZC1ub3RpY2UnXG5cbi8qKlxuICogTm90aWNlTWVzc2FnZSB3aGljaCBjYW4gYmUgcHJlc2VudGVkIGFzIGEgXCJUb2FzdFwiIG1lc3NhZ2UuXG4gKiBAYWxpYXMgTm90aWNlTWVzc2FnZVxuICogQG1lbWJlcm9mIHdpdGhOb3RpY2VcbiAqL1xuZXhwb3J0IHR5cGUgTm90aWNlTWVzc2FnZSA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbn1cblxuXG4vKipcbiAqIEFkZGl0aW9uYWwgcHJvcHMgd2hpY2ggYXJlIHBhc3NlZCB0byB5b3VyIGNvbXBvbmVudFxuICogQGFsaWFzIEFkZE5vdGljZVByb3BzXG4gKiBAbWVtYmVyb2Ygd2l0aE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBBZGROb3RpY2VQcm9wcyA9IHtcbiAgLy8gRnVuY3Rpb24gdHJpZ2dlcmluZyBub3RpY2UgbWVzc2FnZXNcbiAgYWRkTm90aWNlOiAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiB2b2lkO1xufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IEFkZE5vdGljZVByb3BzID0+ICh7XG4gIGFkZE5vdGljZTogKG5vdGljZTogTm90aWNlTWVzc2FnZSk6IHZvaWQgPT4gZGlzcGF0Y2goYWRkTm90aWNlKG5vdGljZSkpLFxufSlcblxuLyoqXG4gKiBIaWdoZXIgT3JkZXIgQ29tcG9uZW50IHdoaWNoIGFsbG93cyB5b3UgdG8gcG9zdCBub3RpY2UgbWVzc2FnZXMgZnJvbSB5b3VyIGNvbXBvbmVudHNcbiAqXG4gKiBJdCBnaXZlcyB5b3UgdGhlIGFkZGl0aW9uYWwgcHJvcDogYGFkZE5vdGljZShub3RpY2VNZXNzYWdlKWAgdGFraW5nIHtAbGluayBOb3RpY2VNZXNzYWdlfS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB3aXRoTm90aWNlIH0gZnJvbSAnYWRtaW4tYnJvL2NvcmUnXG4gKlxuICogY29uc3QgTVlfTUVTU0FHRSA9IHtcbiAqICAgbWVzc2FnZTogJ0kgYW0gdG9hc3QgbWVzc2FnZScsXG4gKiAgIHR5cGU6ICdzdWNjZXNzJyxcbiAqIH1cbiAqIGNvbnN0IE15Q3VzdG9tQ29tcG9uZW50ID0gKHsgYWRkTm90aWNlIH0pID0+IHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8YSBvbkNsaWNrPXsoKSA9PiBhZGROb3RpY2UoTVlfTUVTU0FHRSl9PkNsaWNrIE1lPC9hPlxuICogICApXG4gKiB9XG4gKiBleHBvcnQgZGVmYXVsdCB3aXRoTm90aWNlKE15Q3VzdG9tQ29tcG9uZW50KVxuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEhPQ1xuICovXG5jb25zdCB3aXRoTm90aWNlID0gQ29tcG9uZW50ID0+IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb21wb25lbnQpXG5cbmV4cG9ydCB7XG4gIHdpdGhOb3RpY2UgYXMgZGVmYXVsdCxcbiAgd2l0aE5vdGljZSxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgVGFibGUsIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCwgVGV4dCxcbiAgRHJhd2VyQ29udGVudCwgRHJhd2VyRm9vdGVyLCBCdXR0b24sIE1lc3NhZ2VCb3gsIEljb24sXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgd2l0aE5vdGljZSwgeyBBZGROb3RpY2VQcm9wcyB9IGZyb20gJy4uLy4uL2hvYy93aXRoLW5vdGljZSdcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5cbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbi8qKlxuICogQG5hbWUgU2hvd0FjdGlvblxuICogQGNhdGVnb3J5IEFjdGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGdpdmVuIHJlY29yZC5cbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJ1bGtEZWxldGU6IFJlYWN0LkZDPEFjdGlvblByb3BzICYgQWRkTm90aWNlUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCByZWNvcmRzLCBhY3Rpb24sIGFkZE5vdGljZSwgaGlzdG9yeSB9ID0gcHJvcHNcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBpZiAoIXJlY29yZHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQ+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdwaWNrU29tZUZpcnN0VG9SZW1vdmUnLCByZXNvdXJjZS5pZCl9XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlY29yZElkcyA9IHJlY29yZHMubWFwKHIgPT4gci5pZClcbiAgICBhcGkuYnVsa0FjdGlvbih7XG4gICAgICByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCxcbiAgICAgIGFjdGlvbk5hbWU6IGFjdGlvbi5uYW1lLFxuICAgICAgcmVjb3JkSWRzLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgfSkudGhlbigoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWNlKSB7XG4gICAgICAgIGFkZE5vdGljZShyZXNwb25zZS5kYXRhLm5vdGljZSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgLy8gYnVsayBmdW5jdGlvbiBoYXZlIHJlY29yZElkcyBpbiB0aGUgVVJMIHNvIGl0IGhhcyB0byBiZSBzdHJpcHBlZCBiZWZvcmUgcmVkaXJlY3RcbiAgICAgICAgc2VhcmNoLmRlbGV0ZSgncmVjb3JkSWRzJylcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZEZvcmNlUmVmcmVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsLCBzZWFyY2gudG9TdHJpbmcoKSkpXG4gICAgICB9XG4gICAgfSkpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2J1bGtEZWxldGVFcnJvcicsIHJlc291cmNlLmlkKSxcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIH0pXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIG9taXRBY3Rpb25zIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAgICA8TWVzc2FnZUJveFxuICAgICAgICAgIG1iPVwieHhsXCJcbiAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICBtZXNzYWdlPXt0cmFuc2xhdGVNZXNzYWdlKCd0aGVzZVJlY29yZHNXaWxsQmVSZW1vdmVkJywgcmVzb3VyY2UuaWQsIHsgY291bnQ6IHJlY29yZHMubGVuZ3RoIH0pfVxuICAgICAgICAvPlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyZWNvcmQuaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXtyZXNvdXJjZS50aXRsZVByb3BlcnR5fVxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdjb25maXJtUmVtb3ZhbE1hbnknLCByZXNvdXJjZS5pZCwgeyBjb3VudDogcmVjb3Jkcy5sZW5ndGggfSl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBGb3JtYXR0ZWRCdWxrRGVsZXRlID0gd2l0aE5vdGljZSh3aXRoUm91dGVyKEJ1bGtEZWxldGUpKVxuXG5leHBvcnQge1xuICBGb3JtYXR0ZWRCdWxrRGVsZXRlIGFzIGRlZmF1bHQsXG4gIEZvcm1hdHRlZEJ1bGtEZWxldGUgYXMgQnVsa0RlbGV0ZSxcbn1cbiIsImltcG9ydCB7IE5ldyB9IGZyb20gJy4vbmV3J1xuaW1wb3J0IHsgRWRpdCB9IGZyb20gJy4vZWRpdCdcbmltcG9ydCB7IFNob3cgfSBmcm9tICcuL3Nob3cnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgQnVsa0RlbGV0ZSB9IGZyb20gJy4vYnVsay1kZWxldGUnXG5cbmV4cG9ydCAqIGZyb20gJy4vbmV3J1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5leHBvcnQgKiBmcm9tICcuL2VkaXQnXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnXG5leHBvcnQgKiBmcm9tICcuL2xpc3QnXG5leHBvcnQgKiBmcm9tICcuL2J1bGstZGVsZXRlJ1xuZXhwb3J0ICogZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIG5ldzogTmV3LFxuICBlZGl0OiBFZGl0LFxuICBzaG93OiBTaG93LFxuICBsaXN0OiBMaXN0LFxuICBidWxrRGVsZXRlOiBCdWxrRGVsZXRlLFxufVxuIiwiZXhwb3J0IGNvbnN0IERPQ1MgPSAnaHR0cHM6Ly9hZG1pbmJyby5jb20nXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQVRIUyA9IHtcbiAgcm9vdFBhdGg6ICcvYWRtaW4nLFxuICBsb2dvdXRQYXRoOiAnL2FkbWluL2xvZ291dCcsXG4gIGxvZ2luUGF0aDogJy9hZG1pbi9sb2dpbicsXG59XG5cbi8qIGNzcGVsbDogZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBBRE1JTl9CUk9fVE1QX0RJUiA9ICcuYWRtaW5icm8nXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBNZXNzYWdlQm94LCBMaW5rIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yLWJvdW5kYXJ5J1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgeyBET0NTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi5wcm9wcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcbiAgVXNlckNvbXBvbmVudHM6IEFycmF5PHN0cmluZz47XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYWxsIHRoZSBkZWZhdWx0IGFuZCBjdXN0b20gYWN0aW9ucyBmb3IgYm90aCB0aGUgUmVzb3VyY2UgYW5kIHRoZSBSZWNvcmQuXG4gKlxuICogSXQgcGFzc2VzIGFsbCBwcm9wcyBkb3duIHRvIHRoZSBhY3R1YWwgQWN0aW9uIGNvbXBvbmVudC5cbiAqXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIHlvdXIgb3duIGFjdGlvbnM6XG4gKiBgYGBcbiAqIC8vIEFkbWluQnJvIG9wdGlvbnNcbiAqIGNvbnN0IEFkbWluQnJvT3B0aW9ucyA9IHtcbiAqICAgcmVzb3VyY2VzOiBbXG4gKiAgICAgIHJlc291cmNlLFxuICogICAgICBvcHRpb25zOiB7XG4gKiAgICAgICAgYWN0aW9uczoge1xuICogICAgICAgICAgIG15TmV3QWN0aW9uOiB7XG4gKiAgICAgICAgICAgICBsYWJlbDogJ2FtYXppbmcgYWN0aW9uJyxcbiAqICAgICAgICAgICAgIGljb246ICdBZGQnLFxuICogICAgICAgICAgICAgaW5WaXNpYmxlOiAocmVzb3VyY2UsIHJlY29yZCkgPT4gcmVjb3JkLnBhcmFtKCdlbWFpbCcpICE9PSAnJyxcbiAqICAgICAgICAgICAgIGFjdGlvblR5cGU6ICdyZWNvcmQnLFxuICogICAgICAgICAgICAgY29tcG9uZW50OiBBZG1pbkJyby5idW5kbGUoJy4vbXktbmV3LWFjdGlvbicpLFxuICogICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3QsIHJlc3BvbnNlLCBkYXRhKSA9PiB7XG4gKiAgICAgICAgICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgICAgICAgICAgIC4uLlxuICogICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICogICBdXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgYGBcbiAqIC8vIC4vbXktbmV3LWFjdGlvbi5qc3hcbiAqIGltcG9ydCB7IEJveCB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBNeU5ld0FjdGlvbiA9IChwcm9wcykgPT4ge1xuICogICBjb25zdCB7IHJlc291cmNlLCBhY3Rpb24sIHJlY29yZCB9ID0gcHJvcHNcbiAqICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHByb3BzIGFuZCByZW5kZXIgYWN0aW9uXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEJveD5Tb21lIEFjdGlvbiBDb250ZW50PC9Cb3g+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBuYW1lIEJhc2VBY3Rpb25Db21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgQmFzZUFjdGlvbkNvbXBvbmVudDogUmVhY3QuRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIGFjdGlvbiwgcmVjb3JkLCByZWNvcmRzLCBzZXRUYWcgfSA9IHByb3BzXG4gIGNvbnN0IGRvY3VtZW50YXRpb25MaW5rID0gW0RPQ1MsICdCYXNlQWN0aW9uLmh0bWwnXS5qb2luKCcvJylcblxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBsZXQgQWN0aW9uID0gYWN0aW9uc1thY3Rpb24ubmFtZV1cblxuICBpZiAoYWN0aW9uLmNvbXBvbmVudCkge1xuICAgIEFjdGlvbiA9IEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2FjdGlvbi5jb21wb25lbnRdXG4gIH1cblxuICBpZiAoQWN0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8QWN0aW9uXG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAgICAgc2V0VGFnPXtzZXRUYWd9XG4gICAgICAgIC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG4gIHJldHVybiBBY3Rpb24gfHwgKFxuICAgIDxNZXNzYWdlQm94IHZhcmlhbnQ9XCJkYW5nZXJcIj5cbiAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub0FjdGlvbkNvbXBvbmVudCcpfVxuICAgICAgPFRyYW5zIGtleT1cIm1lc3NhZ2VzLmJ1dHRvbnMuc2VlVGhlRG9jdW1lbnRhdGlvblwiPlxuICAgICAgICBTZWU6XG4gICAgICAgIDxMaW5rIG1sPVwiZGVmYXVsdFwiIGhyZWY9e2RvY3VtZW50YXRpb25MaW5rfT50aGUgZG9jdW1lbnRhdGlvbjwvTGluaz5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VBY3Rpb25Db21wb25lbnRcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1lc3NhZ2VCb3gsIFRleHQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBFcnJvck1lc3NhZ2VCb3hcbiAqIEBhbGlhcyBFcnJvck1lc3NhZ2VCb3hQcm9wc1xuICovXG5leHBvcnQgdHlwZSBFcnJvck1lc3NhZ2VCb3hQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgdGVzdElkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBjbGFzc1xuICogUHJpbnRzIGVycm9yIG1lc3NhZ2VcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICogQGV4YW1wbGVcbiAqIHJldHVybiAoXG4gKiA8RXJyb3JNZXNzYWdlQm94IHRpdGxlPXsnU29tZSBlcnJvcid9PlxuICogICA8cD5UZXh0IGJlbG93IHRoZSB0aXRsZTwvcD5cbiAqIDwvRXJyb3JNZXNzYWdlQm94PlxuICogKVxuICovXG5jb25zdCBFcnJvck1lc3NhZ2VCb3g6IFJlYWN0LkZDPEVycm9yTWVzc2FnZUJveFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgdGVzdElkIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlQm94IGRhdGEtdGVzdGlkPXt0ZXN0SWR9IG1lc3NhZ2U9e3RpdGxlfT5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmNvbnN0IE5vUmVzb3VyY2VFcnJvcjogUmVhY3QuRkM8e3Jlc291cmNlSWQ6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3hcbiAgICAgIG1lc3NhZ2U9XCI0MDQgLSBQQUdFIE5PVCBGT1VORFwiXG4gICAgICBkYXRhLXRlc3RpZD1cIk5vUmVzb3VyY2VFcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0UmVzb3VyY2UnLCByZXNvdXJjZUlkLCB7IHJlc291cmNlSWQgfSl9XG4gICAgICA8L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmNvbnN0IE5vQWN0aW9uRXJyb3I6IFJlYWN0LkZDPHtyZXNvdXJjZUlkOiBzdHJpbmc7IGFjdGlvbk5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3hcbiAgICAgIG1lc3NhZ2U9XCI0MDQgLSBQQUdFIE5PVCBGT1VORFwiXG4gICAgICBkYXRhLXRlc3RpZD1cIk5vQWN0aW9uRXJyb3JcIlxuICAgICAgdmFyaWFudD1cImluZm9cIlxuICAgICAgbT1cInh4bFwiXG4gICAgPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdlcnJvcjQwNEFjdGlvbicsIHJlc291cmNlSWQsIHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9SZWNvcmRFcnJvcjogUmVhY3QuRkM8e1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIHJlY29yZElkOiBzdHJpbmc7XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlSWQsIHJlY29yZElkIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9SZWNvcmRFcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0UmVjb3JkJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCByZWNvcmRJZCB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTm9SZXNvdXJjZUVycm9yLFxuICBOb0FjdGlvbkVycm9yLFxuICBOb1JlY29yZEVycm9yLFxuICBFcnJvck1lc3NhZ2VCb3gsXG4gIEVycm9yTWVzc2FnZUJveCBhcyBkZWZhdWx0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94LCBCb3hQcm9wcywgRHJhd2VyQ29udGVudCwgRHJhd2VyRm9vdGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkKEJveClgXG4gICYgJHtEcmF3ZXJDb250ZW50fSB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH07XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgXG4gICYgJHtEcmF3ZXJGb290ZXJ9IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9O1xuICB9XG5gXG5cbmNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPEJveFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhcmlhbnQsIGNvbG9yLCAuLi5yZXN0IH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRXcmFwcGVyIHsuLi5yZXN0fSB2YXJpYW50PVwiZ3JleVwiIG14PVwiYXV0b1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwsIHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IERyYXdlciwgREVGQVVMVF9EUkFXRVJfV0lEVEggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8qKlxuICogQGFsaWFzIERyYXdlclBvcnRhbFByb3BzXG4gKiBAbWVtYmVyb2YgRHJhd2VyUG9ydGFsXG4gKi9cbmV4cG9ydCB0eXBlIERyYXdlclBvcnRhbFByb3BzID0ge1xuICAvKipcbiAgICogVGhlIGRyYXdlciBjb250ZW50XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBkcmF3ZXIgd2lkdGhcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbn1cblxuY29uc3QgRFJBV0VSX1BPUlRBTF9JRCA9ICdkcmF3ZXJQb3J0YWwnXG5cbi8qKlxuICogU2hvd3MgYWxsIG9mIGl0cyBjaGlsZHJlbiBpbiBhIERyYXdlciBvbiB0aGUgcmlnaHQuXG4gKiBJbnN0ZWFkIG9mIHJlbmRlcmluZyBpdCdzIG93biB7QGxpbmsgRHJhd2VyfSBjb21wb25lbnQgaXQgcmV1c2VzXG4gKiB0aGUgZ2xvYmFsIERyYXdlciB2aWEgUmVhY3QgUG9ydGFsLlxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgRHJhd2VyUG9ydGFsIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBEcmF3ZXJQb3J0YWw6IFJlYWN0LkZDPERyYXdlclBvcnRhbFByb3BzPiA9ICh7IGNoaWxkcmVuLCB3aWR0aCB9KSA9PiB7XG4gIGNvbnN0IFtkcmF3ZXJFbGVtZW50LCBzZXREcmF3ZXJFbGVtZW50XSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50IHwgbnVsbD4oXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERSQVdFUl9QT1JUQUxfSUQpLFxuICApXG4gIGlmICghZHJhd2VyRWxlbWVudCAmJiB3aW5kb3cpIHtcbiAgICBjb25zdCBpbm5lcldyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBEcmF3ZXJXcmFwcGVyID0gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyh3aW5kb3cgYXMgYW55KS5USEVNRX0+XG4gICAgICAgIDxEcmF3ZXIgaWQ9e0RSQVdFUl9QT1JUQUxfSUR9IGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcilcbiAgICByZW5kZXIoRHJhd2VyV3JhcHBlciwgaW5uZXJXcmFwcGVyLCAoKSA9PiB7XG4gICAgICBzZXREcmF3ZXJFbGVtZW50KHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChEUkFXRVJfUE9SVEFMX0lEKSlcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZHJhd2VyRWxlbWVudCkge1xuICAgICAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgIGRyYXdlckVsZW1lbnQuc3R5bGUud2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdLnRvU3RyaW5nKCkgOiB3aWR0aC50b1N0cmluZygpXG4gICAgICB9XG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBkcmF3ZXJFbGVtZW50LnN0eWxlLndpZHRoID0gREVGQVVMVF9EUkFXRVJfV0lEVEhcbiAgICAgICAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCk6IHZvaWQgPT4gdW5kZWZpbmVkXG4gIH0sIFtkcmF3ZXJFbGVtZW50XSlcblxuICBpZiAoIWRyYXdlckVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICBjaGlsZHJlbixcbiAgICBkcmF3ZXJFbGVtZW50LFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclBvcnRhbFxuIiwiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIFN5bnRoZXRpY0V2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiwgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBCb3gsXG4gIEgzLFxuICBCdXR0b24sXG4gIEljb24sXG4gIERyYXdlcixcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VyRm9vdGVyLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgdG9nZ2xlRmlsdGVyOiAoKSA9PiB2b2lkO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG59XG5cbnR5cGUgTWF0Y2hQcm9wcyA9IHtcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xufVxuXG5jb25zdCBwYXJzZVF1ZXJ5ID0gKGxvY2F0aW9uKTogYW55ID0+IHtcbiAgY29uc3QgZmlsdGVyOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBxdWVyeS5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeVxuICAgIGlmIChrZXkubWF0Y2goJ2ZpbHRlcnMuJykpIHtcbiAgICAgIGZpbHRlcltrZXkucmVwbGFjZSgnZmlsdGVycy4nLCAnJyldID0gdmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbHRlclxufVxuXG5leHBvcnQgY29uc3QgRmlsdGVyRHJhd2VyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgaXNWaXNpYmxlLCB0b2dnbGVGaWx0ZXIgfSA9IHByb3BzXG4gIGNvbnN0IHByb3BlcnRpZXMgPSByZXNvdXJjZS5maWx0ZXJQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShwYXJzZVF1ZXJ5KGxvY2F0aW9uKSlcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPE1hdGNoUHJvcHM+KClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0RmlsdGVyKHt9KSwgW21hdGNoLnBhcmFtcy5yZXNvdXJjZUlkXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KTogZmFsc2UgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChmaWx0ZXJba2V5XSAhPT0gJycpIHtcbiAgICAgICAgc2VhcmNoLnNldChgZmlsdGVycy4ke2tleX1gLCBmaWx0ZXJba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaC5kZWxldGUoYGZpbHRlcnMuJHtrZXl9YClcbiAgICAgIH1cbiAgICB9KVxuICAgIHNlYXJjaC5zZXQoJ3BhZ2UnLCAnMScpXG4gICAgaGlzdG9yeS5wdXNoKGAke2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNoLnRvU3RyaW5nKCl9YClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RmlsdGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgIGZvciAoY29uc3Qga2V5IG9mIHNlYXJjaC5rZXlzKCkpIHtcbiAgICAgIGlmICgha2V5Lm1hdGNoKCdmaWx0ZXJzLicpKSB7XG4gICAgICAgIGZpbHRlcmVkU2VhcmNoLnNldChrZXksIHNlYXJjaC5nZXQoa2V5KSBhcyBzdHJpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5ID0gZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKSA9PT0gJycgPyBgPyR7ZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKX1gIDogJydcbiAgICBoaXN0b3J5LnB1c2goaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSArIHF1ZXJ5KVxuICAgIHNldEZpbHRlcih7fSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IFJlY29yZEpTT04sIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoKHByb3BlcnR5TmFtZSBhcyBSZWNvcmRKU09OKS5wYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigneW91IGNhbiBub3QgcGFzcyBSZWNvcmRKU09OIHRvIGZpbHRlcnMnKVxuICAgIH1cbiAgICBzZXRGaWx0ZXIoe1xuICAgICAgLi4uZmlsdGVyLFxuICAgICAgW3Byb3BlcnR5TmFtZSBhcyBzdHJpbmddOiB2YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyIHZhcmlhbnQ9XCJmaWx0ZXJcIiBpc0hpZGRlbj17IWlzVmlzaWJsZX0gYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgICAgPEgzPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgbXI9XCJsZ1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB0b2dnbGVGaWx0ZXIoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiQ2hldnJvblJpZ2h0XCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdmaWx0ZXJzJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICA8L0gzPlxuICAgICAgICA8Qm94IG15PVwieDNcIj5cbiAgICAgICAgICB7cHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgICAgd2hlcmU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdhcHBseUNoYW5nZXMnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgc2l6ZT1cImxnXCIgb25DbGljaz17cmVzZXRGaWx0ZXJ9IHR5cGU9XCJidXR0b25cIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbigncmVzZXRGaWx0ZXInLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9EcmF3ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRHJhd2VyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IFJlY29yZEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEFjdGlvbkpTT04sIFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgTm9SZXNvdXJjZUVycm9yLCBOb0FjdGlvbkVycm9yLCBOb1JlY29yZEVycm9yIH0gZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyB1c2VOb3RpY2UsIHVzZVJlc291cmNlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IERyYXdlclBvcnRhbCBmcm9tICcuLi9hcHAvZHJhd2VyLXBvcnRhbCdcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlLCBSZWNvcmRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZC9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG5jb25zdCBSZWNvcmRBY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTj4oKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVjb3JkQWN0aW9uUGFyYW1zPigpXG4gIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IHsgYWN0aW9uTmFtZSwgcmVjb3JkSWQsIHJlc291cmNlSWQgfSA9IG1hdGNoLnBhcmFtc1xuICBjb25zdCByZXNvdXJjZSA9IHVzZVJlc291cmNlKHJlc291cmNlSWQpXG5cbiAgY29uc3QgYWN0aW9uID0gcmVjb3JkICYmIHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG5cbiAgY29uc3QgZmV0Y2hSZWNvcmQgPSAoKTogdm9pZCA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGFwaS5yZWNvcmRBY3Rpb24obWF0Y2gucGFyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIHNldFJlY29yZChyZXNwb25zZS5kYXRhLnJlY29yZClcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yRmV0Y2hpbmdSZWNvcmQnLCByZXNvdXJjZUlkKSxcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIH0pXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUmVjb3JkKClcbiAgfSwgW2FjdGlvbk5hbWUsIHJlY29yZElkLCByZXNvdXJjZUlkXSlcblxuICBjb25zdCBoYW5kbGVBY3Rpb25QZXJmb3JtZWQgPSB1c2VDYWxsYmFjaygob2xkUmVjb3JkOiBSZWNvcmRKU09OLCByZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2UucmVjb3JkKSB7XG4gICAgICBzZXRSZWNvcmQobWVyZ2VSZWNvcmRSZXNwb25zZShvbGRSZWNvcmQsIHJlc3BvbnNlIGFzIFJlY29yZEFjdGlvblJlc3BvbnNlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hSZWNvcmQoKVxuICAgIH1cbiAgfSwgW2ZldGNoUmVjb3JkXSlcblxuICBpZiAoIXJlc291cmNlKSB7XG4gICAgcmV0dXJuICg8Tm9SZXNvdXJjZUVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IC8+KVxuICB9XG5cbiAgLy8gV2hlbiB0aGUgdXNlciB2aXNpdHMgdGhpcyByb3V0ZSAocmVjb3JkIGFjdGlvbikgZnJvbSBhIGRpZmZlcmVudCwgdGhhbiB0aGUgY3VycmVudCBvbmUsIHJlY29yZC5cbiAgLy8gSXQgcmVuZGVycyBldmVyeXRoaW5nIHdpdGggYSBuZXcgcmVzb3VyY2UuIFRoZSBvbGQgcmVjb3JkIHJlbWFpbnMgdW50aWwgdXNlRWZmZWN0IGZldGNoZXMgZGF0YVxuICAvLyBmcm9tIHRoZSBBUEkuIHRoYXQgaXMgd2h5IHdlIGhhdmUgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgcmVjb3JkIGhhcyBjb3JyZWN0IHJlY29yZC5pZC5cbiAgLy8gQWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gc2V0UmVjb3JkKHVuZGVmaW5lZCkgYmVmb3JlIHRoZSBmZXRjaCwgYnV0IGl0IGlzIGFzeW5jIGFuZFxuICAvLyB3ZSBjYW5ub3QgYmUgc3VyZSB0aGF0IHRoZSBjb21wb25lbnQgd29udCBiZSByZW5kZXJlZCAoaXQgd2lsbCBiZSBhdCBsZWFzdCBvbmNlKSB3aXRoIHRoZVxuICAvLyB3cm9uZyBkYXRhLlxuICBjb25zdCBoYXNEaWZmZXJlbnRSZWNvcmQgPSByZWNvcmQgJiYgcmVjb3JkLmlkLnRvU3RyaW5nKCkgIT09IHJlY29yZElkXG5cbiAgaWYgKGxvYWRpbmcgfHwgaGFzRGlmZmVyZW50UmVjb3JkKSB7XG4gICAgY29uc3QgYWN0aW9uRnJvbVJlc291cmNlID0gcmVzb3VyY2UuYWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxuICAgIHJldHVybiBhY3Rpb25Gcm9tUmVzb3VyY2U/LnNob3dJbkRyYXdlciA/ICg8RHJhd2VyUG9ydGFsPjxMb2FkZXIgLz48L0RyYXdlclBvcnRhbD4pIDogPExvYWRlciAvPlxuICB9XG5cbiAgaWYgKCFhY3Rpb24pIHtcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IC8+KVxuICB9XG5cbiAgaWYgKCFyZWNvcmQpIHtcbiAgICByZXR1cm4gKDxOb1JlY29yZEVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IHJlY29yZElkPXtyZWNvcmRJZH0gLz4pXG4gIH1cblxuICBpZiAoYWN0aW9uLnNob3dJbkRyYXdlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICAgIGFjdGlvbj17YWN0aW9uIGFzIEFjdGlvbkpTT059XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAvPlxuICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgIDxBY3Rpb25IZWFkZXJcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgIGFjdGlvblBlcmZvcm1lZD17KHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSk6IHZvaWQgPT4gKFxuICAgICAgICAgIGhhbmRsZUFjdGlvblBlcmZvcm1lZChyZWNvcmQsIHJlc3BvbnNlKVxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkQWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IE5vUmVzb3VyY2VFcnJvciwgTm9BY3Rpb25FcnJvciB9IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXG5pbXBvcnQgRHJhd2VyUG9ydGFsIGZyb20gJy4uL2FwcC9kcmF3ZXItcG9ydGFsJ1xuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8UmVzb3VyY2VBY3Rpb25QYXJhbXM+XG5cbmNvbnN0IFJlc291cmNlQWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZXMsIG1hdGNoIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSA9IG1hdGNoLnBhcmFtc1xuXG4gIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQociA9PiByLmlkID09PSByZXNvdXJjZUlkKVxuICBpZiAoIXJlc291cmNlKSB7XG4gICAgcmV0dXJuICg8Tm9SZXNvdXJjZUVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IC8+KVxuICB9XG4gIGNvbnN0IGFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz4pXG4gIH1cblxuICBpZiAoYWN0aW9uLnNob3dJbkRyYXdlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRHJhd2VyUG9ydGFsPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICA8QWN0aW9uSGVhZGVyXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAvPlxuICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgIC8+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIHJlc291cmNlczogc3RhdGUucmVzb3VyY2VzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlc291cmNlQWN0aW9uKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2gsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgeyBCdWxrQWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyBmcm9tICcuLi9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9nZXQtYnVsay1hY3Rpb25zLWZyb20tcmVjb3JkcydcbmltcG9ydCB7IEFjdGlvbkpTT04sIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXG5pbXBvcnQge1xuICBBY3Rpb25IZWFkZXIsXG4gIERyYXdlclBvcnRhbCxcbiAgQmFzZUFjdGlvbkNvbXBvbmVudCxcbiAgRXJyb3JNZXNzYWdlQm94LFxuICBOb1Jlc291cmNlRXJyb3IsXG4gIE5vQWN0aW9uRXJyb3IsXG59IGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCB1c2VOb3RpY2UsIHVzZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcbn1cblxudHlwZSBNYXRjaFBhcmFtcyA9IFBpY2s8QnVsa0FjdGlvblBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3Jlc291cmNlSWQnPlxuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuY29uc3QgQnVsa0FjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gdXNlUm91dGVNYXRjaDxNYXRjaFBhcmFtcz4oKVxuICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZTxBcnJheTxSZWNvcmRKU09OPj4oW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBtYXRjaC5wYXJhbXNcbiAgY29uc3QgcmVzb3VyY2UgPSB1c2VSZXNvdXJjZShyZXNvdXJjZUlkKVxuXG4gIGNvbnN0IGZldGNoUmVjb3JkcyA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCByZWNvcmRJZHNTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdyZWNvcmRJZHMnKVxuICAgIGNvbnN0IHJlY29yZElkcyA9IHJlY29yZElkc1N0cmluZyA/IHJlY29yZElkc1N0cmluZy5zcGxpdCgnLCcpIDogW11cbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICByZXR1cm4gYXBpLmJ1bGtBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0UmVjb3JkcyhyZXNwb25zZS5kYXRhLnJlY29yZHMpXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgYWRkTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZSgnZXJyb3JGZXRjaGluZ1JlY29yZHMnLCByZXNvdXJjZUlkKSxcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIH0pXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUmVjb3JkcygpXG4gIH0sIFttYXRjaC5wYXJhbXMucmVzb3VyY2VJZCwgbWF0Y2gucGFyYW1zLmFjdGlvbk5hbWVdKVxuXG4gIGlmICghcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXG4gIH1cblxuICBpZiAoIXJlY29yZHMgJiYgIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIk5vIHJlY29yZHNcIj5cbiAgICAgICAgPHA+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25vUmVjb3Jkc1NlbGVjdGVkJywgcmVzb3VyY2VJZCl9PC9wPlxuICAgICAgPC9FcnJvck1lc3NhZ2VCb3g+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgYWN0aW9uID0gZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyhyZWNvcmRzIHx8IFtdKS5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgY29uc3QgYWN0aW9uRnJvbVJlc291cmNlID0gcmVzb3VyY2UuYWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxuICAgIHJldHVybiBhY3Rpb25Gcm9tUmVzb3VyY2U/LnNob3dJbkRyYXdlciA/ICg8RHJhd2VyUG9ydGFsPjxMb2FkZXIgLz48L0RyYXdlclBvcnRhbD4pIDogPExvYWRlciAvPlxuICB9XG5cbiAgaWYgKCFhY3Rpb24pIHtcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IC8+KVxuICB9XG5cbiAgaWYgKGFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYXdlclBvcnRhbCB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbiBhcyBBY3Rpb25KU09OfVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmRzPXtyZWNvcmRzfVxuICAgICAgICAvPlxuICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgIHshYWN0aW9uPy5zaG93SW5EcmF3ZXIgPyAoXG4gICAgICAgIDxBY3Rpb25IZWFkZXJcbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgIC8+XG4gICAgICApIDogJyd9XG4gICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICBhY3Rpb249e2FjdGlvbiBhcyBBY3Rpb25KU09OfVxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWxrQWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vYXBwL2Vycm9yLWJvdW5kYXJ5J1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IEVycm9yTWVzc2FnZUJveCBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcblxuZGVjbGFyZSBjb25zdCBBZG1pbkJybzoge1xuICBVc2VyQ29tcG9uZW50czogUmVjb3JkPHN0cmluZywgRnVuY3Rpb25Db21wb25lbnQ+O1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBpc0NsaWVudDogYm9vbGVhbjtcbn1cblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcGFnZXM6IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XG59XG5cbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e1xuICBwYWdlTmFtZTogc3RyaW5nO1xufT5cblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQ2xpZW50OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDbGllbnQ6IHRydWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcGFnZXMsIG1hdGNoIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IG1hdGNoXG4gICAgY29uc3QgeyBwYWdlTmFtZSB9ID0gcGFyYW1zXG4gICAgY29uc3QgeyBpc0NsaWVudCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5uYW1lID09PSBwYWdlTmFtZSlcblxuICAgIGlmICghY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJUaGVyZSBpcyBubyBwYWdlIG9mIGdpdmVuIG5hbWVcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFBhZ2U6XG4gICAgICAgICAgICA8Yj57YCBcIiR7cGFnZU5hbWV9XCIgYH08L2I+XG4gICAgICAgICAgICBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IENvbXBvbmVudCA9IEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2N1cnJlbnRQYWdlLmNvbXBvbmVudF1cblxuICAgIGlmICghQ29tcG9uZW50IHx8ICFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIk5vIGNvbXBvbmVudCBzcGVjaWZpZWRcIj5cbiAgICAgICAgICA8cD5Zb3UgaGF2ZSB0byBzcGVjaWZ5IGNvbXBvbmVudCB3aGljaCB3aWxsIHJlbmRlciB0aGlzIFBhZ2U8L3A+XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBwYWdlczogc3RhdGUucGFnZXMsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZSlcbiIsImV4cG9ydCBkZWZhdWx0IChxdWVyeVN0cmluZzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZylcbiAgZm9yIChjb25zdCBrZXkgb2YgcXVlcnkua2V5cygpKSB7XG4gICAgaWYgKGtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJhc2VBY3Rpb24gZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcbmltcG9ydCBGaWx0ZXJEcmF3ZXIgZnJvbSAnLi4vYXBwL2ZpbHRlci1kcmF3ZXInXG5pbXBvcnQgcXVlcnlIYXNGaWx0ZXIgZnJvbSAnLi91dGlscy9xdWVyeS1oYXMtZmlsdGVyJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgTm9SZXNvdXJjZUVycm9yLCBOb0FjdGlvbkVycm9yIH0gZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXG5pbXBvcnQgVmlld0hlbHBlcnMsIHtcbiAgUmVzb3VyY2VBY3Rpb25QYXJhbXMsIFJlY29yZEFjdGlvblBhcmFtcywgQnVsa0FjdGlvblBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG50eXBlIFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBSb3V0ZUNvbXBvbmVudFByb3BzPFN0cmluZ2lmaWVkQnVsazxSZXNvdXJjZUFjdGlvblBhcmFtcz4+XG5cbnR5cGUgU3RyaW5naWZpZWRCdWxrPFQ+ID0gT21pdDxULCAncmVjb3Jkc0lkJz4gJiB7XG4gIHJlY29yZHNJZHM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldEFjdGlvbiA9IChyZXNvdXJjZTogUmVzb3VyY2VKU09OKTogQWN0aW9uSlNPTiB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG4gIGNvbnN0IHJlc291cmNlSWQgPSAnOnJlc291cmNlSWQnXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSAnOmFjdGlvbk5hbWUnXG4gIGNvbnN0IHJlY29yZElkID0gJzpyZWNvcmRJZCdcblxuICBjb25zdCByZWNvcmRBY3Rpb25VcmwgPSBoLnJlY29yZEFjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlQWN0aW9uVXJsID0gaC5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgYnVsa0FjdGlvblVybCA9IGguYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcblxuICBjb25zdCByZXNvdXJjZUFjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxSZXNvdXJjZUFjdGlvblBhcmFtcz4ocmVzb3VyY2VBY3Rpb25VcmwpXG4gIGNvbnN0IHJlY29yZEFjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxSZWNvcmRBY3Rpb25QYXJhbXM+KHJlY29yZEFjdGlvblVybClcbiAgY29uc3QgYnVsa0FjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxQaWNrPEJ1bGtBY3Rpb25QYXJhbXMsICdhY3Rpb25OYW1lJyB8ICdyZXNvdXJjZUlkJz4+KGJ1bGtBY3Rpb25VcmwpXG5cbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2VBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcbiAgICB8fCByZWNvcmRBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcbiAgICB8fCBidWxrQWN0aW9uTWF0Y2g/LnBhcmFtcy5hY3Rpb25OYW1lXG5cbiAgcmV0dXJuIGFjdGlvbiA/IHJlc291cmNlLmFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gYWN0aW9uKSA6IHVuZGVmaW5lZFxufVxuXG5jb25zdCBSZXNvdXJjZUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VzLCBtYXRjaCwgbG9jYXRpb24gfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCB9ID0gbWF0Y2gucGFyYW1zXG5cbiAgY29uc3QgW2ZpbHRlclZpc2libGUsIHNldEZpbGVyVmlzaWJsZV0gPSB1c2VTdGF0ZShxdWVyeUhhc0ZpbHRlcihsb2NhdGlvbi5zZWFyY2gpKVxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXMuZmluZChyID0+IHIuaWQgPT09IHJlc291cmNlSWQpXG4gIGlmICghcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXG4gIH1cblxuICBjb25zdCByZWFsRW5kQWN0aW9uID0gZ2V0QWN0aW9uKHJlc291cmNlKVxuICBpZiAocmVhbEVuZEFjdGlvbiAmJiAhcmVhbEVuZEFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbGlzdEFjdGlvbk5hbWUgPSAnbGlzdCdcbiAgY29uc3QgbGlzdEFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBsaXN0QWN0aW9uTmFtZSlcblxuICBpZiAoIWxpc3RBY3Rpb24pIHtcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2xpc3RBY3Rpb25OYW1lfSAvPilcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUZpbHRlciA9IGxpc3RBY3Rpb24uc2hvd0ZpbHRlclxuICAgID8gKCgpOiB2b2lkID0+IHNldEZpbGVyVmlzaWJsZSghZmlsdGVyVmlzaWJsZSkpXG4gICAgOiB1bmRlZmluZWRcblxuICByZXR1cm4gKFxuICAgIDxCb3ggdmFyaWFudD1cImdyZXlcIiB3aWR0aD17bGlzdEFjdGlvbi5jb250YWluZXJXaWR0aH0gbXg9XCJhdXRvXCI+XG4gICAgICA8QWN0aW9uSGVhZGVyXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgYWN0aW9uPXtsaXN0QWN0aW9ufVxuICAgICAgICB0YWc9e3RhZ31cbiAgICAgICAgdG9nZ2xlRmlsdGVyPXt0b2dnbGVGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPEJhc2VBY3Rpb24gYWN0aW9uPXtsaXN0QWN0aW9ufSByZXNvdXJjZT17cmVzb3VyY2V9IHNldFRhZz17c2V0VGFnfSAvPlxuICAgICAge2xpc3RBY3Rpb24uc2hvd0ZpbHRlciA/IChcbiAgICAgICAgPEZpbHRlckRyYXdlclxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICBpc1Zpc2libGU9e2ZpbHRlclZpc2libGV9XG4gICAgICAgICAgdG9nZ2xlRmlsdGVyPXsoKTogdm9pZCA9PiB7IHNldEZpbGVyVmlzaWJsZSghZmlsdGVyVmlzaWJsZSkgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAnJ31cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICByZXNvdXJjZXM6IHN0YXRlLnJlc291cmNlcyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXNvdXJjZUFjdGlvbilcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWNoaWxkcmVuLXByb3AgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIE92ZXJsYXksIFJlc2V0LCBjc3NDbGFzcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9hcHAvc2lkZWJhci9zaWRlYmFyJ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuL2FwcC90b3AtYmFyJ1xuaW1wb3J0IE5vdGljZSBmcm9tICcuL2FwcC9ub3RpY2UnXG5cbmltcG9ydCB7XG4gIERhc2hib2FyZCwgUmVzb3VyY2VBY3Rpb24sIFJlY29yZEFjdGlvbiwgUGFnZSwgQnVsa0FjdGlvbiwgUmVzb3VyY2UsXG59IGZyb20gJy4vcm91dGVzJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sLCBib2R5LCAjYXBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH1cbiAgfVxuYFxuXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NpZGViYXJWaXNpYmxlLCB0b2dnbGVTaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaWRlYmFyVmlzaWJsZSkgeyB0b2dnbGVTaWRlYmFyKGZhbHNlKSB9XG4gIH0sIFtsb2NhdGlvbl0pXG5cbiAgY29uc3QgcmVzb3VyY2VJZCA9ICc6cmVzb3VyY2VJZCdcbiAgY29uc3QgYWN0aW9uTmFtZSA9ICc6YWN0aW9uTmFtZSdcbiAgY29uc3QgcmVjb3JkSWQgPSAnOnJlY29yZElkJ1xuICBjb25zdCBwYWdlTmFtZSA9ICc6cGFnZU5hbWUnXG5cbiAgY29uc3QgcmVjb3JkQWN0aW9uVXJsID0gaC5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCByZXNvdXJjZUFjdGlvblVybCA9IGgucmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IGJ1bGtBY3Rpb25VcmwgPSBoLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlVXJsID0gaC5yZXNvdXJjZVVybCh7IHJlc291cmNlSWQgfSlcbiAgY29uc3QgcGFnZVVybCA9IGgucGFnZVVybChwYWdlTmFtZSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxSZXNldCAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Qm94IGhlaWdodD1cIjEwMCVcIiBmbGV4PlxuICAgICAgICB7c2lkZWJhclZpc2libGUgPyAoXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHRvZ2dsZVNpZGViYXIoIXNpZGViYXJWaXNpYmxlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPFNpZGViYXIgaXNWaXNpYmxlPXtzaWRlYmFyVmlzaWJsZX0gLz5cbiAgICAgICAgPEJveCBmbGV4IGZsZXhHcm93PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgb3ZlcmZsb3dZPVwiYXV0b1wiIGJnPVwiYmdcIj5cbiAgICAgICAgICA8VG9wQmFyIHRvZ2dsZVNpZGViYXI9eygpOiB2b2lkID0+IHRvZ2dsZVNpZGViYXIoIXNpZGViYXJWaXNpYmxlKX0gLz5cbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IHpJbmRleD1cIjIwMDBcIj5cbiAgICAgICAgICAgIDxOb3RpY2UgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y3NzQ2xhc3MoWydNYWluJ10pfSBmbGV4IGZsZXhHcm93PXsxfT5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtoLmRhc2hib2FyZFVybCgpfSBleGFjdCBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3Jlc291cmNlVXJsfSBjb21wb25lbnQ9e1Jlc291cmNlfSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD17cGFnZVVybH0gZXhhY3QgY29tcG9uZW50PXtQYWdlfSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD17cmVjb3JkQWN0aW9uVXJsfSBjb21wb25lbnQ9e1JlY29yZEFjdGlvbn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3Jlc291cmNlQWN0aW9uVXJsfSBjb21wb25lbnQ9e1Jlc291cmNlQWN0aW9ufSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YnVsa0FjdGlvblVybH0gY29tcG9uZW50PXtCdWxrQWN0aW9ufSAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IHsgQXNzZXRzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0lOSVRJQUxJWkUgPSAnQVNTRVRTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIGluaXRpYWxpemVBc3NldHNSZXNwb25zZSA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBBc3NldHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXNzZXRzID0gKGRhdGE6IEFzc2V0cyk6IGluaXRpYWxpemVBc3NldHNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBBU1NFVFNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBCUkFORElOR19JTklUSUFMSVpFID0gJ0JSQU5ESU5HX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVCcmFuZGluZ1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgQlJBTkRJTkdfSU5JVElBTElaRTtcbiAgZGF0YTogQnJhbmRpbmdPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUJyYW5kaW5nID0gKGRhdGE6IEJyYW5kaW5nT3B0aW9ucyk6IEluaXRpYWxpemVCcmFuZGluZ1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IEJSQU5ESU5HX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgRGFzaGJvYXJkSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5leHBvcnQgY29uc3QgREFTSEJPQVJEX0lOSVRJQUxJWkUgPSAnREFTSEJPQVJEX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVEYXNoYm9hcmRSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIERBU0hCT0FSRF9JTklUSUFMSVpFO1xuICBkYXRhOiBEYXNoYm9hcmRJblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZURhc2hib2FyZCA9IChkYXRhOiBEYXNoYm9hcmRJblN0YXRlKTogSW5pdGlhbGl6ZURhc2hib2FyZFJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IERBU0hCT0FSRF9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZS9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfSU5JVElBTElaRSA9ICdMT0NBTEVfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUxvY2FsZVJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgTE9DQUxFX0lOSVRJQUxJWkU7XG4gIGRhdGE6IExvY2FsZTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMb2NhbGUgPSAoZGF0YTogTG9jYWxlKTogSW5pdGlhbGl6ZUxvY2FsZVJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IExPQ0FMRV9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IFBBR0VTX0lOSVRJQUxJWkUgPSAnUEFHRVNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVBhZ2VzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBQQUdFU19JTklUSUFMSVpFO1xuICBkYXRhOiBBcnJheTxBZG1pblBhZ2U+O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVBhZ2VzID0gKGRhdGE6IEFycmF5PEFkbWluUGFnZT4pOiBJbml0aWFsaXplUGFnZXNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBQQUdFU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBQQVRIU19JTklUSUFMSVpFID0gJ1BBVEhTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVQYXRoc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgUEFUSFNfSU5JVElBTElaRTtcbiAgZGF0YTogUGF0aHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUGF0aHMgPSAoZGF0YTogUGF0aHMpOiBJbml0aWFsaXplUGF0aHNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBQQVRIU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBSRVNPVVJDRVNfSU5JVElBTElaRSA9ICdSRVNPVVJDRVNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVJlc291cmNlc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgUkVTT1VSQ0VTX0lOSVRJQUxJWkU7XG4gIGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUmVzb3VyY2VzID0gKGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj4pOiBJbml0aWFsaXplUmVzb3VyY2VzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogUkVTT1VSQ0VTX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgVmVyc2lvblByb3BzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgVkVSU0lPTlNfSU5JVElBTElaRSA9ICdWRVJTSU9OU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplVmVyc2lvbnNSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFZFUlNJT05TX0lOSVRJQUxJWkU7XG4gIGRhdGE6IFZlcnNpb25Qcm9wcztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVWZXJzaW9ucyA9IChkYXRhOiBWZXJzaW9uUHJvcHMpOiBJbml0aWFsaXplVmVyc2lvbnNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBWRVJTSU9OU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtcbiAgVkVSU0lPTlNfSU5JVElBTElaRSxcbiAgU0VTU0lPTl9JTklUSUFMSVpFLFxuICBEQVNIQk9BUkRfSU5JVElBTElaRSxcbiAgUEFUSFNfSU5JVElBTElaRSxcbiAgQVNTRVRTX0lOSVRJQUxJWkUsXG4gIEJSQU5ESU5HX0lOSVRJQUxJWkUsXG4gIExPQ0FMRV9JTklUSUFMSVpFLFxuICBQQUdFU19JTklUSUFMSVpFLFxuICBSRVNPVVJDRVNfSU5JVElBTElaRSxcbiAgU0VUX05PVElDRV9QUk9HUkVTUyxcbiAgRFJPUF9OT1RJQ0UsXG4gIEFERF9OT1RJQ0UgfSBmcm9tICcuL2FjdGlvbnMnXG5cbmltcG9ydCB7IEFzc2V0cywgQnJhbmRpbmdPcHRpb25zLCBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgeyBQYWdlSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IERFRkFVTFRfUEFUSFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uL2xvY2FsZS9jb25maWcnXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlIH0gZnJvbSAnLi4vaG9jL3dpdGgtbm90aWNlJ1xuXG5leHBvcnQgdHlwZSBEYXNoYm9hcmRJblN0YXRlID0ge1xuICBjb21wb25lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGljZU1lc3NhZ2VJblN0YXRlID0gTm90aWNlTWVzc2FnZSAmIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBOb3RpY2VNZXNzYWdlWyd0eXBlJ107XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFBhdGhzID0ge1xuICByb290UGF0aDogc3RyaW5nO1xuICBsb2dvdXRQYXRoOiBzdHJpbmc7XG4gIGxvZ2luUGF0aDogc3RyaW5nO1xuICBhc3NldHNDRE4/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlc291cmNlc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBBcnJheTxSZXNvdXJjZUpTT04+ID0gW10sXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBBcnJheTxSZXNvdXJjZUpTT04+O1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBSRVNPVVJDRVNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcGFnZXNSZWR1Y2VyID0gKFxuICBzdGF0ZTogQXJyYXk8UGFnZUpTT04+ID0gW10sXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBBcnJheTxQYWdlSlNPTj47XG4gIH0sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFBBR0VTX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGxvY2FsZXNSZWR1Y2VyID0gKFxuICBzdGF0ZTogTG9jYWxlID0geyBsYW5ndWFnZTogJ2VuJywgdHJhbnNsYXRpb25zOiB7fSB9IGFzIExvY2FsZSxcbiAgYWN0aW9uOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGRhdGE6IExvY2FsZTtcbiAgfSxcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgTE9DQUxFX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGJyYW5kaW5nUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBCcmFuZGluZ09wdGlvbnM7XG59KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBCUkFORElOR19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBhc3NldHNSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IEFzc2V0cztcbn0pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIEFTU0VUU19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBwYXRoc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBQYXRocyA9IERFRkFVTFRfUEFUSFMsXG4gIGFjdGlvbjoge3R5cGU6IHN0cmluZzsgZGF0YTogUGF0aHN9LFxuKTogUGF0aHMgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgUEFUSFNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgZGFzaGJvYXJkUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBEYXNoYm9hcmRJblN0YXRlO1xufSk6IERhc2hib2FyZEluU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgREFTSEJPQVJEX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHNlc3Npb25SZWR1Y2VyID0gKFxuICBzdGF0ZTogQ3VycmVudEFkbWluIHwgbnVsbCA9IG51bGwsXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsO1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBTRVNTSU9OX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHZlcnNpb25zUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBWZXJzaW9uUHJvcHM7XG59KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBWRVJTSU9OU19JTklUSUFMSVpFOlxuICAgIHJldHVybiB7XG4gICAgICBhZG1pbjogYWN0aW9uLmRhdGEuYWRtaW4sXG4gICAgICBhcHA6IGFjdGlvbi5kYXRhLmFwcCxcbiAgICB9XG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbnR5cGUgTm90aWNlQXJncyA9IHsgbm90aWNlSWQ6IHN0cmluZzsgcHJvZ3Jlc3M6IG51bWJlciB9XG5cbmNvbnN0IG5vdGljZXNSZWR1Y2VyID0gKHN0YXRlOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT4gPSBbXSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogTm90aWNlTWVzc2FnZUluU3RhdGUgfCBOb3RpY2VBcmdzO1xufSk6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPiA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBBRERfTk9USUNFOiB7XG4gICAgY29uc3Qgbm90aWNlcyA9IFthY3Rpb24uZGF0YSBhcyBOb3RpY2VNZXNzYWdlSW5TdGF0ZV1cbiAgICByZXR1cm4gbm90aWNlc1xuICB9XG4gIGNhc2UgRFJPUF9OT1RJQ0U6IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKG5vdGljZSA9PiBub3RpY2UuaWQgIT09IChhY3Rpb24uZGF0YSBhcyBOb3RpY2VBcmdzKS5ub3RpY2VJZClcbiAgfVxuICBjYXNlIFNFVF9OT1RJQ0VfUFJPR1JFU1M6IHtcbiAgICByZXR1cm4gc3RhdGUubWFwKG5vdGljZSA9PiAoe1xuICAgICAgLi4ubm90aWNlLFxuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5pZCA9PT0gKGFjdGlvbi5kYXRhIGFzIE5vdGljZUFyZ3MpLm5vdGljZUlkXG4gICAgICAgID8gYWN0aW9uLmRhdGEucHJvZ3Jlc3NcbiAgICAgICAgOiBub3RpY2UucHJvZ3Jlc3MsXG4gICAgfSkpXG4gIH1cbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmVkdXhTdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xuICBicmFuZGluZzogQnJhbmRpbmdPcHRpb25zO1xuICBhc3NldHM6IEFzc2V0cztcbiAgcGF0aHM6IFBhdGhzO1xuICBzZXNzaW9uOiBDdXJyZW50QWRtaW4gfCBudWxsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZEluU3RhdGU7XG4gIG5vdGljZXM6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPjtcbiAgdmVyc2lvbnM6IFZlcnNpb25Qcm9wcztcbiAgcGFnZXM6IEFycmF5PFBhZ2VKU09OPjtcbiAgbG9jYWxlOiBMb2NhbGU7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8UmVkdXhTdGF0ZT4oe1xuICByZXNvdXJjZXM6IHJlc291cmNlc1JlZHVjZXIsXG4gIGJyYW5kaW5nOiBicmFuZGluZ1JlZHVjZXIsXG4gIGFzc2V0czogYXNzZXRzUmVkdWNlcixcbiAgcGF0aHM6IHBhdGhzUmVkdWNlcixcbiAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXG4gIGRhc2hib2FyZDogZGFzaGJvYXJkUmVkdWNlcixcbiAgbm90aWNlczogbm90aWNlc1JlZHVjZXIsXG4gIHZlcnNpb25zOiB2ZXJzaW9uc1JlZHVjZXIsXG4gIHBhZ2VzOiBwYWdlc1JlZHVjZXIsXG4gIGxvY2FsZTogbG9jYWxlc1JlZHVjZXIsXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFN0YXRlID0ge30pID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwbGljYXRpb24nXG5pbXBvcnQgQmFzZVByb3BlcnR5Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0ICogYXMgQXBwQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0ICogYXMgSG9va3MgZnJvbSAnLi9ob29rcydcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHdpdGhOb3RpY2UgZnJvbSAnLi9ob2Mvd2l0aC1ub3RpY2UnXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vdXRpbHMvZmxhdCdcblxuY29uc3QgZW52ID0ge1xuICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50Jyxcbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh3aW5kb3cuUkVEVVhfU1RBVEUpXG5jb25zdCB0aGVtZSA9IHdpbmRvdy5USEVNRVxuY29uc3QgeyBsb2NhbGUgfSA9IHdpbmRvdy5SRURVWF9TVEFURVxuXG5pMThuXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcbiAgLmluaXQoe1xuICAgIHJlc291cmNlczoge1xuICAgICAgW2xvY2FsZS5sYW5ndWFnZV06IHtcbiAgICAgICAgdHJhbnNsYXRpb246IGxvY2FsZS50cmFuc2xhdGlvbnMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG5nOiBsb2NhbGUubGFuZ3VhZ2UsXG4gICAgaW50ZXJwb2xhdGlvbjogeyBlc2NhcGVWYWx1ZTogZmFsc2UgfSxcbiAgfSlcblxuY29uc3QgQXBwbGljYXRpb24gPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9Qcm92aWRlcj5cbilcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG53aW5kb3cucmVnZW5lcmF0b3JSdW50aW1lID0gcmVnZW5lcmF0b3JSdW50aW1lXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgd2l0aE5vdGljZSxcbiAgQXBwbGljYXRpb24sXG4gIFZpZXdIZWxwZXJzLFxuICBVc2VyQ29tcG9uZW50czoge30sXG4gIEFwaUNsaWVudCxcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LFxuICBlbnYsXG4gIC4uLkFwcENvbXBvbmVudHMsXG4gIC4uLkhvb2tzLFxuICBmbGF0LFxuICAvLyBUT0RPOiByZW1vdmUgdGhpcyBmcm9tIHRoZSBuZXh0IHJlbGVhc2VcbiAgZmxhdHRlbjogZmxhdC5mbGF0dGVuLFxuICB1bmZsYXR0ZW46IGZsYXQudW5mbGF0dGVuLFxufVxuIl0sIm5hbWVzIjpbInVuZGVmaW5lZCIsInJlcXVpcmUkJDAiLCJnbG9iYWxBbnkiLCJ3aW5kb3ciLCJlcnJvciIsIm1lc3NhZ2UiLCJydW5EYXRlIiwiRGF0ZSIsIlZpZXdIZWxwZXJzIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwib3B0cyIsImdldFBhdGhzIiwicm9vdFBhdGgiLCJSRURVWF9TVEFURSIsInBhdGhzIiwidXJsQnVpbGRlciIsInNlYXJjaCIsInNlcGFyYXRvciIsInJlcGxhY2UiLCJSZWdFeHAiLCJzdGFydHNXaXRoIiwicGFydHMiLCJqb2luIiwibG9naW5VcmwiLCJsb2dpblBhdGgiLCJsb2dvdXRVcmwiLCJsb2dvdXRQYXRoIiwiZGFzaGJvYXJkVXJsIiwicGFnZVVybCIsInBhZ2VOYW1lIiwiZWRpdFVybCIsInJlc291cmNlSWQiLCJyZWNvcmRJZCIsInJlY29yZEFjdGlvblVybCIsImFjdGlvbk5hbWUiLCJzaG93VXJsIiwiZGVsZXRlVXJsIiwibmV3VXJsIiwicmVzb3VyY2VBY3Rpb25VcmwiLCJsaXN0VXJsIiwiYnVsa0RlbGV0ZVVybCIsInJlY29yZElkcyIsImJ1bGtBY3Rpb25VcmwiLCJyZXNvdXJjZVVybCIsInVybCIsImxlbmd0aCIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwidG9TdHJpbmciLCJhc3NldFBhdGgiLCJhc3NldCIsImFzc2V0c0NETiIsIlVSTCIsImhyZWYiLCJnZXRUaW1lIiwiYWxsb3dPdmVycmlkZSIsIk9yaWdpbmFsQ29tcG9uZW50IiwibmFtZSIsIldyYXBwZXJDb21wb25lbnQiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkFkbWluQnJvIiwiVXNlckNvbXBvbmVudHMiLCJSZWFjdCIsIlN0eWxlZExvZ28iLCJzdHlsZWQiLCJMaW5rIiwidGhlbWVHZXQiLCJoIiwiU2lkZWJhckJyYW5kaW5nIiwiYnJhbmRpbmciLCJsb2dvIiwiY29tcGFueU5hbWUiLCJjc3NDbGFzcyIsImJhc2VQcm9wZXJ0eU9mIiwiZ2xvYmFsIiwiZnJlZUdsb2JhbCIsIlN5bWJvbCIsInJvb3QiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsImlzT2JqZWN0TGlrZSIsImJhc2VHZXRUYWciLCJpc0FycmF5IiwiYXJyYXlNYXAiLCJpc1N5bWJvbCIsImJhc2VUb1N0cmluZyIsInJzQ29tYm9NYXJrc1JhbmdlIiwicmVDb21ib0hhbGZNYXJrc1JhbmdlIiwicnNDb21ib1N5bWJvbHNSYW5nZSIsInJzQ29tYm9SYW5nZSIsInJzQ29tYm8iLCJkZWJ1cnJMZXR0ZXIiLCJyc0FzdHJhbFJhbmdlIiwicnNWYXJSYW5nZSIsInJzQXBvcyIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicnNaV0oiLCJyZU9wdE1vZCIsInJzT3B0VmFyIiwicnNPcHRKb2luIiwicnNTZXEiLCJoYXNVbmljb2RlV29yZCIsInVuaWNvZGVXb3JkcyIsImFzY2lpV29yZHMiLCJhcnJheVJlZHVjZSIsIndvcmRzIiwiZGVidXJyIiwiYmFzZVNsaWNlIiwiaGFzVW5pY29kZSIsInVuaWNvZGVUb0FycmF5IiwiYXNjaWlUb0FycmF5Iiwic3RyaW5nVG9BcnJheSIsImNhc3RTbGljZSIsImNyZWF0ZUNhc2VGaXJzdCIsImNyZWF0ZUNvbXBvdW5kZXIiLCJ1cHBlckZpcnN0IiwiZm9ybWF0TmFtZSIsInNwbGl0IiwidHJhbnNsYXRlIiwiaTE4biIsImtleSIsInJlYWxPcHRpb25zIiwiZm9ybWF0dGVkTmFtZSIsImtleXMiLCJleGlzdHMiLCJ0IiwiZGVmYXVsdFZhbHVlIiwic3RhcnRDYXNlIiwiY3JlYXRlRnVuY3Rpb25zIiwidHJhbnNsYXRlQWN0aW9uIiwidHJhbnNsYXRlQnV0dG9uIiwiYnV0dG9uTGFiZWwiLCJ0cmFuc2xhdGVMYWJlbCIsImxhYmVsIiwidHJhbnNsYXRlUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJ0cmFuc2xhdGVNZXNzYWdlIiwibWVzc2FnZU5hbWUiLCJ0YSIsInRiIiwidGwiLCJ0cCIsInRtIiwidXNlVHJhbnNsYXRpb24iLCJyZXN0Iiwib3JpZ2luYWxVc2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0ZUZ1bmN0aW9ucyIsIlNpZGViYXJQYWdlcyIsInBhZ2VzIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaXNBY3RpdmUiLCJwYWdlIiwicGF0aG5hbWUiLCJtYXRjaCIsImVsZW1lbnRzIiwibWFwIiwiaWQiLCJpc1NlbGVjdGVkIiwiaWNvbiIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJOYXZpZ2F0aW9uIiwiU2lkZWJhckZvb3RlciIsIkJveCIsIlNvZnR3YXJlQnJvdGhlcnMiLCJpc09uU2VydmVyIiwiY2hlY2tSZXNwb25zZSIsInJlc3BvbnNlIiwib3JpZ2luIiwicmVxdWVzdCIsInJlc3BvbnNlVVJMIiwiYWxlcnQiLCJhc3NpZ24iLCJBcGlDbGllbnQiLCJiYXNlVVJMIiwiZ2V0QmFzZVVybCIsImNsaWVudCIsImF4aW9zIiwiY3JlYXRlIiwic2VhcmNoUmVjb3JkcyIsInJlc291cmNlQWN0aW9uIiwiZGF0YSIsInJlY29yZHMiLCJheGlvc1BhcmFtcyIsInEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJyZWNvcmRBY3Rpb24iLCJidWxrQWN0aW9uIiwicGFyYW1zIiwiZ2V0RGFzaGJvYXJkIiwiZ2V0IiwiZ2V0UGFnZSIsIkZPUk1fVkFMVUVfTlVMTCIsIkZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUIiwiRk9STV9WQUxVRV9FTVBUWV9BUlJBWSIsImlzT2JqZWN0T3JBcnJheSIsInZhbHVlIiwiRmlsZSIsInBhcmFtc1RvRm9ybURhdGEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJBcnJheSIsIkFERF9OT1RJQ0UiLCJhZGROb3RpY2UiLCJ0eXBlIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsInByb2dyZXNzIiwidXNlTm90aWNlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm5vdGljZSIsIm1lcmdlUmVjb3JkUmVzcG9uc2UiLCJyZWNvcmQiLCJlcnJvcnMiLCJwb3B1bGF0ZWQiLCJERUxJTUlURVIiLCJwcm9wZXJ0eUtleVJlZ2V4IiwicHJvcGVydHlQYXRoIiwiZGVsaW1pdGVyIiwiZXNjYXBlZERlbGltaXRlciIsImVzY2FwZWREZWxpbWl0ZXJPckluZGV4IiwicGF0aCIsImluY2x1ZGVBbGxTaWJsaW5ncyIsInNlbGVjdFBhcmFtcyIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eUFycmF5Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJnbG9iYWxNZW1vIiwicmVnZXgiLCJmaWx0ZXJlZCIsIm1lbW8iLCJmaWx0ZXJPdXRQYXJhbXMiLCJnbG9iYWxGaWx0ZXJlZCIsInBhdGhUb1BhcnRzIiwiYWxsUGFydHMiLCJza2lwQXJyYXlJbmRleGVzIiwicGFydCIsImlzTmFOIiwiaXNPYmplY3QiLCJwYXJhbXNDb3B5IiwiZmxhdHRlbmVkIiwiZmxhdHRlbiIsInNsaWNlIiwiaW5jbHVkZXMiLCJURU1QX0hPTERJTkdfS0VZIiwidW5mbGF0dGVuIiwiZmluZCIsInNlbGVjdGVkUGFyYW1zIiwibmVzdGVkUHJvcGVydGllcyIsImluZGV4IiwibmV3S2V5IiwibWVyZ2UiLCJtZXJnZVBhcmFtcyIsImZsYXR0ZW5QYXJhbXMiLCJyZXZlcnNlIiwibWVyZ2VQYXJhbSIsInJlbW92ZVBhdGgiLCJwYXJlbnRQYXRocyIsInBhcmVudFBhdGgiLCJwYXJlbnRJbmRleCIsInBhcmVudCIsInByZXZpb3VzUGF0aHMiLCJwcmV2aW91c1BhdGhJbmRleCIsInNwbGljZSIsImZsYXQiLCJ1cGRhdGVSZWNvcmQiLCJwcm9wZXJ0eSIsInNlbGVjdGVkUmVjb3JkIiwicHJldmlvdXNSZWNvcmQiLCJwb3B1bGF0ZWRNb2RpZmllZCIsInBvcHVsYXRlZENvcHkiLCJpc0VudGlyZVJlY29yZEdpdmVuIiwicHJvcGVydHlPclJlY29yZCIsImZpbHRlclJlY29yZFBhcmFtcyIsImluY2x1ZGVQYXJhbXMiLCJpc1Byb3BlcnR5UGVybWl0dGVkIiwic29tZSIsImFwaSIsInVzZVJlY29yZCIsImluaXRpYWxSZWNvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiaXNTeW5jZWQiLCJzZXRJc1N5bmNlZCIsInNldFByb2dyZXNzIiwiZmlsdGVyZWRSZWNvcmQiLCJzZXRSZWNvcmQiLCJzZXRGaWx0ZXJlZFJlY29yZCIsInVzZUNhbGxiYWNrIiwibmV3UmVjb3JkIiwiRnVuY3Rpb24iLCJvbk5vdGljZSIsImhhbmRsZUNoYW5nZSIsImluY29taW5nUmVjb3JkIiwiY29uc29sZSIsIndhcm4iLCJoYW5kbGVTdWJtaXQiLCJjdXN0b21QYXJhbXMiLCJzdWJtaXRPcHRpb25zIiwibWVyZ2VkUGFyYW1zIiwib25VcGxvYWRQcm9ncmVzcyIsImUiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwiaGVhZGVycyIsInByb21pc2UiLCJ0aGVuIiwidXBkYXRlT25TYXZlIiwicHJldiIsImNhdGNoIiwic3VibWl0IiwiYWN0aW9uSGFzQ29tcG9uZW50IiwiYWN0aW9uIiwiY29tcG9uZW50IiwiYWN0aW9uSHJlZiIsImhhc0hhbmRsZXIiLCJocmVmTWFwIiwicmVzb3VyY2UiLCJidWxrIiwiYWN0aW9uVHlwZSIsIkVycm9yIiwiY2FsbEFjdGlvbkFwaSIsImJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIiLCJhY3Rpb25SZXNwb25zZUhhbmRsZXIiLCJjYWxsQXBpIiwiYnVpbGRBY3Rpb25UZXN0SWQiLCJidWlsZEFjdGlvbkNsaWNrSGFuZGxlciIsImhhbmRsZUFjdGlvbkNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiZ3VhcmQiLCJjb25maXJtIiwiUkVGUkVTSF9LRVkiLCJhcHBlbmRGb3JjZVJlZnJlc2giLCJzZWFyY2hQYXJhbXNJZHgiLCJsYXN0SW5kZXhPZiIsInVybFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsIm9sZFBhcmFtcyIsIm5ld1BhcmFtcyIsImhhc0ZvcmNlUmVmcmVzaCIsInJlbW92ZUZvcmNlUmVmcmVzaCIsImRlbGV0ZSIsInVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciIsIm9uQWN0aW9uQ2FsbCIsInJlZGlyZWN0VXJsIiwiYXBwZW5kZWQiLCJ1c2VBY3Rpb24iLCJoYW5kbGVDbGljayIsIlNFU1NJT05fSU5JVElBTElaRSIsInNldEN1cnJlbnRBZG1pbiIsInVzZUN1cnJlbnRBZG1pbiIsImN1cnJlbnRBZG1pbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZXNzaW9uIiwiYWRtaW4iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJpbml0aWFsVmFsdWUiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2ciLCJzZXRWYWx1ZSIsInZhbHVlVG9TdG9yZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZWdFeHAiLCJ1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwib3BlbkVsZW1lbnRzIiwic2V0T3BlbkVsZW1lbnRzIiwiZW5yaWNoUmVzb3VyY2UiLCJ1c2VNZW1vIiwicmVzIiwibmF2aWdhdGlvbiIsImlzT3BlbiIsInZhbHVlcyIsInVzZVJlY29yZHMiLCJzZXRSZWNvcmRzIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJzZXRQYWdlIiwic2V0VG90YWwiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJmZXRjaERhdGEiLCJsaXN0QWN0aW9uUmVzcG9uc2UiLCJtZXRhIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0ZWRSZWNvcmRzIiwic2VsZWN0ZWRSZWNvcmRzIiwic2V0U2VsZWN0ZWRSZWNvcmRzIiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIm5ld1NlbGVjdGVkUmVjb3JkcyIsImhhbmRsZVNlbGVjdEFsbCIsIm1pc3NpbmciLCJidWxrQWN0aW9ucyIsInVzZVJlc291cmNlIiwiZm91bmRSZXNvdXJjZSIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbCIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb24iLCJTdHlsZWRTaWRlYmFyIiwiZGVmYXVsdFByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlclJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJiZyIsIlNpZGViYXIiLCJpc1Zpc2libGUiLCJzb2Z0d2FyZUJyb3RoZXJzIiwiTG9nZ2VkSW4iLCJkcm9wQWN0aW9ucyIsIkN1cnJlbnRVc2VyTmF2IiwiZW1haWwiLCJ0aXRsZSIsImF2YXRhclVybCIsIk92ZXJyaWRhYmxlTG9nZ2VkSW4iLCJWZXJzaW9uSXRlbSIsIlRleHQiLCJjb2xvciIsIlZlcnNpb24iLCJ2ZXJzaW9ucyIsImFwcCIsInZlcnNpb24iLCJOYXZCYXIiLCJ0aGVtZSIsInNpemVzIiwibmF2YmFySGVpZ2h0IiwiY29sb3JzIiwid2hpdGUiLCJjbGFzc05hbWUiLCJUb3BCYXIiLCJ0b2dnbGVTaWRlYmFyIiwiY3Vyc29yIiwiSWNvbiIsIkRST1BfTk9USUNFIiwiZHJvcE5vdGljZSIsIm5vdGljZUlkIiwiU0VUX05PVElDRV9QUk9HUkVTUyIsInNldE5vdGljZVByb2dyZXNzIiwiVElNRV9UT19ESVNBUFBFQVIiLCJOb3RpY2VFbGVtZW50IiwidGltZXIiLCJjb21wb25lbnREaWRNb3VudCIsImRyb3AiLCJub3RpZnlQcm9ncmVzcyIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiTWVzc2FnZUJveCIsIm1pbldpZHRoIiwiTm90aWNlQm94Iiwibm90aWNlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkNvbm5lY3RlZE5vdGljZUJveCIsImNvbm5lY3QiLCJwYWdlSGVhZGVySGVpZ2h0IiwicGFnZUhlYWRlclBhZGRpbmdZIiwicGFnZUhlYWRlclBhZGRpbmdYIiwiRGFzaGJvYXJkSGVhZGVyIiwiSWxsdXN0cmF0aW9uIiwiSDIiLCJib3hlcyIsInZhcmlhbnQiLCJzdWJ0aXRsZSIsIkNhcmQiLCJmbGV4IiwiZ3JleTEwMCIsInByaW1hcnkxMDAiLCJzaGFkb3dzIiwiY2FyZEhvdmVyIiwiYm94U2hhZG93IiwiRGFzaGJvYXJkIiwiYm94IiwiSDUiLCJINCIsIkJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsIkVycm9yQm91bmRhcnkiLCJjb21wb25lbnREaWRDYXRjaCIsImNoaWxkcmVuIiwiaXNDbGllbnQiLCJkYXNoYm9hcmQiLCJEZWZhdWx0RGFzaGJvYXJkIiwiQWRkTmV3SXRlbUJ1dHRvbiIsIlByb3BlcnR5TGFiZWwiLCJsYWJlbFByb3BzIiwiaGlkZUxhYmVsIiwiTGFiZWwiLCJpc1JlcXVpcmVkIiwiY29udmVydFRvU3ViUHJvcGVydHkiLCJhcnJheVByb3BlcnR5IiwicmVtb3ZlU3ViUHJvcGVydHkiLCJzdWJQcm9wZXJ0eVBhdGgiLCJwb3B1bGF0ZWRLZXlNYXAiLCJwcm9wZXJ0eUtleSIsIm5ld1BvcHVsYXRlZEtleU1hcCIsIm5ld1BvcHVsYXRlZCIsIm5ld1Byb3BlcnR5S2V5Iiwib2xkUHJvcGVydHlLZXkiLCJJdGVtUmVuZGVyZXIiLCJJdGVtQ29tcG9uZW50Iiwib25EZWxldGUiLCJJbnB1dHNJblNlY3Rpb24iLCJvbkNoYW5nZSIsIml0ZW1zIiwiYWRkTmV3IiwibmV3SXRlbXMiLCJzdWJQcm9wZXJ0aWVzIiwicmVtb3ZlSXRlbSIsInN1YlByb3BlcnR5IiwiU2VjdGlvbiIsImkiLCJpdGVtUHJvcGVydHkiLCJFZGl0IiwidGVzdElkIiwiRm9ybUdyb3VwIiwiRm9ybU1lc3NhZ2UiLCJMaXN0IiwiU2hvdyIsIlB1cmVDb21wb25lbnQiLCJWYWx1ZUdyb3VwIiwiaXNJZCIsInN1YlByb3BlcnR5V2l0aFBhdGgiLCJyZW5kZXJJdGVtcyIsInNob3dBY3Rpb24iLCJyZWNvcmRBY3Rpb25zIiwiYSIsInRpdGxlUHJvcGVydHkiLCJEZWZhdWx0UHJvcGVydHlWYWx1ZSIsInJhd1ZhbHVlIiwiYXZhaWxhYmxlVmFsdWVzIiwib3B0aW9uIiwib3B0IiwiQmFkZ2UiLCJyZWNvcmRQcm9wZXJ0eUlzRXF1YWwiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2VmFsdWUiLCJuZXh0VmFsdWUiLCJwcmV2RXJyb3IiLCJuZXh0RXJyb3IiLCJCb29sZWFuIiwiU2VsZWN0RWRpdCIsInByb3BWYWx1ZSIsInN0eWxlcyIsInNlbGVjdFN0eWxlcyIsImF2IiwiU2VsZWN0IiwicyIsImlzRGlzYWJsZWQiLCJUZXh0RWRpdCIsIklucHV0IiwidGFyZ2V0Iiwia2V5Q29kZSIsIndpdGhUaGVtZSIsIkZpbHRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInJlbmRlcklucHV0IiwiZmlsdGVyS2V5IiwiZmlsdGVyU3R5bGVzIiwicGFyc2VWYWx1ZSIsIkNoZWNrQm94IiwiaW5saW5lIiwiQm9vbGVhblByb3BlcnR5VmFsdWUiLCJiYXNlIiwibWFwVmFsdWUiLCJ0cmFuc2xhdGlvbiIsIm8iLCJEYXRlUGlja2VyIiwicHJvcGVydHlUeXBlIiwiZGF0ZSIsImZvcm1hdERhdGVQcm9wZXJ0eSIsIlBBUkFNX1NFUEFSQVRPUiIsIm5vcm1hbGl6ZUtleXMiLCJmaWx0ZXJzIiwibm9ybWFsaXplZCIsInBvcHVsYXRlIiwicmVmZXJlbmNlUmVzb3VyY2UiLCJkZWNvcmF0ZSIsImdldFByb3BlcnR5QnlLZXkiLCJyZWZlcmVuY2UiLCJmaW5kT25lIiwiY2FsbGJhY2siLCJpbml0aWFsIiwiQmFja2VuZEZpbHRlciIsImZyb21LZXkiLCJ0b0tleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJwcm9wZXJ0eVByb3BzIiwicXVpbGwiLCJjdXN0b21Qcm9wcyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMiLCJSaWNoVGV4dCIsImNvbnRlbnQiLCJjb250ZW50UmVmIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsImlubmVySFRNTCIsIm9yaWdpbmFsIiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwib3B0aW9uUmVjb3JkcyIsIm9wdGlvblJlY29yZCIsInNlbGVjdGVkSWQiLCJsb2FkZWRSZWNvcmQiLCJzZXRMb2FkZWRSZWNvcmQiLCJsb2FkaW5nUmVjb3JkIiwic2V0TG9hZGluZ1JlY29yZCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImMiLCJmaW5hbGx5IiwiU3R5bGVkTGluayIsIkJ1dHRvbkNTUyIsInNwYWNlIiwieHMiLCJSZWZlcmVuY2VWYWx1ZSIsInJlZklkIiwiciIsImxpbmUiLCJpc0lucHV0Iiwic2V0SXNJbnB1dCIsIklucHV0R3JvdXAiLCJ0eXBlcyIsInRleHRhcmVhIiwiYm9vbGVhbiIsImRhdGV0aW1lIiwicGFzc3dvcmQiLCJyaWNodGV4dCIsInN0cmluZyIsImRlZmF1bHRUeXBlIiwibnVtYmVyIiwiZmxvYXQiLCJtaXhlZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsImJhc2VQcm9wZXJ0eSIsIndoZXJlIiwiY29tcG9uZW50cyIsIkFycmF5VHlwZSIsIk1peGVkIiwiTWl4ZWRUeXBlIiwiY2FtZWxpemVQcm9wZXJ0eVR5cGUiLCJlZGl0Iiwic2hvdyIsImxpc3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCIsIkRlZmF1bHRUeXBlIiwiRGF0ZVRpbWUiLCJSZWZlcmVuY2UiLCJUZXh0QXJlYSIsIlBhc3N3b3JkIiwiQnJlYWRjcnVtYkxpbmsiLCJncmV5NDAiLCJmb250IiwibGluZUhlaWdodHMiLCJkZWZhdWx0IiwiZm9udFNpemVzIiwiQnJlYWRjcnVtYnMiLCJhY3Rpb25zIiwiYWN0aW9uc1RvQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic291cmNlIiwiYnV0dG9uc01hcCIsImJ1dHRvbiIsImJ0biIsInJvdW5kZWQiLCJSb3V0ZXJMaW5rIiwiU3R5bGVkQmFja0J1dHRvbiIsInNob3dJbkRyYXdlciIsImNzc0Nsb3NlSWNvbiIsIkFjdGlvbkhlYWRlciIsInRvZ2dsZUZpbHRlciIsImFjdGlvblBlcmZvcm1lZCIsInRhZyIsIm9taXRBY3Rpb25zIiwiaGlkZUFjdGlvbkhlYWRlciIsInNvdXJjZUFjdGlvbiIsImFjdGlvbkJ1dHRvbnMiLCJyYSIsInJlc291cmNlQWN0aW9ucyIsImN1c3RvbVJlc291cmNlQnV0dG9ucyIsImlzTGlzdCIsImxpc3RBY3Rpb24iLCJjc3NJc1Jvb3RGbGV4IiwiY3NzSGVhZGVyTVQiLCJjc3NBY3Rpb25zTUIiLCJDc3NIQ29tcG9uZW50IiwiSDMiLCJCdXR0b25Hcm91cCIsIkxheW91dEVsZW1lbnRSZW5kZXJlciIsImxheW91dEVsZW1lbnQiLCJsYXlvdXRQcm9wcyIsInByb3BlcnR5TmFtZXMiLCJsYXlvdXRFbGVtZW50cyIsImlubmVyTGF5b3V0RWxlbWVudHMiLCJvdGhlciIsIkRlc2lnblN5c3RlbSIsIkRlc2lnblN5c3RlbS5NZXNzYWdlQm94IiwiRGVzaWduU3lzdGVtLkJhZGdlIiwiRGVzaWduU3lzdGVtLkJveCIsIlByb3BlcnR5VHlwZSIsImlubmVyTGF5b3V0RWxlbWVudCIsIk5ldyIsIkRyYXdlckNvbnRlbnQiLCJsYXlvdXQiLCJlZGl0UHJvcGVydGllcyIsIkRyYXdlckZvb3RlciIsInNob3dQcm9wZXJ0aWVzIiwiaXNUaXRsZSIsIlJlY29yZEluTGlzdCIsInJlY29yZEZyb21Qcm9wcyIsImlzTG9hZGluZyIsIm9uU2VsZWN0IiwiaGFuZGxlQWN0aW9uQ2FsbGJhY2siLCJhY3Rpb25SZXNwb25zZSIsInRhcmdldFRhZ05hbWUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhY3Rpb25QYXJhbXMiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsImxpc3RQcm9wZXJ0aWVzIiwiUGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJTb3J0TGluayIsIm9wcG9zaXRlRGlyZWN0aW9uIiwic29ydGVkQnlJY29uIiwiTmF2TGluayIsIndpdGhSb3V0ZXIiLCJQcm9wZXJ0eUhlYWRlciIsImlzTWFpbiIsImlzU29ydGFibGUiLCJSZWNvcmRzVGFibGVIZWFkZXIiLCJvblNlbGVjdEFsbCIsInNlbGVjdGVkQWxsIiwiVGFibGVIZWFkIiwibWFyZ2luTGVmdCIsIkFjdGlvbkJ1dHRvbiIsImZpcnN0Q2hpbGQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJXcmFwcGVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIk5vUmVjb3Jkc09yaWdpbmFsIiwiY2FuQ3JlYXRlIiwiSW5mb0JveCIsIk5vUmVjb3JkcyIsImdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMiLCJhY3Rpb25zTWVtbyIsIlNlbGVjdGVkUmVjb3JkcyIsImJ1bGtCdXR0b25zIiwiVGFibGVDYXB0aW9uIiwiVGl0bGUiLCJSZWNvcmRzVGFibGUiLCJMb2FkZXIiLCJyZWNvcmRzSGF2ZUJ1bGtBY3Rpb24iLCJUYWJsZSIsIlRhYmxlQm9keSIsInNldFRhZyIsImhhbmRsZUFjdGlvblBlcmZvcm1lZCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJwYWdlTnVtYmVyIiwiUGFnaW5hdGlvbiIsIndpdGhOb3RpY2UiLCJCdWxrRGVsZXRlIiwiY291bnQiLCJGb3JtYXR0ZWRCdWxrRGVsZXRlIiwibmV3IiwiYnVsa0RlbGV0ZSIsIkJhc2VBY3Rpb25Db21wb25lbnQiLCJkb2N1bWVudGF0aW9uTGluayIsIkRPQ1MiLCJBY3Rpb24iLCJUcmFucyIsIkVycm9yTWVzc2FnZUJveCIsIk5vUmVzb3VyY2VFcnJvciIsIk5vQWN0aW9uRXJyb3IiLCJOb1JlY29yZEVycm9yIiwiU3R5bGVkV3JhcHBlciIsInh4bCIsIldyYXBwZXIiLCJEUkFXRVJfUE9SVEFMX0lEIiwiRHJhd2VyUG9ydGFsIiwiZHJhd2VyRWxlbWVudCIsInNldERyYXdlckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIkRyYXdlcldyYXBwZXIiLCJUaGVtZVByb3ZpZGVyIiwiVEhFTUUiLCJEcmF3ZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsIkRFRkFVTFRfRFJBV0VSX1dJRFRIIiwiYWRkIiwiY3JlYXRlUG9ydGFsIiwicGFyc2VRdWVyeSIsImVudHJ5IiwiRmlsdGVyRHJhd2VyIiwiZmlsdGVyUHJvcGVydGllcyIsInNldEZpbHRlciIsInVzZVJvdXRlTWF0Y2giLCJyZXNldEZpbHRlciIsImZpbHRlcmVkU2VhcmNoIiwiUmVjb3JkQWN0aW9uIiwiZmV0Y2hSZWNvcmQiLCJvbGRSZWNvcmQiLCJoYXNEaWZmZXJlbnRSZWNvcmQiLCJhY3Rpb25Gcm9tUmVzb3VyY2UiLCJjb250YWluZXJXaWR0aCIsIlJlc291cmNlQWN0aW9uIiwiQnVsa0FjdGlvbiIsImZldGNoUmVjb3JkcyIsInJlY29yZElkc1N0cmluZyIsIlBhZ2UiLCJjdXJyZW50UGFnZSIsInF1ZXJ5U3RyaW5nIiwiZ2V0QWN0aW9uIiwicmVzb3VyY2VBY3Rpb25NYXRjaCIsInJlY29yZEFjdGlvbk1hdGNoIiwiYnVsa0FjdGlvbk1hdGNoIiwiZmlsdGVyVmlzaWJsZSIsInNldEZpbGVyVmlzaWJsZSIsInF1ZXJ5SGFzRmlsdGVyIiwicmVhbEVuZEFjdGlvbiIsImxpc3RBY3Rpb25OYW1lIiwic2hvd0ZpbHRlciIsIkJhc2VBY3Rpb24iLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwic2lkZWJhclZpc2libGUiLCJSZXNldCIsIk92ZXJsYXkiLCJOb3RpY2UiLCJTd2l0Y2giLCJSb3V0ZSIsIlJlc291cmNlIiwiQVNTRVRTX0lOSVRJQUxJWkUiLCJCUkFORElOR19JTklUSUFMSVpFIiwiREFTSEJPQVJEX0lOSVRJQUxJWkUiLCJMT0NBTEVfSU5JVElBTElaRSIsIlBBR0VTX0lOSVRJQUxJWkUiLCJQQVRIU19JTklUSUFMSVpFIiwiUkVTT1VSQ0VTX0lOSVRJQUxJWkUiLCJWRVJTSU9OU19JTklUSUFMSVpFIiwicmVzb3VyY2VzUmVkdWNlciIsInBhZ2VzUmVkdWNlciIsImxvY2FsZXNSZWR1Y2VyIiwibGFuZ3VhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJicmFuZGluZ1JlZHVjZXIiLCJhc3NldHNSZWR1Y2VyIiwicGF0aHNSZWR1Y2VyIiwiREVGQVVMVF9QQVRIUyIsImRhc2hib2FyZFJlZHVjZXIiLCJzZXNzaW9uUmVkdWNlciIsInZlcnNpb25zUmVkdWNlciIsIm5vdGljZXNSZWR1Y2VyIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImFzc2V0cyIsImxvY2FsZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiZW52IiwiTk9ERV9FTlYiLCJzdG9yZSIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwibG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwiQXBwbGljYXRpb24iLCJQcm92aWRlciIsIkJyb3dzZXJSb3V0ZXIiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJBcHBDb21wb25lbnRzIiwiSG9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0EsSUFBSSxPQUFPLElBQUksVUFBVSxPQUFPLEVBQUU7QUFFbEM7Q0FDQSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Q0FDNUIsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0NBQ2pDLEVBQUUsSUFBSUEsV0FBUyxDQUFDO0NBQ2hCLEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7Q0FDM0QsRUFBRSxJQUFJLGNBQWMsR0FBRyxP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TSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUc7Q0FDM0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3hDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUM1QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7Q0FDNUIsRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUNkO0NBQ0EsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRztDQUMvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHO0NBQy9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFF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
