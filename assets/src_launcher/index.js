System.register("chunks:///_virtual/Alert.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AssetMeta.ts', './ByRichText.ts', './ResConst.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, assetManager, error, instantiate, director, Component, AssetMeta, ByRichText, ResConst;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      assetManager = module.assetManager;
      error = module.error;
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      AssetMeta = module.AssetMeta;
    }, function (module) {
      ByRichText = module.default;
    }, function (module) {
      ResConst = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;

      cclegacy._RF.push({}, "d1a2f44nU1JErD7lGgLlxVY", "Alert", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; //被踢的错误码，同步KickReason.ts

      var KICK_REASON = exports('KICK_REASON', ["无效值", //KICK_REASON_UNSPECIFIED
      "账号重复登录", //REPEATED_LOGIN
      "关闭服务器", //CLOSE_SERVER
      "重连超时", //RECONNECT_TIMEOUT
      "重连验证失败", //RECONNECT_AUTH_ERROR
      "登录信息丢失", //AUTH_LOSE
      "账号已封禁", //FORBID_ACCOUNT
      "角色已封禁", //FORBID_ROLE
      "ip已封禁", //FORBID_IP
      "验证失败", //AUTH_ERROR
      "同ip登录人数过多", //SAME_IP_LIMIT
      "账号已封禁", //ACCOUNT_FORBID
      "选择服务错误", //ERROR_SERVER_ID
      "登录流程出错", //LOGIN_ERROR,
      "服务器维护", //SERVER_MAINTAIN,
      "游戏更新", //GAME_UPDATE,
      "玩家没在缓存" //PLAYER_NOT_IN_CACHE,
      ]);
      var Alert = exports('default', (_dec = property(ByRichText), _dec2 = property(Node), _dec3 = property(Node), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Alert, _Component);

        function Alert() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lblDesc", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeBtnSure", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeBtnCancel", _descriptor3, _assertThisInitialized(_this));

          _this._sureFunc = void 0;
          _this._cancelFunc = void 0;
          return _this;
        }

        var _proto = Alert.prototype;

        _proto.onLoad = function onLoad() {
          Alert._instance = this;

          if (Alert._waitArgs) {
            this._loadComplete(Alert._waitArgs);

            Alert._waitArgs = undefined;
          } else {
            this.node.active = false;
          }
        };

        _proto.onDestroy = function onDestroy() {
          Alert._instance = undefined;
        };

        _proto._loadComplete = function _loadComplete(args) {
          this.lblDesc.string = args.msg;
          this.nodeBtnCancel.active = !args.hideCancel;
          this.nodeBtnSure.getComponentInChildren(Label).string = args.btnSureTitle || "确定";
          this.nodeBtnCancel.getComponentInChildren(Label).string = args.btnCancelTitle || "取消";
          this._sureFunc = args.func;
          this._cancelFunc = args.cfunc;
        };

        _proto.onBtnSure = function onBtnSure() {
          this._sureFunc && this._sureFunc();
          Alert.hide();
        };

        _proto.onBtnCancel = function onBtnCancel() {
          this._cancelFunc && this._cancelFunc();
          Alert.hide();
        };

        Alert.show = function show(args) {
          var _this2 = this;

          if (!this._instance) {
            if (!this._waitArgs) {
              assetManager.getBundle("launcher").load(ResConst.getPrefab("Alert"), function (err, res) {
                if (err) {
                  error(err);
                  return;
                }

                var view = instantiate(res);
                var assetMeta = view.addComponent(AssetMeta);
                assetMeta.add(res);
                _this2._instance = view.getComponent(Alert);
                director.addPersistRootNode(view);
              });
            }

            this._waitArgs = args;
          } else {
            this._instance.node.active = true;

            this._instance._loadComplete(args);
          }
        };

        Alert.hide = function hide() {
          this._waitArgs = undefined;

          if (this._instance) {
            this._instance.node.active = false;
          }
        };

        _createClass(Alert, [{
          key: "instance",
          get: function get() {
            return Alert._instance;
          }
        }]);

        return Alert;
      }(Component), _class3._instance = void 0, _class3._waitArgs = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblDesc", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnSure", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnCancel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickStream.ts", ['cc', './SDKFacade.ts', './HttpHelper.ts', './LauncherLoginManager.ts'], function (exports) {
  var cclegacy, log, SDKFacade, HttpHelper, LauncherLoginManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      HttpHelper = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6d550xCupBKs7OMSjrP1OHd", "ClickStream", undefined);

      var ClickTraceEnum = exports('ClickTraceEnum', {
        SDK_LOGIN_REQ: 100002,
        SDK_LOAD_FINISH: 100003,
        APP_LOGIN_RESP: 100004,
        GUIDE_DATA_REQ: 100005,
        GUIDE_DATA_REQ_FAILED: 10000501,
        GUIDE_DATA_RESP: 100006,
        SELECT_SERVER_OPEN: 100008,
        SELECT_SERVER_CLICK: 100009,
        SELECT_SERVER: 100010,
        CLICK_START_GAME: 100011,
        LOADING_OPEN: 100012,
        CONNECT_SOCKET_START: 100013,
        CONNECT_SOCKET_FINISH: 100014,
        CONNECT_SOCKET_FAILED: 10001401,
        CONNECT_SOCKET_FAILED_CLIENT: 10001402,
        LOGIN_AUTH_REQ: 100015,
        LOGIN_AUTH_FINISH: 10001501,
        LOGIN_AUTH_FAILED: 100016,
        CONF_LOAD_START: 100019,
        CONF_LOAD_FINISH: 100020,
        ROLE_CREATE_CLICK: 100023,
        ROLE_CREATE_FINISH: 100024,
        ROLE_CREATE_FAILED: 100025,
        PLAYER_INFO_INIT: 100026,
        GAME_SCENE_ENTER: 100027,
        PROLOGUE_ACTIVE: 100028,
        ENTER_GAME_SCENE: 100029,
        LOAD_TISHEN_FILE: 100030,
        LOAD_VERSION_FILE: 100031,
        LOAD_SRC_GAME_BUNDLE: 100032,
        LOAD_GAME_BUNDLE: 100033,
        PLAT_LOGIN_CHECK: 100034,
        PLAT_LOGIN_CHECK_SUC: 100035,
        PLAT_LOGIN_CHECK_FAIL: 100036,
        START_LOAD_SRC_GAME: 100037,
        PROCEDURE_SELECT_SERVER_CHECK: 100038,
        PROCEDURE_SELECT_SERVER_CHECK_SUC: 100039,
        PROCEDURE_SELECT_SERVER_CHECK_FAIL: 100040,
        PROCEDURE_GAMEUPDATE_CHECK: 100041,
        PROCEDURE_GAMEUPDATE_SUC: 100042,
        PROCEDURE_GAMEUPDATE_FAIL: 100043,
        PROCEDURE_GAMEUPDATE_FAIL2: 100044,
        PROCEDURE_GAMEUPDATE_FAIL3: 100045,
        PROCEDURE_GAMEUPDATE_FAIL4: 100046
      });
      var ClickStream = exports('default', new ( /*#__PURE__*/function () {
        function ClickStream() {}

        var _proto = ClickStream.prototype;

        _proto.clickTrace = function clickTrace(type) {
          if (SDKFacade.isInternalDev()) return;
          log("clickTrace " + type + "===================================================");
          var url = SDKFacade.localePlatConfig.clickDomain + "?time=" + Date.now() + "&plat=" + SDKFacade.packageConfig.plat + "&sid=" + LauncherLoginManager.model.serverId + "&pid=" + LauncherLoginManager.model.pid + "&gid=" + SDKFacade.gid + "&account=" + LauncherLoginManager.model.account + "&traceId=" + SDKFacade.imei + "&type=" + type.toString();
          HttpHelper.httpGet({
            url: url
          });
        };

        return ClickStream;
      }())());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ErrorHandle.ts", ['cc', './I18n.ts', './LauncherDefine.ts', './Alert.ts'], function (exports) {
  var cclegacy, game, I18n, ErrorCode, Alert;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      ErrorCode = module.ErrorCode;
    }, function (module) {
      Alert = module.default;
    }],
    execute: function () {
      exports({
        ErrorHandle: ErrorHandle,
        ErrorHandleWithRestart: ErrorHandleWithRestart,
        restart: restart
      });

      cclegacy._RF.push({}, "c53dbq+BkxLoKHs0QsOdWoQ", "ErrorHandle", undefined);

      function ErrorHandle(err, func, errStep) {
        var errMsg = I18n.at("launcher/" + ErrorCode[err]) || I18n.at("launcher/UNKNOWN_ERROR");
        var errId = err * 1000 + (errStep || 0);
        errMsg += "(" + errId + ")";
        var alertArgs = {
          msg: errMsg,
          hideCancel: true
        };

        if (func) {
          alertArgs.func = func;
        }

        Alert.show(alertArgs);
      }

      function ErrorHandleWithRestart(err, errStep) {
        ErrorHandle(err, restart, errStep);
      }

      function restart() {
        game.restart();
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LaunchDateUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Utils2.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, Component, Utils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      var _TIME_FORMAT_TO_STRIN;

      cclegacy._RF.push({}, "e97a4zHvplGgLs+/BfHpy+Q", "LaunchDateUtil", undefined);
      /** 时间格式类型 命名格式 X_X_X_序号 X会解析成对应数据 */


      var TIME_FORMAT = exports('TIME_FORMAT', /*#__PURE__*/function (TIME_FORMAT) {
        TIME_FORMAT[TIME_FORMAT["Y_MM_D_H_M_MS_1"] = 1] = "Y_MM_D_H_M_MS_1";
        TIME_FORMAT[TIME_FORMAT["Y_MM_D_H_M_MS_2"] = 2] = "Y_MM_D_H_M_MS_2";
        TIME_FORMAT[TIME_FORMAT["MM_D_H_M_MS_3"] = 3] = "MM_D_H_M_MS_3";
        TIME_FORMAT[TIME_FORMAT["MM_D_H_M_MS_4"] = 4] = "MM_D_H_M_MS_4";
        TIME_FORMAT[TIME_FORMAT["MM_D_H_M_1"] = 5] = "MM_D_H_M_1";
        TIME_FORMAT[TIME_FORMAT["H_M_MS_1"] = 6] = "H_M_MS_1";
        TIME_FORMAT[TIME_FORMAT["D_H_M_MS_1"] = 7] = "D_H_M_MS_1";
        TIME_FORMAT[TIME_FORMAT["MM_D_1"] = 8] = "MM_D_1";
        TIME_FORMAT[TIME_FORMAT["D_H_M_1"] = 9] = "D_H_M_1";
        TIME_FORMAT[TIME_FORMAT["M_MS_1"] = 10] = "M_MS_1";
        return TIME_FORMAT;
      }({}));
      /** 格式类型:填充文本 */

      var TIME_FORMAT_TO_STRING = (_TIME_FORMAT_TO_STRIN = {}, _TIME_FORMAT_TO_STRIN[TIME_FORMAT.Y_MM_D_H_M_MS_1] = "{0}年%{1}月%{2}日%{3}时{4}分{5}秒", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.Y_MM_D_H_M_MS_2] = "{0}-{1}-{2} {3}:{4}:{5}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.MM_D_H_M_MS_3] = "{0}月{1}日 {2}:{3}:{4}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.MM_D_H_M_MS_4] = "{0}/{1} {2}:{3}:{4}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.MM_D_H_M_1] = "{0}月{1}日 {2}:{3}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.H_M_MS_1] = "{0}:{1}:{2}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.D_H_M_MS_1] = "{0}天{1}:{2}:{3}", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.MM_D_1] = "{0}月{1}日", _TIME_FORMAT_TO_STRIN[TIME_FORMAT.M_MS_1] = "{0}:{1}", _TIME_FORMAT_TO_STRIN);
      /** 时间格式标记 */

      var TIME_FLAG = /*#__PURE__*/function (TIME_FLAG) {
        TIME_FLAG["Y"] = "Y";
        TIME_FLAG["MM"] = "MM";
        TIME_FLAG["D"] = "D";
        TIME_FLAG["H"] = "H";
        TIME_FLAG["M"] = "M";
        TIME_FLAG["MS"] = "MS";
        return TIME_FLAG;
      }(TIME_FLAG || {});

      var TIME_FLAG_ARR = [TIME_FLAG.Y, TIME_FLAG.MM, TIME_FLAG.D, TIME_FLAG.H, TIME_FLAG.M, TIME_FLAG.MS];
      var LaunchDateUtil = exports('LaunchDateUtil', /*#__PURE__*/function (_Component) {
        _inheritsLoose(LaunchDateUtil, _Component);

        function LaunchDateUtil() {
          return _Component.apply(this, arguments) || this;
        }
        /**
         * 获取日期
         * timeStamp: 时间戳（毫秒）
         * args: 参数 [Y MM D H M S]（年、月、日、时、分、秒）, 任意选择组合
         * return 数字数组 对应args
         */


        LaunchDateUtil.getDate = function getDate(timeStamp, args) {
          if (timeStamp instanceof Long) {
            timeStamp = timeStamp.toNumber();
          }

          var date = new Date(timeStamp);
          var arr = [];

          for (var i = 0; i < args.length; i++) {
            var val = args[i];

            switch (val) {
              case TIME_FLAG.Y:
                arr.push(date.getFullYear());
                break;

              case TIME_FLAG.MM:
                arr.push(date.getMonth() + 1);
                break;

              case TIME_FLAG.D:
                arr.push(date.getDate());
                break;

              case TIME_FLAG.H:
                arr.push(date.getHours());
                break;

              case TIME_FLAG.M:
                arr.push(date.getMinutes());
                break;

              case TIME_FLAG.MS:
                arr.push(date.getSeconds());
                break;
            }
          }

          return arr;
        }
        /**
         * 获取时间的格式
         * 默认格式 年-月-日 时:分:秒 "2023-01-22 10:03:46"
         * @param timeStamp 时间戳
         * @param format 显示格式
         */
        ;

        LaunchDateUtil.getDateFormat = function getDateFormat(timeStamp, format) {
          if (format === void 0) {
            format = TIME_FORMAT.Y_MM_D_H_M_MS_2;
          }

          var arr = this.getDate(timeStamp, TIME_FLAG_ARR);
          var year = arr[0];
          var month = arr[1];
          var day = arr[2];
          var hour = arr[3];
          var minute = arr[4];
          var second = arr[5];
          var params = [];
          var pFormatStr = TIME_FORMAT[format];
          var strs = pFormatStr.split("_");

          for (var _iterator = _createForOfIteratorHelperLoose(strs), _step; !(_step = _iterator()).done;) {
            var str = _step.value;

            switch (str) {
              case TIME_FLAG.Y:
                params.push(year);
                break;

              case TIME_FLAG.MM:
                params.push(month);
                break;

              case TIME_FLAG.D:
                params.push(day);
                break;

              case TIME_FLAG.H:
                params.push(hour);
                break;

              case TIME_FLAG.M:
                params.push(minute);
                break;

              case TIME_FLAG.MS:
                params.push(second);
                break;
            }
          }

          var pFormat = TIME_FORMAT_TO_STRING[format];
          return Utils.formatString.apply(Utils, [pFormat].concat(params));
        };

        return LaunchDateUtil;
      }(Component));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherComp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDecorator.ts', './LauncherGlobal.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Component, EventDecorator, LauncherGlobal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      EventDecorator = module.EventDecorator;
    }, function (module) {
      LauncherGlobal = module.default;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "2c4fe26KGhABIy88bVrGmbz", "LauncherComp", undefined);

      var ccclass = _decorator.ccclass;
      var LauncherComp = exports('default', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LauncherComp, _Component);

        function LauncherComp() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._events = void 0;

          _this.onLoad = function () {
            _this._events = new EventDecorator(LauncherGlobal.instance.EventEmitter, "msg");

            _this._events.initEvents(_assertThisInitialized(_this));

            _this.safeOnCreate();
          };

          _this.onDestroy = function () {
            _this._events.unbindEvents();

            _this.safeOnDestroy();
          };

          return _this;
        }

        var _proto = LauncherComp.prototype;

        _proto.safeOnCreate = function safeOnCreate() {};

        _proto.safeOnDestroy = function safeOnDestroy() {};

        return LauncherComp;
      }(Component)) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherEvents.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3ae2788Y7VN1ZRuPhXdFYHk", "LauncherEvents", undefined);
      /**
       * Launcher事件定义
       */


      var LauncherEvents = exports('LauncherEvents', {
        ENTER_GAME: 0,
        SKIP_LAUNCHER: 1,
        LAUNCHER_UPDATE: 2,
        NATIVE_LAUNCHER_UPDATE_SUCCESS: 3,
        NATIVE_GAME_UPDATE_SUCCESS: 4,
        LOGIN_FINISH: 5,
        NATIVE_UPDATE_ERROR: 6,
        UPDATE_SELECTED_SERVER: 7,
        OPEN_LOGIN_SERVERS: 8,
        CLOSE_LOGIN_SERVERS: 9,
        CHECK_LOAD_GAMESCENE: 10,
        UPDATE_LAUNCHER_VERSION: 11,
        EVENT_ORIENT_CHANGE: 12,
        EVENT_SDK_INIT: 13,
        EVENT_LOGIN_SUC: 14,
        EVENT_LOGIN_FAIL: 15,
        EVENT_LOGOUT_SUC: 16,
        EVENT_SDK_PAYBACK: 17,
        EVENT_SDK_AGEICON: 18,
        EVENT_SDK_AUTHCHECK: 19,
        EVENT_SDK_BACKTOLOGIN: 20
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherGlobal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventEmitter.ts', './ProcedureMgr.ts', './UpdateModel.ts'], function (exports) {
  var _createClass, cclegacy, error, EventEmitter, ProcedureMgr, UpdateModel;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
    }, function (module) {
      EventEmitter = module.default;
    }, function (module) {
      ProcedureMgr = module.default;
    }, function (module) {
      UpdateModel = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b813ceGvUVG7LOqlF4uJ8o7", "LauncherGlobal", undefined);

      var LauncherGlobal = exports('default', /*#__PURE__*/function () {
        function LauncherGlobal() {
          this.EventEmitter = new EventEmitter();
          this.PM = new ProcedureMgr(this.EventEmitter);
          this.updateModel = new UpdateModel();
          this.gameBundle = void 0;
          this.canvasNode = void 0;
          this.loginLogicNode = void 0;
        }

        LauncherGlobal.create = function create(args) {
          if (this._instance) {
            error("LauncherGlobal is created!!");
            return;
          }

          this._instance = new LauncherGlobal();
          this._instance.canvasNode = args.canvasNode;
          {
            globalThis.LauncherGlobal = this._instance;
          }
        };

        LauncherGlobal.destroy = function destroy() {
          this._instance = undefined;
          globalThis.LauncherGlobal = undefined;
        };

        _createClass(LauncherGlobal, null, [{
          key: "instance",
          get: function get() {
            return this._instance;
          }
        }]);

        return LauncherGlobal;
      }());
      LauncherGlobal._instance = void 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherLoginManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LauncherDefine.ts', './SDKFacade.ts', './HttpHelper.ts', './WebUtils.ts', './ClickStream.ts', './LauncherLoginModel.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, log, sys, error, cclegacy, DEV_LOGIN_INFO_STORAGE_KEY, SWITCH_SERVER_LOGIN, INNER_SERVER_ZONES_INFO_REQ, INNER_SERVER_LIST_REQ, SDKFacade, Platfrom, SDKType, HttpHelper, HttpRespType, WebUtils, ClickStream, ClickTraceEnum, LoginModel;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      log = module.log;
      sys = module.sys;
      error = module.error;
      cclegacy = module.cclegacy;
    }, function (module) {
      DEV_LOGIN_INFO_STORAGE_KEY = module.DEV_LOGIN_INFO_STORAGE_KEY;
      SWITCH_SERVER_LOGIN = module.SWITCH_SERVER_LOGIN;
      INNER_SERVER_ZONES_INFO_REQ = module.INNER_SERVER_ZONES_INFO_REQ;
      INNER_SERVER_LIST_REQ = module.INNER_SERVER_LIST_REQ;
    }, function (module) {
      SDKFacade = module.default;
      Platfrom = module.Platfrom;
      SDKType = module.SDKType;
    }, function (module) {
      HttpHelper = module.default;
      HttpRespType = module.HttpRespType;
    }, function (module) {
      WebUtils = module.WebUtils;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }, function (module) {
      LoginModel = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3be48QzD/xHaI/huqQY1EwT", "LauncherLoginManager", undefined);

      var CONST_REQ_FAILED_RETRY_TIMES = 3;
      var LauncherLoginManager = exports('default', new ( /*#__PURE__*/function () {
        function LauncherLoginManager() {
          this._model = new LoginModel();
          {
            globalThis.LauncherLoginManager = this;
          }
        }

        var _proto = LauncherLoginManager.prototype;
        /** imei上报 */

        _proto.req_imei = function req_imei() {
          var url = SDKFacade.localePlatConfig.imeiDomain;
          url += "?game=" + SDKFacade.game + "&plat=" + SDKFacade.packageConfig.plat + "&gid=" + SDKFacade.gid + "&pid=" + SDKFacade.pid + "&imei=" + SDKFacade.imei + "&time=" + Date.now();
          log("## req imei", url);
          HttpHelper.handleHttpGet({
            url: url,
            isInternalUrl: false,
            type: HttpRespType.JSON,
            sucCall: function sucCall(resp) {
              log("## req imei suc", url);
            },
            failCall: function failCall(resp) {
              log("## req imei fail", url);
            },
            tryTimes: CONST_REQ_FAILED_RETRY_TIMES
          });
        }
        /** 请求sdk login */
        ;

        _proto.requestWxSkdLogin = function requestWxSkdLogin(loginSuccCb, loginFailCb) {
          if (SDKFacade.isWxSsPlat()) {
            //新增 三手sdk对接 login接口需要传params
            var osPid = "442";

            if (sys.os == sys.OS.IOS) {
              osPid = "484";
            } else {
              osPid = "442";
            }

            var params = {
              pid: osPid,
              gid: SDKFacade.gid
            };
            window.sqmsdk.login(params, function (result) {
              loginSuccCb && loginSuccCb.call(undefined, result);
            }, function () {
              loginFailCb && loginFailCb.call(undefined);
            });
          }
        } //请求导量接口
        ;

        _proto.reqLoginGuide = function reqLoginGuide(sucCallback, failCallback) {
          var _this = this;

          console.log("请求导量接口");

          if (SDKFacade.isInternalDev() || this.model.skipSdkLogin) {
            var _resp = this.loadDevLoginInfo();

            this.model.genGuideServer(_resp);
            sucCallback(_resp.state, _resp);
            return;
          }

          var url = "";

          if (SDKFacade.platform == Platfrom.MiniGame) {
            url = SDKFacade.oreoLoginDomain + "login/guide?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&token=" + this.model.token + "&os=" + SDKFacade.reqOS;
          } else if (SDKFacade.platform == Platfrom.Native) {
            url = SDKFacade.oreoLoginDomain + "login/guide?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&token=" + this.model.token + "&fgid=" + SDKFacade.fgid + "&os=" + SDKFacade.reqOS; // if(SDKFacade.bridge.isTWPackage()) {
            //     url += "&token_verify_host=sdk-api.zzcool.com";
            // }
          }

          var callback = function callback(resp) {
            log("## req login guide success");
            SDKFacade.isInternalPack() && console.log(resp); // 请求成功

            var jsonData = resp;

            if (SDKFacade.isInternalDev()) {
              jsonData.data.account = Math.ceil(Math.random() * 100000000000).toString();
              console.log("\u5185\u7F51\u65B0\u73A9\u5BB6\u6D41\u7A0B\u6D4B\u8BD5\uFF0C\u968F\u673A\u4F7F\u7528\u8D26\u53F7\uFF1A" + jsonData.data.account);
            } // 保存数据


            _this.model.genGuideServer(jsonData);

            ClickStream.clickTrace(ClickTraceEnum.GUIDE_DATA_RESP);
            sucCallback(jsonData.state, resp);
          };

          console.log("## req login guide", url);
          HttpHelper.handleHttpGet({
            url: url,
            type: HttpRespType.JSON,
            sucCall: callback,
            failCall: failCallback
          });
        }
        /**
         * 请求已有角色列表
         */
        ;

        _proto.reqRoles = function reqRoles(sucCallback, failCallback) {
          var _this2 = this;

          if (SDKFacade.isInternalDev()) {
            sucCallback(null);
            return;
          }

          var url = SDKFacade.oreoLoginDomain + "main/roles?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&os=" + SDKFacade.reqOS + "&account=" + this.model.account + "&sign=" + this.model.loginGuideSign + "&time=" + this.model.loginGuideCheckTime;
          log("## req Roles count: " + url);
          HttpHelper.handleHttpGet({
            url: url,
            isInternalUrl: false,
            type: HttpRespType.JSON,
            sucCall: function sucCall(resp) {
              // 请求成功
              var jsonData = resp; // 保存数据

              _this2.model.genRoleList(jsonData);

              sucCallback();
            },
            failCall: failCallback
          });
        }
        /**
         * 请求推荐服列表
         */
        ;

        _proto.reqRecommendServers = function reqRecommendServers(sucCallback, failCallback) {
          var _this3 = this;

          if (SDKFacade.isInternalDev()) {
            sucCallback();
            return;
          }

          var url = SDKFacade.oreoLoginDomain + "main/recommend?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&os=" + SDKFacade.reqOS + "&account=" + this.model.account + "&sign=" + this.model.loginGuideSign + "&time=" + this.model.loginGuideCheckTime;
          log("## req recommend servers", url);
          HttpHelper.handleHttpGet({
            url: url,
            sucCall: function sucCall(resp) {
              // 请求成功
              var jsonData = resp; // 保存数据

              _this3.model.genRecommendServers(jsonData);

              sucCallback();
            },
            failCall: failCallback
          });
        }
        /**
         * 请求所有大区信息
         */
        ;

        _proto.reqZones = function reqZones(sucCallback, failCallback) {
          var _this4 = this;

          var url;

          switch (SDKFacade.sdkType) {
            case SDKType.sqmsdk:
              url = SDKFacade.oreoLoginDomain + "main/zones?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + this.model.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&os=" + SDKFacade.reqOS + "&sign=" + this.model.loginGuideSign + "&account=" + this.model.account + "&time=" + this.model.loginGuideCheckTime;
              break;

            default:
              url = INNER_SERVER_ZONES_INFO_REQ;
              break;
          }

          log("## req Zones: " + url);
          HttpHelper.handleHttpGet({
            url: url,
            sucCall: function sucCall(resp) {
              // 请求成功
              var jsonData;

              switch (SDKFacade.sdkType) {
                case SDKType.sqmsdk:
                  jsonData = resp;
                  break;

                default:
                  var zoneDatas = [];

                  for (var index = 0; index < resp.length; index++) {
                    var d = resp[index];
                    zoneDatas.push({
                      zoneName: d,
                      zoneId: index,
                      zoneOrder: index
                    });
                  }

                  jsonData = {
                    state: 0,
                    msg: "",
                    data: {
                      zones: zoneDatas
                    }
                  };
                  break;
              } // 保存数据


              _this4.model.genZoneList(jsonData);

              sucCallback();
            },
            failCall: failCallback
          });
        }
        /**请求gm server */
        ;

        _proto.reqGmServers = function reqGmServers(serverId, sucCallback, failCallback) {
          var _this5 = this;

          if (SDKFacade.isInternalDev()) {
            sucCallback();
            return;
          }

          var url = "";

          switch (SDKFacade.sdkType) {
            case SDKType.sqmsdk:
              url = "https://oreoapis.996a.com/support/api/client/bmdlgc/37wan/servers?serverId=" + serverId + "&sign=sAg9DHUSg0COZYG2";
              break;

            default:
              url = INNER_SERVER_LIST_REQ;
              break;
          }

          HttpHelper.handleHttpGet({
            url: url,
            sucCall: function sucCall(resp) {
              // 请求成功
              switch (SDKFacade.sdkType) {
                case SDKType.sqmsdk:
                  var jsonData = resp;

                  _this5.model.setGmServerRes(jsonData);

                  break;
              }

              sucCallback();
            }
          });
        }
        /**
         * 请求指定大区的服务器列表
         * @param tabIndex 请求服务器列表信息的大区标签
         */
        ;

        _proto.reqServers = function reqServers(tabIndex, sucCallback, failCallback) {
          var _this6 = this;

          var zoneId = this.model.getZoneIdByTab(tabIndex);

          if (zoneId !== undefined && zoneId > -1) {
            var url;

            switch (SDKFacade.sdkType) {
              case SDKType.sqmsdk:
                url = SDKFacade.oreoLoginDomain + "main/servers?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&sign=" + this.model.loginGuideSign + "&os=" + SDKFacade.reqOS + "&account=" + this.model.account + "&time=" + this.model.loginGuideCheckTime + "&zoneId=" + zoneId;
                break;

              default:
                url = INNER_SERVER_LIST_REQ;
                break;
            }

            log("## req Servers", url);
            HttpHelper.handleHttpGet({
              url: url,
              sucCall: function sucCall(resp) {
                // 请求成功
                switch (SDKFacade.sdkType) {
                  case SDKType.sqmsdk:
                    var jsonData = resp;

                    _this6.model.genServerList(jsonData, zoneId);

                    break;

                  default:
                    for (var index = 0; index < resp.length; index++) {
                      var element = resp[index];
                      var servers = [];

                      for (var _iterator = _createForOfIteratorHelperLoose(element), _step; !(_step = _iterator()).done;) {
                        var s = _step.value;
                        servers.push({
                          state: 0,
                          ip: "0",
                          serverId: Number(s.serverId),
                          domain: s.host,
                          port: Number(s.port),
                          name: s.serverName,
                          openTime: s.open_date,
                          zoneId: index,
                          zoneName: "",
                          zoneOrder: index,
                          newServer: false,
                          recommond: 1,
                          banCreateRole: false
                        });
                      }

                      var _jsonData = {
                        state: 0,
                        msg: "",
                        data: {
                          servers: servers
                        }
                      };

                      _this6.model.genServerList(_jsonData, index);
                    }

                    break;
                }

                sucCallback();
              },
              failCall: failCallback
            });
          } else {
            log("## invalid zone tab!");
          }
        }
        /**
         * 请求获取区服版本
         */
        ;

        _proto.reqServerVersion = function reqServerVersion(serverId, sucCallback, failCallback) {
          if (SDKFacade.isInternalDev()) {
            sucCallback({});
            return;
          }

          var url = "";
          var gameCDNUrl = SDKFacade.mainCdn;
          var os = SDKFacade.reqOS;
          var oreoAppId = SDKFacade.localePlatConfig.oreoAppId;

          if (!oreoAppId) {
            console.error("\u6D77\u5916\u5305\u5FC5\u987B\u914D\u7F6E\u5965\u5229\u5965appid\uFF0C\u5426\u5219\u4E0D\u80FD\u8BF7\u6C42\u670D\u52A1\u5668\u7248\u672C");
            failCallback && failCallback("");
            return;
          }

          url = gameCDNUrl + "oreo_oss/prod/" + oreoAppId + "/server_version/" + os + "/" + serverId + ".json";
          log("## req Server version " + url);
          HttpHelper.handleHttpGet({
            url: url,
            sucCall: function sucCall(resp) {
              log(resp); // 请求成功

              var jsonData = resp;
              sucCallback(jsonData);
            },
            failCall: failCallback
          });
        }
        /**
         * 请求登陆验证,只有小游戏需要用到，原生在launcher里处理
         */
        ;

        _proto.reqLoginCheck = function reqLoginCheck(sucCallback, failCallback) {
          var _this7 = this;

          ClickStream.clickTrace(ClickTraceEnum.PLAT_LOGIN_CHECK);

          if (SDKFacade.isInternalDev()) {
            sucCallback({
              state: 0,
              msg: "",
              data: {
                game: "",
                plat: "",
                gid: "",
                pid: "",
                account: "",
                time: 0,
                current: 0,
                sign: "",
                loginServer: 0,
                ext1: "",
                ext2: "",
                ext3: ""
              }
            });
            return;
          } // ClickStream.clickTrace(ClickTraceEnum.PLAT_LOGIN_CHECK);


          var url = SDKFacade.oreoLoginDomain + "login/check?publisher=" + SDKFacade.publisher + "&imei=" + SDKFacade.imei + "&gid=" + SDKFacade.gid + "&pid=" + this.model.pid + "&clientVersion=" + SDKFacade.appVersion + "&serverVersion=" + "1.0.0" + "&os=" + SDKFacade.reqOS + "&sign=" + this.model.loginGuideSign + "&serverId=" + this.model.getSelServerInfo().serverId + "&account=" + this.model.account + "&time=" + this.model.loginGuideCheckTime + "&cdn=false";
          log("## req Login Check", url);
          HttpHelper.handleHttpGet({
            url: url,
            sucCall: function sucCall(resp) {
              // 请求成功
              var jsonData = resp; // 保存数据

              log(JSON.stringify(jsonData));
              _this7.model.loginCheckSign = jsonData.data.sign;
              _this7.model.loginCheckSignTime = jsonData.data.time;
              ClickStream.clickTrace(ClickTraceEnum.PLAT_LOGIN_CHECK_SUC);
              sucCallback(resp); // if (resp.state !== 0) {
              //     BuglyAgent.reportManual("reqLoginCheck state error", `${url}_${JSON.stringify(resp)}`);
              // }
            },
            failCall: function failCall() {
              ClickStream.clickTrace(ClickTraceEnum.PLAT_LOGIN_CHECK_FAIL);
              failCallback && failCallback(); // BuglyAgent.reportManual("reqLoginCheck error", url);
            }
          });
        } // 内网调试时获取上次登录信息
        ;

        _proto.loadDevLoginInfo = function loadDevLoginInfo() {
          // 内网网页端链接带了登录信息
          var hrefInfo = WebUtils.parseHrefInfo();
          var storage = sys.localStorage.getItem(DEV_LOGIN_INFO_STORAGE_KEY);
          var lastLogin = {};

          if (storage) {
            try {
              lastLogin = JSON.parse(storage);
            } catch (err) {
              error(err);
            }
          }

          var resp = {
            state: 0,
            data: {
              account: (hrefInfo == null ? void 0 : hrefInfo.uid) || lastLogin.account || Math.ceil(Math.random() * 100000000000).toString(),
              current: Date.now(),
              guideServer: {
                state: 0,
                serverId: (hrefInfo == null ? void 0 : hrefInfo.serverId) || lastLogin.serverId && Number(lastLogin.serverId) || 1,
                domain: (hrefInfo == null ? void 0 : hrefInfo.ip) || lastLogin.ip || "10.12.4.66",
                name: lastLogin.serverName || "cyb",
                openTime: Date.now(),
                port: (hrefInfo == null ? void 0 : hrefInfo.port) || lastLogin.port && Number(lastLogin.port) || 9001,
                zoneName: "",
                zoneId: 0,
                zoneOrder: 0,
                newServer: false,
                recommond: 0,
                banCreateRole: false
              },
              game: "",
              plat: "",
              gid: "",
              pid: "",
              sign: "",
              ext1: "",
              ext2: "",
              ext3: ""
            },
            msg: ""
          };
          return resp;
        };

        _proto.saveDevLoginInfo = function saveDevLoginInfo() {
          var selectedServer = this.model.getSelServerInfo();

          if (SDKFacade.isInternalDev()) {
            sys.localStorage.setItem(DEV_LOGIN_INFO_STORAGE_KEY, JSON.stringify({
              account: this.model.account,
              ip: selectedServer.domain,
              port: selectedServer.port,
              serverId: selectedServer.serverId,
              serverName: selectedServer.name
            }, null, 4));
          } else {
            sys.localStorage.setItem(DEV_LOGIN_INFO_STORAGE_KEY, JSON.stringify(selectedServer));
          }
        };

        _proto.saveSwitchServerInfo = function saveSwitchServerInfo() {
          sys.localStorage.setItem(SWITCH_SERVER_LOGIN, "1");
        }
        /** 内网调试获取带登录信息的url */
        ;

        _proto.getDevLoginUrl = function getDevLoginUrl() {
          var url = new URL(globalThis.location.href);
          var loginInfo = {
            ip: this.model.getSelServerInfo().domain,
            port: this.model.getSelServerInfo().port,
            serverId: this.model.getSelServerInfo().serverId,
            uid: this.model.account,
            skipstart: true
          };

          for (var key in loginInfo) {
            if (Object.prototype.hasOwnProperty.call(loginInfo, key)) {
              var value = loginInfo[key];
              url.searchParams.set(key, value);
            }
          }

          log("\u767B\u5F55\u8FDE\u63A5\uFF1A" + url.toString());
        };

        _proto.getNoticeUrl = function getNoticeUrl() {
          if (SDKFacade.isMiniGame() || SDKFacade.isAndroidNative()) {
            return this.model.getNoticeUrl();
          }
        }
        /**
        * 请求公告
        */
        ;

        _proto.reqNotice = function reqNotice(sucCallback, failCallback) {
          var _this8 = this;

          if (SDKFacade.sdkType === SDKType.none) {
            sucCallback();
            return;
          }

          var retryCount = 0;

          var doReq = function doReq() {
            // url从Launcher里传递过来
            var url = _this8.getNoticeUrl();

            log("## req Notice", url);
            HttpHelper.httpGet({
              url: url,
              type: HttpRespType.JSON,
              sucCall: function sucCall(resp) {
                //请求成功
                var jsonData = resp.data || resp; // 兼容oreo和oreo_oss数据格式不同
                //保存数据

                log(JSON.stringify(jsonData));

                _this8.model.genNoticeList(jsonData);

                sucCallback();
              },
              failCall: function failCall(xhr) {
                if (retryCount > 10) {
                  failCallback && failCallback();
                  return;
                }

                retryCount++;
                doReq();
              }
            });
          };

          doReq();
        };

        _createClass(LauncherLoginManager, [{
          key: "model",
          get: function get() {
            return this._model;
          }
        }]);

        return LauncherLoginManager;
      }())());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherLoginModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './LauncherDefine.ts', './SDKFacade.ts', './Utils2.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, error, I18n, SERVER_CREATE_ROLE_TAB, DEV_LOGIN_INFO_STORAGE_KEY, SWITCH_SERVER_LOGIN, SERVER_RECOMMAND_TAB, SDKFacade, Utils;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      error = module.error;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      SERVER_CREATE_ROLE_TAB = module.SERVER_CREATE_ROLE_TAB;
      DEV_LOGIN_INFO_STORAGE_KEY = module.DEV_LOGIN_INFO_STORAGE_KEY;
      SWITCH_SERVER_LOGIN = module.SWITCH_SERVER_LOGIN;
      SERVER_RECOMMAND_TAB = module.SERVER_RECOMMAND_TAB;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      Utils = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d9e0bxCR1ZK8p8g8jbSZEj7", "LauncherLoginModel", undefined);

      var SERVER_DATA_TIMEOUT = 10; // 服务器列表数据超时时间

      var LoginModel = exports('default', /*#__PURE__*/function () {
        function LoginModel() {
          this.testScene = false;
          this.skipLogin = false;
          this.skipSdkLogin = true;
          this.account = "";
          /**服务器ID */

          this.serverId = 0; // GM包密码

          this._gmPassword = void 0; // GM包账号

          this._gmAccount = void 0; // GM包服务器

          this._gmServerId = 0; //是否gm登录

          this._isGmLogin = false; // 选择的服务器信息  // 可能会GM修改

          this._selServer = null; // 选择的服务器原始数据

          this._selServerOrigin = null;
          this._token = ""; //账号是否白名单

          this._whiteAccount = false; //是否新账号

          this._newAccount = false;
          this.loginCheckSign = ""; //登录验证返回 与服务端生成登录凭证的元素

          this.loginCheckSignTime = 0;
          this.loginGuideSign = ""; //导服接口返回的time透传参数

          this.loginGuideCheckTime = 0; //导服接口返回的完成时间

          this.loginGuideTime = 0;
          this.loginGuideTimeGet = 0; // gmAccount = "";

          this.guideServer = void 0;
          this.serverVersion = ""; // 客户端登录IP

          this.ip = ""; // 服务器已有角色信息    // 合服后改为原始服serverid--主服serverid唯一确定一个服务器   没有主服用0

          this._serverRoleInfo = new Map(); // 已有角色对应服务器信息

          this._roleServerInfo = new Map(); // 所有大区信息

          this._zoneList = new Map(); // zoneid -- zonedata
          // 已请求的服务器列表信息

          this._serverList = new Map(); // zoneid -- servers

          this._serverReqTime = {}; // 请求到服务器数据的时间，超时重新请求 // zoneid -- time
          //sdk返回 
          //秒级时间戳

          this.sdk_time = void 0; //用户相关数据

          this.user = void 0; //params

          this.params = {};

          this._serverListSortFunc = function (a, b) {
            if (a.recommond !== b.recommond) {
              return b.recommond - a.recommond;
            }

            if (a.newServer !== b.newServer) {
              return (b.newServer ? 1 : 0) - (a.newServer ? 1 : 0);
            }

            if (a.banCreateRole !== b.banCreateRole) {
              return (b.banCreateRole ? 0 : 1) - (a.banCreateRole ? 0 : 1);
            }

            return b.openTime - a.openTime;
          };

          this._language = "";
          this._gid = "";
          this._pid = "";
          this._noticeTime = 0;
          this._noticeList = void 0;
        }

        var _proto = LoginModel.prototype;

        _proto.setGmData = function setGmData(str1, str2, serverId) {
          this.gmPassword = str1;
          this.gmAccount = str2;
          this.gmServerId = serverId;
        }; //sdk返回结束


        _proto.genGuideServer = function genGuideServer(jsonData) {
          // 0 成功，-1 请求SDK验证失败，-8 无符合区服，-999 内部错误 1 未请求，默认值
          if (jsonData.state === 0) {
            this.account = jsonData.data.account;
            this.loginGuideSign = jsonData.data.sign || "";
            this.loginGuideCheckTime = jsonData.data.time || 0;
            this.guideServer = jsonData.data.guideServer;

            if (jsonData.data.ext2) {
              var ext2Obj = JSON.parse(jsonData.data.ext2);
              this.whiteAccount = ext2Obj.wa;
              this.newAccount = ext2Obj.isNewAccount;
            }

            this.loginGuideTime = jsonData.data.current * 1000;
            this.loginGuideTimeGet = Date.now(); // // 微信小游戏提审状态
            // if (SDKFacade.getInstance().distributeType === DistributeType.WechatMiniGame) {
            //     if (this._guideServer.serverId === WECHAT_AUDIT_SERVER_ID) {
            //         SDKFacade.getInstance().auditType = AuditType.WECHAT_IOS;
            //     }
            // }

            this.setSelServerOriginInfo(this.guideServer);
          }
        }
        /**
         * 生成已有角色列表
         */
        ;

        _proto.genRoleList = function genRoleList(jsonData) {
          // 0 成功 -999 异常
          if (jsonData.state === 0) {
            var listData = jsonData.data.serverRoleList;
            if (listData.length === 0) return;
            var zoneId = SERVER_CREATE_ROLE_TAB;
            var servers = [];

            for (var i = 0; i < listData.length; ++i) {
              var serverRoleData = listData[i];
              servers.push(serverRoleData.server);

              if (serverRoleData.rolesInfoList && serverRoleData.rolesInfoList.length > 0) {
                // SLG单服只有单角色
                this._serverRoleInfo.set(serverRoleData.server.serverId, serverRoleData.rolesInfoList[0]);

                this._roleServerInfo.set(serverRoleData.rolesInfoList[0].playerId, serverRoleData.server);
              }
            }

            this._serverList.set(zoneId, servers);

            this._zoneList.set(zoneId, {
              zoneName: I18n.at("launcher/L_LOGIN_CREATED_ROLE"),
              zoneId: SERVER_CREATE_ROLE_TAB,
              zoneOrder: SERVER_CREATE_ROLE_TAB
            });
          }
        };

        _proto.getSelServerInfo = function getSelServerInfo() {
          return this._selServer;
        };

        _proto.getSelServerId = function getSelServerId() {
          return this._selServer ? this._selServer.serverId : 0;
        };

        _proto.setSelServerInfo = function setSelServerInfo(serverInfo) {
          this._selServer = serverInfo; // if (window.TA) {
          //     window.TA.setSuperProperties({
          //         sid: serverInfo.serverId
          //     });
          // }
        };

        _proto.getSelServerOriginInfo = function getSelServerOriginInfo() {
          return this._selServerOrigin;
        };

        _proto.setSelServerOriginInfo = function setSelServerOriginInfo(serverInfo) {
          var storage = sys.localStorage.getItem(DEV_LOGIN_INFO_STORAGE_KEY);
          var isSwitchServer = sys.localStorage.getItem(SWITCH_SERVER_LOGIN);

          if (!SDKFacade.isInternalDev() && storage && isSwitchServer) {
            var lastLogin = {};

            try {
              lastLogin = JSON.parse(storage);
            } catch (err) {
              error(err);
            }

            this._selServerOrigin = lastLogin;
            var selServer = Utils.clone(lastLogin);
            this.setSelServerInfo(selServer);
            sys.localStorage.removeItem(DEV_LOGIN_INFO_STORAGE_KEY);
            sys.localStorage.removeItem(SWITCH_SERVER_LOGIN);
          } else {
            this._selServerOrigin = serverInfo;

            var _selServer = Utils.clone(serverInfo);

            this.setSelServerInfo(_selServer);
          }
        } // 获取大区列表（自动整理排序）
        ;

        _proto.getZoneList = function getZoneList() {
          var arr = [];

          for (var _iterator = _createForOfIteratorHelperLoose(this._zoneList.values()), _step; !(_step = _iterator()).done;) {
            var zoneData = _step.value;
            arr.push(zoneData);
          }

          arr.sort(function (a, b) {
            return a.zoneOrder - b.zoneOrder;
          });
          return arr;
        }
        /**
         * 获取大区的服务器列表信息
         * @param tabIndex 大区标签
         */
        ;

        _proto.getServerListByTab = function getServerListByTab(tabIndex) {
          var zoneId = this.getZoneIdByTab(tabIndex);

          if (this._serverList.get(zoneId)) {
            // 除了已有角色服务器，其他超时清除重新请求
            if (zoneId !== SERVER_CREATE_ROLE_TAB && Date.now() - this._serverReqTime[zoneId] > SERVER_DATA_TIMEOUT * 1000) {
              this._serverList["delete"](zoneId);
            }
          }

          var serverList = this._serverList.get(zoneId);

          if (serverList && serverList.length > 0 && zoneId >= 0) {
            var newServerList = []; // 102533 【客户端】服务器列表屏蔽老服显示

            for (var index = 0; index < serverList.length; index++) {
              var element = serverList[index];
              var serverId = element.masterServer ? element.masterServer.serverId : element.serverId;

              if (serverId >= 79001 && serverId <= 79006) {
                // (serverId >= 79101 && serverId <= 79163)
                continue;
              }

              newServerList.push(element);
            }

            serverList = newServerList;
          }

          return serverList;
        };

        _proto.getServerListByZoneId = function getServerListByZoneId(zoneId) {
          return this._serverList.get(zoneId);
        };

        _proto.getZoneIdByTab = function getZoneIdByTab(tabIndex) {
          var zoneList = this.getZoneList();
          return zoneList[tabIndex].zoneId;
        }
        /**
         * 生成大区列表 this._zoneList[]
         * this._zoneList[i].zoneId:number          大区ID
         * this._zoneList[i].zoneOrder:number       大区序号
         * this._zoneList[i].name:string            大区名
         */
        ;

        _proto.genZoneList = function genZoneList(jsonData) {
          // 0 成功 -10 前端签名异常 -999 内部异常
          if (jsonData.state === 0) {
            for (var i = 0; i < jsonData.data.zones.length; ++i) {
              var zoneData = jsonData.data.zones[i];

              this._zoneList.set(zoneData.zoneId, zoneData);
            }
          }
        }
        /**
         * 请求大区对应服务器列表信息，缓存时间内只请求一次，缓存在this._serverList[]
         */
        ;

        _proto.genServerList = function genServerList(jsonData, zoneId) {
          // 0 成功 -10 前端签名异常 -999 内部异常
          if (jsonData.state === 0) {
            if (jsonData.data.servers) {
              var servers = [];

              for (var i = 0; i < jsonData.data.servers.length; ++i) {
                servers.push(jsonData.data.servers[i]);
              }

              servers.sort(this._serverListSortFunc);

              this._serverList.set(zoneId, servers);
            }

            this._serverReqTime[zoneId] = Date.now();
          }
        }
        /**请求GM选服列表返回 */
        ;

        _proto.setGmServerRes = function setGmServerRes(jsonData, tabIndex) {
          // 0 成功 -10 前端签名异常 -999 内部异常
          if (jsonData.state === 1) {
            if (jsonData.data) {
              var serverData = {};

              for (var i = 0; i < jsonData.data.length; ++i) {
                serverData.serverId = jsonData.data[i].serverId;
                serverData.name = jsonData.data[i].name;
                serverData.ip = jsonData.data[i].ip;
                serverData.port = jsonData.data[i].gamePort;
                serverData.domain = "s" + serverData.serverId + ".bmdlgc.lansors.com";
              }

              this.setSelServerOriginInfo(serverData);
            }
          }
        };
        /**
         * 生成所有推荐服信息
         */


        _proto.genRecommendServers = function genRecommendServers(jsonData) {
          // 0 成功 -10 前端签名异常 -999 内部异常
          if (jsonData.state === 0) {
            if (jsonData.data.servers.length === 0) return;

            this._zoneList.set(SERVER_RECOMMAND_TAB, {
              zoneName: I18n.at("launcher/LOGIN_RECOMMAND_SERVERS"),
              zoneId: SERVER_RECOMMAND_TAB,
              zoneOrder: SERVER_RECOMMAND_TAB
            });

            var servers = [];

            for (var i = 0; i < jsonData.data.servers.length; ++i) {
              servers.push(jsonData.data.servers[i]);
            }

            this._serverList.set(SERVER_RECOMMAND_TAB, servers);
          }
        }; //获取公告地址


        _proto.getNoticeUrl = function getNoticeUrl() {
          if (SDKFacade.isMiniGame()) {
            if (this.language !== "") {
              return SDKFacade.mainCdn + "oreo_oss/prod/KBXg41iC7SXXe16nzjye/notice_article/v1/" + this.language + "/" + this.gid + "-" + this.pid + ".json";
            } else {
              return SDKFacade.mainCdn + "oreo_oss/prod/KBXg41iC7SXXe16nzjye/notice_article/v1/" + this.gid + "-" + this.pid + ".json";
            }
          } else {
            return SDKFacade.mainCdn + "oreo_oss/prod/KBXg41iC7SXXe16nzjye/notice_article/v1/" + this.gid + "-" + this.pid + ".json";
          }
        };

        _proto.genNoticeList = function genNoticeList(jsonData) {
          this._noticeList = [];

          if (!jsonData.notice || !jsonData.notice.tags) {
            return;
          }

          for (var _iterator2 = _createForOfIteratorHelperLoose(jsonData.notice.tags), _step2; !(_step2 = _iterator2()).done;) {
            var tagData = _step2.value;

            this._noticeList.push(tagData);
          }

          this._noticeTime = Date.now();
        };

        _proto.getNoticeList = function getNoticeList() {
          return this._noticeList;
        }
        /**是否新创角色 */
        ;

        _proto.isNewCreateRole = function isNewCreateRole(serverId) {
          return this._serverRoleInfo ? this._serverRoleInfo.has(serverId) : false;
        };

        _createClass(LoginModel, [{
          key: "gmPassword",
          get: function get() {
            return this._gmPassword;
          },
          set: function set(value) {
            this._gmPassword = value;
          }
        }, {
          key: "gmAccount",
          get: function get() {
            return this._gmAccount;
          },
          set: function set(value) {
            this._gmAccount = value;
          }
        }, {
          key: "gmServerId",
          get: function get() {
            return this._gmServerId;
          },
          set: function set(value) {
            this._gmServerId = value;
          }
        }, {
          key: "isGmLogin",
          get: function get() {
            return this._isGmLogin;
          },
          set: function set(value) {
            this._isGmLogin = value;
          }
        }, {
          key: "token",
          get: function get() {
            return this._token;
          },
          set: function set(val) {
            this._token = val;
          }
        }, {
          key: "whiteAccount",
          get: function get() {
            return this._whiteAccount;
          },
          set: function set(value) {
            this._whiteAccount = value;
          }
        }, {
          key: "newAccount",
          get: function get() {
            return this._newAccount;
          },
          set: function set(value) {
            this._newAccount = value;
          }
        }, {
          key: "language",
          get: function get() {
            return this._language;
          },
          set: function set(str) {
            this._language = str;
          }
        }, {
          key: "gid",
          get: function get() {
            return this._gid;
          },
          set: function set(id) {
            this._gid = id;
          }
        }, {
          key: "pid",
          get: function get() {
            return this._pid;
          },
          set: function set(id) {
            this._pid = id;
          }
        }, {
          key: "noticeTime",
          get: function get() {
            return this._noticeTime;
          }
        }]);

        return LoginModel;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherNoBroadNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "5acf9FlUWVKer6WVDCwUXrL", "LauncherNoBroadNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LauncherNoBroadNode = exports('LauncherNoBroadNode', (_dec = ccclass('LauncherNoBroadNode'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LauncherNoBroadNode, _Component);

        function LauncherNoBroadNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "nodeDesignW", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeDesignH", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LauncherNoBroadNode.prototype;

        _proto.start = function start() {
          var visibleSize = view.getVisibleSize();
          var wscale = visibleSize.width / this.nodeDesignW;
          var hscale = visibleSize.height / this.nodeDesignH;
          var ratio = visibleSize.width / visibleSize.height;

          if (ratio >= 0.56) {
            // 宽屏
            this.node.getComponent(UITransform).setContentSize(720, 1560);
          } else {
            var s = Math.max(wscale, hscale);
            this.node.getComponent(UITransform).setContentSize(this.nodeDesignW * s, this.nodeDesignH * s);
          }
        };

        return LauncherNoBroadNode;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeDesignW", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 720;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeDesignH", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1560;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SDKFacade.ts', './WebUtils.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './LauncherLoginManager.ts', './ProcedureEnterGame.ts', './ProcedureFinishLauncher.ts', './ProcedureGameUpdate.ts', './ProcedureLaunch.ts', './ProcedureLauncherUpdate.ts', './ProcedureLoginGuide.ts', './ProcedureLoginView.ts', './ProcedureSDKLogin.ts', './ProcedureSelectServerCheck.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, SDKFacade, WebUtils, LauncherEvents, LauncherGlobal, LauncherLoginManager, ProcedureEnterGame, ProcedureFinishLauncher, ProcedureGameUpdate, ProcedureLaunch, ProcedureLauncherUpdate, ProcedureLoginGuide, ProcedureLoginView, ProcedureSDKLogin, ProcedureSelectServerCheck;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      WebUtils = module.WebUtils;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ProcedureEnterGame = module.default;
    }, function (module) {
      ProcedureFinishLauncher = module.default;
    }, function (module) {
      ProcedureGameUpdate = module.default;
    }, function (module) {
      ProcedureLaunch = module.default;
    }, function (module) {
      ProcedureLauncherUpdate = module.default;
    }, function (module) {
      ProcedureLoginGuide = module.default;
    }, function (module) {
      ProcedureLoginView = module.default;
    }, function (module) {
      ProcedureSDKLogin = module.default;
    }, function (module) {
      ProcedureSelectServerCheck = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "1f393F2gI9BGKXiE0ZKrylD", "LauncherScene", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LauncherScene = exports('LauncherScene', (_dec = ccclass("LauncherScene"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LauncherScene, _Component);

        function LauncherScene() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "labelLauncher", _descriptor, _assertThisInitialized(_this));

          _this._handlers = [];
          return _this;
        }

        var _proto = LauncherScene.prototype;

        _proto.start = function start() {
          var _WebUtils$parseHrefIn;

          LauncherGlobal.create({
            canvasNode: this.node
          }); // 初始化Launcher流程

          LauncherGlobal.instance.PM.addProcedure(new ProcedureLaunch()); // 启动初始化配置

          LauncherGlobal.instance.PM.addProcedure(new ProcedureLauncherUpdate()); // launcher热更

          LauncherGlobal.instance.PM.addProcedure(new ProcedureSDKLogin()); // SDK登录

          LauncherGlobal.instance.PM.addProcedure(new ProcedureLoginGuide()); // 网站推荐服

          LauncherGlobal.instance.PM.addProcedure(new ProcedureLoginView()); // 进入登录界面

          LauncherGlobal.instance.PM.addProcedure(new ProcedureSelectServerCheck()); // 选择服务器检查

          LauncherGlobal.instance.PM.addProcedure(new ProcedureGameUpdate()); // game热更

          LauncherGlobal.instance.PM.addProcedure(new ProcedureEnterGame()); // 进入game

          LauncherGlobal.instance.PM.addProcedure(new ProcedureFinishLauncher()); // 清理launcher数据

          LauncherGlobal.instance.PM.start();

          this._handlers.push([LauncherEvents.UPDATE_LAUNCHER_VERSION, this.onUpdateLauncherVersion.bind(this)]);

          this._handlers.forEach(function (v) {
            LauncherGlobal.instance.EventEmitter.on(v[0], v[1]);
          });

          if ((_WebUtils$parseHrefIn = WebUtils.parseHrefInfo()) != null && _WebUtils$parseHrefIn.skipstart) {
            LauncherLoginManager.model.skipLogin = true;
            LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.SKIP_LAUNCHER);
          } //测试同时加载gamebundle

          /*assetManager.loadBundle("src_game", (err, res)=>{
              LauncherGlobal.instance.gameSrcBundle = res;
               assetManager.loadBundle("game", (err, res) => {
                  LauncherGlobal.instance.gameBundle = res;
                  res.preloadScene("MainScene");
                   LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.CHECK_LOAD_GAMESCENE);
              });
          });*/


          SDKFacade.eventEmitter.on(LauncherEvents.EVENT_SDK_BACKTOLOGIN, this.switchAccount);
          SDKFacade.eventEmitter.on(LauncherEvents.EVENT_LOGOUT_SUC, this.sdkBackToLogin);
          SDKFacade.eventEmitter.on(LauncherEvents.EVENT_SDK_AUTHCHECK, this.sdkBackToLogin);
        };

        _proto.onUpdateLauncherVersion = function onUpdateLauncherVersion(v) {
          if (this.labelLauncher) {
            this.labelLauncher.string = v;
          }
        };

        _proto.onBtnEnterGame = function onBtnEnterGame() {
          // LauncherLoginManager.model.skipLogin = true;
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.SKIP_LAUNCHER);
        };

        _proto.onBtnEnterTestScene = function onBtnEnterTestScene() {
          LauncherLoginManager.model.testScene = true;
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.SKIP_LAUNCHER);
        };

        _proto.onBtnLauncherUpdate = function onBtnLauncherUpdate() {
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.LAUNCHER_UPDATE);
        } // @Msg(LauncherEvents.EVENT_SDK_BACKTOLOGIN)
        ;

        _proto.switchAccount = function switchAccount() {
          //悬浮窗-点击【账户】-点击【注销登录】，返回登录界面并要调用changeAccount
          SDKFacade.bridge.switchAccount(); //目前还不知道需不需要调用GameApp.loginMgr.backToLogin();
        } // @Msg(LauncherEvents.EVENT_LOGOUT_SUC)
        ;

        _proto.sdkBackToLogin = function sdkBackToLogin() {
          //悬浮窗-点击【注销】
          GameApp.loginMgr.backToLogin();
        };

        _proto.onDestroy = function onDestroy() {
          SDKFacade.eventEmitter.off(LauncherEvents.EVENT_SDK_BACKTOLOGIN, this.switchAccount);
          SDKFacade.eventEmitter.off(LauncherEvents.EVENT_LOGOUT_SUC, this.sdkBackToLogin);
          SDKFacade.eventEmitter.off(LauncherEvents.EVENT_SDK_AUTHCHECK, this.sdkBackToLogin);

          if (this._handlers.length > 0) {
            this._handlers.forEach(function (v) {
              LauncherGlobal.instance.EventEmitter.off(v[0], v[1]);
            });

            this._handlers.length = 0;
          }
        };

        return LauncherScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelLauncher", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LauncherViewMgr.ts", ['cc', './AssetMeta.ts', './ResConst.ts', './LauncherGlobal.ts'], function (exports) {
  var cclegacy, assetManager, error, instantiate, AssetMeta, ResConst, LauncherGlobal;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      error = module.error;
      instantiate = module.instantiate;
    }, function (module) {
      AssetMeta = module.AssetMeta;
    }, function (module) {
      ResConst = module.default;
    }, function (module) {
      LauncherGlobal = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5d979gAAxBOc5R4KbWs21QW", "LauncherViewMgr", undefined);

      var LauncherViewMgr = exports('default', /*#__PURE__*/function () {
        function LauncherViewMgr() {}

        LauncherViewMgr.openView = function openView(url, finish) {
          this.loadPrefab({
            url: url,
            parent: LauncherGlobal.instance.canvasNode.getChildByName("view"),
            finish: finish
          });
        };

        LauncherViewMgr.loadPrefab = function loadPrefab(args) {
          assetManager.getBundle("launcher").load(ResConst.getPrefab(args.url), function (err, res) {
            if (err) {
              error(err);
              return;
            } // 预定的父节点已经销毁，则不需要实例化了


            if (!args.parent || !args.parent.isValid) {
              error("[LauncherViewMgr.loadPrefab: args.parent is undefined or destroyed!");
              return;
            }

            var view = instantiate(res);
            var assetMeta = view.addComponent(AssetMeta);
            assetMeta.add(res);
            view.parent = args.parent;

            if (args.finish) {
              args.finish(view);
            }
          });
        };

        return LauncherViewMgr;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginAgeTips.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ByRichText.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, tween, Component, ByRichText, I18n;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ByRichText = module.default;
    }, function (module) {
      I18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "ddad2ZVffhAmZZivI1s11Ey", "LoginAgeTips", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 适龄提醒
       */

      var LoginAgeTips = exports('LoginAgeTips', (_dec = ccclass('LoginAgeTips'), _dec2 = property(ByRichText), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginAgeTips, _Component);

        function LoginAgeTips() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "richTxt", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoginAgeTips.prototype;

        _proto.onLoad = function onLoad() {
          this.showView();
        };

        _proto.start = function start() {
          this.richTxt.string = I18n.at("launcher/AGE_TIP");
        };

        _proto.showView = function showView() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = 0;
          tween(uiOpacity).to(0.2, {
            opacity: 255
          }).start();
        };

        _proto.onBtnClose = function onBtnClose() {
          var _this2 = this;

          var uiOpacity = this.node.getComponent(UIOpacity);
          tween(uiOpacity).to(0.2, {
            opacity: 255
          }).call(function () {
            _this2.node.destroy();
          }).start();
        };

        return LoginAgeTips;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "richTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginGM.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LauncherLoginManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Component, LauncherLoginManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Component = module.Component;
    }, function (module) {
      LauncherLoginManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "9cc84fCmwpOI5dFqxLRD3Pz", "LoginGM", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginGM = exports('default', (_dec = property(EditBox), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginGM, _Component);

        function LoginGM() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "editIp", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editPort", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editServerId", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "editAccount", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoginGM.prototype;

        _proto.updateInfo = function updateInfo() {
          var selected = LauncherLoginManager.model.getSelServerInfo();
          this.editIp.string = selected.domain;
          this.editPort.string = selected.port.toString();
          this.editServerId.string = selected.serverId.toString();
          this.editAccount.string = LauncherLoginManager.model.account;
        };

        _proto.onEditIp = function onEditIp(target) {
          var selected = LauncherLoginManager.model.getSelServerInfo();

          if (!target.string) {
            target.string = selected.domain;
          }

          selected.domain = target.string;
        };

        _proto.onEditPort = function onEditPort(target) {
          var selected = LauncherLoginManager.model.getSelServerInfo();

          if (!target.string) {
            target.string = selected.port.toString();
          }

          selected.port = parseInt(target.string);
        };

        _proto.onEditServerId = function onEditServerId(target) {
          var selected = LauncherLoginManager.model.getSelServerInfo();

          if (!target.string) {
            target.string = selected.serverId.toString();
          }

          selected.serverId = parseInt(target.string);
        };

        _proto.onEditAccount = function onEditAccount(target) {
          if (!target.string) {
            target.string = LauncherLoginManager.model.account;
          }

          LauncherLoginManager.model.account = target.string;
        };

        return LoginGM;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editIp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editPort", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editServerId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "editAccount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginNoticeView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ByLabel.ts', './ByRichText.ts', './SDKFacade.ts', './LauncherLoginManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, ScrollView, UIOpacity, instantiate, Label, find, UITransform, tween, Component, ByLabel, ByRichText, SDKFacade, SDKType, LauncherLoginManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ScrollView = module.ScrollView;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      Label = module.Label;
      find = module.find;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      ByLabel = module.default;
    }, function (module) {
      ByRichText = module.default;
    }, function (module) {
      SDKFacade = module.default;
      SDKType = module.SDKType;
    }, function (module) {
      LauncherLoginManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "7718e/JPqtJAKZIRm+EWtz1", "LoginNoticeView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginNoticeView = exports('LoginNoticeView', (_dec = ccclass('LoginNoticeView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginNoticeView, _Component);

        function LoginNoticeView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "nodeTag", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeContent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "svContent", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemTag", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemContent", _descriptor5, _assertThisInitialized(_this));

          _this._contentList = [];
          _this._tagList = [];
          _this._tagIndex = [];
          return _this;
        }

        var _proto = LoginNoticeView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = 0;

          if (!LauncherLoginManager.model.getNoticeList()) {
            LauncherLoginManager.reqNotice(function () {
              _this2.display();
            }, function () {
              _this2.display();
            });
          } else {
            this.display();
          }
        };

        _proto.display = function display() {
          if (!this.node || !this.node.isValid) {
            return;
          }

          this.doInitTag();
          this.showView();
        };

        _proto.doInitTag = function doInitTag() {
          this.nodeTag.destroyAllChildren();
          this.nodeContent.destroyAllChildren();
          var notices = SDKFacade.sdkType === SDKType.none ? this.test() : LauncherLoginManager.model.getNoticeList();

          for (var index = 0; index < notices.length; index++) {
            var data = notices[index];
            var itemTag = instantiate(this.itemTag);
            itemTag.active = true;
            itemTag.getComponentInChildren(Label).string = data.tagName;
            itemTag["index"] = index;
            itemTag.getChildByName("highLight").active = index === 0; // itemTag.getChildByName("title").getComponent(Label).color = index === 0 ? new Color("#204350"): new Color("#295068");

            this.nodeTag.addChild(itemTag); //暂时没有tab

            this._tagIndex[index] = this._contentList.length;

            this._tagList.push(itemTag);

            for (var _iterator = _createForOfIteratorHelperLoose(data.element), _step; !(_step = _iterator()).done;) {
              var element = _step.value;
              var itemContent = instantiate(this.itemContent);
              itemContent.active = true; //   find('titleBar/noticeDate', itemContent).getComponent(Label).string = LaunchDateUtil.getDateFormat(data.updatedAt,TIME_FORMAT.MM_D_H_M_1);

              find('titleBar/contentTitle', itemContent).getComponent(ByLabel).string = "\u3010" + element.title + "\u3011";
              itemContent.getComponentInChildren(ByRichText).string = element.content;
              this.nodeContent.addChild(itemContent);

              this._contentList.push(itemContent);
            }
          }
        };

        _proto.onBtnTag = function onBtnTag(event) {
          this.scrollToIdx(event.target.index);

          for (var index = 0; index < this._tagList.length; index++) {
            var node = this._tagList[index];
            node.getChildByName("highLight").active = index === event.target.index; // node.getChildByName("title").getComponent(Label).color = index === event.target.index ? new Color("#204350"): new Color("#295068");
          }
        };

        _proto.getHeight = function getHeight(node) {
          var transformComp = node.getComponent(UITransform);

          if (transformComp) {
            return transformComp.height;
          }

          return 0;
        };

        _proto.scrollToIdx = function scrollToIdx(index) {
          var height = 0;

          for (var i = 0; i < this._contentList.length; i++) {
            if (i >= this._tagIndex[index]) {
              break;
            }

            var nodeContent = this._contentList[i];
            height += this.getHeight(nodeContent);
          }

          if (this.getHeight(this.nodeContent) >= this.getHeight(this.svContent.node)) {
            var percent = 1 - height / this.getHeight(this.nodeContent);
            this.svContent.stopAutoScroll();
            this.svContent.scrollToPercentVertical(percent);
          } else {
            this.svContent.stopAutoScroll();
            this.svContent.scrollToPercentVertical(1);
          }
        };

        _proto.showView = function showView() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          tween(uiOpacity).to(0.2, {
            opacity: 255
          }).start();
        };

        _proto.onBtnClose = function onBtnClose() {
          var _this3 = this;

          var uiOpacity = this.node.getComponent(UIOpacity);
          tween(uiOpacity).to(0.2, {
            opacity: 255
          }).call(function () {
            _this3.node.destroy();
          }).start();
        };

        _proto.test = function test() {
          var _noticeList = [{
            tagName: "公告1",
            top: false,
            updatedAt: 1682242894 * 1000,
            element: [{
              title: "sadsad",
              content: "sadsadxzzc急急急加到即将阿萨德1及啊啊啊啊酷冷至尊我为IQ信息出现在现场王企鹅额行政村自行车撒大声地能重现可转债小客车新年穿裤子先查看现在呢车开着车才能看周星驰你框住内存卡展现出你卡上的做才能开心才能看行政村你开着车可能速度辛苦擦拭的气味辛苦做出纳卡萨达新政策你框住才能看到在内存卡着小脑袋做才能开心在zc急急急加到即将阿萨德1及啊啊啊啊酷冷至尊我为IQ信息出现在现场王企鹅额行政村自行车撒大声地能重现可转债小客车新年穿裤子先查看现在呢车开着车才能看周星驰你框住内存卡展现出你卡上的做才能开心才能看行政村你开着车可能速度辛苦擦拭的气味辛苦做出纳卡萨达新政策你框住才能看到在内存卡着小脑袋做才能开心在zc急急急加到即将阿萨德1及啊啊啊啊酷冷至尊我为IQ信息出现在现场王企鹅额行政村自行车撒大声地能重现可转债小客车新年穿裤子先查看现在呢车开着车才能看周星驰你框住内存卡展现出你卡上的做才能开心才能看行政村你开着车可能速度辛苦擦拭的气味辛苦做出纳卡萨达新政策你框住才能看到在内存卡着小脑袋做才能开心在cxzzc"
            }]
          }, {
            tagName: "公告2",
            top: true,
            updatedAt: 1682242898 * 1000,
            element: [{
              title: "sadsaxzczxcd",
              content: "sadsadasxzc急急急加到即将阿萨德1及啊啊啊啊酷冷至尊我为IQ信息出现在现场王企鹅额行政村自行车撒大声地能重现可转债小客车新年穿裤子先查看现在呢车开着车才能看周星驰你框住内存卡展现出你卡上的做才能开心才能看行政村你开着车可能速度辛苦擦拭的气味辛苦做出纳卡萨达新政策你框住才能看到在内存卡着小脑袋做才能开心在哪xzcxzzc"
            }, {
              title: "sadsad",
              content: "sadsadxzcxzzc"
            }]
          }];
          return _noticeList;
        };

        return LoginNoticeView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeTag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "svContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemTag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginServers.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ByLabel.ts', './LoadingView.ts', './RecycleScroll.ts', './ColorConst2.ts', './I18n.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './ClickStream.ts', './Alert.ts', './LauncherComp.ts', './LauncherLoginManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteAtlas, Sprite, ByLabel, LoadingView, RecycleScroll, ColorEnum, I18n, LauncherEvents, LauncherGlobal, ClickStream, ClickTraceEnum, Alert, LauncherComp, LauncherLoginManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
    }, function (module) {
      ByLabel = module.default;
    }, function (module) {
      LoadingView = module.LoadingView;
    }, function (module) {
      RecycleScroll = module.default;
    }, function (module) {
      ColorEnum = module.ColorEnum;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      LauncherComp = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "15a37rCnIxBfYOvfHU+fzoU", "LoginServers", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginServers = exports('default', (_dec = property(RecycleScroll), _dec2 = property(RecycleScroll), _dec3 = property(SpriteAtlas), ccclass(_class = (_class2 = /*#__PURE__*/function (_LauncherComp) {
        _inheritsLoose(LoginServers, _LauncherComp);

        function LoginServers() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _LauncherComp.call.apply(_LauncherComp, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "listServers", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "listZones", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "atlas", _descriptor3, _assertThisInitialized(_this));

          _this._selTab = -1;
          _this._zoneInfo = void 0;
          _this._serverInfo = void 0;
          _this.spriteFramekeys = ["denglu_label_0001", "denglu_label_0002", "denglu_label_0003", "denglu_label_0004"];
          return _this;
        }

        var _proto = LoginServers.prototype;

        _proto.safeOnCreate = function safeOnCreate() {
          if (LauncherLoginManager.model.getZoneList().length > 1) {
            this.initTab();
          } else {
            this.reqRoles();
          }
        } // 请求已有角色列表
        ;

        _proto.reqRoles = function reqRoles() {
          var _this2 = this;

          LoadingView.show({
            desc: I18n.at("launcher/LOGIN_REQ_SERVER_ZONES")
          });
          LauncherLoginManager.reqRoles(function () {
            if (!_this2.isValid) {
              return;
            }

            _this2.reqRecommendServers();
          }, this.reqFailHandle(function () {
            _this2.reqRoles();
          }));
        } // 请求推荐服
        ;

        _proto.reqRecommendServers = function reqRecommendServers() {
          var _this3 = this;

          LauncherLoginManager.reqRecommendServers(function () {
            if (!_this3.isValid) {
              return;
            }

            _this3.reqZones();
          }, this.reqFailHandle(function () {
            _this3.reqRecommendServers();
          }));
        } // 请求大区列表
        ;

        _proto.reqZones = function reqZones() {
          var _this4 = this;

          LauncherLoginManager.reqZones(function () {
            if (!_this4.isValid) {
              return;
            }

            _this4.initTab();
          }, this.reqFailHandle(function () {
            _this4.reqZones();
          }));
        };

        _proto.reqFailHandle = function reqFailHandle(call) {
          var _this5 = this;

          return function () {
            if (!_this5.isValid) {
              return;
            }

            Alert.show({
              msg: I18n.at("launcher/REQ_LOGIN_DATA_FAILED"),
              func: function func() {
                call();
              }
            });
          };
        }
        /**
         * 初始化大区标签页
         */
        ;

        _proto.initTab = function initTab() {
          this._zoneInfo = LauncherLoginManager.model.getZoneList();
          this.listZones.numItems = this._zoneInfo.length;
          this.onItemZoneClick(0);
        };

        _proto.onItemZonesRender = function onItemZonesRender(index, item) {
          var zoneInfo = this._zoneInfo[index];
          item.getChildByName("nodeLabel").getComponent(ByLabel).string = zoneInfo.zoneName;
        };

        _proto.onItemServersRender = function onItemServersRender(index, item) {
          var serverInfo = this._serverInfo[index];
          item.getChildByName("serverName").getComponent(ByLabel).string = serverInfo.name;

          if (!!serverInfo.state) {
            item.getChildByName("spState").getComponent(Sprite).spriteFrame = this.atlas.getSpriteFrame(this.spriteFramekeys[this.getStatIndex(serverInfo.state)]);
          } else {
            item.getChildByName("spState").getComponent(Sprite).spriteFrame = this.atlas.getSpriteFrame(this.spriteFramekeys[1]);
          }
        }
        /** 区服状态 0 正常，1 繁忙，2 火爆，3 维护，4 待开服 */
        ;

        _proto.getStatIndex = function getStatIndex(state) {
          if (state == 3) {
            return 0;
          } else if (state == 4) {
            return 2;
          } else if (state == 1 || state == 2) {
            return 3;
          } else {
            return 1;
          }
        };

        _proto.refreshZoneItem = function refreshZoneItem() {
          for (var i = 0; i < this.listZones.itemList.length; i++) {
            var item = this.listZones.itemList[i];
            item.getChildByName("spSprite").active = i == this._selTab ? false : true;
            item.getChildByName("spArrow").active = i == this._selTab ? true : false;
            item.getChildByName("nodeLabel").getComponent(ByLabel).colorIndex = i == this._selTab ? ColorEnum.C7 : ColorEnum.C4;
          }
        };

        _proto.onItemZoneClick = function onItemZoneClick(index) {
          var _this6 = this; // 刷新服务器列表信息


          this._selTab = index;
          this.refreshZoneItem();
          this._serverInfo = LauncherLoginManager.model.getServerListByTab(index);

          if (this._serverInfo) {
            LoadingView.hide();
            this.listServers.numItems = this._serverInfo.length;
          } else {
            LoadingView.show({
              desc: I18n.at("launcher/LOGIN_REQ_SERVERS")
            }); // 请求区服信息

            LauncherLoginManager.reqServers(index, function () {
              if (index !== _this6._selTab) {
                return;
              }

              _this6.onItemZoneClick(index);
            }, function () {
              LoadingView.hide();

              if (index !== _this6._selTab) {
                return;
              }

              Alert.show({
                msg: I18n.at("launcher/LOGIN_REQ_SERVERS_FAILED"),
                func: function func() {
                  _this6.onItemZoneClick(index);
                },
                hideCancel: true,
                btnSureTitle: I18n.at("launcher/LOGIN_RETRY")
              });
            });
          }
        };

        _proto.onItemServerClick = function onItemServerClick(index) {
          ClickStream.clickTrace(ClickTraceEnum.SELECT_SERVER_CLICK);
          var serverInfo = this._serverInfo[index];
          LauncherLoginManager.model.setSelServerOriginInfo(serverInfo);
          this.close();
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.UPDATE_SELECTED_SERVER);
        };

        _proto.close = function close() {
          this.node.active = false;
        };

        return LoginServers;
      }(LauncherComp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listServers", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listZones", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './ByButton.ts', './ByLabel.ts', './I18n.ts', './event-util.ts', './SDKFacade.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './LauncherViewMgr.ts', './ClickStream.ts', './Alert.ts', './LauncherComp.ts', './LauncherLoginManager.ts', './LoginGM.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteAtlas, EditBox, DEV, ByButton, ByLabel, Msg, SDKFacade, LauncherEvents, LauncherGlobal, LauncherViewMgr, ClickStream, ClickTraceEnum, LauncherComp, LauncherLoginManager, LoginGM;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      SpriteAtlas = module.SpriteAtlas;
      EditBox = module.EditBox;
    }, function (module) {
      DEV = module.DEV;
    }, function (module) {
      ByButton = module.default;
    }, function (module) {
      ByLabel = module.default;
    }, null, function (module) {
      Msg = module.Msg;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      LauncherViewMgr = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }, null, function (module) {
      LauncherComp = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      LoginGM = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

      cclegacy._RF.push({}, "4a63eyuAQtCg7g4ysFEd+KT", "LoginView", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginView = exports('default', (_dec = property(ByLabel), _dec2 = property(LoginGM), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(SpriteAtlas), _dec7 = property(ByButton), _dec8 = property(Node), _dec9 = property(EditBox), _dec10 = property(EditBox), _dec11 = property(EditBox), _dec12 = Msg(LauncherEvents.UPDATE_SELECTED_SERVER), ccclass(_class = (_class2 = /*#__PURE__*/function (_LauncherComp) {
        _inheritsLoose(LoginView, _LauncherComp);

        function LoginView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _LauncherComp.call.apply(_LauncherComp, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "lblSelectedServer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loginGM", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gmLoginNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nodeLogin", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "stateImg", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "atlas", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnDevTiShen", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "garbageCollectNode", _descriptor8, _assertThisInitialized(_this)); ///////////////////gm 登录////////////////////////


          _initializerDefineProperty(_this, "ebGmAccount", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ebGmPassword", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ebGmSeverId", _descriptor11, _assertThisInitialized(_this));

          _this._loginServers = void 0;
          /**公告 */

          _this._loginNotice = void 0;
          _this.spriteFramekeys = ["denglu_label_0001", "denglu_label_0002", "denglu_label_0003", "denglu_label_0004"];
          _this._garbageTime = 0;
          return _this;
        }

        var _proto = LoginView.prototype;

        _proto.safeOnCreate = function safeOnCreate() {
          // ClickStream.clickTrace(ClickTraceEnum.LOGIN_ENTER);
          this.loginGM.node.active = SDKFacade.isInternalPack() || LauncherLoginManager.model.whiteAccount;
          this.nodeLogin.active = this.loginGM.node.active;
          this.gmLoginNode.active = !SDKFacade.isWxStable() && LauncherLoginManager.model.whiteAccount;
          this.garbageCollectNode.active = SDKFacade.isMiniGame();
          this.ebGmSeverId.string = "95001";

          this._updateSelectedServer();

          this.btnDevTiShen.node.active = DEV;
          ClickStream.clickTrace(ClickTraceEnum.SELECT_SERVER_OPEN);
        };

        _proto._updateSelectedServer = function _updateSelectedServer() {
          var selectServer = LauncherLoginManager.model.getSelServerInfo();
          this.lblSelectedServer.string = selectServer.name;

          if (!!selectServer.state) {
            this.stateImg && (this.stateImg.spriteFrame = this.atlas.getSpriteFrame(this.spriteFramekeys[this.getStatIndex(selectServer.state)]));
          } else {
            this.stateImg && (this.stateImg.spriteFrame = this.atlas.getSpriteFrame(this.spriteFramekeys[1]));
          }

          if (SDKFacade.isInternalPack()) {
            this.loginGM.updateInfo();
          }
        }
        /** 区服状态 0 正常，1 繁忙，2 火爆，3 维护，4 待开服 */
        ;

        _proto.getStatIndex = function getStatIndex(state) {
          if (state == 3) {
            return 0;
          } else if (state == 4) {
            return 2;
          } else if (state == 1 || state == 2) {
            return 3;
          } else {
            return 1;
          }
        };

        _proto.onBtnStart = function onBtnStart() {
          ClickStream.clickTrace(ClickTraceEnum.CLICK_START_GAME);
          LauncherLoginManager.model.isGmLogin = false;
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.LOGIN_FINISH);
        };

        _proto.onBtnSelectServer = function onBtnSelectServer() {
          var _this2 = this;

          ClickStream.clickTrace(ClickTraceEnum.SELECT_SERVER_CLICK); // 打开选服界面

          if (this._loginServers) {
            this._loginServers.active = true;
          } else {
            LauncherViewMgr.openView("LoginServers", function (view) {
              _this2._loginServers = view;
            });
          }
        }; //微信清理缓存


        _proto.garbageCollect = function garbageCollect() {} // garbageCollect(): void {
        //     if (globalThis.wx) {
        //         wx.triggerGC();
        //         wx.triggerGC();
        //         wx.triggerGC();
        //     } else {
        //         cc.sys.garbageCollect();
        //     }
        // }

        /**公告 */
        ;

        _proto.onBtnNotice = function onBtnNotice() {
          var _this3 = this;

          LauncherViewMgr.openView("LoginNoticeV", function (view) {
            _this3._loginNotice = view;
          });
        }
        /**适龄提示 */
        ;

        _proto.onBtnAgeTip = function onBtnAgeTip() {
          LauncherViewMgr.openView("LoginAgeTips");
        };

        _proto._handleLab = function _handleLab() {
          this.btnDevTiShen.label.string = globalThis["DevTiShen"] ? "提审状态:开" : "提审状态:关";
        };

        _proto.onClickTiShen = function onClickTiShen() {
          return;
        }
        /**gm登录 */
        ;

        _proto.gmLogin = function gmLogin() {
          var _this4 = this;

          var gmAccount = this.ebGmAccount.string;
          var gmPassW = this.ebGmPassword.string;
          var gmServerId = "95001"; //this.ebGmSeverId.string;

          if (gmAccount != "" && gmPassW != "" && gmServerId != "") {
            LauncherLoginManager.reqGmServers(gmServerId, function () {
              LauncherLoginManager.model.setGmData(_this4.ebGmPassword.string, _this4.ebGmAccount.string, +gmServerId);
              LauncherLoginManager.model.isGmLogin = true;
              LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.LOGIN_FINISH);
            });
          }
        };

        return LoginView;
      }(LauncherComp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblSelectedServer", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loginGM", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gmLoginNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeLogin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stateImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "atlas", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnDevTiShen", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "garbageCollectNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ebGmAccount", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ebGmPassword", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ebGmSeverId", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "_updateSelectedServer", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "_updateSelectedServer"), _class2.prototype)), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniGameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SDKFacade.ts', './LauncherLoginManager.ts'], function (exports) {
  var _createClass, sys, log, cclegacy, SDKFacade, LauncherLoginManager;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      sys = module.sys;
      log = module.log;
      cclegacy = module.cclegacy;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dbd19726rFOJaMvi06dI6sd", "MiniGameManager", undefined);

      var MiniGameManager = exports('default', new ( /*#__PURE__*/function () {
        function MiniGameManager() {
          this._networkType = void 0;
          this._phoneInfo = null;
        }

        var _proto = MiniGameManager.prototype;

        _proto.createRole = function createRole() {
          if (SDKFacade.isMiniGame()) {
            if (SDKFacade.isWxSsPlat()) {
              var serverId = LauncherLoginManager.model.getSelServerId();
              var playerModel = GameApp.Md.PlayerModel;
              var obj = {
                dsid: serverId + "",
                dsname: LauncherLoginManager.model.getSelServerInfo().name,
                drid: playerModel.playerId,
                drname: playerModel.name,
                drlevel: "1",
                drctime: Math.ceil(playerModel.createTime / 1000).toString()
              };
              window.sqmsdk.createRole(obj);
            }
          }
        }
        /** sdk 进入游戏 */
        ;

        _proto.enterGame = function enterGame() {
          if (SDKFacade.isMiniGame()) {
            if (window.sqmsdk) {
              var playerInfo = GameApp.Md.PlayerModel;
              var obj = {
                dsid: GameApp.loginMgr.serverId + "",
                dsname: LauncherLoginManager.model.getSelServerInfo().name,
                drid: playerInfo.playerId.toString(),
                drname: playerInfo.name,
                drlevel: playerInfo.level,
                drctime: Math.ceil(GameApp.Md.PlayerModel.createTime / 1000).toString()
              };
              window.sqmsdk.enterGame(obj);
            }
          }
        }
        /**三七手游sdk 登录返回 */
        ;

        _proto.handleSsWechatParams = function handleSsWechatParams(param) {
          var _this = this;

          SDKFacade.imei = param.openid;
          LauncherLoginManager.model.pid = param.pid;
          LauncherLoginManager.model.gid = param.gid;
          LauncherLoginManager.model.token = param.token;
          LauncherLoginManager.model.sdk_time = param.time;
          LauncherLoginManager.model.user = param.user;
          LauncherLoginManager.model.params = param.params;
          wx.getNetworkType({
            success: function success(res) {
              _this._networkType = res.networkType;
            }
          });
        };

        _proto.getPhoneSystemInfo = function getPhoneSystemInfo() {
          if (this._phoneInfo == null) {
            this._phoneInfo = wx.getSystemInfoSync();
          }

          return this._phoneInfo;
        };

        _proto.pay = function pay(msg) {
          if (SDKFacade.isMiniGame()) {
            if (window.sqmsdk) {
              var playerInfo = GameApp.Md.PlayerModel;
              var payParam = {
                dsid: GameApp.loginMgr.serverId,
                //服务器iD
                dsname: GameApp.loginMgr.serverName,
                //服务器名字
                drid: playerInfo.playerId.toString(),
                //角色ID
                drname: playerInfo.name,
                //角色名称
                drlevel: playerInfo.level + "",
                //角色等级
                doid: msg.orderNo,
                //订单ID
                dpt: msg.subject,
                //商品名称
                productid: msg.rechargeItemId.toString(),
                // 唯一商品id
                dcn: "钻石",
                //货币名称
                dmoney: msg.money + "",
                //订单金额
                dratio: "10",
                //兑换比率
                dext: msg.ext //扩张回调字段

              };
              window.sqmsdk.pay(payParam, function () {
                console.log("回调成功");
              });
            }
          }
        }
        /** 请求sdk login */
        ;

        _proto.wxLogin = function wxLogin(loginSuccCb, loginFailCb) {
          if (SDKFacade.isWxSsPlat()) {
            //新增 三手sdk对接 login接口需要传params
            var osPid = "442";

            if (sys.os == sys.OS.IOS) {
              osPid = "484";
            } else {
              osPid = "442";
            }

            var params = {
              pid: osPid,
              gid: SDKFacade.gid
            };
            window.sqmsdk.login(params, function (result) {
              console.log("sdk登录成功");
              loginSuccCb && loginSuccCb.call(undefined, result);
            }, function () {
              loginFailCb && loginFailCb.call(undefined);
            });
          }
        } //激励视频广告接入（创建广告视频）

        /** sdk 观看广告 */
        ;

        _proto.showVideoAd = function showVideoAd(adId, param, callback, target) {
          window.sqmsdk.createRewardedVideoAd({
            adUnitId: adId,
            multiton: true,
            onClose: function onClose(res) {
              log("广告结束:" + res.isEnded);

              if (callback) {
                log("广告结束:" + res.isEnded);
                var result = res && res.isEnded || res === undefined;
                callback.call(target, adId, param, result);
              }
            }
          }, function (res) {
            log("创建广告回调信息--->", res.msg);

            if (res.state == 1) {
              log("创建广告回调，显示广告");
              window.sqmsdk.showRewardedVideoAd({
                adUnitId: adId
              }, function (state, msg) {
                log("show 广告回调状态--->", state, ",回调信息", msg);
              });
            } else {
              log("创建广告失败");
            }
          });
        };

        _createClass(MiniGameManager, [{
          key: "networkType",
          get: function get() {
            return this._networkType;
          },
          set: function set(value) {
            this._networkType = value;
          }
        }]);

        return MiniGameManager;
      }())());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeAPIMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SDKFacade.ts', './LauncherEvents.ts', './LauncherGlobal.ts'], function (exports) {
  var _createClass, cclegacy, log, SDKFacade, LauncherEvents, LauncherGlobal;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d69ffzCwaROvJDwKWt+c6Yg", "NativeAPIMgr", undefined);

      var NativeAPIMgr = exports('default', /*#__PURE__*/function () {
        function NativeAPIMgr() {}

        var _proto = NativeAPIMgr.prototype;
        /**
         * MTP检测状态
         */

        _proto.__MTP_DECTECT_RESULT__ = function __MTP_DECTECT_RESULT__(plain_) {//暂时没有用到
        }
        /**
         * MTP心跳
         * 过长时间没有心跳，可视作mtp被剥，通知需要通知服务器
         */
        ;

        _proto.__MTP_HEART_BEAT__ = function __MTP_HEART_BEAT__(plain_) {}
        /**
         * 网络环境发生变化
         * @param networkState "WIFI" "MOBILE" "NONETWORK"
         */
        ;

        _proto.__NETWORK_STATE_CHANGE__ = function __NETWORK_STATE_CHANGE__(networkState) {}
        /**
         *
         * @param batLev 0-100的电量
         * @param batStatus 2表示正在充电，5表示电量满，其他可以认为是未充电状态
         */
        ;

        _proto.__GAME_BATTERY_CHANGE__ = function __GAME_BATTERY_CHANGE__(batLev, batStatus) {
          log("================", batLev, batStatus);
        }
        /**
         * 手机屏幕方向发生改变
         * @param orientState 1,home在右 2,home在左
         */
        ;

        _proto.__GAME_ORIENT_CHANGE__ = function __GAME_ORIENT_CHANGE__(orientState) {
          log("================", orientState);
          SDKFacade.eventEmitter.emit(LauncherEvents.EVENT_ORIENT_CHANGE, orientState);
        };

        _proto.__GAME_SDK_INIT_SUCCESS__ = function __GAME_SDK_INIT_SUCCESS__() {
          log("========__GAME_SDK_INIT_SUCCESS__========");
          SDKFacade.eventEmitter.emit(LauncherEvents.EVENT_SDK_INIT);
        }
        /**
         * SDK登陆成功
         */
        ;

        _proto.__GAME_LOGIN_SUCCESS__ = function __GAME_LOGIN_SUCCESS__() {
          var bridge = SDKFacade.bridge;
          console.log("================  SDK登陆成功", bridge.sdkGetGID(), bridge.sdkGetPID(), bridge.sdkGetClientID(), bridge.sdkGetToken(), bridge.getIMEI());
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.EVENT_LOGIN_SUC);
        }
        /**
         * 登陆失败
         */
        ;

        _proto.__GAME_LOGIN_FAIL__ = function __GAME_LOGIN_FAIL__(msg) {
          console.log("================  SDK登陆失败", msg);
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.EVENT_LOGIN_FAIL, msg);
        }
        /**
         * 登出成功
         */
        ;

        _proto.__GAME_LOGOUT_SUCCESS__ = function __GAME_LOGOUT_SUCCESS__() {
          console.log("================  SDK登出成功"); // LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.EVENT_LOGOUT_SUC);

          SDKFacade.eventEmitter.emit(LauncherEvents.EVENT_LOGOUT_SUC);
        }
        /**
         * 登出失败
         */
        ;

        _proto.__GAME_LOGOUT_FAIL__ = function __GAME_LOGOUT_FAIL__(msg) {
          //暂时无处理
          log("================  SDK登出失败", msg);
        }
        /**
         * SDK支付返回(暂时没用到)
         */
        ;

        _proto.__GAME_SDK_PAYBACK__ = function __GAME_SDK_PAYBACK__(msg) {
          log("================  支付返回", msg);
          SDKFacade.eventEmitter.emit(LauncherEvents.EVENT_SDK_PAYBACK);
        } //---------usdk特有begin

        /**
         * SDK绑定手机返回
         */
        ;

        _proto.__GAME_SDK_BINDPHONE__ = function __GAME_SDK_BINDPHONE__(code) {
          log("================  绑定手机返回", code);
        } //---------usdk特有end
        //---------rsdk特有begin

        /**
        * 获取商品项信息成功
        */
        ;

        _proto.__GAME_REQ_SKU_DETAIL_SUCCESS__ = function __GAME_REQ_SKU_DETAIL_SUCCESS__() {}
        /**
        * 获取商品项信息失败
        */
        ;

        _proto.__GAME_REQ_SKU_DETAIL_FAIL__ = function __GAME_REQ_SKU_DETAIL_FAIL__(msg) {}
        /**
        * 获取facebook的好友信息成功
        */
        ;

        _proto.__GAME_REQ_FB_FRIENDS_SUC__ = function __GAME_REQ_FB_FRIENDS_SUC__() {}
        /**
        * 获取facebook的好友信息失败
        */
        ;

        _proto.__GAME_REQ_FB_FRIENDS_FAIL__ = function __GAME_REQ_FB_FRIENDS_FAIL__(msg) {}
        /**
        * 邀请facebook好友进入游戏成功
        */
        ;

        _proto.__GAME_INVITE_FB_FRIEND_SUC__ = function __GAME_INVITE_FB_FRIEND_SUC__() {}
        /**
        * 邀请facebook好友进入游戏失败
        */
        ;

        _proto.__GAME_INVITE_FB_FRIEND_FAIL__ = function __GAME_INVITE_FB_FRIEND_FAIL__(msg) {}
        /**
         * 首次安装用户获取被邀请信息
         * 获取非自然安装渠道数据
         * A用户朋友圈分享一条特定链接，B用户用这条链接跳转去google play并完成首次安装。
         * 当B用户首次打开App时，可以通过这个回调，获取到A的分享链接内容
         * adShareInfo回传的字段示例
         *     "af_adset" = 111222;
         *     "af_channel" = mage;
         *     "af_click_lookback" = 7d;
         *     "af_dp" = "gm99amlimlink://";
         *     "af_status" = "Non-organic";
         *     campaign = None;
         *     "click_time" = "2019-03-11 08:09:46.571";
         *     "cost_cents_USD" = 0;
         *     enenen = lalala;
         *     "install_time" = "2019-03-11 08:10:00.190";
         *     "is_first_launch" = 1;
         *     "media_source" = limumu;
         *     "orig_cost" = "0.0";
         *     userID = limumu;
         */
        ;

        _proto.__GAME_AD_SHARE_CALLBACK__ = function __GAME_AD_SHARE_CALLBACK__(shareInfo) {}
        /**
        * 分享成功
        */
        ;

        _proto.__GAME_SHARE_SUC__ = function __GAME_SHARE_SUC__() {}
        /**
        * 分享失败
        */
        ;

        _proto.__GAME_SHARE_FAIL__ = function __GAME_SHARE_FAIL__(msg) {} //---------rsdk特有end

        /**
         * GME消息返回
         */
        ;

        _proto.__GME_EVENT__ = function __GME_EVENT__(eventType, jsonData) {}
        /**适龄提示iconUrl */
        ;

        _proto.__SQSDK_GAME_AGEICON__ = function __SQSDK_GAME_AGEICON__(iconUrl) {
          console.log("适龄提示icon：", iconUrl);
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.EVENT_SDK_AGEICON, iconUrl);
        }
        /**玩家退服提示：返回到登录界面 */
        ;

        _proto.__SQSDK_GAME_AUTHRESULTCHECK__ = function __SQSDK_GAME_AUTHRESULTCHECK__() {
          SDKFacade.eventEmitter.emit(LauncherEvents.EVENT_SDK_AUTHCHECK);
        } //msdk返回登录界面并要调用changeAccount
        ;

        _proto.__SQSDK_GAME_BACKTOLOGIN__ = function __SQSDK_GAME_BACKTOLOGIN__() {
          LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.EVENT_SDK_BACKTOLOGIN);
        };

        _createClass(NativeAPIMgr, null, [{
          key: "ins",
          get: function get() {
            if (!this._instance) {
              this._instance = new NativeAPIMgr();
            }

            return this._instance;
          }
        }]);

        return NativeAPIMgr;
      }());
      NativeAPIMgr._instance = void 0;

      (function () {
        globalThis["NativeAPIMgr"] = NativeAPIMgr;
      })();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeDownloader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, warn, log, native, error, assetManager;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      warn = module.warn;
      log = module.log;
      native = module.native;
      error = module.error;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f36aaWZ7+5Kh4yTv2p6QDWf", "NativeDownloader", undefined);

      var DownloadEvent = exports('DownloadEvent', /*#__PURE__*/function (DownloadEvent) {
        DownloadEvent["onSuccess"] = "onSuccess";
        DownloadEvent["onProgress"] = "onProgress";
        DownloadEvent["onError"] = "onError";
        DownloadEvent["onRetryFailed"] = "onRetryFailed";
        DownloadEvent["onRetry"] = "onRetry";
        return DownloadEvent;
      }({}));
      var NativeDownloader = exports('default', /*#__PURE__*/function () {
        function NativeDownloader(config) {
          var _this = this;

          this._downloader = void 0;
          this._handlers = new Map();
          /** remotePath 资源服地址，不包括CDN地址， storagePath 本地储存地址 */

          this._toDownload = new Map();
          this._fileValidations = new Map(); // remote-path, file-validation

          this._downloading = new Map();
          this._maxDownloadCount = 0;
          this._retryCount = new Map();
          this._maxRetryCount = 0;
          this._fileDownloadInfo = new Map();
          this._downloadedFileMd5Info = new Map();
          this._tempFilePostfix = void 0;
          this._downloader = new native.Downloader({
            countOfMaxProcessingTasks: config.maxDownloadCount,
            timeoutInSeconds: config.downloadTimeout,
            tempFileNameSuffix: config.tempFilePostfix
          });

          this._downloader.onSuccess = function (task) {
            log("this._downloader.onSuccess " + task.requestURL);

            _this.onDownloadEvent(DownloadEvent.onSuccess, task.identifier, task.storagePath, {});
          };

          this._downloader.onProgress = function (task, bytesReceived, totalBytesReceived, totalBytesExpected) {
            // log(`this._downloader.onProgress ${task.requestURL}`);
            _this.onDownloadEvent(DownloadEvent.onProgress, task.identifier, task.storagePath, {
              cur: bytesReceived,
              total: totalBytesReceived,
              expected: totalBytesExpected
            });
          };

          this._downloader.onError = function (task, errorCode, errorCodeInternal, errorStr) {
            log("this._downloader.onError " + task.requestURL);

            _this.onDownloadEvent(DownloadEvent.onError, task.identifier, task.storagePath, {
              code: errorCode,
              icode: errorCodeInternal,
              str: errorStr
            });
          };

          this._maxDownloadCount = config.maxDownloadCount;
          this._maxRetryCount = config.maxRetryCount;
          this._tempFilePostfix = config.tempFilePostfix;
          this.initDownloader();
        }

        var _proto = NativeDownloader.prototype;

        _proto.addDownloadFile = function addDownloadFile(remotePath, localPath, fileValidation) {
          if (this._toDownload.has(remotePath)) {
            warn(remotePath + " is in to-download list!");
            return;
          }

          this._toDownload.set(remotePath, localPath);

          if (fileValidation) {
            this._fileValidations.set(remotePath, fileValidation);

            this._fileDownloadInfo.set(remotePath, {
              total: 0,
              expected: fileValidation.fileSize
            });
          } else {
            this._fileDownloadInfo.set(remotePath, {
              total: 0,
              expected: 0
            });
          }

          this.updateDownload();
        };

        _proto.addDownloadFileList = function addDownloadFileList(fileList, fileValidations) {
          var itFile = null;

          for (var i = 0; i < fileList.length; ++i) {
            itFile = fileList[i];

            if (this._toDownload.get(itFile[0])) {
              warn(itFile[0] + " is in to-download list!");
            }

            this._toDownload.set(itFile[0], itFile[1]);

            if (fileValidations && fileValidations.get(itFile[0])) {
              this._fileValidations.set(itFile[0], fileValidations.get(itFile[0]));

              this._fileDownloadInfo.set(itFile[0], {
                total: 0,
                expected: fileValidations.get(itFile[0]).fileSize
              });
            } else {
              this._fileDownloadInfo.set(itFile[0], {
                total: 0,
                expected: 0
              });
            }
          }

          this.updateDownload();
        };

        _proto.registerHandler = function registerHandler(remotePath, handle) {
          if (this._handlers.has(remotePath)) {
            return;
          }

          this._handlers.set(remotePath, handle);
        };

        _proto.registerDefaultHandler = function registerDefaultHandler(handle) {
          if (this._handlers.has("__default__")) {
            return;
          }

          this._handlers.set("__default__", handle);
        };

        _proto.unregisterHandler = function unregisterHandler(remotePath) {
          if (this._handlers.has(remotePath)) {
            this._handlers["delete"](remotePath);
          }
        };

        _proto.unregisterDefaultHandler = function unregisterDefaultHandler() {
          if (this._handlers.has("__default__")) {
            this._handlers["delete"]("__default__");
          }
        }
        /** 只有下载完全完成，并且downloade不再需要时，才需要移除system处理 */
        ;

        _proto.unregisterAllHandler = function unregisterAllHandler(withSystem) {
          if (withSystem === void 0) {
            withSystem = false;
          }

          this._handlers.clear();

          if (!withSystem) {
            this.initDownloader();
          }
        };

        _proto.retryDownload = function retryDownload(fileList) {
          for (var _iterator = _createForOfIteratorHelperLoose(fileList), _step; !(_step = _iterator()).done;) {
            var file = _step.value;
            this.cleanRetryCount(file[0]);

            if (this.addRetryCount(file[0])) {
              this._toDownload.set(file[0], file[1]);
            }
          }

          this.updateDownload();
        };

        _proto.initDownloader = function initDownloader() {
          var _this2 = this;

          this.registerHandler("__system__", {
            onSuccess: function onSuccess(remotePath, localPath, extraData) {
              // log(`download file ${remotePath} success!`);
              if (_this2._downloading.get(remotePath)) {
                _this2._downloading["delete"](remotePath);
              } else {
                log(remotePath + " is not in download list! [success]");
              }

              var ret = true;

              var fileValidation = _this2._fileValidations.get(remotePath);

              if (!_this2.makeSureFile(localPath, fileValidation)) {
                // not success.
                native.fileUtils.removeFile(localPath);

                if (_this2.addRetryCount(remotePath)) {
                  _this2.onDownloadEvent(DownloadEvent.onRetry, remotePath, localPath, extraData);

                  _this2._toDownload.set(remotePath, localPath);
                } else {
                  _this2.onDownloadEvent(DownloadEvent.onRetryFailed, remotePath, localPath);
                }

                ret = false;
              } else {
                _this2.cleanRetryCount(remotePath);
              }

              _this2.updateDownload();

              if (ret) {
                extraData.fileMd5 = _this2._downloadedFileMd5Info.get(localPath);
              }

              return ret;
            },
            onProgress: function onProgress(remotePath, localPath, extraData) {
              // log(`download file ${remotePath}: ${extraData.cur}/${extraData.total}:${extraData.expected}`);
              _this2._fileDownloadInfo.get(remotePath).total = extraData.total;
              _this2._fileDownloadInfo.get(remotePath).expected = extraData.expected;
              return true;
            },
            onError: function onError(remotePath, localPath, extraData) {
              error("download file " + remotePath + " failed: " + extraData.str + "! [" + extraData.code + ":" + extraData.icode + "]");

              if (extraData.icode === 416) {
                native.fileUtils.removeFile("" + localPath + _this2._tempFilePostfix);
              } else if (extraData.icode === 404) {
                _this2._downloading["delete"](remotePath);

                _this2.cleanRetryCount(remotePath); // cc.game.end();
                // return;

              } else if (extraData.icode >= 500 && extraData.icode <= 599) {
                _this2._downloading["delete"](remotePath);

                _this2.cleanRetryCount(remotePath); // cc.game.end();
                // return;

              }

              if (!_this2._downloading.has(remotePath)) {
                log(remotePath + " is not in download list! [error]"); // return;
              }

              var downloadCacheInfo = _this2._fileDownloadInfo.get(remotePath);

              if (_this2.addRetryCount(remotePath)) {
                _this2.onDownloadEvent(DownloadEvent.onRetry, remotePath, localPath, {
                  total: downloadCacheInfo ? downloadCacheInfo.total : 0,
                  expected: downloadCacheInfo ? downloadCacheInfo.expected : 0
                });

                _this2._toDownload.set(remotePath, localPath);

                _this2._downloading["delete"](remotePath);
              } else {
                _this2._downloading["delete"](remotePath);

                _this2.onDownloadEvent(DownloadEvent.onRetryFailed, remotePath, localPath, {
                  total: downloadCacheInfo ? downloadCacheInfo.total : 0,
                  expected: downloadCacheInfo ? downloadCacheInfo.expected : 0
                });
              }

              _this2._fileDownloadInfo.get(remotePath).total = 0;

              _this2.updateDownload();

              return true;
            },
            onRetry: function onRetry(remotePath, localPath, extraData) {
              log("onDownloadEvent onRetry " + remotePath + " " + localPath + " " + extraData.total + " " + extraData.expected);
              return true;
            }
          });
        };

        _proto.onDownloadEvent = function onDownloadEvent(eventName, remotePath, localPath, extraData) {
          var handler = this._handlers.get("__system__");

          var ret = true;

          if (handler && handler[eventName]) {
            ret = handler[eventName](remotePath, localPath, extraData);

            if (!ret) {
              return;
            }
          }

          handler = this._handlers.get(remotePath);

          if (!handler) {
            handler = this._handlers.get("__default__");
          }

          if (handler && handler[eventName]) {
            handler[eventName](remotePath, localPath, extraData);
          }
        };

        _proto.updateDownload = function updateDownload() {
          if (this._downloading.size >= this._maxDownloadCount) {
            return;
          }

          var downloadCount = this._downloading.size;
          var toMove = [];

          for (var _iterator2 = _createForOfIteratorHelperLoose(this._toDownload), _step2; !(_step2 = _iterator2()).done;) {
            var v = _step2.value;

            if (downloadCount >= this._maxDownloadCount) {
              break;
            }

            toMove.push(v);
            ++downloadCount;
          }

          var itMove = null;
          var patchFileName = "";

          for (var i = 0; i < toMove.length; ++i) {
            itMove = toMove[i];

            this._downloading.set(itMove[0], itMove[1]);

            this._toDownload["delete"](itMove[0]);

            patchFileName = "" + itMove[1] + this._tempFilePostfix;

            if (native.fileUtils.isFileExist(patchFileName)) {
              native.fileUtils.removeFile(patchFileName);
            }

            var requestUrl = assetManager.byAM.getCdnByIndex(this.getRetryCount(itMove[0])) + itMove[0];

            this._downloader.createDownloadTask(requestUrl, itMove[1], itMove[0]);

            log("download " + itMove[0] + " -> " + itMove[1]);
          }
        };

        _proto.addRetryCount = function addRetryCount(remotePath) {
          var retryCount = this._retryCount.get(remotePath);

          if (retryCount) {
            this._retryCount.set(remotePath, ++retryCount);

            if (retryCount >= this._maxRetryCount) {
              return false;
            }
          } else {
            this._retryCount.set(remotePath, 1);
          }

          return true;
        };

        _proto.cleanRetryCount = function cleanRetryCount(remotePath) {
          if (this._retryCount.get(remotePath)) {
            this._retryCount["delete"](remotePath);
          }
        };

        _proto.getRetryCount = function getRetryCount(remotePath) {
          return this._retryCount.get(remotePath) || 0;
        };

        _proto.makeSureFile = function makeSureFile(absFileName, fileValidation) {
          if (!native.fileUtils.isAbsolutePath(absFileName)) {
            // may be a bug.
            var msg = absFileName + " is not an absolute path!";
            warn(msg); // Helper.report("GameDownloader.makeSureFile", msg);
          } // 至少要檢查文件是否存在，內容是否為空


          if (!native.fileUtils.isFileExist(absFileName)) {
            var _msg = absFileName + " is not exist!";

            warn(_msg); // Helper.report("GameDownloader.makeSureFile", msg);

            return false;
          }

          if (native.fileUtils.getFileSize(absFileName) <= 0) {
            var _msg2 = absFileName + " is empty!";

            warn(_msg2); // Helper.report("GameDownloader.makeSureFile", msg);

            return false;
          }

          if (fileValidation) {
            // quick mode.
            // if (fileValidation.fileSize) {
            //     let curFileSize = native.fileUtils.getFileSize(absFileName);
            //     if (curFileSize > 0 && curFileSize != fileValidation.fileSize) {
            //         warn(`${absFileName} has wrong file size! [${curFileSize}:${fileValidation.fileSize}]`);
            //         native.fileUtils.removeFile(absFileName);
            //         return false;
            //     }
            // }
            if (fileValidation.fileMd5) {
              var curFileMd5 = native.fileUtils.getFileMd5(absFileName);

              if (curFileMd5 !== fileValidation.fileMd5) {
                warn(absFileName + " has wrong md5! [" + curFileMd5 + ":" + fileValidation.fileMd5 + "]");
                return false;
              }

              this._downloadedFileMd5Info.set(absFileName, curFileMd5);
            }
          }

          return true;
        };

        _proto.checkAllFinish = function checkAllFinish() {
          return this._toDownload.size === 0 && this._downloading.size === 0;
        };

        _proto.downloadFileAsync = /*#__PURE__*/function () {
          var _downloadFileAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(remotePath, storagePath) {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.registerHandler(remotePath, {
                      onSuccess: function onSuccess(remotePath, localPath, extraData) {
                        _this3.unregisterHandler(remotePath);

                        resolve(true);
                        return true;
                      },
                      onRetryFailed: function onRetryFailed(remotePath, localPath, extraData) {
                        _this3.unregisterHandler(remotePath);

                        resolve(false);
                        return true;
                      }
                    });

                    _this3.addDownloadFile(remotePath, storagePath);
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function downloadFileAsync(_x, _x2) {
            return _downloadFileAsync.apply(this, arguments);
          }

          return downloadFileAsync;
        }();

        return NativeDownloader;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeGameUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TransitionView.ts', './I18n.ts', './LauncherDefine.ts', './ResConst.ts', './SDKFacade.ts', './HttpHelper.ts', './Utils2.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './ClickStream.ts', './Alert.ts', './NativeDownloader.ts', './NativeUpdateHelper.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, native, log, sys, assetManager, TransitionView, I18n, NATIVE_LOCAL_MANIFEST_FILE, NATIVE_UPDATE_NOT_COMPLETE, TRANSITION_VIEW_PERCENT_100, ResConst, SDKFacade, HttpHelper, HttpRespType, Utils, LauncherEvents, LauncherGlobal, ClickStream, ClickTraceEnum, Alert, NativeDownloader, NativeUpdateHelper;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
      log = module.log;
      sys = module.sys;
      assetManager = module.assetManager;
    }, function (module) {
      TransitionView = module.default;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      NATIVE_LOCAL_MANIFEST_FILE = module.NATIVE_LOCAL_MANIFEST_FILE;
      NATIVE_UPDATE_NOT_COMPLETE = module.NATIVE_UPDATE_NOT_COMPLETE;
      TRANSITION_VIEW_PERCENT_100 = module.TRANSITION_VIEW_PERCENT_100;
    }, function (module) {
      ResConst = module.default;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      HttpHelper = module.default;
      HttpRespType = module.HttpRespType;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      NativeDownloader = module.default;
    }, function (module) {
      NativeUpdateHelper = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ef3baMHHWRC8KmFCz06wxLR", "NativeGameUpdate", undefined);
      /** 热更进度，某个步骤总的进度显示是下个步骤的值减去当前步骤值 */


      var NativeGameUpdatePercent = {
        CheckRemoteVersion: 0,
        GetRemoteManifest: 3,
        CheckNeedDownload: 10,
        Downloading: 15,
        Finish: 100
      };
      var NativeGameUpdate = exports('default', /*#__PURE__*/function () {
        function NativeGameUpdate() {
          this._downloader = void 0;
          this._localManifest = {};
          this._updateLocalManifestTimer = void 0;
          this._toDownloadInfo = {};
          this._localManifestPath = void 0; // 下载显示

          this._curDownloadFileSize = 0;
          this._totalDownloadFileSize = 0;
          this._lastDownloadFileSize = 0;
          this._lastDownloadCallTime = 0;
          this._gameRemoteManifest = void 0;
          this._resourceRemoteManifest = void 0;
        }

        var _proto = NativeGameUpdate.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var _yield$this$_getServe, gameVersion, resourcesVersion, gameManifest, resourcesManifest, localManifest, toValidations, toDownloads, relativePathMap, addUpdateFile, checkManifest, failedFiles;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("\u5F00\u59CBGame\u66F4\u65B0\u6D41\u7A0B");
                  TransitionView.instance.node.once(TRANSITION_VIEW_PERCENT_100, function () {
                    assetManager.byAM.initManifest([_this._gameRemoteManifest, _this._resourceRemoteManifest]);
                    LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.NATIVE_GAME_UPDATE_SUCCESS);
                    TransitionView.instance.hide();
                  });

                  if (!!LauncherGlobal.instance.loginLogicNode) {
                    LauncherGlobal.instance.loginLogicNode.active = false;
                  }

                  TransitionView.instance.show();
                  TransitionView.instance.updateMsg(NativeGameUpdatePercent.CheckRemoteVersion, I18n.at("launcher/GAME_VERSION_CHECK")); // 获取当前服务器对应版本

                  _context.next = 7;
                  return this._getServerVersionAsync();

                case 7:
                  _yield$this$_getServe = _context.sent;
                  gameVersion = _yield$this$_getServe.gameVersion;
                  resourcesVersion = _yield$this$_getServe.resourcesVersion;

                  if (!(!gameVersion || !resourcesVersion)) {
                    _context.next = 15;
                    break;
                  }

                  log("弹窗提示版本错误");
                  ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_FAIL);
                  Alert.show({
                    msg: I18n.at("launcher/GAME_REMOTE_VERSION_ERROR"),
                    hideCancel: true,
                    func: function func() {// todo 支持步骤重试
                    }
                  });
                  return _context.abrupt("return");

                case 15:
                  TransitionView.instance.updateMsg(NativeGameUpdatePercent.GetRemoteManifest, "获取远程manifest");
                  log("GameUpdate gameVersion:" + gameVersion + ",resourcesVersion:" + resourcesVersion); // 初始化Downloader

                  this._downloader = new NativeDownloader({
                    maxDownloadCount: 5,
                    maxRetryCount: 5,
                    downloadTimeout: 30,
                    tempFilePostfix: ".patch"
                  }); // 下载manifest

                  _context.next = 20;
                  return this._loadRemoteManifestAsync("game", gameVersion);

                case 20:
                  gameManifest = _context.sent;
                  this._gameRemoteManifest = gameManifest;

                  if (gameManifest) {
                    _context.next = 27;
                    break;
                  }

                  ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_FAIL2);
                  warn("弹窗提示 game manifest请求错误");
                  Alert.show({
                    msg: I18n.at("launcher/GAME_MANIFEST_ERROR"),
                    hideCancel: true,
                    func: function func() {// todo 支持步骤重试
                    }
                  });
                  return _context.abrupt("return");

                case 27:
                  _context.next = 29;
                  return this._loadRemoteManifestAsync("resources", resourcesVersion);

                case 29:
                  resourcesManifest = _context.sent;
                  this._resourceRemoteManifest = resourcesManifest;

                  if (resourcesManifest) {
                    _context.next = 36;
                    break;
                  }

                  ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_FAIL3);
                  warn("弹窗提示 resources manifest请求错误");
                  Alert.show({
                    msg: I18n.at("launcher/RESOURCES_MANIFEST_ERROR"),
                    hideCancel: true,
                    func: function func() {// todo 支持步骤重试
                    }
                  });
                  return _context.abrupt("return");

                case 36:
                  // 检查是否有本地manifest文件，没有的话要把pack里的读取合并
                  localManifest = this._loadLocalManifest();
                  this._localManifest = localManifest;

                  if (localManifest) {
                    _context.next = 43;
                    break;
                  }

                  ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_FAIL4);
                  warn("弹窗提示 本地manifest加载失败");
                  Alert.show({
                    msg: I18n.at("launcher/LOCAL_MANIFEST_ERROR"),
                    hideCancel: true,
                    func: function func() {// todo 不应该出现的错误，如果不是更新逻辑有问题，就是IO问题，直接重启游戏试试
                    }
                  });
                  return _context.abrupt("return");

                case 43:
                  // 检查获取需要更新的文件列表
                  // #region
                  TransitionView.instance.updateMsg(NativeGameUpdatePercent.CheckNeedDownload, "检查热更文件");
                  toValidations = new Map();
                  toDownloads = [];
                  relativePathMap = new Map();

                  addUpdateFile = function addUpdateFile(relativePath, remoteInfo, sub) {
                    var remotePath = NativeUpdateHelper.getUpdateRemotePath(relativePath, remoteInfo.ver, sub);
                    toDownloads.push([remotePath, NativeUpdateHelper.getUpdateLocalPath(relativePath, sub)]);
                    relativePathMap.set(remotePath, relativePath);
                    toValidations.set(remotePath, {
                      fileMd5: remoteInfo.md5,
                      fileSize: remoteInfo.size
                    });
                    _this._toDownloadInfo[remotePath] = [relativePath, remoteInfo];
                    _this._toDownloadInfo[remotePath][1].sub = sub;
                    _this._totalDownloadFileSize += remoteInfo.size; // updatePercent(++dealCount, tFilesNew);
                  };

                  checkManifest = function checkManifest(manifest) {
                    for (var relativePath in manifest.files) {
                      if (Object.prototype.hasOwnProperty.call(manifest.files, relativePath)) {
                        var remoteInfo = manifest.files[relativePath];

                        if (!SDKFacade.packageConfig["native"].updateBeforeGame) {
                          // 包配置里不是游戏前全更新（也就是极小包，进游戏时要做到极小更新），只更新必须的最小资源，先只检查代码，后续再添加资源配置做筛选
                          if (!relativePath.startsWith("assets/src_game")) {
                            continue;
                          }
                        } // todo 部分需要提前更新的resources，在这里做个列表进行处理


                        if (manifest.sub !== "game") {
                          continue;
                        }

                        if (!localManifest[relativePath] || localManifest[relativePath].ver !== remoteInfo.ver) {
                          addUpdateFile(relativePath, remoteInfo, manifest.sub);
                        }
                      }
                    }
                  };

                  checkManifest(gameManifest);
                  checkManifest(resourcesManifest);
                  log("GameUpdate toDownloads.length: " + toDownloads.length); // #endregion

                  if (!(toDownloads.length === 0)) {
                    _context.next = 56;
                    break;
                  }

                  log("game \u4E0D\u9700\u8981\u66F4\u65B0");
                  TransitionView.instance.updateMsg(NativeGameUpdatePercent.Finish, "game热更完成");
                  return _context.abrupt("return");

                case 56:
                  //热更上报
                  if (SDKFacade.isAndroidNative()) {
                    SDKFacade.bridge.gameHotfixStart();
                  } // #region


                  TransitionView.instance.updateMsg(NativeGameUpdatePercent.Downloading, "热更下载中");

                  this._downloader.unregisterAllHandler();

                  failedFiles = [];

                  this._downloader.registerDefaultHandler({
                    onSuccess: function onSuccess(remotePath, localPath, extraData) {
                      log("[NativeGameUpdate] onSuccess: " + localPath);
                      _this._localManifest[relativePathMap.get(remotePath)] = _this._toDownloadInfo[remotePath][1];

                      _this.increaseFileProgress();

                      return true;
                    },
                    onProgress: function onProgress(remotePath, localPath, extraData) {
                      // log(`[NativeGameUpdate] onRetry: ${localPath}`);
                      if (!!extraData.cur) {
                        _this._curDownloadFileSize += extraData.cur;
                      }

                      return true;
                    },
                    onRetry: function onRetry(remotePath, localPath, extraData) {
                      log("[NativeGameUpdate] onRetry: " + localPath);

                      if (!!extraData.total) {
                        _this._curDownloadFileSize -= extraData.total;
                      }

                      return true;
                    },
                    onRetryFailed: function onRetryFailed(remotePath, localPath, extraData) {
                      log("[NativeGameUpdate] onRetryFailed: " + localPath);
                      failedFiles.push([remotePath, localPath]);
                      LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.NATIVE_UPDATE_ERROR); // todo 增加错误码记录错误步骤、弹窗显示等

                      return true;
                    }
                  }); // #endregion


                  log("\u5F00\u59CB\u70ED\u66F4: toDownloads: " + toDownloads.length);

                  this._downloader.addDownloadFileList(toDownloads, toValidations);

                  this._lastDownloadCallTime = Date.now();
                  TransitionView.instance.schedule(function () {
                    var nowTime = Date.now();
                    var speed = Math.max((_this._curDownloadFileSize - _this._lastDownloadFileSize) / 1024 / (nowTime - _this._lastDownloadCallTime) * 1000, 0);
                    var percent = _this._totalDownloadFileSize !== 0 ? _this._curDownloadFileSize / _this._totalDownloadFileSize : 0; // 1024*1024=1048576
                    // cc.log(`percent:${percent},total:${this._curDownloadFileSize},expected:${this._totalDownloadFileSize},speed:${speed},cur:${(this._curDownloadFileSize - this._lastDownloadFileSize)},time:${nowTime-this._lastDownloadCallTime}`);

                    _this._lastDownloadFileSize = _this._curDownloadFileSize;
                    _this._lastDownloadCallTime = nowTime;
                    console.log("更新进度---->", NativeGameUpdatePercent.Downloading + (NativeGameUpdatePercent.Finish - NativeGameUpdatePercent.Downloading) * percent);
                    TransitionView.instance.updateMsg(NativeGameUpdatePercent.Downloading + (NativeGameUpdatePercent.Finish - NativeGameUpdatePercent.Downloading) * percent, Utils.formatString(I18n.at("launcher/NATIVE_UPDATE_DOWNING"), (_this._curDownloadFileSize / 1048576).toFixed(2), (_this._totalDownloadFileSize / 1048576).toFixed(2), speed.toFixed(0)));
                  }, 0.5);

                  this._downloader.addDownloadFileList(toDownloads);

                  sys.localStorage.setItem(NATIVE_UPDATE_NOT_COMPLETE, 1);
                // 只要有下载更新，就必须进行一次全校验，避免这部分文件没写入manifest而出错

                case 67:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }();

        _proto._getServerVersionAsync = /*#__PURE__*/function () {
          var _getServerVersionAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var gameVersion, resourcesVersion, gameVerResult, resVerResult;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gameVersion = "";
                  resourcesVersion = "";
                  {
                    _context2.next = 7;
                    break;
                  }

                case 7:
                  _context2.next = 9;
                  return HttpHelper.handleHttpGetAsync({
                    url: "game/version.json",
                    isInternalUrl: true,
                    type: HttpRespType.JSON
                  });

                case 9:
                  gameVerResult = _context2.sent;

                  if (gameVerResult.resp) {
                    _context2.next = 12;
                    break;
                  }

                  return _context2.abrupt("return", {
                    gameVersion: gameVersion,
                    resourcesVersion: resourcesVersion
                  });

                case 12:
                  gameVersion = gameVerResult.resp.version;
                  _context2.next = 15;
                  return HttpHelper.handleHttpGetAsync({
                    url: "resources/version.json",
                    isInternalUrl: true,
                    type: HttpRespType.JSON
                  });

                case 15:
                  resVerResult = _context2.sent;

                  if (resVerResult.resp) {
                    _context2.next = 18;
                    break;
                  }

                  return _context2.abrupt("return", {
                    gameVersion: gameVersion,
                    resourcesVersion: resourcesVersion
                  });

                case 18:
                  resourcesVersion = resVerResult.resp.version;

                case 19:
                  return _context2.abrupt("return", {
                    gameVersion: gameVersion,
                    resourcesVersion: resourcesVersion
                  });

                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));

          function _getServerVersionAsync() {
            return _getServerVersionAsync2.apply(this, arguments);
          }

          return _getServerVersionAsync;
        }()
        /** 这个文件是加密的，需要用downloader去下载，不能直接通过HTTP请求 */
        ;

        _proto._loadRemoteManifestAsync = /*#__PURE__*/function () {
          var _loadRemoteManifestAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(part, version) {
            var remoteManifestPath, remoteManifestStoragePath, remoteManifestResult, remoteManifest;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  remoteManifestPath = part + "/" + version + "/manifest-" + part + ".json";
                  remoteManifestStoragePath = native.fileUtils.getWritablePath() + remoteManifestPath;
                  _context3.next = 4;
                  return this._downloader.downloadFileAsync(remoteManifestPath, remoteManifestStoragePath);

                case 4:
                  remoteManifestResult = _context3.sent;

                  if (remoteManifestResult) {
                    _context3.next = 7;
                    break;
                  }

                  return _context3.abrupt("return", null);

                case 7:
                  remoteManifest = NativeUpdateHelper.loadLocalJson(remoteManifestStoragePath);
                  return _context3.abrupt("return", remoteManifest);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function _loadRemoteManifestAsync(_x, _x2) {
            return _loadRemoteManifestAsync2.apply(this, arguments);
          }

          return _loadRemoteManifestAsync;
        }();

        _proto._loadLocalManifest = function _loadLocalManifest() {
          var manifest;
          var localManifestPath = ResConst.pathJoin(native.fileUtils.getWritablePath(), NATIVE_LOCAL_MANIFEST_FILE);
          this._localManifestPath = localManifestPath;

          if (!native.fileUtils.isFileExist(localManifestPath)) {
            log("第一次更新，需要初始化本地文件manifest信息");
            ["game", "resources"].forEach(function (part) {
              var filePath = native.fileUtils.fullPathForFilename("manifest-" + part + ".json");
              var data = NativeUpdateHelper.loadLocalJson(filePath);

              if (!manifest) {
                manifest = {};
              }

              if (data) {
                for (var relativePath in data.files) {
                  if (Object.prototype.hasOwnProperty.call(data.files, relativePath)) {
                    var element = data.files[relativePath];
                    manifest[relativePath] = {
                      size: element.size,
                      md5: element.md5,
                      ver: element.ver,
                      sub: part,
                      isPack: true
                    };
                  }
                }
              }
            });
            native.fileUtils.writeStringToFile(JSON.stringify(manifest, null, 4), localManifestPath);
          } else {
            manifest = NativeUpdateHelper.loadLocalJson(localManifestPath);
          }

          return manifest;
        };

        _proto.increaseFileProgress = function increaseFileProgress() {
          if (this._downloader.checkAllFinish()) {
            this._updateLocalManifestImpl();

            sys.localStorage.setItem(NATIVE_UPDATE_NOT_COMPLETE, 0); //热更上报

            if (SDKFacade.isAndroidNative()) {
              SDKFacade.bridge.gameHotfixSuccess();
            }

            TransitionView.instance.unscheduleAllCallbacks();
            TransitionView.instance.updateMsg(NativeGameUpdatePercent.Finish, "game热更完成");
          } else {
            this.updateLocalManifest();
          }
        };

        _proto.updateLocalManifest = function updateLocalManifest() {
          var _this2 = this;

          if (!this._updateLocalManifestTimer) {
            this._updateLocalManifestTimer = setTimeout(function () {
              _this2._updateLocalManifestImpl();
            }, 2000);
          }
        };

        _proto._updateLocalManifestImpl = function _updateLocalManifestImpl() {
          native.fileUtils.writeStringToFile(JSON.stringify(this._localManifest, null, 4), this._localManifestPath);
          this._updateLocalManifestTimer = undefined;
        };

        return NativeGameUpdate;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeLauncherUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadingView.ts', './TransitionView.ts', './I18n.ts', './LauncherDefine.ts', './HttpHelper.ts', './Utils2.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './ErrorHandle.ts', './NativeDownloader.ts', './NativeUpdateHelper.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, game, log, native, LoadingView, TransitionView, I18n, ErrorCode, TRANSITION_VIEW_PERCENT_100, HttpHelper, HttpRespType, Utils, LauncherEvents, LauncherGlobal, ErrorHandle, ErrorHandleWithRestart, NativeDownloader, NativeUpdateHelper;

  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      log = module.log;
      native = module.native;
    }, function (module) {
      LoadingView = module.LoadingView;
    }, function (module) {
      TransitionView = module.default;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      ErrorCode = module.ErrorCode;
      TRANSITION_VIEW_PERCENT_100 = module.TRANSITION_VIEW_PERCENT_100;
    }, function (module) {
      HttpHelper = module.default;
      HttpRespType = module.HttpRespType;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      ErrorHandle = module.ErrorHandle;
      ErrorHandleWithRestart = module.ErrorHandleWithRestart;
    }, function (module) {
      NativeDownloader = module.default;
    }, function (module) {
      NativeUpdateHelper = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5834dhUHz5NbLEtkJeF/g5O", "NativeLauncherUpdate", undefined);
      /** 热更进度，某个步骤总的进度显示是下个步骤的值减去当前步骤值 */


      var NativeLauncherUpdatePercent = {
        CheckRemoteVersion: 0,
        GetRemoteManifest: 3,
        CheckNeedDownload: 10,
        Downloading: 15,
        Finish: 100
      };
      var NativeLauncherUpdate = exports('default', /*#__PURE__*/function () {
        function NativeLauncherUpdate() {
          this._downloader = void 0; // 下载显示

          this._curDownloadFileSize = 0;
          this._totalDownloadFileSize = 0;
          this._lastDownloadFileSize = 0;
          this._lastDownloadCallTime = 0;
        }

        var _proto = NativeLauncherUpdate.prototype;

        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var localVersion, localVersionRecord, content, versionInfo, _yield$HttpHelper$han, remoteVersionResp, remoteVersionReason, remoteManifestPath, remoteManifestStoragePath, remoteManifestResult, remoteManifest, toDownloads, toValidations, tempDir, relativePath, element, remotePath, failedFiles;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  log("\u5F00\u59CBlauncher\u70ED\u66F4\u6D41\u7A0B");
                  TransitionView.instance.node.once(TRANSITION_VIEW_PERCENT_100, function () {
                    LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.NATIVE_LAUNCHER_UPDATE_SUCCESS);
                    TransitionView.instance.hide();
                  });
                  TransitionView.instance.show();
                  TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.CheckRemoteVersion, I18n.at("launcher/LAUNCHER_VERSION_CHECK"));
                  localVersion = "";
                  localVersionRecord = "version.json";

                  if (native.fileUtils.isFileExist(localVersionRecord)) {
                    content = native.fileUtils.getStringFromFile(localVersionRecord);
                    versionInfo = JSON.parse(content);
                    localVersion = versionInfo.inner_version;
                    LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.UPDATE_LAUNCHER_VERSION, "launcher: " + versionInfo.version);
                  } // 请求远端launcher版本


                  _context.next = 9;
                  return HttpHelper.handleHttpGetAsync({
                    url: "launcher/version.json",
                    isInternalUrl: true,
                    type: HttpRespType.JSON
                  });

                case 9:
                  _yield$HttpHelper$han = _context.sent;
                  remoteVersionResp = _yield$HttpHelper$han.resp;
                  remoteVersionReason = _yield$HttpHelper$han.reason;

                  if (!remoteVersionReason) {
                    _context.next = 15;
                    break;
                  }

                  ErrorHandleWithRestart(ErrorCode.NATIVE_LAUNCHER_REQ_REMOTE_VERSION_FAIL);
                  return _context.abrupt("return");

                case 15:
                  if (!(remoteVersionResp.inner_version === localVersion)) {
                    _context.next = 19;
                    break;
                  }

                  log("launcher\u4E0D\u9700\u8981\u66F4\u65B0\uFF0C\u8FDB\u5165\u4E0B\u4E00\u6D41\u7A0B " + remoteVersionResp.inner_version);

                  this._finish();

                  return _context.abrupt("return");

                case 19:
                  TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.GetRemoteManifest, "获取远程manifest");
                  this._downloader = new NativeDownloader({
                    maxDownloadCount: 5,
                    maxRetryCount: 5,
                    downloadTimeout: 30,
                    tempFilePostfix: ".patch"
                  }); // 请求远端launcher manifest信息    todo 这个文件是加密了的，不能直接HTTP请求

                  remoteManifestPath = "launcher/" + remoteVersionResp.version + "/manifest-launcher.json";
                  remoteManifestStoragePath = native.fileUtils.getWritablePath() + remoteManifestPath;
                  _context.next = 25;
                  return this._downloader.downloadFileAsync(remoteManifestPath, remoteManifestStoragePath);

                case 25:
                  remoteManifestResult = _context.sent;

                  if (remoteManifestResult) {
                    _context.next = 29;
                    break;
                  }

                  ErrorHandleWithRestart(ErrorCode.NATIVE_LAUNCHER_REQ_REMOTE_MANIFEST_FAIL);
                  return _context.abrupt("return");

                case 29:
                  remoteManifest = NativeUpdateHelper.loadLocalJson(remoteManifestStoragePath);

                  if (remoteManifest) {
                    _context.next = 33;
                    break;
                  }

                  ErrorHandleWithRestart(ErrorCode.NATIVE_LAUNCHER_REQ_REMOTE_MANIFEST_FAIL, 1);
                  return _context.abrupt("return");

                case 33:
                  TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.CheckNeedDownload, "检查热更文件");
                  toDownloads = [];
                  toValidations = new Map();
                  tempDir = native.fileUtils.getWritablePath() + "temp/launcher/";

                  for (relativePath in remoteManifest.files) {
                    if (Object.prototype.hasOwnProperty.call(remoteManifest.files, relativePath)) {
                      element = remoteManifest.files[relativePath];

                      if (native.fileUtils.getFileMd5(relativePath) !== element.md5) {
                        remotePath = NativeUpdateHelper.getUpdateRemotePath(relativePath, element.ver, "launcher");
                        toDownloads.push([remotePath, tempDir + relativePath, relativePath]);
                        toValidations.set(remotePath, {
                          fileMd5: element.md5,
                          fileSize: element.size
                        });
                        this._totalDownloadFileSize += element.size;
                      }
                    }
                  }

                  if (!(toDownloads.length === 0)) {
                    _context.next = 41;
                    break;
                  }

                  this._finish();

                  return _context.abrupt("return");

                case 41:
                  TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.Downloading, "热更下载中");
                  NativeUpdateHelper.ensureDir(tempDir, true);
                  failedFiles = [];

                  this._downloader.registerDefaultHandler({
                    onSuccess: function onSuccess(remotePath, localPath, extraData) {
                      log("[NativeLauncherUpdate] onSuccess: " + localPath);

                      if (_this._downloader.checkAllFinish()) {
                        log("全部下载完成----->");
                        TransitionView.instance.unscheduleAllCallbacks();
                        var launcherDir = native.fileUtils.getWritablePath() + "launcher/";
                        NativeUpdateHelper.ensureDir(launcherDir);

                        for (var index = 0; index < toDownloads.length; index++) {
                          var tempPath = toDownloads[index][1];
                          var newPath = tempPath.replace("/temp/", "/");
                          var newDir = newPath.slice(0, newPath.lastIndexOf("/"));
                          NativeUpdateHelper.ensureDir(newDir);

                          if (!native.fileUtils.renameFile(tempPath, newPath)) {
                            log("\u590D\u5236\u5931\u8D25\uFF01\uFF01 " + tempPath + " -> " + newPath);
                          }
                        }

                        log("复制到热更目录完成,即将重启"); // 写入

                        native.fileUtils.writeStringToFile(JSON.stringify({
                          localVersion: remoteVersionResp.inner_version,
                          version: remoteVersionResp.version
                        }), localVersionRecord);
                        TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.Finish, "launcher热更完成");

                        _this._nativeRestart();
                      }

                      return true;
                    },
                    onProgress: function onProgress(remotePath, localPath, extraData) {
                      // log(`[NativeLauncherUpdate] onProgress: ${localPath}`);
                      if (!!extraData.cur) {
                        _this._curDownloadFileSize += extraData.cur;
                      }

                      return true;
                    },
                    onRetry: function onRetry(remotePath, localPath, extraData) {
                      log("[NativeLauncherUpdate] onRetry: " + localPath);

                      if (!!extraData.total) {
                        _this._curDownloadFileSize -= extraData.total;
                      }

                      return true;
                    },
                    onRetryFailed: function onRetryFailed(remotePath, localPath, extraData) {
                      log("[NativeLauncherUpdate] onRetryFailed: " + localPath);
                      failedFiles.push([remotePath, localPath]);
                      ErrorHandle(ErrorCode.NATIVE_UPDATE_DOWNLOAD_FAIL, function () {
                        _this._downloader.retryDownload(failedFiles);

                        failedFiles.length = 0;
                      });
                      return true;
                    }
                  });

                  log("\u5F00\u59CB\u70ED\u66F4: toDownloads: " + toDownloads.length);

                  this._downloader.addDownloadFileList(toDownloads, toValidations);

                  this._lastDownloadCallTime = Date.now();
                  TransitionView.instance.schedule(function () {
                    var nowTime = Date.now();
                    var speed = Math.max((_this._curDownloadFileSize - _this._lastDownloadFileSize) / 1024 / (nowTime - _this._lastDownloadCallTime) * 1000, 0);
                    var percent = _this._totalDownloadFileSize !== 0 ? _this._curDownloadFileSize / _this._totalDownloadFileSize : 0; // 1024*1024=1048576
                    // cc.log(`percent:${percent},total:${this._curDownloadFileSize},expected:${this._totalDownloadFileSize},speed:${speed},cur:${(this._curDownloadFileSize - this._lastDownloadFileSize)},time:${nowTime-this._lastDownloadCallTime}`);

                    _this._lastDownloadFileSize = _this._curDownloadFileSize;
                    _this._lastDownloadCallTime = nowTime;
                    console.log("\u70ED\u66F4\u8FDB\u5EA6: " + _this._curDownloadFileSize + ",\u603B\u6D88\u8017\uFF1A" + _this._totalDownloadFileSize);
                    TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.Downloading + (NativeLauncherUpdatePercent.Finish - NativeLauncherUpdatePercent.Downloading) * percent, Utils.formatString(I18n.at("launcher/NATIVE_UPDATE_DOWNING"), (_this._curDownloadFileSize / 1048576).toFixed(2), (_this._totalDownloadFileSize / 1048576).toFixed(2), speed.toFixed(0)));
                  }, 0.5);

                case 49:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function start() {
            return _start.apply(this, arguments);
          }

          return start;
        }();

        _proto._nativeRestart = function _nativeRestart() {
          LoadingView.show({
            desc: "准备重启进行更新"
          });
          setTimeout(function () {
            game.restart();
          }, 2000);
        } // private increaseFileProgress(): void {
        //     if (this._downloader.checkAllFinish()) {
        //         LauncherGlobal.instance.EventEmitter.emit(LauncherEvents.NATIVE_GAME_UPDATE_SUCCESS);
        //     }
        // }
        ;

        _proto._finish = function _finish() {
          TransitionView.instance.updateMsg(NativeLauncherUpdatePercent.Finish, "launcher热更完成");
        };

        return NativeLauncherUpdate;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NativeUpdateHelper.ts", ['cc', './ResConst.ts'], function (exports) {
  var cclegacy, native, error, ResConst;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
      error = module.error;
    }, function (module) {
      ResConst = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "801b7BHbIFCtZkKPnL037nW", "NativeUpdateHelper", undefined);

      var NativeUpdateHelper = exports('default', /*#__PURE__*/function () {
        function NativeUpdateHelper() {}

        NativeUpdateHelper.ensureDir = function ensureDir(path, clean) {
          if (clean === void 0) {
            clean = false;
          }

          path = path.replace(/\\\\/g, "/");

          if (!path.endsWith("/")) {
            path += "/";
          }

          if (native.fileUtils.isDirectoryExist(path)) {
            if (clean) {
              native.fileUtils.removeDirectory(path);
            } else {
              return true;
            }
          }

          if (!native.fileUtils.createDirectory(path)) {
            error("createDirectory " + path + " error!!");
            return false;
          }

          return true;
        };

        NativeUpdateHelper.loadLocalJson = function loadLocalJson(path) {
          if (!native.fileUtils.isFileExist(path)) {
            return undefined;
          }

          try {
            var content = native.fileUtils.getStringFromFile(path);
            var json = JSON.parse(content);
            return json;
          } catch (err) {
            error(err);
            return undefined;
          }
        };

        NativeUpdateHelper.getUpdateLocalPath = function getUpdateLocalPath(fileName, type) {
          return ResConst.pathJoin(native.fileUtils.getWritablePath(), type, fileName);
        };

        NativeUpdateHelper.getUpdateRemotePath = function getUpdateRemotePath(fileName, version, type) {
          return ResConst.pathJoin(type, version, fileName);
        };

        return NativeUpdateHelper;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PackageConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa3f84jVXFGz4VdGQaIHdKQ", "PackageConfig", undefined);
      /**
       * 包配置
       * 内网预览、小游戏、H5会读取这个配置
       * TODO 小游戏、H5发布前应读取发布配置修改这个文件（减少一次包配置的网络请求）
       * 原生平台发布会打入package-config.json到包内，运行时读取以包内配置为准。
       */


      var defaultPackageConfig = {
        /** 资源服域名 */
        remoteRoot: "http://10.11.162.87:8083/",

        /** 资源服备用域名 */
        remoteRootBak: "http://10.11.162.87:8083/",

        /** 奥利奥登录域名 */
        oreoLoginDomain: "https://oreoapis.bmdlgc.lansors.com/",
        plat: "37wan",
        gamePlat: "37wan",
        sdkType: "none",
        subSdkType: "none",
        gmPackage: true,

        /** 远程资源目录相对于资源服目录的路径 */
        resourcesPath: ""
      };
      var wechatPackageConfig = {
        /** 代理服务器 */
        serverProxy: "gamewx.bmdlgc.lansors.com",

        /** 代理服务器端口号 */
        serverPort: "8004",
        serverId: 99001,

        /** 包版本号 */
        packVersion: "0.0.0",

        /** 远程资源版本号 */
        webResVer: 0
      };
      var WechatPackageConfig = exports('WechatPackageConfig', wechatPackageConfig);
      var DefaultPackageConfig = exports('DefaultPackageConfig', defaultPackageConfig);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureEnterGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './LauncherLoginManager.ts', './ClickStream.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, log, assetManager, error, director, Msg, ProcedureBase, SDKFacade, LauncherEvents, LauncherGlobal, LauncherLoginManager, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      assetManager = module.assetManager;
      error = module.error;
      director = module.director;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cd49ala7t9EgKFn+VNSfBJ6", "ProcedureEnterGame", undefined);

      var ProcedureEnterGame = exports('default', (_dec = Msg(LauncherEvents.CHECK_LOAD_GAMESCENE), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureEnterGame, _ProcedureBase);

        function ProcedureEnterGame() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ProcedureBase.call.apply(_ProcedureBase, [this].concat(args)) || this;
          _this._start = false;
          return _this;
        }

        var _proto = ProcedureEnterGame.prototype;

        _proto.onCommonStart = function onCommonStart() {
          var _this2 = this;

          ClickStream.clickTrace(ClickTraceEnum.START_LOAD_SRC_GAME);
          log("loadBundle src_game:" + Date.now());
          assetManager.loadBundle("src_game", function (err, res) {
            if (err) {
              error(err);
              return;
            }

            ClickStream.clickTrace(ClickTraceEnum.LOAD_SRC_GAME_BUNDLE);
            log("loadBundle src_game finish");
            log("loadBundle game");
            assetManager.loadBundle("game", function (err, res) {
              if (err) {
                error(err);
                return;
              }

              ClickStream.clickTrace(ClickTraceEnum.LOAD_GAME_BUNDLE);
              log("loadBundle game finish");
              log("loadScene \u4E1A\u52A1\u573A\u666F");
              res.loadScene(LauncherLoginManager.model.testScene ? "TestScene" : "MainScene", function (err, res) {
                if (err) {
                  error(err);
                  return;
                }

                log("loadScene \u4E1A\u52A1\u573A\u666F finish");
                director.runScene(res, undefined, function () {
                  if (SDKFacade.isAndroidNative()) {
                    SDKFacade.bridge.gameInitSuccess();
                  }

                  _this2.finish();
                });
              });
            });
          });
        };

        _proto.checkLoadGameScene = function checkLoadGameScene() {
          var _this3 = this;

          var gameBundle = LauncherGlobal.instance.gameBundle;

          if (gameBundle && this._start) {
            gameBundle.loadScene("MainScene", function (err, res) {
              if (err) {
                error(err);
                return;
              }

              log("loadScene \u4E1A\u52A1\u573A\u666F finish:" + Date.now());
              director.runScene(res, undefined, function () {
                if (SDKFacade.isAndroidNative()) {
                  SDKFacade.bridge.gameInitSuccess();
                }

                _this3.finish();
              });
            });
          }
        };

        return ProcedureEnterGame;
      }(ProcedureBase), _applyDecoratedDescriptor(_class.prototype, "checkLoadGameScene", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "checkLoadGameScene"), _class.prototype), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureFinishLauncher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProcedureBase.ts', './LauncherGlobal.ts'], function (exports) {
  var _inheritsLoose, cclegacy, ProcedureBase, LauncherGlobal;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      LauncherGlobal = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f4452LLPpNs4IRanxKQRf/", "ProcedureFinishLauncher", undefined);

      var ProcedureFinishLauncher = exports('default', /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureFinishLauncher, _ProcedureBase);

        function ProcedureFinishLauncher() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureFinishLauncher.prototype;

        _proto.onCommonStart = function onCommonStart() {
          LauncherGlobal.destroy();
          this.finish();
        };

        return ProcedureFinishLauncher;
      }(ProcedureBase));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureGameUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './LauncherEvents.ts', './NativeGameUpdate.ts', './ClickStream.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, log, Msg, ProcedureBase, DistributeType, SDKFacade, LauncherEvents, NativeGameUpdate, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      DistributeType = module.DistributeType;
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      NativeGameUpdate = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fe3danbNoNBEJaJXyjxlakr", "ProcedureGameUpdate", undefined);

      var ProcedureGameUpdate = exports('default', (_dec = Msg(LauncherEvents.NATIVE_GAME_UPDATE_SUCCESS), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureGameUpdate, _ProcedureBase);

        function ProcedureGameUpdate() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureGameUpdate.prototype;

        _proto.onNativeStart = function onNativeStart() {
          if (![DistributeType.AndroidNative, DistributeType.IOSNative].includes(SDKFacade.distributeType)) {
            this.finish();
            return;
          }

          log("start GameUpdate!");
          ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_CHECK);
          var updater = new NativeGameUpdate();
          updater.start();
        };

        _proto.onWebStart = function onWebStart() {
          // H5 只需要修改game bundle版本、处理resources版本信息
          this.finish();
        };

        _proto.onMiniGameStart = function onMiniGameStart() {
          ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_CHECK);
          this.finish();
        };

        _proto.onNativeUpdateSuccess = function onNativeUpdateSuccess() {
          ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_GAMEUPDATE_SUC);
          this.finish();
        };

        return ProcedureGameUpdate;
      }(ProcedureBase), _applyDecoratedDescriptor(_class.prototype, "onNativeUpdateSuccess", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onNativeUpdateSuccess"), _class.prototype), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureLaunch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './LauncherDefine.ts', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './HttpHelper.ts', './LauncherEvents.ts', './PackageConfig.ts', './LauncherGlobal.ts', './Alert.ts', './ClickStream.ts', './ErrorHandle.ts', './ProcedureEnterGame.ts', './ProcedureSDKLogin.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, assetManager, native, game, log, I18n, ErrorCode, Msg, ProcedureBase, SDKFacade, SDKType, HttpHelper, HttpRespType, LauncherEvents, DefaultPackageConfig, WechatPackageConfig, LauncherGlobal, Alert, ClickStream, ClickTraceEnum, ErrorHandleWithRestart, ProcedureEnterGame, ProcedureSDKLogin;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      native = module.native;
      game = module.game;
      log = module.log;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      ErrorCode = module.ErrorCode;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      SDKFacade = module.default;
      SDKType = module.SDKType;
    }, function (module) {
      HttpHelper = module.default;
      HttpRespType = module.HttpRespType;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      DefaultPackageConfig = module.DefaultPackageConfig;
      WechatPackageConfig = module.WechatPackageConfig;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }, function (module) {
      ErrorHandleWithRestart = module.ErrorHandleWithRestart;
    }, function (module) {
      ProcedureEnterGame = module.default;
    }, function (module) {
      ProcedureSDKLogin = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class;

      cclegacy._RF.push({}, "d2c0bTUuQJJIZfBXBdgK9z6", "ProcedureLaunch", undefined);

      var ProcedureLaunch = exports('default', (_dec = Msg(LauncherEvents.ENTER_GAME), _dec2 = Msg(LauncherEvents.LAUNCHER_UPDATE), _dec3 = Msg(LauncherEvents.SKIP_LAUNCHER), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureLaunch, _ProcedureBase);

        function ProcedureLaunch() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ProcedureBase.call.apply(_ProcedureBase, [this].concat(args)) || this;
          _this.tishenflagRetryCount = 0;
          _this._tishenReady = false;
          return _this;
        }

        var _proto = ProcedureLaunch.prototype;

        _proto.onCommonStart = function onCommonStart() {
          // 读取包配置
          SDKFacade.packageConfig = DefaultPackageConfig;
        };

        _proto.onCommonStartLast = function onCommonStartLast() {
          // 加载launcher i18n
          assetManager.getBundle("launcher").load("i18n/zh_launcher", function (err, res) {
            I18n.loadSubData("launcher", res.json);
          });

          if (SDKFacade.isMiniGame()) {
            SDKFacade.sdkType = SDKType.sqmsdk;
            this.loadTishenFlag();
          } else if (SDKFacade.isInternalDev() || SDKFacade.isNative()) {
            var remoteCDNs = [SDKFacade.packageConfig.remoteRoot];

            if (SDKFacade.packageConfig.remoteRootBak) {
              remoteCDNs.push(SDKFacade.packageConfig.remoteRootBak);
            }

            assetManager.byAM.init({}, remoteCDNs, SDKFacade.packageConfig.resourcesPath); // CDN地址

            this.finish();
          }
        } //提审配置
        ;

        _proto.getReviewVersion = function getReviewVersion(isBak) {
          if (isBak === void 0) {
            isBak = false;
          }

          if (isBak) {
            return "https://resbak.bmdlgc.lansors.com/oreo_oss/prod/KBXg41iC7SXXe16nzjye/door_keeper/reviewversion.json";
          } else {
            return "https://res.bmdlgc.lansors.com/oreo_oss/prod/KBXg41iC7SXXe16nzjye/door_keeper/reviewversion.json";
          }
        };

        _proto.loadTishenFlag = function loadTishenFlag() {
          var _this2 = this; // let retryTimes = 0;
          // let bankRetryTimes = 0;


          var totalRetryCounts = 0;

          var load = function load(isBak) {
            if (isBak === void 0) {
              isBak = false;
            }

            var relUrl = _this2.getReviewVersion(isBak);

            assetManager.loadRemote(relUrl, function (err, res) {
              if (err) {
                console.error(err); //失败重试，最多次数2次

                if (totalRetryCounts < 4) {
                  ++totalRetryCounts;
                  load(totalRetryCounts % 2 == 0 ? false : true);
                }
                /* else if(bankRetryTimes < 1) {
                  bankRetryTimes++;
                  load(true);
                } */
                else {
                    _this2.showMsg(I18n.at("launcher/FAIL_LOAD_DATA"), function () {
                      game.restart();
                    });
                  }

                return;
              }

              ClickStream.clickTrace(ClickTraceEnum.LOAD_TISHEN_FILE);
              console.log("finish load unissisX4.json");
              var json = res.json || {};
              var clientVersion = window["unissisXVersion"] || 1;
              var tishenflag = false;

              if (json[clientVersion]) {
                tishenflag = json[clientVersion] == 1; //1是提审
              }

              window["unissisX4"] = !!tishenflag;

              if (tishenflag) {
                _this2.doFlash();
              } else {
                _this2.readyTishen();
              }
            });
          };

          load();
        };

        _proto.doFlash = function doFlash() {
          // this.hideLoading();
          // this.scheduleOnce(()=>{
          //     this.showLoading();
          // },2);
          this.readyTishen();
        };

        _proto.readyTishen = function readyTishen() {
          this._tishenReady = true;
          this.finish(); // this.checkReady();
        };

        _proto.showMsg = function showMsg(msg, call) {
          // Tween.stopAllByTarget(this.hintLab.node);
          // this.hintLab.node.opacity = 0;
          // tween(this.hintLab.node).to(0.2, {opacity:255}).delay(5).call(()=>{
          //     call && call();
          // }).to(0.2, {opacity:0}).start()   
          // this.hintLab.string = msg;
          console.log("加载提审配置有误");
          call && call();
        };

        _proto.onNativeStart = function onNativeStart() {
          if (SDKFacade.isAndroidNative()) {
            SDKFacade.bridge.gameInit();
          }

          var content = "";

          if (native.fileUtils.isFileExist("package-config.json")) {
            content = native.fileUtils.getStringFromFile("package-config.json");
          }

          var json;

          if (content && content.length > 0) {
            json = JSON.parse(content);

            if (json) {
              var packageConfig = SDKFacade.packageConfig;
              packageConfig.remoteRoot = json.remoteRoot;
              packageConfig.remoteRootBak = json.remoteRootBak;
              packageConfig.oreoLoginDomain = json.oreoLoginDomain;
              packageConfig.plat = json.plat;
              packageConfig.gamePlat = json.gamePlat;
              packageConfig.sdkType = json.sdkType;
              packageConfig.subSdkType = json.subSdkType;
              packageConfig.gmPackage = json.gmPackage;
              packageConfig["native"] = {
                appVersion: json.appVersion,
                minAppVersion: json.minAppVersion,
                auditFlagPath: json.auditFlagPath,
                multiPackFlag: json.multiPackFlag,
                updateBeforeGame: json.updateBeforeGame
              };

              if (packageConfig.sdkType == "sqmsdk") {
                SDKFacade.sdkType = SDKType.sqmsdk;
              } // todo 看是否需要支持在包配置里配置IMEI/CLICK等域名（目前看是不用根据包做区分的，单个地区用的就是同一套）

            } else {
              ErrorHandleWithRestart(ErrorCode.PACKAGE_CONFIG_INIT_FAIL);
            }
          } else {
            ErrorHandleWithRestart(ErrorCode.PACKAGE_CONFIG_INIT_FAIL_1);
          }
        };

        _proto.onWebStart = function onWebStart() {// todo 对接web、小游戏平台配置，这些配置在发布时直接写到代码里，减少一次请求
          // packageConfig = Object.assign({
          //     packageConfig
          // }, WebPackageConfig)
        };

        _proto.onMiniGameStart = /*#__PURE__*/function () {
          var _onMiniGameStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var remoteCDNs, url, _yield$HttpHelper$han, resp, reason;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 对接web、小游戏平台配置，这些配置在发布时直接写到代码里，减少一次请求
                  SDKFacade.packageConfig.wechat = WechatPackageConfig;
                  SDKFacade.packageConfig.sdkType = "sqmsdk";
                  remoteCDNs = [SDKFacade.packageConfig.remoteRoot];

                  if (SDKFacade.packageConfig.remoteRootBak) {
                    remoteCDNs.push(SDKFacade.packageConfig.remoteRootBak);
                  }

                  assetManager.byAM.initCDNs(remoteCDNs);
                  url = "web-resources/resourcesVersion_" + SDKFacade.packageConfig.wechat.webResVer + ".json?" + Date.now();
                  log("加载resourcesVersion文件url:" + url);
                  _context.next = 9;
                  return HttpHelper.handleHttpGetAsync({
                    url: url,
                    isInternalUrl: true,
                    type: HttpRespType.JSON
                  });

                case 9:
                  _yield$HttpHelper$han = _context.sent;
                  resp = _yield$HttpHelper$han.resp;
                  reason = _yield$HttpHelper$han.reason;

                  if (resp) {
                    ClickStream.clickTrace(ClickTraceEnum.LOAD_VERSION_FILE);
                    window["__remoteConfVer"] = resp["__remoteConfVer"];
                    assetManager.byAM.initManifest([{
                      files: resp
                    }]);
                    log("加载resourcesVersion文件成功: " + window["__remoteConfVer"]);
                  } else {
                    log("加载resourcesVersion文件失败");
                    Alert.show({
                      msg: !!reason ? reason : "下载远程配置失败"
                    });
                  }

                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));

          function onMiniGameStart() {
            return _onMiniGameStart.apply(this, arguments);
          }

          return onMiniGameStart;
        }();

        _proto.onEnterGame = function onEnterGame() {
          LauncherGlobal.instance.PM.jumpTo(ProcedureEnterGame);
        };

        _proto.onLauncherUpdate = function onLauncherUpdate() {
          this.finish();
        };

        _proto.onGotoLoginView = function onGotoLoginView() {
          LauncherGlobal.instance.PM.jumpTo(ProcedureSDKLogin);
        };

        return ProcedureLaunch;
      }(ProcedureBase), (_applyDecoratedDescriptor(_class.prototype, "onEnterGame", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onEnterGame"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onLauncherUpdate", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "onLauncherUpdate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onGotoLoginView", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "onGotoLoginView"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureLauncherUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './LauncherEvents.ts', './NativeLauncherUpdate.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, log, Msg, ProcedureBase, DistributeType, SDKFacade, LauncherEvents, NativeLauncherUpdate;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      DistributeType = module.DistributeType;
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      NativeLauncherUpdate = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0569fX6budOPKhv0Es8mZgs", "ProcedureLauncherUpdate", undefined);

      var ProcedureLauncherUpdate = exports('default', (_dec = Msg(LauncherEvents.NATIVE_LAUNCHER_UPDATE_SUCCESS), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureLauncherUpdate, _ProcedureBase);

        function ProcedureLauncherUpdate() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureLauncherUpdate.prototype;

        _proto.onMiniGameStart = function onMiniGameStart() {
          // window.sqmsdk = SQMSDK;
          this.finish();
        };

        _proto.onWebStart = function onWebStart() {
          this.finish();
        };

        _proto.onNativeStart = function onNativeStart() {
          // 只有安卓/IOS平台支持
          if (![DistributeType.AndroidNative, DistributeType.IOSNative].includes(SDKFacade.distributeType)) {
            this.finish();
            return;
          }

          log("start LauncherUpdate!");
          var updater = new NativeLauncherUpdate();
          updater.start();
        };

        _proto.onNativeLauncherUpdateSuccess = function onNativeLauncherUpdateSuccess() {
          this.finish();
        };

        return ProcedureLauncherUpdate;
      }(ProcedureBase), _applyDecoratedDescriptor(_class.prototype, "onNativeLauncherUpdateSuccess", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onNativeLauncherUpdateSuccess"), _class.prototype), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureLoginGuide.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadingView.ts', './I18n.ts', './ProcedureBase.ts', './Alert.ts', './LauncherLoginManager.ts', './ClickStream.ts'], function (exports) {
  var _inheritsLoose, cclegacy, LoadingView, I18n, ProcedureBase, Alert, LauncherLoginManager, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LoadingView = module.LoadingView;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63f2e77UiZLK5LMKGzNRXf+", "ProcedureLoginGuide", undefined);

      var ProcedureLoginGuide = exports('default', /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureLoginGuide, _ProcedureBase);

        function ProcedureLoginGuide() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureLoginGuide.prototype;

        _proto.onCommonStart = function onCommonStart() {
          // if (SDKFacade.isInternalDev()) {
          //     this.finish();
          // } else {
          //各平台请求导量数据
          this._reqLoginGuide(); // }

        };

        _proto._reqLoginGuide = function _reqLoginGuide() {
          var _this = this;

          console.log("procedureLoginGuide------>");

          var failCall = function failCall(state) {
            LoadingView.hide();
            Alert.show({
              msg: I18n.format("launcher/REQ_LOGIN_GUIDE_FAIL", state.toString()),
              hideCancel: true,
              func: function func() {
                _this._reqLoginGuide();
              }
            });
          };

          LoadingView.show({
            desc: I18n.at("launcher/REQ_LOGIN_GUIDE"),
            delayTime: 0.5
          }); //请求导量服接口

          ClickStream.clickTrace(ClickTraceEnum.GUIDE_DATA_REQ);
          LauncherLoginManager.reqLoginGuide(function (state, resp) {
            if (state === 0) {
              // if(SDKFacade.isAndroidNative()) {
              //     let serverData = LauncherLoginManager.model.getSelServerInfo();
              //     (SDKFacade.bridge as AndroidBridge).sqsdkCommitRoleData(1001, serverData.serverId+"", serverData.name, "", "", "", "", "", "", "", "-1", "-1");
              // }
              LoadingView.hide();

              _this.finish();
            } else {
              failCall(state);
            }
          }, function () {
            console.log("reqLoginGuide failed");
            ClickStream.clickTrace(ClickTraceEnum.GUIDE_DATA_REQ_FAILED);
            failCall(-1);
          });
        };

        return ProcedureLoginGuide;
      }(ProcedureBase));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureLoginView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoadingView.ts', './I18n.ts', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './LauncherEvents.ts', './LauncherGlobal.ts', './LauncherViewMgr.ts', './Alert.ts', './LauncherLoginManager.ts', './ClickStream.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, LoadingView, I18n, Msg, ProcedureBase, SDKFacade, LauncherEvents, LauncherGlobal, LauncherViewMgr, Alert, LauncherLoginManager, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      LoadingView = module.LoadingView;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      LauncherGlobal = module.default;
    }, function (module) {
      LauncherViewMgr = module.default;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "89f84S720VC/p8yziRt8fpm", "ProcedureLoginView", undefined);

      var ProcedureLoginView = exports('default', (_dec = Msg(LauncherEvents.LOGIN_FINISH), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureLoginView, _ProcedureBase);

        function ProcedureLoginView() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureLoginView.prototype;

        _proto.onCommonStart = function onCommonStart() {
          if (LauncherLoginManager.model.skipLogin) {
            this._reqLoginCheck();
          } else {
            if (SDKFacade.isTishen || LauncherLoginManager.model.newAccount) {
              //提审或者新账号
              ClickStream.clickTrace(ClickTraceEnum.CLICK_START_GAME);
              this.onLoginFinish(); //提审的话就直接进入游戏
            } else {
              LauncherViewMgr.openView("LoginLogicNode", function (view) {
                LauncherGlobal.instance.loginLogicNode = view;
              });
            }
          }
        };

        _proto.onLoginFinish = function onLoginFinish() {
          //GM登录不登录奥利奥
          if (LauncherLoginManager.model.isGmLogin) {
            this.finish();
          } else {
            this._reqLoginCheck();
          }
        };

        _proto._reqLoginCheck = function _reqLoginCheck() {
          var _this = this;

          LoadingView.show({
            desc: I18n.at("launcher/REQ_LOGIN_GUIDE"),
            delayTime: 0.5
          });

          var failCall = function failCall(state) {
            LoadingView.hide();
            Alert.show({
              msg: I18n.format("launcher/REQ_LOGIN_GUIDE_FAIL", state.toString()),
              hideCancel: true,
              func: function func() {
                _this._reqLoginCheck();
              }
            });
          };

          LauncherLoginManager.reqLoginCheck(function (resp) {
            var serverInfo = LauncherLoginManager.model.getSelServerInfo();

            if (resp.state === 0) {
              _this._finish();
            } else if (serverInfo.state === 4) {
              // 服务器未开服
              var openTime = new Date(serverInfo.openTime);
              Alert.show({
                msg: I18n.format("launcher/LOGIN_SERVER_STATE_NOT_OPEN", openTime.getMonth() + 1, openTime.getDate(), openTime.getHours(), openTime.getMinutes().toString().padStart(2, "0")),
                hideCancel: true
              });
            } else if (serverInfo.state === 3) {
              // 服务器维护中
              Alert.show({
                msg: I18n.at("launcher/LOGIN_SERVER_STATE_WEIHU"),
                hideCancel: true
              });
            } else if (resp.state === -9) {
              // 服务器禁止创角
              Alert.show({
                msg: I18n.at("launcher/LOGIN_SERVER_BAN_CREATE"),
                hideCancel: true
              });
            } else {
              // 其他错误
              Alert.show({
                msg: I18n.format("launcher/LOGIN_SERVER_BAN_CREATE", resp.state.toString()),
                hideCancel: true
              });
            }
          }, failCall);
        };

        _proto._finish = function _finish() {
          LoadingView.hide();

          if (SDKFacade.isInternalDev()) {
            LauncherLoginManager.saveDevLoginInfo();
          }

          this.finish();
        };

        return ProcedureLoginView;
      }(ProcedureBase), _applyDecoratedDescriptor(_class.prototype, "onLoginFinish", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "onLoginFinish"), _class.prototype), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureSDKLogin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './LauncherDefine.ts', './event-util.ts', './ProcedureBase.ts', './SDKFacade.ts', './LauncherEvents.ts', './MiniGameManager.ts', './Alert.ts', './LauncherLoginManager.ts', './ClickStream.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, cclegacy, log, I18n, LocaleType, Msg, ProcedureBase, SDKFacade, LauncherEvents, MiniGameManager, Alert, LauncherLoginManager, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      LocaleType = module.LocaleType;
    }, function (module) {
      Msg = module.Msg;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      SDKFacade = module.default;
    }, function (module) {
      LauncherEvents = module.LauncherEvents;
    }, function (module) {
      MiniGameManager = module.default;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      var _dec, _dec2, _class;

      cclegacy._RF.push({}, "4d256eatHhMroUizxQlhDda", "ProcedureSDKLogin", undefined); // const SDK_RECONNECT_TIEMS = 1;


      var ProcedureSDKLogin = exports('default', (_dec = Msg(LauncherEvents.EVENT_LOGIN_SUC), _dec2 = Msg(LauncherEvents.EVENT_LOGIN_FAIL), (_class = /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureSDKLogin, _ProcedureBase);

        function ProcedureSDKLogin() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureSDKLogin.prototype;

        _proto.onCommonStart = function onCommonStart() {
          if (SDKFacade.isInternalDev() || LauncherLoginManager.model.skipSdkLogin) {
            this.finish();
          } else {
            // SDK登录
            this._reqSdkLogin();
          }
        };

        _proto._reqSdkLogin = function _reqSdkLogin() {
          var _this = this;

          log("请求sdk登录");
          ClickStream.clickTrace(ClickTraceEnum.SDK_LOGIN_REQ);

          if (SDKFacade.isMiniGame()) {
            var sqmsdkSuccCb = function sqmsdkSuccCb(resp) {
              MiniGameManager.handleSsWechatParams(resp);
              LauncherLoginManager.req_imei();
              console.log("sdk登录成功");
              ClickStream.clickTrace(ClickTraceEnum.SDK_LOAD_FINISH);
              ClickStream.clickTrace(ClickTraceEnum.APP_LOGIN_RESP);

              _this.finish();
            };

            MiniGameManager.wxLogin(sqmsdkSuccCb, this.androidSdkLoginFail);
          } else {
            SDKFacade.bridge.sdkLogin();
          }
        };

        _proto.androidSdkLoginSuc = function androidSdkLoginSuc() {
          var bridge = SDKFacade.bridge;
          SDKFacade.imei = bridge.getIMEI();
          LauncherLoginManager.model.pid = bridge.sdkGetPID();
          SDKFacade.gid = LauncherLoginManager.model.gid = bridge.sdkGetGID();
          LauncherLoginManager.model.token = bridge.sdkGetToken(); //判断大陆包还是港台包

          if (bridge.isTWPackage()) {
            SDKFacade.localeType = LocaleType.Gangaotai;
            SDKFacade.pid = SDKFacade.taiwanPid;
          } else {
            SDKFacade.localeType = LocaleType.Mainland;
          }

          LauncherLoginManager.req_imei();
          console.log("sdk登录成功");
          ClickStream.clickTrace(ClickTraceEnum.SDK_LOAD_FINISH);
          ClickStream.clickTrace(ClickTraceEnum.APP_LOGIN_RESP);
          this.finish();
        };

        _proto.androidSdkLoginFail = function androidSdkLoginFail() {
          var _this2 = this;

          console.log("sdk登录失败");
          Alert.show({
            msg: I18n.at("launcher/SDK_LOGIN_FAIL"),
            func: function func() {
              _this2._reqSdkLogin();
            },
            hideCancel: true
          });
        };

        return ProcedureSDKLogin;
      }(ProcedureBase), (_applyDecoratedDescriptor(_class.prototype, "androidSdkLoginSuc", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "androidSdkLoginSuc"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "androidSdkLoginFail", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "androidSdkLoginFail"), _class.prototype)), _class)));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProcedureSelectServerCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProcedureBase.ts', './Alert.ts', './LauncherLoginManager.ts', './ClickStream.ts'], function (exports) {
  var _inheritsLoose, cclegacy, I18n, ProcedureBase, Alert, LauncherLoginManager, ClickStream, ClickTraceEnum;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      I18n = module.default;
    }, function (module) {
      ProcedureBase = module.ProcedureBase;
    }, function (module) {
      Alert = module.default;
    }, function (module) {
      LauncherLoginManager = module.default;
    }, function (module) {
      ClickStream = module.default;
      ClickTraceEnum = module.ClickTraceEnum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "47621/EEKJJ/6qofbmvRB6S", "ProcedureSelectServerCheck", undefined);

      var ProcedureSelectServerCheck = exports('default', /*#__PURE__*/function (_ProcedureBase) {
        _inheritsLoose(ProcedureSelectServerCheck, _ProcedureBase);

        function ProcedureSelectServerCheck() {
          return _ProcedureBase.apply(this, arguments) || this;
        }

        var _proto = ProcedureSelectServerCheck.prototype;

        _proto.onNativeStart = function onNativeStart() {
          this.checkGameVersion();
        };

        _proto.onWebStart = function onWebStart() {
          this.checkGameVersion();
        };

        _proto.onMiniGameStart = function onMiniGameStart() {
          // this.checkGameVersion();
          ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_SELECT_SERVER_CHECK);
          this.finish();
        };

        _proto.checkGameVersion = function checkGameVersion() {
          var _this = this;

          ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_SELECT_SERVER_CHECK);
          LauncherLoginManager.reqServerVersion(LauncherLoginManager.model.getSelServerInfo().serverId, function (resp) {
            var _resp$data;

            ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_SELECT_SERVER_CHECK_SUC);
            LauncherLoginManager.model.serverVersion = (_resp$data = resp.data) == null ? void 0 : _resp$data.version;

            _this.finish();
          }, function () {
            ClickStream.clickTrace(ClickTraceEnum.PROCEDURE_SELECT_SERVER_CHECK_FAIL);
            Alert.show({
              msg: I18n.at("launcher/LOGIN_REQ_CLIENT_VERSION_FAILED"),
              func: function func() {
                _this.checkGameVersion();
              },
              cfunc: function cfunc() {// 跳回之前的流程
              }
            });
          });
        };

        return ProcedureSelectServerCheck;
      }(ProcedureBase));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/src_launcher", ['./LauncherGlobal.ts', './LauncherNoBroadNode.ts', './LauncherScene.ts', './LauncherViewMgr.ts', './MiniGameManager.ts', './NativeAPIMgr.ts', './LauncherEvents.ts', './PackageConfig.ts', './Alert.ts', './LauncherComp.ts', './LauncherLoginManager.ts', './LauncherLoginModel.ts', './LoginAgeTips.ts', './LoginGM.ts', './LoginNoticeView.ts', './LoginServers.ts', './LoginView.ts', './NativeDownloader.ts', './NativeGameUpdate.ts', './NativeLauncherUpdate.ts', './NativeUpdateHelper.ts', './UpdateModel.ts', './ProcedureEnterGame.ts', './ProcedureFinishLauncher.ts', './ProcedureGameUpdate.ts', './ProcedureLaunch.ts', './ProcedureLauncherUpdate.ts', './ProcedureLoginGuide.ts', './ProcedureLoginView.ts', './ProcedureSDKLogin.ts', './ProcedureSelectServerCheck.ts', './ClickStream.ts', './ErrorHandle.ts', './LaunchDateUtil.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/UpdateModel.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "14765g+EKRPxqkys4v/+CMw", "UpdateModel", undefined);
      /**
       * UpdateModel
       * huangzeke@37.com
       * 更新数据
       */


      var UpdateModel = exports('default', function UpdateModel() {});

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/src_launcher', 'chunks:///_virtual/src_launcher'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});