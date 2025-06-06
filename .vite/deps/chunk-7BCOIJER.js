import {
  AnimatePresence,
  init_emotion_is_prop_valid_esm,
  isPropValid,
  motion,
  require_jsx_runtime,
  useIsPresent,
  usePresence
} from "./chunk-HNJ6X7RJ.js";
import {
  Global,
  ThemeContext,
  ThemeProvider,
  __unsafe_useEmotionCache,
  _extends,
  getRegisteredStyles,
  insertStyles,
  keyframes,
  registerStyles,
  require_react_is,
  serializeStyles,
  useInsertionEffectAlwaysWithSyncFallback,
  withEmotionCache
} from "./chunk-LU7CCOUD.js";
import {
  require_react_dom
} from "./chunk-JUWM2LYA.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/lodash.mergewith/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.mergewith/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func2, thisArg, args) {
      switch (args.length) {
        case 0:
          return func2.call(thisArg);
        case 1:
          return func2.call(thisArg, args[0]);
        case 2:
          return func2.call(thisArg, args[0], args[1]);
        case 3:
          return func2.call(thisArg, args[0], args[1], args[2]);
      }
      return func2.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func2) {
      return function(value) {
        return func2(value);
      };
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function overArg(func2, transform2) {
      return function(arg) {
        return func2(transform2(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func2 = getNative(Object, "defineProperty");
        func2({}, "", {});
        return func2;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = /* @__PURE__ */ function() {
      function object2() {
      }
      return function(proto) {
        if (!isObject2(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object2.prototype = proto;
        var result = new object2();
        object2.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack2(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack2.prototype.clear = stackClear;
    Stack2.prototype["delete"] = stackDelete;
    Stack2.prototype.get = stackGet;
    Stack2.prototype.has = stackHas;
    Stack2.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object2, key, value) {
      if (value !== void 0 && !eq(object2[key], value) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object2, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object2, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object2[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction5(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object2) {
      if (!isObject2(object2)) {
        return nativeKeysIn(object2);
      }
      var isProto = isPrototype(object2), result = [];
      for (var key in object2) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object2, source, srcIndex, customizer, stack) {
      if (object2 === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack2());
        if (isObject2(srcValue)) {
          baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object2, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object2, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray2(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject2(objValue) || isFunction5(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object2, key, newValue);
    }
    function baseRest(func2, start2) {
      return setToString(overRest(func2, start2, identity), func2 + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func2, string2) {
      return defineProperty(func2, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string2),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object2, customizer) {
      var isNew = !object2;
      object2 || (object2 = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object2, key, newValue);
        } else {
          assignValue(object2, key, newValue);
        }
      }
      return object2;
    }
    function createAssigner(assigner) {
      return baseRest(function(object2, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard2 = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object2 = Object(object2);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object2, source, index, customizer);
          }
        }
        return object2;
      });
    }
    function createBaseFor(fromRight) {
      return function(object2, iteratee, keysFunc) {
        var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object2;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object2) {
      if (!isObject2(object2)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
        return eq(object2[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func2) {
      return !!maskSrcKey && maskSrcKey in func2;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object2) {
      var result = [];
      if (object2 != null) {
        for (var key in Object(object2)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func2, start2, transform2) {
      start2 = nativeMax(start2 === void 0 ? func2.length - 1 : start2, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start2 + index];
        }
        index = -1;
        var otherArgs = Array(start2 + 1);
        while (++index < start2) {
          otherArgs[index] = args[index];
        }
        otherArgs[start2] = transform2(array);
        return apply(func2, this, otherArgs);
      };
    }
    function safeGet(object2, key) {
      if (key === "constructor" && typeof object2[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object2[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func2) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func2.apply(void 0, arguments);
      };
    }
    function toSource(func2) {
      if (func2 != null) {
        try {
          return funcToString.call(func2);
        } catch (e) {
        }
        try {
          return func2 + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray2 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction5(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction5(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
    }
    var mergeWith = createAssigner(function(object2, source, srcIndex, customizer) {
      baseMerge(object2, source, srcIndex, customizer);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = mergeWith;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        // .toUpperCase handles XHTML
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range2) {
            selection.addRange(range2);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options) {
      var debug, message, reselectPrevious, range2, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range2 = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range2.selectNodeContents(mark);
        selection.addRange(range2);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range2);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys2;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
        keys2 = Object.keys(a);
        length = keys2.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length; i-- !== 0; ) {
          if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys2[i]], b[keys2[i]])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement8, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement8(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement8(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@chakra-ui/utils/dist/esm/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return () => {
    target.removeEventListener(eventName, handler, options);
  };
}

// node_modules/@chakra-ui/utils/dist/esm/is-element.mjs
function isHTMLElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isBrowser() {
  return Boolean(globalThis == null ? void 0 : globalThis.document);
}
function isHiddenElement(element) {
  if (element.parentElement && isHiddenElement(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditableElement(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isDisabledElement(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}

// node_modules/@chakra-ui/utils/dist/esm/owner.mjs
function getOwnerWindow(node2) {
  var _a8;
  return ((_a8 = getOwnerDocument(node2)) == null ? void 0 : _a8.defaultView) ?? window;
}
function getOwnerDocument(node2) {
  return isHTMLElement(node2) ? node2.ownerDocument : document;
}
function getEventWindow(event) {
  return event.view ?? window;
}
function getActiveElement(node2) {
  return getOwnerDocument(node2).activeElement;
}

// node_modules/@chakra-ui/utils/dist/esm/is-event.mjs
function isMouseEvent(event) {
  const win = getEventWindow(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}

// node_modules/@chakra-ui/utils/dist/esm/event-point.mjs
function pointFromTouch(e, type = "page") {
  const point = e.touches[0] || e.changedTouches[0];
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}
function pointFromMouse(point, type = "page") {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`]
  };
}
function getEventPoint(event, type = "page") {
  return isTouchEvent(event) ? pointFromTouch(event, type) : pointFromMouse(event, type);
}

// node_modules/@chakra-ui/utils/dist/esm/add-pointer-event.mjs
function filter(cb) {
  return (event) => {
    const isMouse = isMouseEvent(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: getEventPoint(event) });
  }
  const fn2 = filterPrimary ? filter(listener) : listener;
  return fn2;
}
function addPointerEvent(target, type, cb, options) {
  return addDomEvent(target, type, wrap(cb, type === "pointerdown"), options);
}

// node_modules/@chakra-ui/utils/dist/esm/assign-after.mjs
function assignAfter(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const result = { ...target };
  for (const nextSource of sources) {
    if (nextSource == null)
      continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey))
        continue;
      if (nextKey in result)
        delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result;
}

// node_modules/@chakra-ui/utils/dist/esm/attr.mjs
var dataAttr = (condition) => condition ? "" : void 0;
var ariaAttr = (condition) => condition ? true : void 0;

// node_modules/@chakra-ui/utils/dist/esm/is.mjs
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}

// node_modules/@chakra-ui/utils/dist/esm/breakpoint.mjs
function getLastItem(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function analyzeCSSValue(value) {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
}
function px(value) {
  if (value == null)
    return value;
  const { unitless } = analyzeCSSValue(value);
  return unitless || typeof value === "number" ? `${value}px` : value;
}
var sortByBreakpointValue = (a, b) => parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;
var sortBps = (breakpoints3) => Object.fromEntries(Object.entries(breakpoints3).sort(sortByBreakpointValue));
function normalize(breakpoints3) {
  const sorted = sortBps(breakpoints3);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints3) {
  const value = Object.keys(sortBps(breakpoints3));
  return new Set(value);
}
function subtract(value) {
  if (!value)
    return value;
  value = px(value) ?? value;
  const OFFSET = -0.02;
  return typeof value === "number" ? `${value + OFFSET}` : value.replace(/(\d+\.?\d*)/u, (m) => `${parseFloat(m) + OFFSET}`);
}
function toMediaQueryString(min2, max2) {
  const query = ["@media screen"];
  if (min2)
    query.push("and", `(min-width: ${px(min2)})`);
  if (max2)
    query.push("and", `(max-width: ${px(max2)})`);
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints3) {
  if (!breakpoints3)
    return null;
  breakpoints3.base = breakpoints3.base ?? "0px";
  const normalized = normalize(breakpoints3);
  const queries = Object.entries(breakpoints3).sort(sortByBreakpointValue).map(([breakpoint, minW], index, entry) => {
    let [, maxW] = entry[index + 1] ?? [];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : void 0;
    return {
      _minW: subtract(minW),
      breakpoint,
      minW,
      maxW,
      maxWQuery: toMediaQueryString(null, maxW),
      minWQuery: toMediaQueryString(minW),
      minMaxQuery: toMediaQueryString(minW, maxW)
    };
  });
  const _keys = keys(breakpoints3);
  const _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive(test) {
      const keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every((key) => _keys.has(key));
    },
    asObject: sortBps(breakpoints3),
    asArray: normalize(breakpoints3),
    details: queries,
    get(key) {
      return queries.find((q) => q.breakpoint === key);
    },
    media: [
      null,
      ...normalized.map((minW) => toMediaQueryString(minW)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      const result = _keysArr.map((bp) => test[bp] ?? null);
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce(
        (acc, value, index) => {
          const key = _keysArr[index];
          if (key != null && value != null)
            acc[key] = value;
          return acc;
        },
        {}
      );
    }
  };
}

// node_modules/@chakra-ui/utils/dist/esm/call-all.mjs
function callAll(...fns) {
  return function mergedFn(...args) {
    fns.forEach((fn2) => fn2 == null ? void 0 : fn2(...args));
  };
}
function callAllHandlers(...fns) {
  return function func2(event) {
    fns.some((fn2) => {
      fn2 == null ? void 0 : fn2(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}

// node_modules/@chakra-ui/utils/dist/esm/children.mjs
var import_react = __toESM(require_react(), 1);
function getValidChildren(children) {
  return import_react.Children.toArray(children).filter(
    (child) => (0, import_react.isValidElement)(child)
  );
}

// node_modules/@chakra-ui/utils/dist/esm/compact.mjs
function compact(object2) {
  const clone = Object.assign({}, object2);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}

// node_modules/@chakra-ui/utils/dist/esm/context.mjs
var import_react2 = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react2.createContext)(defaultValue);
  Context.displayName = name;
  function useContext$1() {
    var _a8;
    const context = (0, import_react2.useContext)(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      (_a8 = Error.captureStackTrace) == null ? void 0 : _a8.call(Error, error, useContext$1);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext$1, Context];
}

// node_modules/@chakra-ui/utils/dist/esm/cx.mjs
var cx = (...classNames2) => classNames2.filter(Boolean).join(" ");

// node_modules/@chakra-ui/utils/dist/esm/tabbable.mjs
var hasTabIndex = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isFocusable(element) {
  if (!isHTMLElement(element) || isHiddenElement(element) || isDisabledElement(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others2 = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others2) {
    return others2[localName]();
  }
  if (isContentEditableElement(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

// node_modules/@chakra-ui/utils/dist/esm/focusable.mjs
var focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();
var isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable(container2) {
  const focusableEls = Array.from(
    container2.querySelectorAll(focusableElSelector)
  );
  focusableEls.unshift(container2);
  return focusableEls.filter((el) => isFocusable(el) && isVisible(el));
}

// node_modules/@chakra-ui/utils/dist/esm/get.mjs
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn2) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn2(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn2(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);

// node_modules/@chakra-ui/utils/dist/esm/interop-default.mjs
var interopDefault = (mod) => mod.default || mod;

// node_modules/@chakra-ui/utils/dist/esm/lazy.mjs
function lazyDisclosure(options) {
  const { wasSelected, enabled, isSelected, mode: mode2 = "unmount" } = options;
  if (!enabled)
    return true;
  if (isSelected)
    return true;
  if (mode2 === "keepMounted" && wasSelected)
    return true;
  return false;
}

// node_modules/@chakra-ui/utils/dist/esm/number.mjs
function toNumber(value) {
  const num = parseFloat(value);
  return typeof num !== "number" || Number.isNaN(num) ? 0 : num;
}
function toPrecision(value, precision) {
  let nextValue = toNumber(value);
  const scaleFactor = 10 ** (precision ?? 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
function countDecimalPlaces(value) {
  if (!Number.isFinite(value))
    return 0;
  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function roundValueToStep(value, from, step) {
  const nextValue = Math.round((value - from) / step) * step + from;
  const precision = countDecimalPlaces(step);
  return toPrecision(nextValue, precision);
}
function clampValue(value, min2, max2) {
  if (value == null)
    return value;
  if (max2 < min2) {
    console.warn("clamp: max cannot be less than min");
  }
  return Math.min(Math.max(value, min2), max2);
}

// node_modules/@chakra-ui/utils/dist/esm/omit.mjs
function omit(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}

// node_modules/@chakra-ui/utils/dist/esm/pick.mjs
function pick(object2, keysToPick) {
  const result = {};
  for (const key of keysToPick) {
    if (key in object2) {
      result[key] = object2[key];
    }
  }
  return result;
}

// node_modules/@chakra-ui/utils/dist/esm/responsive.mjs
var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}

// node_modules/@chakra-ui/utils/dist/esm/run-if-fn.mjs
var isFunction = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// node_modules/@chakra-ui/utils/dist/esm/scroll-parent.mjs
function isScrollParent(el) {
  const win = el.ownerDocument.defaultView || window;
  const { overflow, overflowX, overflowY } = win.getComputedStyle(el);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getParent(el) {
  if (el.localName === "html")
    return el;
  return el.assignedSlot || el.parentElement || el.ownerDocument.documentElement;
}
function getScrollParent(el) {
  if (["html", "body", "#document"].includes(el.localName)) {
    return el.ownerDocument.body;
  }
  if (isHTMLElement(el) && isScrollParent(el)) {
    return el;
  }
  return getScrollParent(getParent(el));
}

// node_modules/@chakra-ui/utils/dist/esm/split.mjs
function split(object2, keys2) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys2.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}

// node_modules/@chakra-ui/utils/dist/esm/split-props.mjs
function splitProps(props, ...keys2) {
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const dKeys = Object.keys(descriptors);
  const split2 = (k) => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  const fn2 = (key) => split2(Array.isArray(key) ? key : dKeys.filter(key));
  return keys2.map(fn2).concat(split2(dKeys));
}

// node_modules/@chakra-ui/utils/dist/esm/walk-object.mjs
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObject(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = (getKey == null ? void 0 : getKey(prop)) ?? prop;
        const childPath = [...path, key];
        if (stop == null ? void 0 : stop(value, childPath)) {
          return predicate(value, path);
        }
        result[key] = inner(child, childPath);
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}

// node_modules/@chakra-ui/utils/dist/esm/warn.mjs
var warn = (options) => {
  const { condition, message } = options;
  if (condition && true) {
    console.warn(message);
  }
};

// node_modules/@chakra-ui/utils/dist/esm/index.mjs
var import_lodash = __toESM(require_lodash(), 1);

// node_modules/@chakra-ui/hooks/dist/esm/use-animation-state.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/hooks/dist/esm/use-event-listener.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/hooks/dist/esm/use-callback-ref.mjs
var import_react3 = __toESM(require_react(), 1);
function useCallbackRef(callback, deps = []) {
  const callbackRef = (0, import_react3.useRef)(callback);
  (0, import_react3.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react3.useCallback)((...args) => {
    var _a8;
    return (_a8 = callbackRef.current) == null ? void 0 : _a8.call(callbackRef, ...args);
  }, deps);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-event-listener.mjs
function useEventListener(target, event, handler, options) {
  const listener = useCallbackRef(handler);
  (0, import_react4.useEffect)(() => {
    const node2 = typeof target === "function" ? target() : target ?? document;
    if (!handler || !node2)
      return;
    node2.addEventListener(event, listener, options);
    return () => {
      node2.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);
  return () => {
    const node2 = typeof target === "function" ? target() : target ?? document;
    node2 == null ? void 0 : node2.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/hooks/dist/esm/use-animation-state.mjs
function useAnimationState(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react5.useState)(isOpen);
  const [once, setOnce] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    if (!once) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once, mounted]);
  useEventListener(
    () => ref.current,
    "animationend",
    () => {
      setMounted(isOpen);
    }
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a8;
      const win = getOwnerWindow(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a8 = ref.current) == null ? void 0 : _a8.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/hooks/dist/esm/use-boolean.mjs
var import_react6 = __toESM(require_react(), 1);
function useBoolean(initialState2 = false) {
  const [value, setValue] = (0, import_react6.useState)(initialState2);
  const callbacks = (0, import_react6.useMemo)(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev)
    }),
    []
  );
  return [value, callbacks];
}

// node_modules/@chakra-ui/hooks/dist/esm/use-clipboard.mjs
var import_react7 = __toESM(require_react(), 1);
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);
function useClipboard(value, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = (0, import_react7.useState)(false);
  const [valueState, setValueState] = (0, import_react7.useState)(value);
  (0, import_react7.useEffect)(() => setValueState(value), [value]);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = (0, import_react7.useCallback)(
    (valueToCopy) => {
      const value2 = typeof valueToCopy === "string" ? valueToCopy : valueState;
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(value2).then(() => setHasCopied(true)).catch(() => setHasCopied((0, import_copy_to_clipboard.default)(value2, copyOptions)));
      } else {
        setHasCopied((0, import_copy_to_clipboard.default)(value2, copyOptions));
      }
    },
    [valueState, copyOptions]
  );
  (0, import_react7.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: valueState,
    setValue: setValueState,
    onCopy,
    hasCopied
  };
}

// node_modules/@chakra-ui/hooks/dist/esm/use-const.mjs
var import_react8 = __toESM(require_react(), 1);
function useConst(init) {
  const ref = (0, import_react8.useRef)(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-controllable-state.mjs
var import_react9 = __toESM(require_react(), 1);
function useControllableProp(prop, state2) {
  const controlled = typeof prop !== "undefined";
  const value = controlled ? prop : state2;
  return (0, import_react9.useMemo)(() => [controlled, value], [controlled, value]);
}
function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);
  const [uncontrolledState, setUncontrolledState] = (0, import_react9.useState)(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolledState;
  const setValue = useCallbackRef(
    (next) => {
      const setter = next;
      const nextValue = typeof next === "function" ? setter(value) : next;
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!controlled) {
        setUncontrolledState(nextValue);
      }
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, setValue];
}

// node_modules/@chakra-ui/hooks/dist/esm/use-counter.mjs
var import_react10 = __toESM(require_react(), 1);
function useCounter(props = {}) {
  const {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    keepWithinRange = true
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [valueState, setValue] = (0, import_react10.useState)(() => {
    if (defaultValue == null)
      return "";
    return cast(defaultValue, stepProp, precisionProp) ?? "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse(value), stepProp);
  const precision = precisionProp ?? decimalPlaces;
  const update = (0, import_react10.useCallback)(
    (next) => {
      if (next === value)
        return;
      if (!isControlled) {
        setValue(next.toString());
      }
      onChangeProp == null ? void 0 : onChangeProp(next.toString(), parse(next));
    },
    [onChangeProp, isControlled, value]
  );
  const clamp = (0, import_react10.useCallback)(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = clampValue(nextValue, min2, max2);
      }
      return toPrecision(nextValue, precision);
    },
    [precision, keepWithinRange, max2, min2]
  );
  const increment = (0, import_react10.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(step);
      } else {
        next = parse(value) + step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const decrement = (0, import_react10.useCallback)(
    (step = stepProp) => {
      let next;
      if (value === "") {
        next = parse(-step);
      } else {
        next = parse(value) - step;
      }
      next = clamp(next);
      update(next);
    },
    [clamp, stepProp, update, value]
  );
  const reset = (0, import_react10.useCallback)(() => {
    let next;
    if (defaultValue == null) {
      next = "";
    } else {
      next = cast(defaultValue, stepProp, precisionProp) ?? min2;
    }
    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min2]);
  const castValue = (0, import_react10.useCallback)(
    (value2) => {
      const nextValue = cast(value2, stepProp, precision) ?? min2;
      update(nextValue);
    },
    [precision, stepProp, update, min2]
  );
  const valueAsNumber = parse(value);
  const isOutOfRange = valueAsNumber > max2 || valueAsNumber < min2;
  const isAtMax = valueAsNumber === max2;
  const isAtMin = valueAsNumber === min2;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast: castValue,
    setValue
  };
}
function parse(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces(step), countDecimalPlaces(value));
}
function cast(value, step, precision) {
  const parsedValue = parse(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision(parsedValue, precision ?? decimalPlaces);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.mjs
var import_react11 = __toESM(require_react(), 1);
function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react11.useState)(props.defaultIsOpen || false);
  const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
  const isControlled = isOpenProp !== void 0;
  const uid = (0, import_react11.useId)();
  const id = idProp ?? `disclosure-${uid}`;
  const onClose = (0, import_react11.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    handleClose == null ? void 0 : handleClose();
  }, [isControlled, handleClose]);
  const onOpen = (0, import_react11.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    handleOpen == null ? void 0 : handleOpen();
  }, [isControlled, handleOpen]);
  const onToggle = (0, import_react11.useCallback)(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);
  function getButtonProps(props2 = {}) {
    return {
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick(event) {
        var _a8;
        (_a8 = props2.onClick) == null ? void 0 : _a8.call(props2, event);
        onToggle();
      }
    };
  }
  function getDisclosureProps(props2 = {}) {
    return {
      ...props2,
      hidden: !isOpen,
      id
    };
  }
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps,
    getDisclosureProps
  };
}

// node_modules/@chakra-ui/hooks/dist/esm/use-focus-effect.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/hooks/dist/esm/use-safe-layout-effect.mjs
var import_react12 = __toESM(require_react(), 1);
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react12.useLayoutEffect : import_react12.useEffect;

// node_modules/@chakra-ui/hooks/dist/esm/use-update-effect.mjs
var import_react13 = __toESM(require_react(), 1);
var useUpdateEffect = (effect5, deps) => {
  const renderCycleRef = (0, import_react13.useRef)(false);
  const effectCycleRef = (0, import_react13.useRef)(false);
  (0, import_react13.useEffect)(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect5();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react13.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

// node_modules/@chakra-ui/hooks/dist/esm/use-focus-effect.mjs
function preventReturnFocus(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement(el);
  if (!activeElement)
    return false;
  if (el.contains(activeElement))
    return false;
  if (isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    let rafId;
    if (el) {
      rafId = requestAnimationFrame(() => {
        el.focus({ preventScroll: true });
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
  }, [shouldFocus, containerRef, focusRef]);
}
var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow(target, options = defaultOptions) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject2(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react14.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react14.useRef)(visible);
  useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react14.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (element.contains(document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      requestAnimationFrame(() => {
        var _a8;
        (_a8 = focusRef.current) == null ? void 0 : _a8.focus({ preventScroll });
      });
    } else {
      const tabbableEls = getAllFocusable(element);
      if (tabbableEls.length > 0) {
        requestAnimationFrame(() => {
          tabbableEls[0].focus({ preventScroll });
        });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener(element, "transitionend", onFocus3);
}
function isRefObject2(val) {
  return "current" in val;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-focus-on-pointer-down.mjs
function isRefObject3(val) {
  return "current" in val;
}
var isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return (agent == null ? void 0 : agent.platform) ?? navigator.platform;
}
var vn = (v) => isDom() && v.test(navigator.vendor);
var pt = (v) => isDom() && v.test(getPlatform());
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
  const { ref, elements, enabled } = props;
  const doc = () => {
    var _a8;
    return ((_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) ?? document;
  };
  useEventListener(doc, "pointerdown", (event) => {
    var _a8, _b3;
    if (!isSafari() || !enabled)
      return;
    const target = ((_b3 = (_a8 = event.composedPath) == null ? void 0 : _a8.call(event)) == null ? void 0 : _b3[0]) ?? event.target;
    const els = elements ?? [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject3(elementOrRef) ? elementOrRef.current : elementOrRef;
      return (el == null ? void 0 : el.contains(target)) || el === target;
    });
    if (doc().activeElement !== target && isValidTarget) {
      event.preventDefault();
      target.focus();
    }
  });
}

// node_modules/@chakra-ui/hooks/dist/esm/use-id.mjs
var import_react15 = __toESM(require_react(), 1);
function useId2(idProp, prefix) {
  const id = (0, import_react15.useId)();
  return (0, import_react15.useMemo)(
    () => idProp || [prefix, id].filter(Boolean).join("-"),
    [idProp, prefix, id]
  );
}
function useIds(idProp, ...prefixes) {
  const id = useId2(idProp);
  return (0, import_react15.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}
function useOptionalPart(partId) {
  const [id, setId] = (0, import_react15.useState)(null);
  const ref = (0, import_react15.useCallback)(
    (node2) => {
      setId(node2 ? partId : null);
    },
    [partId]
  );
  return { ref, id, isRendered: Boolean(id) };
}

// node_modules/@chakra-ui/hooks/dist/esm/use-interval.mjs
var import_react16 = __toESM(require_react(), 1);
function useInterval(callback, delay) {
  const fn2 = useCallbackRef(callback);
  (0, import_react16.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn2();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-latest-ref.mjs
var import_react17 = __toESM(require_react(), 1);
function useLatestRef(value) {
  const ref = (0, import_react17.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-merge-refs.mjs
var import_react18 = __toESM(require_react(), 1);
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node2) => {
    refs.forEach((ref) => {
      assignRef(ref, node2);
    });
  };
}
function useMergeRefs(...refs) {
  return (0, import_react18.useMemo)(() => mergeRefs(...refs), refs);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-outside-click.mjs
var import_react19 = __toESM(require_react(), 1);
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = (0, import_react19.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state2 = stateRef.current;
  (0, import_react19.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state2.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state2.ignoreEmulatedMouseEvents) {
        state2.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state2.isPointerDown && handler && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state2.ignoreEmulatedMouseEvents = true;
      if (handler && state2.isPointerDown && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument2(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state2, enabled]);
}
function isValidEvent(event, ref) {
  var _a8, _b3;
  const target = ((_a8 = event.composedPath) == null ? void 0 : _a8.call(event)[0]) ?? event.target;
  if (target) {
    const doc = getOwnerDocument2(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_b3 = ref.current) == null ? void 0 : _b3.contains(target));
}
function getOwnerDocument2(node2) {
  return (node2 == null ? void 0 : node2.ownerDocument) ?? document;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-previous.mjs
var import_react20 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = (0, import_react20.useRef)(void 0);
  (0, import_react20.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@zag-js/element-size/dist/index.mjs
function trackElementSize(element, callback) {
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = element.ownerDocument.defaultView ?? window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-size.mjs
var import_react21 = __toESM(require_react(), 1);
var useSafeLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react21.useLayoutEffect : import_react21.useEffect;
function trackMutation(el, cb) {
  var _a8;
  if (!el || !el.parentElement)
    return;
  const win = ((_a8 = el.ownerDocument) == null ? void 0 : _a8.defaultView) ?? window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
function useSizes(props) {
  const {
    getNodes,
    observeMutation = true,
    enabled = true,
    fallback = []
  } = props;
  const [sizes24, setSizes] = (0, import_react21.useState)(fallback);
  const [count, setCount] = (0, import_react21.useState)(0);
  useSafeLayoutEffect2(() => {
    if (!enabled)
      return;
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index) => trackElementSize(element, (size2) => {
        setSizes((sizes25) => {
          return [
            ...sizes25.slice(0, index),
            size2,
            ...sizes25.slice(index + 1)
          ];
        });
      })
    );
    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count2) => count2 + 1);
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => {
        cleanup == null ? void 0 : cleanup();
      });
    };
  }, [count, enabled]);
  return sizes24;
}
function isRef(ref) {
  return typeof ref === "object" && ref !== null && "current" in ref;
}
function useSize(subject, options) {
  const { observeMutation = false, enabled, fallback } = options ?? {};
  const [size2] = useSizes({
    observeMutation,
    enabled,
    fallback: fallback ? [fallback] : void 0,
    getNodes() {
      const node2 = isRef(subject) ? subject.current : subject;
      return [node2];
    }
  });
  return size2;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-timeout.mjs
var import_react22 = __toESM(require_react(), 1);
function useTimeout(callback, delay) {
  const fn2 = useCallbackRef(callback);
  (0, import_react22.useEffect)(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn2();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/esm/use-pan-event/use-pan-event.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// node_modules/@chakra-ui/hooks/dist/esm/use-pan-event/pan-event.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var PanEvent = class {
  constructor(event, handlers2, threshold) {
    __publicField(this, "history", []);
    __publicField(this, "startEvent", null);
    __publicField(this, "lastEvent", null);
    __publicField(this, "lastEventInfo", null);
    __publicField(this, "handlers", {});
    __publicField(this, "removeListeners", () => {
    });
    __publicField(this, "threshold", 3);
    __publicField(this, "win");
    __publicField(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const info2 = getPanInfo(this.lastEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push({ ...info2.point, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(this.lastEvent, info2);
        this.startEvent = this.lastEvent;
      }
      onMove == null ? void 0 : onMove(this.lastEvent, info2);
    });
    __publicField(this, "onPointerMove", (event2, info2) => {
      this.lastEvent = event2;
      this.lastEventInfo = info2;
      es_default.update(this.updatePoint, true);
    });
    __publicField(this, "onPointerUp", (event2, info2) => {
      const panInfo = getPanInfo(info2, this.history);
      const { onEnd, onSessionEnd } = this.handlers;
      onSessionEnd == null ? void 0 : onSessionEnd(event2, panInfo);
      this.end();
      if (!onEnd || !this.startEvent)
        return;
      onEnd == null ? void 0 : onEnd(event2, panInfo);
    });
    this.win = event.view ?? window;
    if (isMultiTouchEvent(event))
      return;
    this.handlers = handlers2;
    if (threshold) {
      this.threshold = threshold;
    }
    event.stopPropagation();
    event.preventDefault();
    const info = { point: getEventPoint(event) };
    const { timestamp } = getFrameData();
    this.history = [{ ...info.point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart == null ? void 0 : onSessionStart(event, getPanInfo(info, this.history));
    this.removeListeners = pipe(
      addPointerEvent(this.win, "pointermove", this.onPointerMove),
      addPointerEvent(this.win, "pointerup", this.onPointerUp),
      addPointerEvent(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    var _a8;
    (_a8 = this.removeListeners) == null ? void 0 : _a8.call(this);
    cancelSync.update(this.updatePoint);
  }
};
function subtract2(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(info, history) {
  return {
    point: info.point,
    delta: subtract2(info.point, history[history.length - 1]),
    offset: subtract2(info.point, history[0]),
    velocity: getVelocity(history, 0.1)
  };
}
var toMilliseconds = (v) => v * 1e3;
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = history[history.length - 1];
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function pipe(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function distance1D(a, b) {
  return Math.abs(a - b);
}
function isPoint(point) {
  return "x" in point && "y" in point;
}
function distance(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return distance1D(a, b);
  }
  if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }
  return 0;
}

// node_modules/@chakra-ui/hooks/dist/esm/use-pan-event/use-pan-event.mjs
function usePanEvent(ref, options) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = options;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react23.useRef)(null);
  const handlersRef = useLatestRef({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  });
  (0, import_react23.useEffect)(() => {
    var _a8;
    (_a8 = panSession.current) == null ? void 0 : _a8.updateHandlers(handlersRef.current);
  });
  (0, import_react23.useEffect)(() => {
    const node2 = ref.current;
    if (!node2 || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new PanEvent(event, handlersRef.current, threshold);
    }
    return addPointerEvent(node2, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  (0, import_react23.useEffect)(() => {
    return () => {
      var _a8;
      (_a8 = panSession.current) == null ? void 0 : _a8.end();
      panSession.current = null;
    };
  }, []);
}

// node_modules/@chakra-ui/styled-system/dist/esm/pseudos.mjs
var state = {
  open: (str, post) => `${str}[data-open], ${str}[open], ${str}[data-state=open] ${post}`,
  closed: (str, post) => `${str}[data-closed], ${str}[data-state=closed] ${post}`,
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup = (fn2) => merge((v) => fn2(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn2) => merge((v) => fn2(v, "~ &"), "[data-peer]", ".peer");
var merge = (fn2, ...selectors) => selectors.map(fn2).join(", ");
var pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within, &[data-focus-within]",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty, &[data-empty]",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is open
   */
  _groupOpen: toGroup(state.open),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is closed
   */
  _groupClosed: toGroup(state.closed),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: toGroup(state.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: toPeer(state.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: toGroup(state.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: toPeer(state.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: toGroup(state.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: toPeer(state.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: toGroup(state.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: toPeer(state.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: toGroup(state.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: toPeer(state.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: toGroup(state.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: toPeer(state.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: toGroup(state.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: toPeer(state.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: toGroup(state.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: toPeer(state.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder, &[data-placeholder]",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen, &[data-fullscreen]",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]",
  /**
   * Styles for the CSS Selector `&[data-open], &[open], &[data-state=open]`
   */
  _open: "&[data-open], &[open], &[data-state=open]",
  /**
   * Styles for the CSS Selector `&[data-closed], &[data-state=closed]`
   */
  _closed: "&[data-closed], &[data-state=closed]",
  /**
   * Styles for the CSS Selector `&[data-complete]`
   */
  _complete: "&[data-complete]",
  /**
   * Styles for the CSS Selector `&[data-incomplete]`
   */
  _incomplete: "&[data-incomplete]",
  /**
   * Styles for the CSS Selector `&[data-current]`
   */
  _current: "&[data-current]"
};
var pseudoPropNames = Object.keys(
  pseudoSelectors
);

// node_modules/@chakra-ui/styled-system/dist/esm/utils/create-transform.mjs
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar = (scale2, value) => (theme2) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale2 ? `${scale2}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale: scale2, transform: transform2, compose } = options;
  const fn2 = (value, theme2) => {
    const _value = tokenToCSSVar(scale2, value)(theme2);
    let result = (transform2 == null ? void 0 : transform2(_value, theme2)) ?? _value;
    if (compose) {
      result = compose(result, theme2);
    }
    return result;
  };
  return fn2;
}

// node_modules/@chakra-ui/styled-system/dist/esm/utils/pipe.mjs
var pipe2 = (...fns) => (v) => fns.reduce((a, b) => b(a), v);

// node_modules/@chakra-ui/styled-system/dist/esm/utils/prop-config.mjs
function toConfig(scale2, transform2) {
  return (property) => {
    const result = { property, scale: scale2 };
    result.transform = createTransform({
      scale: scale2,
      transform: transform2
    });
    return result;
  };
}
var getRtl = ({ rtl, ltr }) => (theme2) => theme2.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale: scale2, transform: transform2 } = options;
  return {
    scale: scale2,
    property: getRtl(property),
    transform: scale2 ? createTransform({
      scale: scale2,
      compose: transform2
    }) : transform2
  };
}

// node_modules/@chakra-ui/styled-system/dist/esm/utils/templates.mjs
var transformTemplate = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate
  ].join(" ");
}
function getTransformGpuTemplate() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate
  ].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`
    ].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};

// node_modules/@chakra-ui/styled-system/dist/esm/utils/parse-gradient.mjs
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme2) {
  if (value == null || globalSet.has(value))
    return value;
  const prevent = isCSSFunction(value) || globalSet.has(value);
  if (!prevent)
    return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results == null ? void 0 : results[1];
  const values = results == null ? void 0 : results[2];
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  const direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color2 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color2,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color2;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme2) => parseGradient(value, theme2 ?? {});

// node_modules/@chakra-ui/styled-system/dist/esm/utils/transform-functions.mjs
function isCssVar2(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue2 = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap2 = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue2(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme2) {
    const map = { left: "right", right: "left" };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar2(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform,
  blur: wrap2("blur"),
  opacity: wrap2("opacity"),
  brightness: wrap2("brightness"),
  contrast: wrap2("contrast"),
  dropShadow: wrap2("drop-shadow"),
  grayscale: wrap2("grayscale"),
  hueRotate: (value) => wrap2("hue-rotate")(transformFunctions.degree(value)),
  invert: wrap2("invert"),
  saturate: wrap2("saturate"),
  sepia: wrap2("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    const { space: space2, divide: divide3 } = flexDirectionTemplate[value] ?? {};
    const result = { flexDirection: value };
    if (space2)
      result[space2] = 1;
    if (divide3)
      result[divide3] = 1;
    return result;
  }
};

// node_modules/@chakra-ui/styled-system/dist/esm/utils/index.mjs
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transformFunctions.gradient),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe2(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe2(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale2, transform2) {
    return {
      property,
      scale: scale2,
      ...scale2 && {
        transform: createTransform({ scale: scale2, transform: transform2 })
      }
    };
  },
  propT(property, transform2) {
    return { property, transform: transform2 };
  },
  sizes: toConfig("sizes", pipe2(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig("sizes", pipe2(transformFunctions.vh, transformFunctions.fraction)),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/background.mjs
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.bgClip },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/border.mjs
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/color.mjs
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke"),
  accentColor: t.colors("accentColor"),
  textFillColor: t.colors("textFillColor")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/flexbox.mjs
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/layout.mjs
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a8, _b3;
      const breakpoint = ((_b3 = (_a8 = theme2.__breakpoints) == null ? void 0 : _a8.get(value)) == null ? void 0 : _b3.minW) ?? value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a8, _b3;
      const breakpoint = ((_b3 = (_a8 = theme2.__breakpoints) == null ? void 0 : _a8.get(value)) == null ? void 0 : _b3._minW) ?? value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/filter.mjs
var filter2 = {
  filter: { transform: transformFunctions.filter },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.propT("--chakra-hue-rotate", transformFunctions.hueRotate),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.backdropFilter },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT(
    "--chakra-backdrop-brightness",
    transformFunctions.brightness
  ),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.propT(
    "--chakra-backdrop-hue-rotate",
    transformFunctions.hueRotate
  ),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/ring.mjs
var ring = {
  ring: { transform: transformFunctions.ring },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/interactivity.mjs
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/grid.mjs
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};

// node_modules/@chakra-ui/styled-system/dist/esm/get.mjs
function get2(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize2 = (fn2) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn2(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn2(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet2 = memoize2(get2);

// node_modules/@chakra-ui/styled-system/dist/esm/config/others.mjs
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = (theme2, key, styles2) => {
  const result = {};
  const obj = memoizedGet2(theme2, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles2 && styles2[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `layerStyles.${value}`, styles2)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `textStyles.${value}`, styles2)
  },
  apply: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, value, styles2)
  }
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/position.mjs
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/effect.mjs
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/space.mjs
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});

// node_modules/@chakra-ui/styled-system/dist/esm/config/scroll.mjs
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  // scroll margin
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/typography.mjs
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/text-decoration.mjs
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/transform.mjs
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/list.mjs
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};

// node_modules/@chakra-ui/styled-system/dist/esm/config/transition.mjs
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
};

// node_modules/@chakra-ui/styled-system/dist/esm/system.mjs
var systemProps = (0, import_lodash.default)(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter2,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition
);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var layoutPropNames = Object.keys(
  layoutSystem
);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = { ...systemProps, ...pseudoSelectors };
var isStyleProp = (prop) => prop in styleProps;

// node_modules/@chakra-ui/styled-system/dist/esm/utils/expand-responsive.mjs
var expandResponsive = (styles2) => (theme2) => {
  if (!theme2.__breakpoints)
    return styles2;
  const { isResponsive, toArrayValue, media: medias } = theme2.__breakpoints;
  const computedStyles = {};
  for (const key in styles2) {
    let value = runIfFn(styles2[key], theme2);
    if (value == null)
      continue;
    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    const queries = value.slice(0, medias.length).length;
    for (let index = 0; index < queries; index += 1) {
      const media = medias == null ? void 0 : medias[index];
      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index] == null) {
        continue;
      }
      computedStyles[media][key] = value[index];
    }
  }
  return computedStyles;
};

// node_modules/@chakra-ui/styled-system/dist/esm/utils/split-by-comma.mjs
function splitByComma(value) {
  const chunks = [];
  let chunk = "";
  let inParens = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === "(") {
      inParens = true;
      chunk += char;
    } else if (char === ")") {
      inParens = false;
      chunk += char;
    } else if (char === "," && !inParens) {
      chunks.push(chunk);
      chunk = "";
    } else {
      chunk += char;
    }
  }
  chunk = chunk.trim();
  if (chunk) {
    chunks.push(chunk);
  }
  return chunks;
}

// node_modules/@chakra-ui/styled-system/dist/esm/css.mjs
function isCssVar3(value) {
  return /^var\(--.+\)$/.test(value);
}
var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar3(value);
var resolveTokenValue = (theme2, value) => {
  if (value == null)
    return value;
  const getVar = (val) => {
    var _a8, _b3;
    return (_b3 = (_a8 = theme2.__cssMap) == null ? void 0 : _a8[val]) == null ? void 0 : _b3.varRef;
  };
  const getValue = (val) => getVar(val) ?? val;
  const [tokenValue, fallbackValue] = splitByComma(value);
  value = getVar(tokenValue) ?? getValue(fallbackValue) ?? getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme: theme2 } = options;
  const css22 = (stylesOrFn, nested = false) => {
    var _a8;
    const _styles = runIfFn(stylesOrFn, theme2);
    const styles2 = expandResponsive(_styles)(theme2);
    let computedStyles = {};
    for (let key in styles2) {
      const valueOrFn = styles2[key];
      let value = runIfFn(valueOrFn, theme2);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme2, value);
      }
      let config2 = configs[key];
      if (config2 === true) {
        config2 = { property: key };
      }
      if (isObject(value)) {
        computedStyles[key] = computedStyles[key] ?? {};
        computedStyles[key] = (0, import_lodash.default)(
          {},
          computedStyles[key],
          css22(value, true)
        );
        continue;
      }
      let rawValue = ((_a8 = config2 == null ? void 0 : config2.transform) == null ? void 0 : _a8.call(config2, value, theme2, _styles)) ?? value;
      rawValue = (config2 == null ? void 0 : config2.processResult) ? css22(rawValue, true) : rawValue;
      const configProperty = runIfFn(config2 == null ? void 0 : config2.property, theme2);
      if (!nested && (config2 == null ? void 0 : config2.static)) {
        const staticStyles = runIfFn(config2.static, theme2);
        computedStyles = (0, import_lodash.default)({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css22;
}
var css = (styles2) => (theme2) => {
  const cssFn = getCss({
    theme: theme2,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles2);
};

// node_modules/@chakra-ui/styled-system/dist/esm/define-styles.mjs
function defineStyle(styles2) {
  return styles2;
}
function defineStyleConfig(config2) {
  return config2;
}
function createMultiStyleConfigHelpers(parts) {
  return {
    definePartsStyle(config2) {
      return config2;
    },
    defineMultiStyleConfig(config2) {
      return { parts, ...config2 };
    }
  };
}

// node_modules/@chakra-ui/styled-system/dist/esm/get-css-var.mjs
function getCSSVar(theme2, scale2, value) {
  var _a8, _b3;
  return ((_b3 = (_a8 = theme2.__cssMap) == null ? void 0 : _a8[`${scale2}.${value}`]) == null ? void 0 : _b3.varRef) ?? value;
}

// node_modules/@chakra-ui/styled-system/dist/esm/style-config.mjs
function normalize2(value, toArray3) {
  if (Array.isArray(value))
    return value;
  if (isObject(value))
    return toArray3(value);
  if (value != null)
    return [value];
}
function getNextIndex(values, i) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[j] != null)
      return j;
  }
  return -1;
}
function createResolver(theme2) {
  const breakpointUtil = theme2.__breakpoints;
  return function resolver(config2, prop, value, props) {
    var _a8, _b3;
    if (!breakpointUtil)
      return;
    const result = {};
    const normalized = normalize2(value, breakpointUtil.toArrayValue);
    if (!normalized)
      return result;
    const len = normalized.length;
    const isSingle = len === 1;
    const isMultipart = !!config2.parts;
    for (let i = 0; i < len; i++) {
      const key = breakpointUtil.details[i];
      const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
      const query = toMediaQueryString(key.minW, nextKey == null ? void 0 : nextKey._minW);
      const styles2 = runIfFn((_a8 = config2[prop]) == null ? void 0 : _a8[normalized[i]], props);
      if (!styles2)
        continue;
      if (isMultipart) {
        (_b3 = config2.parts) == null ? void 0 : _b3.forEach((part) => {
          (0, import_lodash.default)(result, {
            [part]: isSingle ? styles2[part] : { [query]: styles2[part] }
          });
        });
        continue;
      }
      if (!isMultipart) {
        if (isSingle)
          (0, import_lodash.default)(result, styles2);
        else
          result[query] = styles2;
        continue;
      }
      result[query] = styles2;
    }
    return result;
  };
}
function resolveStyleConfig(config2) {
  return (props) => {
    const { variant, size: size2, theme: theme2 } = props;
    const recipe = createResolver(theme2);
    return (0, import_lodash.default)(
      {},
      runIfFn(config2.baseStyle ?? {}, props),
      recipe(config2, "sizes", size2, props),
      recipe(config2, "variants", variant, props)
    );
  };
}

// node_modules/@chakra-ui/styled-system/dist/esm/theming-props.mjs
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/calc.mjs
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract3 = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate = (x) => {
  const value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract3(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract: subtract3,
    multiply,
    divide,
    negate
  }
);

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/css-var.mjs
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
  if (value.includes("\\."))
    return value;
  const isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix(value, prefix = "") {
  return [prefix, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix = "") {
  return escape(`--${addPrefix(value, prefix)}`);
}
function cssVar(name, fallback, cssVarPrefix) {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function defineCssVars(scope, keys2) {
  const vars2 = {};
  for (const key of keys2) {
    if (Array.isArray(key)) {
      const [name, fallback] = key;
      vars2[name] = cssVar(`${scope}-${name}`, fallback);
      continue;
    }
    vars2[key] = cssVar(`${scope}-${key}`);
  }
  return vars2;
}

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/theme-tokens.mjs
var tokens = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function extractTokens(theme2) {
  const _tokens = tokens;
  return pick(theme2, _tokens);
}
function extractSemanticTokens(theme2) {
  return theme2.semanticTokens;
}
function omitVars(rawTheme) {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
}

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/flatten-tokens.mjs
function flattenTokens(theme2) {
  const tokens2 = extractTokens(theme2);
  const semanticTokens2 = extractSemanticTokens(theme2);
  const isSemanticCondition = (key) => (
    // @ts-ignore
    pseudoPropNames.includes(key) || "default" === key
  );
  const result = {};
  walkObject(tokens2, (value, path) => {
    if (value == null)
      return;
    result[path.join(".")] = { isSemantic: false, value };
  });
  walkObject(
    semanticTokens2,
    (value, path) => {
      if (value == null)
        return;
      result[path.join(".")] = { isSemantic: true, value };
    },
    {
      stop: (value) => Object.keys(value).every(isSemanticCondition)
    }
  );
  return result;
}

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/create-theme-vars.mjs
function tokenToCssVar(token, prefix) {
  return cssVar(String(token).replace(/\./g, "-"), void 0, prefix);
}
function createThemeVars(theme2) {
  var _a8;
  const flatTokens = flattenTokens(theme2);
  const cssVarPrefix = (_a8 = theme2.config) == null ? void 0 : _a8.cssVarPrefix;
  let cssVars2 = {};
  const cssMap = {};
  function lookupToken(token, maybeToken) {
    const scale2 = String(token).split(".")[0];
    const withScale = [scale2, maybeToken].join(".");
    const resolvedTokenValue = flatTokens[withScale];
    if (!resolvedTokenValue)
      return maybeToken;
    const { reference: reference2 } = tokenToCssVar(withScale, cssVarPrefix);
    return reference2;
  }
  for (const [token, tokenValue] of Object.entries(flatTokens)) {
    const { isSemantic, value } = tokenValue;
    const { variable, reference: reference2 } = tokenToCssVar(token, cssVarPrefix);
    if (!isSemantic) {
      if (token.startsWith("space")) {
        const keys2 = token.split(".");
        const [firstKey, ...referenceKeys] = keys2;
        const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`;
        const negativeValue = calc.negate(value);
        const negatedReference = calc.negate(reference2);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference
        };
      }
      cssVars2[variable] = value;
      cssMap[token] = {
        value,
        var: variable,
        varRef: reference2
      };
      continue;
    }
    const normalizedValue = isObject(value) ? value : { default: value };
    cssVars2 = (0, import_lodash.default)(
      cssVars2,
      Object.entries(normalizedValue).reduce(
        (acc, [conditionAlias, conditionValue]) => {
          var _a9;
          if (!conditionValue)
            return acc;
          const tokenReference = lookupToken(token, `${conditionValue}`);
          if (conditionAlias === "default") {
            acc[variable] = tokenReference;
            return acc;
          }
          const conditionSelector = ((_a9 = pseudoSelectors) == null ? void 0 : _a9[conditionAlias]) ?? conditionAlias;
          acc[conditionSelector] = { [variable]: tokenReference };
          return acc;
        },
        {}
      )
    );
    cssMap[token] = {
      value: reference2,
      var: variable,
      varRef: reference2
    };
  }
  return {
    cssVars: cssVars2,
    cssMap
  };
}

// node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/to-css-var.mjs
function toCSSVar(rawTheme) {
  const theme2 = omitVars(rawTheme);
  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: cssVars2
  } = createThemeVars(theme2);
  const defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme2, {
    __cssVars: { ...defaultCssVars, ...cssVars2 },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme2.breakpoints)
  });
  return theme2;
}

// node_modules/@chakra-ui/anatomy/dist/esm/create-anatomy.mjs
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part ?? "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// node_modules/@chakra-ui/anatomy/dist/esm/components.mjs
var accordionAnatomy = anatomy("accordion").parts(
  "root",
  "container",
  "button",
  "panel",
  "icon"
);
var alertAnatomy = anatomy("alert").parts(
  "title",
  "description",
  "container",
  "icon",
  "spinner"
);
var avatarAnatomy = anatomy("avatar").parts(
  "label",
  "badge",
  "container",
  "excessLabel",
  "group"
);
var breadcrumbAnatomy = anatomy("breadcrumb").parts(
  "link",
  "item",
  "container",
  "separator"
);
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts(
  "control",
  "icon",
  "container",
  "label"
);
var circularProgressAnatomy = anatomy("progress").parts(
  "track",
  "filledTrack",
  "label"
);
var drawerAnatomy = anatomy("drawer").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
var editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts(
  "button",
  "list",
  "item",
  "groupTitle",
  "icon",
  "command",
  "divider"
);
var modalAnatomy = anatomy("modal").parts(
  "overlay",
  "dialogContainer",
  "dialog",
  "header",
  "closeButton",
  "body",
  "footer"
);
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts(
  "content",
  "header",
  "body",
  "footer",
  "popper",
  "arrow",
  "closeButton"
);
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
var tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
var stepperAnatomy = anatomy("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);

// node_modules/@chakra-ui/theme/dist/esm/components/accordion.mjs
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon = defineStyle({
  fontSize: "1.25em"
});
var baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
var accordionTheme = defineMultiStyleConfig({ baseStyle });

// node_modules/color2k/dist/index.exports.import.es.mjs
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
var ColorError = class extends Error {
  constructor(color2) {
    super(`Failed to parse color: "${color2}"`);
  }
};
var ColorError$1 = ColorError;
function parseToRgba(color2) {
  if (typeof color2 !== "string") throw new ColorError$1(color2);
  if (color2.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let normalizedColor = color2.trim();
  normalizedColor = namedColorRegex.test(color2) ? nameToHex(color2) : color2;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s) throw new ColorError$1(color2);
    if (guard(0, 100, l) !== l) throw new ColorError$1(color2);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color2);
}
function hash(str) {
  let hash4 = 5381;
  let i = str.length;
  while (i) {
    hash4 = hash4 * 33 ^ str.charCodeAt(--i);
  }
  return (hash4 >>> 0) % 2341;
}
var colorToInt = (x) => parseInt(x.replace(/_/g, ""), 36);
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color2) {
  const normalizedColorName = color2.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result) throw new ColorError$1(color2);
  return `#${result}`;
}
var r = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = (color2) => {
  return Math.round(color2 * 255);
};
var hslToRgb = (hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
};
function rgba(red, green, blue, alpha) {
  return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
function transparentize(color2, amount) {
  const [r2, g, b, a] = parseToRgba(color2);
  return rgba(r2, g, b, a - amount);
}
function toHex(color2) {
  const [r2, g, b, a] = parseToRgba(color2);
  let hex = (x) => {
    const h = guard(0, 255, x).toString(16);
    return h.length === 1 ? `0${h}` : h;
  };
  return `#${hex(r2)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}

// node_modules/@chakra-ui/theme-tools/dist/esm/color.mjs
var isEmptyObject2 = (obj) => Object.keys(obj).length === 0;
function get3(obj, key, def, p, undef) {
  key = key.split ? key.split(".") : key;
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
}
var getColor = (theme2, color2, fallback) => {
  const hex = get3(theme2, `colors.${color2}`, color2);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback ?? "#000000";
  }
};
var getBrightness = (color2) => {
  const [r2, g, b] = parseToRgba(color2);
  return (r2 * 299 + g * 587 + b * 114) / 1e3;
};
var tone = (color2) => (theme2) => {
  const hex = getColor(theme2, color2);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
};
var isDark = (color2) => (theme2) => tone(color2)(theme2) === "dark";
var transparentize2 = (color2, opacity) => (theme2) => {
  const raw = getColor(theme2, color2);
  return transparentize(raw, 1 - opacity);
};
function generateStripe(size2 = "1rem", color2 = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color2} 25%,
    transparent 25%,
    transparent 50%,
    ${color2} 50%,
    ${color2} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
var randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject2(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash4 = 0;
  if (str.length === 0)
    return hash4.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash4 = str.charCodeAt(i) + ((hash4 << 5) - hash4);
    hash4 = hash4 & hash4;
  }
  let color2 = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash4 >> j * 8 & 255;
    color2 += `00${value.toString(16)}`.substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  let index = 0;
  if (str.length === 0)
    return list2[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}

// node_modules/@chakra-ui/theme-tools/dist/esm/component.mjs
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}

// node_modules/@chakra-ui/theme-tools/dist/esm/css-calc.mjs
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add2 = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract4 = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply2 = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide2 = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate2 = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply2(value, -1);
};
var calc2 = Object.assign(
  (x) => ({
    add: (...operands) => calc2(add2(x, ...operands)),
    subtract: (...operands) => calc2(subtract4(x, ...operands)),
    multiply: (...operands) => calc2(multiply2(x, ...operands)),
    divide: (...operands) => calc2(divide2(x, ...operands)),
    negate: () => calc2(negate2(x)),
    toString: () => x.toString()
  }),
  {
    add: add2,
    subtract: subtract4,
    multiply: multiply2,
    divide: divide2,
    negate: negate2
  }
);

// node_modules/@chakra-ui/theme-tools/dist/esm/css-var.mjs
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  const valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix2(value, prefix = "") {
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape2(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix2(value, prefix)}`;
}
function cssVar2(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// node_modules/@chakra-ui/theme/dist/esm/components/alert.mjs
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg = cssVar("alert-fg");
var $bg = cssVar("alert-bg");
var baseStyle2 = definePartsStyle2({
  container: {
    bg: $bg.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.600`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.600`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg.reference
    }
  };
});
var variantTopAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg.variable]: `colors.${c}.600`,
      [$bg.variable]: bg.light,
      _dark: {
        [$fg.variable]: `colors.${c}.200`,
        [$bg.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg.reference
    }
  };
});
var variantSolid = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg.variable]: `colors.white`,
      [$bg.variable]: `colors.${c}.600`,
      _dark: {
        [$fg.variable]: `colors.gray.900`,
        [$bg.variable]: `colors.${c}.200`
      },
      color: $fg.reference
    }
  };
});
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var alertTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/foundations/spacing.mjs
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/sizes.mjs
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};

// node_modules/@chakra-ui/theme/dist/esm/utils/run-if-fn.mjs
var isFunction3 = (value) => typeof value === "function";
function runIfFn2(valueOrFn, ...args) {
  return isFunction3(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// node_modules/@chakra-ui/theme/dist/esm/components/avatar.mjs
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border = cssVar("avatar-border-color");
var $bg2 = cssVar("avatar-bg");
var $fs = cssVar("avatar-font-size");
var $size = cssVar("avatar-size");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $border.reference,
  [$border.variable]: "white",
  _dark: {
    [$border.variable]: "colors.gray.800"
  }
});
var baseStyleExcessLabel = defineStyle({
  bg: $bg2.reference,
  fontSize: $fs.reference,
  width: $size.reference,
  height: $size.reference,
  lineHeight: "1",
  [$bg2.variable]: "colors.gray.200",
  _dark: {
    [$bg2.variable]: "colors.whiteAlpha.400"
  }
});
var baseStyleContainer2 = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  return {
    bg: $bg2.reference,
    fontSize: $fs.reference,
    color: color2,
    borderColor: $border.reference,
    verticalAlign: "top",
    width: $size.reference,
    height: $size.reference,
    "&:not([data-loaded])": {
      [$bg2.variable]: bg
    },
    [$border.variable]: "colors.white",
    _dark: {
      [$border.variable]: "colors.gray.800"
    }
  };
});
var baseStyleLabel = defineStyle({
  fontSize: $fs.reference,
  lineHeight: "1"
});
var baseStyle3 = definePartsStyle3((props) => ({
  badge: runIfFn2(baseStyleBadge, props),
  excessLabel: runIfFn2(baseStyleExcessLabel, props),
  container: runIfFn2(baseStyleContainer2, props),
  label: baseStyleLabel
}));
function getSize(size2) {
  const themeSize = size2 !== "100%" ? sizes[size2] : void 0;
  return definePartsStyle3({
    container: {
      [$size.variable]: themeSize ?? size2,
      [$fs.variable]: `calc(${themeSize ?? size2} / 2.5)`
    },
    excessLabel: {
      [$size.variable]: themeSize ?? size2,
      [$fs.variable]: `calc(${themeSize ?? size2} / 2.5)`
    }
  });
}
var sizes2 = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
var avatarTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  sizes: sizes2,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/badge.mjs
var vars = defineCssVars("badge", ["bg", "color", "shadow"]);
var baseStyle4 = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var variantSolid2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize2(`${c}.500`, 0.6)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
var variantSubtle2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize2(`${c}.200`, 0.8)(theme2);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var variants2 = {
  solid: variantSolid2,
  subtle: variantSubtle2,
  outline: variantOutline
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle4,
  variants: variants2,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/breadcrumb.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var $decor = cssVar("breadcrumb-link-decor");
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
var baseStyle5 = definePartsStyle4({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle5
});

// node_modules/@chakra-ui/theme/dist/esm/components/button.mjs
var baseStyle6 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize2(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize2(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn2(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color: color2 = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = accessibleColorMap[c] ?? {};
  const background2 = mode(bg, `${c}.200`)(props);
  return {
    bg: background2,
    color: mode(color2, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background2
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants3 = {
  ghost: variantGhost,
  outline: variantOutline2,
  solid: variantSolid3,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes3 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle6,
  variants: variants3,
  sizes: sizes3,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/card.mjs
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg3 = cssVar("card-bg");
var $padding = cssVar("card-padding");
var $shadow = cssVar("card-shadow");
var $radius = cssVar("card-radius");
var $border2 = cssVar("card-border-width", "0");
var $borderColor = cssVar("card-border-color");
var baseStyle7 = definePartsStyle5({
  container: {
    [$bg3.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg3.reference,
    boxShadow: $shadow.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border2.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding.reference
  },
  footer: {
    padding: $padding.reference
  }
});
var sizes4 = {
  sm: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3"
    }
  }),
  md: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.5"
    }
  }),
  lg: definePartsStyle5({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.7"
    }
  })
};
var variants4 = {
  elevated: definePartsStyle5({
    container: {
      [$shadow.variable]: "shadows.base",
      _dark: {
        [$bg3.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle5({
    container: {
      [$border2.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle5({
    container: {
      [$bg3.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding.variable]: 0
    },
    header: {
      [$padding.variable]: 0
    },
    footer: {
      [$padding.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig5({
  baseStyle: baseStyle7,
  variants: variants4,
  sizes: sizes4,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/checkbox.mjs
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size2 = cssVar("checkbox-size");
var baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size2.reference,
    h: $size2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer3 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel2 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon2 = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle8 = definePartsStyle6((props) => ({
  icon: baseStyleIcon2,
  container: baseStyleContainer3,
  control: runIfFn2(baseStyleControl, props),
  label: baseStyleLabel2
}));
var sizes5 = {
  sm: definePartsStyle6({
    control: { [$size2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle6({
    control: { [$size2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle6({
    control: { [$size2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle8,
  sizes: sizes5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/close-button.mjs
var $size3 = cssVar2("close-button-size");
var $bg4 = cssVar2("close-button-bg");
var baseStyle9 = defineStyle({
  w: [$size3.reference],
  h: [$size3.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg4.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg4.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg4.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg4.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg4.reference
});
var sizes6 = {
  lg: defineStyle({
    [$size3.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size3.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size3.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle9,
  sizes: sizes6,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/code.mjs
var { variants: variants5, defaultProps } = badgeTheme;
var baseStyle10 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle10,
  variants: variants5,
  defaultProps
});

// node_modules/@chakra-ui/theme/dist/esm/components/container.mjs
var baseStyle11 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle11
});

// node_modules/@chakra-ui/theme/dist/esm/components/divider.mjs
var baseStyle12 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid4 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants6 = {
  solid: variantSolid4,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle12,
  variants: variants6,
  defaultProps: {
    variant: "solid"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/drawer.mjs
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg5 = cssVar("drawer-bg");
var $bs = cssVar("drawer-box-shadow");
function getSize2(value) {
  if (value === "full") {
    return definePartsStyle7({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle7({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg5.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg5.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg5.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle13 = definePartsStyle7((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn2(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
var sizes7 = {
  xs: getSize2("xs"),
  sm: getSize2("md"),
  md: getSize2("lg"),
  lg: getSize2("2xl"),
  xl: getSize2("4xl"),
  full: getSize2("full")
};
var drawerTheme = defineMultiStyleConfig7({
  baseStyle: baseStyle13,
  sizes: sizes7,
  defaultProps: {
    size: "xs"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/editable.mjs
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle14 = definePartsStyle8({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle14
});

// node_modules/@chakra-ui/theme/dist/esm/components/form-control.mjs
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg2 = cssVar("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg2.variable]: "colors.red.500",
  _dark: {
    [$fg2.variable]: "colors.red.300"
  },
  color: $fg2.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg2.variable]: "colors.gray.600",
  _dark: {
    [$fg2.variable]: "colors.whiteAlpha.600"
  },
  color: $fg2.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle15 = definePartsStyle9({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle15
});

// node_modules/@chakra-ui/theme/dist/esm/components/form-error.mjs
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg3 = cssVar("form-error-color");
var baseStyleText = defineStyle({
  [$fg3.variable]: `colors.red.500`,
  _dark: {
    [$fg3.variable]: `colors.red.300`
  },
  color: $fg3.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon3 = defineStyle({
  marginEnd: "0.5em",
  [$fg3.variable]: `colors.red.500`,
  _dark: {
    [$fg3.variable]: `colors.red.300`
  },
  color: $fg3.reference
});
var baseStyle16 = definePartsStyle10({
  text: baseStyleText,
  icon: baseStyleIcon3
});
var formErrorTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle16
});

// node_modules/@chakra-ui/theme/dist/esm/components/form-label.mjs
var baseStyle17 = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle17
});

// node_modules/@chakra-ui/theme/dist/esm/components/heading.mjs
var baseStyle18 = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes8 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle18,
  sizes: sizes8,
  defaultProps: {
    size: "xl"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/input.mjs
var { definePartsStyle: definePartsStyle11, defineMultiStyleConfig: defineMultiStyleConfig11 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var $height = cssVar("input-height");
var $fontSize = cssVar("input-font-size");
var $padding2 = cssVar("input-padding");
var $borderRadius = cssVar("input-border-radius");
var baseStyle19 = definePartsStyle11({
  addon: {
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding2.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height.reference,
    fontSize: $fontSize.reference,
    px: $padding2.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    [$fontSize.variable]: "fontSizes.lg",
    [$padding2.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.12"
  }),
  md: defineStyle({
    [$fontSize.variable]: "fontSizes.md",
    [$padding2.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height.variable]: "sizes.10"
  }),
  sm: defineStyle({
    [$fontSize.variable]: "fontSizes.sm",
    [$padding2.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.8"
  }),
  xs: defineStyle({
    [$fontSize.variable]: "fontSizes.xs",
    [$padding2.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height.variable]: "sizes.6"
  })
};
var sizes9 = {
  lg: definePartsStyle11({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle11({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle11({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle11({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline3 = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle11((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled2 = definePartsStyle11({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants7 = {
  outline: variantOutline3,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle19,
  sizes: sizes9,
  variants: variants7,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/kbd.mjs
var $bg6 = cssVar("kbd-bg");
var baseStyle20 = defineStyle({
  [$bg6.variable]: "colors.gray.100",
  _dark: {
    [$bg6.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg6.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle20
});

// node_modules/@chakra-ui/theme/dist/esm/components/link.mjs
var baseStyle21 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle21
});

// node_modules/@chakra-ui/theme/dist/esm/components/list.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon4 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle22 = definePartsStyle12({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle22
});

// node_modules/@chakra-ui/theme/dist/esm/components/menu.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg7 = cssVar("menu-bg");
var $shadow2 = cssVar("menu-shadow");
var baseStyleList = defineStyle({
  [$bg7.variable]: "#fff",
  [$shadow2.variable]: "shadows.sm",
  _dark: {
    [$bg7.variable]: "colors.gray.700",
    [$shadow2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: "dropdown",
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg7.reference,
  boxShadow: $shadow2.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg7.variable]: "colors.gray.100",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg7.variable]: "colors.gray.200",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg7.variable]: "colors.gray.100",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg7.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleIcon5 = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton2 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle23 = definePartsStyle13({
  button: baseStyleButton2,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon5,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle23
});

// node_modules/@chakra-ui/theme/dist/esm/components/modal.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg8 = cssVar("modal-bg");
var $shadow3 = cssVar("modal-shadow");
var baseStyleOverlay2 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog2 = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    borderRadius: "md",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : void 0,
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [$bg8.variable]: "colors.white",
    [$shadow3.variable]: "shadows.lg",
    _dark: {
      [$bg8.variable]: "colors.gray.700",
      [$shadow3.variable]: "shadows.dark-lg"
    },
    bg: $bg8.reference,
    boxShadow: $shadow3.reference
  };
});
var baseStyleHeader2 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody2 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter2 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle24 = definePartsStyle14((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: runIfFn2(baseStyleDialogContainer2, props),
  dialog: runIfFn2(baseStyleDialog2, props),
  header: baseStyleHeader2,
  closeButton: baseStyleCloseButton2,
  body: runIfFn2(baseStyleBody2, props),
  footer: baseStyleFooter2
}));
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle14({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle14({
    dialog: { maxW: value }
  });
}
var sizes10 = {
  xs: getSize3("xs"),
  sm: getSize3("sm"),
  md: getSize3("md"),
  lg: getSize3("lg"),
  xl: getSize3("xl"),
  "2xl": getSize3("2xl"),
  "3xl": getSize3("3xl"),
  "4xl": getSize3("4xl"),
  "5xl": getSize3("5xl"),
  "6xl": getSize3("6xl"),
  full: getSize3("full")
};
var modalTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle24,
  sizes: sizes10,
  defaultProps: { size: "md" }
});

// node_modules/@chakra-ui/theme/dist/esm/foundations/typography.mjs
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};

// node_modules/@chakra-ui/theme/dist/esm/components/number-input.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc2($stepperWidth).add("0.5rem").toString();
var $bg9 = cssVar2("number-input-bg");
var $fg4 = cssVar2("number-input-color");
var $border3 = cssVar2("number-input-border-color");
var baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = defineStyle(
  (props) => {
    var _a8;
    return ((_a8 = runIfFn2(inputTheme.baseStyle, props)) == null ? void 0 : _a8.field) ?? {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border3.reference,
  color: $fg4.reference,
  bg: $bg9.reference,
  [$fg4.variable]: "colors.chakra-body-text",
  [$border3.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg4.variable]: "colors.whiteAlpha.800",
    [$border3.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg9.variable]: "colors.gray.200",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle25 = definePartsStyle15((props) => ({
  root: baseStyleRoot,
  field: runIfFn2(baseStyleField, props) ?? {},
  stepperGroup: baseStyleStepperGroup,
  stepper: baseStyleStepper
}));
function getSize4(size2) {
  var _a8, _b3;
  const sizeStyle = (_a8 = inputTheme.sizes) == null ? void 0 : _a8[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = ((_b3 = sizeStyle.field) == null ? void 0 : _b3.fontSize) ?? "md";
  const fontSize = typography2.fontSizes[_fontSize];
  return definePartsStyle15({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc2(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes11 = {
  xs: getSize4("xs"),
  sm: getSize4("sm"),
  md: getSize4("md"),
  lg: getSize4("lg")
};
var numberInputTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle25,
  sizes: sizes11,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/esm/components/pin-input.mjs
var _a;
var baseStyle26 = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  textAlign: "center"
});
var sizes12 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a2;
var variants8 = {
  outline: defineStyle(
    (props) => {
      var _a8, _b3;
      return ((_b3 = runIfFn2((_a8 = inputTheme.variants) == null ? void 0 : _a8.outline, props)) == null ? void 0 : _b3.field) ?? {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a8, _b3;
      return ((_b3 = runIfFn2((_a8 = inputTheme.variants) == null ? void 0 : _a8.flushed, props)) == null ? void 0 : _b3.field) ?? {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a8, _b3;
      return ((_b3 = runIfFn2((_a8 = inputTheme.variants) == null ? void 0 : _a8.filled, props)) == null ? void 0 : _b3.field) ?? {};
    }
  ),
  unstyled: ((_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) ?? {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle26,
  sizes: sizes12,
  variants: variants8,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/esm/components/popover.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar2("popper-bg");
var $arrowBg = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({
  zIndex: "popover"
});
var baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader3 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody3 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter3 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle27 = definePartsStyle16({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader3,
  body: baseStyleBody3,
  footer: baseStyleFooter3,
  closeButton: baseStyleCloseButton3
});
var popoverTheme = defineMultiStyleConfig16({
  baseStyle: baseStyle27
});

// node_modules/@chakra-ui/theme/dist/esm/components/progress.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t2, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t2, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel3 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle28 = definePartsStyle17((props) => ({
  label: baseStyleLabel3,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props)
}));
var sizes13 = {
  xs: definePartsStyle17({
    track: { h: "1" }
  }),
  sm: definePartsStyle17({
    track: { h: "2" }
  }),
  md: definePartsStyle17({
    track: { h: "3" }
  }),
  lg: definePartsStyle17({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig17({
  sizes: sizes13,
  baseStyle: baseStyle28,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/radio.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig18, definePartsStyle: definePartsStyle18 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl2 = defineStyle((props) => {
  var _a8;
  const controlStyle = (_a8 = runIfFn2(checkboxTheme.baseStyle, props)) == null ? void 0 : _a8.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle29 = definePartsStyle18((props) => {
  var _a8, _b3, _c3, _d3;
  return {
    label: (_b3 = (_a8 = checkboxTheme).baseStyle) == null ? void 0 : _b3.call(_a8, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes14 = {
  md: definePartsStyle18({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle18({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle18({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle29,
  sizes: sizes14,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/select.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig19, definePartsStyle: definePartsStyle19 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg10 = cssVar("select-bg");
var _a3;
var baseStyleField2 = defineStyle({
  ...(_a3 = inputTheme.baseStyle) == null ? void 0 : _a3.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg10.reference,
  [$bg10.variable]: "colors.white",
  _dark: {
    [$bg10.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg10.reference
  }
});
var baseStyleIcon6 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle30 = definePartsStyle19({
  field: baseStyleField2,
  icon: baseStyleIcon6
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a4, _b, _c, _d, _e, _f, _g, _h;
var sizes15 = {
  lg: {
    ...(_a4 = inputTheme.sizes) == null ? void 0 : _a4.lg,
    field: {
      ...(_b = inputTheme.sizes) == null ? void 0 : _b.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c = inputTheme.sizes) == null ? void 0 : _c.md,
    field: {
      ...(_d = inputTheme.sizes) == null ? void 0 : _d.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e = inputTheme.sizes) == null ? void 0 : _e.sm,
    field: {
      ...(_f = inputTheme.sizes) == null ? void 0 : _f.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g = inputTheme.sizes) == null ? void 0 : _g.xs,
    field: {
      ...(_h = inputTheme.sizes) == null ? void 0 : _h.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle30,
  sizes: sizes15,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/esm/components/skeleton.mjs
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var baseStyle31 = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle31
});

// node_modules/@chakra-ui/theme/dist/esm/components/skip-link.mjs
var $bg11 = cssVar("skip-link-bg");
var baseStyle32 = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg11.variable]: "colors.white",
    _dark: {
      [$bg11.variable]: "colors.gray.700"
    },
    bg: $bg11.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle32
});

// node_modules/@chakra-ui/theme/dist/esm/components/slider.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig20, definePartsStyle: definePartsStyle20 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar("slider-thumb-size");
var $trackSize = cssVar("slider-track-size");
var $bg12 = cssVar("slider-bg");
var baseStyleContainer4 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: {
        h: "100%",
        px: calc($thumbSize.reference).divide(2).toString()
      },
      horizontal: {
        w: "100%",
        py: calc($thumbSize.reference).divide(2).toString()
      }
    })
  };
});
var baseStyleTrack2 = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg12.variable]: "colors.gray.200",
    _dark: {
      [$bg12.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg12.variable]: "colors.gray.300",
      _dark: {
        [$bg12.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg12.reference
  };
});
var baseStyleThumb = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg12.variable]: `colors.${c}.500`,
    _dark: {
      [$bg12.variable]: `colors.${c}.200`
    },
    bg: $bg12.reference
  };
});
var baseStyle33 = definePartsStyle20((props) => ({
  container: baseStyleContainer4(props),
  track: baseStyleTrack2(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle20({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes16 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle33,
  sizes: sizes16,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/spinner.mjs
var $size4 = cssVar2("spinner-size");
var baseStyle34 = defineStyle({
  width: [$size4.reference],
  height: [$size4.reference]
});
var sizes17 = {
  xs: defineStyle({
    [$size4.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size4.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size4.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size4.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size4.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle34,
  sizes: sizes17,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/stat.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig21, definePartsStyle: definePartsStyle21 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel4 = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon7 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle35 = definePartsStyle21({
  container: {},
  label: baseStyleLabel4,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon7
});
var sizes18 = {
  md: definePartsStyle21({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle35,
  sizes: sizes18,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/stepper.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = createMultiStyleConfigHelpers([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]);
var $size5 = cssVar("stepper-indicator-size");
var $iconSize = cssVar("stepper-icon-size");
var $titleFontSize = cssVar("stepper-title-font-size");
var $descFontSize = cssVar("stepper-description-font-size");
var $accentColor = cssVar("stepper-accent-color");
var baseStyle36 = definePartsStyle22(({ colorScheme: c }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.200`
    }
  },
  title: {
    fontSize: $titleFontSize.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: $descFontSize.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $titleFontSize.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: $iconSize.reference,
    height: $iconSize.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: $size5.reference,
    height: $size5.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: $accentColor.reference
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: $accentColor.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${$size5.reference} - 8px)`,
      top: `calc(${$size5.reference} + 4px)`,
      insetStart: `calc(${$size5.reference} / 2 - 1px)`
    }
  }
}));
var stepperTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle36,
  sizes: {
    xs: definePartsStyle22({
      stepper: {
        [$size5.variable]: "sizes.4",
        [$iconSize.variable]: "sizes.3",
        [$titleFontSize.variable]: "fontSizes.xs",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    sm: definePartsStyle22({
      stepper: {
        [$size5.variable]: "sizes.6",
        [$iconSize.variable]: "sizes.4",
        [$titleFontSize.variable]: "fontSizes.sm",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    md: definePartsStyle22({
      stepper: {
        [$size5.variable]: "sizes.8",
        [$iconSize.variable]: "sizes.5",
        [$titleFontSize.variable]: "fontSizes.md",
        [$descFontSize.variable]: "fontSizes.sm"
      }
    }),
    lg: definePartsStyle22({
      stepper: {
        [$size5.variable]: "sizes.10",
        [$iconSize.variable]: "sizes.6",
        [$titleFontSize.variable]: "fontSizes.lg",
        [$descFontSize.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/switch.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig23, definePartsStyle: definePartsStyle23 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar2("switch-track-width");
var $height2 = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc2.subtract($width, $height2);
var $translateX = cssVar2("switch-thumb-x");
var $bg13 = cssVar2("switch-bg");
var baseStyleTrack3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height2.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg13.variable]: "colors.gray.300",
    _dark: {
      [$bg13.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg13.variable]: `colors.${c}.500`,
      _dark: {
        [$bg13.variable]: `colors.${c}.200`
      }
    },
    bg: $bg13.reference
  };
});
var baseStyleThumb2 = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height2.reference],
  height: [$height2.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle37 = definePartsStyle23((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc2($diff).negate().toString()
    }
  },
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2
}));
var sizes19 = {
  sm: definePartsStyle23({
    container: {
      [$width.variable]: "1.375rem",
      [$height2.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle23({
    container: {
      [$width.variable]: "1.875rem",
      [$height2.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle23({
    container: {
      [$width.variable]: "2.875rem",
      [$height2.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle37,
  sizes: sizes19,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/table.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig24, definePartsStyle: definePartsStyle24 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle38 = definePartsStyle24({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle24((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle24((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants9 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes20 = {
  sm: definePartsStyle24({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle24({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle24({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig24({
  baseStyle: baseStyle38,
  variants: variants9,
  sizes: sizes20,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/tabs.mjs
var $fg5 = cssVar("tabs-color");
var $bg14 = cssVar("tabs-bg");
var $border4 = cssVar("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig25, definePartsStyle: definePartsStyle25 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot2 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle39 = definePartsStyle25((props) => ({
  root: baseStyleRoot2(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes21 = {
  sm: definePartsStyle25({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle25({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle25({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle25((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = isVertical ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg5.variable]: `colors.${c}.600`,
        _dark: {
          [$fg5.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg14.variable]: "colors.gray.200",
        _dark: {
          [$bg14.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg5.reference,
      bg: $bg14.reference
    }
  };
});
var variantEnclosed = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border4.variable]: "transparent",
      _selected: {
        [$fg5.variable]: `colors.${c}.600`,
        [$border4.variable]: `colors.white`,
        _dark: {
          [$fg5.variable]: `colors.${c}.300`,
          [$border4.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border4.reference
      },
      color: $fg5.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg14.variable]: "colors.gray.50",
      _dark: {
        [$bg14.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg14.variable]: "colors.white",
        [$fg5.variable]: `colors.${c}.600`,
        _dark: {
          [$bg14.variable]: "colors.gray.800",
          [$fg5.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg5.reference,
      bg: $bg14.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle25((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg5.variable]: "colors.gray.600",
      _dark: {
        [$fg5.variable]: "inherit"
      },
      _selected: {
        [$fg5.variable]: "colors.white",
        [$bg14.variable]: `colors.${c}.600`,
        _dark: {
          [$fg5.variable]: "colors.gray.800",
          [$bg14.variable]: `colors.${c}.300`
        }
      },
      color: $fg5.reference,
      bg: $bg14.reference
    }
  };
});
var variantUnstyled3 = definePartsStyle25({});
var variants10 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled3
};
var tabsTheme = defineMultiStyleConfig25({
  baseStyle: baseStyle39,
  sizes: sizes21,
  variants: variants10,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/tag.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig26, definePartsStyle: definePartsStyle26 } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var $bg15 = cssVar("tag-bg");
var $color = cssVar("tag-color");
var $shadow4 = cssVar("tag-shadow");
var $minH = cssVar("tag-min-height");
var $minW = cssVar("tag-min-width");
var $fontSize2 = cssVar("tag-font-size");
var $paddingX = cssVar("tag-padding-inline");
var baseStyleContainer5 = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [$color.variable]: vars.color.reference,
  [$bg15.variable]: vars.bg.reference,
  [$shadow4.variable]: vars.shadow.reference,
  color: $color.reference,
  bg: $bg15.reference,
  boxShadow: $shadow4.reference,
  borderRadius: "md",
  minH: $minH.reference,
  minW: $minW.reference,
  fontSize: $fontSize2.reference,
  px: $paddingX.reference,
  _focusVisible: {
    [$shadow4.variable]: "shadows.outline"
  }
});
var baseStyleLabel5 = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton4 = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle40 = definePartsStyle26({
  container: baseStyleContainer5,
  label: baseStyleLabel5,
  closeButton: baseStyleCloseButton4
});
var sizes22 = {
  sm: definePartsStyle26({
    container: {
      [$minH.variable]: "sizes.5",
      [$minW.variable]: "sizes.5",
      [$fontSize2.variable]: "fontSizes.xs",
      [$paddingX.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle26({
    container: {
      [$minH.variable]: "sizes.6",
      [$minW.variable]: "sizes.6",
      [$fontSize2.variable]: "fontSizes.sm",
      [$paddingX.variable]: "space.2"
    }
  }),
  lg: definePartsStyle26({
    container: {
      [$minH.variable]: "sizes.8",
      [$minW.variable]: "sizes.8",
      [$fontSize2.variable]: "fontSizes.md",
      [$paddingX.variable]: "space.3"
    }
  })
};
var variants11 = {
  subtle: definePartsStyle26((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.subtle(props)
    };
  }),
  solid: definePartsStyle26((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.solid(props)
    };
  }),
  outline: definePartsStyle26((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig26({
  variants: variants11,
  baseStyle: baseStyle40,
  sizes: sizes22,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/textarea.mjs
var _a5;
var baseStyle41 = defineStyle({
  ...(_a5 = inputTheme.baseStyle) == null ? void 0 : _a5.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a6;
var variants12 = {
  outline: defineStyle(
    (props) => {
      var _a8;
      return ((_a8 = inputTheme.variants) == null ? void 0 : _a8.outline(props).field) ?? {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a8;
      return ((_a8 = inputTheme.variants) == null ? void 0 : _a8.flushed(props).field) ?? {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a8;
      return ((_a8 = inputTheme.variants) == null ? void 0 : _a8.filled(props).field) ?? {};
    }
  ),
  unstyled: ((_a6 = inputTheme.variants) == null ? void 0 : _a6.unstyled.field) ?? {}
};
var _a7, _b2, _c2, _d2;
var sizes23 = {
  xs: ((_a7 = inputTheme.sizes) == null ? void 0 : _a7.xs.field) ?? {},
  sm: ((_b2 = inputTheme.sizes) == null ? void 0 : _b2.sm.field) ?? {},
  md: ((_c2 = inputTheme.sizes) == null ? void 0 : _c2.md.field) ?? {},
  lg: ((_d2 = inputTheme.sizes) == null ? void 0 : _d2.lg.field) ?? {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle41,
  sizes: sizes23,
  variants: variants12,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/esm/components/tooltip.mjs
var $bg16 = cssVar2("tooltip-bg");
var $fg6 = cssVar2("tooltip-fg");
var $arrowBg2 = cssVar2("popper-arrow-bg");
var baseStyle42 = defineStyle({
  bg: $bg16.reference,
  color: $fg6.reference,
  [$bg16.variable]: "colors.gray.700",
  [$fg6.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg16.variable]: "colors.gray.300",
    [$fg6.variable]: "colors.gray.900"
  },
  [$arrowBg2.variable]: $bg16.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle42
});

// node_modules/@chakra-ui/theme/dist/esm/components/index.mjs
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme,
  Stepper: stepperTheme
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/borders.mjs
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/breakpoints.mjs
var breakpoints2 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/colors.mjs
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  }
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/radius.mjs
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/shadows.mjs
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/transition.mjs
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/z-index.mjs
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/blur.mjs
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};

// node_modules/@chakra-ui/theme/dist/esm/foundations/index.mjs
var foundations = {
  breakpoints: breakpoints2,
  zIndices,
  radii,
  blur,
  colors,
  ...typography2,
  sizes,
  shadows,
  space: spacing,
  borders,
  transition: transition2
};

// node_modules/@chakra-ui/theme/dist/esm/semantic-tokens.mjs
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};

// node_modules/@chakra-ui/theme/dist/esm/styles.mjs
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
};

// node_modules/@chakra-ui/theme/dist/esm/utils/is-chakra-theme.mjs
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

// node_modules/@chakra-ui/theme/dist/esm/index.mjs
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
var baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};

// node_modules/@chakra-ui/react/dist/esm/provider/create-provider.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/provider/provider.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-provider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs
var import_react24 = __toESM(require_react(), 1);
var ColorModeContext = (0, import_react24.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = (0, import_react24.useContext)(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

// node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode.utils.mjs
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true, nonce } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      const dark = utils.query().matches ?? fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn2) {
      const mql = utils.query();
      const listener = (e) => {
        fn2(e.matches ? "dark" : "light");
      };
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css3 = document.createElement("style");
      css3.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      if (nonce !== void 0) {
        css3.nonce = nonce;
      }
      document.head.appendChild(css3);
      return () => {
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css3);
          });
        });
      };
    }
  };
  return utils;
}

// node_modules/@chakra-ui/react/dist/esm/color-mode/storage-manager.mjs
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get(init) {
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      let value;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
      }
      return value || init;
    },
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
  const match2 = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match2 == null ? void 0 : match2[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get(init) {
      if (cookie)
        return parseCookie(cookie, key);
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      return parseCookie(document.cookie, key) || init;
    },
    set(value) {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
var cookieStorageManager = createCookieStorageManager(STORAGE_KEY);
var cookieStorageManagerSSR = (cookie) => createCookieStorageManager(STORAGE_KEY, cookie);

// node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-provider.mjs
var noop = () => {
};
var useSafeLayoutEffect3 = isBrowser() ? import_react26.useLayoutEffect : import_react26.useEffect;
function getTheme(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
var ColorModeProvider = function ColorModeProvider2(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = localStorageManager
  } = props;
  const cache = __unsafe_useEmotionCache();
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = (0, import_react26.useState)(
    () => getTheme(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = (0, import_react26.useState)(
    () => getTheme(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = (0, import_react26.useMemo)(
    () => getColorModeUtils({
      preventTransition: disableTransitionOnChange,
      nonce: cache == null ? void 0 : cache.nonce
    }),
    [disableTransitionOnChange, cache == null ? void 0 : cache.nonce]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = (0, import_react26.useCallback)(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect3(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  (0, import_react26.useEffect)(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = (0, import_react26.useCallback)(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  (0, import_react26.useEffect)(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = (0, import_react26.useMemo)(
    () => ({
      colorMode: value ?? resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, children });
};
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
  const context = (0, import_react26.useMemo)(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
  const context = (0, import_react26.useMemo)(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
LightMode.displayName = "LightMode";

// node_modules/@chakra-ui/react/dist/esm/css-reset/css-reset.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var css2 = String.raw;
var vhPolyfill = css2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => (0, import_jsx_runtime2.jsx)(Global, { styles: vhPolyfill });
var CSSReset = ({ scope = "" }) => (0, import_jsx_runtime2.jsx)(
  Global,
  {
    styles: css2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
);

// node_modules/@chakra-ui/react/dist/esm/system/providers.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);
function ThemeProvider2(props) {
  const { cssVarsRoot, theme: theme2, children } = props;
  const computedTheme = (0, import_react29.useMemo)(() => toCSSVar(theme2), [theme2]);
  return (0, import_jsx_runtime3.jsxs)(ThemeProvider, { theme: computedTheme, children: [
    (0, import_jsx_runtime3.jsx)(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return (0, import_jsx_runtime3.jsx)(Global, { styles: (theme2) => ({ [selector]: theme2.__cssVars }) });
}
var [StylesProvider, useStyles] = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return createContext({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}
function GlobalStyle() {
  const { colorMode } = useColorMode();
  return (0, import_jsx_runtime3.jsx)(
    Global,
    {
      styles: (theme2) => {
        const styleObjectOrFn = memoizedGet(theme2, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme: theme2, colorMode });
        if (!globalStyles)
          return void 0;
        const styles2 = css(globalStyles)(theme2);
        return styles2;
      }
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/portal/portal-manager.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  const { children, zIndex } = props;
  return (0, import_jsx_runtime4.jsx)(PortalManagerContextProvider, { value: { zIndex }, children });
}
PortalManager.displayName = "PortalManager";

// node_modules/@chakra-ui/react/dist/esm/env/env.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);
var EnvironmentContext = (0, import_react30.createContext)({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = (0, import_react30.useReducer)((c) => c + 1, 0);
  useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return (0, import_react30.useContext)(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = (0, import_react30.useRef)(null);
  const context = (0, import_react30.useMemo)(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a8;
        return ((_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) ?? document;
      },
      getWindow: () => {
        var _a8;
        return ((_a8 = ref.current) == null ? void 0 : _a8.ownerDocument.defaultView) ?? window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return (0, import_jsx_runtime5.jsxs)(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && (0, import_jsx_runtime5.jsx)("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

// node_modules/@chakra-ui/react/dist/esm/provider/provider.mjs
var Provider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment,
    disableGlobalStyle
  } = props;
  const _children = (0, import_jsx_runtime6.jsx)(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return (0, import_jsx_runtime6.jsx)(ThemeProvider2, { theme: theme2, cssVarsRoot, children: (0, import_jsx_runtime6.jsxs)(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? (0, import_jsx_runtime6.jsx)(CSSReset, { scope: resetScope }) : (0, import_jsx_runtime6.jsx)(CSSPolyfill, {}),
        !disableGlobalStyle && (0, import_jsx_runtime6.jsx)(GlobalStyle, {}),
        portalZIndex ? (0, import_jsx_runtime6.jsx)(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

// node_modules/@chakra-ui/react/dist/esm/toast/toast.provider.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react42 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/toast/toast.component.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react35 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/toast/toast.utils.mjs
var findById = (arr, id) => arr.find((toast) => toast.id === id);
function findToast(toasts, id) {
  const position2 = getToastPosition(toasts, id);
  const index = position2 ? toasts[position2].findIndex((toast) => toast.id === id) : -1;
  return {
    position: position2,
    index
  };
}
function getToastPosition(toasts, id) {
  for (const [position2, values] of Object.entries(toasts)) {
    if (findById(values, id)) {
      return position2;
    }
  }
}
function getToastStyle(position2) {
  const isRighty = position2.includes("right");
  const isLefty = position2.includes("left");
  let alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
function getToastListStyle(position2) {
  const isTopOrBottom = position2 === "top" || position2 === "bottom";
  const margin = isTopOrBottom ? "0 auto" : void 0;
  const top2 = position2.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  const bottom2 = position2.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  const right2 = !position2.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  const left2 = !position2.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top: top2,
    bottom: bottom2,
    right: right2,
    left: left2
  };
}

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js
var React = __toESM(require_react());
init_emotion_is_prop_valid_esm();
var isDevelopment = true;
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Insertion = function Insertion2(_ref2) {
  var cache = _ref2.cache, serialized = _ref2.serialized, isStringTag = _ref2.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag, options) {
  {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      var templateStringsArr = args[0];
      if (templateStringsArr[0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2.push(templateStringsArr[0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (templateStringsArr[i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles2.push(args[i], templateStringsArr[i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = React.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as") continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return React.createElement(React.Fragment, null, React.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), React.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && isDevelopment) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      var newStyled2 = createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      }));
      return newStyled2.apply(void 0, styles2);
    };
    return Styled;
  };
};

// node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js
var import_react33 = __toESM(require_react());
init_emotion_is_prop_valid_esm();
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind(null);
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});

// node_modules/@chakra-ui/react/dist/esm/system/system.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/system/should-forward-prop.mjs
var allPropNames = /* @__PURE__ */ new Set([
  ...propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]);
var validHTMLProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function shouldForwardProp(prop) {
  return (validHTMLProps.has(prop) || !allPropNames.has(prop)) && prop[0] !== "_";
}

// node_modules/@chakra-ui/react/dist/esm/system/system.mjs
var emotion_styled = interopDefault(newStyled);
var toCSSObject = ({ baseStyle: baseStyle44 }) => (props) => {
  const { theme: theme2, css: cssProp, __css, sx, ...restProps } = props;
  const [styleProps2] = splitProps(restProps, isStyleProp);
  const finalBaseStyle = runIfFn(baseStyle44, props);
  const finalStyles = assignAfter(
    {},
    __css,
    finalBaseStyle,
    compact(styleProps2),
    sx
  );
  const computedCSS = css(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle: baseStyle44, ...styledOptions } = options ?? {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle: baseStyle44 });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = (0, import_react34.forwardRef)(
    function ChakraComponent2(props, ref) {
      const { children, ...restProps } = props;
      const { colorMode, forced } = useColorMode();
      const dataTheme = forced ? colorMode : void 0;
      return (0, import_react34.createElement)(
        Component,
        { ref, "data-theme": dataTheme, ...restProps },
        children
      );
    }
  );
  return chakraComponent;
}

// node_modules/@chakra-ui/react/dist/esm/system/factory.mjs
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();

// node_modules/@chakra-ui/react/dist/esm/toast/toast.component.mjs
var toastMotionVariants = {
  initial: (props) => {
    const { position: position2 } = props;
    const dir = ["top", "bottom"].includes(position2) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position2) ? 1 : -1;
    if (position2 === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = (0, import_react35.memo)((props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position: position2 = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants: motionVariants2 = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay, setDelay] = (0, import_react35.useState)(duration);
  const isPresent = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);
  const close = () => {
    if (isPresent)
      onRequestRemove();
  };
  (0, import_react35.useEffect)(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  const containerStyles = (0, import_react35.useMemo)(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = (0, import_react35.useMemo)(() => getToastStyle(position2), [position2]);
  return (0, import_jsx_runtime7.jsx)(
    motion.div,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants2,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position: position2 },
      style: toastStyle,
      children: (0, import_jsx_runtime7.jsx)(
        chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: runIfFn(message, { id, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";

// node_modules/@chakra-ui/react/dist/esm/toast/toast.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/alert/alert.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/alert/alert-icons.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/icon/icon.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/system/forward-ref.mjs
var import_react36 = __toESM(require_react(), 1);
function forwardRef2(component) {
  return (0, import_react36.forwardRef)(component);
}

// node_modules/@chakra-ui/react/dist/esm/system/use-style-config.mjs
var import_react39 = __toESM(require_react(), 1);
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);

// node_modules/@chakra-ui/react/dist/esm/system/use-theme.mjs
var import_react38 = __toESM(require_react(), 1);
function useTheme() {
  const theme2 = (0, import_react38.useContext)(
    ThemeContext
  );
  if (!theme2) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme2;
}

// node_modules/@chakra-ui/react/dist/esm/system/hooks.mjs
function useChakra() {
  const colorModeResult = useColorMode();
  const theme2 = useTheme();
  return { ...colorModeResult, theme: theme2 };
}
function getBreakpointValue(theme2, value, fallback) {
  if (value == null)
    return value;
  const getValue = (val) => {
    var _a8, _b3;
    return (_b3 = (_a8 = theme2.__breakpoints) == null ? void 0 : _a8.asArray) == null ? void 0 : _b3[val];
  };
  return getValue(value) ?? getValue(fallback) ?? fallback;
}
function getTokenValue(theme2, value, fallback) {
  if (value == null)
    return value;
  const getValue = (val) => {
    var _a8, _b3;
    return (_b3 = (_a8 = theme2.__cssMap) == null ? void 0 : _a8[val]) == null ? void 0 : _b3.value;
  };
  return getValue(value) ?? getValue(fallback) ?? fallback;
}
function useToken(scale2, token, fallback) {
  const theme2 = useTheme();
  return getToken(scale2, token, fallback)(theme2);
}
function getToken(scale2, token, fallback) {
  const _token = Array.isArray(token) ? token : [token];
  const _fallback = Array.isArray(fallback) ? fallback : [fallback];
  return (theme2) => {
    const fallbackArr = _fallback.filter(Boolean);
    const result = _token.map((token2, index) => {
      if (scale2 === "breakpoints") {
        return getBreakpointValue(theme2, token2, fallbackArr[index] ?? token2);
      }
      const path = `${scale2}.${token2}`;
      return getTokenValue(theme2, path, fallbackArr[index] ?? token2);
    });
    return Array.isArray(token) ? result : result[0];
  };
}

// node_modules/@chakra-ui/react/dist/esm/system/use-style-config.mjs
function useStyleConfigImpl(themeKey, props = {}) {
  const { styleConfig: styleConfigProp, ...rest } = props;
  const { theme: theme2, colorMode } = useChakra();
  const themeStyleConfig = themeKey ? memoizedGet(theme2, `components.${themeKey}`) : void 0;
  const styleConfig = styleConfigProp || themeStyleConfig;
  const mergedProps = (0, import_lodash.default)(
    { theme: theme2, colorMode },
    (styleConfig == null ? void 0 : styleConfig.defaultProps) ?? {},
    compact(omit(rest, ["children"])),
    (obj, src) => !obj ? src : void 0
  );
  const stylesRef = (0, import_react39.useRef)({});
  if (styleConfig) {
    const getStyles4 = resolveStyleConfig(styleConfig);
    const styles2 = getStyles4(mergedProps);
    const isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}

// node_modules/@chakra-ui/react/dist/esm/icon/icon.mjs
var fallbackIcon = {
  path: (0, import_jsx_runtime8.jsxs)("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    (0, import_jsx_runtime8.jsx)(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    (0, import_jsx_runtime8.jsx)(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    (0, import_jsx_runtime8.jsx)("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
};
var Icon = forwardRef2((props, ref) => {
  const {
    as: element,
    viewBox,
    color: color2 = "currentColor",
    focusable = false,
    children,
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-icon", className);
  const customStyles = useStyleConfig("Icon", props);
  const styles2 = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: color2,
    ...__css,
    ...customStyles
  };
  const shared = {
    ref,
    focusable,
    className: _className,
    __css: styles2
  };
  const _viewBox = viewBox ?? fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return (0, import_jsx_runtime8.jsx)(chakra.svg, { as: element, ...shared, ...rest });
  }
  const _path = children ?? fallbackIcon.path;
  return (0, import_jsx_runtime8.jsx)(chakra.svg, { verticalAlign: "middle", viewBox: _viewBox, ...shared, ...rest, children: _path });
});
Icon.displayName = "Icon";

// node_modules/@chakra-ui/react/dist/esm/alert/alert-icons.mjs
function CheckIcon(props) {
  return (0, import_jsx_runtime9.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime9.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function InfoIcon(props) {
  return (0, import_jsx_runtime9.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime9.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function WarningIcon(props) {
  return (0, import_jsx_runtime9.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime9.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}

// node_modules/@chakra-ui/react/dist/esm/spinner/spinner.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = forwardRef2((props, ref) => {
  const styles2 = useStyleConfig("Spinner", props);
  const {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className,
    ...rest
  } = omitThemingProps(props);
  const _className = cx("chakra-spinner", className);
  const spinnerStyles = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
    ...styles2
  };
  return (0, import_jsx_runtime10.jsx)(
    chakra.div,
    {
      ref,
      __css: spinnerStyles,
      className: _className,
      ...rest,
      children: label && (0, import_jsx_runtime10.jsx)(chakra.span, { srOnly: true, children: label })
    }
  );
});
Spinner.displayName = "Spinner";

// node_modules/@chakra-ui/react/dist/esm/alert/alert-context.mjs
var [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

// node_modules/@chakra-ui/react/dist/esm/alert/alert.mjs
var Alert = forwardRef2(function Alert2(props, ref) {
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = props.colorScheme ?? getStatusColorScheme(status);
  const styles2 = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = defineStyle({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles2.container
  });
  return (0, import_jsx_runtime11.jsx)(AlertProvider, { value: { status }, children: (0, import_jsx_runtime11.jsx)(AlertStylesProvider, { value: styles2, children: (0, import_jsx_runtime11.jsx)(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

// node_modules/@chakra-ui/react/dist/esm/alert/alert-icon.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles2 = useAlertStyles();
  const css3 = status === "loading" ? styles2.spinner : styles2.icon;
  return (0, import_jsx_runtime12.jsx)(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css3,
      children: props.children || (0, import_jsx_runtime12.jsx)(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

// node_modules/@chakra-ui/react/dist/esm/alert/alert-title.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var AlertTitle = forwardRef2(
  function AlertTitle2(props, ref) {
    const styles2 = useAlertStyles();
    const { status } = useAlertContext();
    return (0, import_jsx_runtime13.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles2.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

// node_modules/@chakra-ui/react/dist/esm/alert/alert-description.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var AlertDescription = forwardRef2(
  function AlertDescription2(props, ref) {
    const { status } = useAlertContext();
    const styles2 = useAlertStyles();
    const descriptionStyles = defineStyle({
      display: "inline",
      ...styles2.description
    });
    return (0, import_jsx_runtime14.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

// node_modules/@chakra-ui/react/dist/esm/close-button/close-button.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function CloseIcon(props) {
  return (0, import_jsx_runtime15.jsx)(Icon, { focusable: "false", "aria-hidden": true, ...props, children: (0, import_jsx_runtime15.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var CloseButton = forwardRef2(
  function CloseButton2(props, ref) {
    const styles2 = useStyleConfig("CloseButton", props);
    const { children, isDisabled, __css, ...rest } = omitThemingProps(props);
    const baseStyle44 = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return (0, import_jsx_runtime15.jsx)(
      chakra.button,
      {
        type: "button",
        "aria-label": "Close",
        ref,
        disabled: isDisabled,
        __css: {
          ...baseStyle44,
          ...styles2,
          ...__css
        },
        ...rest,
        children: children || (0, import_jsx_runtime15.jsx)(CloseIcon, { width: "1em", height: "1em" })
      }
    );
  }
);
CloseButton.displayName = "CloseButton";

// node_modules/@chakra-ui/react/dist/esm/toast/toast.mjs
var Toast = (props) => {
  const {
    status,
    variant = "solid",
    id,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id ? {
    root: `toast-${id}`,
    title: `toast-${id}-title`,
    description: `toast-${id}-description`
  } : void 0;
  return (0, import_jsx_runtime16.jsxs)(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids == null ? void 0 : ids.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        (0, import_jsx_runtime16.jsx)(AlertIcon, { children: icon }),
        (0, import_jsx_runtime16.jsxs)(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && (0, import_jsx_runtime16.jsx)(AlertTitle, { id: ids == null ? void 0 : ids.title, children: title }),
          description && (0, import_jsx_runtime16.jsx)(AlertDescription, { id: ids == null ? void 0 : ids.description, display: "block", children: description })
        ] }),
        isClosable && (0, import_jsx_runtime16.jsx)(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent2 = Toast } = options;
  const renderToast = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return (0, import_jsx_runtime16.jsx)(ToastComponent2, { ...props, ...options });
  };
  return renderToast;
}

// node_modules/@chakra-ui/react/dist/esm/toast/toast.store.mjs
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  let state2 = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (setStateFn) => {
    state2 = setStateFn(state2);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state2,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    /**
     * Delete a toast record at its position
     */
    removeToast: (id, position2) => {
      setState((prevState) => ({
        ...prevState,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [position2]: prevState[position2].filter((toast) => toast.id != id)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position: position2, id } = toast;
      setState((prevToasts) => {
        const isTop = position2.includes("top");
        const toasts = isTop ? [toast, ...prevToasts[position2] ?? []] : [...prevToasts[position2] ?? [], toast];
        return {
          ...prevToasts,
          [position2]: toasts
        };
      });
      return id;
    },
    update: (id, options) => {
      if (!id)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position: position2, index } = findToast(nextState, id);
        if (position2 && index !== -1) {
          nextState[position2][index] = {
            ...nextState[position2][index],
            ...options,
            message: createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions ?? allPositions;
        return positionsToClose.reduce(
          (acc, position2) => {
            acc[position2] = prev[position2].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev }
        );
      });
    },
    close: (id) => {
      setState((prevState) => {
        const position2 = getToastPosition(prevState, id);
        if (!position2)
          return prevState;
        return {
          ...prevState,
          [position2]: prevState[position2].map((toast) => {
            if (toast.id == id) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id) => Boolean(findToast(toastStore.getState(), id).position)
  };
}
var counter = 0;
function createToast(message, options = {}) {
  counter += 1;
  const id = options.id ?? counter;
  const position2 = options.position ?? "bottom";
  return {
    id,
    message,
    position: position2,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id), position2),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}

// node_modules/@chakra-ui/react/dist/esm/portal/portal.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react41 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var [PortalContextProvider, usePortalContext] = createContext({
  strict: false,
  name: "PortalContext"
});
var PORTAL_CLASSNAME = "chakra-portal";
var PORTAL_SELECTOR = `.chakra-portal`;
var Container = (props) => (0, import_jsx_runtime17.jsx)(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: props.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: props.children
  }
);
var DefaultPortal = (props) => {
  const { appendToParentPortal, children } = props;
  const [tempNode, setTempNode] = (0, import_react41.useState)(null);
  const portal = (0, import_react41.useRef)(null);
  const [, forceUpdate] = (0, import_react41.useState)({});
  (0, import_react41.useEffect)(() => forceUpdate({}), []);
  const parentPortal = usePortalContext();
  const manager = usePortalManager();
  useSafeLayoutEffect(() => {
    if (!tempNode)
      return;
    const doc = tempNode.ownerDocument;
    const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;
    if (!host)
      return;
    portal.current = doc.createElement("div");
    portal.current.className = PORTAL_CLASSNAME;
    host.appendChild(portal.current);
    forceUpdate({});
    const portalNode = portal.current;
    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode]);
  const _children = (manager == null ? void 0 : manager.zIndex) ? (0, import_jsx_runtime17.jsx)(Container, { zIndex: manager == null ? void 0 : manager.zIndex, children }) : children;
  return portal.current ? (0, import_react_dom.createPortal)(
    (0, import_jsx_runtime17.jsx)(PortalContextProvider, { value: portal.current, children: _children }),
    portal.current
  ) : (0, import_jsx_runtime17.jsx)(
    "span",
    {
      ref: (el) => {
        if (el)
          setTempNode(el);
      }
    }
  );
};
var ContainerPortal = (props) => {
  const { children, containerRef, appendToParentPortal } = props;
  const containerEl = containerRef.current;
  const host = containerEl ?? (typeof window !== "undefined" ? document.body : void 0);
  const portal = (0, import_react41.useMemo)(() => {
    const node2 = containerEl == null ? void 0 : containerEl.ownerDocument.createElement("div");
    if (node2)
      node2.className = PORTAL_CLASSNAME;
    return node2;
  }, [containerEl]);
  const [, forceUpdate] = (0, import_react41.useState)({});
  useSafeLayoutEffect(() => forceUpdate({}), []);
  useSafeLayoutEffect(() => {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return (0, import_react_dom.createPortal)(
      (0, import_jsx_runtime17.jsx)(PortalContextProvider, { value: appendToParentPortal ? portal : null, children }),
      portal
    );
  }
  return null;
};
function Portal(props) {
  const portalProps = {
    appendToParentPortal: true,
    ...props
  };
  const { containerRef, ...rest } = portalProps;
  return containerRef ? (0, import_jsx_runtime17.jsx)(ContainerPortal, { containerRef, ...rest }) : (0, import_jsx_runtime17.jsx)(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

// node_modules/@chakra-ui/react/dist/esm/toast/toast.provider.mjs
var [ToastOptionProvider, useToastOptionContext] = createContext({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = (props) => {
  const state2 = (0, import_react42.useSyncExternalStore)(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants: motionVariants2,
    component: Component = ToastComponent,
    portalProps,
    animatePresenceProps
  } = props;
  const stateKeys = Object.keys(state2);
  const toastList = stateKeys.map((position2) => {
    const toasts = state2[position2];
    return (0, import_jsx_runtime18.jsx)(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${position2}`,
        id: `chakra-toast-manager-${position2}`,
        style: getToastListStyle(position2),
        children: (0, import_jsx_runtime18.jsx)(AnimatePresence, { ...animatePresenceProps, initial: false, children: toasts.map((toast) => (0, import_jsx_runtime18.jsx)(
          Component,
          {
            motionVariants: motionVariants2,
            ...toast
          },
          toast.id
        )) })
      },
      position2
    );
  });
  return (0, import_jsx_runtime18.jsx)(Portal, { ...portalProps, children: toastList });
};

// node_modules/@chakra-ui/react/dist/esm/provider/create-provider.mjs
var createProvider = (providerTheme) => {
  return function ChakraProvider2({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return (0, import_jsx_runtime19.jsxs)(Provider, { theme: theme2, ...restProps, children: [
      (0, import_jsx_runtime19.jsx)(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      (0, import_jsx_runtime19.jsx)(ToastProvider, { ...toastOptions })
    ] });
  };
};

// node_modules/@chakra-ui/react/dist/esm/chakra-base-provider.mjs
var ChakraBaseProvider = createProvider(baseTheme);

// node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs
var ChakraProvider = createProvider(theme);

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react46 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/descendant/use-descendant.mjs
var import_react44 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/descendant/utils.mjs
var import_react43 = __toESM(require_react(), 1);
function sortNodes(nodes) {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b);
    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    }
    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
      throw Error("Cannot sort the given nodes.");
    } else {
      return 0;
    }
  });
}
var isElement = (el) => typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
function getNextIndex2(current, max2, loop) {
  let next = current + 1;
  if (loop && next >= max2)
    next = 0;
  return next;
}
function getPrevIndex(current, max2, loop) {
  let next = current - 1;
  if (loop && next < 0)
    next = max2;
  return next;
}
var useSafeLayoutEffect4 = typeof window !== "undefined" ? import_react43.useLayoutEffect : import_react43.useEffect;
var cast2 = (value) => value;

// node_modules/@chakra-ui/react/dist/esm/descendant/descendant.mjs
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var DescendantsManager = class {
  constructor() {
    __publicField2(this, "descendants", /* @__PURE__ */ new Map());
    __publicField2(this, "register", (nodeOrOptions) => {
      if (nodeOrOptions == null)
        return;
      if (isElement(nodeOrOptions)) {
        return this.registerNode(nodeOrOptions);
      }
      return (node2) => {
        this.registerNode(node2, nodeOrOptions);
      };
    });
    __publicField2(this, "unregister", (node2) => {
      this.descendants.delete(node2);
      const sorted = sortNodes(Array.from(this.descendants.keys()));
      this.assignIndex(sorted);
    });
    __publicField2(this, "destroy", () => {
      this.descendants.clear();
    });
    __publicField2(this, "assignIndex", (descendants) => {
      this.descendants.forEach((descendant) => {
        const index = descendants.indexOf(descendant.node);
        descendant.index = index;
        descendant.node.dataset["index"] = descendant.index.toString();
      });
    });
    __publicField2(this, "count", () => this.descendants.size);
    __publicField2(this, "enabledCount", () => this.enabledValues().length);
    __publicField2(this, "values", () => {
      const values = Array.from(this.descendants.values());
      return values.sort((a, b) => a.index - b.index);
    });
    __publicField2(this, "enabledValues", () => {
      return this.values().filter((descendant) => !descendant.disabled);
    });
    __publicField2(this, "item", (index) => {
      if (this.count() === 0)
        return void 0;
      return this.values()[index];
    });
    __publicField2(this, "enabledItem", (index) => {
      if (this.enabledCount() === 0)
        return void 0;
      return this.enabledValues()[index];
    });
    __publicField2(this, "first", () => this.item(0));
    __publicField2(this, "firstEnabled", () => this.enabledItem(0));
    __publicField2(this, "last", () => this.item(this.descendants.size - 1));
    __publicField2(this, "lastEnabled", () => {
      const lastIndex = this.enabledValues().length - 1;
      return this.enabledItem(lastIndex);
    });
    __publicField2(this, "indexOf", (node2) => {
      var _a8;
      if (!node2)
        return -1;
      return ((_a8 = this.descendants.get(node2)) == null ? void 0 : _a8.index) ?? -1;
    });
    __publicField2(this, "enabledIndexOf", (node2) => {
      if (node2 == null)
        return -1;
      return this.enabledValues().findIndex((i) => i.node.isSameNode(node2));
    });
    __publicField2(this, "next", (index, loop = true) => {
      const next = getNextIndex2(index, this.count(), loop);
      return this.item(next);
    });
    __publicField2(this, "nextEnabled", (index, loop = true) => {
      const item = this.item(index);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const nextEnabledIndex = getNextIndex2(
        enabledIndex,
        this.enabledCount(),
        loop
      );
      return this.enabledItem(nextEnabledIndex);
    });
    __publicField2(this, "prev", (index, loop = true) => {
      const prev = getPrevIndex(index, this.count() - 1, loop);
      return this.item(prev);
    });
    __publicField2(this, "prevEnabled", (index, loop = true) => {
      const item = this.item(index);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const prevEnabledIndex = getPrevIndex(
        enabledIndex,
        this.enabledCount() - 1,
        loop
      );
      return this.enabledItem(prevEnabledIndex);
    });
    __publicField2(this, "registerNode", (node2, options) => {
      if (!node2 || this.descendants.has(node2))
        return;
      const keys2 = Array.from(this.descendants.keys()).concat(node2);
      const sorted = sortNodes(keys2);
      if (options == null ? void 0 : options.disabled) {
        options.disabled = !!options.disabled;
      }
      const descendant = { node: node2, index: -1, ...options };
      this.descendants.set(node2, descendant);
      this.assignIndex(sorted);
    });
  }
};

// node_modules/@chakra-ui/react/dist/esm/descendant/use-descendant.mjs
function createDescendantContext() {
  const [DescendantsContextProvider, useDescendantsContext] = createContext({
    name: "DescendantsProvider",
    errorMessage: "useDescendantsContext must be used within DescendantsProvider"
  });
  const useDescendant = (options) => {
    const descendants = useDescendantsContext();
    const [index, setIndex] = (0, import_react44.useState)(-1);
    const ref = (0, import_react44.useRef)(null);
    useSafeLayoutEffect4(() => {
      return () => {
        if (!ref.current)
          return;
        descendants.unregister(ref.current);
      };
    }, []);
    useSafeLayoutEffect4(() => {
      if (!ref.current)
        return;
      const dataIndex = Number(ref.current.dataset["index"]);
      if (index != dataIndex && !Number.isNaN(dataIndex)) {
        setIndex(dataIndex);
      }
    });
    const refCallback = options ? cast2(descendants.register(options)) : cast2(descendants.register);
    return {
      descendants,
      index,
      enabledIndex: descendants.enabledIndexOf(ref.current),
      register: mergeRefs(refCallback, ref)
    };
  };
  const useDescendants = () => {
    const descendants = (0, import_react44.useRef)(new DescendantsManager());
    useSafeLayoutEffect4(() => {
      return () => descendants.current.destroy();
    });
    return descendants.current;
  };
  return [
    // context provider
    DescendantsContextProvider,
    // call this when you need to read from context
    useDescendantsContext,
    // descendants state information, to be called and passed to `ContextProvider`
    useDescendants,
    // descendant index information
    useDescendant
  ];
}

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-context.mjs
var [AccordionStylesProvider, useAccordionStyles] = createContext({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
var [AccordionItemProvider, useAccordionItemContext] = createContext({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
var [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = createDescendantContext();

// node_modules/@chakra-ui/react/dist/esm/accordion/use-accordion.mjs
var import_react45 = __toESM(require_react(), 1);
function useAccordion(props) {
  const {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle,
    ...htmlProps
  } = props;
  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  const descendants = useAccordionDescendants();
  const [focusedIndex, setFocusedIndex] = (0, import_react45.useState)(-1);
  (0, import_react45.useEffect)(() => {
    return () => {
      setFocusedIndex(-1);
    };
  }, []);
  const [index, setIndex] = useControllableState({
    value: indexProp,
    defaultValue() {
      if (allowMultiple)
        return defaultIndex ?? [];
      return defaultIndex ?? -1;
    },
    onChange
  });
  const getAccordionItemProps = (idx) => {
    let isOpen = false;
    if (idx !== null) {
      isOpen = Array.isArray(index) ? index.includes(idx) : index === idx;
    }
    const onChange2 = (isOpen2) => {
      if (idx === null)
        return;
      if (allowMultiple && Array.isArray(index)) {
        const nextState = isOpen2 ? index.concat(idx) : index.filter((i) => i !== idx);
        setIndex(nextState);
      } else if (isOpen2) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };
    return { isOpen, onChange: onChange2 };
  };
  return {
    index,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
var [AccordionProvider, useAccordionContext] = createContext({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function useAccordionItem(props) {
  const { isDisabled, isFocusable: isFocusable2, id, ...htmlProps } = props;
  const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
  const buttonRef = (0, import_react45.useRef)(null);
  const reactId = (0, import_react45.useId)();
  const uid = id ?? reactId;
  const buttonId = `accordion-button-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  focusableNotDisabledWarning(props);
  const { register, index, descendants } = useAccordionDescendant({
    disabled: isDisabled && !isFocusable2
  });
  const { isOpen, onChange } = getAccordionItemProps(
    index === -1 ? null : index
  );
  warnIfOpenAndDisabled({ isOpen, isDisabled });
  const onOpen = () => {
    onChange == null ? void 0 : onChange(true);
  };
  const onClose = () => {
    onChange == null ? void 0 : onChange(false);
  };
  const onClick = (0, import_react45.useCallback)(() => {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  const onKeyDown = (0, import_react45.useCallback)(
    (event) => {
      const keyMap = {
        ArrowDown: () => {
          const next = descendants.nextEnabled(index);
          next == null ? void 0 : next.node.focus();
        },
        ArrowUp: () => {
          const prev = descendants.prevEnabled(index);
          prev == null ? void 0 : prev.node.focus();
        },
        Home: () => {
          const first = descendants.firstEnabled();
          first == null ? void 0 : first.node.focus();
        },
        End: () => {
          const last = descendants.lastEnabled();
          last == null ? void 0 : last.node.focus();
        }
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, index]
  );
  const onFocus3 = (0, import_react45.useCallback)(() => {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  const getButtonProps = (0, import_react45.useCallback)(
    function getButtonProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        type: "button",
        ref: mergeRefs(register, buttonRef, ref),
        id: buttonId,
        disabled: !!isDisabled,
        "aria-expanded": !!isOpen,
        "aria-controls": panelId,
        onClick: callAllHandlers(props2.onClick, onClick),
        onFocus: callAllHandlers(props2.onFocus, onFocus3),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown)
      };
    },
    [
      buttonId,
      isDisabled,
      isOpen,
      onClick,
      onFocus3,
      onKeyDown,
      panelId,
      register
    ]
  );
  const getPanelProps = (0, import_react45.useCallback)(
    function getPanelProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        ref,
        role: "region",
        id: panelId,
        "aria-labelledby": buttonId,
        hidden: !isOpen
      };
    },
    [buttonId, isOpen, panelId]
  );
  return {
    isOpen,
    isDisabled,
    isFocusable: isFocusable2,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}
function allowMultipleWarning(props) {
  const index = props.index || props.defaultIndex;
  const condition = index != null && !Array.isArray(index) && props.allowMultiple;
  warn({
    condition: !!condition,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof index},`
  });
}
function allowMultipleAndAllowToggleWarning(props) {
  warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: `If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not`
  });
}
function focusableNotDisabledWarning(props) {
  warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function warnIfOpenAndDisabled(props) {
  warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion.mjs
var Accordion = forwardRef2(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles2 = useMultiStyleConfig("Accordion", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion(ownProps);
  const ctx = (0, import_react46.useMemo)(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return (0, import_jsx_runtime20.jsx)(AccordionDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime20.jsx)(AccordionProvider, { value: ctx, children: (0, import_jsx_runtime20.jsx)(AccordionStylesProvider, { value: styles2, children: (0, import_jsx_runtime20.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: cx("chakra-accordion", props.className),
      __css: styles2.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-button.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var AccordionButton = forwardRef2(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles2 = useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles2.button
    };
    return (0, import_jsx_runtime21.jsx)(
      chakra.button,
      {
        ...buttonProps,
        className: cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-icon.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
function AccordionIcon(props) {
  const { isOpen, isDisabled } = useAccordionItemContext();
  const { reduceMotion } = useAccordionContext();
  const _className = cx("chakra-accordion__icon", props.className);
  const styles2 = useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles2.icon
  };
  return (0, import_jsx_runtime22.jsx)(
    Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: (0, import_jsx_runtime22.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
AccordionIcon.displayName = "AccordionIcon";

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-item.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react47 = __toESM(require_react(), 1);
var AccordionItem = forwardRef2(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordionItem(props);
    const styles2 = useAccordionStyles();
    const containerStyles = defineStyle({
      ...styles2.container,
      overflowAnchor: "none"
    });
    const ctx = (0, import_react47.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime23.jsx)(AccordionItemProvider, { value: ctx, children: (0, import_jsx_runtime23.jsx)(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: cx("chakra-accordion__item", className),
        __css: containerStyles,
        children: typeof children === "function" ? children({
          isExpanded: !!context.isOpen,
          isDisabled: !!context.isDisabled
        }) : children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-panel.mjs
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/transition/collapse.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react48 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/transition/transition-utils.mjs
var TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
};
var TRANSITION_VARIANTS = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function getSlideTransition(options) {
  const side = (options == null ? void 0 : options.direction) ?? "right";
  switch (side) {
    case "right":
      return TRANSITION_VARIANTS.slideRight;
    case "left":
      return TRANSITION_VARIANTS.slideLeft;
    case "bottom":
      return TRANSITION_VARIANTS.slideDown;
    case "top":
      return TRANSITION_VARIANTS.slideUp;
    default:
      return TRANSITION_VARIANTS.slideRight;
  }
}
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var withDelay = {
  enter: (transition3, delay) => ({
    ...transition3,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["enter"]
  }),
  exit: (transition3, delay) => ({
    ...transition3,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["exit"]
  })
};

// node_modules/@chakra-ui/react/dist/esm/transition/collapse.mjs
var isNumeric2 = (value) => value != null && parseInt(value.toString(), 10) > 0;
var defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: TRANSITION_EASINGS.ease }
  }
};
var variants13 = {
  exit: ({
    animateOpacity,
    startingHeight,
    transition: transition3,
    transitionEnd,
    delay
  }) => ({
    ...animateOpacity && { opacity: isNumeric2(startingHeight) ? 1 : 0 },
    height: startingHeight,
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit,
    transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(defaultTransitions.exit, delay)
  }),
  enter: ({
    animateOpacity,
    endingHeight,
    transition: transition3,
    transitionEnd,
    delay
  }) => ({
    ...animateOpacity && { opacity: 1 },
    height: endingHeight,
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter,
    transition: (transition3 == null ? void 0 : transition3.enter) ?? withDelay.enter(defaultTransitions.enter, delay)
  })
};
var Collapse = (0, import_react48.forwardRef)(
  (props, ref) => {
    const {
      in: isOpen,
      unmountOnExit,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = "auto",
      style,
      className,
      transition: transition3,
      transitionEnd,
      animatePresenceProps,
      ...rest
    } = props;
    const [mounted, setMounted] = (0, import_react48.useState)(false);
    (0, import_react48.useEffect)(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    warn({
      condition: Number(startingHeight) > 0 && !!unmountOnExit,
      message: `startingHeight and unmountOnExit are mutually exclusive. You can't use them together`
    });
    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0;
    const custom = {
      startingHeight,
      endingHeight,
      animateOpacity,
      transition: !mounted ? { enter: { duration: 0 } } : transition3,
      transitionEnd: {
        enter: transitionEnd == null ? void 0 : transitionEnd.enter,
        exit: unmountOnExit ? transitionEnd == null ? void 0 : transitionEnd.exit : {
          ...transitionEnd == null ? void 0 : transitionEnd.exit,
          display: hasStartingHeight ? "block" : "none"
        }
      }
    };
    const show = unmountOnExit ? isOpen : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    return (0, import_jsx_runtime24.jsx)(
      AnimatePresence,
      {
        ...animatePresenceProps,
        initial: false,
        custom,
        children: show && (0, import_jsx_runtime24.jsx)(
          motion.div,
          {
            ref,
            ...rest,
            className: cx("chakra-collapse", className),
            style: {
              overflow: "hidden",
              display: "block",
              ...style
            },
            custom,
            variants: variants13,
            initial: unmountOnExit ? "exit" : false,
            animate,
            exit: "exit"
          }
        )
      }
    );
  }
);
Collapse.displayName = "Collapse";

// node_modules/@chakra-ui/react/dist/esm/accordion/accordion-panel.mjs
var AccordionPanel = forwardRef2(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordionContext();
    const { getPanelProps, isOpen } = useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = cx("chakra-accordion__panel", className);
    const styles2 = useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = (0, import_jsx_runtime25.jsx)(chakra.div, { ...panelProps, __css: styles2.panel, className: _className });
    if (!reduceMotion) {
      return (0, import_jsx_runtime25.jsx)(Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

// node_modules/@chakra-ui/react/dist/esm/accordion/use-accordion-item-state.mjs
function useAccordionItemState() {
  const { isOpen, isDisabled, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled, onOpen };
}

// node_modules/@chakra-ui/react/dist/esm/aspect-ratio/aspect-ratio.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);
var AspectRatio = forwardRef2(
  function(props, ref) {
    const { ratio = 4 / 3, children, className, ...rest } = props;
    const child = import_react49.Children.only(children);
    const _className = cx("chakra-aspect-ratio", className);
    return (0, import_jsx_runtime26.jsx)(
      chakra.div,
      {
        ref,
        position: "relative",
        className: _className,
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: mapResponsive(ratio, (r2) => `${1 / r2 * 100}%`)
        },
        __css: {
          "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          "& > img, & > video": {
            objectFit: "cover"
          }
        },
        ...rest,
        children: child
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-context.mjs
var [AvatarStylesProvider, useAvatarStyles] = createContext({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-image.mjs
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react51 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-name.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
function initials(name) {
  const names = name.trim().split(" ");
  const firstName = names[0] ?? "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles2 = useAvatarStyles();
  return (0, import_jsx_runtime27.jsx)(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles2.label, children: name ? getInitials == null ? void 0 : getInitials(name) : null });
}
AvatarName.displayName = "AvatarName";

// node_modules/@chakra-ui/react/dist/esm/avatar/generic-avatar-icon.mjs
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var GenericAvatarIcon = (props) => (0, import_jsx_runtime28.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...props,
    children: [
      (0, import_jsx_runtime28.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      (0, import_jsx_runtime28.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
);

// node_modules/@chakra-ui/react/dist/esm/image/use-image.mjs
var import_react50 = __toESM(require_react(), 1);
function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes: sizes24,
    ignoreFallback
  } = props;
  const [status, setStatus] = (0, import_react50.useState)("pending");
  (0, import_react50.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0, import_react50.useRef)(null);
  const load = (0, import_react50.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes24)
      img.sizes = sizes24;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes24, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-image.mjs
function AvatarImage(props) {
  const {
    src,
    srcSet,
    onError,
    onLoad,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = (0, import_jsx_runtime29.jsx)(GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage({ src, onError, crossOrigin, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? (0, import_jsx_runtime29.jsx)(
      AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : (0, import_react51.cloneElement)(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return (0, import_jsx_runtime29.jsx)(
    chakra.img,
    {
      src,
      srcSet,
      alt: name ?? iconLabel,
      onLoad,
      referrerPolicy,
      crossOrigin: crossOrigin ?? void 0,
      className: "chakra-avatar__img",
      loading,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius
      }
    }
  );
}
AvatarImage.displayName = "AvatarImage";

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar.mjs
var baseStyle43 = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
});
var Avatar = forwardRef2((props, ref) => {
  const styles2 = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = (0, import_react52.useState)(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = (0, import_jsx_runtime30.jsx)(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    referrerPolicy,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle43,
    ...styles2.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return (0, import_jsx_runtime30.jsx)(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: (0, import_jsx_runtime30.jsxs)(AvatarStylesProvider, { value: styles2, children: [
        (0, import_jsx_runtime30.jsx)(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback,
            crossOrigin,
            referrerPolicy
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-badge.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var placementMap = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
};
var AvatarBadge = forwardRef2(
  function AvatarBadge2(props, ref) {
    const { placement = "bottom-end", className, ...rest } = props;
    const styles2 = useAvatarStyles();
    const placementStyles = placementMap[placement];
    const badgeStyles = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...placementStyles,
      ...styles2.badge
    };
    return (0, import_jsx_runtime31.jsx)(
      chakra.div,
      {
        ref,
        ...rest,
        className: cx("chakra-avatar__badge", className),
        __css: badgeStyles
      }
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

// node_modules/@chakra-ui/react/dist/esm/avatar/avatar-group.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);
var AvatarGroup = forwardRef2(
  function AvatarGroup2(props, ref) {
    const styles2 = useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max: max2,
      spacing: spacing2 = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props);
    const validChildren = getValidChildren(children);
    const childrenWithinMax = max2 != null ? validChildren.slice(0, max2) : validChildren;
    const excess = max2 != null ? validChildren.length - max2 : 0;
    const reversedChildren = childrenWithinMax.reverse();
    const clones = reversedChildren.map((child, index) => {
      const isFirstAvatar = index === 0;
      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing2,
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        showBorder: true
      };
      return (0, import_react53.cloneElement)(child, compact(childProps));
    });
    const groupStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles2.group
    };
    const excessStyles = {
      borderRadius,
      marginStart: spacing2,
      ...baseStyle43,
      ...styles2.excessLabel
    };
    return (0, import_jsx_runtime32.jsxs)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && (0, import_jsx_runtime32.jsx)(chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// node_modules/@chakra-ui/react/dist/esm/badge/badge.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var Badge = forwardRef2(function Badge2(props, ref) {
  const styles2 = useStyleConfig("Badge", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime33.jsx)(
    chakra.span,
    {
      ref,
      className: cx("chakra-badge", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles2
      }
    }
  );
});
Badge.displayName = "Badge";

// node_modules/@chakra-ui/react/dist/esm/box/box.mjs
var Box = chakra("div");
Box.displayName = "Box";

// node_modules/@chakra-ui/react/dist/esm/box/square.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var Square = forwardRef2(
  function Square2(props, ref) {
    const { size: size2, centerContent = true, ...rest } = props;
    const styles2 = centerContent ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
    return (0, import_jsx_runtime34.jsx)(
      Box,
      {
        ref,
        boxSize: size2,
        __css: {
          ...styles2,
          flexShrink: 0,
          flexGrow: 0
        },
        ...rest
      }
    );
  }
);
Square.displayName = "Square";

// node_modules/@chakra-ui/react/dist/esm/box/circle.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var Circle = forwardRef2(
  function Circle2(props, ref) {
    const { size: size2, ...rest } = props;
    return (0, import_jsx_runtime35.jsx)(Square, { size: size2, ref, borderRadius: "9999px", ...rest });
  }
);
Circle.displayName = "Circle";

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb-context.mjs
var [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb.mjs
var Breadcrumb = forwardRef2(
  function Breadcrumb2(props, ref) {
    const styles2 = useMultiStyleConfig("Breadcrumb", props);
    const ownProps = omitThemingProps(props);
    const {
      children,
      spacing: spacing2 = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = getValidChildren(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index) => (0, import_react54.cloneElement)(child, {
        separator,
        spacing: spacing2,
        isLastChild: count === index + 1
      })
    );
    const _className = cx("chakra-breadcrumb", className);
    return (0, import_jsx_runtime36.jsx)(
      chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles2.container,
        ...rest,
        children: (0, import_jsx_runtime36.jsx)(BreadcrumbStylesProvider, { value: styles2, children: (0, import_jsx_runtime36.jsx)(
          chakra.ol,
          {
            className: "chakra-breadcrumb__list",
            ...listProps,
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles2.list
            },
            children: clones
          }
        ) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb-item.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb-link.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbLink = forwardRef2(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles2 = useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return (0, import_jsx_runtime37.jsx)(chakra.span, { "aria-current": "page", __css: styles2.link, ...sharedProps });
    }
    return (0, import_jsx_runtime37.jsx)(chakra.a, { __css: styles2.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb-separator.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbSeparator = forwardRef2(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing: spacing2, ...rest } = props;
    const styles2 = useBreadcrumbStyles();
    const separatorStyles = defineStyle({
      mx: spacing2,
      ...styles2.separator
    });
    return (0, import_jsx_runtime38.jsx)(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// node_modules/@chakra-ui/react/dist/esm/breadcrumb/breadcrumb-item.mjs
var BreadcrumbItem = forwardRef2(
  function BreadcrumbItem2(props, ref) {
    const {
      isCurrentPage,
      separator,
      isLastChild,
      spacing: spacing2,
      children,
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return (0, import_react55.cloneElement)(child, {
          isCurrentPage
        });
      }
      if (child.type === BreadcrumbSeparator) {
        return (0, import_react55.cloneElement)(child, {
          spacing: spacing2,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles2 = useBreadcrumbStyles();
    const itemStyles = defineStyle({
      display: "inline-flex",
      alignItems: "center",
      ...styles2.item
    });
    const _className = cx("chakra-breadcrumb__list-item", className);
    return (0, import_jsx_runtime39.jsxs)(chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && (0, import_jsx_runtime39.jsx)(BreadcrumbSeparator, { spacing: spacing2, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// node_modules/@chakra-ui/react/dist/esm/button/button.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react59 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/button/button-context.mjs
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

// node_modules/@chakra-ui/react/dist/esm/button/button-icon.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react56 = __toESM(require_react(), 1);
function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0, import_react56.isValidElement)(children) ? (0, import_react56.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return (0, import_jsx_runtime40.jsx)(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

// node_modules/@chakra-ui/react/dist/esm/button/button-spinner.mjs
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react57 = __toESM(require_react(), 1);
function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing: spacing2 = "0.5rem",
    children = (0, import_jsx_runtime41.jsx)(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0, import_react57.useMemo)(
    () => defineStyle({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing2 : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing2]
  );
  return (0, import_jsx_runtime41.jsx)(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

// node_modules/@chakra-ui/react/dist/esm/button/use-button-type.mjs
var import_react58 = __toESM(require_react(), 1);
function useButtonType(value) {
  const [isButton, setIsButton] = (0, import_react58.useState)(!value);
  const refCallback = (0, import_react58.useCallback)((node2) => {
    if (!node2)
      return;
    setIsButton(node2.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

// node_modules/@chakra-ui/react/dist/esm/button/button.mjs
var Button = forwardRef2((props, ref) => {
  const group = useButtonGroup();
  const styles2 = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing: iconSpacing2 = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    shouldWrapChildren,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = (0, import_react59.useMemo)(() => {
    const _focus = { ...styles2 == null ? void 0 : styles2["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles2,
      ...!!group && { _focus }
    };
  }, [styles2, group]);
  const { ref: _ref2, type: defaultType } = useButtonType(as);
  const contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing: iconSpacing2,
    children,
    shouldWrapChildren
  };
  return (0, import_jsx_runtime42.jsxs)(
    chakra.button,
    {
      disabled: isDisabled || isLoading,
      ref: useMergeRefs(ref, _ref2),
      as,
      type: type ?? defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      children: [
        isLoading && spinnerPlacement === "start" && (0, import_jsx_runtime42.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing2,
            children: spinner
          }
        ),
        isLoading ? loadingText || (0, import_jsx_runtime42.jsx)(chakra.span, { opacity: 0, children: (0, import_jsx_runtime42.jsx)(ButtonContent, { ...contentProps }) }) : (0, import_jsx_runtime42.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && (0, import_jsx_runtime42.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing2,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing: iconSpacing2, shouldWrapChildren } = props;
  if (!shouldWrapChildren) {
    return (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
      leftIcon && (0, import_jsx_runtime42.jsx)(ButtonIcon, { marginEnd: iconSpacing2, children: leftIcon }),
      children,
      rightIcon && (0, import_jsx_runtime42.jsx)(ButtonIcon, { marginStart: iconSpacing2, children: rightIcon })
    ] });
  }
  return (0, import_jsx_runtime42.jsxs)("span", { style: { display: "contents" }, children: [
    leftIcon && (0, import_jsx_runtime42.jsx)(ButtonIcon, { marginEnd: iconSpacing2, children: leftIcon }),
    children,
    rightIcon && (0, import_jsx_runtime42.jsx)(ButtonIcon, { marginStart: iconSpacing2, children: rightIcon })
  ] });
}

// node_modules/@chakra-ui/react/dist/esm/button/button-group.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react60 = __toESM(require_react(), 1);
var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing2) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing2 }
  }),
  vertical: (spacing2) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing2 }
  })
};
var ButtonGroup = forwardRef2(
  function ButtonGroup2(props, ref) {
    const {
      size: size2,
      colorScheme,
      variant,
      className,
      spacing: spacing2 = "0.5rem",
      isAttached,
      isDisabled,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = (0, import_react60.useMemo)(
      () => ({ size: size2, colorScheme, variant, isDisabled }),
      [size2, colorScheme, variant, isDisabled]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing2)
    };
    const isVertical = orientation === "vertical";
    return (0, import_jsx_runtime43.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime43.jsx)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

// node_modules/@chakra-ui/react/dist/esm/button/icon-button.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react61 = __toESM(require_react(), 1);
var IconButton = forwardRef2(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = (0, import_react61.isValidElement)(element) ? (0, import_react61.cloneElement)(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return (0, import_jsx_runtime44.jsx)(
      Button,
      {
        px: "0",
        py: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// node_modules/@chakra-ui/react/dist/esm/card/card.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/card/card-context.mjs
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");

// node_modules/@chakra-ui/react/dist/esm/card/card.mjs
var Card = forwardRef2(function Card2(props, ref) {
  const {
    className,
    children,
    direction: direction2 = "column",
    justify,
    align,
    ...rest
  } = omitThemingProps(props);
  const styles2 = useMultiStyleConfig("Card", props);
  return (0, import_jsx_runtime45.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction2,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles2.container
      },
      ...rest,
      children: (0, import_jsx_runtime45.jsx)(CardStylesProvider, { value: styles2, children })
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/card/card-body.mjs
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var CardBody = forwardRef2(
  function CardBody2(props, ref) {
    const { className, ...rest } = props;
    const styles2 = useCardStyles();
    return (0, import_jsx_runtime46.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__body", className),
        __css: styles2.body,
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/card/card-footer.mjs
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var CardFooter = forwardRef2(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles2 = useCardStyles();
    return (0, import_jsx_runtime47.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles2.footer
        },
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/card/card-header.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var CardHeader = forwardRef2(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles2 = useCardStyles();
    return (0, import_jsx_runtime48.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles2.header,
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/center/center.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Center.displayName = "Center";
var centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
var AbsoluteCenter = forwardRef2(
  function AbsoluteCenter2(props, ref) {
    const { axis = "both", ...rest } = props;
    return (0, import_jsx_runtime49.jsx)(
      chakra.div,
      {
        ref,
        __css: centerStyles[axis],
        ...rest,
        position: "absolute"
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var import_react66 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-context.mjs
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
  name: "CheckboxGroupContext",
  strict: false
});

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-icon.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function CheckIcon2(props) {
  return (0, import_jsx_runtime50.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...props,
      children: (0, import_jsx_runtime50.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function IndeterminateIcon(props) {
  return (0, import_jsx_runtime50.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...props,
      children: (0, import_jsx_runtime50.jsx)("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon2;
  return isChecked || isIndeterminate ? (0, import_jsx_runtime50.jsx)(
    chakra.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: (0, import_jsx_runtime50.jsx)(BaseIcon, { ...rest })
    }
  ) : null;
}

// node_modules/@zag-js/dom-query/dist/index.mjs
function itemById(v, id) {
  return v.find((node2) => node2.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match = (valueText, query2) => valueText.trim().toLowerCase().startsWith(query2.toLowerCase());
var wrap3 = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function getByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap3(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match(getValueText(item), text));
}
function getByTypeaheadImpl(_items, options) {
  const { state: state2, activeId, key, timeout = 350 } = options;
  const search = state2.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const query2 = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next = getByText(items, query2, activeId);
  function cleanup() {
    clearTimeout(state2.timer);
    state2.timer = -1;
  }
  function update(value) {
    state2.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state2.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next;
}
var getByTypeahead = Object.assign(getByTypeaheadImpl, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
var isDom2 = () => typeof document !== "undefined";

// node_modules/@zag-js/focus-visible/dist/index.mjs
var hasSetup = false;
var modality = null;
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var handlers = /* @__PURE__ */ new Set();
function trigger(modality2, event) {
  handlers.forEach((handler) => handler(modality2, event));
}
var isMac = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
function isValidKey(e) {
  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function onKeyboardEvent(event) {
  hasEventBeforeFocus = true;
  if (isValidKey(event)) {
    modality = "keyboard";
    trigger("keyboard", event);
  }
}
function onPointerEvent(event) {
  modality = "pointer";
  if (event.type === "mousedown" || event.type === "pointerdown") {
    hasEventBeforeFocus = true;
    const target = event.composedPath ? event.composedPath()[0] : event.target;
    let matches = false;
    try {
      matches = target.matches(":focus-visible");
    } catch {
    }
    if (matches)
      return;
    trigger("pointer", event);
  }
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
function onClickEvent(e) {
  if (isVirtualClick(e)) {
    hasEventBeforeFocus = true;
    modality = "virtual";
  }
}
function onWindowFocus(event) {
  if (event.target === window || event.target === document) {
    return;
  }
  if (event.target instanceof Element && event.target.hasAttribute("tabindex")) {
    return;
  }
  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
    modality = "virtual";
    trigger("virtual", event);
  }
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = false;
}
function onWindowBlur() {
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = true;
}
function isFocusVisible() {
  return modality !== "pointer";
}
function setupGlobalFocusEvents() {
  if (!isDom2() || hasSetup) {
    return;
  }
  const { focus } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function focusElement(...args) {
    hasEventBeforeFocus = true;
    focus.apply(this, args);
  };
  document.addEventListener("keydown", onKeyboardEvent, true);
  document.addEventListener("keyup", onKeyboardEvent, true);
  document.addEventListener("click", onClickEvent, true);
  window.addEventListener("focus", onWindowFocus, true);
  window.addEventListener("blur", onWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", onPointerEvent, true);
    document.addEventListener("pointermove", onPointerEvent, true);
    document.addEventListener("pointerup", onPointerEvent, true);
  } else {
    document.addEventListener("mousedown", onPointerEvent, true);
    document.addEventListener("mousemove", onPointerEvent, true);
    document.addEventListener("mouseup", onPointerEvent, true);
  }
  hasSetup = true;
}
function trackFocusVisible(fn2) {
  setupGlobalFocusEvents();
  fn2(isFocusVisible());
  const handler = () => fn2(isFocusVisible());
  handlers.add(handler);
  return () => {
    handlers.delete(handler);
  };
}

// node_modules/@chakra-ui/react/dist/esm/checkbox/use-checkbox.mjs
var import_react63 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/form-control/form-control.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var import_react62 = __toESM(require_react(), 1);
var [FormControlStylesProvider, useFormControlStyles] = createContext({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = createContext({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0, import_react62.useId)();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0, import_react62.useState)(false);
  const [hasHelpText, setHasHelpText] = (0, import_react62.useState)(false);
  const [isFocused, setFocus] = (0, import_react62.useState)(false);
  const getHelpTextProps = (0, import_react62.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0, import_react62.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0, import_react62.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0, import_react62.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group",
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [htmlProps, isDisabled, isFocused, isInvalid, isReadOnly]
  );
  const getRequiredIndicatorProps = (0, import_react62.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = forwardRef2(
  function FormControl2(props, ref) {
    const styles2 = useMultiStyleConfig("Form", props);
    const ownProps = omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = cx("chakra-form-control", props.className);
    return (0, import_jsx_runtime51.jsx)(FormControlProvider, { value: context, children: (0, import_jsx_runtime51.jsx)(FormControlStylesProvider, { value: styles2, children: (0, import_jsx_runtime51.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles2["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = forwardRef2(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles2 = useFormControlStyles();
    const className = cx("chakra-form__helper-text", props.className);
    return (0, import_jsx_runtime51.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles2.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

// node_modules/@chakra-ui/react/dist/esm/form-control/use-form-control.mjs
function useFormControl(props) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  };
}
function useFormControlProps(props) {
  const field = useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus: onFocus3,
    onBlur: onBlur3,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id ?? (field == null ? void 0 : field.id),
    isDisabled: disabled ?? isDisabled ?? (field == null ? void 0 : field.isDisabled),
    isReadOnly: readOnly ?? isReadOnly ?? (field == null ? void 0 : field.isReadOnly),
    isRequired: required ?? isRequired ?? (field == null ? void 0 : field.isRequired),
    isInvalid: isInvalid ?? (field == null ? void 0 : field.isInvalid),
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus3),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur3)
  };
}

// node_modules/@chakra-ui/react/dist/esm/visually-hidden/visually-hidden.style.mjs
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};

// node_modules/@chakra-ui/react/dist/esm/checkbox/use-checkbox.mjs
function useCheckbox(props = {}) {
  const formControlProps = useFormControlProps(props);
  const {
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    onBlur: onBlur3,
    onFocus: onFocus3,
    "aria-describedby": ariaDescribedBy
  } = formControlProps;
  const {
    defaultChecked,
    isChecked: checkedProp,
    isFocusable: isFocusable2,
    onChange,
    isIndeterminate,
    name,
    value,
    tabIndex = void 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-invalid": ariaInvalid,
    ...rest
  } = props;
  const htmlProps = omit(rest, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]);
  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur3);
  const onFocusProp = useCallbackRef(onFocus3);
  const [isFocused, setFocused] = (0, import_react63.useState)(false);
  const [isHovered, setHovered] = (0, import_react63.useState)(false);
  const [isActive, setActive] = (0, import_react63.useState)(false);
  const isFocusVisibleRef = (0, import_react63.useRef)(false);
  (0, import_react63.useEffect)(() => {
    return trackFocusVisible((state22) => {
      isFocusVisibleRef.current = state22;
    });
  }, []);
  const inputRef = (0, import_react63.useRef)(null);
  const [rootIsLabelElement, setRootIsLabelElement] = (0, import_react63.useState)(true);
  const [checkedState, setCheckedState] = (0, import_react63.useState)(!!defaultChecked);
  const isControlled = checkedProp !== void 0;
  const isChecked = isControlled ? checkedProp : checkedState;
  const handleChange = (0, import_react63.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.currentTarget.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.currentTarget.checked);
        }
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
    },
    [
      isReadOnly,
      isDisabled,
      isChecked,
      isControlled,
      isIndeterminate,
      onChangeProp
    ]
  );
  useSafeLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);
  useUpdateEffect(() => {
    if (isDisabled) {
      setFocused(false);
    }
  }, [isDisabled, setFocused]);
  useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!(el == null ? void 0 : el.form))
      return;
    const formResetListener = () => {
      setCheckedState(!!defaultChecked);
    };
    el.form.addEventListener("reset", formResetListener);
    return () => {
      var _a8;
      return (_a8 = el.form) == null ? void 0 : _a8.removeEventListener("reset", formResetListener);
    };
  }, []);
  const trulyDisabled = isDisabled && !isFocusable2;
  const onKeyDown = (0, import_react63.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react63.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.checked !== isChecked;
    if (notInSync) {
      setCheckedState(inputRef.current.checked);
    }
  }, [inputRef.current]);
  const getCheckboxProps = (0, import_react63.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      const onPressDown = (event) => {
        if (isFocused) {
          event.preventDefault();
        }
        setActive(true);
      };
      return {
        ...props2,
        ref: forwardedRef,
        "data-active": dataAttr(isActive),
        "data-hover": dataAttr(isHovered),
        "data-checked": dataAttr(isChecked),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
        "data-indeterminate": dataAttr(isIndeterminate),
        "data-disabled": dataAttr(isDisabled),
        "data-invalid": dataAttr(isInvalid),
        "data-readonly": dataAttr(isReadOnly),
        "aria-hidden": true,
        onMouseDown: callAllHandlers(props2.onMouseDown, onPressDown),
        onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
        onMouseEnter: callAllHandlers(
          props2.onMouseEnter,
          () => setHovered(true)
        ),
        onMouseLeave: callAllHandlers(
          props2.onMouseLeave,
          () => setHovered(false)
        )
      };
    },
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getIndicatorProps = (0, import_react63.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [
      isActive,
      isChecked,
      isDisabled,
      isFocused,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getRootProps = (0, import_react63.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...htmlProps,
      ...props2,
      ref: mergeRefs(forwardedRef, (node2) => {
        if (!node2)
          return;
        setRootIsLabelElement(node2.tagName === "LABEL");
      }),
      onClick: callAllHandlers(props2.onClick, () => {
        var _a8;
        if (!rootIsLabelElement) {
          (_a8 = inputRef.current) == null ? void 0 : _a8.click();
          requestAnimationFrame(() => {
            var _a9;
            (_a9 = inputRef.current) == null ? void 0 : _a9.focus({ preventScroll: true });
          });
        }
      }),
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [htmlProps, isDisabled, isChecked, isInvalid, rootIsLabelElement]
  );
  const getInputProps = (0, import_react63.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      return {
        ...props2,
        ref: mergeRefs(inputRef, forwardedRef),
        type: "checkbox",
        name,
        value,
        id,
        tabIndex,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          props2.onBlur,
          onBlurProp,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          props2.onFocus,
          onFocusProp,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": isDisabled,
        "aria-checked": isIndeterminate ? "mixed" : isChecked,
        style: visuallyHiddenStyle
      };
    },
    [
      name,
      value,
      id,
      tabIndex,
      handleChange,
      onBlurProp,
      onFocusProp,
      onKeyDown,
      onKeyUp,
      isRequired,
      isChecked,
      trulyDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      ariaInvalid,
      isInvalid,
      ariaDescribedBy,
      isDisabled,
      isIndeterminate
    ]
  );
  const getLabelProps = (0, import_react63.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [isChecked, isDisabled, isInvalid]
  );
  const state2 = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isIndeterminate,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state: state2,
    getRootProps,
    getCheckboxProps,
    getIndicatorProps,
    getInputProps,
    getLabelProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/react/dist/esm/checkbox/use-initial-animation-state.mjs
var import_react64 = __toESM(require_react(), 1);
function useInitialAnimationState(isChecked) {
  const [previousIsChecked, setPreviousIsChecked] = (0, import_react64.useState)(isChecked);
  const [shouldAnimate, setShouldAnimate] = (0, import_react64.useState)(false);
  if (isChecked !== previousIsChecked) {
    setShouldAnimate(true);
    setPreviousIsChecked(isChecked);
  }
  return shouldAnimate;
}

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox.mjs
var controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
var rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
var checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
var indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
var Checkbox = forwardRef2(
  function Checkbox2(props, ref) {
    const group = useCheckboxGroupContext();
    const mergedProps = { ...group, ...props };
    const styles2 = useMultiStyleConfig("Checkbox", mergedProps);
    const ownProps = omitThemingProps(props);
    const {
      spacing: spacing2 = "0.5rem",
      className,
      children,
      iconColor,
      iconSize,
      icon = (0, import_jsx_runtime52.jsx)(CheckboxIcon, {}),
      isChecked: isCheckedProp,
      isDisabled = group == null ? void 0 : group.isDisabled,
      onChange: onChangeProp,
      inputProps,
      ...rest
    } = ownProps;
    let isChecked = isCheckedProp;
    if ((group == null ? void 0 : group.value) && ownProps.value) {
      isChecked = group.value.includes(ownProps.value);
    }
    let onChange = onChangeProp;
    if ((group == null ? void 0 : group.onChange) && ownProps.value) {
      onChange = callAll(group.onChange, onChangeProp);
    }
    const {
      state: state2,
      getInputProps,
      getCheckboxProps,
      getLabelProps,
      getRootProps
    } = useCheckbox({
      ...rest,
      isDisabled,
      isChecked,
      onChange
    });
    const shouldAnimate = useInitialAnimationState(state2.isChecked);
    const iconStyles = (0, import_react66.useMemo)(
      () => ({
        animation: !shouldAnimate ? void 0 : state2.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
        ...styles2.icon,
        ...compact({
          fontSize: iconSize,
          color: iconColor
        })
      }),
      [iconColor, iconSize, shouldAnimate, state2.isIndeterminate, styles2.icon]
    );
    const clonedIcon = (0, import_react66.cloneElement)(icon, {
      __css: iconStyles,
      isIndeterminate: state2.isIndeterminate,
      isChecked: state2.isChecked
    });
    return (0, import_jsx_runtime52.jsxs)(
      chakra.label,
      {
        __css: { ...rootStyles, ...styles2.container },
        className: cx("chakra-checkbox", className),
        ...getRootProps(),
        children: [
          (0, import_jsx_runtime52.jsx)(
            "input",
            {
              className: "chakra-checkbox__input",
              ...getInputProps(inputProps, ref)
            }
          ),
          (0, import_jsx_runtime52.jsx)(
            chakra.span,
            {
              __css: { ...controlStyles, ...styles2.control },
              className: "chakra-checkbox__control",
              ...getCheckboxProps(),
              children: clonedIcon
            }
          ),
          children && (0, import_jsx_runtime52.jsx)(
            chakra.span,
            {
              className: "chakra-checkbox__label",
              ...getLabelProps(),
              __css: {
                marginStart: spacing2,
                ...styles2.label
              },
              children
            }
          )
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-group.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react68 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/checkbox/use-checkbox-group.mjs
var import_react67 = __toESM(require_react(), 1);
function isInputEvent2(value) {
  return value && isObject(value) && isObject(value.target);
}
function useCheckboxGroup(props = {}) {
  const {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled,
    isNative
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const handleChange = (0, import_react67.useCallback)(
    (eventOrValue) => {
      if (!value)
        return;
      const isChecked = isInputEvent2(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
      const selectedValue = isInputEvent2(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
      setValue(nextValue);
    },
    [setValue, value]
  );
  const getCheckboxProps = (0, import_react67.useCallback)(
    (props2 = {}) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        [checkedKey]: value.some((val) => String(props2.value) === String(val)),
        onChange: handleChange
      };
    },
    [handleChange, isNative, value]
  );
  return {
    value,
    isDisabled,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}

// node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-group.mjs
function CheckboxGroup(props) {
  const { colorScheme, size: size2, variant, children, isDisabled } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = (0, import_react68.useMemo)(
    () => ({
      size: size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled
    }),
    [size2, onChange, colorScheme, value, variant, isDisabled]
  );
  return (0, import_jsx_runtime53.jsx)(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

// node_modules/@chakra-ui/react/dist/esm/code/code.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var Code = forwardRef2(function Code2(props, ref) {
  const styles2 = useStyleConfig("Code", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime54.jsx)(
    chakra.code,
    {
      ref,
      className: cx("chakra-code", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        ...styles2
      }
    }
  );
});
Code.displayName = "Code";

// node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-script.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var VALID_VALUES = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function normalize3(initialColorMode) {
  let value = initialColorMode;
  if (!VALID_VALUES.has(value))
    value = "light";
  return value;
}
function getScriptSrc(props = {}) {
  const {
    initialColorMode = "light",
    type = "localStorage",
    storageKey: key = "chakra-ui-color-mode"
  } = props;
  const init = normalize3(initialColorMode);
  const isCookie = type === "cookie";
  const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${init}",r="${key}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `;
  const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${init}",e="${key}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  const fn2 = isCookie ? cookieScript : localStorageScript;
  return `!${fn2}`.trim();
}
function ColorModeScript(props = {}) {
  const { nonce } = props;
  return (0, import_jsx_runtime55.jsx)(
    "script",
    {
      id: "chakra-script",
      nonce,
      dangerouslySetInnerHTML: { __html: getScriptSrc(props) }
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/container/container.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var Container2 = forwardRef2(
  function Container22(props, ref) {
    const { className, centerContent, ...rest } = omitThemingProps(props);
    const styles2 = useStyleConfig("Container", props);
    return (0, import_jsx_runtime56.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-container", className),
        ...rest,
        __css: {
          ...styles2,
          ...centerContent && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }
        }
      }
    );
  }
);
Container2.displayName = "Container";

// node_modules/@chakra-ui/react/dist/esm/control-box/control-box.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var ControlBox = (props) => {
  const {
    type = "checkbox",
    _hover,
    _invalid,
    _disabled,
    _focus,
    _checked,
    _child = { opacity: 0 },
    _checkedAndChild = { opacity: 1 },
    _checkedAndDisabled,
    _checkedAndFocus,
    _checkedAndHover,
    children,
    ...rest
  } = props;
  const checkedAndDisabled = `input[type=${type}]:checked:disabled + &`;
  const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + &`;
  const checkedAndFocus = `input[type=${type}]:checked:focus + &`;
  const disabled = `input[type=${type}]:disabled + &`;
  const focus = `input[type=${type}]:focus + &`;
  const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + &`;
  const checked = `input[type=${type}]:checked + &, input[type=${type}][aria-checked=mixed] + &`;
  const invalid = `input[type=${type}][aria-invalid=true] + &`;
  const child = `& > *`;
  return (0, import_jsx_runtime57.jsx)(
    chakra.div,
    {
      ...rest,
      "aria-hidden": true,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "common",
        transitionDuration: "fast",
        flexShrink: 0,
        [focus]: _focus,
        [hover]: _hover,
        [disabled]: _disabled,
        [invalid]: _invalid,
        [checkedAndDisabled]: _checkedAndDisabled,
        [checkedAndFocus]: _checkedAndFocus,
        [checkedAndHover]: _checkedAndHover,
        [child]: _child,
        [checked]: {
          ..._checked,
          [child]: _checkedAndChild
        }
      },
      children
    }
  );
};
ControlBox.displayName = "ControlBox";

// node_modules/@chakra-ui/react/dist/esm/divider/divider.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var Divider = forwardRef2(
  function Divider2(props, ref) {
    const {
      borderLeftWidth,
      borderBottomWidth,
      borderTopWidth,
      borderRightWidth,
      borderWidth,
      borderStyle,
      borderColor,
      ...styles2
    } = useStyleConfig("Divider", props);
    const {
      className,
      orientation = "horizontal",
      __css,
      ...rest
    } = omitThemingProps(props);
    const dividerStyles = {
      vertical: {
        borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
        height: "100%"
      },
      horizontal: {
        borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
        width: "100%"
      }
    };
    return (0, import_jsx_runtime58.jsx)(
      chakra.hr,
      {
        ref,
        "aria-orientation": orientation,
        ...rest,
        __css: {
          ...styles2,
          border: "0",
          borderColor,
          borderStyle,
          ...dividerStyles[orientation],
          ...__css
        },
        className: cx("chakra-divider", className)
      }
    );
  }
);
Divider.displayName = "Divider";

// node_modules/@chakra-ui/react/dist/esm/editable/editable.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/editable/editable-context.mjs
var [EditableStylesProvider, useEditableStyles] = createContext({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
var [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

// node_modules/@chakra-ui/react/dist/esm/editable/use-editable.mjs
var import_react69 = __toESM(require_react(), 1);
function contains2(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function useEditable(props = {}) {
  const {
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    onBlur: onBlurProp,
    value: valueProp,
    isDisabled,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    placeholder,
    onEdit: onEditCallback,
    finalFocusRef,
    ...htmlProps
  } = props;
  const onEditProp = useCallbackRef(onEditCallback);
  const defaultIsEditing = Boolean(startWithEditView && !isDisabled);
  const [isEditing, setIsEditing] = (0, import_react69.useState)(defaultIsEditing);
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  });
  const [prevValue, setPrevValue] = (0, import_react69.useState)(value);
  const inputRef = (0, import_react69.useRef)(null);
  const previewRef = (0, import_react69.useRef)(null);
  const editButtonRef = (0, import_react69.useRef)(null);
  const cancelButtonRef = (0, import_react69.useRef)(null);
  const submitButtonRef = (0, import_react69.useRef)(null);
  useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelButtonRef, submitButtonRef]
  });
  const isInteractive = !isEditing && !isDisabled;
  useSafeLayoutEffect(() => {
    var _a8, _b3;
    if (isEditing) {
      (_a8 = inputRef.current) == null ? void 0 : _a8.focus();
      if (selectAllOnFocus)
        (_b3 = inputRef.current) == null ? void 0 : _b3.select();
    }
  }, []);
  useUpdateEffect(() => {
    var _a8, _b3, _c3, _d3;
    if (!isEditing) {
      if (finalFocusRef) {
        (_a8 = finalFocusRef.current) == null ? void 0 : _a8.focus();
      } else {
        (_b3 = editButtonRef.current) == null ? void 0 : _b3.focus();
      }
      return;
    }
    (_c3 = inputRef.current) == null ? void 0 : _c3.focus();
    if (selectAllOnFocus) {
      (_d3 = inputRef.current) == null ? void 0 : _d3.select();
    }
    onEditProp == null ? void 0 : onEditProp();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  const onEdit = (0, import_react69.useCallback)(() => {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  const onUpdatePrevValue = (0, import_react69.useCallback)(() => {
    setPrevValue(value);
  }, [value]);
  const onCancel = (0, import_react69.useCallback)(() => {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp == null ? void 0 : onCancelProp(prevValue);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [onCancelProp, onBlurProp, setValue, prevValue]);
  const onSubmit = (0, import_react69.useCallback)(() => {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp == null ? void 0 : onSubmitProp(value);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [value, onSubmitProp, onBlurProp, prevValue]);
  (0, import_react69.useEffect)(() => {
    if (isEditing)
      return;
    const inputEl = inputRef.current;
    if ((inputEl == null ? void 0 : inputEl.ownerDocument.activeElement) === inputEl) {
      inputEl == null ? void 0 : inputEl.blur();
    }
  }, [isEditing]);
  const onChange = (0, import_react69.useCallback)(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  const onKeyDown = (0, import_react69.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel,
        Enter: (event2) => {
          if (!event2.shiftKey && !event2.metaKey) {
            onSubmit();
          }
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel, onSubmit]
  );
  const onKeyDownWithoutSubmit = (0, import_react69.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel]
  );
  const isValueEmpty = value.length === 0;
  const onBlur3 = (0, import_react69.useCallback)(
    (event) => {
      if (!isEditing)
        return;
      const doc = event.currentTarget.ownerDocument;
      const relatedTarget = event.relatedTarget ?? doc.activeElement;
      const targetIsCancel = contains2(cancelButtonRef.current, relatedTarget);
      const targetIsSubmit = contains2(submitButtonRef.current, relatedTarget);
      const isValidBlur = !targetIsCancel && !targetIsSubmit;
      if (isValidBlur) {
        if (submitOnBlur) {
          onSubmit();
        } else {
          onCancel();
        }
      }
    },
    [submitOnBlur, onSubmit, onCancel, isEditing]
  );
  const getPreviewProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => {
      const tabIndex = isInteractive && isPreviewFocusable ? 0 : void 0;
      return {
        ...props2,
        ref: mergeRefs(ref, previewRef),
        children: isValueEmpty ? placeholder : value,
        hidden: isEditing,
        "aria-disabled": ariaAttr(isDisabled),
        tabIndex,
        onFocus: callAllHandlers(props2.onFocus, onEdit, onUpdatePrevValue)
      };
    },
    [
      isDisabled,
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getInputProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": ariaAttr(isDisabled),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur3,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getTextareaProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": ariaAttr(isDisabled),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled,
      isEditing,
      onBlur3,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getEditButtonProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Edit",
      ...props2,
      type: "button",
      onClick: callAllHandlers(props2.onClick, onEdit),
      ref: mergeRefs(ref, editButtonRef),
      disabled: isDisabled
    }),
    [onEdit, isDisabled]
  );
  const getSubmitButtonProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      "aria-label": "Submit",
      ref: mergeRefs(submitButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onSubmit),
      disabled: isDisabled
    }),
    [onSubmit, isDisabled]
  );
  const getCancelButtonProps = (0, import_react69.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...props2,
      ref: mergeRefs(cancelButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onCancel),
      disabled: isDisabled
    }),
    [onCancel, isDisabled]
  );
  return {
    isEditing,
    isDisabled,
    isValueEmpty,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/react/dist/esm/editable/editable.mjs
var Editable = forwardRef2(
  function Editable2(props, ref) {
    const styles2 = useMultiStyleConfig("Editable", props);
    const ownProps = omitThemingProps(props);
    const { htmlProps, ...context } = useEditable(ownProps);
    const { isEditing, onSubmit, onCancel, onEdit } = context;
    const _className = cx("chakra-editable", props.className);
    const children = runIfFn(props.children, {
      isEditing,
      onSubmit,
      onCancel,
      onEdit
    });
    return (0, import_jsx_runtime59.jsx)(EditableProvider, { value: context, children: (0, import_jsx_runtime59.jsx)(EditableStylesProvider, { value: styles2, children: (0, import_jsx_runtime59.jsx)(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: _className,
        children
      }
    ) }) });
  }
);
Editable.displayName = "Editable";

// node_modules/@chakra-ui/react/dist/esm/editable/editable-input.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/editable/shared.mjs
var commonStyles = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
};

// node_modules/@chakra-ui/react/dist/esm/editable/editable-input.mjs
var EditableInput = forwardRef2(
  function EditableInput2(props, ref) {
    const { getInputProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = cx("chakra-editable__input", props.className);
    return (0, import_jsx_runtime60.jsx)(
      chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles2.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

// node_modules/@chakra-ui/react/dist/esm/editable/editable-preview.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var EditablePreview = forwardRef2(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = cx("chakra-editable__preview", props.className);
    return (0, import_jsx_runtime61.jsx)(
      chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles2.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

// node_modules/@chakra-ui/react/dist/esm/editable/editable-textarea.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var EditableTextarea = forwardRef2(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = cx("chakra-editable__textarea", props.className);
    return (0, import_jsx_runtime62.jsx)(
      chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles2.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

// node_modules/@chakra-ui/react/dist/esm/editable/use-editable-controls.mjs
function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

// node_modules/@chakra-ui/react/dist/esm/editable/use-editable-state.mjs
function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}

// node_modules/@chakra-ui/react/dist/esm/extend-theme/extend-theme.mjs
function isFunction4(value) {
  return typeof value === "function";
}
function pipe3(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (isChakraTheme(activeTheme) && // this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe3(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction4(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(theme);
var extendBaseTheme = createExtendTheme(baseTheme);
function mergeThemeOverride(...overrides) {
  return (0, import_lodash.default)({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object2) {
  if ((isFunction4(source) || isFunction4(override)) && Object.prototype.hasOwnProperty.call(object2, key)) {
    return (...args) => {
      const sourceValue = isFunction4(source) ? source(...args) : source;
      const overrideValue = isFunction4(override) ? override(...args) : override;
      return (0, import_lodash.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  if (isObject(source) && isArray(override)) {
    return override;
  }
  if (isArray(source) && isObject(override)) {
    return override;
  }
  return void 0;
}

// node_modules/@chakra-ui/react/dist/esm/extend-theme/with-default-color-scheme.mjs
function withDefaultColorScheme({
  colorScheme,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withColorScheme = {
            defaultProps: {
              colorScheme
            }
          };
          return [componentName, withColorScheme];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/react/dist/esm/extend-theme/with-default-size.mjs
function withDefaultSize({
  size: size2,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withSize = {
            defaultProps: {
              size: size2
            }
          };
          return [componentName, withSize];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/react/dist/esm/extend-theme/with-default-variant.mjs
function withDefaultVariant({
  variant,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant
            }
          };
          return [componentName, withVariant];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/react/dist/esm/extend-theme/with-default-props.mjs
function pipe4(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size: size2 },
  components: components2
}) {
  const identity = (t2) => t2;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components: components2 }) : identity,
    size2 ? withDefaultSize({ size: size2, components: components2 }) : identity,
    variant ? withDefaultVariant({ variant, components: components2 }) : identity
  ];
  return (theme2) => mergeThemeOverride(pipe4(...fns)(theme2));
}

// node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var Flex = forwardRef2(function Flex2(props, ref) {
  const { direction: direction2, align, justify, wrap: wrap4, basis, grow, shrink, ...rest } = props;
  const styles2 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap4,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return (0, import_jsx_runtime63.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});
Flex.displayName = "Flex";

// node_modules/@chakra-ui/react/dist/esm/focus-lock/focus-lock.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t2 = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t2[n] = r2[n];
  }
  return t2;
}

// node_modules/react-focus-lock/dist/es2015/Combination.js
var import_react78 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
var import_react75 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react70 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react70.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React2 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs2(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef2(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef2(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef2(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var import_react71 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? null : _ref$children;
  return import_react71.default.createElement(import_react71.Fragment, null, import_react71.default.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && import_react71.default.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React4 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react72 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults2;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter3) {
          pendingQueue = pendingQueue.filter(filter3);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults2, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults2, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React5 = __toESM(require_react());
var import_react73 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React6 = __toESM(require_react());
var SideCar = function(_a8) {
  var sideCar2 = _a8.sideCar, rest = __rest(_a8, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React6.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true,
  ssr: typeof document !== "undefined"
});

// node_modules/react-focus-lock/dist/es2015/scope.js
var import_react74 = __toESM(require_react());
var focusScope = (0, import_react74.createContext)(void 0);

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = (0, import_react75.forwardRef)(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _useState = (0, import_react75.useState)(), realObserved = _useState[0], setObserved = _useState[1];
  var observed = (0, import_react75.useRef)();
  var isActive = (0, import_react75.useRef)(false);
  var originalFocusedElement = (0, import_react75.useRef)(null);
  var _useState2 = (0, import_react75.useState)({}), update = _useState2[1];
  var children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container3 = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _useState3 = (0, import_react75.useState)({}), id = _useState3[0];
  var onActivation = (0, import_react75.useCallback)(function(_ref2) {
    var captureFocusRestore2 = _ref2.captureFocusRestore;
    if (!originalFocusedElement.current) {
      var _document;
      var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
      originalFocusedElement.current = activeElement;
      if (activeElement !== document.body) {
        originalFocusedElement.current = captureFocusRestore2(activeElement);
      }
    }
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
    update();
  }, [onActivationCallback]);
  var onDeactivation = (0, import_react75.useCallback)(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
    update();
  }, [onDeactivationCallback]);
  var returnFocus = (0, import_react75.useCallback)(function(allowDefer) {
    var focusRestore = originalFocusedElement.current;
    if (focusRestore) {
      var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = (0, import_react75.useCallback)(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = (0, import_react75.useCallback)(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    (0, import_react75.useEffect)(function() {
      if (!observed.current && typeof Container3 !== "string") {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs2([parentRef, setObserveNode]);
  var focusScopeValue = (0, import_react75.useMemo)(function() {
    return {
      observed,
      shards,
      enabled: !disabled,
      active: isActive.current
    };
  }, [disabled, isActive.current, shards, realObserved]);
  return import_react75.default.createElement(import_react75.Fragment, null, hasLeadingGuards && [
    import_react75.default.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? import_react75.default.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && import_react75.default.createElement(SideCar2, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions,
    noFocusGuards
  }), import_react75.default.createElement(Container3, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), import_react75.default.createElement(focusScope.Provider, {
    value: focusScopeValue
  }, children)), hasTailingGuards && import_react75.default.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
var import_react77 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t2, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e2) {
    return t3.__proto__ = e2, t3;
  }, _setPrototypeOf(t2, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2 || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t2, e;
}

// node_modules/react-clientside-effect/lib/index.es.js
var import_react76 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap4(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state2;
    function emitChange() {
      state2 = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state2);
    }
    var SideEffect = function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek() {
        return state2;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return import_react76.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react76.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function(a) {
  return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
  return Array.isArray(a) ? a[0] : a;
};

// node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node2) {
  if (node2.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node2, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node2) {
  return node2.parentNode && node2.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node2.parentNode.host
  ) : node2.parentNode;
};
var isTopNode = function(node2) {
  return node2 === document || node2 && node2.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node2) {
  return node2.hasAttribute("inert");
};
var isVisibleUncached = function(node2, checkParent) {
  return !node2 || isTopNode(node2) || !isElementHidden(node2) && !isInert(node2) && checkParent(getParentNode(node2));
};
var isVisibleCached = function(visibilityCache, node2) {
  var cached = visibilityCache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node2, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node2, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node2, checkParent) {
  return node2 && !isTopNode(node2) ? isAutoFocusAllowed(node2) ? checkParent(getParentNode(node2)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node2) {
  var cached = cache.get(node2);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node2, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node2, result);
  return result;
};
var getDataset = function(node2) {
  return node2.dataset;
};
var isHTMLButtonElement = function(node2) {
  return node2.tagName === "BUTTON";
};
var isHTMLInputElement = function(node2) {
  return node2.tagName === "INPUT";
};
var isRadioElement = function(node2) {
  return isHTMLInputElement(node2) && node2.type === "radio";
};
var notHiddenInput = function(node2) {
  return !((isHTMLInputElement(node2) || isHTMLButtonElement(node2)) && (node2.type === "hidden" || node2.disabled));
};
var isAutoFocusAllowed = function(node2) {
  var attribute = node2.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node2) {
  var _a8;
  return Boolean(node2 && ((_a8 = getDataset(node2)) === null || _a8 === void 0 ? void 0 : _a8.focusGuard));
};
var isNotAGuard = function(node2) {
  return !isGuard(node2);
};
var isDefined2 = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
  var aTab = Math.max(0, a.tabIndex);
  var bTab = Math.max(0, b.tabIndex);
  var tabDiff = aTab - bTab;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!aTab) {
      return 1;
    }
    if (!bTab) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var getTabIndex = function(node2) {
  if (node2.tabIndex < 0) {
    if (!node2.hasAttribute("tabindex")) {
      return 0;
    }
  }
  return node2.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node2, index) {
    var tabIndex = getTabIndex(node2);
    return {
      node: node2,
      index,
      tabIndex: keepGuards && tabIndex === -1 ? (node2.dataset || {}).focusGuard ? 0 : -1 : tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
  var _a8;
  if (parent instanceof HTMLIFrameElement && ((_a8 = parent.contentDocument) === null || _a8 === void 0 ? void 0 : _a8.body)) {
    return getFocusables([parent.contentDocument.body], withGuards);
  }
  return [parent];
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    var _a8;
    var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
    var focusableWithIframes = (_a8 = []).concat.apply(_a8, focusableWithShadowDom.map(function(node2) {
      return getFocusablesWithIFrame(node2, withGuards);
    }));
    return acc.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      focusableWithIframes,
      // add if node is tabbable itself
      parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node2) {
        return node2 === parent;
      }) : []
    );
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node2) {
    return getFocusables([node2]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node2) {
    return isVisibleCached(visibilityCache, node2);
  }).filter(function(node2) {
    return notHiddenInput(node2);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node2) {
    return isAutoFocusAllowedCached(cache, node2);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getFocusableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains3 = function(scope, element) {
  if (scope.shadowRoot) {
    return contains3(scope.shadowRoot, element);
  } else {
    if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) {
      return true;
    }
    return toArray(scope.children).some(function(child) {
      var _a8;
      if (child instanceof HTMLIFrameElement) {
        var iframeBody = (_a8 = child.contentDocument) === null || _a8 === void 0 ? void 0 : _a8.body;
        if (iframeBody) {
          return contains3(iframeBody, element);
        }
        return false;
      }
      return contains3(child, element);
    });
  }
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position2 = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position2 & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index) {
    return !contained.has(index);
  });
};
var getTopParent = function(node2) {
  return node2.parentNode ? getTopParent(node2.parentNode) : node2;
};
var getAllAffectedNodes = function(node2) {
  var nodes = asArray(node2);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
  try {
    return cb();
  } catch (e) {
    return void 0;
  }
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
var getActiveElement2 = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  if (!inDocument || !inDocument.activeElement) {
    return void 0;
  }
  var activeElement = inDocument.activeElement;
  return activeElement.shadowRoot ? getActiveElement2(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
    return activeElement.contentWindow.document;
  }) ? getActiveElement2(activeElement.contentWindow.document) : activeElement;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame2, activeElement) {
  return frame2 === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node2) {
    return focusInFrame(node2, activeElement);
  }));
};
var focusInside = function(topNode, activeElement) {
  if (activeElement === void 0) {
    activeElement = getActiveElement2(getFirst(topNode).ownerDocument);
  }
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node2) {
    return contains3(node2, activeElement) || focusInsideIframe(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
var focusIsHidden = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  var activeElement = getActiveElement2(inDocument);
  if (!activeElement) {
    return false;
  }
  return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node2) {
    return contains3(node2, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node2, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node2.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node2;
};
var correctNode = function(node2, nodes) {
  if (isRadioElement(node2) && node2.name) {
    return findSelectedRadio(node2, nodes);
  }
  return node2;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node2) {
    return resultSet.add(correctNode(node2, nodes));
  });
  return nodes.filter(function(node2) {
    return resultSet.has(node2);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, node2) {
  return nodes.indexOf(correctNode(node2, nodes));
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  if (activeIndex === -1) {
    if (lastNodeInside !== -1) {
      return lastNodeInside;
    }
    return NEW_FOCUS;
  }
  if (lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var currentFocusableIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var previousFocusableIndex = lastNode ? correctedNodes.indexOf(lastNode) : currentFocusableIndex;
  var tabbableNodes = correctedNodes.filter(function(node2) {
    return node2.tabIndex >= 0;
  });
  var currentTabbableIndex = activeElement !== void 0 ? tabbableNodes.indexOf(activeElement) : -1;
  var previousTabbableIndex = lastNode ? tabbableNodes.indexOf(lastNode) : currentTabbableIndex;
  var focusIndexDiff = currentTabbableIndex >= 0 && previousTabbableIndex >= 0 ? (
    // old/new are tabbables, measure distance in tabbable space
    previousTabbableIndex - currentTabbableIndex
  ) : (
    // or else measure in focusable space
    previousFocusableIndex - currentFocusableIndex
  );
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (innerTabbables.length === 0) {
    return lastNodeInside;
  }
  var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
  var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(focusIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
  return function(node2) {
    var _a8;
    var autofocus = (_a8 = getDataset(node2)) === null || _a8 === void 0 ? void 0 : _a8.autofocus;
    return (
      // @ts-expect-error
      node2.autofocus || //
      autofocus !== void 0 && autofocus !== "false" || //
      autoFocusables.indexOf(node2) >= 0
    );
  };
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
  var nodes = nodesIndexes.map(function(_a8) {
    var node2 = _a8.node;
    return node2;
  });
  var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
  if (autoFocusable && autoFocusable.length) {
    return pickFirstFocus(autoFocusable);
  }
  return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node2, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node2);
  if (node2.parentNode) {
    getParents(node2.parentNode.host || node2.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains3(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node2) {
    return acc.concat(parentAutofocusables(node2, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusSolver.js
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node2) {
    return remap.get(node2);
  }).filter(isDefined2);
};
var focusSolver = function(topNode, lastNode) {
  var activeElement = getActiveElement2(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getFocusableNodes(entries, visibilityCache);
  var innerElements = anyFocusable.filter(function(_a8) {
    var node2 = _a8.node;
    return isNotAGuard(node2);
  });
  if (!innerElements[0]) {
    return void 0;
  }
  var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a8) {
    var node2 = _a8.node;
    return node2;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerFocusables = orderedInnerElements.map(function(_a8) {
    var node2 = _a8.node;
    return node2;
  });
  var innerTabbable = orderedInnerElements.filter(function(_a8) {
    var tabIndex = _a8.tabIndex;
    return tabIndex >= 0;
  }).map(function(_a8) {
    var node2 = _a8.node;
    return node2;
  });
  var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var focusNode = (
      // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
      pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache))
    );
    if (focusNode) {
      return { node: focusNode };
    } else {
      console.warn("focus-lock: cannot find any node to move focus into");
      return void 0;
    }
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
var expandFocusableNodes = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
  var innerElements = getFocusables(entries, false);
  return outerNodes.map(function(_a8) {
    var node2 = _a8.node, index = _a8.index;
    return {
      node: node2,
      index,
      lockItem: innerElements.indexOf(node2) >= 0,
      guard: isGuard(node2)
    };
  });
};

// node_modules/focus-lock/dist/es2015/commands.js
var focusOn = function(target, focusOptions) {
  if (!target) {
    return;
  }
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};

// node_modules/focus-lock/dist/es2015/moveFocusInside.js
var guardCount = 0;
var lockDisabled = false;
var moveFocusInside = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = focusSolver(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/return-focus.js
function weakRef(value) {
  if (!value)
    return null;
  if (typeof WeakRef === "undefined") {
    return function() {
      return value || null;
    };
  }
  var w = value ? new WeakRef(value) : null;
  return function() {
    return (w === null || w === void 0 ? void 0 : w.deref()) || null;
  };
}
var recordElementLocation = function(element) {
  if (!element) {
    return null;
  }
  var stack = [];
  var currentElement = element;
  while (currentElement && currentElement !== document.body) {
    stack.push({
      current: weakRef(currentElement),
      parent: weakRef(currentElement.parentElement),
      left: weakRef(currentElement.previousElementSibling),
      right: weakRef(currentElement.nextElementSibling)
    });
    currentElement = currentElement.parentElement;
  }
  return {
    element: weakRef(element),
    stack,
    ownerDocument: element.ownerDocument
  };
};
var restoreFocusTo = function(location) {
  var _a8, _b3, _c3, _d3, _e2;
  if (!location) {
    return void 0;
  }
  var stack = location.stack, ownerDocument = location.ownerDocument;
  var visibilityCache = /* @__PURE__ */ new Map();
  for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
    var line = stack_1[_i];
    var parent_1 = (_a8 = line.parent) === null || _a8 === void 0 ? void 0 : _a8.call(line);
    if (parent_1 && ownerDocument.contains(parent_1)) {
      var left2 = (_b3 = line.left) === null || _b3 === void 0 ? void 0 : _b3.call(line);
      var savedCurrent = line.current();
      var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
      var right2 = (_c3 = line.right) === null || _c3 === void 0 ? void 0 : _c3.call(line);
      var focusables = getTabbableNodes([parent_1], visibilityCache);
      var aim = (
        // that is element itself
        (_e2 = (_d3 = current !== null && current !== void 0 ? current : (
          // or something in it's place
          left2 === null || left2 === void 0 ? void 0 : left2.nextElementSibling
        )) !== null && _d3 !== void 0 ? _d3 : (
          // or somebody to the right, still close enough
          right2
        )) !== null && _e2 !== void 0 ? _e2 : (
          // or somebody to the left, something?
          left2
        )
      );
      while (aim) {
        for (var _f2 = 0, focusables_1 = focusables; _f2 < focusables_1.length; _f2++) {
          var focusable = focusables_1[_f2];
          if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
            return focusable.node;
          }
        }
        aim = aim.nextElementSibling;
      }
      if (focusables.length) {
        return focusables[0].node;
      }
    }
  }
  return void 0;
};
var captureFocusRestore = function(targetElement) {
  var location = recordElementLocation(targetElement);
  return function() {
    return restoreFocusTo(location);
  };
};

// node_modules/focus-lock/dist/es2015/sibling.js
var getRelativeFocusable = function(element, scope, useTabbables) {
  if (!element || !scope) {
    console.error("no element or scope given");
    return {};
  }
  var shards = asArray(scope);
  if (shards.every(function(shard) {
    return !contains3(shard, element);
  })) {
    console.error("Active element is not contained in the scope");
    return {};
  }
  var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
  var current = focusables.findIndex(function(_a8) {
    var node2 = _a8.node;
    return node2 === element;
  });
  if (current === -1) {
    return void 0;
  }
  return {
    prev: focusables[current - 1],
    next: focusables[current + 1],
    first: focusables[0],
    last: focusables[focusables.length - 1]
  };
};
var getBoundary = function(shards, useTabbables) {
  var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
  return {
    first: set[0],
    last: set[set.length - 1]
  };
};
var defaultOptions2 = function(options) {
  return Object.assign({
    scope: document.body,
    cycle: true,
    onlyTabbable: true
  }, options);
};
var moveFocus = function(fromElement, options, cb) {
  if (options === void 0) {
    options = {};
  }
  var newOptions = defaultOptions2(options);
  var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
  if (!solution) {
    return;
  }
  var target = cb(solution, newOptions.cycle);
  if (target) {
    focusOn(target.node, newOptions.focusOptions);
  }
};
var focusNextElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a8, cycle) {
    var next = _a8.next, first = _a8.first;
    return next || cycle && first;
  });
};
var focusPrevElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a8, cycle) {
    var prev = _a8.prev, last = _a8.last;
    return prev || cycle && last;
  });
};
var pickBoundary = function(scope, options, what) {
  var _a8;
  var boundary = getBoundary(scope, (_a8 = options.onlyTabbable) !== null && _a8 !== void 0 ? _a8 : true);
  var node2 = boundary[what];
  if (node2) {
    focusOn(node2.node, options.focusOptions);
  }
};
var focusFirstElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "first");
};
var focusLastElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "last");
};

// node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
  setTimeout(action, 1);
}
var inlineProp = function inlineProp2(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus2() {
  return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end2, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end2);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var getNodeFocusables = function getNodeFocusables2(nodes) {
  return getFocusableNodes(nodes, /* @__PURE__ */ new Map());
};
var isNotFocusable = function isNotFocusable2(node2) {
  return !getNodeFocusables([node2.parentNode]).some(function(el) {
    return el.node === node2;
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, noFocusGuards = _lastActiveTrap.noFocusGuards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    if (focusOnBody() && lastActiveFocus && lastActiveFocus !== document.body) {
      if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
        var newTarget = tryRestoreFocus();
        if (newTarget) {
          newTarget.focus();
        }
      }
    }
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      var shouldForceRestoreFocus = function shouldForceRestoreFocus2() {
        if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) {
          return false;
        }
        var nodes = getNodeFocusables(workingArea);
        var lastIndex = nodes.findIndex(function(_ref2) {
          var node2 = _ref2.node;
          return node2 === lastActiveFocus;
        });
        return lastIndex === 0 || lastIndex === nodes.length - 1;
      };
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          lastActiveFocus = document && document.activeElement;
          if (lastActiveFocus !== document.body) {
            tryRestoreFocus = captureFocusRestore(lastActiveFocus);
          }
          focusWasOutsideWindow = false;
        }
      }
      if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var newActiveElement = document && document.activeElement;
        var allNodes = expandFocusableNodes(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node2 = _ref2.node;
          return node2;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref3) {
            var guard2 = _ref3.guard, node2 = _ref3.node;
            return guard2 && node2.dataset.focusAutoGuard;
          }).forEach(function(_ref4) {
            var node2 = _ref4.node;
            return node2.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref5) {
  var children = _ref5.children;
  return import_react77.default.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowFocus2 = function onWindowFocus3() {
  windowFocused = true;
};
var onWindowBlur2 = function onWindowBlur3() {
  windowFocused = false;
  focusWasOutsideWindow = "just";
  deferAction(function() {
    focusWasOutsideWindow = "meanwhile";
  });
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("focus", onWindowFocus2);
  window.addEventListener("blur", onWindowBlur2);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("focus", onWindowFocus2);
  window.removeEventListener("blur", onWindowBlur2);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref6) {
    var disabled = _ref6.disabled;
    return !disabled;
  });
}
var focusLockAPI = {
  moveFocusInside,
  focusInside,
  focusNextElement,
  focusPrevElement,
  focusFirstElement,
  focusLastElement,
  captureFocusRestore
};
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref7) {
      var id = _ref7.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation(focusLockAPI);
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb(focusLockAPI);
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = (0, import_react78.forwardRef)(function FocusLockUICombination(props, ref) {
  return import_react78.default.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js
var import_react79 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var AutoFocusInside = function AutoFocusInside2(_ref2) {
  var _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, children = _ref2.children, _ref$className = _ref2.className, className = _ref$className === void 0 ? void 0 : _ref$className;
  return import_react79.default.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !disabled), {
    className
  }), children);
};
AutoFocusInside.propTypes = true ? {
  children: import_prop_types4.default.node.isRequired,
  disabled: import_prop_types4.default.bool,
  className: import_prop_types4.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js
var import_react80 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var useFocusInside = function useFocusInside2(observedRef) {
  (0, import_react80.useEffect)(function() {
    var enabled = true;
    mediumEffect.useMedium(function(car) {
      var observed = observedRef && observedRef.current;
      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function() {
      enabled = false;
    };
  }, [observedRef]);
};
function MoveFocusInside(_ref2) {
  var _ref$disabled = _ref2.disabled, isDisabled = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref2.className, children = _ref2.children;
  var ref = (0, import_react80.useRef)(null);
  useFocusInside(isDisabled ? void 0 : ref);
  return import_react80.default.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !isDisabled), {
    ref,
    className
  }), children);
}
MoveFocusInside.propTypes = true ? {
  children: import_prop_types5.default.node.isRequired,
  disabled: import_prop_types5.default.bool,
  className: import_prop_types5.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js
var import_react81 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var FreeFocusInside = function FreeFocusInside2(_ref2) {
  var children = _ref2.children, className = _ref2.className;
  return import_react81.default.createElement("div", _extends({}, inlineProp(FOCUS_ALLOW, true), {
    className
  }), children);
};
FreeFocusInside.propTypes = true ? {
  children: import_prop_types6.default.node.isRequired,
  className: import_prop_types6.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/use-focus-scope.js
var import_react82 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var import_react83 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/nano-events.js
var createNanoEvents = function createNanoEvents2() {
  return {
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var i = 0, callbacks = this.events[event] || [], length = callbacks.length; i < length; i++) {
        callbacks[i].apply(callbacks, args);
      }
    },
    events: {},
    on: function on(event, cb) {
      var _this$events, _this = this;
      ((_this$events = this.events)[event] || (_this$events[event] = [])).push(cb);
      return function() {
        var _this$events$event;
        _this.events[event] = (_this$events$event = _this.events[event]) == null ? void 0 : _this$events$event.filter(function(i) {
          return cb !== i;
        });
      };
    }
  };
};

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var mainbus = createNanoEvents();

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default = Combination_default;

// node_modules/@chakra-ui/react/dist/esm/focus-lock/focus-lock.mjs
var import_react84 = __toESM(require_react(), 1);
var FocusTrap3 = es2015_default.default ?? es2015_default;
var FocusLock2 = (props) => {
  const {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  const onActivation = (0, import_react84.useCallback)(() => {
    if (initialFocusRef == null ? void 0 : initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef == null ? void 0 : contentRef.current) {
      const focusables = getAllFocusable(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          var _a8;
          (_a8 = contentRef.current) == null ? void 0 : _a8.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = (0, import_react84.useCallback)(() => {
    var _a8;
    (_a8 = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _a8.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return (0, import_jsx_runtime64.jsx)(
    FocusTrap3,
    {
      crossFrame: lockFocusAcrossFrames,
      persistentFocus,
      autoFocus,
      disabled: isDisabled,
      onActivation,
      onDeactivation,
      returnFocus,
      children
    }
  );
};
FocusLock2.displayName = "FocusLock";

// node_modules/@chakra-ui/react/dist/esm/form-control/form-error.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var [FormErrorStylesProvider, useFormErrorStyles] = createContext({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = forwardRef2(
  (props, ref) => {
    const styles2 = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return (0, import_jsx_runtime65.jsx)(FormErrorStylesProvider, { value: styles2, children: (0, import_jsx_runtime65.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles2.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = forwardRef2((props, ref) => {
  const styles2 = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return (0, import_jsx_runtime65.jsx)(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles2.icon,
      className: _className,
      children: (0, import_jsx_runtime65.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";

// node_modules/@chakra-ui/react/dist/esm/form-control/form-label.mjs
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var FormLabel = forwardRef2(
  function FormLabel2(passedProps, ref) {
    const styles2 = useStyleConfig("FormLabel", passedProps);
    const props = omitThemingProps(passedProps);
    const {
      className,
      children,
      requiredIndicator = (0, import_jsx_runtime66.jsx)(RequiredIndicator, {}),
      optionalIndicator = null,
      ...rest
    } = props;
    const field = useFormControlContext();
    const ownProps = (field == null ? void 0 : field.getLabelProps(rest, ref)) ?? { ref, ...rest };
    return (0, import_jsx_runtime66.jsxs)(
      chakra.label,
      {
        ...ownProps,
        className: cx("chakra-form__label", props.className),
        __css: {
          display: "block",
          textAlign: "start",
          ...styles2
        },
        children: [
          children,
          (field == null ? void 0 : field.isRequired) ? requiredIndicator : optionalIndicator
        ]
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
var RequiredIndicator = forwardRef2(
  function RequiredIndicator2(props, ref) {
    const field = useFormControlContext();
    const styles2 = useFormControlStyles();
    if (!(field == null ? void 0 : field.isRequired))
      return null;
    const className = cx("chakra-form__required-indicator", props.className);
    return (0, import_jsx_runtime66.jsx)(
      chakra.span,
      {
        ...field == null ? void 0 : field.getRequiredIndicatorProps(props, ref),
        __css: styles2.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

// node_modules/@chakra-ui/react/dist/esm/grid/grid.mjs
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var Grid = forwardRef2(function Grid2(props, ref) {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props;
  const styles2 = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return (0, import_jsx_runtime67.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});
Grid.displayName = "Grid";

// node_modules/@chakra-ui/react/dist/esm/grid/grid-item.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
function spanFn(span) {
  return mapResponsive(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
var GridItem = forwardRef2(
  function GridItem2(props, ref) {
    const {
      area,
      colSpan,
      colStart,
      colEnd,
      rowEnd,
      rowSpan,
      rowStart,
      ...rest
    } = props;
    const styles2 = compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return (0, import_jsx_runtime68.jsx)(chakra.div, { ref, __css: styles2, ...rest });
  }
);
GridItem.displayName = "GridItem";

// node_modules/@chakra-ui/react/dist/esm/grid/simple-grid.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var SimpleGrid = forwardRef2(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing: spacing2, minChildWidth, ...rest } = props;
    const theme2 = useTheme();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme2) : countToColumns(columns);
    return (0, import_jsx_runtime69.jsx)(
      Grid,
      {
        ref,
        gap: spacing2,
        columnGap: spacingX,
        rowGap: spacingY,
        templateColumns,
        ...rest
      }
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, theme2) {
  return mapResponsive(width, (value) => {
    const _value = getToken("sizes", value, toPx(value))(theme2);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapResponsive(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

// node_modules/@chakra-ui/react/dist/esm/highlight/highlight.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react86 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/highlight/mark.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var Mark = forwardRef2(function Mark2(props, ref) {
  const styles2 = useStyleConfig("Mark", props);
  const ownProps = omitThemingProps(props);
  return (0, import_jsx_runtime70.jsx)(
    Box,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles2 }
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/highlight/use-highlight.mjs
var import_react85 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/highlight/highlight-words.mjs
var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char) => `\\${char}`);
function buildRegex(query) {
  const _query = query.filter((text) => text.length !== 0).map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }
  return new RegExp(`(${_query.join("|")})`, "ig");
}
function highlightWords({ text, query }) {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}

// node_modules/@chakra-ui/react/dist/esm/highlight/use-highlight.mjs
function useHighlight(props) {
  const { text, query } = props;
  return (0, import_react85.useMemo)(() => highlightWords({ text, query }), [text, query]);
}

// node_modules/@chakra-ui/react/dist/esm/highlight/highlight.mjs
function Highlight(props) {
  const { children, query, styles: styles2 } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({ query, text: children });
  return (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: chunks.map((chunk, index) => {
    return chunk.match ? (0, import_jsx_runtime71.jsx)(Mark, { sx: styles2, children: chunk.text }, index) : (0, import_jsx_runtime71.jsx)(import_react86.Fragment, { children: chunk.text }, index);
  }) });
}

// node_modules/@chakra-ui/react/dist/esm/icon/create-icon.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react87 = __toESM(require_react(), 1);
function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps: defaultProps2 = {}
  } = options;
  const path = import_react87.Children.toArray(options.path);
  const Comp = forwardRef2((props, ref) => (0, import_jsx_runtime72.jsx)(Icon, { ref, viewBox, ...defaultProps2, ...props, children: path.length ? path : (0, import_jsx_runtime72.jsx)("path", { fill: "currentColor", d: pathDefinition }) }));
  Comp.displayName = displayName;
  return Comp;
}

// node_modules/@chakra-ui/react/dist/esm/image/image.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/image/native-image.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var NativeImage = forwardRef2(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return (0, import_jsx_runtime73.jsx)("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

// node_modules/@chakra-ui/react/dist/esm/image/image.mjs
var Image2 = forwardRef2(function Image22(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || // use can opt out of fallback image
  ignoreFallback || // if the user doesn't provide any kind of fallback we should ignore it
  !providedFallback;
  const status = useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return (0, import_jsx_runtime74.jsx)(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return (0, import_jsx_runtime74.jsx)(
    chakra.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image2.displayName = "Image";

// node_modules/@chakra-ui/react/dist/esm/image/img.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var Img = forwardRef2((props, ref) => (0, import_jsx_runtime75.jsx)(chakra.img, { ref, as: NativeImage, className: "chakra-image", ...props }));

// node_modules/@chakra-ui/react/dist/esm/indicator/indicator.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var import_react88 = __toESM(require_react(), 1);
var Indicator = forwardRef2(
  function Indicator2(props, ref) {
    const {
      offsetX,
      offsetY,
      offset: offset2 = "0",
      placement = "top-end",
      ...rest
    } = props;
    const styles2 = (0, import_react88.useMemo)(
      () => ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        insetBlockStart: mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: offsetY ?? offset2,
            middle: "50%",
            bottom: "auto"
          };
          return map[side];
        }),
        insetBlockEnd: mapResponsive(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset2
          };
          return map[side];
        }),
        insetStart: mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: offsetX ?? offset2,
            center: "50%",
            end: "auto"
          };
          return map[align];
        }),
        insetEnd: mapResponsive(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset2
          };
          return map[align];
        }),
        translate: mapResponsive(placement, (v) => {
          const [side, align] = v.split("-");
          const mapX = { start: "-50%", center: "-50%", end: "50%" };
          const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
          return `${mapX[align]} ${mapY[side]}`;
        })
      }),
      [offset2, offsetX, offsetY, placement]
    );
    return (0, import_jsx_runtime76.jsx)(chakra.div, { ref, __css: styles2, ...rest });
  }
);

// node_modules/@chakra-ui/react/dist/esm/input/input.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var Input = forwardRef2(
  function Input2(props, ref) {
    const { htmlSize, ...rest } = props;
    const styles2 = useMultiStyleConfig("Input", rest);
    const ownProps = omitThemingProps(rest);
    const input = useFormControl(ownProps);
    const _className = cx("chakra-input", props.className);
    return (0, import_jsx_runtime77.jsx)(
      chakra.input,
      {
        size: htmlSize,
        ...input,
        __css: styles2.field,
        ref,
        className: _className
      }
    );
  }
);
Input.displayName = "Input";
Input.id = "Input";

// node_modules/@chakra-ui/react/dist/esm/input/input-addon.mjs
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/input/input-group.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var import_react89 = __toESM(require_react(), 1);
var [InputGroupStylesProvider, useInputGroupStyles] = createContext({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
var InputGroup = forwardRef2(
  function InputGroup2(props, ref) {
    const styles2 = useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = omitThemingProps(props);
    const _className = cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = getValidChildren(children);
    const input = styles2.field;
    validChildren.forEach((child) => {
      if (!styles2)
        return;
      if (input && child.type.id === "InputLeftElement") {
        groupStyles.paddingStart = input.height ?? input.h;
      }
      if (input && child.type.id === "InputRightElement") {
        groupStyles.paddingEnd = input.height ?? input.h;
      }
      if (child.type.id === "InputRightAddon") {
        groupStyles.borderEndRadius = 0;
      }
      if (child.type.id === "InputLeftAddon") {
        groupStyles.borderStartRadius = 0;
      }
    });
    const clones = validChildren.map((child) => {
      var _a8, _b3;
      const theming = compact({
        size: ((_a8 = child.props) == null ? void 0 : _a8.size) || props.size,
        variant: ((_b3 = child.props) == null ? void 0 : _b3.variant) || props.variant
      });
      return child.type.id !== "Input" ? (0, import_react89.cloneElement)(child, theming) : (0, import_react89.cloneElement)(child, Object.assign(theming, groupStyles, child.props));
    });
    return (0, import_jsx_runtime78.jsx)(
      chakra.div,
      {
        className: _className,
        ref,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          // Parts of inputs override z-index to ensure that they stack correctly on each other
          // Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
          isolation: "isolate",
          ...styles2.group
        },
        "data-group": true,
        ...rest,
        children: (0, import_jsx_runtime78.jsx)(InputGroupStylesProvider, { value: styles2, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// node_modules/@chakra-ui/react/dist/esm/input/input-addon.mjs
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
var InputAddon = forwardRef2(
  function InputAddon2(props, ref) {
    const { placement = "left", ...rest } = props;
    const placementStyles = placements[placement] ?? {};
    const styles2 = useInputGroupStyles();
    return (0, import_jsx_runtime79.jsx)(
      StyledAddon,
      {
        ref,
        ...rest,
        __css: {
          ...styles2.addon,
          ...placementStyles
        }
      }
    );
  }
);
InputAddon.displayName = "InputAddon";
var InputLeftAddon = forwardRef2(
  function InputLeftAddon2(props, ref) {
    return (0, import_jsx_runtime79.jsx)(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
var InputRightAddon = forwardRef2(
  function InputRightAddon2(props, ref) {
    return (0, import_jsx_runtime79.jsx)(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

// node_modules/@chakra-ui/react/dist/esm/input/input-element.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var StyledInputElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = forwardRef2(
  function InputElement2(props, ref) {
    const { placement = "left", ...rest } = props;
    const styles2 = useInputGroupStyles();
    const input = styles2.field;
    const attr = placement === "left" ? "insetStart" : "insetEnd";
    const elementStyles = {
      [attr]: "0",
      width: (input == null ? void 0 : input.height) ?? (input == null ? void 0 : input.h),
      height: (input == null ? void 0 : input.height) ?? (input == null ? void 0 : input.h),
      fontSize: input == null ? void 0 : input.fontSize,
      ...styles2.element
    };
    return (0, import_jsx_runtime80.jsx)(StyledInputElement, { ref, __css: elementStyles, ...rest });
  }
);
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
var InputLeftElement = forwardRef2(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__left-element", className);
    return (0, import_jsx_runtime80.jsx)(
      InputElement,
      {
        ref,
        placement: "left",
        className: _className,
        ...rest
      }
    );
  }
);
InputLeftElement.id = "InputLeftElement";
InputLeftElement.displayName = "InputLeftElement";
var InputRightElement = forwardRef2(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__right-element", className);
    return (0, import_jsx_runtime80.jsx)(
      InputElement,
      {
        ref,
        placement: "right",
        className: _className,
        ...rest
      }
    );
  }
);
InputRightElement.id = "InputRightElement";
InputRightElement.displayName = "InputRightElement";

// node_modules/@chakra-ui/react/dist/esm/kbd/kbd.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var Kbd = forwardRef2(function Kbd2(props, ref) {
  const styles2 = useStyleConfig("Kbd", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime81.jsx)(
    chakra.kbd,
    {
      ref,
      className: cx("chakra-kbd", className),
      ...rest,
      __css: {
        fontFamily: "mono",
        ...styles2
      }
    }
  );
});
Kbd.displayName = "Kbd";

// node_modules/@chakra-ui/react/dist/esm/link/link.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var Link = forwardRef2(function Link2(props, ref) {
  const styles2 = useStyleConfig("Link", props);
  const { className, isExternal, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime82.jsx)(
    chakra.a,
    {
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener" : void 0,
      ref,
      className: cx("chakra-link", className),
      ...rest,
      __css: styles2
    }
  );
});
Link.displayName = "Link";

// node_modules/@chakra-ui/react/dist/esm/link/link-box.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var LinkOverlay = forwardRef2(
  function LinkOverlay2(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return (0, import_jsx_runtime83.jsx)(
      chakra.a,
      {
        ...rest,
        ref,
        className: cx("chakra-linkbox__overlay", className),
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
);
var LinkBox = forwardRef2(
  function LinkBox2(props, ref) {
    const { className, ...rest } = props;
    return (0, import_jsx_runtime83.jsx)(
      chakra.div,
      {
        ref,
        position: "relative",
        ...rest,
        className: cx("chakra-linkbox", className),
        __css: {
          /* Elevate the links and abbreviations up */
          "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
            position: "relative",
            zIndex: 1
          }
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/list/list.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var [ListStylesProvider, useListStyles] = createContext({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
var List = forwardRef2(function List2(props, ref) {
  const styles2 = useMultiStyleConfig("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing: spacing2,
    ...rest
  } = omitThemingProps(props);
  const validChildren = getValidChildren(children);
  const selector = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing2 ? { [selector]: { mt: spacing2 } } : {};
  return (0, import_jsx_runtime84.jsx)(ListStylesProvider, { value: styles2, children: (0, import_jsx_runtime84.jsx)(
    chakra.ul,
    {
      ref,
      listStyleType: styleType,
      listStylePosition: stylePosition,
      role: "list",
      __css: { ...styles2.container, ...spacingStyle },
      ...rest,
      children: validChildren
    }
  ) });
});
List.displayName = "List";
var OrderedList = forwardRef2((props, ref) => {
  const { as, ...rest } = props;
  return (0, import_jsx_runtime84.jsx)(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
var UnorderedList = forwardRef2(
  function UnorderedList2(props, ref) {
    const { as, ...rest } = props;
    return (0, import_jsx_runtime84.jsx)(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
  }
);
UnorderedList.displayName = "UnorderedList";
var ListItem = forwardRef2(
  function ListItem2(props, ref) {
    const styles2 = useListStyles();
    return (0, import_jsx_runtime84.jsx)(chakra.li, { ref, ...props, __css: styles2.item });
  }
);
ListItem.displayName = "ListItem";
var ListIcon = forwardRef2(
  function ListIcon2(props, ref) {
    const styles2 = useListStyles();
    return (0, import_jsx_runtime84.jsx)(Icon, { ref, role: "presentation", ...props, __css: styles2.icon });
  }
);
ListIcon.displayName = "ListIcon";

// node_modules/@chakra-ui/react/dist/esm/media-query/hide.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/media-query/media-query.mjs
var getBreakpoint = (theme2, value) => {
  var _a8;
  return ((_a8 = theme2 == null ? void 0 : theme2.breakpoints) == null ? void 0 : _a8[value]) ?? value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme2 = useTheme();
  const bpBelow = getBreakpoint(theme2, below);
  const bpAbove = getBreakpoint(theme2, above);
  let query = breakpoint;
  if (bpBelow) {
    query = `(max-width: ${bpBelow})`;
  } else if (bpAbove) {
    query = `(min-width: ${bpAbove})`;
  }
  return query;
}

// node_modules/@chakra-ui/react/dist/esm/media-query/use-media-query.mjs
var import_react90 = __toESM(require_react(), 1);
function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow: getWindow2 } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = (0, import_react90.useState)(() => {
    return queries.map((query2, index) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index] : getWindow2().matchMedia(query2).matches
    }));
  });
  (0, import_react90.useEffect)(() => {
    const win = getWindow2();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev) => {
        return prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow2]);
  return value.map((item) => item.matches);
}

// node_modules/@chakra-ui/react/dist/esm/media-query/visibility.mjs
function Visibility(props) {
  const { breakpoint, hide: hide2, children, ssr } = props;
  const [show] = useMediaQuery(breakpoint, { ssr });
  const isVisible2 = hide2 ? !show : show;
  const rendered = isVisible2 ? children : null;
  return rendered;
}

// node_modules/@chakra-ui/react/dist/esm/media-query/hide.mjs
function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime85.jsx)(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

// node_modules/@chakra-ui/react/dist/esm/media-query/media-query.hook.mjs
function usePrefersReducedMotion(options) {
  const [prefersReducedMotion] = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    options
  );
  return prefersReducedMotion;
}
function useColorModePreference(options) {
  const [isLight2, isDark2] = useMediaQuery(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    options
  );
  if (isLight2)
    return "light";
  if (isDark2)
    return "dark";
  return void 0;
}

// node_modules/@chakra-ui/react/dist/esm/media-query/show.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function Show(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime86.jsx)(Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

// node_modules/@chakra-ui/react/dist/esm/media-query/use-breakpoint.mjs
function useBreakpoint(arg) {
  var _a8;
  const opts = isObject(arg) ? arg : { fallback: arg ?? "base" };
  const theme2 = useTheme();
  const breakpoints3 = theme2.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints3.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints3.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return ((_a8 = breakpoints3[index]) == null ? void 0 : _a8.breakpoint) ?? opts.fallback;
}

// node_modules/@chakra-ui/react/dist/esm/media-query/media-query.utils.mjs
function getClosestValue(values, breakpoint, breakpoints$1 = breakpoints) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints$1.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints$1[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints$1[index];
    return values[key];
  }
  return void 0;
}

// node_modules/@chakra-ui/react/dist/esm/media-query/use-breakpoint-value.mjs
function useBreakpointValue(values, arg) {
  var _a8;
  const opts = isObject(arg) ? arg : { fallback: arg ?? "base" };
  const breakpoint = useBreakpoint(opts);
  const theme2 = useTheme();
  if (!breakpoint)
    return;
  const breakpoints3 = Array.from(((_a8 = theme2.__breakpoints) == null ? void 0 : _a8.keys) || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation(values, breakpoints3)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints3);
}

// node_modules/@chakra-ui/react/dist/esm/menu/menu.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var import_react96 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/menu/use-menu.mjs
var import_react95 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/menu/get-next-item-from-search.mjs
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  }
  if (!currentItem) {
    const foundItem = items.find(
      (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
    );
    return foundItem;
  }
  const matchingItems = items.filter(
    (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
  );
  if (matchingItems.length > 0) {
    let nextIndex;
    if (matchingItems.includes(currentItem)) {
      const currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    }
    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  }
  return currentItem;
}

// node_modules/@chakra-ui/react/dist/esm/menu/use-shortcut.mjs
var import_react91 = __toESM(require_react(), 1);
function isPrintableCharacter(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys2, setKeys] = (0, import_react91.useState)([]);
  const timeoutRef = (0, import_react91.useRef)(void 0);
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react91.useEffect)(() => flush, []);
  function onKeyDown(fn2) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys2];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        const keysCopy = keys2.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn2(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements2 = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (node2.toString() !== "[object Window]") {
    var ownerDocument = node2.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node2;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement2(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement2(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref2) {
  var state2 = _ref2.state;
  Object.keys(state2.elements).forEach(function(name) {
    var style = state2.styles[name] || {};
    var attributes = state2.attributes[name] || {};
    var element = state2.elements[name];
    if (!isHTMLElement2(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name) {
      var element = state2.elements[name];
      var attributes = state2.attributes[name] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement2(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement2(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref2 = isElement2(element) ? getWindow(element) : window, visualViewport = _ref2.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains4(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement2(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode2(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement2(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement2(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement2(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css3 = getComputedStyle(currentNode);
    if (css3.transform !== "none" || css3.perspective !== "none" || css3.contain === "paint" || ["transform", "perspective"].indexOf(css3.willChange) !== -1 || isFirefox && css3.willChange === "filter" || isFirefox && css3.filter && css3.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref2) {
  var _state$modifiersData$;
  var state2 = _ref2.state, name = _ref2.name, options = _ref2.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains4(state2.elements.popper, arrowElement)) {
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref2, win) {
  var x = _ref2.x, y = _ref2.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position2 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles2 = Object.assign({
    position: position2
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles2, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles2, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state2 = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles2 = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration,
    isFixed: state2.options.strategy === "fixed"
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref2) {
  var state2 = _ref2.state, instance = _ref2.instance, options = _ref2.options;
  var _options$scroll = options.scroll, scroll2 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll2) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll2) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash3 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash3[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node2) {
  var win = getWindow(node2);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent2(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent2(node2) {
  if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement2(node2) && isScrollParent2(node2)) {
    return node2;
  }
  return getScrollParent2(getParentNode2(node2));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list2) {
  var _element$ownerDocumen;
  if (list2 === void 0) {
    list2 = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent2(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list2.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode2(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement2(element) ? getOffsetParent(element) : element;
  if (!isElement2(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement2(clippingParent) && contains4(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref2) {
  var reference2 = _ref2.reference, element = _ref2.element, placement = _ref2.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state2.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply3 = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply3;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements2 : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  if (state2.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref2) {
  var state2 = _ref2.state, name = _ref2.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref2 = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref2[0], distance2 = _ref2[1];
  skidding = skidding || 0;
  distance2 = (distance2 || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance2,
    y: skidding
  } : {
    x: skidding,
    y: distance2
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements2.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref2) {
  var state2 = _ref2.state, name = _ref2.name;
  state2.modifiersData[name] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state2.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node2) {
  if (node2 === getWindow(node2) || !isHTMLElement2(node2)) {
    return getWindowScroll(node2);
  } else {
    return getHTMLElementScroll(node2);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement2(offsetParent);
  var offsetParentIsScaled = isHTMLElement2(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent2(documentElement)) {
      scroll2 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement2(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll2.scrollLeft - offsets.x,
    y: rect.top + scroll2.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions3 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions3;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions3),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions3, state2.options, options2);
        state2.scrollParents = {
          reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state2.orderedModifiers.length; index++) {
          if (state2.reset === true) {
            state2.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state2 = fn2({
              state: state2,
              options: _options,
              name,
              instance
            }) || state2;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref2) {
        var name = _ref2.name, _ref$options = _ref2.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref2.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state: state2,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@chakra-ui/react/dist/esm/popper/use-popper.mjs
var import_react92 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/popper/utils.mjs
var toVar2 = (value, fallback) => ({
  var: value,
  varRef: fallback ? `var(${value}, ${fallback})` : `var(${value})`
});
var cssVars = {
  arrowShadowColor: toVar2("--popper-arrow-shadow-color"),
  arrowSize: toVar2("--popper-arrow-size", "8px"),
  arrowSizeHalf: toVar2("--popper-arrow-size-half"),
  arrowBg: toVar2("--popper-arrow-bg"),
  transformOrigin: toVar2("--popper-transform-origin"),
  arrowOffset: toVar2("--popper-arrow-offset")
};
function getBoxShadow(placement) {
  if (placement.includes("top"))
    return `1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("bottom"))
    return `-1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("right"))
    return `-1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("left"))
    return `1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
}
var transforms = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};
var toTransformOrigin = (placement) => transforms[placement];
var defaultEventListeners = {
  scroll: true,
  resize: true
};
function getEventListenerOptions(value) {
  let eventListeners;
  if (typeof value === "object") {
    eventListeners = {
      enabled: true,
      options: { ...defaultEventListeners, ...value }
    };
  } else {
    eventListeners = {
      enabled: value,
      options: defaultEventListeners
    };
  }
  return eventListeners;
}

// node_modules/@chakra-ui/react/dist/esm/popper/modifiers.mjs
var matchWidth = {
  name: "matchWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: state2 }) => {
    state2.styles.popper.width = `${state2.rects.reference.width}px`;
  },
  effect: ({ state: state2 }) => () => {
    const reference2 = state2.elements.reference;
    state2.elements.popper.style.width = `${reference2.offsetWidth}px`;
  }
};
var transformOrigin = {
  name: "transformOrigin",
  enabled: true,
  phase: "write",
  fn: ({ state: state2 }) => {
    setTransformOrigin(state2);
  },
  effect: ({ state: state2 }) => () => {
    setTransformOrigin(state2);
  }
};
var setTransformOrigin = (state2) => {
  state2.elements.popper.style.setProperty(
    cssVars.transformOrigin.var,
    toTransformOrigin(state2.placement)
  );
};
var positionArrow = {
  name: "positionArrow",
  enabled: true,
  phase: "afterWrite",
  fn: ({ state: state2 }) => {
    setArrowStyles(state2);
  }
};
var setArrowStyles = (state2) => {
  var _a8;
  if (!state2.placement)
    return;
  const overrides = getArrowStyle(state2.placement);
  if (((_a8 = state2.elements) == null ? void 0 : _a8.arrow) && overrides) {
    Object.assign(state2.elements.arrow.style, {
      [overrides.property]: overrides.value,
      width: cssVars.arrowSize.varRef,
      height: cssVars.arrowSize.varRef,
      zIndex: -1
    });
    const vars2 = {
      [cssVars.arrowSizeHalf.var]: `calc(${cssVars.arrowSize.varRef} / 2 - 1px)`,
      [cssVars.arrowOffset.var]: `calc(${cssVars.arrowSizeHalf.varRef} * -1)`
    };
    for (const property in vars2) {
      state2.elements.arrow.style.setProperty(property, vars2[property]);
    }
  }
};
var getArrowStyle = (placement) => {
  if (placement.startsWith("top")) {
    return { property: "bottom", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("bottom")) {
    return { property: "top", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("left")) {
    return { property: "right", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("right")) {
    return { property: "left", value: cssVars.arrowOffset.varRef };
  }
};
var innerArrow = {
  name: "innerArrow",
  enabled: true,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: state2 }) => {
    setInnerArrowStyles(state2);
  },
  effect: ({ state: state2 }) => () => {
    setInnerArrowStyles(state2);
  }
};
var setInnerArrowStyles = (state2) => {
  if (!state2.elements.arrow)
    return;
  const inner = state2.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!inner)
    return;
  const boxShadow = getBoxShadow(state2.placement);
  if (boxShadow) {
    inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
  }
  Object.assign(inner.style, {
    transform: "rotate(45deg)",
    background: cssVars.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
  });
};

// node_modules/@chakra-ui/react/dist/esm/popper/popper.placement.mjs
var logicals = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
var opposites = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir = "ltr") {
  var _a8;
  const value = ((_a8 = logicals[placement]) == null ? void 0 : _a8[dir]) || placement;
  if (dir === "ltr")
    return value;
  return opposites[placement] ?? value;
}

// node_modules/@chakra-ui/react/dist/esm/popper/use-popper.mjs
function usePopper(props = {}) {
  const {
    enabled = true,
    modifiers,
    placement: placementProp = "bottom",
    strategy = "absolute",
    arrowPadding = 8,
    eventListeners = true,
    offset: offset2,
    gutter = 8,
    flip: flip2 = true,
    boundary = "clippingParents",
    preventOverflow: preventOverflow2 = true,
    matchWidth: matchWidth$1,
    direction: direction2 = "ltr"
  } = props;
  const reference2 = (0, import_react92.useRef)(null);
  const popper2 = (0, import_react92.useRef)(null);
  const instance = (0, import_react92.useRef)(null);
  const placement = getPopperPlacement(placementProp, direction2);
  const cleanup = (0, import_react92.useRef)(() => {
  });
  const setupPopper = (0, import_react92.useCallback)(() => {
    var _a8;
    if (!enabled || !reference2.current || !popper2.current)
      return;
    (_a8 = cleanup.current) == null ? void 0 : _a8.call(cleanup);
    instance.current = createPopper3(reference2.current, popper2.current, {
      placement,
      modifiers: [
        innerArrow,
        positionArrow,
        transformOrigin,
        {
          ...matchWidth,
          enabled: !!matchWidth$1
        },
        {
          name: "eventListeners",
          ...getEventListenerOptions(eventListeners)
        },
        {
          name: "arrow",
          options: { padding: arrowPadding }
        },
        {
          name: "offset",
          options: {
            offset: offset2 ?? [0, gutter]
          }
        },
        {
          name: "flip",
          enabled: !!flip2,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!preventOverflow2,
          options: { boundary }
        },
        // allow users override internal modifiers
        ...modifiers ?? []
      ],
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [
    placement,
    enabled,
    modifiers,
    matchWidth$1,
    eventListeners,
    arrowPadding,
    offset2,
    gutter,
    flip2,
    preventOverflow2,
    boundary,
    strategy
  ]);
  (0, import_react92.useEffect)(() => {
    return () => {
      var _a8;
      if (!reference2.current && !popper2.current) {
        (_a8 = instance.current) == null ? void 0 : _a8.destroy();
        instance.current = null;
      }
    };
  }, []);
  const referenceRef = (0, import_react92.useCallback)(
    (node2) => {
      reference2.current = node2;
      setupPopper();
    },
    [setupPopper]
  );
  const getReferenceProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(referenceRef, ref)
    }),
    [referenceRef]
  );
  const popperRef = (0, import_react92.useCallback)(
    (node2) => {
      popper2.current = node2;
      setupPopper();
    },
    [setupPopper]
  );
  const getPopperProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(popperRef, ref),
      style: {
        ...props2.style,
        position: strategy,
        minWidth: matchWidth$1 ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [strategy, popperRef, matchWidth$1]
  );
  const getArrowProps = (0, import_react92.useCallback)((props2 = {}, ref = null) => {
    const { size: size2, shadowColor, bg, style, ...rest } = props2;
    return {
      ...rest,
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle2(props2)
    };
  }, []);
  const getArrowInnerProps = (0, import_react92.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var _a8;
      (_a8 = instance.current) == null ? void 0 : _a8.update();
    },
    forceUpdate() {
      var _a8;
      (_a8 = instance.current) == null ? void 0 : _a8.forceUpdate();
    },
    transformOrigin: cssVars.transformOrigin.varRef,
    referenceRef,
    popperRef,
    getPopperProps,
    getArrowProps,
    getArrowInnerProps,
    getReferenceProps
  };
}
function getArrowStyle2(props) {
  const { size: size2, shadowColor, bg, style } = props;
  const computedStyle = { ...style, position: "absolute" };
  if (size2) {
    computedStyle["--popper-arrow-size"] = size2;
  }
  if (shadowColor) {
    computedStyle["--popper-arrow-shadow-color"] = shadowColor;
  }
  if (bg) {
    computedStyle["--popper-arrow-bg"] = bg;
  }
  return computedStyle;
}

// node_modules/@chakra-ui/react/dist/esm/clickable/use-clickable.mjs
var import_react94 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/clickable/use-event-listeners.mjs
var import_react93 = __toESM(require_react(), 1);
function useEventListeners() {
  const listeners = (0, import_react93.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add3 = (0, import_react93.useCallback)((el, type, listener, options) => {
    listeners.current.set(listener, { type, el, options });
    el.addEventListener(type, listener, options);
  }, []);
  const remove = (0, import_react93.useCallback)(
    (el, type, listener, options) => {
      el.removeEventListener(type, listener, options);
      listeners.current.delete(listener);
    },
    []
  );
  (0, import_react93.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add: add3, remove };
}

// node_modules/@chakra-ui/react/dist/esm/clickable/use-clickable.mjs
function isValidElement4(event) {
  var _a8, _b3;
  const target = ((_b3 = (_a8 = event.composedPath) == null ? void 0 : _a8.call(event)) == null ? void 0 : _b3[0]) ?? event.target;
  const { tagName, isContentEditable } = target;
  return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true;
}
function useClickable(props = {}) {
  const {
    ref: htmlRef,
    isDisabled,
    isFocusable: isFocusable2,
    clickOnEnter = true,
    clickOnSpace = true,
    onMouseDown,
    onMouseUp,
    onClick,
    onKeyDown,
    onKeyUp,
    tabIndex: tabIndexProp,
    onMouseOver,
    onMouseLeave,
    ...htmlProps
  } = props;
  const [isButton, setIsButton] = (0, import_react94.useState)(true);
  const [isPressed, setIsPressed] = (0, import_react94.useState)(false);
  const listeners = useEventListeners();
  const refCallback = (node2) => {
    if (!node2)
      return;
    if (node2.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  const trulyDisabled = isDisabled && !isFocusable2;
  const handleClick = (0, import_react94.useCallback)(
    (event) => {
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      const self2 = event.currentTarget;
      self2.focus();
      onClick == null ? void 0 : onClick(event);
    },
    [isDisabled, onClick]
  );
  const onDocumentKeyUp = (0, import_react94.useCallback)(
    (e) => {
      if (isPressed && isValidElement4(e)) {
        e.preventDefault();
        e.stopPropagation();
        setIsPressed(false);
        listeners.remove(document, "keyup", onDocumentKeyUp, false);
      }
    },
    [isPressed, listeners]
  );
  const handleKeyDown = (0, import_react94.useCallback)(
    (event) => {
      onKeyDown == null ? void 0 : onKeyDown(event);
      if (isDisabled || event.defaultPrevented || event.metaKey) {
        return;
      }
      if (!isValidElement4(event.nativeEvent) || isButton)
        return;
      const shouldClickOnEnter = clickOnEnter && event.key === "Enter";
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(true);
      }
      if (shouldClickOnEnter) {
        event.preventDefault();
        const self2 = event.currentTarget;
        self2.click();
      }
      listeners.add(document, "keyup", onDocumentKeyUp, false);
    },
    [
      isDisabled,
      isButton,
      onKeyDown,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp
    ]
  );
  const handleKeyUp = (0, import_react94.useCallback)(
    (event) => {
      onKeyUp == null ? void 0 : onKeyUp(event);
      if (isDisabled || event.defaultPrevented || event.metaKey)
        return;
      if (!isValidElement4(event.nativeEvent) || isButton)
        return;
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(false);
        const self2 = event.currentTarget;
        self2.click();
      }
    },
    [clickOnSpace, isButton, isDisabled, onKeyUp]
  );
  const onDocumentMouseUp = (0, import_react94.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      setIsPressed(false);
      listeners.remove(document, "mouseup", onDocumentMouseUp, false);
    },
    [listeners]
  );
  const handleMouseDown = (0, import_react94.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      if (!isButton) {
        setIsPressed(true);
      }
      const target = event.currentTarget;
      target.focus({ preventScroll: true });
      listeners.add(document, "mouseup", onDocumentMouseUp, false);
      onMouseDown == null ? void 0 : onMouseDown(event);
    },
    [isDisabled, isButton, onMouseDown, listeners, onDocumentMouseUp]
  );
  const handleMouseUp = (0, import_react94.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (!isButton) {
        setIsPressed(false);
      }
      onMouseUp == null ? void 0 : onMouseUp(event);
    },
    [onMouseUp, isButton]
  );
  const handleMouseOver = (0, import_react94.useCallback)(
    (event) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onMouseOver == null ? void 0 : onMouseOver(event);
    },
    [isDisabled, onMouseOver]
  );
  const handleMouseLeave = (0, import_react94.useCallback)(
    (event) => {
      if (isPressed) {
        event.preventDefault();
        setIsPressed(false);
      }
      onMouseLeave == null ? void 0 : onMouseLeave(event);
    },
    [isPressed, onMouseLeave]
  );
  const ref = mergeRefs(htmlRef, refCallback);
  if (isButton) {
    return {
      ...htmlProps,
      ref,
      type: "button",
      "aria-disabled": trulyDisabled ? void 0 : isDisabled,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave
    };
  }
  return {
    ...htmlProps,
    ref,
    role: "button",
    "data-active": dataAttr(isPressed),
    "aria-disabled": isDisabled ? "true" : void 0,
    tabIndex: trulyDisabled ? void 0 : tabIndex,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  };
}

// node_modules/@chakra-ui/react/dist/esm/menu/use-menu.mjs
var [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant
] = createDescendantContext();
var [MenuProvider, useMenuContext] = createContext({
  strict: false,
  name: "MenuContext"
});
function getOwnerDocument3(node2) {
  return (node2 == null ? void 0 : node2.ownerDocument) ?? document;
}
function isActiveElement2(element) {
  const doc = getOwnerDocument3(element);
  return doc.activeElement === element;
}
function useMenu(props = {}) {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    initialFocusRef,
    autoSelect = true,
    isLazy,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    lazyBehavior = "unmount",
    direction: direction2,
    computePositionOnMount = false,
    ...popperProps
  } = props;
  const menuRef = (0, import_react95.useRef)(null);
  const buttonRef = (0, import_react95.useRef)(null);
  const scrollIntoViewRef = (0, import_react95.useRef)(true);
  const descendants = useMenuDescendants();
  const focusMenu = (0, import_react95.useCallback)(() => {
    requestAnimationFrame(() => {
      var _a8;
      (_a8 = menuRef.current) == null ? void 0 : _a8.focus({ preventScroll: false });
    });
  }, []);
  const focusFirstItem = (0, import_react95.useCallback)(() => {
    const id2 = setTimeout(() => {
      var _a8, _b3;
      if (initialFocusRef) {
        (_a8 = initialFocusRef.current) == null ? void 0 : _a8.focus();
      } else if (!descendants.count()) {
        (_b3 = menuRef.current) == null ? void 0 : _b3.focus({ preventScroll: false });
      } else {
        const first = descendants.firstEnabled();
        if (first)
          setFocusedIndex(first.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants, initialFocusRef]);
  const focusLastItem = (0, import_react95.useCallback)(() => {
    const id2 = setTimeout(() => {
      var _a8;
      if (!descendants.count()) {
        (_a8 = menuRef.current) == null ? void 0 : _a8.focus({ preventScroll: false });
      } else {
        const last = descendants.lastEnabled();
        if (last)
          setFocusedIndex(last.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants]);
  const onOpenInternal = (0, import_react95.useCallback)(() => {
    onOpenProp == null ? void 0 : onOpenProp();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  });
  useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      var _a8, _b3, _c3;
      const target = ((_b3 = (_a8 = event.composedPath) == null ? void 0 : _a8.call(event)) == null ? void 0 : _b3[0]) ?? event.target;
      if (!((_c3 = buttonRef.current) == null ? void 0 : _c3.contains(target))) {
        onClose();
      }
    }
  });
  const popper2 = usePopper({
    ...popperProps,
    enabled: isOpen || computePositionOnMount,
    placement,
    direction: direction2
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react95.useState)(-1);
  useFocusOnHide(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  const animationState = useAnimationState({ isOpen, ref: menuRef });
  const [buttonId, menuId] = useIds(id, `menu-button`, `menu-list`);
  const openAndFocusMenu = (0, import_react95.useCallback)(() => {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  const timeoutIds = (0, import_react95.useRef)(/* @__PURE__ */ new Set([]));
  (0, import_react95.useEffect)(() => {
    const ids = timeoutIds.current;
    return () => {
      ids.forEach((id2) => clearTimeout(id2));
      ids.clear();
    };
  }, []);
  useUpdateEffect(() => {
    var _a8;
    if (isOpen)
      return;
    setFocusedIndex(-1);
    (_a8 = menuRef.current) == null ? void 0 : _a8.scrollTo(0, 0);
  }, [isOpen]);
  useUpdateEffect(() => {
    if (!isOpen)
      return;
    if (focusedIndex === -1) {
      focusMenu();
    }
  }, [focusedIndex, isOpen]);
  (0, import_react95.useEffect)(() => {
    var _a8;
    if (!isOpen)
      return;
    const item = descendants.item(focusedIndex);
    (_a8 = item == null ? void 0 : item.node) == null ? void 0 : _a8.focus({ preventScroll: !scrollIntoViewRef.current });
  }, [descendants, focusedIndex, isOpen]);
  const openAndFocusFirstItem = (0, import_react95.useCallback)(() => {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  const openAndFocusLastItem = (0, import_react95.useCallback)(() => {
    scrollIntoViewRef.current = true;
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  const refocus = (0, import_react95.useCallback)(() => {
    var _a8, _b3;
    const doc = getOwnerDocument3(menuRef.current);
    const hasFocusWithin2 = (_a8 = menuRef.current) == null ? void 0 : _a8.contains(doc.activeElement);
    const shouldRefocus = isOpen && !hasFocusWithin2;
    if (!shouldRefocus)
      return;
    const node2 = (_b3 = descendants.item(focusedIndex)) == null ? void 0 : _b3.node;
    node2 == null ? void 0 : node2.focus({ preventScroll: !scrollIntoViewRef.current });
  }, [isOpen, focusedIndex, descendants]);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper: popper2,
    buttonId,
    menuId,
    forceUpdate: popper2.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior,
    initialFocusRef,
    scrollIntoViewRef
  };
}
function useMenuButton(props = {}, externalRef = null) {
  const menu = useMenuContext();
  const {
    onToggle,
    popper: popper2,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    scrollIntoViewRef
  } = menu;
  const onKeyDown = (0, import_react95.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Enter: openAndFocusFirstItem,
        ArrowDown: openAndFocusFirstItem,
        ArrowUp: openAndFocusLastItem
      };
      const action = keyMap[eventKey];
      if (action) {
        scrollIntoViewRef.current = true;
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
    },
    [openAndFocusFirstItem, openAndFocusLastItem, scrollIntoViewRef]
  );
  return {
    ...props,
    ref: mergeRefs(menu.buttonRef, externalRef, popper2.referenceRef),
    id: menu.buttonId,
    "data-active": dataAttr(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: callAllHandlers(props.onClick, onToggle),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function isTargetMenuItem(target) {
  var _a8;
  return isHTMLElement3(target) && !!((_a8 = target == null ? void 0 : target.getAttribute("role")) == null ? void 0 : _a8.startsWith("menuitem"));
}
function useMenuList(props = {}, ref = null) {
  const menu = useMenuContext();
  if (!menu) {
    throw new Error(
      `useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`
    );
  }
  const {
    focusedIndex,
    setFocusedIndex,
    menuRef,
    isOpen,
    onClose,
    menuId,
    isLazy,
    lazyBehavior,
    scrollIntoViewRef,
    unstable__animationState: animated
  } = menu;
  const descendants = useMenuDescendantsContext();
  const createTypeaheadHandler = useShortcut({
    preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target)
  });
  const onKeyDown = (0, import_react95.useCallback)(
    (event) => {
      if (!event.currentTarget.contains(event.target))
        return;
      const eventKey = event.key;
      const keyMap = {
        Tab: (event2) => event2.preventDefault(),
        Escape: (event2) => {
          event2.stopPropagation();
          onClose();
        },
        ArrowDown: () => {
          scrollIntoViewRef.current = true;
          const next = descendants.nextEnabled(focusedIndex) ?? descendants.firstEnabled();
          if (next)
            setFocusedIndex(next.index);
        },
        ArrowUp: () => {
          scrollIntoViewRef.current = true;
          const prev = descendants.prevEnabled(focusedIndex) ?? descendants.firstEnabled();
          if (prev)
            setFocusedIndex(prev.index);
        }
      };
      const fn2 = keyMap[eventKey];
      if (fn2) {
        event.preventDefault();
        fn2(event);
        return;
      }
      const onTypeahead = createTypeaheadHandler((character) => {
        const nextItem = getNextItemFromSearch(
          descendants.values(),
          character,
          (item) => {
            var _a8;
            return ((_a8 = item == null ? void 0 : item.node) == null ? void 0 : _a8.textContent) ?? "";
          },
          descendants.item(focusedIndex)
        );
        if (nextItem) {
          const index = descendants.indexOf(nextItem.node);
          setFocusedIndex(index);
        }
      });
      if (isTargetMenuItem(event.target)) {
        onTypeahead(event);
      }
    },
    [
      descendants,
      focusedIndex,
      createTypeaheadHandler,
      onClose,
      setFocusedIndex,
      scrollIntoViewRef
    ]
  );
  const hasBeenOpened = (0, import_react95.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  return {
    ...props,
    ref: mergeRefs(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: {
      ...props.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useMenuPositioner(props = {}) {
  const { popper: popper2, isOpen } = useMenuContext();
  return popper2.getPopperProps({
    ...props,
    style: {
      visibility: isOpen ? "visible" : "hidden",
      ...props.style
    }
  });
}
function useMenuItem(props = {}, externalRef = null) {
  const {
    onMouseEnter: onMouseEnterProp,
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    onClick: onClickProp,
    onFocus: onFocusProp,
    isDisabled,
    isFocusable: isFocusable2,
    closeOnSelect,
    type: typeProp,
    ...htmlProps
  } = props;
  const menu = useMenuContext();
  const {
    setFocusedIndex,
    focusedIndex,
    closeOnSelect: menuCloseOnSelect,
    onClose,
    menuId,
    scrollIntoViewRef
  } = menu;
  const ref = (0, import_react95.useRef)(null);
  const id = `${menuId}-menuitem-${(0, import_react95.useId)()}`;
  const { index, register } = useMenuDescendant({
    disabled: isDisabled && !isFocusable2
  });
  const onMouseEnter = (0, import_react95.useCallback)(
    (event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      if (isDisabled)
        return;
      scrollIntoViewRef.current = false;
      setFocusedIndex(index);
    },
    [setFocusedIndex, index, isDisabled, onMouseEnterProp, scrollIntoViewRef]
  );
  const onMouseMove = (0, import_react95.useCallback)(
    (event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (ref.current && !isActiveElement2(ref.current)) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter, onMouseMoveProp]
  );
  const onMouseLeave = (0, import_react95.useCallback)(
    (event) => {
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (isDisabled)
        return;
      setFocusedIndex(-1);
    },
    [setFocusedIndex, isDisabled, onMouseLeaveProp]
  );
  const onClick = (0, import_react95.useCallback)(
    (event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (!isTargetMenuItem(event.currentTarget))
        return;
      if (closeOnSelect ?? menuCloseOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]
  );
  const onFocus3 = (0, import_react95.useCallback)(
    (event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      setFocusedIndex(index);
    },
    [setFocusedIndex, onFocusProp, index]
  );
  const isFocused = index === focusedIndex;
  const clickableProps = useClickable({
    onClick,
    onFocus: onFocus3,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: mergeRefs(register, ref, externalRef),
    isDisabled,
    isFocusable: isFocusable2
  });
  return {
    ...htmlProps,
    ...clickableProps,
    type: typeProp ?? clickableProps.type,
    id,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  };
}
function useMenuOption(props = {}, ref = null) {
  const { type = "radio", isChecked, ...rest } = props;
  const ownProps = useMenuItem(rest, ref);
  return {
    ...ownProps,
    role: `menuitem${type}`,
    "aria-checked": isChecked
  };
}
function useMenuOptionGroup(props = {}) {
  const {
    children,
    type = "radio",
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    ...htmlProps
  } = props;
  const isRadio = type === "radio";
  const fallback = isRadio ? "" : [];
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue ?? fallback,
    value: valueProp,
    onChange: onChangeProp
  });
  const onChange = (0, import_react95.useCallback)(
    (selectedValue) => {
      if (type === "radio" && typeof value === "string") {
        setValue(selectedValue);
      }
      if (type === "checkbox" && Array.isArray(value)) {
        const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
        setValue(nextValue);
      }
    },
    [value, setValue, type]
  );
  const validChildren = getValidChildren(children);
  const clones = validChildren.map((child) => {
    if (child.type.id !== "MenuItemOption")
      return child;
    const onClick = (event) => {
      var _a8, _b3;
      onChange(child.props.value);
      (_b3 = (_a8 = child.props).onClick) == null ? void 0 : _b3.call(_a8, event);
    };
    const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return (0, import_react95.cloneElement)(child, {
      type,
      onClick,
      isChecked
    });
  });
  return {
    ...htmlProps,
    children: clones
  };
}
function useMenuState() {
  const { isOpen, onClose } = useMenuContext();
  return { isOpen, onClose };
}
function isHTMLElement3(el) {
  if (!isElement3(el))
    return false;
  const win = el.ownerDocument.defaultView ?? window;
  return el instanceof win.HTMLElement;
}
function isElement3(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}

// node_modules/@chakra-ui/react/dist/esm/menu/menu.mjs
var [MenuStylesProvider, useMenuStyles] = createContext({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props) => {
  const { children } = props;
  const styles2 = useMultiStyleConfig("Menu", props);
  const ownProps = omitThemingProps(props);
  const { direction: direction2 } = useTheme();
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction: direction2 });
  const context = (0, import_react96.useMemo)(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return (0, import_jsx_runtime87.jsx)(MenuDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime87.jsx)(MenuProvider, { value: context, children: (0, import_jsx_runtime87.jsx)(MenuStylesProvider, { value: styles2, children: runIfFn(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-button.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var StyledMenuButton = forwardRef2((props, ref) => {
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime88.jsx)(
    chakra.button,
    {
      ref,
      ...props,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...styles2.button
      }
    }
  );
});
var MenuButton = forwardRef2(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenuButton(rest, ref);
    const Element2 = As || StyledMenuButton;
    return (0, import_jsx_runtime88.jsx)(
      Element2,
      {
        ...buttonProps,
        className: cx("chakra-menu__menu-button", props.className),
        children: (0, import_jsx_runtime88.jsx)(
          chakra.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: props.children
          }
        )
      }
    );
  }
);
MenuButton.displayName = "MenuButton";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-command.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var MenuCommand = forwardRef2(
  (props, ref) => {
    const styles2 = useMenuStyles();
    return (0, import_jsx_runtime89.jsx)(
      chakra.span,
      {
        ref,
        ...props,
        __css: styles2.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-divider.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime90.jsx)(
    chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: cx("chakra-menu__divider", className),
      ...rest,
      __css: styles2.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-group.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var MenuGroup = forwardRef2((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = cx("chakra-menu__group__title", className);
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime91.jsxs)("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && (0, import_jsx_runtime91.jsx)(chakra.p, { className: _className, ...rest, __css: styles2.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-icon.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var import_react97 = __toESM(require_react(), 1);
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const styles2 = useMenuStyles();
  const child = import_react97.Children.only(children);
  const clone = (0, import_react97.isValidElement)(child) ? (0, import_react97.cloneElement)(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = cx("chakra-menu__icon-wrapper", className);
  return (0, import_jsx_runtime92.jsx)(chakra.span, { className: _className, ...rest, __css: styles2.icon, children: clone });
};
MenuIcon.displayName = "MenuIcon";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-item.mjs
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/menu/styled-menu-item.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var import_react98 = __toESM(require_react(), 1);
var StyledMenuItem = forwardRef2(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles2 = useMenuStyles();
    const btnType = rest.as || type ? type ?? void 0 : "button";
    const buttonStyles = (0, import_react98.useMemo)(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles2.item
      }),
      [styles2.item]
    );
    return (0, import_jsx_runtime93.jsx)(chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

// node_modules/@chakra-ui/react/dist/esm/menu/menu-item.mjs
var MenuItem = forwardRef2((props, ref) => {
  const {
    icon,
    iconSpacing: iconSpacing2 = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? (0, import_jsx_runtime94.jsx)("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return (0, import_jsx_runtime94.jsxs)(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && (0, import_jsx_runtime94.jsx)(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing2, children: icon }),
        _children,
        command && (0, import_jsx_runtime94.jsx)(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-item-option.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var CheckIcon3 = (props) => (0, import_jsx_runtime95.jsx)("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: (0, import_jsx_runtime95.jsx)(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
var MenuItemOption = forwardRef2(
  (props, ref) => {
    const {
      icon,
      iconSpacing: iconSpacing2 = "0.75rem",
      iconPlacement = "start",
      ...rest
    } = props;
    const optionProps = useMenuOption(rest, ref);
    return (0, import_jsx_runtime95.jsxs)(
      StyledMenuItem,
      {
        ...optionProps,
        className: cx("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && iconPlacement === "start" && (0, import_jsx_runtime95.jsx)(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing2,
              opacity: props.isChecked ? 1 : 0,
              children: icon || (0, import_jsx_runtime95.jsx)(CheckIcon3, {})
            }
          ),
          (0, import_jsx_runtime95.jsx)("span", { style: { flex: 1 }, children: optionProps.children }),
          icon !== null && iconPlacement === "end" && (0, import_jsx_runtime95.jsx)(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginStart: iconSpacing2,
              opacity: props.isChecked ? 1 : 0,
              children: icon || (0, import_jsx_runtime95.jsx)(CheckIcon3, {})
            }
          )
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-list.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
var MenuTransition = chakra(motion.div);
var MenuList = forwardRef2(
  function MenuList2(props, ref) {
    var _a8;
    const { rootProps, motionProps, ...rest } = props;
    const {
      isOpen,
      onTransitionEnd,
      unstable__animationState: animated
    } = useMenuContext();
    const listProps = useMenuList(rest, ref);
    const positionerProps = useMenuPositioner(rootProps);
    const styles2 = useMenuStyles();
    return (0, import_jsx_runtime96.jsx)(
      chakra.div,
      {
        ...positionerProps,
        __css: { zIndex: props.zIndex ?? ((_a8 = styles2.list) == null ? void 0 : _a8.zIndex) },
        children: (0, import_jsx_runtime96.jsx)(
          MenuTransition,
          {
            variants: motionVariants,
            initial: false,
            animate: isOpen ? "enter" : "exit",
            __css: { outline: 0, ...styles2.list },
            ...motionProps,
            ...listProps,
            className: cx("chakra-menu__menu-list", listProps.className),
            onUpdate: onTransitionEnd,
            onAnimationComplete: callAll(
              animated.onComplete,
              listProps.onAnimationComplete
            )
          }
        )
      }
    );
  }
);
MenuList.displayName = "MenuList";

// node_modules/@chakra-ui/react/dist/esm/menu/menu-option-group.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenuOptionGroup(rest);
  return (0, import_jsx_runtime97.jsx)(
    MenuGroup,
    {
      title,
      className: cx("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";

// node_modules/@chakra-ui/react/dist/esm/modal/alert-dialog.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/modal/modal.mjs
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node2) {
  return node2 && (node2.host || unwrapHost(node2.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node2) {
      if (elementsToKeep.has(node2)) {
        deep(node2);
      } else {
        try {
          var attr = node2.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node2) || 0) + 1;
          var markerValue = (markerCounter.get(node2) || 0) + 1;
          counterMap.set(node2, counterValue);
          markerCounter.set(node2, markerValue);
          hiddenNodes.push(node2);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node2, true);
          }
          if (markerValue === 1) {
            node2.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node2.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node2, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node2) {
      var counterValue = counterMap.get(node2) - 1;
      var markerValue = markerCounter.get(node2) - 1;
      counterMap.set(node2, counterValue);
      markerCounter.set(node2, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node2)) {
          node2.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node2);
      }
      if (!markerValue) {
        node2.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@chakra-ui/react/dist/esm/modal/use-modal.mjs
var import_react100 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/modal/modal-manager.mjs
var import_react99 = __toESM(require_react(), 1);
var __defProp3 = Object.defineProperty;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField3 = (obj, key, value) => {
  __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ModalManager = class {
  constructor() {
    __publicField3(this, "modals");
    this.modals = /* @__PURE__ */ new Set();
  }
  add(modal) {
    this.modals.add(modal);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    const topModal = Array.from(this.modals)[this.modals.size - 1];
    return modal === topModal;
  }
};
var modalManager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = (0, import_react99.useState)(0);
  (0, import_react99.useEffect)(() => {
    const node2 = ref.current;
    if (!node2)
      return;
    if (isOpen) {
      const index2 = modalManager.add(node2);
      setIndex(index2);
    }
    return () => {
      modalManager.remove(node2);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

// node_modules/@chakra-ui/react/dist/esm/modal/use-modal.mjs
function useModal(props) {
  const {
    isOpen,
    onClose,
    id,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = (0, import_react100.useRef)(null);
  const overlayRef = (0, import_react100.useRef)(null);
  const [dialogId, headerId, bodyId] = useIds2(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  const index = useModalManager(dialogRef, isOpen);
  const mouseDownTarget = (0, import_react100.useRef)(null);
  const onMouseDown = (0, import_react100.useCallback)((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = (0, import_react100.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose == null ? void 0 : onClose();
        }
        onEsc == null ? void 0 : onEsc();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = (0, import_react100.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react100.useState)(false);
  const getDialogProps = (0, import_react100.useCallback)(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: mergeRefs(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = (0, import_react100.useCallback)(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!modalManager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose == null ? void 0 : onClose();
      }
      onOverlayClickProp == null ? void 0 : onOverlayClickProp();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = (0, import_react100.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs(ref, overlayRef),
      onClick: callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps,
    index
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  (0, import_react100.useEffect)(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds2(idProp, ...prefixes) {
  const reactId = (0, import_react100.useId)();
  const id = idProp || reactId;
  return (0, import_react100.useMemo)(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

// node_modules/@chakra-ui/react/dist/esm/modal/modal.mjs
var [ModalStylesProvider, useModalStyles] = createContext({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
var [ModalContextProvider, useModalContext] = createContext({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
var Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    preserveScrollBarGap: true,
    motionPreset: "scale",
    ...props,
    lockFocusAcrossFrames: props.lockFocusAcrossFrames || true
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    animatePresenceProps,
    onCloseComplete
  } = modalProps;
  const styles2 = useMultiStyleConfig("Modal", modalProps);
  const modal = useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return (0, import_jsx_runtime98.jsx)(ModalContextProvider, { value: context, children: (0, import_jsx_runtime98.jsx)(ModalStylesProvider, { value: styles2, children: (0, import_jsx_runtime98.jsx)(
    AnimatePresence,
    {
      ...animatePresenceProps,
      onExitComplete: onCloseComplete,
      children: context.isOpen && (0, import_jsx_runtime98.jsx)(Portal, { ...portalProps, children })
    }
  ) }) });
};
Modal.displayName = "Modal";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-content.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/modal/modal-focus.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var import_react101 = __toESM(require_react(), 1);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React18 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React14 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React14.forwardRef(function(props, parentRef) {
  var ref = React14.useRef(null);
  var _a8 = React14.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a8[0], setCallbacks = _a8[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b3 = props.as, Container3 = _b3 === void 0 ? "div" : _b3, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs2([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React14.createElement(
    React14.Fragment,
    null,
    enabled && React14.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React14.cloneElement(React14.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React14.createElement(Container3, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React17 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React16 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React15 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css3) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css3;
  } else {
    tag.appendChild(document.createTextNode(css3));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter2 = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter2 == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter2++;
    },
    remove: function() {
      counter2--;
      if (!counter2 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles2, isDynamic) {
    React15.useEffect(function() {
      sheet.add(styles2);
      return function() {
        sheet.remove();
      };
    }, [styles2 && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a8) {
    var styles2 = _a8.styles, dynamic = _a8.dynamic;
    useStyle(styles2, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse2 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left2 = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top2 = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right2 = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse2(left2), parse2(top2), parse2(right2)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a8, allowRelative, gapMode, important) {
  var left2 = _a8.left, top2 = _a8.top, right2 = _a8.right, gap = _a8.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left2, "px;\n    padding-top: ").concat(top2, "px;\n    padding-right: ").concat(right2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter2 = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter2) ? counter2 : 0;
};
var useLockAttribute = function() {
  React16.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a8) {
  var noRelative = _a8.noRelative, noImportant = _a8.noImportant, _b3 = _a8.gapMode, gapMode = _b3 === void 0 ? "margin" : _b3;
  useLockAttribute();
  var gap = React16.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React16.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node2) {
  return node2.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node2, overflow) {
  if (!(node2 instanceof Element)) {
    return false;
  }
  var styles2 = window.getComputedStyle(node2);
  return (
    // not-not-scrollable
    styles2[overflow] !== "hidden" && // contains scroll inside self
    !(styles2.overflowY === styles2.overflowX && !alwaysContainsScroll(node2) && styles2[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowY");
};
var elementCouldBeHScrolled = function(node2) {
  return elementCanBeScrolled(node2, "overflowX");
};
var locationCouldBeScrolled = function(axis, node2) {
  var ownerDocument = node2.ownerDocument;
  var current = node2;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a8 = getScrollVariables(axis, current), scrollHeight = _a8[1], clientHeight = _a8[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a8) {
  var scrollTop = _a8.scrollTop, scrollHeight = _a8.scrollHeight, clientHeight = _a8.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a8) {
  var scrollLeft = _a8.scrollLeft, scrollWidth = _a8.scrollWidth, clientWidth = _a8.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node2) {
  return axis === "v" ? elementCouldBeVScrolled(node2) : elementCouldBeHScrolled(node2);
};
var getScrollVariables = function(axis, node2) {
  return axis === "v" ? getVScrollVariables(node2) : getHScrollVariables(node2);
};
var getDirectionFactor = function(axis, direction2) {
  return axis === "h" && direction2 === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a8 = getScrollVariables(axis, target), position2 = _a8[0], scroll_1 = _a8[1], capacity = _a8[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position2;
    if (position2 || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position2;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React17.useRef([]);
  var touchStartRef = React17.useRef([0, 0]);
  var activeAxis = React17.useRef();
  var id = React17.useState(idCounter++)[0];
  var Style2 = React17.useState(styleSingleton)[0];
  var lastProps = React17.useRef(props);
  React17.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React17.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React17.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React17.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node2) {
        return node2.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React17.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React17.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React17.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React17.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React17.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React17.createElement(
    React17.Fragment,
    null,
    inert ? React17.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React17.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node2) {
  var shadowParent = null;
  while (node2 !== null) {
    if (node2 instanceof ShadowRoot) {
      shadowParent = node2.host;
      node2 = node2.host;
    }
    node2 = node2.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React18.forwardRef(function(props, ref) {
  return React18.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@chakra-ui/react/dist/esm/modal/modal-focus.mjs
function ModalFocusScope(props) {
  const {
    autoFocus,
    trapFocus,
    dialogRef,
    initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    finalFocusRef,
    returnFocusOnClose,
    preserveScrollBarGap,
    lockFocusAcrossFrames,
    isOpen
  } = useModalContext();
  const [isPresent, safeToRemove] = usePresence();
  (0, import_react101.useEffect)(() => {
    if (!isPresent && safeToRemove) {
      setTimeout(safeToRemove);
    }
  }, [isPresent, safeToRemove]);
  const index = useModalManager(dialogRef, isOpen);
  return (0, import_jsx_runtime99.jsx)(
    FocusLock2,
    {
      autoFocus,
      isDisabled: !trapFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus: returnFocusOnClose,
      contentRef: dialogRef,
      lockFocusAcrossFrames,
      children: (0, import_jsx_runtime99.jsx)(
        Combination_default2,
        {
          removeScrollBar: !preserveScrollBarGap,
          allowPinchZoom,
          enabled: index === 1 && blockScrollOnMount,
          forwardProps: true,
          children: props.children
        }
      )
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/modal/modal-transition.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var import_react104 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/transition/slide-fade.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var import_react102 = __toESM(require_react(), 1);
var variants14 = {
  initial: ({ offsetX, offsetY, transition: transition3, transitionEnd, delay }) => ({
    opacity: 0,
    x: offsetX,
    y: offsetY,
    transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
  }),
  enter: ({ transition: transition3, transitionEnd, delay }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: (transition3 == null ? void 0 : transition3.enter) ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
  }),
  exit: ({ offsetY, offsetX, transition: transition3, transitionEnd, reverse, delay }) => {
    const offset2 = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      ...reverse ? { ...offset2, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { ...offset2, ...transitionEnd == null ? void 0 : transitionEnd.exit } }
    };
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants14
};
var SlideFade = (0, import_react102.forwardRef)(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition: transition3,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition: transition3,
      transitionEnd,
      delay
    };
    return (0, import_jsx_runtime100.jsx)(AnimatePresence, { ...animatePresenceProps, custom, children: show && (0, import_jsx_runtime100.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

// node_modules/@chakra-ui/react/dist/esm/transition/scale-fade.mjs
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var import_react103 = __toESM(require_react(), 1);
var variants15 = {
  exit: ({ reverse, initialScale, transition: transition3, transitionEnd, delay }) => ({
    opacity: 0,
    ...reverse ? { scale: initialScale, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd == null ? void 0 : transitionEnd.exit } },
    transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
  }),
  enter: ({ transitionEnd, transition: transition3, delay }) => ({
    opacity: 1,
    scale: 1,
    transition: (transition3 == null ? void 0 : transition3.enter) ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
  })
};
var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants15
};
var ScaleFade = (0, import_react103.forwardRef)(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition: transition3,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition: transition3, transitionEnd, delay };
    return (0, import_jsx_runtime101.jsx)(AnimatePresence, { ...animatePresenceProps, custom, children: show && (0, import_jsx_runtime101.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-transition.mjs
var transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  slideInTop: {
    ...slideFadeConfig,
    custom: { offsetY: -16, reverse: true }
  },
  slideInLeft: {
    ...slideFadeConfig,
    custom: { offsetX: -16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
var MotionSection = chakra(motion.section);
var getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
var ModalTransition = (0, import_react104.forwardRef)(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return (0, import_jsx_runtime102.jsx)(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-content.mjs
var ModalContent = forwardRef2(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles2 = useModalStyles();
    const dialogStyles = defineStyle({
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles2.dialog
    });
    const dialogContainerStyles = defineStyle({
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles2.dialogContainer
    });
    const { motionPreset } = useModalContext();
    return (0, import_jsx_runtime103.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime103.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime103.jsx)(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-body.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var import_react105 = __toESM(require_react(), 1);
var ModalBody = forwardRef2((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  (0, import_react105.useEffect)(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = cx("chakra-modal__body", className);
  const styles2 = useModalStyles();
  return (0, import_jsx_runtime104.jsx)(
    chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles2.body
    }
  );
});
ModalBody.displayName = "ModalBody";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-close-button.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var ModalCloseButton = forwardRef2(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = cx("chakra-modal__close-btn", className);
    const styles2 = useModalStyles();
    return (0, import_jsx_runtime105.jsx)(
      CloseButton,
      {
        ref,
        __css: styles2.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-footer.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var ModalFooter = forwardRef2(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = cx("chakra-modal__footer", className);
    const styles2 = useModalStyles();
    const footerStyles = defineStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles2.footer
    });
    return (0, import_jsx_runtime106.jsx)(
      chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-header.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
var import_react106 = __toESM(require_react(), 1);
var ModalHeader = forwardRef2(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    (0, import_react106.useEffect)(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = cx("chakra-modal__header", className);
    const styles2 = useModalStyles();
    const headerStyles = defineStyle({
      flex: 0,
      ...styles2.header
    });
    return (0, import_jsx_runtime107.jsx)(
      chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-overlay.mjs
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/transition/fade.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var import_react107 = __toESM(require_react(), 1);
var variants16 = {
  enter: ({ transition: transition3, transitionEnd, delay } = {}) => ({
    opacity: 1,
    transition: (transition3 == null ? void 0 : transition3.enter) ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
  }),
  exit: ({ transition: transition3, transitionEnd, delay } = {}) => ({
    opacity: 0,
    transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
    transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
  })
};
var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants16
};
var Fade = (0, import_react107.forwardRef)(
  function Fade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      className,
      transition: transition3,
      transitionEnd,
      delay,
      animatePresenceProps,
      ...rest
    } = props;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const custom = { transition: transition3, transitionEnd, delay };
    return (0, import_jsx_runtime108.jsx)(AnimatePresence, { ...animatePresenceProps, custom, children: show && (0, import_jsx_runtime108.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-fade", className),
        custom,
        ...fadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
Fade.displayName = "Fade";

// node_modules/@chakra-ui/react/dist/esm/modal/modal-overlay.mjs
var MotionDiv = chakra(motion.div);
var ModalOverlay = forwardRef2(
  (props, ref) => {
    const { className, transition: transition3, motionProps: _motionProps, ...rest } = props;
    const _className = cx("chakra-modal__overlay", className);
    const styles2 = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles2.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return (0, import_jsx_runtime109.jsx)(
      MotionDiv,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

// node_modules/@chakra-ui/react/dist/esm/modal/alert-dialog.mjs
function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return (0, import_jsx_runtime110.jsx)(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
var AlertDialogContent = forwardRef2(
  (props, ref) => (0, import_jsx_runtime110.jsx)(ModalContent, { ref, role: "alertdialog", ...props })
);

// node_modules/@chakra-ui/react/dist/esm/modal/drawer.mjs
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var [DrawerContextProvider, useDrawerContext] = createContext();
var placementMap2 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  var _a8;
  if (!placement)
    return;
  return ((_a8 = placementMap2[placement]) == null ? void 0 : _a8[dir]) ?? placement;
}
function Drawer(props) {
  var _a8;
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme2 = useTheme();
  const drawerStyleConfig = (_a8 = theme2.components) == null ? void 0 : _a8.Drawer;
  const placement = getDrawerPlacement(placementProp, theme2.direction);
  return (0, import_jsx_runtime111.jsx)(DrawerContextProvider, { value: { placement }, children: (0, import_jsx_runtime111.jsx)(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

// node_modules/@chakra-ui/react/dist/esm/modal/drawer-content.mjs
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/transition/slide.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
var import_react108 = __toESM(require_react(), 1);
var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: TRANSITION_EASINGS.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants17 = {
  exit: ({ direction: direction2, transition: transition3, transitionEnd, delay }) => {
    const { exit: exitStyles } = getSlideTransition({ direction: direction2 });
    return {
      ...exitStyles,
      transition: (transition3 == null ? void 0 : transition3.exit) ?? withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ direction: direction2, transitionEnd, transition: transition3, delay }) => {
    const { enter: enterStyles } = getSlideTransition({ direction: direction2 });
    return {
      ...enterStyles,
      transition: (transition3 == null ? void 0 : transition3.enter) ?? withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var Slide = (0, import_react108.forwardRef)(
  function Slide2(props, ref) {
    const {
      direction: direction2 = "right",
      style,
      unmountOnExit,
      in: isOpen,
      className,
      transition: transition3,
      transitionEnd,
      delay,
      motionProps,
      animatePresenceProps,
      ...rest
    } = props;
    const transitionStyles = getSlideTransition({ direction: direction2 });
    const computedStyle = Object.assign(
      { position: "fixed" },
      transitionStyles.position,
      style
    );
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { transitionEnd, transition: transition3, direction: direction2, delay };
    return (0, import_jsx_runtime112.jsx)(AnimatePresence, { ...animatePresenceProps, custom, children: show && (0, import_jsx_runtime112.jsx)(
      motion.div,
      {
        ...rest,
        ref,
        initial: "exit",
        className: cx("chakra-slide", className),
        animate,
        exit: "exit",
        custom,
        variants: variants17,
        style: computedStyle,
        ...motionProps
      }
    ) });
  }
);
Slide.displayName = "Slide";

// node_modules/@chakra-ui/react/dist/esm/modal/drawer-content.mjs
var MotionDiv2 = chakra(Slide);
var DrawerContent = forwardRef2(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles2 = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles2.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles2.dialogContainer
    };
    const { placement } = useDrawerContext();
    return (0, import_jsx_runtime113.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime113.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime113.jsx)(
          MotionDiv2,
          {
            motionProps,
            direction: placement,
            in: isOpen,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
DrawerContent.displayName = "DrawerContent";

// node_modules/@chakra-ui/react/dist/esm/number-input/number-input.mjs
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var import_react112 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/number-input/icons.mjs
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var TriangleDownIcon = (props) => (0, import_jsx_runtime114.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime114.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
var TriangleUpIcon = (props) => (0, import_jsx_runtime114.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime114.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });

// node_modules/@chakra-ui/react/dist/esm/number-input/use-number-input.mjs
var import_react111 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/number-input/use-attr-observer.mjs
var import_react109 = __toESM(require_react(), 1);
function useAttributeObserver(ref, attributes, fn2, enabled) {
  (0, import_react109.useEffect)(() => {
    if (!ref.current || !enabled)
      return;
    const win = ref.current.ownerDocument.defaultView ?? window;
    const attrs = Array.isArray(attributes) ? attributes : [attributes];
    const obs = new win.MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
          fn2(change);
        }
      }
    });
    obs.observe(ref.current, { attributes: true, attributeFilter: attrs });
    return () => obs.disconnect();
  });
}

// node_modules/@chakra-ui/react/dist/esm/number-input/use-spinner.mjs
var import_react110 = __toESM(require_react(), 1);
var CONTINUOUS_CHANGE_INTERVAL = 50;
var CONTINUOUS_CHANGE_DELAY = 300;
function useSpinner(increment, decrement) {
  const [isSpinning, setIsSpinning] = (0, import_react110.useState)(false);
  const [action, setAction] = (0, import_react110.useState)(null);
  const [runOnce, setRunOnce] = (0, import_react110.useState)(true);
  const timeoutRef = (0, import_react110.useRef)(null);
  const removeTimeout = () => clearTimeout(timeoutRef.current);
  useInterval(
    () => {
      if (action === "increment") {
        increment();
      }
      if (action === "decrement") {
        decrement();
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null
  );
  const up = (0, import_react110.useCallback)(() => {
    if (runOnce) {
      increment();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]);
  const down = (0, import_react110.useCallback)(() => {
    if (runOnce) {
      decrement();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]);
  const stop = (0, import_react110.useCallback)(() => {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  (0, import_react110.useEffect)(() => {
    return () => removeTimeout();
  }, []);
  return { up, down, stop, isSpinning };
}

// node_modules/@chakra-ui/react/dist/esm/number-input/use-number-input.mjs
var FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;
function isFloatingPointNumericCharacter(character) {
  return FLOATING_POINT_REGEX.test(character);
}
function isValidNumericKeyboardEvent(event, isValid) {
  if (event.key == null)
    return true;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isSingleCharacterKey = event.key.length === 1;
  if (!isSingleCharacterKey || isModifierKey)
    return true;
  return isValid(event.key);
}
function useNumberInput(props = {}) {
  const {
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    step: stepProp = 1,
    isReadOnly,
    isDisabled,
    isRequired,
    isInvalid,
    pattern = "[0-9]*(.[0-9]+)?",
    inputMode = "decimal",
    allowMouseWheel,
    id,
    onChange: _,
    precision,
    name,
    "aria-describedby": ariaDescBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onInvalid: onInvalidProp,
    getAriaValueText: getAriaValueTextProp,
    isValidCharacter: isValidCharacterProp,
    format: formatValue,
    parse: parseValue,
    ...htmlProps
  } = props;
  const onFocus3 = useCallbackRef(onFocusProp);
  const onBlur3 = useCallbackRef(onBlurProp);
  const onInvalid = useCallbackRef(onInvalidProp);
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp ?? isFloatingPointNumericCharacter
  );
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const counter2 = useCounter(props);
  const {
    update: updateFn,
    increment: incrementFn,
    decrement: decrementFn
  } = counter2;
  const [isFocused, setFocused] = (0, import_react111.useState)(false);
  const isInteractive = !(isReadOnly || isDisabled);
  const inputRef = (0, import_react111.useRef)(null);
  const inputSelectionRef = (0, import_react111.useRef)(null);
  const incrementButtonRef = (0, import_react111.useRef)(null);
  const decrementButtonRef = (0, import_react111.useRef)(null);
  const sanitize = (0, import_react111.useCallback)(
    (value) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter]
  );
  const parse3 = (0, import_react111.useCallback)(
    (value) => (parseValue == null ? void 0 : parseValue(value)) ?? value,
    [parseValue]
  );
  const format = (0, import_react111.useCallback)(
    (value) => ((formatValue == null ? void 0 : formatValue(value)) ?? value).toString(),
    [formatValue]
  );
  useUpdateEffect(() => {
    if (counter2.valueAsNumber > max2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    } else if (counter2.valueAsNumber < min2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    }
  }, [counter2.valueAsNumber, counter2.value, format, onInvalid]);
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.value != counter2.value;
    if (notInSync) {
      const parsedInput = parse3(inputRef.current.value);
      counter2.setValue(sanitize(parsedInput));
    }
  }, [parse3, sanitize]);
  const increment = (0, import_react111.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        incrementFn(step);
      }
    },
    [incrementFn, isInteractive, stepProp]
  );
  const decrement = (0, import_react111.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        decrementFn(step);
      }
    },
    [decrementFn, isInteractive, stepProp]
  );
  const spinner = useSpinner(increment, decrement);
  useAttributeObserver(
    incrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  useAttributeObserver(
    decrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  const onChange = (0, import_react111.useCallback)(
    (event) => {
      const evt = event.nativeEvent;
      if (evt.isComposing)
        return;
      const parsedInput = parse3(event.currentTarget.value);
      updateFn(sanitize(parsedInput));
      inputSelectionRef.current = {
        start: event.currentTarget.selectionStart,
        end: event.currentTarget.selectionEnd
      };
    },
    [updateFn, sanitize, parse3]
  );
  const _onFocus = (0, import_react111.useCallback)(
    (event) => {
      var _a8;
      onFocus3 == null ? void 0 : onFocus3(event);
      if (!inputSelectionRef.current)
        return;
      event.currentTarget.selectionStart = inputSelectionRef.current.start ?? ((_a8 = event.currentTarget.value) == null ? void 0 : _a8.length);
      event.currentTarget.selectionEnd = inputSelectionRef.current.end ?? event.currentTarget.selectionStart;
    },
    [onFocus3]
  );
  const onKeyDown = (0, import_react111.useCallback)(
    (e) => {
      if (e.nativeEvent.isComposing)
        return;
      if (!isValidNumericKeyboardEvent(e, isValidCharacter)) {
        e.preventDefault();
      }
      const stepFactor = getStepFactor(e) * stepProp;
      const eventKey = e.key;
      const keyMap = {
        ArrowUp: () => increment(stepFactor),
        ArrowDown: () => decrement(stepFactor),
        Home: () => updateFn(min2),
        End: () => updateFn(max2)
      };
      const action = keyMap[eventKey];
      if (action) {
        e.preventDefault();
        action(e);
      }
    },
    [isValidCharacter, stepProp, increment, decrement, updateFn, min2, max2]
  );
  const getStepFactor = (event) => {
    let ratio = 1;
    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }
    if (event.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };
  const ariaValueText = (0, import_react111.useMemo)(() => {
    const text = getAriaValueText == null ? void 0 : getAriaValueText(counter2.value);
    if (text != null)
      return text;
    const defaultText = counter2.value.toString();
    return !defaultText ? void 0 : defaultText;
  }, [counter2.value, getAriaValueText]);
  const validateAndClamp = (0, import_react111.useCallback)(() => {
    let next = counter2.value;
    if (counter2.value === "")
      return;
    const valueStartsWithE = /^[eE]/.test(counter2.value.toString());
    if (valueStartsWithE) {
      counter2.setValue("");
    } else {
      if (counter2.valueAsNumber < min2) {
        next = min2;
      }
      if (counter2.valueAsNumber > max2) {
        next = max2;
      }
      counter2.cast(next);
    }
  }, [counter2, max2, min2]);
  const onInputBlur = (0, import_react111.useCallback)(() => {
    setFocused(false);
    if (clampValueOnBlur) {
      validateAndClamp();
    }
  }, [clampValueOnBlur, setFocused, validateAndClamp]);
  const focusInput = (0, import_react111.useCallback)(() => {
    if (focusInputOnChange) {
      requestAnimationFrame(() => {
        var _a8;
        (_a8 = inputRef.current) == null ? void 0 : _a8.focus();
      });
    }
  }, [focusInputOnChange]);
  const spinUp = (0, import_react111.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.up();
      focusInput();
    },
    [focusInput, spinner]
  );
  const spinDown = (0, import_react111.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.down();
      focusInput();
    },
    [focusInput, spinner]
  );
  useEventListener(
    () => inputRef.current,
    "wheel",
    (event) => {
      var _a8;
      const doc = ((_a8 = inputRef.current) == null ? void 0 : _a8.ownerDocument) ?? document;
      const isInputFocused = doc.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused)
        return;
      event.preventDefault();
      const stepFactor = getStepFactor(event) * stepProp;
      const direction2 = Math.sign(event.deltaY);
      if (direction2 === -1) {
        increment(stepFactor);
      } else if (direction2 === 1) {
        decrement(stepFactor);
      }
    },
    { passive: false }
  );
  const getIncrementButtonProps = (0, import_react111.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter2.isAtMax;
      return {
        ...props2,
        ref: mergeRefs(ref, incrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinUp(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMax, keepWithinRange, spinUp, spinner.stop, isDisabled]
  );
  const getDecrementButtonProps = (0, import_react111.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled || keepWithinRange && counter2.isAtMin;
      return {
        ...props2,
        ref: mergeRefs(ref, decrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinDown(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMin, keepWithinRange, spinDown, spinner.stop, isDisabled]
  );
  const getInputProps = (0, import_react111.useCallback)(
    (props2 = {}, ref = null) => ({
      name,
      inputMode,
      type: "text",
      pattern,
      "aria-labelledby": ariaLabelledBy,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescBy,
      id,
      disabled: isDisabled,
      role: "spinbutton",
      ...props2,
      readOnly: props2.readOnly ?? isReadOnly,
      "aria-readonly": props2.readOnly ?? isReadOnly,
      "aria-required": props2.required ?? isRequired,
      required: props2.required ?? isRequired,
      ref: mergeRefs(inputRef, ref),
      value: format(counter2.value),
      "aria-valuemin": min2,
      "aria-valuemax": max2,
      "aria-valuenow": Number.isNaN(counter2.valueAsNumber) ? void 0 : counter2.valueAsNumber,
      "aria-invalid": ariaAttr(isInvalid ?? counter2.isOutOfRange),
      "aria-valuetext": ariaValueText,
      autoComplete: "off",
      autoCorrect: "off",
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(
        props2.onFocus,
        _onFocus,
        () => setFocused(true)
      ),
      onBlur: callAllHandlers(props2.onBlur, onBlur3, onInputBlur)
    }),
    [
      name,
      inputMode,
      pattern,
      ariaLabelledBy,
      ariaLabel,
      format,
      ariaDescBy,
      id,
      isDisabled,
      isRequired,
      isReadOnly,
      isInvalid,
      counter2.value,
      counter2.valueAsNumber,
      counter2.isOutOfRange,
      min2,
      max2,
      ariaValueText,
      onChange,
      onKeyDown,
      _onFocus,
      onBlur3,
      onInputBlur
    ]
  );
  return {
    value: format(counter2.value),
    valueAsNumber: counter2.valueAsNumber,
    isFocused,
    isDisabled,
    isReadOnly,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getInputProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/react/dist/esm/number-input/number-input.mjs
var [NumberInputStylesProvider, useNumberInputStyles] = createContext({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
var [NumberInputProvider, useNumberInputContext] = createContext({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
var NumberInput = forwardRef2(
  function NumberInput2(props, ref) {
    const styles2 = useMultiStyleConfig("NumberInput", props);
    const ownProps = omitThemingProps(props);
    const controlProps = useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput(controlProps);
    const ctx = (0, import_react112.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime115.jsx)(NumberInputProvider, { value: ctx, children: (0, import_jsx_runtime115.jsx)(NumberInputStylesProvider, { value: styles2, children: (0, import_jsx_runtime115.jsx)(
      chakra.div,
      {
        ...htmlProps,
        ref,
        className: cx("chakra-numberinput", props.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...styles2.root
        }
      }
    ) }) });
  }
);
NumberInput.displayName = "NumberInput";
var NumberInputStepper = forwardRef2(
  function NumberInputStepper2(props, ref) {
    const styles2 = useNumberInputStyles();
    return (0, import_jsx_runtime115.jsx)(
      chakra.div,
      {
        "aria-hidden": true,
        ref,
        ...props,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...styles2.stepperGroup
        }
      }
    );
  }
);
NumberInputStepper.displayName = "NumberInputStepper";
var NumberInputField = forwardRef2(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles2 = useNumberInputStyles();
    return (0, import_jsx_runtime115.jsx)(
      chakra.input,
      {
        ...input,
        className: cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles2.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
var StyledStepper = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
});
var NumberDecrementStepper = forwardRef2(function NumberDecrementStepper2(props, ref) {
  const styles2 = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return (0, import_jsx_runtime115.jsx)(StyledStepper, { ...decrement, __css: styles2.stepper, children: props.children ?? (0, import_jsx_runtime115.jsx)(TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
var NumberIncrementStepper = forwardRef2(function NumberIncrementStepper2(props, ref) {
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles2 = useNumberInputStyles();
  return (0, import_jsx_runtime115.jsx)(StyledStepper, { ...increment, __css: styles2.stepper, children: props.children ?? (0, import_jsx_runtime115.jsx)(TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

// node_modules/@chakra-ui/react/dist/esm/pin-input/pin-input.mjs
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
var import_react114 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/pin-input/use-pin-input.mjs
var import_react113 = __toESM(require_react(), 1);
var [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant
] = createDescendantContext();
var [PinInputProvider, usePinInputContext] = createContext({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to place all pin input fields within `<PinInput />`"
});
var toArray2 = (value) => value == null ? void 0 : value.split("");
function validate(value, type) {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
function usePinInput(props = {}) {
  const {
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = "○",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled,
    isInvalid,
    type = "number",
    mask
  } = props;
  const uuid = (0, import_react113.useId)();
  const id = idProp ?? `pin-input-${uuid}`;
  const descendants = usePinInputDescendants();
  const [moveFocus2, setMoveFocus] = (0, import_react113.useState)(true);
  const [focusedIndex, setFocusedIndex] = (0, import_react113.useState)(-1);
  const [values, setValues] = useControllableState({
    defaultValue: toArray2(defaultValue) || [],
    value: toArray2(value),
    onChange: (values2) => onChange == null ? void 0 : onChange(values2.join(""))
  });
  (0, import_react113.useEffect)(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
  }, [descendants]);
  const focusNext = (0, import_react113.useCallback)(
    (index) => {
      if (!moveFocus2 || !manageFocus)
        return;
      const next = descendants.next(index, false);
      if (next) {
        requestAnimationFrame(() => {
          next.node.focus();
        });
      }
    },
    [descendants, moveFocus2, manageFocus]
  );
  const setValue = (0, import_react113.useCallback)(
    (value2, index, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index] = value2;
      setValues(nextValues);
      const isComplete = value2 !== "" && nextValues.length === descendants.count() && nextValues.every(
        (inputValue) => inputValue != null && inputValue !== ""
      );
      if (isComplete) {
        onComplete == null ? void 0 : onComplete(nextValues.join(""));
      } else {
        if (handleFocus)
          focusNext(index);
      }
    },
    [values, setValues, focusNext, onComplete, descendants]
  );
  const clear = (0, import_react113.useCallback)(() => {
    var _a8;
    const values2 = Array(descendants.count()).fill("");
    setValues(values2);
    const first = descendants.first();
    (_a8 = first == null ? void 0 : first.node) == null ? void 0 : _a8.focus();
  }, [descendants, setValues]);
  const getNextValue = (0, import_react113.useCallback)((value2, eventValue) => {
    let nextValue = eventValue;
    if ((value2 == null ? void 0 : value2.length) > 0) {
      if (value2[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value2[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }
    return nextValue;
  }, []);
  const getInputProps = (0, import_react113.useCallback)(
    (props2) => {
      const { index, ...rest } = props2;
      const onChange2 = (event) => {
        const eventValue = event.currentTarget.value;
        const currentValue = values[index];
        const nextValue = getNextValue(currentValue, eventValue);
        if (nextValue === "") {
          setValue("", index);
          return;
        }
        if (eventValue.length > 2) {
          if (validate(eventValue, type)) {
            const nextValue2 = eventValue.split("").filter((_, index2) => index2 < descendants.count());
            setValues(nextValue2);
            if (nextValue2.length === descendants.count()) {
              onComplete == null ? void 0 : onComplete(nextValue2.join(""));
            }
          }
        } else {
          if (validate(nextValue, type)) {
            setValue(nextValue, index);
          }
          setMoveFocus(true);
        }
      };
      const onKeyDown = (event) => {
        var _a8;
        if (event.key === "Backspace" && manageFocus) {
          if (event.currentTarget.value === "") {
            const prevInput = descendants.prev(index, false);
            if (prevInput) {
              setValue("", index - 1, false);
              (_a8 = prevInput.node) == null ? void 0 : _a8.focus();
              setMoveFocus(true);
            }
          } else {
            setMoveFocus(false);
          }
        }
      };
      const onFocus3 = () => {
        setFocusedIndex(index);
      };
      const onBlur3 = () => {
        setFocusedIndex(-1);
      };
      const hasFocus = focusedIndex === index;
      const inputType = type === "number" ? "tel" : "text";
      return {
        "aria-label": "Please enter your pin code",
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : inputType,
        ...rest,
        id: `${id}-${index}`,
        disabled: isDisabled,
        "aria-invalid": ariaAttr(isInvalid),
        onChange: callAllHandlers(rest.onChange, onChange2),
        onKeyDown: callAllHandlers(rest.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(rest.onFocus, onFocus3),
        onBlur: callAllHandlers(rest.onBlur, onBlur3),
        value: values[index] || "",
        autoComplete: otp ? "one-time-code" : "off",
        placeholder: hasFocus ? "" : placeholder
      };
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id,
      isDisabled,
      mask,
      isInvalid,
      manageFocus,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues,
      type,
      values
    ]
  );
  return {
    // prop getter
    getInputProps,
    // state
    id,
    descendants,
    values,
    // actions
    setValue,
    setValues,
    clear
  };
}
function usePinInputField(props = {}, ref = null) {
  const { getInputProps } = usePinInputContext();
  const { index, register } = usePinInputDescendant();
  return getInputProps({
    ...props,
    ref: mergeRefs(register, ref),
    index: props.index ?? index
  });
}

// node_modules/@chakra-ui/react/dist/esm/pin-input/pin-input.mjs
function PinInput(props) {
  const styles2 = useStyleConfig("PinInput", props);
  const { children, ...rest } = omitThemingProps(props);
  const { descendants, ...context } = usePinInput(rest);
  const clones = getValidChildren(children).map(
    (child) => (0, import_react114.cloneElement)(child, { __css: styles2 })
  );
  return (0, import_jsx_runtime116.jsx)(PinInputDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime116.jsx)(PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
var PinInputField = forwardRef2(
  function PinInputField2(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return (0, import_jsx_runtime116.jsx)(
      chakra.input,
      {
        ...inputProps,
        className: cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

// node_modules/@chakra-ui/react/dist/esm/popover/popover.mjs
var import_jsx_runtime117 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/popover/popover-context.mjs
var [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
var [PopoverStylesProvider, usePopoverStyles] = createContext({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

// node_modules/@chakra-ui/react/dist/esm/popover/use-popover.mjs
var import_react115 = __toESM(require_react(), 1);
var TRIGGER = {
  click: "click",
  hover: "hover"
};
function usePopover(props = {}) {
  const {
    closeOnBlur = true,
    closeOnEsc = true,
    initialFocusRef,
    id,
    returnFocusOnClose = true,
    autoFocus = true,
    arrowSize,
    arrowShadowColor,
    trigger: trigger2 = TRIGGER.click,
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = "unmount",
    computePositionOnMount,
    ...popperProps
  } = props;
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure(props);
  const [restoreFocus, setRestoreFocus] = (0, import_react115.useState)(returnFocusOnClose);
  (0, import_react115.useEffect)(() => setRestoreFocus(returnFocusOnClose), [returnFocusOnClose]);
  const anchorRef = (0, import_react115.useRef)(null);
  const triggerRef = (0, import_react115.useRef)(null);
  const popoverRef = (0, import_react115.useRef)(null);
  const isHoveringRef = (0, import_react115.useRef)(false);
  const hasBeenOpened = (0, import_react115.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const [hasHeader, setHasHeader] = (0, import_react115.useState)(false);
  const [hasBody, setHasBody] = (0, import_react115.useState)(false);
  const uuid = (0, import_react115.useId)();
  const uid = id ?? uuid;
  const [triggerId, popoverId, headerId, bodyId] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((id2) => `${id2}-${uid}`);
  const {
    referenceRef,
    getArrowProps,
    getPopperProps,
    getArrowInnerProps,
    forceUpdate
  } = usePopper({
    ...popperProps,
    enabled: isOpen || !!computePositionOnMount
  });
  const animated = useAnimationState({ isOpen, ref: popoverRef });
  useFocusOnPointerDown({
    enabled: isOpen,
    ref: triggerRef
  });
  useFocusOnHide(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: restoreFocus && trigger2 === TRIGGER.click
  });
  useFocusOnShow(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger2 === TRIGGER.click
  });
  useOutsideClick({
    enabled: isOpen && closeOnBlur,
    ref: popoverRef,
    handler(event) {
      var _a8;
      const relatedTarget = ((_a8 = event.composedPath) == null ? void 0 : _a8.call(event)[0]) ?? [
        event.target
      ];
      if (contains5(triggerRef.current, relatedTarget))
        return;
      if (relatedTarget) {
        setRestoreFocus(!isFocusable(relatedTarget));
      }
      onClose();
    }
  });
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  const getPopoverProps = (0, import_react115.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const popoverProps = {
        ...props2,
        style: {
          ...props2.style,
          transformOrigin: cssVars.transformOrigin.varRef,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        },
        ref: mergeRefs(popoverRef, _ref2),
        children: shouldRenderChildren ? props2.children : null,
        id: popoverId,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: callAllHandlers(props2.onKeyDown, (event) => {
          if (event.nativeEvent.isComposing)
            return;
          if (closeOnEsc && event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            onClose();
          }
        }),
        onBlur: callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const targetIsPopover = contains5(popoverRef.current, relatedTarget);
          const targetIsTrigger = contains5(triggerRef.current, relatedTarget);
          const isValidBlur = !targetIsPopover && !targetIsTrigger;
          if (relatedTarget) {
            setRestoreFocus(!isFocusable(relatedTarget));
          }
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        }),
        "aria-labelledby": hasHeader ? headerId : void 0,
        "aria-describedby": hasBody ? bodyId : void 0
      };
      if (trigger2 === TRIGGER.hover) {
        popoverProps.role = "tooltip";
        popoverProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
        });
        popoverProps.onMouseLeave = callAllHandlers(
          props2.onMouseLeave,
          (event) => {
            if (event.nativeEvent.relatedTarget === null) {
              return;
            }
            isHoveringRef.current = false;
            setTimeout(() => onClose(), closeDelay);
          }
        );
      }
      return popoverProps;
    },
    [
      shouldRenderChildren,
      popoverId,
      hasHeader,
      headerId,
      hasBody,
      bodyId,
      trigger2,
      closeOnEsc,
      onClose,
      isOpen,
      closeOnBlur,
      closeDelay,
      arrowShadowColor,
      arrowSize
    ]
  );
  const getPopoverPositionerProps = (0, import_react115.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          visibility: isOpen ? "visible" : "hidden",
          ...props2.style
        }
      },
      forwardedRef
    ),
    [isOpen, getPopperProps]
  );
  const getAnchorProps = (0, import_react115.useCallback)(
    (props2, _ref2 = null) => {
      return {
        ...props2,
        // If anchor is rendered, it is used as reference.
        ref: mergeRefs(_ref2, anchorRef, referenceRef)
      };
    },
    [anchorRef, referenceRef]
  );
  const openTimeout = (0, import_react115.useRef)(void 0);
  const closeTimeout = (0, import_react115.useRef)(void 0);
  const maybeReferenceRef = (0, import_react115.useCallback)(
    (node2) => {
      if (anchorRef.current == null) {
        referenceRef(node2);
      }
    },
    [referenceRef]
  );
  const getTriggerProps = (0, import_react115.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(triggerRef, _ref2, maybeReferenceRef),
        id: triggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
      };
      if (trigger2 === TRIGGER.click) {
        triggerProps.onClick = callAllHandlers(props2.onClick, onToggle);
      }
      if (trigger2 === TRIGGER.hover) {
        triggerProps.onFocus = callAllHandlers(props2.onFocus, () => {
          if (openTimeout.current === void 0) {
            onOpen();
          }
        });
        triggerProps.onBlur = callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget(event);
          const isValidBlur = !contains5(popoverRef.current, relatedTarget);
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        });
        triggerProps.onKeyDown = callAllHandlers(props2.onKeyDown, (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        });
        triggerProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
          openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
        });
        triggerProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, () => {
          isHoveringRef.current = false;
          if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = void 0;
          }
          closeTimeout.current = window.setTimeout(() => {
            if (isHoveringRef.current === false) {
              onClose();
            }
          }, closeDelay);
        });
      }
      return triggerProps;
    },
    [
      triggerId,
      isOpen,
      popoverId,
      trigger2,
      maybeReferenceRef,
      onToggle,
      onOpen,
      closeOnBlur,
      onClose,
      openDelay,
      closeDelay
    ]
  );
  (0, import_react115.useEffect)(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  const getHeaderProps = (0, import_react115.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: headerId,
      ref: mergeRefs(ref, (node2) => {
        setHasHeader(!!node2);
      })
    }),
    [headerId]
  );
  const getBodyProps = (0, import_react115.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: bodyId,
      ref: mergeRefs(ref, (node2) => {
        setHasBody(!!node2);
      })
    }),
    [bodyId]
  );
  return {
    forceUpdate,
    isOpen,
    onAnimationComplete: animated.onComplete,
    onClose,
    getAnchorProps,
    getArrowProps,
    getArrowInnerProps,
    getPopoverPositionerProps,
    getPopoverProps,
    getTriggerProps,
    getHeaderProps,
    getBodyProps
  };
}
function contains5(parent, child) {
  return parent === child || (parent == null ? void 0 : parent.contains(child));
}
function getRelatedTarget(event) {
  const activeEl = event.currentTarget.ownerDocument.activeElement;
  return event.relatedTarget ?? activeEl;
}

// node_modules/@chakra-ui/react/dist/esm/popover/popover.mjs
function Popover(props) {
  const styles2 = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme2 = useTheme();
  const context = usePopover({ ...rest, direction: theme2.direction });
  return (0, import_jsx_runtime117.jsx)(PopoverProvider, { value: context, children: (0, import_jsx_runtime117.jsx)(PopoverStylesProvider, { value: styles2, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-anchor.mjs
var import_jsx_runtime118 = __toESM(require_jsx_runtime(), 1);
var import_react116 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/element-ref.mjs
var React19 = __toESM(require_react(), 1);
function getElementRef(el) {
  var _a8;
  const version2 = React19.version;
  if (typeof version2 !== "string")
    return el == null ? void 0 : el.ref;
  if (version2.startsWith("18."))
    return el == null ? void 0 : el.ref;
  return (_a8 = el == null ? void 0 : el.props) == null ? void 0 : _a8.ref;
}

// node_modules/@chakra-ui/react/dist/esm/popover/popover-anchor.mjs
function PopoverAnchor(props) {
  const child = import_react116.Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return (0, import_jsx_runtime118.jsx)(import_jsx_runtime118.Fragment, { children: (0, import_react116.cloneElement)(child, getAnchorProps(child.props, getElementRef(child))) });
}
PopoverAnchor.displayName = "PopoverAnchor";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-arrow.mjs
var import_jsx_runtime119 = __toESM(require_jsx_runtime(), 1);
var resolveVar = (scale2, value) => value ? `${scale2}.${value}, ${value}` : void 0;
function PopoverArrow(props) {
  const {
    bg,
    bgColor,
    backgroundColor,
    shadow,
    boxShadow,
    shadowColor,
    ...rest
  } = props;
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles2 = usePopoverStyles();
  const arrowBg = bg ?? bgColor ?? backgroundColor;
  const arrowShadow = shadow ?? boxShadow;
  return (0, import_jsx_runtime119.jsx)(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: (0, import_jsx_runtime119.jsx)(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(rest),
          __css: {
            "--popper-arrow-shadow-color": resolveVar("colors", shadowColor),
            "--popper-arrow-bg": resolveVar("colors", arrowBg),
            "--popper-arrow-shadow": resolveVar("shadows", arrowShadow),
            ...styles2.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-body.mjs
var import_jsx_runtime120 = __toESM(require_jsx_runtime(), 1);
var PopoverBody = forwardRef2(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime120.jsx)(
      chakra.div,
      {
        ...getBodyProps(props, ref),
        className: cx("chakra-popover__body", props.className),
        __css: styles2.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-close-button.mjs
var import_jsx_runtime121 = __toESM(require_jsx_runtime(), 1);
var PopoverCloseButton = forwardRef2(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime121.jsx)(
      CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: cx("chakra-popover__close-btn", props.className),
        __css: styles2.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-content.mjs
var import_jsx_runtime123 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/popover/popover-transition.mjs
var import_jsx_runtime122 = __toESM(require_jsx_runtime(), 1);
function mergeVariants(variants18) {
  if (!variants18)
    return;
  return {
    enter: {
      ...variants18.enter,
      visibility: "visible"
    },
    exit: {
      ...variants18.exit,
      transitionEnd: {
        visibility: "hidden"
      }
    }
  };
}
var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var MotionSection2 = chakra(motion.section);
var PopoverTransition = forwardRef2(function PopoverTransition2(props, ref) {
  const { variants: variants18 = scaleFade, ...rest } = props;
  const { isOpen } = usePopoverContext();
  return (0, import_jsx_runtime122.jsx)(
    MotionSection2,
    {
      ref,
      variants: mergeVariants(variants18),
      initial: false,
      animate: isOpen ? "enter" : "exit",
      ...rest
    }
  );
});
PopoverTransition.displayName = "PopoverTransition";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-content.mjs
var PopoverContent = forwardRef2(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
    const styles2 = usePopoverStyles();
    const contentStyles = defineStyle({
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles2.content
    });
    return (0, import_jsx_runtime123.jsx)(
      chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles2.popper,
        className: "chakra-popover__popper",
        children: (0, import_jsx_runtime123.jsx)(
          PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-footer.mjs
var import_jsx_runtime124 = __toESM(require_jsx_runtime(), 1);
function PopoverFooter(props) {
  const styles2 = usePopoverStyles();
  return (0, import_jsx_runtime124.jsx)(
    chakra.footer,
    {
      ...props,
      className: cx("chakra-popover__footer", props.className),
      __css: styles2.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-header.mjs
var import_jsx_runtime125 = __toESM(require_jsx_runtime(), 1);
var PopoverHeader = forwardRef2(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime125.jsx)(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles2.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

// node_modules/@chakra-ui/react/dist/esm/popover/popover-trigger.mjs
var import_jsx_runtime126 = __toESM(require_jsx_runtime(), 1);
var import_react117 = __toESM(require_react(), 1);
function PopoverTrigger(props) {
  const child = import_react117.Children.only(props.children);
  const { getTriggerProps } = usePopoverContext();
  return (0, import_jsx_runtime126.jsx)(import_jsx_runtime126.Fragment, { children: (0, import_react117.cloneElement)(child, getTriggerProps(child.props, getElementRef(child))) });
}
PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@chakra-ui/react/dist/esm/progress/circular-progress.mjs
var import_jsx_runtime129 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/progress/circle.mjs
var import_jsx_runtime127 = __toESM(require_jsx_runtime(), 1);
var Circle3 = (props) => (0, import_jsx_runtime127.jsx)(chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle3.displayName = "Circle";

// node_modules/@chakra-ui/react/dist/esm/progress/progress.utils.mjs
function valueToPercent2(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
var spin2 = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var progress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
var stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min: min2,
    max: max2,
    valueText,
    getValueText: getValueText2,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent2(value, min2, max2);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText2 === "function" ? getValueText2(value, percent) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max2,
      "aria-valuemin": min2,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}

// node_modules/@chakra-ui/react/dist/esm/progress/shape.mjs
var import_jsx_runtime128 = __toESM(require_jsx_runtime(), 1);
var Shape = (props) => {
  const { size: size2, isIndeterminate, ...rest } = props;
  return (0, import_jsx_runtime128.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size2,
        height: size2,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

// node_modules/@chakra-ui/react/dist/esm/progress/circular-progress.mjs
var CircularProgress = forwardRef2(
  (props, ref) => {
    const {
      size: size2 = "48px",
      max: max2 = 100,
      min: min2 = 0,
      valueText,
      getValueText: getValueText2,
      value,
      capIsRound,
      children,
      thickness = "10px",
      color: color2 = "#0078d4",
      trackColor = "#edebe9",
      isIndeterminate,
      ...rest
    } = props;
    const progress2 = getProgressProps({
      min: min2,
      max: max2,
      value,
      valueText,
      getValueText: getValueText2,
      isIndeterminate
    });
    const determinant = isIndeterminate ? void 0 : (progress2.percent ?? 0) * 2.64;
    const strokeDasharray = determinant == null ? void 0 : `${determinant} ${264 - determinant}`;
    const indicatorProps = isIndeterminate ? {
      css: { animation: `${spin2} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    };
    const rootStyles2 = defineStyle({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: size2
    });
    return (0, import_jsx_runtime129.jsxs)(
      chakra.div,
      {
        ref,
        className: "chakra-progress",
        ...progress2.bind,
        ...rest,
        __css: rootStyles2,
        children: [
          (0, import_jsx_runtime129.jsxs)(Shape, { size: size2, isIndeterminate, children: [
            (0, import_jsx_runtime129.jsx)(
              Circle3,
              {
                stroke: trackColor,
                strokeWidth: thickness,
                className: "chakra-progress__track"
              }
            ),
            (0, import_jsx_runtime129.jsx)(
              Circle3,
              {
                stroke: color2,
                strokeWidth: thickness,
                className: "chakra-progress__indicator",
                strokeLinecap: capIsRound ? "round" : void 0,
                opacity: progress2.value === 0 && !isIndeterminate ? 0 : void 0,
                ...indicatorProps
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";

// node_modules/@chakra-ui/react/dist/esm/progress/progress.mjs
var import_jsx_runtime130 = __toESM(require_jsx_runtime(), 1);
var [ProgressStylesProvider, useProgressStyles] = createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
var ProgressFilledTrack = forwardRef2(
  (props, ref) => {
    const { min: min2, max: max2, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
      value,
      min: min2,
      max: max2,
      isIndeterminate,
      role
    });
    const styles2 = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles2.filledTrack
    };
    return (0, import_jsx_runtime130.jsx)(
      chakra.div,
      {
        ref,
        style: { width: `${progress2.percent}%`, ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
var Progress = forwardRef2((props, ref) => {
  var _a8;
  const {
    value,
    min: min2 = 0,
    max: max2 = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles2 = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius ?? ((_a8 = styles2.track) == null ? void 0 : _a8.borderRadius);
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css3 = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles2.track
  };
  return (0, import_jsx_runtime130.jsx)(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: (0, import_jsx_runtime130.jsxs)(ProgressStylesProvider, { value: styles2, children: [
        (0, import_jsx_runtime130.jsx)(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min: min2,
            max: max2,
            value,
            isIndeterminate,
            css: css3,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";

// node_modules/@chakra-ui/react/dist/esm/progress/progress-label.mjs
var import_jsx_runtime131 = __toESM(require_jsx_runtime(), 1);
var ProgressLabel = (props) => {
  const styles2 = useProgressStyles();
  const labelStyles = defineStyle({
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles2.label
  });
  return (0, import_jsx_runtime131.jsx)(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

// node_modules/@chakra-ui/react/dist/esm/progress/circular-progress-label.mjs
var CircularProgressLabel = chakra("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
CircularProgressLabel.displayName = "CircularProgressLabel";

// node_modules/@chakra-ui/react/dist/esm/radio/radio.mjs
var import_jsx_runtime133 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/radio/radio-group.mjs
var import_jsx_runtime132 = __toESM(require_jsx_runtime(), 1);
var import_react120 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/radio/use-radio-group.mjs
var import_react119 = __toESM(require_react(), 1);
function isInputEvent3(value) {
  return value && isObject(value) && isObject(value.target);
}
function useRadioGroup(props = {}) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled,
    isFocusable: isFocusable2,
    isNative,
    ...htmlProps
  } = props;
  const [valueState, setValue] = (0, import_react119.useState)(defaultValue || "");
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const ref = (0, import_react119.useRef)(null);
  const focus = (0, import_react119.useCallback)(() => {
    const rootNode = ref.current;
    if (!rootNode)
      return;
    let query = `input:not(:disabled):checked`;
    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query
    );
    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }
    query = `input:not(:disabled)`;
    const firstEnabledInput = rootNode.querySelector(query);
    firstEnabledInput == null ? void 0 : firstEnabledInput.focus();
  }, []);
  const uuid = (0, import_react119.useId)();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;
  const onChange = (0, import_react119.useCallback)(
    (eventOrValue) => {
      const nextValue = isInputEvent3(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp == null ? void 0 : onChangeProp(String(nextValue));
    },
    [onChangeProp, isControlled]
  );
  const getRootProps = (0, import_react119.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: mergeRefs(forwardedRef, ref),
      role: "radiogroup"
    }),
    []
  );
  const getRadioProps = (0, import_react119.useCallback)(
    (props2 = {}, ref2 = null) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        ref: ref2,
        name,
        [checkedKey]: value != null ? props2.value === value : void 0,
        onChange(event) {
          onChange(event);
        },
        "data-radiogroup": true
      };
    },
    [isNative, name, onChange, value]
  );
  return {
    getRootProps,
    getRadioProps,
    name,
    ref,
    focus,
    setValue,
    value,
    onChange,
    isDisabled,
    isFocusable: isFocusable2,
    htmlProps
  };
}

// node_modules/@chakra-ui/react/dist/esm/radio/radio-group.mjs
var [RadioGroupProvider, useRadioGroupContext] = createContext({
  name: "RadioGroupContext",
  strict: false
});
var RadioGroup = forwardRef2((props, ref) => {
  const {
    colorScheme,
    size: size2,
    variant,
    children,
    className,
    isDisabled,
    isFocusable: isFocusable2,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup(rest);
  const group = (0, import_react120.useMemo)(
    () => ({
      name,
      size: size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable: isFocusable2
    }),
    [
      name,
      size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled,
      isFocusable2
    ]
  );
  return (0, import_jsx_runtime132.jsx)(RadioGroupProvider, { value: group, children: (0, import_jsx_runtime132.jsx)(
    chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

// node_modules/@chakra-ui/react/dist/esm/radio/use-radio.mjs
var import_react121 = __toESM(require_react(), 1);
function useRadio(props = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable: isFocusable2,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup,
    "aria-describedby": ariaDescribedBy,
    ...htmlProps
  } = props;
  const uuid = `radio-${(0, import_react121.useId)()}`;
  const formControl = useFormControlContext();
  const group = useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl;
  let id = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id = idProp ?? id;
  const isDisabled = isDisabledProp ?? (formControl == null ? void 0 : formControl.isDisabled);
  const isReadOnly = isReadOnlyProp ?? (formControl == null ? void 0 : formControl.isReadOnly);
  const isRequired = isRequiredProp ?? (formControl == null ? void 0 : formControl.isRequired);
  const isInvalid = isInvalidProp ?? (formControl == null ? void 0 : formControl.isInvalid);
  const [isFocused, setFocused] = (0, import_react121.useState)(false);
  const [isHovered, setHovering] = (0, import_react121.useState)(false);
  const [isActive, setActive] = (0, import_react121.useState)(false);
  const [isCheckedState, setChecked] = (0, import_react121.useState)(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  const isFocusVisibleRef = (0, import_react121.useRef)(false);
  (0, import_react121.useEffect)(() => {
    return trackFocusVisible((state22) => {
      isFocusVisibleRef.current = state22;
    });
  }, []);
  const handleChange = (0, import_react121.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setChecked(event.currentTarget.checked);
      }
      onChange == null ? void 0 : onChange(event);
    },
    [isControlled, isDisabled, isReadOnly, onChange]
  );
  const onKeyDown = (0, import_react121.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react121.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = (0, import_react121.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: callAllHandlers(
        props2.onMouseLeave,
        () => setHovering(false)
      )
    }),
    [
      isActive,
      isHovered,
      isDisabled,
      isInvalid,
      isChecked,
      isFocused,
      isReadOnly
    ]
  );
  const { onFocus: onFocus3, onBlur: onBlur3 } = formControl ?? {};
  const getInputProps = (0, import_react121.useCallback)(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled && !isFocusable2;
      return {
        ...props2,
        id,
        ref,
        type: "radio",
        name,
        value,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          onBlur3,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          onFocus3,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": ariaAttr(isInvalid),
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-required": ariaAttr(isRequired),
        "data-readonly": dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHiddenStyle
      };
    },
    [
      isDisabled,
      isFocusable2,
      id,
      name,
      value,
      handleChange,
      onBlur3,
      onFocus3,
      onKeyDown,
      onKeyUp,
      isChecked,
      isReadOnly,
      isRequired,
      isInvalid,
      ariaDescribedBy
    ]
  );
  const getLabelProps = (props2 = {}, ref = null) => ({
    ...props2,
    ref,
    onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent2),
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    htmlFor: id,
    ...props2,
    ref,
    "data-disabled": dataAttr(isDisabled),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const state2 = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isDisabled,
    isReadOnly,
    isRequired
  };
  return {
    state: state2,
    getRadioProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
function stopEvent2(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/react/dist/esm/radio/radio.mjs
var Radio = forwardRef2((props, ref) => {
  const group = useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles2 = useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = omitThemingProps(props);
  const {
    spacing: spacing2 = "0.5rem",
    children,
    isDisabled = group == null ? void 0 : group.isDisabled,
    isFocusable: isFocusable2 = group == null ? void 0 : group.isFocusable,
    inputProps: htmlInputProps,
    ...rest
  } = ownProps;
  let isChecked = props.isChecked;
  if ((group == null ? void 0 : group.value) != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && valueProp != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const name = (props == null ? void 0 : props.name) ?? (group == null ? void 0 : group.name);
  const {
    getInputProps,
    getRadioProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable: isFocusable2,
    isDisabled,
    onChange,
    name
  });
  const [layoutProps, otherProps] = split(htmlProps, layoutPropNames);
  const checkboxProps = getRadioProps(otherProps);
  const inputProps = getInputProps(htmlInputProps, ref);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());
  const rootStyles2 = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...styles2.container
  };
  const checkboxStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...styles2.control
  };
  const labelStyles = {
    userSelect: "none",
    marginStart: spacing2,
    ...styles2.label
  };
  return (0, import_jsx_runtime133.jsxs)(chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles2, children: [
    (0, import_jsx_runtime133.jsx)("input", { className: "chakra-radio__input", ...inputProps }),
    (0, import_jsx_runtime133.jsx)(
      chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && (0, import_jsx_runtime133.jsx)(
      chakra.span,
      {
        className: "chakra-radio__label",
        ...labelProps,
        __css: labelStyles,
        children
      }
    )
  ] });
});
Radio.displayName = "Radio";

// node_modules/@chakra-ui/react/dist/esm/select/select.mjs
var import_jsx_runtime135 = __toESM(require_jsx_runtime(), 1);
var import_react122 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/select/select-field.mjs
var import_jsx_runtime134 = __toESM(require_jsx_runtime(), 1);
var SelectField = forwardRef2(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return (0, import_jsx_runtime134.jsxs)(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && (0, import_jsx_runtime134.jsx)("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

// node_modules/@chakra-ui/react/dist/esm/select/select.mjs
var Select = forwardRef2((props, ref) => {
  var _a8;
  const styles2 = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color: color2,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles2 = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: color2
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles2.field,
    _focus: {
      zIndex: "unset",
      ...(_a8 = styles2.field) == null ? void 0 : _a8["_focus"]
    }
  };
  return (0, import_jsx_runtime135.jsxs)(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles2,
      ...layoutProps,
      ...rootProps,
      children: [
        (0, import_jsx_runtime135.jsx)(
          SelectField,
          {
            ref,
            height: h ?? height,
            minH: minH ?? minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        (0, import_jsx_runtime135.jsx)(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color2) && { color: iconColor || color2 },
            __css: styles2.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = (props) => (0, import_jsx_runtime135.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime135.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = (props) => {
  const { children = (0, import_jsx_runtime135.jsx)(DefaultIcon, {}), ...rest } = props;
  const clone = (0, import_react122.cloneElement)(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    // force icon to adhere to `IconWrapper` styles
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return (0, import_jsx_runtime135.jsx)(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: (0, import_react122.isValidElement)(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";

// node_modules/@chakra-ui/react/dist/esm/skeleton/skeleton.mjs
var import_jsx_runtime136 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/skeleton/use-is-first-render.mjs
var import_react123 = __toESM(require_react(), 1);
function useIsFirstRender() {
  const isFirstRender = (0, import_react123.useRef)(true);
  (0, import_react123.useEffect)(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

// node_modules/@chakra-ui/react/dist/esm/skeleton/skeleton.mjs
var StyledSkeleton = chakra("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
var $startColor2 = cssVar("skeleton-start-color");
var $endColor2 = cssVar("skeleton-end-color");
var fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var bgFade = keyframes({
  from: {
    borderColor: $startColor2.reference,
    background: $startColor2.reference
  },
  to: {
    borderColor: $endColor2.reference,
    background: $endColor2.reference
  }
});
var Skeleton = forwardRef2((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles2 = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    animation: animationProp,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor2.variable]: startColorVar },
    ...endColorVar && { [$endColor2.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return (0, import_jsx_runtime136.jsx)(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return (0, import_jsx_runtime136.jsx)(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles2,
        ...cssVarStyles,
        _dark: { ...styles2["_dark"], ...cssVarStyles },
        animation: animationProp || `${speed}s linear infinite alternate ${bgFade}`
      }
    }
  );
});
Skeleton.displayName = "Skeleton";

// node_modules/@chakra-ui/react/dist/esm/skeleton/skeleton-text.mjs
var import_jsx_runtime137 = __toESM(require_jsx_runtime(), 1);
function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
var defaultNoOfLines = 3;
var SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing: spacing2 = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size: size2,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index) => {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = cx("chakra-skeleton__group", className);
  return (0, import_jsx_runtime137.jsx)(chakra.div, { className: _className, ...rest, children: numbers.map((number, index) => {
    if (isLoaded && index > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing2,
      width: getWidth(number),
      height: skeletonHeight
    };
    return (0, import_jsx_runtime137.jsx)(
      Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size: size2,
        colorScheme,
        ...sizeProps,
        // allows animating the children
        children: index === 0 ? children : void 0
      },
      numbers.length.toString() + number
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";

// node_modules/@chakra-ui/react/dist/esm/skeleton/skeleton-circle.mjs
var import_jsx_runtime138 = __toESM(require_jsx_runtime(), 1);
var SkeletonCircle = ({
  size: size2 = "2rem",
  ...rest
}) => (0, import_jsx_runtime138.jsx)(Skeleton, { borderRadius: "full", boxSize: size2, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

// node_modules/@chakra-ui/react/dist/esm/skip-nav/skip-nav.mjs
var import_jsx_runtime139 = __toESM(require_jsx_runtime(), 1);
var fallbackId = "chakra-skip-nav";
function getStyles2(styles2) {
  return {
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    ...styles2,
    _focus: {
      clip: "auto",
      width: "auto",
      height: "auto",
      ...styles2["_focus"]
    }
  };
}
var SkipNavLink = forwardRef2(
  function SkipNavLink2(props, ref) {
    const styles2 = useStyleConfig("SkipLink", props);
    const { id = fallbackId, ...rest } = omitThemingProps(props);
    return (0, import_jsx_runtime139.jsx)(chakra.a, { ...rest, ref, href: `#${id}`, __css: getStyles2(styles2) });
  }
);
SkipNavLink.displayName = "SkipNavLink";
var SkipNavContent = forwardRef2(
  function SkipNavContent2(props, ref) {
    const { id = fallbackId, ...rest } = props;
    return (0, import_jsx_runtime139.jsx)(
      chakra.div,
      {
        ref,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);
SkipNavContent.displayName = "SkipNavContent";

// node_modules/@chakra-ui/react/dist/esm/slider/range-slider.mjs
var import_jsx_runtime140 = __toESM(require_jsx_runtime(), 1);
var import_react126 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/slider/use-range-slider.mjs
var import_react125 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/slider/slider-utils.mjs
function getIds(id) {
  return {
    root: `slider-root-${id}`,
    getThumb: (i) => `slider-thumb-${id}-${i}`,
    getInput: (i) => `slider-input-${id}-${i}`,
    track: `slider-track-${id}`,
    innerTrack: `slider-filled-track-${id}`,
    getMarker: (i) => `slider-marker-${id}-${i}`,
    output: `slider-output-${id}`
  };
}
function orient2(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getStyles3(options) {
  const { orientation, thumbPercents, isReversed } = options;
  const getThumbStyle = (i) => {
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...orient2({
        orientation,
        vertical: {
          bottom: `calc(${thumbPercents[i]}% - var(--slider-thumb-size) / 2)`
        },
        horizontal: {
          left: `calc(${thumbPercents[i]}% - var(--slider-thumb-size) / 2)`
        }
      })
    };
  };
  const rootStyle = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0
  };
  const trackStyle = {
    position: "absolute",
    ...orient2({
      orientation,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  };
  const isSingleThumb = thumbPercents.length === 1;
  const fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]];
  const range2 = isSingleThumb ? fallback : thumbPercents;
  let start2 = range2[0];
  if (!isSingleThumb && isReversed) {
    start2 = 100 - start2;
  }
  const percent = Math.abs(range2[range2.length - 1] - range2[0]);
  const innerTrackStyle = {
    ...trackStyle,
    ...orient2({
      orientation,
      vertical: isReversed ? { height: `${percent}%`, top: `${start2}%` } : { height: `${percent}%`, bottom: `${start2}%` },
      horizontal: isReversed ? { width: `${percent}%`, right: `${start2}%` } : { width: `${percent}%`, left: `${start2}%` }
    })
  };
  return { trackStyle, innerTrackStyle, rootStyle, getThumbStyle };
}
function getIsReversed(options) {
  const { isReversed, direction: direction2, orientation } = options;
  if (direction2 === "ltr" || orientation === "vertical") {
    return isReversed;
  }
  return !isReversed;
}

// node_modules/@chakra-ui/react/dist/esm/slider/use-range-slider.mjs
function useRangeSlider(props) {
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction: direction2 = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    minStepsBetweenThumbs = 0,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction: direction2,
    orientation
  });
  const [valueState, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? [25, 75],
    onChange
  });
  if (!Array.isArray(valueState)) {
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof valueState}\``
    );
  }
  const [isDragging, setDragging] = (0, import_react125.useState)(false);
  const [isFocused, setFocused] = (0, import_react125.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react125.useState)(-1);
  const isInteractive = !(isDisabled || isReadOnly);
  const initialValue = (0, import_react125.useRef)(valueState);
  const value = valueState.map((val) => clampValue(val, min2, max2));
  const spacing2 = minStepsBetweenThumbs * step;
  const valueBounds = getValueBounds(value, min2, max2, spacing2);
  const stateRef = (0, import_react125.useRef)({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  stateRef.current.value = value;
  stateRef.current.valueBounds = valueBounds;
  const reversedValue = value.map((val) => max2 - val + min2);
  const thumbValues = isReversed ? reversedValue : value;
  const thumbPercents = thumbValues.map((val) => valueToPercent(val, min2, max2));
  const isVertical = orientation === "vertical";
  const trackRef = (0, import_react125.useRef)(null);
  const rootRef = (0, import_react125.useRef)(null);
  const reactId = (0, import_react125.useId)();
  const uuid = idProp ?? reactId;
  const ids = getIds(uuid);
  const getValueFromPointer = (0, import_react125.useCallback)(
    (event) => {
      var _a8;
      if (!trackRef.current)
        return;
      stateRef.current.eventSource = "pointer";
      const rect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = ((_a8 = event.touches) == null ? void 0 : _a8[0]) ?? event;
      const diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
      const length = isVertical ? rect.height : rect.width;
      let percent = diff / length;
      if (isReversed)
        percent = 1 - percent;
      return percentToValue(percent, min2, max2);
    },
    [isVertical, isReversed, max2, min2]
  );
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const actions = (0, import_react125.useMemo)(
    () => ({
      setValueAtIndex(index, val) {
        if (!isInteractive)
          return;
        const bounds = stateRef.current.valueBounds[index];
        val = parseFloat(roundValueToStep(val, bounds.min, oneStep));
        val = clampValue(val, bounds.min, bounds.max);
        const next = [...stateRef.current.value];
        next[index] = val;
        setValue(next);
      },
      setActiveIndex,
      stepUp(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next = isReversed ? valueAtIndex - step2 : valueAtIndex + step2;
        actions.setValueAtIndex(index, next);
      },
      stepDown(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next = isReversed ? valueAtIndex + step2 : valueAtIndex - step2;
        actions.setValueAtIndex(index, next);
      },
      reset() {
        setValue(initialValue.current);
      }
    }),
    [oneStep, isReversed, setValue, isInteractive]
  );
  const onKeyDown = (0, import_react125.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        ArrowRight: () => actions.stepUp(activeIndex),
        ArrowUp: () => actions.stepUp(activeIndex),
        ArrowLeft: () => actions.stepDown(activeIndex),
        ArrowDown: () => actions.stepDown(activeIndex),
        PageUp: () => actions.stepUp(activeIndex, tenSteps),
        PageDown: () => actions.stepDown(activeIndex, tenSteps),
        Home: () => {
          const { min: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        },
        End: () => {
          const { max: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        stateRef.current.eventSource = "keyboard";
      }
    },
    [actions, activeIndex, tenSteps, valueBounds]
  );
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react125.useMemo)(
    () => getStyles3({
      isReversed,
      orientation,
      thumbPercents
    }),
    [isReversed, orientation, thumbPercents]
  );
  const focusThumb = (0, import_react125.useCallback)(
    (index) => {
      var _a8;
      const idx = index ?? activeIndex;
      if (idx !== -1 && focusThumbOnChange) {
        const id = ids.getThumb(idx);
        const thumb = (_a8 = rootRef.current) == null ? void 0 : _a8.ownerDocument.getElementById(id);
        if (thumb) {
          setTimeout(() => thumb.focus());
        }
      }
    },
    [focusThumbOnChange, activeIndex, ids]
  );
  useUpdateEffect(() => {
    if (stateRef.current.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    }
  }, [value, onChangeEnd]);
  const onPanSessionStart = (event) => {
    const pointValue = getValueFromPointer(event) || 0;
    const distances = stateRef.current.value.map(
      (val) => Math.abs(val - pointValue)
    );
    const closest = Math.min(...distances);
    let index = distances.indexOf(closest);
    const thumbsAtPosition = distances.filter(
      (distance2) => distance2 === closest
    );
    const isThumbStacked = thumbsAtPosition.length > 1;
    if (isThumbStacked && pointValue > stateRef.current.value[index]) {
      index = index + thumbsAtPosition.length - 1;
    }
    setActiveIndex(index);
    actions.setValueAtIndex(index, pointValue);
    focusThumb(index);
  };
  const onPan = (event) => {
    if (activeIndex == -1)
      return;
    const pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      if (!isInteractive)
        return;
      setDragging(true);
      onPanSessionStart(event);
      onChangeStart == null ? void 0 : onChangeStart(stateRef.current.value);
    },
    onPanSessionEnd() {
      if (!isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    },
    onPan(event) {
      if (!isInteractive)
        return;
      onPan(event);
    }
  });
  const getRootProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        id: ids.root,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr(isDisabled),
        "data-focused": dataAttr(isFocused),
        style: { ...props2.style, ...rootStyle }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle, ids]
  );
  const getTrackProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: ids.track,
        "data-disabled": dataAttr(isDisabled),
        style: { ...props2.style, ...trackStyle }
      };
    },
    [isDisabled, trackStyle, ids]
  );
  const getInnerTrackProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.innerTrack,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle, ids]
  );
  const getThumbProps = (0, import_react125.useCallback)(
    (props2, ref = null) => {
      const { index, ...rest } = props2;
      const valueAtIndex = value[index];
      if (valueAtIndex == null) {
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${index}\`. The \`value\` or \`defaultValue\` length is : ${value.length}`
        );
      }
      const bounds = valueBounds[index];
      return {
        ...rest,
        ref,
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: ids.getThumb(index),
        "data-active": dataAttr(isDragging && activeIndex === index),
        "aria-valuetext": (getAriaValueText == null ? void 0 : getAriaValueText(valueAtIndex)) ?? (ariaValueText == null ? void 0 : ariaValueText[index]),
        "aria-valuemin": bounds.min,
        "aria-valuemax": bounds.max,
        "aria-valuenow": valueAtIndex,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr(isDisabled),
        "aria-readonly": ariaAttr(isReadOnly),
        "aria-label": ariaLabel == null ? void 0 : ariaLabel[index],
        "aria-labelledby": (ariaLabel == null ? void 0 : ariaLabel[index]) ? void 0 : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index],
        style: { ...props2.style, ...getThumbStyle(index) },
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(props2.onFocus, () => {
          setFocused(true);
          setActiveIndex(index);
        }),
        onBlur: callAllHandlers(props2.onBlur, () => {
          setFocused(false);
          setActiveIndex(-1);
        })
      };
    },
    [
      ids,
      value,
      valueBounds,
      isInteractive,
      isDragging,
      activeIndex,
      getAriaValueText,
      ariaValueText,
      orientation,
      isDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown,
      setFocused
    ]
  );
  const getOutputProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.output,
        htmlFor: value.map((v, i) => ids.getThumb(i)).join(" "),
        "aria-live": "off"
      };
    },
    [ids, value]
  );
  const getMarkerProps = (0, import_react125.useCallback)(
    (props2, ref = null) => {
      const { value: v, ...rest } = props2;
      const isInRange = !(v < min2 || v > max2);
      const isHighlighted = v >= value[0] && v <= value[value.length - 1];
      let percent = valueToPercent(v, min2, max2);
      percent = isReversed ? 100 - percent : percent;
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient2({
          orientation,
          vertical: { bottom: `${percent}%` },
          horizontal: { left: `${percent}%` }
        })
      };
      return {
        ...rest,
        ref,
        id: ids.getMarker(props2.value),
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr(isDisabled),
        "data-invalid": dataAttr(!isInRange),
        "data-highlighted": dataAttr(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max2, min2, orientation, value, ids]
  );
  const getInputProps = (0, import_react125.useCallback)(
    (props2, ref = null) => {
      const { index, ...rest } = props2;
      return {
        ...rest,
        ref,
        id: ids.getInput(index),
        type: "hidden",
        value: value[index],
        name: Array.isArray(name) ? name[index] : `${name}-${index}`
      };
    },
    [name, value, ids]
  );
  const state2 = {
    value,
    isFocused,
    isDragging,
    getThumbPercent: (index) => thumbPercents[index],
    getThumbMinValue: (index) => valueBounds[index].min,
    getThumbMaxValue: (index) => valueBounds[index].max
  };
  return {
    state: state2,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps
  };
}
function getValueBounds(arr, min2, max2, spacing2) {
  return arr.map((v, i) => {
    const _min = i === 0 ? min2 : arr[i - 1] + spacing2;
    const _max = i === arr.length - 1 ? max2 : arr[i + 1] - spacing2;
    return { min: _min, max: _max };
  });
}

// node_modules/@chakra-ui/react/dist/esm/slider/range-slider.mjs
var [RangeSliderProvider, useRangeSliderContext] = createContext({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
var [RangeSliderStylesProvider, useRangeSliderStyles] = createContext({
  name: `RangeSliderStylesContext`,
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
});
var RangeSlider = forwardRef2(
  function RangeSlider2(props, ref) {
    const sliderProps = {
      orientation: "horizontal",
      ...props
    };
    const styles2 = useMultiStyleConfig("Slider", sliderProps);
    const ownProps = omitThemingProps(sliderProps);
    const { direction: direction2 } = useTheme();
    ownProps.direction = direction2;
    const { getRootProps, ...context } = useRangeSlider(ownProps);
    const ctx = (0, import_react126.useMemo)(
      () => ({ ...context, name: sliderProps.name }),
      [context, sliderProps.name]
    );
    return (0, import_jsx_runtime140.jsx)(RangeSliderProvider, { value: ctx, children: (0, import_jsx_runtime140.jsx)(RangeSliderStylesProvider, { value: styles2, children: (0, import_jsx_runtime140.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className: "chakra-slider",
        __css: styles2.container,
        children: sliderProps.children
      }
    ) }) });
  }
);
RangeSlider.displayName = "RangeSlider";
var RangeSliderThumb = forwardRef2(
  function RangeSliderThumb2(props, ref) {
    const { getThumbProps, getInputProps, name } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const thumbProps = getThumbProps(props, ref);
    return (0, import_jsx_runtime140.jsxs)(
      chakra.div,
      {
        ...thumbProps,
        className: cx("chakra-slider__thumb", props.className),
        __css: styles2.thumb,
        children: [
          thumbProps.children,
          name && (0, import_jsx_runtime140.jsx)("input", { ...getInputProps({ index: props.index }) })
        ]
      }
    );
  }
);
RangeSliderThumb.displayName = "RangeSliderThumb";
var RangeSliderTrack = forwardRef2(
  function RangeSliderTrack2(props, ref) {
    const { getTrackProps } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const trackProps = getTrackProps(props, ref);
    return (0, import_jsx_runtime140.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx("chakra-slider__track", props.className),
        __css: styles2.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
RangeSliderTrack.displayName = "RangeSliderTrack";
var RangeSliderFilledTrack = forwardRef2(function RangeSliderFilledTrack2(props, ref) {
  const { getInnerTrackProps } = useRangeSliderContext();
  const styles2 = useRangeSliderStyles();
  const trackProps = getInnerTrackProps(props, ref);
  return (0, import_jsx_runtime140.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: "chakra-slider__filled-track",
      __css: styles2.filledTrack
    }
  );
});
RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
var RangeSliderMark = forwardRef2(
  function RangeSliderMark2(props, ref) {
    const { getMarkerProps } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const markProps = getMarkerProps(props, ref);
    return (0, import_jsx_runtime140.jsx)(
      chakra.div,
      {
        ...markProps,
        className: cx("chakra-slider__marker", props.className),
        __css: styles2.mark
      }
    );
  }
);
RangeSliderMark.displayName = "RangeSliderMark";

// node_modules/@chakra-ui/react/dist/esm/slider/slider.mjs
var import_jsx_runtime141 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/slider/use-slider.mjs
var import_react127 = __toESM(require_react(), 1);
function useSlider(props) {
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction: direction2 = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction: direction2,
    orientation
  });
  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue ?? getDefaultValue(min2, max2),
    onChange
  });
  const [isDragging, setDragging] = (0, import_react127.useState)(false);
  const [isFocused, setFocused] = (0, import_react127.useState)(false);
  const isInteractive = !(isDisabled || isReadOnly);
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const value = clampValue(computedValue, min2, max2);
  const reversedValue = max2 - value + min2;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent(trackValue, min2, max2);
  const isVertical = orientation === "vertical";
  const stateRef = useLatestRef({
    min: min2,
    max: max2,
    step,
    isDisabled,
    value,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null,
    focusThumbOnChange,
    orientation
  });
  const trackRef = (0, import_react127.useRef)(null);
  const thumbRef = (0, import_react127.useRef)(null);
  const rootRef = (0, import_react127.useRef)(null);
  const reactId = (0, import_react127.useId)();
  const uuid = idProp ?? reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = (0, import_react127.useCallback)(
    (event) => {
      var _a8;
      if (!trackRef.current)
        return;
      const state22 = stateRef.current;
      state22.eventSource = "pointer";
      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = ((_a8 = event.touches) == null ? void 0 : _a8[0]) ?? event;
      const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
      const length = isVertical ? trackRect.height : trackRect.width;
      let percent = diff / length;
      if (isReversed) {
        percent = 1 - percent;
      }
      let nextValue = percentToValue(percent, state22.min, state22.max);
      if (state22.step) {
        nextValue = parseFloat(
          roundValueToStep(nextValue, state22.min, state22.step)
        );
      }
      nextValue = clampValue(nextValue, state22.min, state22.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = (0, import_react127.useCallback)(
    (value2) => {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      value2 = parseFloat(roundValueToStep(value2, state22.min, oneStep));
      value2 = clampValue(value2, state22.min, state22.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = (0, import_react127.useMemo)(
    () => ({
      stepUp(step2 = oneStep) {
        const next = isReversed ? value - step2 : value + step2;
        constrain(next);
      },
      stepDown(step2 = oneStep) {
        const next = isReversed ? value + step2 : value - step2;
        constrain(next);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value2) {
        constrain(value2);
      }
    }),
    [constrain, isReversed, value, oneStep, defaultValue]
  );
  const onKeyDown = (0, import_react127.useCallback)(
    (event) => {
      const state22 = stateRef.current;
      const keyMap = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(state22.min),
        End: () => constrain(state22.max)
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        state22.eventSource = "keyboard";
      }
    },
    [actions, constrain, tenSteps, stateRef]
  );
  const valueText = (getAriaValueText == null ? void 0 : getAriaValueText(value)) ?? ariaValueText;
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react127.useMemo)(() => {
    const state22 = stateRef.current;
    return getStyles3({
      isReversed,
      orientation: state22.orientation,
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbPercent, stateRef]);
  const focusThumb = (0, import_react127.useCallback)(() => {
    const state22 = stateRef.current;
    if (state22.focusThumbOnChange) {
      setTimeout(() => {
        var _a8;
        return (_a8 = thumbRef.current) == null ? void 0 : _a8.focus();
      });
    }
  }, [stateRef]);
  useUpdateEffect(() => {
    const state22 = stateRef.current;
    focusThumb();
    if (state22.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(state22.value);
    }
  }, [value, onChangeEnd]);
  function setValueFromPointer(event) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== stateRef.current.value) {
      setValue(nextValue);
    }
  }
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setDragging(true);
      focusThumb();
      setValueFromPointer(event);
      onChangeStart == null ? void 0 : onChangeStart(state22.value);
    },
    onPanSessionEnd() {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(state22.value);
    },
    onPan(event) {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setValueFromPointer(event);
    }
  });
  const getRootProps = (0, import_react127.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: mergeRefs(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr(isDisabled),
        "data-focused": dataAttr(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled, isFocused, rootStyle]
  );
  const getTrackProps = (0, import_react127.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, trackRef),
        id: trackId,
        "data-disabled": dataAttr(isDisabled),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled, trackId, trackStyle]
  );
  const getInnerTrackProps = (0, import_react127.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle]
  );
  const getThumbProps = (0, import_react127.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": dataAttr(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min2,
        "aria-valuemax": max2,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr(isDisabled),
        "aria-readonly": ariaAttr(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(props2.onFocus, () => setFocused(true)),
        onBlur: callAllHandlers(props2.onBlur, () => setFocused(false))
      };
    },
    [
      isInteractive,
      thumbId,
      isDragging,
      valueText,
      min2,
      max2,
      value,
      orientation,
      isDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown
    ]
  );
  const getMarkerProps = (0, import_react127.useCallback)(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min2 || props2.value > max2);
      const isHighlighted = value >= props2.value;
      const markerPercent = valueToPercent(props2.value, min2, max2);
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient3({
          orientation,
          vertical: {
            bottom: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          },
          horizontal: {
            left: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          }
        })
      };
      return {
        ...props2,
        ref,
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr(isDisabled),
        "data-invalid": dataAttr(!isInRange),
        "data-highlighted": dataAttr(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled, isReversed, max2, min2, orientation, value]
  );
  const getInputProps = (0, import_react127.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        type: "hidden",
        value,
        name
      };
    },
    [name, value]
  );
  const state2 = { value, isFocused, isDragging };
  return {
    state: state2,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps
  };
}
function orient3(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getDefaultValue(min2, max2) {
  return max2 < min2 ? min2 : min2 + (max2 - min2) / 2;
}

// node_modules/@chakra-ui/react/dist/esm/slider/slider.mjs
var [SliderProvider, useSliderContext] = createContext({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
var [SliderStylesProvider, useSliderStyles] = createContext({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
var Slider = forwardRef2((props, ref) => {
  const sliderProps = {
    ...props,
    orientation: (props == null ? void 0 : props.orientation) ?? "horizontal"
  };
  const styles2 = useMultiStyleConfig("Slider", sliderProps);
  const ownProps = omitThemingProps(sliderProps);
  const { direction: direction2 } = useTheme();
  ownProps.direction = direction2;
  const { getInputProps, getRootProps, ...context } = useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return (0, import_jsx_runtime141.jsx)(SliderProvider, { value: context, children: (0, import_jsx_runtime141.jsx)(SliderStylesProvider, { value: styles2, children: (0, import_jsx_runtime141.jsxs)(
    chakra.div,
    {
      ...rootProps,
      className: cx("chakra-slider", sliderProps.className),
      __css: styles2.container,
      children: [
        sliderProps.children,
        (0, import_jsx_runtime141.jsx)("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
var SliderThumb = forwardRef2((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return (0, import_jsx_runtime141.jsx)(
    chakra.div,
    {
      ...thumbProps,
      className: cx("chakra-slider__thumb", props.className),
      __css: styles2.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
var SliderTrack = forwardRef2((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return (0, import_jsx_runtime141.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: cx("chakra-slider__track", props.className),
      __css: styles2.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
var SliderFilledTrack = forwardRef2(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles2 = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return (0, import_jsx_runtime141.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx("chakra-slider__filled-track", props.className),
        __css: styles2.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
var SliderMark = forwardRef2((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return (0, import_jsx_runtime141.jsx)(
    chakra.div,
    {
      ...markProps,
      className: cx("chakra-slider__marker", props.className),
      __css: styles2.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

// node_modules/@chakra-ui/react/dist/esm/spacer/spacer.mjs
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

// node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs
var import_jsx_runtime144 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs
var import_jsx_runtime143 = __toESM(require_jsx_runtime(), 1);
var import_react128 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/stack/stack-item.mjs
var import_jsx_runtime142 = __toESM(require_jsx_runtime(), 1);
var StackItem = (props) => (0, import_jsx_runtime142.jsx)(
  chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";

// node_modules/@chakra-ui/react/dist/esm/stack/stack.utils.mjs
function getDividerStyles(options) {
  const { spacing: spacing2, direction: direction2 } = options;
  const dividerStyles = {
    column: {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(
      direction2,
      (value) => dividerStyles[value]
    )
  };
}

// node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs
var Stack = forwardRef2((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing: spacing2 = "0.5rem",
    wrap: wrap4,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction2 = isInline ? "row" : directionProp ?? "column";
  const dividerStyle = (0, import_react128.useMemo)(
    () => getDividerStyles({ spacing: spacing2, direction: direction2 }),
    [spacing2, direction2]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0, import_react128.useMemo)(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = (0, import_jsx_runtime143.jsx)(StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0, import_react128.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return (0, import_jsx_runtime143.jsxs)(import_react128.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = cx("chakra-stack", className);
  return (0, import_jsx_runtime143.jsx)(
    chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction2,
      flexWrap: wrap4,
      gap: hasDivider ? void 0 : spacing2,
      className: _className,
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";

// node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs
var HStack = forwardRef2((props, ref) => (0, import_jsx_runtime144.jsx)(Stack, { align: "center", ...props, direction: "row", ref }));
HStack.displayName = "HStack";

// node_modules/@chakra-ui/react/dist/esm/stack/stack-divider.mjs
var import_jsx_runtime145 = __toESM(require_jsx_runtime(), 1);
var StackDivider = (props) => (0, import_jsx_runtime145.jsx)(
  chakra.div,
  {
    className: "chakra-stack__divider",
    ...props,
    __css: {
      ...props["__css"],
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto"
    }
  }
);
StackDivider.displayName = "StackDivider";

// node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs
var import_jsx_runtime146 = __toESM(require_jsx_runtime(), 1);
var VStack = forwardRef2((props, ref) => (0, import_jsx_runtime146.jsx)(Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";

// node_modules/@chakra-ui/react/dist/esm/stat/stat.mjs
var import_jsx_runtime147 = __toESM(require_jsx_runtime(), 1);
var [StatStylesProvider, useStatStyles] = createContext({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
var Stat = forwardRef2(function Stat2(props, ref) {
  const styles2 = useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles2.container
  };
  const { className, children, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime147.jsx)(StatStylesProvider, { value: styles2, children: (0, import_jsx_runtime147.jsx)(
    chakra.div,
    {
      ref,
      ...rest,
      className: cx("chakra-stat", className),
      __css: statStyles,
      children: (0, import_jsx_runtime147.jsx)("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

// node_modules/@chakra-ui/react/dist/esm/stat/stat-arrow.mjs
var import_jsx_runtime148 = __toESM(require_jsx_runtime(), 1);
var StatDownArrow = (props) => (0, import_jsx_runtime148.jsx)(Icon, { color: "red.400", ...props, children: (0, import_jsx_runtime148.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
StatDownArrow.displayName = "StatDownArrow";
function StatUpArrow(props) {
  return (0, import_jsx_runtime148.jsx)(Icon, { color: "green.400", ...props, children: (0, import_jsx_runtime148.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
StatUpArrow.displayName = "StatUpArrow";
function StatArrow(props) {
  const { type, "aria-label": ariaLabel, ...rest } = props;
  const styles2 = useStatStyles();
  const BaseIcon = type === "increase" ? StatUpArrow : StatDownArrow;
  const defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
  const label = ariaLabel || defaultAriaLabel;
  return (0, import_jsx_runtime148.jsxs)(import_jsx_runtime148.Fragment, { children: [
    (0, import_jsx_runtime148.jsx)(chakra.span, { srOnly: true, children: label }),
    (0, import_jsx_runtime148.jsx)(BaseIcon, { "aria-hidden": true, ...rest, __css: styles2.icon })
  ] });
}
StatArrow.displayName = "StatArrow";

// node_modules/@chakra-ui/react/dist/esm/stat/stat-group.mjs
var import_jsx_runtime149 = __toESM(require_jsx_runtime(), 1);
var StatGroup = forwardRef2(
  function StatGroup2(props, ref) {
    return (0, import_jsx_runtime149.jsx)(
      chakra.div,
      {
        ...props,
        ref,
        role: "group",
        className: cx("chakra-stat__group", props.className),
        __css: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start"
        }
      }
    );
  }
);
StatGroup.displayName = "StatGroup";

// node_modules/@chakra-ui/react/dist/esm/stat/stat-help-text.mjs
var import_jsx_runtime150 = __toESM(require_jsx_runtime(), 1);
var StatHelpText = forwardRef2(
  function StatHelpText2(props, ref) {
    const styles2 = useStatStyles();
    return (0, import_jsx_runtime150.jsx)(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__help-text", props.className),
        __css: styles2.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

// node_modules/@chakra-ui/react/dist/esm/stat/stat-label.mjs
var import_jsx_runtime151 = __toESM(require_jsx_runtime(), 1);
var StatLabel = forwardRef2(
  function StatLabel2(props, ref) {
    const styles2 = useStatStyles();
    return (0, import_jsx_runtime151.jsx)(
      chakra.dt,
      {
        ref,
        ...props,
        className: cx("chakra-stat__label", props.className),
        __css: styles2.label
      }
    );
  }
);
StatLabel.displayName = "StatLabel";

// node_modules/@chakra-ui/react/dist/esm/stat/stat-number.mjs
var import_jsx_runtime152 = __toESM(require_jsx_runtime(), 1);
var StatNumber = forwardRef2(
  function StatNumber2(props, ref) {
    const styles2 = useStatStyles();
    return (0, import_jsx_runtime152.jsx)(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__number", props.className),
        __css: {
          ...styles2.number,
          fontFeatureSettings: "pnum",
          fontVariantNumeric: "proportional-nums"
        }
      }
    );
  }
);
StatNumber.displayName = "StatNumber";

// node_modules/@chakra-ui/react/dist/esm/stepper/step.mjs
var import_jsx_runtime153 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/stepper/step-context.mjs
var [StepContextProvider, useStepContext] = createContext(
  { name: "StepContext" }
);
var [StepperStylesProvider, useStepperStyles] = createStylesContext("Stepper");

// node_modules/@chakra-ui/react/dist/esm/stepper/step.mjs
var Step = forwardRef2(function Step2(props, ref) {
  const { orientation, status, showLastSeparator } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime153.jsx)(
    chakra.div,
    {
      ref,
      "data-status": status,
      "data-orientation": orientation,
      "data-stretch": dataAttr(showLastSeparator),
      __css: styles2.step,
      ...props,
      className: cx("chakra-step", props.className)
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/stepper/step-description.mjs
var import_jsx_runtime154 = __toESM(require_jsx_runtime(), 1);
var StepDescription = forwardRef2(
  function StepDescription2(props, ref) {
    const { status } = useStepContext();
    const styles2 = useStepperStyles();
    return (0, import_jsx_runtime154.jsx)(
      chakra.p,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-step__description", props.className),
        __css: styles2.description
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/stepper/step-icon.mjs
var import_jsx_runtime156 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/stepper/icons.mjs
var import_jsx_runtime155 = __toESM(require_jsx_runtime(), 1);
function CheckIcon4(props) {
  return (0, import_jsx_runtime155.jsx)(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      height: "1em",
      width: "1em",
      ...props,
      children: (0, import_jsx_runtime155.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/stepper/step-icon.mjs
function StepIcon(props) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  const icon = status === "complete" ? CheckIcon4 : void 0;
  return (0, import_jsx_runtime156.jsx)(
    Icon,
    {
      as: icon,
      __css: styles2.icon,
      ...props,
      className: cx("chakra-step__icon", props.className)
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/stepper/step-indicator.mjs
var import_jsx_runtime159 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/stepper/step-number.mjs
var import_jsx_runtime157 = __toESM(require_jsx_runtime(), 1);
var StepNumber = forwardRef2(
  function StepNumber2(props, ref) {
    const { children, ...restProps } = props;
    const { status, index } = useStepContext();
    const styles2 = useStepperStyles();
    return (0, import_jsx_runtime157.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        __css: styles2.number,
        ...restProps,
        className: cx("chakra-step__number", props.className),
        children: children || index + 1
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/stepper/step-status.mjs
var import_jsx_runtime158 = __toESM(require_jsx_runtime(), 1);
function StepStatus(props) {
  const { complete, incomplete, active } = props;
  const context = useStepContext();
  let render = null;
  switch (context.status) {
    case "complete":
      render = runIfFn(complete, context);
      break;
    case "incomplete":
      render = runIfFn(incomplete, context);
      break;
    case "active":
      render = runIfFn(active, context);
      break;
  }
  return render ? (0, import_jsx_runtime158.jsx)(import_jsx_runtime158.Fragment, { children: render }) : null;
}

// node_modules/@chakra-ui/react/dist/esm/stepper/step-indicator.mjs
var StepIndicator = forwardRef2(
  function StepIndicator2(props, ref) {
    const { status } = useStepContext();
    const styles2 = useStepperStyles();
    return (0, import_jsx_runtime159.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        __css: styles2.indicator,
        className: cx("chakra-step__indicator", props.className)
      }
    );
  }
);
function StepIndicatorContent() {
  return (0, import_jsx_runtime159.jsx)(
    StepStatus,
    {
      complete: (0, import_jsx_runtime159.jsx)(StepIcon, {}),
      incomplete: (0, import_jsx_runtime159.jsx)(StepNumber, {}),
      active: (0, import_jsx_runtime159.jsx)(StepNumber, {})
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/stepper/step-separator.mjs
var import_jsx_runtime160 = __toESM(require_jsx_runtime(), 1);
var StepSeparator = forwardRef2(
  function StepSeparator2(props, ref) {
    const { orientation, status, isLast, showLastSeparator } = useStepContext();
    const styles2 = useStepperStyles();
    if (isLast && !showLastSeparator)
      return null;
    return (0, import_jsx_runtime160.jsx)(
      chakra.div,
      {
        ref,
        role: "separator",
        "data-orientation": orientation,
        "data-status": status,
        __css: styles2.separator,
        ...props,
        className: cx("chakra-step__separator", props.className)
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/stepper/step-title.mjs
var import_jsx_runtime161 = __toESM(require_jsx_runtime(), 1);
var StepTitle = forwardRef2(function StepTitle2(props, ref) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime161.jsx)(
    chakra.h3,
    {
      ref,
      "data-status": status,
      ...props,
      __css: styles2.title,
      className: cx("chakra-step__title", props.className)
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/stepper/stepper.mjs
var import_jsx_runtime162 = __toESM(require_jsx_runtime(), 1);
var import_react129 = __toESM(require_react(), 1);
var Stepper = forwardRef2(function Stepper2(props, ref) {
  const styles2 = useMultiStyleConfig("Stepper", props);
  const {
    children,
    index,
    orientation = "horizontal",
    showLastSeparator = false,
    ...restProps
  } = omitThemingProps(props);
  const stepElements = import_react129.Children.toArray(children);
  const stepCount = stepElements.length;
  function getStatus(step) {
    if (step < index)
      return "complete";
    if (step > index)
      return "incomplete";
    return "active";
  }
  return (0, import_jsx_runtime162.jsx)(
    chakra.div,
    {
      ref,
      "aria-label": "Progress",
      "data-orientation": orientation,
      ...restProps,
      __css: styles2.stepper,
      className: cx("chakra-stepper", props.className),
      children: (0, import_jsx_runtime162.jsx)(StepperStylesProvider, { value: styles2, children: stepElements.map((child, index2) => (0, import_jsx_runtime162.jsx)(
        StepContextProvider,
        {
          value: {
            index: index2,
            status: getStatus(index2),
            orientation,
            showLastSeparator,
            count: stepCount,
            isFirst: index2 === 0,
            isLast: index2 === stepCount - 1
          },
          children: child
        },
        index2
      )) })
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/stepper/use-steps.mjs
var import_react130 = __toESM(require_react(), 1);
function useSteps(props = {}) {
  const { index = 0, count } = props;
  const [activeStep, setActiveStep] = (0, import_react130.useState)(index);
  const maxStep = typeof count === "number" ? count - 1 : 0;
  const activeStepPercent = activeStep / maxStep;
  return {
    activeStep,
    setActiveStep,
    activeStepPercent: Number.isNaN(activeStepPercent) ? 0 : activeStepPercent,
    isActiveStep(step) {
      return step === activeStep;
    },
    isCompleteStep(step) {
      return step < activeStep;
    },
    isIncompleteStep(step) {
      return step > activeStep;
    },
    getStatus(step) {
      if (step < activeStep)
        return "complete";
      if (step > activeStep)
        return "incomplete";
      return "active";
    },
    goToNext() {
      setActiveStep((step) => {
        return typeof count === "number" ? Math.min(count, step + 1) : step + 1;
      });
    },
    goToPrevious() {
      setActiveStep((step) => Math.max(0, step - 1));
    }
  };
}

// node_modules/@chakra-ui/react/dist/esm/switch/switch.mjs
var import_jsx_runtime163 = __toESM(require_jsx_runtime(), 1);
var import_react131 = __toESM(require_react(), 1);
var Switch = forwardRef2(
  function Switch2(props, ref) {
    const styles2 = useMultiStyleConfig("Switch", props);
    const {
      spacing: spacing2 = "0.5rem",
      children,
      ...ownProps
    } = omitThemingProps(props);
    const {
      getIndicatorProps,
      getInputProps,
      getCheckboxProps,
      getRootProps,
      getLabelProps
    } = useCheckbox(ownProps);
    const containerStyles = (0, import_react131.useMemo)(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...styles2.container
      }),
      [styles2.container]
    );
    const trackStyles = (0, import_react131.useMemo)(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...styles2.track
      }),
      [styles2.track]
    );
    const labelStyles = (0, import_react131.useMemo)(
      () => ({
        userSelect: "none",
        marginStart: spacing2,
        ...styles2.label
      }),
      [spacing2, styles2.label]
    );
    return (0, import_jsx_runtime163.jsxs)(
      chakra.label,
      {
        ...getRootProps(),
        className: cx("chakra-switch", props.className),
        __css: containerStyles,
        children: [
          (0, import_jsx_runtime163.jsx)("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
          (0, import_jsx_runtime163.jsx)(
            chakra.span,
            {
              ...getCheckboxProps(),
              className: "chakra-switch__track",
              __css: trackStyles,
              children: (0, import_jsx_runtime163.jsx)(
                chakra.span,
                {
                  __css: styles2.thumb,
                  className: "chakra-switch__thumb",
                  ...getIndicatorProps()
                }
              )
            }
          ),
          children && (0, import_jsx_runtime163.jsx)(
            chakra.span,
            {
              className: "chakra-switch__label",
              ...getLabelProps(),
              __css: labelStyles,
              children
            }
          )
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

// node_modules/@chakra-ui/react/dist/esm/table/table.mjs
var import_jsx_runtime164 = __toESM(require_jsx_runtime(), 1);
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef2((props, ref) => {
  const styles2 = useMultiStyleConfig("Table", props);
  const { className, layout: layout2, ...tableProps } = omitThemingProps(props);
  return (0, import_jsx_runtime164.jsx)(TableStylesProvider, { value: styles2, children: (0, import_jsx_runtime164.jsx)(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout2, ...styles2.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

// node_modules/@chakra-ui/react/dist/esm/table/table-caption.mjs
var import_jsx_runtime165 = __toESM(require_jsx_runtime(), 1);
var TableCaption = forwardRef2(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime165.jsx)(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles2.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

// node_modules/@chakra-ui/react/dist/esm/table/table-container.mjs
var import_jsx_runtime166 = __toESM(require_jsx_runtime(), 1);
var TableContainer = forwardRef2(
  (props, ref) => {
    const { overflow, overflowX, className, ...rest } = props;
    return (0, import_jsx_runtime166.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: overflow ?? overflowX ?? "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/table/tbody.mjs
var import_jsx_runtime167 = __toESM(require_jsx_runtime(), 1);
var Tbody = forwardRef2((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime167.jsx)(chakra.tbody, { ...props, ref, __css: styles2.tbody });
});

// node_modules/@chakra-ui/react/dist/esm/table/td.mjs
var import_jsx_runtime168 = __toESM(require_jsx_runtime(), 1);
var Td = forwardRef2(
  ({ isNumeric: isNumeric3, ...rest }, ref) => {
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime168.jsx)(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles2.td,
        "data-is-numeric": isNumeric3
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/table/tfooter.mjs
var import_jsx_runtime169 = __toESM(require_jsx_runtime(), 1);
var Tfoot = forwardRef2((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime169.jsx)(chakra.tfoot, { ...props, ref, __css: styles2.tfoot });
});

// node_modules/@chakra-ui/react/dist/esm/table/th.mjs
var import_jsx_runtime170 = __toESM(require_jsx_runtime(), 1);
var Th = forwardRef2(
  ({ isNumeric: isNumeric3, ...rest }, ref) => {
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime170.jsx)(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles2.th,
        "data-is-numeric": isNumeric3
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/table/thead.mjs
var import_jsx_runtime171 = __toESM(require_jsx_runtime(), 1);
var Thead = forwardRef2((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime171.jsx)(chakra.thead, { ...props, ref, __css: styles2.thead });
});

// node_modules/@chakra-ui/react/dist/esm/table/tr.mjs
var import_jsx_runtime172 = __toESM(require_jsx_runtime(), 1);
var Tr = forwardRef2((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime172.jsx)(chakra.tr, { ...props, ref, __css: styles2.tr });
});

// node_modules/@chakra-ui/react/dist/esm/tabs/tab.mjs
var import_jsx_runtime174 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/tabs/tabs.mjs
var import_jsx_runtime173 = __toESM(require_jsx_runtime(), 1);
var import_react133 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/tabs/use-tabs.mjs
var import_react132 = __toESM(require_react(), 1);
var [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = createDescendantContext();
function useTabs(props) {
  const {
    defaultIndex,
    onChange,
    index,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction: direction2 = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = (0, import_react132.useState)(defaultIndex ?? 0);
  const [selectedIndex, setSelectedIndex] = useControllableState({
    defaultValue: defaultIndex ?? 0,
    value: index,
    onChange
  });
  (0, import_react132.useEffect)(() => {
    if (index != null) {
      setFocusedIndex(index);
    }
  }, [index]);
  const descendants = useTabsDescendants();
  const uuid = (0, import_react132.useId)();
  const uid = props.id ?? uuid;
  const id = `tabs-${uid}`;
  return {
    id,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction: direction2,
    htmlProps
  };
}
var [TabsProvider, useTabsContext] = createContext({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function useTabList(props) {
  const { focusedIndex, orientation, direction: direction2 } = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const onKeyDown = (0, import_react132.useCallback)(
    (event) => {
      const nextTab = () => {
        var _a8;
        const next = descendants.nextEnabled(focusedIndex);
        if (next)
          (_a8 = next.node) == null ? void 0 : _a8.focus();
      };
      const prevTab = () => {
        var _a8;
        const prev = descendants.prevEnabled(focusedIndex);
        if (prev)
          (_a8 = prev.node) == null ? void 0 : _a8.focus();
      };
      const firstTab = () => {
        var _a8;
        const first = descendants.firstEnabled();
        if (first)
          (_a8 = first.node) == null ? void 0 : _a8.focus();
      };
      const lastTab = () => {
        var _a8;
        const last = descendants.lastEnabled();
        if (last)
          (_a8 = last.node) == null ? void 0 : _a8.focus();
      };
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
      const eventKey = event.key;
      const ArrowStart = direction2 === "ltr" ? "ArrowLeft" : "ArrowRight";
      const ArrowEnd = direction2 === "ltr" ? "ArrowRight" : "ArrowLeft";
      const keyMap = {
        [ArrowStart]: () => isHorizontal && prevTab(),
        [ArrowEnd]: () => isHorizontal && nextTab(),
        ArrowDown: () => isVertical && nextTab(),
        ArrowUp: () => isVertical && prevTab(),
        Home: firstTab,
        End: lastTab
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, focusedIndex, orientation, direction2]
  );
  return {
    ...props,
    role: "tablist",
    "aria-orientation": orientation,
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useTab(props) {
  const { isDisabled = false, isFocusable: isFocusable2 = false, ...htmlProps } = props;
  const { setSelectedIndex, isManual, id, setFocusedIndex, selectedIndex } = useTabsContext();
  const { index, register } = useTabsDescendant({
    disabled: isDisabled && !isFocusable2
  });
  const isSelected = index === selectedIndex;
  const onClick = () => {
    setSelectedIndex(index);
  };
  const onFocus3 = () => {
    setFocusedIndex(index);
    const isDisabledButFocusable = isDisabled && isFocusable2;
    const shouldSelect = !isManual && !isDisabledButFocusable;
    if (shouldSelect) {
      setSelectedIndex(index);
    }
  };
  const clickableProps = useClickable({
    ...htmlProps,
    ref: mergeRefs(register, props.ref),
    isDisabled,
    isFocusable: isFocusable2,
    onClick: callAllHandlers(props.onClick, onClick)
  });
  const type = "button";
  return {
    ...clickableProps,
    id: makeTabId(id, index),
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    type,
    "aria-selected": isSelected,
    "aria-controls": makeTabPanelId(id, index),
    onFocus: isDisabled ? void 0 : callAllHandlers(props.onFocus, onFocus3)
  };
}
var [TabPanelProvider, useTabPanelContext] = createContext({});
function useTabPanels(props) {
  const context = useTabsContext();
  const { id, selectedIndex } = context;
  const validChildren = getValidChildren(props.children);
  const children = validChildren.map(
    (child, index) => (0, import_react132.createElement)(
      TabPanelProvider,
      {
        key: child.key ?? index,
        value: {
          isSelected: index === selectedIndex,
          id: makeTabPanelId(id, index),
          tabId: makeTabId(id, index),
          selectedIndex
        }
      },
      child
    )
  );
  return { ...props, children };
}
function useTabPanel(props) {
  const { children, ...htmlProps } = props;
  const { isLazy, lazyBehavior } = useTabsContext();
  const { isSelected, id, tabId } = useTabPanelContext();
  const hasBeenSelected = (0, import_react132.useRef)(false);
  if (isSelected) {
    hasBeenSelected.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenSelected.current,
    isSelected,
    enabled: isLazy,
    mode: lazyBehavior
  });
  return {
    // Puts the tabpanel in the page `Tab` sequence.
    tabIndex: 0,
    ...htmlProps,
    children: shouldRenderChildren ? children : null,
    role: "tabpanel",
    "aria-labelledby": tabId,
    hidden: !isSelected,
    id
  };
}
function useTabIndicator() {
  const context = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const { selectedIndex, orientation } = context;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const [rect, setRect] = (0, import_react132.useState)(() => {
    if (isHorizontal)
      return { left: 0, width: 0 };
    if (isVertical)
      return { top: 0, height: 0 };
    return void 0;
  });
  const [hasMeasured, setHasMeasured] = (0, import_react132.useState)(false);
  useSafeLayoutEffect(() => {
    if (selectedIndex == null)
      return;
    const tab = descendants.item(selectedIndex);
    if (tab == null)
      return;
    if (isHorizontal) {
      setRect({ left: tab.node.offsetLeft, width: tab.node.offsetWidth });
    }
    if (isVertical) {
      setRect({ top: tab.node.offsetTop, height: tab.node.offsetHeight });
    }
    const id = requestAnimationFrame(() => {
      setHasMeasured(true);
    });
    return () => {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  }, [selectedIndex, isHorizontal, isVertical, descendants]);
  return {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: hasMeasured ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...rect
  };
}
function makeTabId(id, index) {
  return `${id}--tab-${index}`;
}
function makeTabPanelId(id, index) {
  return `${id}--tabpanel-${index}`;
}

// node_modules/@chakra-ui/react/dist/esm/tabs/tabs.mjs
var [TabsStylesProvider, useTabsStyles] = createContext({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
var Tabs = forwardRef2(function Tabs2(props, ref) {
  const styles2 = useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = (0, import_react133.useMemo)(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  const tabsStyles = {
    position: "relative",
    ...styles2.root
  };
  return (0, import_jsx_runtime173.jsx)(TabsDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime173.jsx)(TabsProvider, { value: context, children: (0, import_jsx_runtime173.jsx)(TabsStylesProvider, { value: styles2, children: (0, import_jsx_runtime173.jsx)(
    chakra.div,
    {
      className: cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: tabsStyles,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

// node_modules/@chakra-ui/react/dist/esm/tabs/tab.mjs
var Tab = forwardRef2(function Tab2(props, ref) {
  const styles2 = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = defineStyle({
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles2.tab
  });
  return (0, import_jsx_runtime174.jsx)(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

// node_modules/@chakra-ui/react/dist/esm/tabs/tab-indicator.mjs
var import_jsx_runtime175 = __toESM(require_jsx_runtime(), 1);
var TabIndicator = forwardRef2(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles2 = useTabsStyles();
    return (0, import_jsx_runtime175.jsx)(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles2.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

// node_modules/@chakra-ui/react/dist/esm/tabs/tab-list.mjs
var import_jsx_runtime176 = __toESM(require_jsx_runtime(), 1);
var TabList = forwardRef2(
  function TabList2(props, ref) {
    const tablistProps = useTabList({ ...props, ref });
    const styles2 = useTabsStyles();
    const tablistStyles = defineStyle({
      display: "flex",
      ...styles2.tablist
    });
    return (0, import_jsx_runtime176.jsx)(
      chakra.div,
      {
        ...tablistProps,
        className: cx("chakra-tabs__tablist", props.className),
        __css: tablistStyles
      }
    );
  }
);
TabList.displayName = "TabList";

// node_modules/@chakra-ui/react/dist/esm/tabs/tab-panel.mjs
var import_jsx_runtime177 = __toESM(require_jsx_runtime(), 1);
var TabPanel = forwardRef2(
  function TabPanel2(props, ref) {
    const panelProps = useTabPanel({ ...props, ref });
    const styles2 = useTabsStyles();
    return (0, import_jsx_runtime177.jsx)(
      chakra.div,
      {
        outline: "0",
        ...panelProps,
        className: cx("chakra-tabs__tab-panel", props.className),
        __css: styles2.tabpanel
      }
    );
  }
);
TabPanel.displayName = "TabPanel";

// node_modules/@chakra-ui/react/dist/esm/tabs/tab-panels.mjs
var import_jsx_runtime178 = __toESM(require_jsx_runtime(), 1);
var TabPanels = forwardRef2(
  function TabPanels2(props, ref) {
    const panelsProps = useTabPanels(props);
    const styles2 = useTabsStyles();
    return (0, import_jsx_runtime178.jsx)(
      chakra.div,
      {
        ...panelsProps,
        width: "100%",
        ref,
        className: cx("chakra-tabs__tab-panels", props.className),
        __css: styles2.tabpanels
      }
    );
  }
);
TabPanels.displayName = "TabPanels";

// node_modules/@chakra-ui/react/dist/esm/tag/tag.mjs
var import_jsx_runtime179 = __toESM(require_jsx_runtime(), 1);
var [TagStylesProvider, useTagStyles] = createContext({
  name: `TagStylesContext`,
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
var Tag = forwardRef2((props, ref) => {
  const styles2 = useMultiStyleConfig("Tag", props);
  const ownProps = omitThemingProps(props);
  const containerStyles = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...styles2.container
  };
  return (0, import_jsx_runtime179.jsx)(TagStylesProvider, { value: styles2, children: (0, import_jsx_runtime179.jsx)(chakra.span, { ref, ...ownProps, __css: containerStyles }) });
});
Tag.displayName = "Tag";
var TagLabel = forwardRef2((props, ref) => {
  const styles2 = useTagStyles();
  return (0, import_jsx_runtime179.jsx)(chakra.span, { ref, noOfLines: 1, ...props, __css: styles2.label });
});
TagLabel.displayName = "TagLabel";
var TagLeftIcon = forwardRef2((props, ref) => (0, import_jsx_runtime179.jsx)(Icon, { ref, verticalAlign: "top", marginEnd: "0.5rem", ...props }));
TagLeftIcon.displayName = "TagLeftIcon";
var TagRightIcon = forwardRef2((props, ref) => (0, import_jsx_runtime179.jsx)(Icon, { ref, verticalAlign: "top", marginStart: "0.5rem", ...props }));
TagRightIcon.displayName = "TagRightIcon";
var TagCloseIcon = (props) => (0, import_jsx_runtime179.jsx)(Icon, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...props, children: (0, import_jsx_runtime179.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
TagCloseIcon.displayName = "TagCloseIcon";
var TagCloseButton = forwardRef2(
  (props, ref) => {
    const { isDisabled, children, ...rest } = props;
    const styles2 = useTagStyles();
    const btnStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles2.closeButton
    };
    return (0, import_jsx_runtime179.jsx)(
      chakra.button,
      {
        ref,
        "aria-label": "close",
        ...rest,
        type: "button",
        disabled: isDisabled,
        __css: btnStyles,
        children: children || (0, import_jsx_runtime179.jsx)(TagCloseIcon, {})
      }
    );
  }
);
TagCloseButton.displayName = "TagCloseButton";

// node_modules/@chakra-ui/react/dist/esm/textarea/textarea.mjs
var import_jsx_runtime180 = __toESM(require_jsx_runtime(), 1);
var omitted = ["h", "minH", "height", "minHeight"];
var Textarea = forwardRef2((props, ref) => {
  const styles2 = useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = omitThemingProps(props);
  const textareaProps = useFormControl(rest);
  const textareaStyles = rows ? omit(styles2, omitted) : styles2;
  return (0, import_jsx_runtime180.jsx)(
    chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

// node_modules/@chakra-ui/react/dist/esm/toast/create-standalone-toast.mjs
var import_jsx_runtime181 = __toESM(require_jsx_runtime(), 1);

// node_modules/@chakra-ui/react/dist/esm/toast/toast.placement.mjs
function getToastPlacement(position2, dir) {
  const computedPosition = position2 ?? "bottom";
  const logicals2 = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  };
  const logical2 = logicals2[computedPosition];
  return (logical2 == null ? void 0 : logical2[dir]) ?? computedPosition;
}

// node_modules/@chakra-ui/react/dist/esm/toast/create-toast-fn.mjs
function createToastFn(dir, defaultOptions3) {
  const normalizeToastOptions = (options) => ({
    ...defaultOptions3,
    ...options,
    position: getToastPlacement(
      (options == null ? void 0 : options.position) ?? (defaultOptions3 == null ? void 0 : defaultOptions3.position),
      dir
    )
  });
  const toast = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };
  toast.update = (id, options) => {
    toastStore.update(id, normalizeToastOptions(options));
  };
  toast.promise = (promise, options) => {
    const id = toast({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast.update(id, {
        status: "success",
        duration: 5e3,
        ...runIfFn(options.success, data)
      })
    ).catch(
      (error) => toast.update(id, {
        status: "error",
        duration: 5e3,
        ...runIfFn(options.error, error)
      })
    );
  };
  toast.closeAll = toastStore.closeAll;
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;
  return toast;
}

// node_modules/@chakra-ui/react/dist/esm/toast/create-standalone-toast.mjs
var defaults = {
  duration: 5e3,
  variant: "solid"
};
var defaultStandaloneParam = {
  theme,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: defaults,
  forced: false
};
function createStandaloneToast({
  theme: theme2 = defaultStandaloneParam.theme,
  colorMode = defaultStandaloneParam.colorMode,
  toggleColorMode = defaultStandaloneParam.toggleColorMode,
  setColorMode = defaultStandaloneParam.setColorMode,
  defaultOptions: defaultOptions3 = defaultStandaloneParam.defaultOptions,
  motionVariants: motionVariants2,
  toastSpacing,
  component,
  forced
} = defaultStandaloneParam) {
  const colorModeContextValue = {
    colorMode,
    setColorMode,
    toggleColorMode,
    forced
  };
  const ToastContainer = () => (0, import_jsx_runtime181.jsx)(ThemeProvider2, { theme: theme2, children: (0, import_jsx_runtime181.jsx)(ColorModeContext.Provider, { value: colorModeContextValue, children: (0, import_jsx_runtime181.jsx)(
    ToastProvider,
    {
      defaultOptions: defaultOptions3,
      motionVariants: motionVariants2,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn(theme2.direction, defaultOptions3)
  };
}

// node_modules/@chakra-ui/react/dist/esm/toast/use-toast.mjs
var import_react134 = __toESM(require_react(), 1);
function useToast(options) {
  const { theme: theme2 } = useChakra();
  const defaultOptions3 = useToastOptionContext();
  return (0, import_react134.useMemo)(
    () => createToastFn(theme2.direction, {
      ...defaultOptions3,
      ...options
    }),
    [options, theme2.direction, defaultOptions3]
  );
}

// node_modules/@chakra-ui/react/dist/esm/tooltip/tooltip.mjs
var import_jsx_runtime182 = __toESM(require_jsx_runtime(), 1);
var import_react136 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/tooltip/tooltip.transition.mjs
var scale = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
};

// node_modules/@chakra-ui/react/dist/esm/tooltip/use-tooltip.mjs
var import_react135 = __toESM(require_react(), 1);
var getDoc = (ref) => {
  var _a8;
  return ((_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) || document;
};
var getWin = (ref) => {
  var _a8, _b3;
  return ((_b3 = (_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) == null ? void 0 : _b3.defaultView) || window;
};
function useTooltip(props = {}) {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    closeOnMouseDown,
    closeOnScroll,
    closeOnPointerDown = closeOnMouseDown,
    closeOnEsc = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id,
    isOpen: isOpenProp,
    defaultIsOpen,
    arrowSize = 10,
    arrowShadowColor,
    arrowPadding,
    modifiers,
    isDisabled,
    gutter,
    offset: offset2,
    direction: direction2,
    ...htmlProps
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset: offset2,
    direction: direction2
  });
  const uuid = (0, import_react135.useId)();
  const uid = id ?? uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = (0, import_react135.useRef)(null);
  const enterTimeout = (0, import_react135.useRef)(void 0);
  const clearEnterTimeout = (0, import_react135.useCallback)(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = (0, import_react135.useRef)(void 0);
  const clearExitTimeout = (0, import_react135.useCallback)(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = (0, import_react135.useCallback)(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = (0, import_react135.useCallback)(() => {
    if (!isDisabled && !enterTimeout.current) {
      if (isOpen)
        dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled, isOpen, onOpen, openDelay]);
  const closeWithDelay = (0, import_react135.useCallback)(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = (0, import_react135.useCallback)(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = (0, import_react135.useCallback)(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = (0, import_react135.useCallback)(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  useEventListener(
    () => {
      if (!closeOnScroll)
        return null;
      const node2 = ref.current;
      if (!node2)
        return null;
      const scrollParent = getScrollParent(node2);
      return scrollParent.localName === "body" ? getWin(ref) : scrollParent;
    },
    "scroll",
    () => {
      if (isOpen && closeOnScroll) {
        closeNow();
      }
    },
    { passive: true, capture: true }
  );
  (0, import_react135.useEffect)(() => {
    if (!isDisabled)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled, isOpen, onClose, clearEnterTimeout]);
  (0, import_react135.useEffect)(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);
  useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = (0, import_react135.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs(ref, _ref2, referenceRef),
        onPointerEnter: callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: callAllHandlers(props2.onClick, onClick),
        onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
        "aria-describedby": isOpen ? tooltipId : void 0
      };
      return triggerProps;
    },
    [
      openWithDelay,
      closeWithDelay,
      onPointerDown,
      isOpen,
      tooltipId,
      onClick,
      referenceRef
    ]
  );
  const getTooltipPositionerProps = (0, import_react135.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = (0, import_react135.useCallback)(
    (props2 = {}, ref2 = null) => {
      const styles2 = {
        ...props2.style,
        position: "relative",
        transformOrigin: cssVars.transformOrigin.varRef
      };
      return {
        ref: ref2,
        ...htmlProps,
        ...props2,
        id: tooltipId,
        role: "tooltip",
        style: styles2
      };
    },
    [htmlProps, tooltipId]
  );
  return {
    isOpen,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getTooltipProps,
    getTooltipPositionerProps,
    getArrowProps,
    getArrowInnerProps
  };
}
var closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
  (0, import_react135.useEffect)(() => {
    const doc = getDoc(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);
  return () => {
    const doc = getDoc(ref);
    const win = getWin(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

// node_modules/@chakra-ui/react/dist/esm/tooltip/tooltip.mjs
var MotionDiv3 = chakra(motion.div);
var Tooltip = forwardRef2((props, ref) => {
  const styles2 = useStyleConfig("Tooltip", props);
  const ownProps = omitThemingProps(props);
  const theme2 = useTheme();
  const {
    children,
    label,
    shouldWrapChildren,
    "aria-label": ariaLabel,
    hasArrow,
    bg,
    portalProps,
    background: background2,
    backgroundColor,
    bgColor,
    motionProps,
    animatePresenceProps,
    ...rest
  } = ownProps;
  const userDefinedBg = background2 ?? backgroundColor ?? bg ?? bgColor;
  if (userDefinedBg) {
    styles2.bg = userDefinedBg;
    const bgVar = getCSSVar(theme2, "colors", userDefinedBg);
    styles2[cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip({ ...rest, direction: theme2.direction });
  const shouldWrap = !(0, import_react136.isValidElement)(children) || shouldWrapChildren;
  let trigger2;
  if (shouldWrap) {
    trigger2 = (0, import_jsx_runtime182.jsx)(
      chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = import_react136.Children.only(children);
    trigger2 = (0, import_react136.cloneElement)(
      child,
      tooltip.getTriggerProps(child.props, getElementRef(child))
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? omit(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = pick(_tooltipProps, ["role", "id"]);
  if (!label) {
    return (0, import_jsx_runtime182.jsx)(import_jsx_runtime182.Fragment, { children });
  }
  return (0, import_jsx_runtime182.jsxs)(import_jsx_runtime182.Fragment, { children: [
    trigger2,
    (0, import_jsx_runtime182.jsx)(AnimatePresence, { ...animatePresenceProps, children: tooltip.isOpen && (0, import_jsx_runtime182.jsx)(Portal, { ...portalProps, children: (0, import_jsx_runtime182.jsx)(
      chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles2.zIndex,
          pointerEvents: "none"
        },
        children: (0, import_jsx_runtime182.jsxs)(
          MotionDiv3,
          {
            variants: scale,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles2,
            children: [
              label,
              hasAriaLabel && (0, import_jsx_runtime182.jsx)(chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && (0, import_jsx_runtime182.jsx)(
                chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: (0, import_jsx_runtime182.jsx)(
                    chakra.div,
                    {
                      "data-popper-arrow-inner": true,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: styles2.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] });
});
Tooltip.displayName = "Tooltip";

// node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs
var import_jsx_runtime183 = __toESM(require_jsx_runtime(), 1);
var Heading = forwardRef2(
  function Heading2(props, ref) {
    const styles2 = useStyleConfig("Heading", props);
    const { className, ...rest } = omitThemingProps(props);
    return (0, import_jsx_runtime183.jsx)(
      chakra.h2,
      {
        ref,
        className: cx("chakra-heading", props.className),
        ...rest,
        __css: styles2
      }
    );
  }
);
Heading.displayName = "Heading";

// node_modules/@chakra-ui/react/dist/esm/typography/text.mjs
var import_jsx_runtime184 = __toESM(require_jsx_runtime(), 1);
var Text = forwardRef2(function Text2(props, ref) {
  const styles2 = useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return (0, import_jsx_runtime184.jsx)(
    chakra.p,
    {
      ref,
      className: cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles2
    }
  );
});
Text.displayName = "Text";

// node_modules/@chakra-ui/react/dist/esm/visually-hidden/visually-hidden.mjs
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

// node_modules/@chakra-ui/react/dist/esm/wrap/wrap.mjs
var import_jsx_runtime185 = __toESM(require_jsx_runtime(), 1);
var import_react137 = __toESM(require_react(), 1);
var Wrap = forwardRef2(function Wrap2(props, ref) {
  const {
    spacing: spacing2 = "0.5rem",
    spacingX,
    spacingY,
    children,
    justify,
    direction: direction2,
    align,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const _children = (0, import_react137.useMemo)(
    () => shouldWrapChildren ? import_react137.Children.map(children, (child, index) => (0, import_jsx_runtime185.jsx)(WrapItem, { children: child }, index)) : children,
    [children, shouldWrapChildren]
  );
  return (0, import_jsx_runtime185.jsx)(chakra.div, { ref, className: cx("chakra-wrap", className), ...rest, children: (0, import_jsx_runtime185.jsx)(
    chakra.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction2,
        listStyleType: "none",
        gap: spacing2,
        columnGap: spacingX,
        rowGap: spacingY,
        padding: "0"
      },
      children: _children
    }
  ) });
});
Wrap.displayName = "Wrap";
var WrapItem = forwardRef2(
  function WrapItem2(props, ref) {
    const { className, ...rest } = props;
    return (0, import_jsx_runtime185.jsx)(
      chakra.li,
      {
        ref,
        __css: { display: "flex", alignItems: "flex-start" },
        className: cx("chakra-wrap__listitem", className),
        ...rest
      }
    );
  }
);
WrapItem.displayName = "WrapItem";

export {
  useCallbackRef,
  useEventListener,
  useAnimationState,
  useBoolean,
  useClipboard,
  useConst,
  useControllableProp,
  useControllableState,
  useCounter,
  useDisclosure,
  useSafeLayoutEffect,
  useUpdateEffect,
  useFocusOnHide,
  useFocusOnShow,
  useFocusOnPointerDown,
  useId2 as useId,
  useIds,
  useOptionalPart,
  useInterval,
  useLatestRef,
  mergeRefs,
  useMergeRefs,
  useOutsideClick,
  usePrevious,
  useSizes,
  useSize,
  useTimeout,
  usePanEvent,
  pseudoSelectors,
  pseudoPropNames,
  tokenToCSSVar,
  background,
  border,
  color,
  flexbox,
  layout,
  filter2 as filter,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition,
  systemProps,
  layoutPropNames,
  propNames,
  isStyleProp,
  getCss,
  css,
  defineStyle,
  defineStyleConfig,
  createMultiStyleConfigHelpers,
  getCSSVar,
  resolveStyleConfig,
  omitThemingProps,
  calc,
  addPrefix,
  toVarReference,
  toVarDefinition,
  cssVar,
  defineCssVars,
  flattenTokens,
  toCSSVar,
  requiredChakraThemeKeys,
  isChakraTheme,
  theme,
  baseTheme,
  ColorModeContext,
  useColorMode,
  useColorModeValue,
  createLocalStorageManager,
  localStorageManager,
  createCookieStorageManager,
  cookieStorageManager,
  cookieStorageManagerSSR,
  ColorModeProvider,
  DarkMode,
  LightMode,
  CSSPolyfill,
  CSSReset,
  ThemeProvider2 as ThemeProvider,
  CSSVars,
  StylesProvider,
  useStyles,
  createStylesContext,
  GlobalStyle,
  usePortalManager,
  PortalManager,
  useEnvironment,
  EnvironmentProvider,
  shouldForwardProp,
  toCSSObject,
  styled,
  chakra,
  forwardRef2 as forwardRef,
  useTheme,
  useChakra,
  useToken,
  getToken,
  useStyleConfig,
  useMultiStyleConfig,
  Icon,
  Spinner,
  useAlertContext,
  useAlertStyles,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Toast,
  createRenderToast,
  toastStore,
  Portal,
  ToastOptionProvider,
  ToastProvider,
  ChakraBaseProvider,
  ChakraProvider,
  createDescendantContext,
  useAccordionStyles,
  useAccordion,
  AccordionProvider,
  useAccordionContext,
  useAccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  TRANSITION_EASINGS,
  getSlideTransition,
  withDelay,
  Collapse,
  AccordionPanel,
  useAccordionItemState,
  AspectRatio,
  useAvatarStyles,
  GenericAvatarIcon,
  useImage,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Square,
  Circle,
  useBreadcrumbStyles,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbItem,
  useButtonGroup,
  ButtonSpinner,
  Button,
  ButtonGroup,
  IconButton,
  useCardStyles,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  AbsoluteCenter,
  CheckboxIcon,
  useFormControlStyles,
  useFormControlContext,
  FormControl,
  FormHelperText,
  useFormControl,
  useFormControlProps,
  visuallyHiddenStyle,
  useCheckbox,
  Checkbox,
  useCheckboxGroup,
  CheckboxGroup,
  Code,
  getScriptSrc,
  ColorModeScript,
  Container2 as Container,
  ControlBox,
  Divider,
  useEditableStyles,
  useEditableContext,
  useEditable,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useEditableControls,
  useEditableState,
  createExtendTheme,
  extendTheme,
  extendBaseTheme,
  mergeThemeOverride,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  withDefaultProps,
  Flex,
  FocusLock2 as FocusLock,
  useFormErrorStyles,
  FormErrorMessage,
  FormErrorIcon,
  FormLabel,
  RequiredIndicator,
  Grid,
  GridItem,
  SimpleGrid,
  Mark,
  useHighlight,
  Highlight,
  createIcon,
  Image2 as Image,
  Img,
  Indicator,
  Input,
  useInputGroupStyles,
  InputGroup,
  InputAddon,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Link,
  LinkOverlay,
  LinkBox,
  useListStyles,
  List,
  OrderedList,
  UnorderedList,
  ListItem,
  ListIcon,
  useQuery,
  useMediaQuery,
  Hide,
  usePrefersReducedMotion,
  useColorModePreference,
  Show,
  useBreakpoint,
  useBreakpointValue,
  cssVars,
  usePopper,
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant,
  MenuProvider,
  useMenuContext,
  useMenu,
  useMenuButton,
  useMenuList,
  useMenuPositioner,
  useMenuItem,
  useMenuOption,
  useMenuOptionGroup,
  useMenuState,
  useMenuStyles,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useModalManager,
  useModal,
  useModalStyles,
  ModalContextProvider,
  useModalContext,
  Modal,
  ModalFocusScope,
  slideFadeConfig,
  SlideFade,
  scaleFadeConfig,
  ScaleFade,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  fadeConfig,
  Fade,
  ModalOverlay,
  AlertDialog,
  AlertDialogContent,
  useDrawerContext,
  Drawer,
  Slide,
  DrawerContent,
  useNumberInput,
  useNumberInputStyles,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  PinInputDescendantsProvider,
  PinInputProvider,
  usePinInputContext,
  usePinInput,
  usePinInputField,
  PinInput,
  PinInputField,
  usePopoverContext,
  usePopoverStyles,
  usePopover,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  CircularProgress,
  useProgressStyles,
  Progress,
  ProgressLabel,
  CircularProgressLabel,
  useRadioGroup,
  useRadioGroupContext,
  RadioGroup,
  useRadio,
  Radio,
  SelectField,
  Select,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  SkipNavLink,
  SkipNavContent,
  useRangeSlider,
  RangeSliderProvider,
  useRangeSliderContext,
  useRangeSliderStyles,
  RangeSlider,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderMark,
  useSlider,
  SliderProvider,
  useSliderContext,
  useSliderStyles,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  SliderMark,
  Spacer,
  Stack,
  HStack,
  StackDivider,
  VStack,
  useStatStyles,
  Stat,
  StatDownArrow,
  StatUpArrow,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useStepContext,
  useStepperStyles,
  Step,
  StepDescription,
  StepIcon,
  StepNumber,
  StepStatus,
  StepIndicator,
  StepIndicatorContent,
  StepSeparator,
  StepTitle,
  Stepper,
  useSteps,
  Switch,
  useTableStyles,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant,
  useTabs,
  TabsProvider,
  useTabsContext,
  useTabList,
  useTab,
  useTabPanels,
  useTabPanel,
  useTabIndicator,
  useTabsStyles,
  Tabs,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  useTagStyles,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Textarea,
  getToastPlacement,
  createToastFn,
  createStandaloneToast,
  useToast,
  useTooltip,
  Tooltip,
  Heading,
  Text,
  VisuallyHidden,
  VisuallyHiddenInput,
  Wrap,
  WrapItem
};
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=chunk-7BCOIJER.js.map
