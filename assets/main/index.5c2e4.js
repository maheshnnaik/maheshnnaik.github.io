window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!"
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Video: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc15c8vEmZL16GlE8fAuCAp", "Video");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    var Video = function(_super) {
      __extends(Video, _super);
      function Video() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.enterScreen = null;
        _this.tapToContinue = null;
        _this.Games = null;
        _this.videoPlayer = null;
        _this.video = null;
        _this.overlayButton = null;
        _this.videoPlayerPrefab = null;
        _this.backBtn = null;
        return _this;
      }
      Video.prototype.onLoad = function() {
        this.ShowTapToContinue();
      };
      Video.prototype.start = function() {};
      Video.prototype.ShowTapToContinue = function() {
        var _this = this;
        cc.tween(this.tapToContinue).delay(2).call(function() {
          var self = _this;
          _this.tapToContinue.active = true;
          cc.tween(_this.tapToContinue).to(.5, {
            opacity: 255
          }).start();
          _this.overlayButton.interactable = true;
          _this.instantiateVideo();
          _this.videoPlayer.active = true;
          _this.Games.active = false;
        }).start();
      };
      Video.prototype.onStartButtonClick = function() {
        var _this = this;
        this.enterScreen.active = false;
        this.tapToContinue.opacity = 0;
        this.overlayButton.interactable = false;
        this.instantiateVideo();
        this.videoPlayer.active = true;
        this.video.node.on("completed", function() {
          _this.video.stop();
          _this.video.node.parent = null;
          _this.video.node.destroy();
          _this.Games.active = true;
          _this.backBtn.active = true;
        }, this);
        this.video.play();
      };
      Video.prototype.instantiateVideo = function() {
        if (!cc.isValid(this.videoPlayer)) {
          this.videoPlayer = cc.instantiate(this.videoPlayerPrefab);
          this.video = this.videoPlayer.getComponent(cc.VideoPlayer);
          this.videoPlayer.parent = cc.find("Canvas");
        }
      };
      Video.prototype.onBackButtonClick = function() {
        this.backBtn.active = false;
        this.Games.active = false;
        this.enterScreen.active = true;
        this.ShowTapToContinue();
      };
      __decorate([ property(cc.Node) ], Video.prototype, "enterScreen", void 0);
      __decorate([ property(cc.Node) ], Video.prototype, "tapToContinue", void 0);
      __decorate([ property(cc.Node) ], Video.prototype, "Games", void 0);
      __decorate([ property(cc.Node) ], Video.prototype, "videoPlayer", void 0);
      __decorate([ property(cc.VideoPlayer) ], Video.prototype, "video", void 0);
      __decorate([ property(cc.Button) ], Video.prototype, "overlayButton", void 0);
      __decorate([ property(cc.Prefab) ], Video.prototype, "videoPlayerPrefab", void 0);
      __decorate([ property(cc.Node) ], Video.prototype, "backBtn", void 0);
      Video = __decorate([ ccclass ], Video);
      return Video;
    }(cc.Component);
    exports.default = Video;
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld", "Video" ]);
//# sourceMappingURL=index.js.map
