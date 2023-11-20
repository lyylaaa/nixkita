"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/into-stream";
exports.ids = ["vendor-chunks/into-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/into-stream/index.js":
/*!*******************************************!*\
  !*** ./node_modules/into-stream/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst from = __webpack_require__(/*! from2 */ \"(ssr)/./node_modules/from2/index.js\");\nconst pIsPromise = __webpack_require__(/*! p-is-promise */ \"(ssr)/./node_modules/p-is-promise/index.js\");\nconst intoStream = (input)=>{\n    if (Array.isArray(input)) {\n        input = input.slice();\n    }\n    let promise;\n    let iterator;\n    let asyncIterator;\n    prepare(input);\n    function prepare(value) {\n        input = value;\n        if (input instanceof ArrayBuffer || ArrayBuffer.isView(input) && !Buffer.isBuffer(input)) {\n            input = Buffer.from(input);\n        }\n        promise = pIsPromise(input) ? input : null;\n        // We don't iterate on strings and buffers since slicing them is ~7x faster\n        const shouldIterate = !promise && input[Symbol.iterator] && typeof input !== \"string\" && !Buffer.isBuffer(input);\n        iterator = shouldIterate ? input[Symbol.iterator]() : null;\n        const shouldAsyncIterate = !promise && input[Symbol.asyncIterator];\n        asyncIterator = shouldAsyncIterate ? input[Symbol.asyncIterator]() : null;\n    }\n    return from(function reader(size, callback) {\n        if (promise) {\n            (async ()=>{\n                try {\n                    await prepare(await promise);\n                    reader.call(this, size, callback);\n                } catch (error) {\n                    callback(error);\n                }\n            })();\n            return;\n        }\n        if (iterator) {\n            const object = iterator.next();\n            setImmediate(callback, null, object.done ? null : object.value);\n            return;\n        }\n        if (asyncIterator) {\n            (async ()=>{\n                try {\n                    const object = await asyncIterator.next();\n                    setImmediate(callback, null, object.done ? null : object.value);\n                } catch (error) {\n                    setImmediate(callback, error);\n                }\n            })();\n            return;\n        }\n        if (input.length === 0) {\n            setImmediate(callback, null, null);\n            return;\n        }\n        const chunk = input.slice(0, size);\n        input = input.slice(size);\n        setImmediate(callback, null, chunk);\n    });\n};\nmodule.exports = intoStream;\nmodule.exports.object = (input)=>{\n    if (Array.isArray(input)) {\n        input = input.slice();\n    }\n    let promise;\n    let iterator;\n    let asyncIterator;\n    prepare(input);\n    function prepare(value) {\n        input = value;\n        promise = pIsPromise(input) ? input : null;\n        iterator = !promise && input[Symbol.iterator] ? input[Symbol.iterator]() : null;\n        asyncIterator = !promise && input[Symbol.asyncIterator] ? input[Symbol.asyncIterator]() : null;\n    }\n    return from.obj(function reader(size, callback) {\n        if (promise) {\n            (async ()=>{\n                try {\n                    await prepare(await promise);\n                    reader.call(this, size, callback);\n                } catch (error) {\n                    callback(error);\n                }\n            })();\n            return;\n        }\n        if (iterator) {\n            const object = iterator.next();\n            setImmediate(callback, null, object.done ? null : object.value);\n            return;\n        }\n        if (asyncIterator) {\n            (async ()=>{\n                try {\n                    const object = await asyncIterator.next();\n                    setImmediate(callback, null, object.done ? null : object.value);\n                } catch (error) {\n                    setImmediate(callback, error);\n                }\n            })();\n            return;\n        }\n        this.push(input);\n        setImmediate(callback, null, null);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50by1zdHJlYW0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxPQUFPQyxtQkFBT0EsQ0FBQztBQUNyQixNQUFNQyxhQUFhRCxtQkFBT0EsQ0FBQztBQUUzQixNQUFNRSxhQUFhQyxDQUFBQTtJQUNsQixJQUFJQyxNQUFNQyxPQUFPLENBQUNGLFFBQVE7UUFDekJBLFFBQVFBLE1BQU1HLEtBQUs7SUFDcEI7SUFFQSxJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFFSkMsUUFBUVA7SUFFUixTQUFTTyxRQUFRQyxLQUFLO1FBQ3JCUixRQUFRUTtRQUVSLElBQ0NSLGlCQUFpQlMsZUFDaEJBLFlBQVlDLE1BQU0sQ0FBQ1YsVUFBVSxDQUFDVyxPQUFPQyxRQUFRLENBQUNaLFFBQzlDO1lBQ0RBLFFBQVFXLE9BQU9mLElBQUksQ0FBQ0k7UUFDckI7UUFFQUksVUFBVU4sV0FBV0UsU0FBU0EsUUFBUTtRQUV0QywyRUFBMkU7UUFDM0UsTUFBTWEsZ0JBQWdCLENBQUNULFdBQVdKLEtBQUssQ0FBQ2MsT0FBT1QsUUFBUSxDQUFDLElBQUksT0FBT0wsVUFBVSxZQUFZLENBQUNXLE9BQU9DLFFBQVEsQ0FBQ1o7UUFDMUdLLFdBQVdRLGdCQUFnQmIsS0FBSyxDQUFDYyxPQUFPVCxRQUFRLENBQUMsS0FBSztRQUV0RCxNQUFNVSxxQkFBcUIsQ0FBQ1gsV0FBV0osS0FBSyxDQUFDYyxPQUFPUixhQUFhLENBQUM7UUFDbEVBLGdCQUFnQlMscUJBQXFCZixLQUFLLENBQUNjLE9BQU9SLGFBQWEsQ0FBQyxLQUFLO0lBQ3RFO0lBRUEsT0FBT1YsS0FBSyxTQUFTb0IsT0FBT0MsSUFBSSxFQUFFQyxRQUFRO1FBQ3pDLElBQUlkLFNBQVM7WUFDWDtnQkFDQSxJQUFJO29CQUNILE1BQU1HLFFBQVEsTUFBTUg7b0JBQ3BCWSxPQUFPRyxJQUFJLENBQUMsSUFBSSxFQUFFRixNQUFNQztnQkFDekIsRUFBRSxPQUFPRSxPQUFPO29CQUNmRixTQUFTRTtnQkFDVjtZQUNEO1lBRUE7UUFDRDtRQUVBLElBQUlmLFVBQVU7WUFDYixNQUFNZ0IsU0FBU2hCLFNBQVNpQixJQUFJO1lBQzVCQyxhQUFhTCxVQUFVLE1BQU1HLE9BQU9HLElBQUksR0FBRyxPQUFPSCxPQUFPYixLQUFLO1lBQzlEO1FBQ0Q7UUFFQSxJQUFJRixlQUFlO1lBQ2pCO2dCQUNBLElBQUk7b0JBQ0gsTUFBTWUsU0FBUyxNQUFNZixjQUFjZ0IsSUFBSTtvQkFDdkNDLGFBQWFMLFVBQVUsTUFBTUcsT0FBT0csSUFBSSxHQUFHLE9BQU9ILE9BQU9iLEtBQUs7Z0JBQy9ELEVBQUUsT0FBT1ksT0FBTztvQkFDZkcsYUFBYUwsVUFBVUU7Z0JBQ3hCO1lBQ0Q7WUFFQTtRQUNEO1FBRUEsSUFBSXBCLE1BQU15QixNQUFNLEtBQUssR0FBRztZQUN2QkYsYUFBYUwsVUFBVSxNQUFNO1lBQzdCO1FBQ0Q7UUFFQSxNQUFNUSxRQUFRMUIsTUFBTUcsS0FBSyxDQUFDLEdBQUdjO1FBQzdCakIsUUFBUUEsTUFBTUcsS0FBSyxDQUFDYztRQUVwQk0sYUFBYUwsVUFBVSxNQUFNUTtJQUM5QjtBQUNEO0FBRUFDLE9BQU9DLE9BQU8sR0FBRzdCO0FBRWpCNEIscUJBQXFCLEdBQUczQixDQUFBQTtJQUN2QixJQUFJQyxNQUFNQyxPQUFPLENBQUNGLFFBQVE7UUFDekJBLFFBQVFBLE1BQU1HLEtBQUs7SUFDcEI7SUFFQSxJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFFSkMsUUFBUVA7SUFFUixTQUFTTyxRQUFRQyxLQUFLO1FBQ3JCUixRQUFRUTtRQUNSSixVQUFVTixXQUFXRSxTQUFTQSxRQUFRO1FBQ3RDSyxXQUFXLENBQUNELFdBQVdKLEtBQUssQ0FBQ2MsT0FBT1QsUUFBUSxDQUFDLEdBQUdMLEtBQUssQ0FBQ2MsT0FBT1QsUUFBUSxDQUFDLEtBQUs7UUFDM0VDLGdCQUFnQixDQUFDRixXQUFXSixLQUFLLENBQUNjLE9BQU9SLGFBQWEsQ0FBQyxHQUFHTixLQUFLLENBQUNjLE9BQU9SLGFBQWEsQ0FBQyxLQUFLO0lBQzNGO0lBRUEsT0FBT1YsS0FBS2lDLEdBQUcsQ0FBQyxTQUFTYixPQUFPQyxJQUFJLEVBQUVDLFFBQVE7UUFDN0MsSUFBSWQsU0FBUztZQUNYO2dCQUNBLElBQUk7b0JBQ0gsTUFBTUcsUUFBUSxNQUFNSDtvQkFDcEJZLE9BQU9HLElBQUksQ0FBQyxJQUFJLEVBQUVGLE1BQU1DO2dCQUN6QixFQUFFLE9BQU9FLE9BQU87b0JBQ2ZGLFNBQVNFO2dCQUNWO1lBQ0Q7WUFFQTtRQUNEO1FBRUEsSUFBSWYsVUFBVTtZQUNiLE1BQU1nQixTQUFTaEIsU0FBU2lCLElBQUk7WUFDNUJDLGFBQWFMLFVBQVUsTUFBTUcsT0FBT0csSUFBSSxHQUFHLE9BQU9ILE9BQU9iLEtBQUs7WUFDOUQ7UUFDRDtRQUVBLElBQUlGLGVBQWU7WUFDakI7Z0JBQ0EsSUFBSTtvQkFDSCxNQUFNZSxTQUFTLE1BQU1mLGNBQWNnQixJQUFJO29CQUN2Q0MsYUFBYUwsVUFBVSxNQUFNRyxPQUFPRyxJQUFJLEdBQUcsT0FBT0gsT0FBT2IsS0FBSztnQkFDL0QsRUFBRSxPQUFPWSxPQUFPO29CQUNmRyxhQUFhTCxVQUFVRTtnQkFDeEI7WUFDRDtZQUVBO1FBQ0Q7UUFFQSxJQUFJLENBQUNVLElBQUksQ0FBQzlCO1FBRVZ1QixhQUFhTCxVQUFVLE1BQU07SUFDOUI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25peGtpdGEvLi9ub2RlX21vZHVsZXMvaW50by1zdHJlYW0vaW5kZXguanM/YWFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBmcm9tID0gcmVxdWlyZSgnZnJvbTInKTtcbmNvbnN0IHBJc1Byb21pc2UgPSByZXF1aXJlKCdwLWlzLXByb21pc2UnKTtcblxuY29uc3QgaW50b1N0cmVhbSA9IGlucHV0ID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgpO1xuXHR9XG5cblx0bGV0IHByb21pc2U7XG5cdGxldCBpdGVyYXRvcjtcblx0bGV0IGFzeW5jSXRlcmF0b3I7XG5cblx0cHJlcGFyZShpbnB1dCk7XG5cblx0ZnVuY3Rpb24gcHJlcGFyZSh2YWx1ZSkge1xuXHRcdGlucHV0ID0gdmFsdWU7XG5cblx0XHRpZiAoXG5cdFx0XHRpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8XG5cdFx0XHQoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSAmJiAhQnVmZmVyLmlzQnVmZmVyKGlucHV0KSlcblx0XHQpIHtcblx0XHRcdGlucHV0ID0gQnVmZmVyLmZyb20oaW5wdXQpO1xuXHRcdH1cblxuXHRcdHByb21pc2UgPSBwSXNQcm9taXNlKGlucHV0KSA/IGlucHV0IDogbnVsbDtcblxuXHRcdC8vIFdlIGRvbid0IGl0ZXJhdGUgb24gc3RyaW5ncyBhbmQgYnVmZmVycyBzaW5jZSBzbGljaW5nIHRoZW0gaXMgfjd4IGZhc3RlclxuXHRcdGNvbnN0IHNob3VsZEl0ZXJhdGUgPSAhcHJvbWlzZSAmJiBpbnB1dFtTeW1ib2wuaXRlcmF0b3JdICYmIHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0J1ZmZlcihpbnB1dCk7XG5cdFx0aXRlcmF0b3IgPSBzaG91bGRJdGVyYXRlID8gaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSgpIDogbnVsbDtcblxuXHRcdGNvbnN0IHNob3VsZEFzeW5jSXRlcmF0ZSA9ICFwcm9taXNlICYmIGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcblx0XHRhc3luY0l0ZXJhdG9yID0gc2hvdWxkQXN5bmNJdGVyYXRlID8gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgOiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGZyb20oZnVuY3Rpb24gcmVhZGVyKHNpemUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgcHJlcGFyZShhd2FpdCBwcm9taXNlKTtcblx0XHRcdFx0XHRyZWFkZXIuY2FsbCh0aGlzLCBzaXplLCBjYWxsYmFjayk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGl0ZXJhdG9yKSB7XG5cdFx0XHRjb25zdCBvYmplY3QgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIG9iamVjdC5kb25lID8gbnVsbCA6IG9iamVjdC52YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jSXRlcmF0b3IpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gYXdhaXQgYXN5bmNJdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBvYmplY3QuZG9uZSA/IG51bGwgOiBvYmplY3QudmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBudWxsKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjaHVuayA9IGlucHV0LnNsaWNlKDAsIHNpemUpO1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2Uoc2l6ZSk7XG5cblx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIGNodW5rKTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludG9TdHJlYW07XG5cbm1vZHVsZS5leHBvcnRzLm9iamVjdCA9IGlucHV0ID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgpO1xuXHR9XG5cblx0bGV0IHByb21pc2U7XG5cdGxldCBpdGVyYXRvcjtcblx0bGV0IGFzeW5jSXRlcmF0b3I7XG5cblx0cHJlcGFyZShpbnB1dCk7XG5cblx0ZnVuY3Rpb24gcHJlcGFyZSh2YWx1ZSkge1xuXHRcdGlucHV0ID0gdmFsdWU7XG5cdFx0cHJvbWlzZSA9IHBJc1Byb21pc2UoaW5wdXQpID8gaW5wdXQgOiBudWxsO1xuXHRcdGl0ZXJhdG9yID0gIXByb21pc2UgJiYgaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSA/IGlucHV0W1N5bWJvbC5pdGVyYXRvcl0oKSA6IG51bGw7XG5cdFx0YXN5bmNJdGVyYXRvciA9ICFwcm9taXNlICYmIGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA/IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogbnVsbDtcblx0fVxuXG5cdHJldHVybiBmcm9tLm9iaihmdW5jdGlvbiByZWFkZXIoc2l6ZSwgY2FsbGJhY2spIHtcblx0XHRpZiAocHJvbWlzZSkge1xuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCBwcmVwYXJlKGF3YWl0IHByb21pc2UpO1xuXHRcdFx0XHRcdHJlYWRlci5jYWxsKHRoaXMsIHNpemUsIGNhbGxiYWNrKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoaXRlcmF0b3IpIHtcblx0XHRcdGNvbnN0IG9iamVjdCA9IGl0ZXJhdG9yLm5leHQoKTtcblx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgbnVsbCwgb2JqZWN0LmRvbmUgPyBudWxsIDogb2JqZWN0LnZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoYXN5bmNJdGVyYXRvcikge1xuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3QgPSBhd2FpdCBhc3luY0l0ZXJhdG9yLm5leHQoKTtcblx0XHRcdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIG9iamVjdC5kb25lID8gbnVsbCA6IG9iamVjdC52YWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnB1c2goaW5wdXQpO1xuXG5cdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBudWxsKTtcblx0fSk7XG59O1xuIl0sIm5hbWVzIjpbImZyb20iLCJyZXF1aXJlIiwicElzUHJvbWlzZSIsImludG9TdHJlYW0iLCJpbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwicHJvbWlzZSIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInByZXBhcmUiLCJ2YWx1ZSIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJzaG91bGRJdGVyYXRlIiwiU3ltYm9sIiwic2hvdWxkQXN5bmNJdGVyYXRlIiwicmVhZGVyIiwic2l6ZSIsImNhbGxiYWNrIiwiY2FsbCIsImVycm9yIiwib2JqZWN0IiwibmV4dCIsInNldEltbWVkaWF0ZSIsImRvbmUiLCJsZW5ndGgiLCJjaHVuayIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmoiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/into-stream/index.js\n");

/***/ })

};
;