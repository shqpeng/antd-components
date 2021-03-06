var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
var menuData = [
    {
        name: '基本组件',
        icon: 'form',
        path: 'components',
        children: [
            {
                name: '员工卡片',
                path: 'user-card',
                component: dynamicLoad(function () { return import('./pages/user-cards'); })
            },
            {
                name: '搜索表单',
                path: 'search-form',
                component: dynamicLoad(function () { return import('./pages/search-form'); })
            },
            {
                name: '模态框',
                path: 'modal',
                component: dynamicLoad(function () { return import('./pages/modal'); })
            }
        ]
    }
];
function formatter(data, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    /** 路径前缀 */
    var prefix = '';
    var list = [];
    data.forEach(function (v) {
        if (v.children) {
            list.push(__assign({}, v, { path: prefix + "/" + parentPath + v.path, children: formatter(v.children, "" + parentPath + v.path + "/") }));
        }
        else {
            list.push(__assign({}, v, { path: prefix + "/" + parentPath + v.path }));
        }
    });
    return list;
}
// tslint:disable-next-line:no-any
function dynamicLoad(importComponent) {
    var DynamicLoad = /** @class */ (function (_super) {
        __extends(DynamicLoad, _super);
        function DynamicLoad() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                component: null
            };
            return _this;
        }
        DynamicLoad.prototype.componentDidMount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var component;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, importComponent()];
                        case 1:
                            component = (_a.sent()).default;
                            this.setState({
                                component: component
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        DynamicLoad.prototype.render = function () {
            var C = this.state.component;
            return C ? React.createElement(C, __assign({}, this.props)) : null;
        };
        return DynamicLoad;
    }(React.Component));
    return DynamicLoad;
}
export default formatter(menuData);
//# sourceMappingURL=menus.js.map