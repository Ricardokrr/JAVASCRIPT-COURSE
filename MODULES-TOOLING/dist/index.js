
parcelRequire = (function (modules, cache, entry, globalName) {

    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {

          var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  

          if (previousRequire) {
            return previousRequire(name, true);
          }
  

          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error('Cannot find module \'' + name + '\'');
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = cache[name] = new newRequire.Module(name);
  
        modules[name][0].call(module.exports, localRequire, module, module.exports, this);
      }
  
      return cache[name].exports;
  
      function localRequire(x){
        return newRequire(localRequire.resolve(x));
      }
  
      function resolve(x){
        return modules[name][1][x] || x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [function (require, module) {
        module.exports = exports;
      }, {}];
    };
  
    var error;
    for (var i = 0; i < entry.length; i++) {
      try {
        newRequire(entry[i]);
      } catch (e) {
        if (!error) {
          error = e;
        }
      }
    }
  
    if (entry.length) {

      var mainExports = newRequire(entry[entry.length - 1]);
  

      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = mainExports;
  
     
      } else if (typeof define === "function" && define.amd) {
       define(function () {
         return mainExports;
       });
  
      
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  
    
    parcelRequire = newRequire;
  
    if (error) {
      throw error;
    }
  
    return newRequire;
  })({"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
  var bundleURL = null;
  
  function getBundleURLCached() {
    if (!bundleURL) {
      bundleURL = getBundleURL();
    }
  
    return bundleURL;
  }
  
  function getBundleURL() {
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
  
      if (matches) {
        return getBaseURL(matches[0]);
      }
    }
  
    return '/';
  }
  
  function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
  }
  
  exports.getBundleURL = getBundleURLCached;
  exports.getBaseURL = getBaseURL;
  },{}],"node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
  var bundle = require('./bundle-url');
  
  function updateLink(link) {
    var newLink = link.cloneNode();
  
    newLink.onload = function () {
      link.remove();
    };
  
    newLink.href = link.href.split('?')[0] + '?' + Date.now();
    link.parentNode.insertBefore(newLink, link.nextSibling);
  }
  
  var cssTimeout = null;
  
  function reloadCSS() {
    if (cssTimeout) {
      return;
    }
  
    cssTimeout = setTimeout(function () {
      var links = document.querySelectorAll('link[rel="stylesheet"]');
  
      for (var i = 0; i < links.length; i++) {
        if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
          updateLink(links[i]);
        }
      }
  
      cssTimeout = null;
    }, 50);
  }
  
  module.exports = reloadCSS;
  },{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
  var global = arguments[3];
  var OVERLAY_ID = '__parcel__error__overlay__';
  var OldModule = module.bundle.Module;
  
  function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
      data: module.bundle.hotData,
      _acceptCallbacks: [],
      _disposeCallbacks: [],
      accept: function (fn) {
        this._acceptCallbacks.push(fn || function () {});
      },
      dispose: function (fn) {
        this._disposeCallbacks.push(fn);
      }
    };
    module.bundle.hotData = null;
  }
  
  module.bundle.Module = Module;
  var checkedAssets, assetsToAccept;
  var parent = module.bundle.parent;
  
  if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = "" || location.hostname;
    var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + ':' + "49820" + '/');
  
    ws.onmessage = function (event) {
      checkedAssets = {};
      assetsToAccept = [];
      var data = JSON.parse(event.data);
  
      if (data.type === 'update') {
        var handled = false;
        data.assets.forEach(function (asset) {
          if (!asset.isNew) {
            var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
  
            if (didAccept) {
              handled = true;
            }
          }
        }); 
  
        handled = handled || data.assets.every(function (asset) {
          return asset.type === 'css' && asset.generated.js;
        });
  
        if (handled) {
          console.clear();
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });
          assetsToAccept.forEach(function (v) {
            hmrAcceptRun(v[0], v[1]);
          });
        } else if (location.reload) {
          location.reload();
        }
      }
  
      if (data.type === 'reload') {
        ws.close();
  
        ws.onclose = function () {
          location.reload();
        };
      }
  
      if (data.type === 'error-resolved') {
        console.log('[parcel] ✨ Error resolved');
        removeErrorOverlay();
      }
  
      if (data.type === 'error') {
        console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
        removeErrorOverlay();
        var overlay = createErrorOverlay(data);
        document.body.appendChild(overlay);
      }
    };
  }
  
  function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
  
    if (overlay) {
      overlay.remove();
    }
  }
  
  function createErrorOverlay(data) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID; 
  
    var message = document.createElement('div');
    var stackTrace = document.createElement('pre');
    message.innerText = data.error.message;
    stackTrace.innerText = data.error.stack;
    overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
    return overlay;
  }
  
  function getParents(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return [];
    }
  
    var parents = [];
    var k, d, dep;
  
    for (k in modules) {
      for (d in modules[k][1]) {
        dep = modules[k][1][d];
  
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
          parents.push(k);
        }
      }
    }
  
    if (bundle.parent) {
      parents = parents.concat(getParents(bundle.parent, id));
    }
  
    return parents;
  }
  
  function hmrApply(bundle, asset) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (modules[asset.id] || !bundle.parent) {
      var fn = new Function('require', 'module', 'exports', asset.generated.js);
      asset.isNew = !modules[asset.id];
      modules[asset.id] = [fn, asset.deps];
    } else if (bundle.parent) {
      hmrApply(bundle.parent, asset);
    }
  }
  
  function hmrAcceptCheck(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (!modules[id] && bundle.parent) {
      return hmrAcceptCheck(bundle.parent, id);
    }
  
    if (checkedAssets[id]) {
      return;
    }
  
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([bundle, id]);
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      return true;
    }
  
    return getParents(global.parcelRequire, id).some(function (id) {
      return hmrAcceptCheck(global.parcelRequire, id);
    });
  }
  
  function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
  
    if (cached) {
      cached.hot.data = bundle.hotData;
    }
  
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
      cached.hot._disposeCallbacks.forEach(function (cb) {
        cb(bundle.hotData);
      });
    }
  
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      cached.hot._acceptCallbacks.forEach(function (cb) {
        cb();
      });
  
      return true;
    }
  }
  },{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js"], null)
