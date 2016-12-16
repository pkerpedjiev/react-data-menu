(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-data-menu"] = factory(require("lodash"), require("react"), require("react-dom"));
	else
		root["react-data-menu"] = factory(root["Lodash"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Menu = __webpack_require__(1);
	
	Object.defineProperty(exports, 'Menu', {
	  enumerable: true,
	  get: function get() {
	    return _Menu.Menu;
	  }
	});
	
	var _MenuEmitter = __webpack_require__(18);
	
	Object.defineProperty(exports, 'MenuEmitter', {
	  enumerable: true,
	  get: function get() {
	    return _MenuEmitter.MenuEmitter;
	  }
	});
	
	var _DropdownMenu = __webpack_require__(34);
	
	Object.defineProperty(exports, 'DropDownMenu', {
	  enumerable: true,
	  get: function get() {
	    return _DropdownMenu.DropDownMenu;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.POPUP_ID_PREFIX = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Aligner = __webpack_require__(4);
	
	var _Aligner2 = _interopRequireDefault(_Aligner);
	
	var _defaultRenderers = __webpack_require__(8);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	var _hoverData = __webpack_require__(14);
	
	var _hoverData2 = _interopRequireDefault(_hoverData);
	
	var _hoverDataBuilder = __webpack_require__(15);
	
	var _hoverDataBuilder2 = _interopRequireDefault(_hoverDataBuilder);
	
	var _MenuEmitter = __webpack_require__(18);
	
	var _MenuEmitter2 = _interopRequireDefault(_MenuEmitter);
	
	var _MenuItemFactory = __webpack_require__(30);
	
	var _MenuItemFactory2 = _interopRequireDefault(_MenuItemFactory);
	
	var _MenuPopup = __webpack_require__(16);
	
	var _MenuPopup2 = _interopRequireDefault(_MenuPopup);
	
	var _MenuPopupFactory = __webpack_require__(31);
	
	var _MenuPopupFactory2 = _interopRequireDefault(_MenuPopupFactory);
	
	var _reactLiberator = __webpack_require__(32);
	
	var _reactLiberator2 = _interopRequireDefault(_reactLiberator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var POPUP_ID_PREFIX = exports.POPUP_ID_PREFIX = 'menu-popup-';
	
	var DEFAULT_LAYER_ID = 'react-data-menu-popup',
	    MOUSE_LEAVE_DELAY = 100,
	    MOUSE_ENTER_DELAY = 200,
	    HINTS = function HINTS() {
	    return ['es', 'em', 'ee', 'ws', 'wm', 'we'];
	},
	    ALIGN_TO = function ALIGN_TO(level) {
	    return !level ? this.props.alignTo || this.props.position : this.currentHoverData ? this.currentHoverData.getElement() : null;
	};
	
	// references to all the open menu instances
	// usually only the single instance, since by default we're allowing only a single menu on screen (we're auto-closing others)
	var instances = [],
	    layerElement;
	
	var Menu = function (_Component) {
	    _inherits(Menu, _Component);
	
	    //<editor-fold desc="Constructor">
	    function Menu(props) {
	        _classCallCheck(this, Menu);
	
	        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
	
	        _this.onItemClick = _this.onItemClick.bind(_this);
	        _this.closeMenu = _this.closeMenu.bind(_this);
	        _this.createPopup = _this.createPopup.bind(_this);
	        _this.removeChildPopups = _this.removeChildPopups.bind(_this);
	        _this.removePopups = _this.removePopups.bind(_this);
	
	        // debouncing: we don't want the child popup to open/close immediately
	        _this.processInActionDebounced = _lodash2.default.debounce(_this.processInAction.bind(_this), MOUSE_ENTER_DELAY);
	        _this.processOutActionDebounced = _lodash2.default.debounce(_this.processOutAction.bind(_this), MOUSE_LEAVE_DELAY);
	
	        _this.popupFactory = new _MenuPopupFactory2.default(_this.props.classPrefix);
	        _this.itemFactory = new _MenuItemFactory2.default(_lodash2.default.assign(_defaultRenderers.DefaultRenderers, props.renderers), props.classPrefix);
	
	        _this.state = {
	            visible: false,
	            expanded: false,
	            popups: []
	        };
	
	        _this.currentHoverData = null;
	
	        _this.handlers = {
	            onMouseDownOutside: _this.onMouseDownOutside.bind(_this),
	            onMouseUpInside: _this.onMouseUpInside.bind(_this),
	            onContextMenuInside: _this.onContextMenuInside.bind(_this),
	            onClose: _this.closeMenu,
	            onMouseOver: _this.onMouseOver.bind(_this),
	            onMouseOut: _this.onMouseOut.bind(_this),
	            onTouchStart: _this.onTouchStart.bind(_this),
	            onTouchEnd: _this.onTouchEnd.bind(_this),
	            onTouchStartOutside: _this.onTouchStartOutside.bind(_this)
	        };
	        return _this;
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Instance handling">
	    /**
	     * Only a single menu instance should be visible on screen
	     * Instances do close on window click, however they might get instantiated by other means
	     * (mouse-over the drop-down button etc.)
	     */
	
	
	    _createClass(Menu, [{
	        key: 'closeOtherMenuInstances',
	        value: function closeOtherMenuInstances() {
	            var self = this;
	
	            _lodash2.default.forEach(instances, function (instance) {
	                if (instance !== self) {
	                    instance.closeMenu();
	                }
	            });
	        }
	
	        /**
	         * Removes this menu from instances array
	         */
	
	    }, {
	        key: 'removeInstance',
	        value: function removeInstance() {
	            var self = this;
	
	            _lodash2.default.remove(instances, function (instance) {
	                return self === instance;
	            });
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Emitter subscribe / unsubscribe">
	        /**
	         * Event subscription
	         * Happens when menu becomes visible
	         */
	
	    }, {
	        key: 'connectToDispatcher',
	        value: function connectToDispatcher() {
	            _MenuEmitter2.default.getInstance().connect(this.handlers);
	        }
	
	        /**
	         * Unsubscribing from events
	         * Happens when menu becomes hidden
	         */
	
	    }, {
	        key: 'disconnectFromDispatcher',
	        value: function disconnectFromDispatcher() {
	            _MenuEmitter2.default.getInstance().disconnect(this.handlers);
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Raycast">
	        /**
	         * Fires on context menu inside of the menu
	         * @param ray
	         */
	
	    }, {
	        key: 'onContextMenuInside',
	        value: function onContextMenuInside(ray) {
	            ray.preventDefault(); // prevent default menu
	        }
	    }, {
	        key: 'onMouseOver',
	        value: function onMouseOver(ray) {
	            var hoverData = _hoverDataBuilder2.default.build(this.state.popups, ray),
	                popups;
	
	            if (!hoverData) {
	                return;
	            }
	
	            // keeping the selection
	            // Note: the selection should be changed immediately, so the UI is snappy
	            // however, we're calling the debounced action below, because the child popup should open with delay
	            popups = this.state.popups;
	            popups[hoverData.popupIndex].selectedIndex = hoverData.itemIndex;
	            this.setState({
	                popups: popups
	            });
	
	            this.processInActionDebounced(hoverData, false);
	        }
	    }, {
	        key: 'onMouseOut',
	        value: function onMouseOut(ray) {
	            var hoverData = _hoverDataBuilder2.default.build(this.state.popups, ray);
	
	            if (hoverData) {
	                this.processOutActionDebounced(hoverData);
	            }
	        }
	
	        /**
	         * Closes the menu if clicked outside of the menu
	         */
	
	    }, {
	        key: 'onMouseDownOutside',
	        value: function onMouseDownOutside() {
	            this.closeMenu();
	        }
	    }, {
	        key: 'onMouseUpInside',
	        value: function onMouseUpInside(ray) {
	            var hoverData = _hoverDataBuilder2.default.build(this.state.popups, ray);
	
	            if (hoverData) {
	                this.onItemClick(hoverData);
	            }
	        }
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(ray) {
	            var hoverData = _hoverDataBuilder2.default.build(this.state.popups, ray);
	
	            if (hoverData) {
	                this.processInAction(hoverData, false);
	            }
	        }
	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(ray) {
	            var hoverData = _hoverDataBuilder2.default.build(this.state.popups, ray);
	
	            if (hoverData) {
	                this.onItemClick(hoverData);
	            }
	        }
	    }, {
	        key: 'onTouchStartOutside',
	        value: function onTouchStartOutside(ray) {
	            this.closeMenu();
	        }
	    }, {
	        key: 'onItemClick',
	        value: function onItemClick(hoverData) {
	            var self = this;
	
	            this.processInAction(hoverData, true);
	            if (hoverData.isLeafNode() && !hoverData.isPersistant()) {
	                // leaf node
	                // defer and allow item handlers to be executed
	                _lodash2.default.defer(function () {
	                    self.closeMenu();
	                });
	            }
	            this.props.onItemClick(hoverData);
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Actions">
	        /**
	         * Shows/hides menu
	         * @param visible
	         */
	
	    }, {
	        key: 'setMenuVisibility',
	        value: function setMenuVisibility(visible) {
	            var visibilityChanging = this.state.visible !== visible,
	                isOpening = visibilityChanging && visible,
	                isClosing = visibilityChanging && !visible,
	                self = this,
	                popups;
	
	            if (!visibilityChanging) {
	                return;
	            }
	
	            if (isOpening) {
	                popups = this.createPopup(this.props.items, true);
	            } else if (isClosing) {
	                popups = this.removePopups(0);
	            }
	
	            this.setState({
	                visible: visible,
	                popups: popups
	            }, function () {
	                if (self.state.visible) {
	                    this.props.onOpen();
	                    this.connectToDispatcher();
	                } else {
	                    this.disconnectFromDispatcher();
	                }
	            });
	        }
	
	        /**
	         * Hides menu
	         */
	
	    }, {
	        key: 'closeMenu',
	        value: function closeMenu() {
	            this.setMenuVisibility(false);
	            _MenuEmitter2.default.getInstance().unregisterAllParts();
	            this.disconnectFromDispatcher();
	            this.removeInstance();
	            this.processInActionDebounced.cancel();
	            this.processOutActionDebounced.cancel();
	            this.props.onClose();
	        }
	
	        /**
	         * Handles the menu item hover or click action
	         * @param hoverData
	         * @param shouldFireCallback
	         */
	
	    }, {
	        key: 'processInAction',
	        value: function processInAction(hoverData, shouldFireCallback) {
	            var hoverDataChanged = !hoverData.equals(this.currentHoverData),
	                childItems,
	                popups;
	
	            if (shouldFireCallback && hoverData.hasCallback()) {
	                hoverData.fireCallback(hoverData);
	            }
	
	            if (!hoverDataChanged) {
	                return; // it's a child
	            }
	
	            this.removeChildPopups(hoverData.popupIndex);
	            //if (hoverData.isSiblingOf(this.currentHoverData)) {
	            //    this.removeChildPopups(hoverData.popupIndex);
	            //}
	
	            // set current hover data
	            this.currentHoverData = hoverData;
	
	            // process child items if exist
	            childItems = hoverData.getChildItems();
	            if (!childItems) {
	                return;
	            }
	
	            popups = this.createPopup(childItems);
	
	            this.setState({
	                popups: popups
	            });
	
	            this.props.onItemMouseEnter(hoverData);
	        }
	    }, {
	        key: 'processOutAction',
	        value: function processOutAction(hoverData) {
	            var hoverDataChanged = !hoverData.equals(this.currentHoverData);
	
	            if (!hoverDataChanged) {
	                return; // it's a child
	            }
	
	            if (!hoverData || // if mouse off menu
	            hoverData && this.shouldRemoveChildPopups(this.currentHoverData, hoverData)) {
	                // remove child popups if hovering over another menu item in the same popup
	                // or hovering the parent popup
	                //this.removeChildPopups(hoverData.popupIndex); // Complex Mac menu behaviour
	                this.props.onItemMouseLeave(hoverData);
	            }
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Create/remove popups">
	        /**
	         * Removes descendants of a popup specified with popupId and sets the state
	         * @param popupId
	         * @param callback
	         */
	
	    }, {
	        key: 'removeChildPopups',
	        value: function removeChildPopups(index) {
	            var popups = this.removePopups(index + 1);
	
	            this.setState({
	                popups: popups
	            });
	        }
	
	        /**
	         * Removes popups with an index greater than or equal to startIndex
	         * @param startIndex
	         */
	
	    }, {
	        key: 'removePopups',
	        value: function removePopups(startIndex) {
	            var popups = startIndex === 0 ? [] : this.state.popups.slice(0, startIndex);
	
	            return popups;
	        }
	    }, {
	        key: 'createPopup',
	        value: function createPopup(items, clean) {
	            if (!items) {
	                return;
	            }
	
	            var popups = clean ? [] : this.state.popups.slice(0),
	                id = POPUP_ID_PREFIX + popups.length;
	
	            popups.push({
	                id: id,
	                items: items
	            });
	            return popups;
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="React">
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var level = 0,
	                self = this,
	                alignTo,
	                hints,
	                popup,
	                popups = this.state.popups.map(function (data) {
	                alignTo = self.props.alignToFunc.call(self, level), hints = self.props.hints.call(self, level), popup = _react2.default.createElement(
	                    _reactLiberator2.default,
	                    {
	                        key: 'liberator-popup-' + level,
	                        layer: self.props.layer,
	                        layerId: self.props.layerId,
	                        autoCleanup: self.props.autoCleanup,
	                        onActivate: self.activateHandler },
	                    _react2.default.createElement(_MenuPopup2.default, {
	                        config: self.props.config,
	                        classPrefix: self.props.classPrefix,
	                        key: POPUP_ID_PREFIX + data.id,
	                        popupId: data.id,
	                        items: self.state.popups[level].items,
	                        popupFactory: self.popupFactory,
	                        itemFactory: self.itemFactory,
	                        aligner: self.props.aligner,
	                        alignTo: alignTo,
	                        hints: hints,
	                        useOffset: level !== 0,
	                        selectedIndex: data.selectedIndex })
	                );
	                level++;
	                return popup;
	            });
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'menu' },
	                popups
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.autoCloseOtherMenuInstances) {
	                this.closeOtherMenuInstances();
	                instances = [];
	            }
	            this.setMenuVisibility(true);
	            instances.push(this);
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            if (nextState.visible) {
	                this.connectToDispatcher();
	            } else {
	                this.disconnectFromDispatcher();
	            }
	        }
	    }, {
	        key: 'activateHandler',
	        value: function activateHandler(e) {
	            layerElement = e.layer;
	            _MenuEmitter2.default.getInstance().registerPart(layerElement, false);
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Helper">
	
	        /**
	         * Returns true if child popups should be removed
	         * The decision is made based on depth of currently hovered popup
	         * @param hoverData
	         * @param popupId
	         * @returns {*}
	         */
	
	    }, {
	        key: 'shouldRemoveChildPopups',
	        value: function shouldRemoveChildPopups(previousHoverData, hoverData) {
	            return previousHoverData && previousHoverData.popupIndex >= hoverData.popupIndex;
	        }
	        //</editor-fold>
	
	    }]);
	
	    return Menu;
	}(_react.Component);
	
	//<editor-fold desc="Props">
	
	
	exports.default = Menu;
	Menu.propTypes = {
	    config: _react2.default.PropTypes.object, // config object visiting each menu item
	    classPrefix: _react2.default.PropTypes.string, // CSS class prefix for all the classes used by this menu
	    items: _react2.default.PropTypes.array.isRequired, // menu items (data)
	    renderers: _react2.default.PropTypes.object, // item renderers
	    mouseEnterDelay: _react2.default.PropTypes.number,
	    mouseLeaveDelay: _react2.default.PropTypes.number,
	    autoCloseOtherMenuInstances: _react2.default.PropTypes.bool, // should opening of a menu close other (currently open) menu instances
	    onOpen: _react2.default.PropTypes.func,
	    onClose: _react2.default.PropTypes.func,
	    onItemMouseEnter: _react2.default.PropTypes.func,
	    onItemMouseLeave: _react2.default.PropTypes.func,
	    onItemClick: _react2.default.PropTypes.func,
	    hints: _react2.default.PropTypes.func,
	    alignToFunc: _react2.default.PropTypes.func,
	    layer: _react2.default.PropTypes.node,
	    layerId: _react2.default.PropTypes.string,
	    autoCleanup: _react2.default.PropTypes.bool // Liberator's empty layer auto cleanup
	};
	Menu.defaultProps = {
	    config: {},
	    classPrefix: '',
	    items: [],
	    aligner: new _Aligner2.default(),
	    mouseEnterDelay: MOUSE_ENTER_DELAY,
	    mouseLeaveDelay: MOUSE_LEAVE_DELAY,
	    autoCloseOtherMenuInstances: true,
	    onOpen: function onOpen() {},
	    onClose: function onClose() {},
	    onItemMouseEnter: function onItemMouseEnter() {},
	    onItemMouseLeave: function onItemMouseLeave() {},
	    onItemClick: function onItemClick() {},
	
	    hints: HINTS,
	    alignToFunc: ALIGN_TO,
	    layer: null,
	    layerId: DEFAULT_LAYER_ID,
	    autoCleanup: true
	};
	//</editor-fold>

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RectUtil = __webpack_require__(5);
	
	var _RectUtil2 = _interopRequireDefault(_RectUtil);
	
	var _RectAlign = __webpack_require__(6);
	
	var _RectAlign2 = _interopRequireDefault(_RectAlign);
	
	var _ViewportUtil = __webpack_require__(7);
	
	var _ViewportUtil2 = _interopRequireDefault(_ViewportUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Aligner = function () {
	    function Aligner() {
	        _classCallCheck(this, Aligner);
	    }
	
	    _createClass(Aligner, [{
	        key: 'align',
	        value: function align(target, alignTo, hints, handle) {
	            var offset = {
	                x: 0,
	                y: 0
	            },
	                targetRect,
	                alignToRect,
	                viewportRect,
	                targetHandle,
	                position;
	
	            if (alignTo) {
	                if (alignTo.x && alignTo.y) {
	                    alignToRect = _RectUtil2.default.getZeroRectAtPosition(alignTo);
	                } else {
	                    alignToRect = _RectUtil2.default.getBoundingRect(alignTo);
	                }
	
	                targetRect = _RectUtil2.default.getBoundingRect(target), viewportRect = _ViewportUtil2.default.getRect();
	
	                targetHandle = handle ? _RectUtil2.default.getBoundingRect(handle) : _RectUtil2.default.cloneRect(targetRect);
	
	                var rectAlign = new _RectAlign2.default({
	                    body: viewportRect,
	                    handle: alignToRect
	                }, {
	                    body: targetRect,
	                    handle: targetHandle
	                });
	
	                position = rectAlign.getPosition(hints);
	
	                target.style.left = position.x + offset.x + 'px';
	                target.style.top = position.y + offset.y + 'px';
	            }
	
	            return position;
	        }
	    }]);
	
	    return Aligner;
	}();
	
	exports.default = Aligner;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RectUtil = function () {
	    function RectUtil() {
	        _classCallCheck(this, RectUtil);
	    }
	
	    _createClass(RectUtil, null, [{
	        key: "getBoundingRect",
	        value: function getBoundingRect(element) {
	            // gets DOMRect object with six properties: left, top, right, bottom, width, height
	            var bounds = element.getBoundingClientRect();
	
	            return {
	                left: bounds.left,
	                right: bounds.right,
	                top: bounds.top,
	                bottom: bounds.bottom,
	                width: bounds.width,
	                height: bounds.height
	            };
	        }
	    }, {
	        key: "getZeroRectAtPosition",
	        value: function getZeroRectAtPosition(position) {
	            return {
	                left: position.x,
	                right: position.x,
	                top: position.y,
	                bottom: position.y,
	                width: 0,
	                height: 0
	            };
	        }
	    }, {
	        key: "cloneRect",
	        value: function cloneRect(bounds) {
	            return {
	                left: bounds.left,
	                right: bounds.right,
	                top: bounds.top,
	                bottom: bounds.bottom,
	                width: bounds.width,
	                height: bounds.height
	            };
	        }
	    }, {
	        key: "moveRect",
	        value: function moveRect(bounds, delta) {
	            return {
	                left: bounds.left + delta.x,
	                right: bounds.right + delta.x,
	                top: bounds.top + delta.y,
	                bottom: bounds.bottom + delta.y,
	                width: bounds.width,
	                height: bounds.height
	            };
	        }
	    }]);
	
	    return RectUtil;
	}();
	
	exports.default = RectUtil;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RectAlignAnchor = exports.RectAlignSide = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _RectUtil = __webpack_require__(5);
	
	var _RectUtil2 = _interopRequireDefault(_RectUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RectAlignSide = exports.RectAlignSide = {
	    NORTH: 'n',
	    SOUTH: 's',
	    EAST: 'e',
	    WEST: 'w'
	};
	
	var RectAlignAnchor = exports.RectAlignAnchor = {
	    START: 's',
	    MIDDLE: 'm',
	    END: 'e'
	};
	
	var RectAlign = function () {
	    function RectAlign(aligner, target) {
	        _classCallCheck(this, RectAlign);
	
	        this.aligner = aligner;
	        this.target = target;
	    }
	
	    _createClass(RectAlign, [{
	        key: 'getPosition',
	        value: function getPosition(hints) {
	            var tries = [],
	                success = {
	                x: -1,
	                y: -1
	            },
	                position;
	
	            hints.find(function (hint) {
	                tries.push(hint);
	                position = this.tryHint(hint);
	                if (position.fitsX && success.x === -1) {
	                    success.x = position.x;
	                }
	                if (position.fitsY && success.y === -1) {
	                    success.y = position.y;
	                }
	                if (position.fits) {
	                    return true;
	                }
	                return false;
	            }, this);
	
	            if (!position || !position.fits) {
	                position = this.getFallbackPosition(position, success, hints);
	            }
	            //console.log('Final: ' + position.direction + ' (tries: ' + tries.toString() + ' of ' +  hints.toString() + ')');
	            return position;
	        }
	    }, {
	        key: 'getFallbackPosition',
	        value: function getFallbackPosition(position, success, hints) {
	            var aligner = this.aligner,
	                target = this.target,
	                preferredPosition,
	                position,
	                closerToLeft,
	                closerToTop,
	                left,
	                right,
	                top,
	                bottom;
	
	            // doesn't fit in any direction
	            // settle closest to the first hint
	            preferredPosition = this.tryHint(hints[0]);
	            if (!preferredPosition.fitsX) {
	                if (success.x !== -1) {
	                    preferredPosition.x = success.x;
	                } else {
	                    left = target.body.left;
	                    right = aligner.body.width - target.body.width;
	                    closerToLeft = left < right;
	                    preferredPosition.x = closerToLeft ? 0 : aligner.body.width - target.body.width;
	                }
	            }
	            if (!preferredPosition.fitsY) {
	                if (success.y !== -1) {
	                    preferredPosition.y = success.y;
	                } else {
	                    top = target.body.top;
	                    bottom = aligner.body.height - target.body.height;
	                    closerToTop = top < bottom;
	                    preferredPosition.y = closerToTop ? 0 : aligner.body.height - target.body.height;
	                }
	            }
	
	            //console.log('Final: ' + position.direction + ' (tries: ' + tries.toString() + ' of ' +  hints.toString() + ')');
	            return preferredPosition;
	        }
	    }, {
	        key: 'tryHint',
	        value: function tryHint(hint) {
	            var aligner = this.aligner,
	                target = this.target,
	                offset = { x: target.body.left - target.handle.left, y: target.body.top - target.handle.top },
	                side = hint[0],
	                position = hint[1],
	                x,
	                y,
	                fitsX,
	                fitsY,
	                fits;
	
	            switch (side) {
	                case RectAlignSide.EAST:
	                    x = aligner.handle.right;
	                    break;
	                case RectAlignSide.WEST:
	                    x = aligner.handle.left - target.body.width;
	                    break;
	                case RectAlignSide.NORTH:
	                    y = aligner.handle.top - target.body.height;
	                    break;
	                case RectAlignSide.SOUTH:
	                    y = aligner.handle.bottom;
	                    break;
	                default:
	                    throw 'Unknown side: ' + side;
	            }
	
	            switch (side) {
	                case RectAlignSide.EAST:
	                case RectAlignSide.WEST:
	                    switch (position) {
	                        case RectAlignAnchor.START:
	                            y = aligner.handle.top;
	                            break;
	                        case RectAlignAnchor.MIDDLE:
	                            y = (aligner.handle.top + aligner.handle.bottom) / 2 - target.body.height / 2;
	                            break;
	                        case RectAlignAnchor.END:
	                            y = aligner.handle.bottom - target.body.height;
	                            break;
	                        default:
	                            throw 'Unknown position: ' + position;
	                    }
	                    break;
	                case RectAlignSide.NORTH:
	                case RectAlignSide.SOUTH:
	                    switch (position) {
	                        case RectAlignAnchor.START:
	                            x = aligner.handle.left;
	                            break;
	                        case RectAlignAnchor.MIDDLE:
	                            x = (aligner.handle.left + aligner.handle.right) / 2 - target.body.width / 2;
	                            break;
	                        case RectAlignAnchor.END:
	                            x = aligner.handle.right - target.body.width;
	                            break;
	                        default:
	                            throw 'Unknown position: ' + position;
	                    }
	                    break;
	                default:
	                    throw 'Unknown side: ' + side;
	            }
	
	            // add offset
	            x += offset.x;
	            y += offset.y;
	
	            fitsX = x >= 0 && x + target.body.width <= aligner.body.width;
	            fitsY = y >= 0 && y + target.body.height <= aligner.body.height;
	            fits = fitsX && fitsY;
	
	            return {
	                x: x,
	                y: y,
	                fitsX: fitsX,
	                fitsY: fitsY,
	                fits: fits,
	                direction: hint
	            };
	        }
	    }]);
	
	    return RectAlign;
	}();
	
	exports.default = RectAlign;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ViewportUtil = function () {
	    function ViewportUtil() {
	        _classCallCheck(this, ViewportUtil);
	    }
	
	    _createClass(ViewportUtil, null, [{
	        key: "getRect",
	        value: function getRect() {
	            var doc = document.documentElement,
	                body = document.body;
	
	            return {
	                x: 0,
	                y: 0,
	                width: window.innerWidth || doc.clientWidth || body.clientWidth,
	                height: window.innerHeight || doc.clientHeight || body.clientHeight
	            };
	        }
	    }]);
	
	    return ViewportUtil;
	}();
	
	exports.default = ViewportUtil;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DefaultRenderers = undefined;
	
	var _ButtonRenderer = __webpack_require__(9);
	
	var _LabelRenderer = __webpack_require__(12);
	
	var _SeparatorRenderer = __webpack_require__(13);
	
	var DefaultRenderers = exports.DefaultRenderers = {
	    'button': _ButtonRenderer.Button,
	    'label': _LabelRenderer.Label,
	    '-': _SeparatorRenderer.Separator
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Button = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(11);
	
	var Button = exports.Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var className = classnames(this.props.className, _Dom2.default.buildClassNames(this.props.classPrefix, ['menu-item-button'])),
	                data = this.props.data,
	                chevron = this.props.isExpandable ? _react2.default.createElement('span', { className: 'fa fa-chevron-right fa-fw' }) : null;
	
	            return _react2.default.createElement(
	                'button',
	                _extends({}, data.handlers, { key: data.key, id: data.id, className: className }),
	                data.title,
	                chevron
	            );
	        }
	    }]);

	    return Button;
	}(_react.Component);

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Dom = function () {
	    function Dom() {
	        _classCallCheck(this, Dom);
	    }
	
	    _createClass(Dom, null, [{
	        key: "contains",
	
	        /**
	         * Returns true if parent element contains child, or parent is child
	         * @param parentElement
	         * @param childElement
	         * @returns {boolean}
	         */
	        value: function contains(parentElement, childElement) {
	            if (childElement == parentElement) {
	                return true;
	            }
	            var node = childElement.root;
	            while (node != null) {
	                if (node == parentElement) {
	                    return true;
	                }
	                node = node.root;
	            }
	            return false;
	        }
	
	        /**
	         * @param classPrefix string
	         * @param classNames Array of strings
	         * @returns {{}} Map of class names
	         */
	
	    }, {
	        key: "buildClassNames",
	        value: function buildClassNames(classPrefix, classNames) {
	            var len = classNames.length,
	                obj = {},
	                className,
	                i;
	
	            for (i = 0; i < len; i++) {
	                className = classNames[i];
	                obj[classPrefix + className] = !!className; // only if className defined
	            }
	
	            return obj;
	        }
	    }]);
	
	    return Dom;
	}();
	
	exports.default = Dom;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Label = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(11);
	
	var Label = exports.Label = function (_Component) {
	    _inherits(Label, _Component);
	
	    function Label() {
	        _classCallCheck(this, Label);
	
	        return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
	    }
	
	    _createClass(Label, [{
	        key: 'render',
	        value: function render() {
	            var className = classnames(this.props.className, _Dom2.default.buildClassNames(this.props.classPrefix, ['menu-item-label'])),
	                data = this.props.data;
	
	            return _react2.default.createElement(
	                'label',
	                { key: data.key, id: data.id, className: className },
	                data.title
	            );
	        }
	    }]);

	    return Label;
	}(_react.Component);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Separator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(11);
	
	var Separator = exports.Separator = function (_Component) {
	    _inherits(Separator, _Component);
	
	    function Separator() {
	        _classCallCheck(this, Separator);
	
	        return _possibleConstructorReturn(this, (Separator.__proto__ || Object.getPrototypeOf(Separator)).apply(this, arguments));
	    }
	
	    _createClass(Separator, [{
	        key: 'render',
	        value: function render() {
	            var className = classnames(this.props.className, _Dom2.default.buildClassNames(this.props.classPrefix, ['menu-item-separator']));
	
	            return _react2.default.createElement('hr', { className: className, key: this.props.key });
	        }
	    }]);

	    return Separator;
	}(_react.Component);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HoverData = function () {
	    function HoverData(popupId, itemId, popupIndex, itemIndex, element, data) {
	        _classCallCheck(this, HoverData);
	
	        this.popupId = popupId;
	        this.itemId = itemId;
	        this.popupIndex = popupIndex;
	        this.itemIndex = itemIndex;
	        this.element = element;
	        this.data = data;
	    }
	
	    _createClass(HoverData, [{
	        key: 'getChildItems',
	        value: function getChildItems() {
	            return this.data.items;
	        }
	    }, {
	        key: 'isLeafNode',
	        value: function isLeafNode() {
	            return !this.data.items || this.data.items.length === 0;
	        }
	    }, {
	        key: 'isPersistant',
	        value: function isPersistant() {
	            return this.data.persist;
	        }
	    }, {
	        key: 'isExpandable',
	        value: function isExpandable() {
	            return this.data.items && this.data.items.length > 0;
	        }
	    }, {
	        key: 'getElement',
	        value: function getElement() {
	            return this.element;
	        }
	    }, {
	        key: 'hasCallback',
	        value: function hasCallback() {
	            return !!this.data.callback;
	        }
	    }, {
	        key: 'fireCallback',
	        value: function fireCallback() {
	            if (!this.hasCallback) {
	                throw 'HoverData: no callback defined';
	            }
	            return this.data.callback(arguments);
	        }
	
	        /**
	         * Returns true for the same item, having the same parent
	         * @param other
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'equals',
	        value: function equals(other) {
	            return !!other && this.popupId === other.popupId && this.itemId === other.itemId;
	        }
	
	        /**
	         * Returns true for two different items having the same parent
	         * @param other
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'isSiblingOf',
	        value: function isSiblingOf(other) {
	            return !!other && this.popupId === other.popupId && this.itemId !== other.itemId;
	        }
	    }, {
	        key: 'isChildOf',
	        value: function isChildOf(other) {
	            if (!other || !other.items) {
	                return false;
	            }
	            return _.some(other.items, function (item) {
	                return item.itemId === this.itemId;
	            });
	        }
	    }, {
	        key: 'isParentTo',
	        value: function isParentTo(other) {
	            if (!other || !this.items) {
	                return false;
	            }
	            return _.some(this.items, function (item) {
	                return this.itemId === item.itemId;
	            });
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'HoverData [popupId: ' + this.popupId + '; itemId: ' + this.itemId + '; itemIndex: ' + this.itemIndex + ']';
	        }
	    }]);
	
	    return HoverData;
	}();
	
	exports.default = HoverData;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _hoverData = __webpack_require__(14);
	
	var _hoverData2 = _interopRequireDefault(_hoverData);
	
	var _MenuPopup = __webpack_require__(16);
	
	var _Menu = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HoverDataBuilder = function () {
	    function HoverDataBuilder() {
	        _classCallCheck(this, HoverDataBuilder);
	    }
	
	    _createClass(HoverDataBuilder, null, [{
	        key: 'build',
	        value: function build(popups, ray) {
	            var data = {},
	                popupElement = ray.intersectsId(_Menu.POPUP_ID_PREFIX),
	                itemElement = ray.intersectsId(_MenuPopup.ITEM_ID_PREFIX),
	                hoverData,
	                popupId,
	                popupIndex,
	                itemId,
	                itemIndex;
	
	            if (popupElement && itemElement) {
	                popupId = popupElement.id;
	                popupIndex = parseInt(popupId.split(_Menu.POPUP_ID_PREFIX)[1]);
	                itemId = itemElement.id;
	                itemIndex = parseInt(itemId.split(_MenuPopup.ITEM_ID_PREFIX)[1]);
	                data = popups[popupIndex].items[itemIndex];
	                hoverData = new _hoverData2.default(popupId, itemId, popupIndex, itemIndex, itemElement, data);
	            }
	
	            return hoverData;
	        }
	    }]);
	
	    return HoverDataBuilder;
	}();
	
	exports.default = HoverDataBuilder;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ITEM_ID_PREFIX = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Aligner = __webpack_require__(4);
	
	var _Aligner2 = _interopRequireDefault(_Aligner);
	
	var _hoverData = __webpack_require__(14);
	
	var _hoverData2 = _interopRequireDefault(_hoverData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ITEM_ID_PREFIX = exports.ITEM_ID_PREFIX = 'menu-item-';
	
	var DEFAULT_ITEM_RENDERER_TYPE = 'button';
	
	var classnames = __webpack_require__(11);
	
	var MenuPopup = function (_Component) {
	    _inherits(MenuPopup, _Component);
	
	    function MenuPopup(props) {
	        _classCallCheck(this, MenuPopup);
	
	        var _this = _possibleConstructorReturn(this, (MenuPopup.__proto__ || Object.getPrototypeOf(MenuPopup)).call(this, props));
	
	        _this.aligner = _this.props.aligner;
	        _this.state = {
	            showing: false
	        };
	        return _this;
	    }
	
	    _createClass(MenuPopup, [{
	        key: 'render',
	        value: function render() {
	            var index = 0,
	                classPrefix = this.props.classPrefix,
	                selectedIndex = this.props.selectedIndex,
	                popupFactory = this.props.popupFactory,
	                itemFactory = this.props.itemFactory,
	                self = this,
	                key,
	                children,
	                menuItem,
	                styles;
	
	            children = this.props.items ? this.props.items.map(function (data) {
	                var classes = {};
	
	                key = ITEM_ID_PREFIX + index;
	
	                if (selectedIndex === index) {
	                    classes[classPrefix + 'menu-item-selected'] = true;
	                }
	
	                data = self.expandDescriptor(data);
	
	                menuItem = itemFactory.createItem(_lodash2.default.assign({}, data, {
	                    id: key
	                }), key, classnames(classes), self.props.config);
	
	                index++;
	
	                return menuItem;
	            }) : null;
	
	            styles = {
	                position: 'fixed',
	                left: this.props.x + 'px',
	                top: this.props.y + 'px'
	            };
	
	            return popupFactory.createItem(_lodash2.default.assign({}, {
	                popupId: this.props.popupId,
	                styles: styles,
	                children: children,
	                showing: this.state.showing
	            }));
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var classPrefix = this.props.classPrefix,
	                position;
	
	            // measure DOM
	            if (!this.dom) {
	                this.dom = _reactDom2.default.findDOMNode(this);
	                this.dom.style.position = 'fixed';
	            }
	
	            // align
	            position = this.aligner.align(this.dom, this.props.alignTo, this.props.hints, this.props.useOffset ? this.dom.firstChild : null);
	
	            // bake some of the position information into popups' className
	            if (!position.fitsX) {
	                // if popup doesn't horizontally fit the screen, add this class name
	                // this could be used to introduce scroll etc.
	                this.dom.className += ' ' + classPrefix + 'menu-popup-overflow-x';
	            }
	            if (!position.fitsY) {
	                // if popup doesn't vertically fit the screen, add this class name
	                this.dom.className += ' ' + classPrefix + 'menu-popup-overflow-y';
	            }
	            if (position.direction) {
	                // styling different positions ('menu-popup-align-es', 'menu-popup-align-se' etc.)
	                this.dom.className += ' ' + classPrefix + 'menu-popup-align-' + position.direction;
	            }
	
	            this.setState({
	                showing: true
	            });
	        }
	
	        /**
	         * Expands string descriptor to object descriptor
	         * @param data
	         * @returns {*}
	         */
	
	    }, {
	        key: 'expandDescriptor',
	        value: function expandDescriptor(data) {
	            if (typeof data === 'string') {
	                return {
	                    type: data
	                };
	            }
	            if (!data.type) {
	                data.type = DEFAULT_ITEM_RENDERER_TYPE;
	            }
	            return data;
	        }
	    }]);
	
	    return MenuPopup;
	}(_react.Component);
	
	exports.default = MenuPopup;
	
	MenuPopup.propTypes = {
	    config: _react2.default.PropTypes.object, // config object visiting every menu item
	    classPrefix: _react2.default.PropTypes.string,
	    x: _react2.default.PropTypes.number,
	    y: _react2.default.PropTypes.number,
	    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.string])),
	    popupId: _react2.default.PropTypes.string.isRequired,
	    useOffset: _react2.default.PropTypes.bool.isRequired,
	    hints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
	    selectedIndex: _react2.default.PropTypes.number.isRequired
	};
	MenuPopup.defaultProps = {
	    classPrefix: '',
	    x: 0,
	    y: 0,
	    items: [],
	    alignTo: null,
	    useOffset: false,
	    selectedIndex: -1
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _click = __webpack_require__(19);
	
	var _click2 = _interopRequireDefault(_click);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EmitterPlug = __webpack_require__(20).EmitterPlug.default;
	
	var TAP_AND_HOLD_INTERVAL = 250;
	
	var parts = [],
	    instance,
	    touchTimeout;
	
	/**
	 * Checks if any of the parts is within the clicked ray
	 * @param ray The Ray to check
	 * @param includeToggleParts Should we treat toggle parts as parts menu parts
	 * @returns {boolean}
	 */
	function isMenuPartClicked(ray, includeToggleParts) {
	    return _lodash2.default.some(parts, function (part) {
	        var shouldIncludeThisPart = includeToggleParts || !part.isToggle;
	
	        return shouldIncludeThisPart && ray.intersects(part.element);
	    });
	}
	
	/**
	 * Checks if any of the toggle parts is within the clicked ray
	 * @param ray The Ray to check
	 * @returns {boolean}
	 */
	function isTogglePartClicked(ray) {
	    return _lodash2.default.some(parts, function (part) {
	        return part.isToggle && ray.intersects(part.element);
	    });
	}
	
	/**
	 * Subscribes to browser events (click, contextmenu, touchstart, touchend, resize and scroll)
	 * Dispatches 3 types of events - used by the menu system - by registering handlers and firing them
	 * It basically *converts* browser events to another type of events
	 * The choice of triggered handlers depends of:
	 * 1. is the menu currently on screen
	 * 2. do we click inside or outside of the menu
	 * 3. do we click/contextmenu or tap/tap-and-hold
	 */
	
	var MenuEmitter = function (_EmitterPlug) {
	    _inherits(MenuEmitter, _EmitterPlug);
	
	    _createClass(MenuEmitter, null, [{
	        key: 'getInstance',
	
	
	        //<editor-fold desc="Singleton">
	        value: function getInstance() {
	            if (!instance) {
	                instance = new MenuEmitter();
	            }
	            return instance;
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Constructor">
	
	    }]);
	
	    function MenuEmitter() {
	        _classCallCheck(this, MenuEmitter);
	
	        var _this = _possibleConstructorReturn(this, (MenuEmitter.__proto__ || Object.getPrototypeOf(MenuEmitter)).call(this));
	
	        _this.dispatchInteraction = _this.dispatchInteraction.bind(_this);
	        _this.dispatchClose = _this.dispatchClose.bind(_this);
	
	        _this.handlers = {
	            onMouseOver: _this.onMouseOver.bind(_this),
	            onMouseOut: _this.onMouseOut.bind(_this),
	            onMouseDown: _this.onMouseDown.bind(_this),
	            onMouseUp: _this.onMouseUp.bind(_this),
	            onContextMenu: _this.onContextMenu.bind(_this),
	            onTouchStart: _this.onTouchStart.bind(_this),
	            onTouchEnd: _this.onTouchEnd.bind(_this),
	            onResize: _this.dispatchClose,
	            onScroll: _this.dispatchClose
	        };
	        return _this;
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Menu part registration">
	    /**
	     * Registers menu part
	     * This is used for differentiating between clicking the menu and outside of the menu
	     * @param element
	     */
	
	
	    _createClass(MenuEmitter, [{
	        key: 'registerPart',
	        value: function registerPart(element, isToggle) {
	            parts.push({
	                element: element,
	                isToggle: isToggle
	            });
	        }
	
	        /**
	         * Unregisters all menu parts
	         */
	
	    }, {
	        key: 'unregisterAllParts',
	        value: function unregisterAllParts() {
	            parts = [];
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Evaluation and firing">
	        /**
	         * @param handlerName
	         * @param ray Emitter ray
	         * @param closeMenu Should we close the menu
	         * @returns {boolean} True if happened outside
	         */
	
	    }, {
	        key: 'dispatchInteraction',
	        value: function dispatchInteraction(handlerName, ray, closeMenu) {
	            // 1. close the current menu if needed
	            if (closeMenu) {
	                this.dispatchClose(ray);
	            }
	            // 2. fire the requested handler
	            this.emit(handlerName, ray);
	        }
	
	        /**
	         * Dispatches the close event
	         */
	
	    }, {
	        key: 'dispatchClose',
	        value: function dispatchClose(ray) {
	            this.unregisterAllParts();
	            this.emit(MenuEmitter.ON_CLOSE);
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Mouse">
	
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(ray) {
	            this.isMenuCurrentlyOpen = !parts.length;
	
	            var isInside;
	
	            if (!_click2.default.isGhostClick(ray)) {
	                // avoid ghost 'click' event on touch devices
	                // we're ignoring toggle parts here
	                // for instance, if dropdown button is in toggleMode, it is a toggle part
	                // if the menu is open and we click the button, the menu should close
	                isInside = isMenuPartClicked(ray, false);
	                if (isInside) {
	                    this.dispatchInteraction(MenuEmitter.ON_MOUSE_DOWN_INSIDE, ray);
	                } else if (!this.isMenuCurrentlyOpen) {
	                    this.dispatchInteraction(MenuEmitter.ON_MOUSE_DOWN_OUTSIDE, ray, true);
	                }
	            }
	        }
	
	        /**
	         * Fired on document body mouse up
	         * If we're on touch interface - do nothing
	         * @param e
	         */
	
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp(ray) {
	            var isInside;
	
	            if (!_click2.default.isGhostClick(ray)) {
	                // avoid ghost 'click' event on touch devices
	                // we're ignoring toggle parts here
	                // we're checking only if this was mouseup inside, which would trigger an item when opening the menu with click-and-drag
	                isInside = isMenuPartClicked(ray, false);
	                if (isInside) {
	                    this.dispatchInteraction(MenuEmitter.ON_MOUSE_UP_INSIDE, ray);
	                }
	            }
	        }
	
	        /**
	         * Context menu handler
	         * Inside our app root, we will prevent default
	         * However, here we'll dispatch ON_CONTEXT_MENU_INSIDE or ON_CONTEXT_MENU_OUTSIDE
	         * The menu takes care of preventing default when ON_CONTEXT_MENU_INSIDE
	         * The app takes care of preventing default when ON_CONTEXT_MENU_OUTSIDE
	         * @param e
	         */
	
	    }, {
	        key: 'onContextMenu',
	        value: function onContextMenu(ray) {
	            var isInside;
	
	            if (_click2.default.isGhostClick(ray)) {
	                ray.preventDefault(); // avoid ghost 'contextmenu' event on touch devices
	            } else {
	                isInside = isMenuPartClicked(ray, false);
	                if (isInside) {
	                    this.dispatchInteraction(MenuEmitter.ON_CONTEXT_MENU_INSIDE, ray);
	                } else {
	                    this.dispatchInteraction(MenuEmitter.ON_CONTEXT_MENU_OUTSIDE, ray);
	                }
	            }
	        }
	    }, {
	        key: 'onMouseOver',
	        value: function onMouseOver(ray) {
	            this.createRayAndEmit(MenuEmitter.ON_MOUSE_OVER, document, ray);
	        }
	    }, {
	        key: 'onMouseOut',
	        value: function onMouseOut(ray) {
	            this.createRayAndEmit(MenuEmitter.ON_MOUSE_OUT, document, ray);
	        }
	
	        //</editor-fold>
	
	        //<editor-fold desc="Touch">
	        /**
	         * Fires on document body touchstart
	         * We're switching to touch mode upon each touch
	         * onClick handler checks if we're in touch mode and does not fire (preventing ghost clicks)
	         * Ghost clicks: http://ariatemplates.com/blog/2014/05/ghost-clicks-in-mobile-browsers/
	         * @param e
	         */
	
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(ray) {
	            var self = this,
	                touch = ray.e.changedTouches[0],
	                isInside;
	
	            ray.position = {
	                x: touch.clientX,
	                y: touch.clientY
	            };
	
	            isInside = isMenuPartClicked(ray, false);
	
	            if (isInside) {
	                // on tap, trigger the click handler
	                this.dispatchInteraction(MenuEmitter.ON_TOUCH_START_INSIDE, ray);
	            } else {
	                this.dispatchInteraction(MenuEmitter.ON_TOUCH_START_OUTSIDE, ray, true);
	                // after a delay (tap and hold) trigger the context menu handler
	                touchTimeout = setTimeout(function () {
	                    // we're producing the 'onContextMenu' event on tap-and-hold
	                    // because of that, we might have tapped the drop-down button, which opened the menu
	                    // we're still within this timeout interval, waiting to dispatch ON_CONTEXT_MENU
	                    // however, if the button is in toggle mode, this action would close the menu
	                    // since we don't want this to happen, we are ignoring the toggle parts here
	                    isInside = isMenuPartClicked(ray, true); // include toggle parts
	                    if (!isInside) {
	                        self.dispatchInteraction(MenuEmitter.ON_CONTEXT_MENU_OUTSIDE, ray, true); // close menu
	                    }
	                }, TAP_AND_HOLD_INTERVAL);
	            }
	        }
	
	        /**
	         * Fires on document body touchend
	         * @param e
	         */
	
	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(ray) {
	            var touch = ray.e.changedTouches[0],
	                isInside;
	
	            ray.position = {
	                x: touch.clientX,
	                y: touch.clientY
	            };
	
	            // reset the tap-and-hold timer
	            clearTimeout(touchTimeout);
	
	            isInside = isMenuPartClicked(ray, false);
	
	            if (isInside) {
	                this.dispatchInteraction(MenuEmitter.ON_TOUCH_END_INSIDE, ray);
	            }
	        }
	        //</editor-fold>
	
	    }]);
	
	    return MenuEmitter;
	}(EmitterPlug);
	
	//<editor-fold desc="Constants">
	
	
	exports.default = MenuEmitter;
	MenuEmitter.ON_MOUSE_OVER = 'onMouseOver'; // for opening child popups
	MenuEmitter.ON_MOUSE_OUT = 'onMouseOut'; // for closing child popups
	MenuEmitter.ON_TOUCH_START_INSIDE = 'onTouchStart';
	MenuEmitter.ON_TOUCH_END_INSIDE = 'onTouchEnd';
	MenuEmitter.ON_TOUCH_START_OUTSIDE = 'onTouchStartOutside';
	MenuEmitter.ON_MOUSE_UP_INSIDE = 'onMouseUpInside'; // when menu part clicked
	MenuEmitter.ON_MOUSE_DOWN_INSIDE = 'onMouseDownInside'; // when menu part clicked
	MenuEmitter.ON_MOUSE_DOWN_OUTSIDE = 'onMouseDownOutside'; // when clicked outside of the menu
	MenuEmitter.ON_CONTEXT_MENU_INSIDE = 'onContextMenuInside'; // when menu part right-clicked
	MenuEmitter.ON_CONTEXT_MENU_OUTSIDE = 'onContextMenuOutside'; // when right-clicked outside of the menu
	MenuEmitter.ON_CLOSE = 'onClose'; // when menu has to close
	//</editor-fold>

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ClickUtil = function () {
	    function ClickUtil() {
	        _classCallCheck(this, ClickUtil);
	    }
	
	    _createClass(ClickUtil, null, [{
	        key: "isGhostClick",
	        value: function isGhostClick(ray) {
	            return ClickUtil.isGhostClickEvent(ray.e);
	        }
	    }, {
	        key: "isGhostClickEvent",
	        value: function isGhostClickEvent(e) {
	            return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents;
	        }
	    }]);
	
	    return ClickUtil;
	}();
	
	exports.default = ClickUtil;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports.Emitter = __webpack_require__(21);
	module.exports.EmitterBase = __webpack_require__(22);
	module.exports.EmitterPlug = __webpack_require__(28);
	module.exports.Ray = __webpack_require__(23);
	module.exports.evaluateID = __webpack_require__(25);
	module.exports.evaluateClassName = __webpack_require__(26);
	module.exports.evaluateReactID = __webpack_require__(29);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _EmitterBase2 = __webpack_require__(22);
	
	var _EmitterBase3 = _interopRequireDefault(_EmitterBase2);
	
	var _Ray = __webpack_require__(23);
	
	var _Ray2 = _interopRequireDefault(_Ray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// [event name, event handler name]
	var ON_MOUSE_OVER = ['mouseover', 'onMouseOver'],
	    ON_MOUSE_OUT = ['mouseout', 'onMouseOut'],
	    ON_MOUSE_ENTER = ['mouseenter', 'onMouseEnter'],
	    ON_MOUSE_LEAVE = ['mouseleave', 'onMouseLeave'],
	    ON_MOUSE_DOWN = ['mousedown', 'onMouseDown'],
	    ON_MOUSE_UP = ['mouseup', 'onMouseUp'],
	    ON_MOUSE_MOVE = ['mousemove', 'onMouseMove'],
	    ON_CLICK = ['click', 'onClick'],
	    ON_DOUBLE_CLICK = ['doubleclick', 'onDoubleClick'],
	    ON_CONTEXT_MENU = ['contextmenu', 'onContextMenu'],
	    ON_TOUCH_START = ['touchstart', 'onTouchStart'],
	    ON_TOUCH_END = ['touchend', 'onTouchEnd'],
	    ON_TOUCH_MOVE = ['touchmove', 'onTouchMove'],
	    ON_TOUCH_CANCEL = ['touchcancel', 'onTouchCancel'],
	    ON_CHANGE = ['change', 'onChange'],
	    ON_INPUT = ['input', 'onInput'],
	    ON_SUBMIT = ['submit', 'onSubmit'],
	    ON_FOCUS = ['focus', 'onFocus'],
	    ON_BLUR = ['blur', 'onBlur'],
	    ON_KEY_DOWN = ['keydown', 'onKeyDown'],
	    ON_KEY_UP = ['keyup', 'onKeyUp'],
	    ON_PRESS = ['press', 'onPress'],
	    ON_WHEEL = ['wheel', 'onWheel'],
	    ON_RESIZE = ['resize', 'onResize'],
	    ON_SCROLL = ['scroll', 'onScroll'];
	
	var instance;
	
	/**
	 * Subscribes to browser events (click, contextmenu, touchstart, touchend, resize and scroll)
	 * Dispatches 3 types of events - used by the menu system - by registering handlers and firing them
	 * It basically *converts* browser events to another type of events
	 * The choice of triggered handlers depends of:
	 * 1. is the menu currently on screen
	 * 2. do we click inside or outside of the menu
	 * 3. do we click/contextmenu or tap/tap-and-hold
	 */
	
	var Emitter = function (_EmitterBase) {
	    _inherits(Emitter, _EmitterBase);
	
	    _createClass(Emitter, null, [{
	        key: 'getInstance',
	
	
	        //<editor-fold desc="Singleton">
	        value: function getInstance() {
	            if (!instance) {
	                instance = new Emitter();
	            }
	            return instance;
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Constructor">
	
	    }]);
	
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        // document
	        var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
	        _this[ON_MOUSE_OVER[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_OVER[1], document);
	        _this[ON_MOUSE_OUT[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_OUT[1], document);
	        _this[ON_MOUSE_ENTER[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_ENTER[1], document);
	        _this[ON_MOUSE_LEAVE[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_LEAVE[1], document);
	        _this[ON_MOUSE_DOWN[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_DOWN[1], document);
	        _this[ON_MOUSE_UP[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_UP[1], document);
	        _this[ON_MOUSE_MOVE[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_MOVE[1], document);
	        _this[ON_CLICK[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_CLICK[1], document);
	        _this[ON_DOUBLE_CLICK[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_DOUBLE_CLICK[1], document);
	        _this[ON_CONTEXT_MENU[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_CONTEXT_MENU[1], document);
	        _this[ON_TOUCH_START[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_TOUCH_START[1], document);
	        _this[ON_TOUCH_END[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_TOUCH_END[1], document);
	        _this[ON_TOUCH_MOVE[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_TOUCH_MOVE[1], document);
	        _this[ON_TOUCH_CANCEL[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_TOUCH_CANCEL[1], document);
	        _this[ON_MOUSE_OVER[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_OVER[1], document);
	        _this[ON_MOUSE_OVER[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_MOUSE_OVER[1], document);
	        _this[ON_CHANGE[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_CHANGE[1], document);
	        _this[ON_INPUT[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_INPUT[1], document);
	        _this[ON_SUBMIT[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_SUBMIT[1], document);
	        _this[ON_FOCUS[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_FOCUS[1], document);
	        _this[ON_BLUR[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_BLUR[1], document);
	        _this[ON_KEY_DOWN[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_KEY_DOWN[1], document);
	        _this[ON_KEY_UP[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_KEY_UP[1], document);
	        _this[ON_PRESS[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_PRESS[1], document);
	        _this[ON_WHEEL[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_WHEEL[1], document);
	
	        // window
	        _this[ON_RESIZE[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_RESIZE[1], window);
	        _this[ON_SCROLL[1]] = _lodash2.default.bind(_this.createRayAndEmit, _this, ON_SCROLL[1], window);
	        return _this;
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Browser event subscription">
	
	
	    _createClass(Emitter, [{
	        key: 'handleSubscription',
	        value: function handleSubscription(previousCount, nextCount) {
	            if (previousCount === 0 && nextCount >= 1) {
	                this.browserSubscribe();
	            } else if (previousCount && nextCount === 0) {
	                this.browserUnsubscribe();
	            }
	        }
	    }, {
	        key: 'browserSubscribe',
	        value: function browserSubscribe() {
	            // TODO: optimize, so we add listeners only for events actually used by subscribers (keep each event type count)
	            // TODO: also, allow specifying the capture/bubble phase per handler
	            document.body.addEventListener(ON_MOUSE_OVER[0], this[ON_MOUSE_OVER[1]], false);
	            document.body.addEventListener(ON_MOUSE_OUT[0], this[ON_MOUSE_OUT[1]], false);
	            document.body.addEventListener(ON_MOUSE_ENTER[0], this[ON_MOUSE_ENTER[1]], false);
	            document.body.addEventListener(ON_MOUSE_LEAVE[0], this[ON_MOUSE_LEAVE[1]], false);
	            document.body.addEventListener(ON_MOUSE_DOWN[0], this[ON_MOUSE_DOWN[1]], false);
	            document.body.addEventListener(ON_MOUSE_UP[0], this[ON_MOUSE_UP[1]], false);
	            document.body.addEventListener(ON_MOUSE_MOVE[0], this[ON_MOUSE_MOVE[1]], false);
	            document.body.addEventListener(ON_CLICK[0], this[ON_CLICK[1]], false);
	            document.body.addEventListener(ON_DOUBLE_CLICK[0], this[ON_DOUBLE_CLICK[1]], false);
	            document.body.addEventListener(ON_CONTEXT_MENU[0], this[ON_CONTEXT_MENU[1]], false);
	            document.body.addEventListener(ON_TOUCH_START[0], this[ON_TOUCH_START[1]], false);
	            document.body.addEventListener(ON_TOUCH_END[0], this[ON_TOUCH_END[1]], false);
	            document.body.addEventListener(ON_TOUCH_MOVE[0], this[ON_TOUCH_MOVE[1]], false);
	            document.body.addEventListener(ON_TOUCH_CANCEL[0], this[ON_TOUCH_CANCEL[1]], false);
	            document.body.addEventListener(ON_CHANGE[0], this[ON_CHANGE[1]], false);
	            document.body.addEventListener(ON_INPUT[0], this[ON_INPUT[1]], false);
	            document.body.addEventListener(ON_SUBMIT[0], this[ON_SUBMIT[1]], false);
	            document.body.addEventListener(ON_FOCUS[0], this[ON_FOCUS[1]], false);
	            document.body.addEventListener(ON_BLUR[0], this[ON_BLUR[1]], false);
	            document.body.addEventListener(ON_KEY_DOWN[0], this[ON_KEY_DOWN[1]], false);
	            document.body.addEventListener(ON_KEY_UP[0], this[ON_KEY_UP[1]], false);
	            document.body.addEventListener(ON_PRESS[0], this[ON_PRESS[1]], false);
	            document.body.addEventListener(ON_WHEEL[0], this[ON_WHEEL[1]], false);
	            window.addEventListener(ON_RESIZE[0], this[ON_RESIZE[1]], false);
	            window.addEventListener(ON_SCROLL[0], this[ON_SCROLL[1]], false);
	            //console.log('subscribed')
	        }
	    }, {
	        key: 'browserUnsubscribe',
	        value: function browserUnsubscribe() {
	            document.body.removeEventListener(ON_MOUSE_OVER[0], this[ON_MOUSE_OVER[1]]);
	            document.body.removeEventListener(ON_MOUSE_OUT[0], this[ON_MOUSE_OUT[1]]);
	            document.body.removeEventListener(ON_MOUSE_ENTER[0], this[ON_MOUSE_ENTER[1]]);
	            document.body.removeEventListener(ON_MOUSE_LEAVE[0], this[ON_MOUSE_LEAVE[1]]);
	            document.body.removeEventListener(ON_MOUSE_DOWN[0], this[ON_MOUSE_DOWN[1]]);
	            document.body.removeEventListener(ON_MOUSE_UP[0], this[ON_MOUSE_UP[1]]);
	            document.body.removeEventListener(ON_MOUSE_MOVE[0], this[ON_MOUSE_MOVE[1]]);
	            document.body.removeEventListener(ON_CLICK[0], this[ON_CLICK[1]]);
	            document.body.removeEventListener(ON_DOUBLE_CLICK[0], this[ON_DOUBLE_CLICK[1]]);
	            document.body.removeEventListener(ON_CONTEXT_MENU[0], this[ON_CONTEXT_MENU[1]]);
	            document.body.removeEventListener(ON_TOUCH_START[0], this[ON_TOUCH_START[1]]);
	            document.body.removeEventListener(ON_TOUCH_END[0], this[ON_TOUCH_END[1]]);
	            document.body.removeEventListener(ON_TOUCH_MOVE[0], this[ON_TOUCH_MOVE[1]]);
	            document.body.removeEventListener(ON_TOUCH_CANCEL[0], this[ON_TOUCH_CANCEL[1]]);
	            document.body.removeEventListener(ON_CHANGE[0], this[ON_CHANGE[1]]);
	            document.body.removeEventListener(ON_INPUT[0], this[ON_INPUT[1]]);
	            document.body.removeEventListener(ON_SUBMIT[0], this[ON_SUBMIT[1]]);
	            document.body.removeEventListener(ON_FOCUS[0], this[ON_FOCUS[1]]);
	            document.body.removeEventListener(ON_BLUR[0], this[ON_BLUR[1]]);
	            document.body.removeEventListener(ON_KEY_DOWN[0], this[ON_KEY_DOWN[1]]);
	            document.body.removeEventListener(ON_KEY_UP[0], this[ON_KEY_UP[1]]);
	            document.body.removeEventListener(ON_PRESS[0], this[ON_PRESS[1]]);
	            document.body.removeEventListener(ON_WHEEL[0], this[ON_WHEEL[1]]);
	            window.removeEventListener(ON_RESIZE[0], this[ON_RESIZE[1]]);
	            window.removeEventListener(ON_SCROLL[0], this[ON_SCROLL[1]]);
	            //console.log('unsubscribed')
	        }
	        //</editor-fold>
	
	    }]);
	
	    return Emitter;
	}(_EmitterBase3.default);
	
	//<editor-fold desc="Constants">
	// make accessible from the outside
	
	
	exports.default = Emitter;
	Emitter.ON_MOUSE_OVER = ON_MOUSE_OVER[1];
	Emitter.ON_MOUSE_OUT = ON_MOUSE_OUT[1];
	Emitter.ON_MOUSE_ENTER = ON_MOUSE_ENTER[1];
	Emitter.ON_MOUSE_LEAVE = ON_MOUSE_LEAVE[1];
	Emitter.ON_TOUCH_START_INSIDE = ON_MOUSE_DOWN[1];
	Emitter.ON_MOUSE_UP = ON_MOUSE_UP[1];
	Emitter.ON_MOUSE_MOVE = ON_MOUSE_MOVE[1];
	Emitter.ON_CLICK = ON_CLICK[1];
	Emitter.ON_DOUBLE_CLICK = ON_DOUBLE_CLICK[1];
	Emitter.ON_CONTEXT_MENU = ON_CONTEXT_MENU[1];
	Emitter.ON_TOUCH_START_INSIDE = ON_TOUCH_START[1];
	Emitter.ON_TOUCH_END = ON_TOUCH_END[1];
	Emitter.ON_TOUCH_MOVE = ON_TOUCH_MOVE[1];
	Emitter.ON_TOUCH_CANCEL = ON_TOUCH_CANCEL[1];
	Emitter.ON_CHANGE = ON_CHANGE[1];
	Emitter.ON_INPUT = ON_INPUT[1];
	Emitter.ON_SUBMIT = ON_SUBMIT[1];
	Emitter.ON_FOCUS = ON_FOCUS[1];
	Emitter.ON_BLUR = ON_BLUR[1];
	Emitter.ON_KEY_DOWN = ON_KEY_DOWN[1];
	Emitter.ON_KEY_UP = ON_KEY_UP[1];
	Emitter.ON_PRESS = ON_PRESS[1];
	Emitter.ON_WHEEL = ON_WHEEL[1];
	Emitter.ON_RESIZE = ON_RESIZE[1];
	Emitter.ON_SCROLL = ON_SCROLL[1];
	//</editor-fold>

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Ray = __webpack_require__(23);
	
	var _Ray2 = _interopRequireDefault(_Ray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EmitterBase = function () {
	
	    //<editor-fold desc="Constructor">
	    function EmitterBase() {
	        _classCallCheck(this, EmitterBase);
	
	        this.slots = [];
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Connect/disconnect">
	    // TODO: slot v2.0 should contain:
	    // slot = {
	    //     handlers, // current slot data
	    //     elements, // array od elements to check for intersection before emitting a ray
	    //     phase, // capture/bubbling phase
	    //     useDetachedRays // fire detached rays
	    // }
	
	
	    _createClass(EmitterBase, [{
	        key: 'connect',
	        value: function connect(slot) {
	            var len;
	
	            if (this.isConnected(slot)) {
	                return;
	            }
	            len = this.slots.length;
	            this.slots.push(slot);
	            this.handleSubscription(len, this.slots.length);
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect(slot) {
	            var len = this.slots.length;
	
	            _lodash2.default.remove(this.slots, function (subscriber) {
	                return subscriber === slot;
	            });
	            this.handleSubscription(len, this.slots.length);
	        }
	    }, {
	        key: 'isConnected',
	        value: function isConnected(slot) {
	            return _lodash2.default.some(this.slots, function (subscriber) {
	                return subscriber === slot;
	            });
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Subscription">
	        /**
	         * Abstract
	         * @param previousCount
	         * @param nextCount
	         */
	
	    }, {
	        key: 'handleSubscription',
	        value: function handleSubscription(previousCount, nextCount) {}
	        // abstract
	
	        //</editor-fold>
	
	        //<editor-fold desc="Emitting">
	
	    }, {
	        key: 'createRayAndEmit',
	        value: function createRayAndEmit(handlerName, root, e) {
	            var ray;
	
	            e = e || window.event;
	
	            ray = new _Ray2.default(e, root, {
	                x: e.clientX,
	                y: e.clientY
	            });
	
	            this.emit(handlerName, ray);
	        }
	    }, {
	        key: 'emit',
	        value: function emit(handlerName, ray) {
	            var handler;
	
	            _lodash2.default.forEach(this.slots, function (slot) {
	                if (slot) {
	                    // might be undefined because firing some handlers could disconnect others (recursion)
	                    handler = slot[handlerName];
	
	                    // useDetachedRays - a switch *per slot object* (with false as default)
	                    if (ray && !ray.isAttached() && !slot.useDetachedRays) {
	                        console.warn('Ray has been detached', ray.toString());
	                        return false;
	                    }
	
	                    // TODO: if slot connected providing the 'elements' array, check for intersections of ray and any of the element. Emit only when intersection exists.
	                    if (handler) {
	                        handler(ray);
	                    }
	                }
	            });
	        }
	        //</editor-fold>
	
	    }]);
	
	    return EmitterBase;
	}();
	
	exports.default = EmitterBase;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _dom = __webpack_require__(24);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _evaluateID = __webpack_require__(25);
	
	var _evaluateID2 = _interopRequireDefault(_evaluateID);
	
	var _evaluateClassName = __webpack_require__(26);
	
	var _evaluateClassName2 = _interopRequireDefault(_evaluateClassName);
	
	var _equalID = __webpack_require__(27);
	
	var _equalID2 = _interopRequireDefault(_equalID);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Ray emitted by an emitter
	 */
	var Ray = function () {
	
	    /**
	     * @param e Event
	     * @param root Root element (optional, defaults to document)
	     * @param position Position in screen coordinates (optional)
	     */
	    function Ray(e, root, position) {
	        _classCallCheck(this, Ray);
	
	        this.e = e;
	        this.target = e.target;
	        this.root = root || document;
	        this.position = position;
	    }
	
	    /**
	     * @Private
	     * Gets the reversed (bottom up)
	     * @returns {*} Array of DOM nodes
	     */
	
	
	    _createClass(Ray, [{
	        key: '_getPath',
	        value: function _getPath() {
	            if (!this.path) {
	                // be lazy for performance
	                this.path = _dom2.default.buildPath(this.root, this.target);
	            }
	            return this.path;
	        }
	
	        /**
	         * Gets intersections (bottom-up)
	         * @returns {*} Array of DOM nodes
	         */
	
	    }, {
	        key: 'getIntersections',
	        value: function getIntersections(topDown) {
	            var bottomUpPath = this._getPath();
	
	            if (!topDown) {
	                return bottomUpPath;
	            }
	
	            if (!this.topDownPath) {
	                // be lazy for performance
	                this.topDownPath = _lodash2.default.reverse(bottomUpPath);
	            }
	
	            return this.topDownPath;
	        }
	
	        /**
	         * Checks if the ray is attached to the DOM
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'isAttached',
	        value: function isAttached() {
	            var reversed = this._getPath();
	
	            //return reversed && reversed[reversed.length - 1] === this.parentElement;
	            return !!reversed;
	        }
	
	        //<editor-fold desc="Ray operations">
	        /**
	         * Returns true if path intersects node
	         * @param node
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'intersects',
	        value: function intersects(node) {
	            var path = this._getPath();
	
	            return path && path.indexOf(node) > -1;
	        }
	
	        /**
	         * Returns node with specified ID if ray intersects it, otherwise false
	         * @param id ID to check for
	         * @param strict If true, look for exact ID. If false, use substring.
	         * @returns {*}
	         */
	
	    }, {
	        key: 'intersectsId',
	        value: function intersectsId(id, strict) {
	            var func = strict ? _equalID2.default : _evaluateID2.default;
	
	            return this.findNode(_lodash2.default.partial(func, id)) || false;
	        }
	
	        /**
	         * Returns node with specified className if ray intersects it, otherwise false
	         * @param id ID to check for
	         * @returns {*}
	         */
	
	    }, {
	        key: 'intersectsClass',
	        value: function intersectsClass(className) {
	            return this.findNode(_lodash2.default.partial(_evaluateClassName2.default, className));
	        }
	
	        /**
	         * Finds the node using a predicate
	         * @param predicate Function accepting and item and returning boolean (match)
	         * @param topDown Should we start from root
	         * @returns {*}
	         */
	
	    }, {
	        key: 'findNode',
	        value: function findNode(predicate, topDown) {
	            var path = this._getPath();
	
	            return topDown ? _lodash2.default.findLast(path, predicate) : _lodash2.default.find(path, predicate);
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Event operations">
	
	    }, {
	        key: 'preventDefault',
	        value: function preventDefault() {
	            this.e.preventDefault();
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="toString">
	
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'Ray(' + this._getPath().length + ' intersections)';
	        }
	        //</editor-fold>
	
	    }]);
	
	    return Ray;
	}();
	
	exports.default = Ray;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DomUtil = function () {
	    function DomUtil() {
	        _classCallCheck(this, DomUtil);
	    }
	
	    _createClass(DomUtil, null, [{
	        key: "buildPath",
	        value: function buildPath(parentElement, childElement) {
	            var path = [],
	                node;
	
	            path.push(childElement);
	
	            if (childElement === parentElement) {
	                return path;
	            }
	
	            node = childElement.parentNode;
	
	            while (node != null) {
	                path.push(node);
	                if (node === parentElement) {
	                    return path;
	                }
	                node = node.parentNode;
	            }
	            return false; // not a real path
	        }
	    }]);
	
	    return DomUtil;
	}();
	
	exports.default = DomUtil;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = evaluateID;
	/**
	 * Checks whether the substring is present within element ID
	 * @param sub Substring to check for
	 * @param element DOM element
	 * @returns {*|boolean}
	 */
	function evaluateID(sub, element) {
	  var id = element.id;
	
	  return id && id.indexOf(sub) === 0;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = evaluateClassName;
	var BLANK_STRING = ' ';
	
	/**
	 * Checks whether the substring is present within element className
	 * @param sub Substring to check for
	 * @param element DOM element
	 * @returns {*|boolean}
	 */
	function evaluateClassName(sub, element) {
	  var className = BLANK_STRING + element.className + BLANK_STRING;
	
	  sub = BLANK_STRING + sub + BLANK_STRING;
	  return className && className.indexOf(sub) > -1;
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = equalID;
	/**
	 * Checks whether the element ID is equal to ID
	 * @param id ID to check for
	 * @param element DOM element
	 * @returns {*|boolean}
	 */
	function equalID(id, element) {
	  return id === element.id;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Emitter = __webpack_require__(21);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	var _EmitterBase2 = __webpack_require__(22);
	
	var _EmitterBase3 = _interopRequireDefault(_EmitterBase2);
	
	var _Ray = __webpack_require__(23);
	
	var _Ray2 = _interopRequireDefault(_Ray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A plug that could be subclassed
	 * Connects to Emitter passing this.handlers (defined by subclass)
	 */
	var EmitterPlug = function (_EmitterBase) {
	    _inherits(EmitterPlug, _EmitterBase);
	
	    //<editor-fold desc="Constructor">
	    function EmitterPlug() {
	        _classCallCheck(this, EmitterPlug);
	
	        var _this = _possibleConstructorReturn(this, (EmitterPlug.__proto__ || Object.getPrototypeOf(EmitterPlug)).call(this));
	
	        _this.emitter = _Emitter2.default.getInstance();
	        return _this;
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Emitter subscription">
	
	
	    _createClass(EmitterPlug, [{
	        key: 'handleSubscription',
	        value: function handleSubscription(previousCount, nextCount) {
	            if (previousCount === 0 && nextCount >= 1) {
	                this.emitter.connect(this.handlers);
	            } else if (previousCount && nextCount === 0) {
	                this.emitter.disconnect(this.handlers);
	            }
	        }
	        //</editor-fold>
	
	    }]);
	
	    return EmitterPlug;
	}(_EmitterBase3.default);
	
	exports.default = EmitterPlug;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = evaluateReactID;
	/**
	 * Checks whether the substring is present within element's React ID
	 * @param sub Substring to check for
	 * @param element DOM element
	 * @returns {*|boolean}
	 */
	function evaluateReactID(sub, element) {
	  var id = element.getAttribute && element.getAttribute('data-reactid');
	
	  return id && id.indexOf(sub) > -1;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var classnames = __webpack_require__(11);
	
	var MenuItemFactory = function () {
	    function MenuItemFactory(renderers, classPrefix) {
	        _classCallCheck(this, MenuItemFactory);
	
	        this.renderers = renderers;
	        this.classPrefix = classPrefix;
	    }
	
	    _createClass(MenuItemFactory, [{
	        key: 'createItem',
	        value: function createItem(data, key, classes, config) {
	            var isExpandable = !!data.items,
	                renderer = this.renderers[data.type],
	                additions = {},
	                classPrefix = this.classPrefix,
	                className;
	
	            additions[this.classPrefix + 'menu-item'] = true;
	            additions[this.classPrefix + 'menu-item-expandable'] = isExpandable;
	            className = classnames(classes, additions);
	
	            if (!renderer) {
	                throw 'Undefined renderer for type [' + data.type + ']';
	            }
	
	            return _react2.default.createElement(renderer, {
	                data: data,
	                key: key,
	                isExpandable: isExpandable,
	                className: className,
	                classPrefix: classPrefix,
	                config: config
	            });
	        }
	    }]);
	
	    return MenuItemFactory;
	}();
	
	exports.default = MenuItemFactory;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var classNames = __webpack_require__(11);
	
	var MenuPopupFactory = function () {
	    function MenuPopupFactory(classPrefix) {
	        _classCallCheck(this, MenuPopupFactory);
	
	        this.classPrefix = classPrefix;
	    }
	
	    _createClass(MenuPopupFactory, [{
	        key: 'createItem',
	        value: function createItem(config) {
	            var className = classNames('showing', _Dom2.default.buildClassNames(this.classPrefix, ['menu-popup']));
	
	            return _react2.default.createElement(
	                'div',
	                _extends({}, config.handlers, { id: config.popupId, key: config.popupId, className: className, styles: config.styles }),
	                config.children
	            );
	        }
	    }]);
	
	    return MenuPopupFactory;
	}();
	
	exports.default = MenuPopupFactory;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_LIBERATOR_LAYER_ID = '___liberator___';
	var DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE = 'div';
	var DEFAULT_LIBERATOR_MULTIPLE_CHILDREN_MARKER = 'react-liberator-multi';
	
	var Liberator = function (_Component) {
	    _inherits(Liberator, _Component);
	
	    function Liberator(props) {
	        _classCallCheck(this, Liberator);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Liberator).call(this, props));
	
	        _this.state = {
	            layerElement: null,
	            wrapperElement: null
	        };
	        return _this;
	    }
	
	    _createClass(Liberator, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.active && this.props.visible) {
	                this.activate(this.props.children);
	                this.renderInPopup(this.props.children);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.deactivate(this.props.children);
	        }
	    }, {
	        key: 'activate',
	        value: function activate(children) {
	            var layerElement = this.props.layer,
	                layerId,
	                wrapperElement;
	
	            if (!layerElement) {
	                layerId = this.props.layerId, layerElement = document.getElementById(layerId); // layer lookup
	            }
	
	            if (!layerElement) {
	                // if we haven't found the predefined div, we're creating it on the fly
	                layerElement = document.createElement(this.props.layerElementType);
	                layerElement.setAttribute('id', layerId);
	                document.body.appendChild(layerElement);
	            }
	
	            this.state.layerElement = layerElement;
	
	            // we're creating a wrapper element on the fly
	            // we're rendering the component into this element when active
	            wrapperElement = document.createElement('div');
	            if (this.props.className) {
	                wrapperElement.className = this.props.className;
	            }
	            this.state.wrapperElement = wrapperElement;
	
	            layerElement.appendChild(wrapperElement);
	
	            this.props.onActivate({
	                layer: this.state.layerElement,
	                wrapper: this.state.wrapperElement,
	                children: children
	            });
	        }
	    }, {
	        key: 'deactivate',
	        value: function deactivate(children) {
	            var wrapperElement = this.state.wrapperElement,
	                layerElement = this.state.layerElement;
	
	            this.props.onDeactivate({
	                layer: this.state.layerElement,
	                wrapper: this.state.wrapperElement,
	                children: children
	            });
	
	            if (wrapperElement) {
	                _reactDom2.default.unmountComponentAtNode(wrapperElement);
	                if (layerElement) {
	                    layerElement.removeChild(wrapperElement);
	                }
	                this.setState({
	                    wrapperElement: null
	                });
	            }
	            if (layerElement && !layerElement.childNodes.length && (this.props.autoCleanup || this.props.layerId === DEFAULT_LIBERATOR_LAYER_ID)) {
	                // removing the default layer automatically
	                // if no active popups, removing the layer altogether
	                document.body.removeChild(layerElement);
	                this.setState({
	                    layerElement: null
	                });
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(newProps) {
	            var changedActiveState = newProps.active !== this.props.active,
	                changedVisibility = newProps.visible !== this.props.visible,
	                isNowActive = newProps.active,
	                isNowVisible = newProps.visible,
	                shouldRenderInPopup = isNowActive && isNowVisible;
	
	            if (changedActiveState || changedVisibility) {
	                if (shouldRenderInPopup) {
	                    this.activate(newProps.children);
	                } else {
	                    this.deactivate(newProps.children);
	                }
	            }
	
	            if (shouldRenderInPopup) {
	                return this.renderInPopup(newProps.children);
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.props.active || !this.props.visible) {
	                return null; // short circuit here
	            } else {
	                    return this.wrapChildren(this.props.children);
	                }
	        }
	    }, {
	        key: 'wrapChildren',
	        value: function wrapChildren(children) {
	            if (!children) {
	                return null;
	            }
	
	            if (children.length > 1) {
	                // ReactDOM.render currently renders a single element only (https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
	                // Until the API changes, we have to wrap children inside the additional DIV
	                // We're marking this DIV with a class, so we the caller could differentiate this case
	                return _react2.default.createElement(
	                    'div',
	                    { className: DEFAULT_LIBERATOR_MULTIPLE_CHILDREN_MARKER },
	                    children
	                );
	            }
	
	            return children;
	        }
	    }, {
	        key: 'renderInPopup',
	        value: function renderInPopup(children) {
	            return (0, _reactDom.render)(this.wrapChildren(children), this.state.wrapperElement);
	        }
	    }]);
	
	    return Liberator;
	}(_react.Component);
	
	exports.default = Liberator;
	
	Liberator.propTypes = {
	    active: _react2.default.PropTypes.bool,
	    visible: _react2.default.PropTypes.bool,
	    layer: _react2.default.PropTypes.node,
	    layerId: _react2.default.PropTypes.string,
	    layerElementType: _react2.default.PropTypes.string,
	    autoCleanup: _react2.default.PropTypes.bool,
	    onActivate: _react2.default.PropTypes.func,
	    onDeactivate: _react2.default.PropTypes.func
	};
	Liberator.defaultProps = {
	    active: true, // popping up by default
	    visible: true, // visible by default
	    layer: null, // we could pass the layer element to render the popup to (takes precedence to layerId/layerElementType),
	    layerId: DEFAULT_LIBERATOR_LAYER_ID, // the ID of the element to render the popup to,
	    layerElementType: DEFAULT_LIBERATOR_LAYER_ELEMENT_TYPE, // the type of the element to render the popup to,
	    autoCleanup: false, // automatically destroying the layer when having no child elements
	    onActivate: function onActivate() {},
	    onDeactivate: function onDeactivate() {}
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(2);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(17);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Aligner = __webpack_require__(4);
	
	var _Aligner2 = _interopRequireDefault(_Aligner);
	
	var _Dom = __webpack_require__(10);
	
	var _Dom2 = _interopRequireDefault(_Dom);
	
	var _Menu = __webpack_require__(1);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuEmitter = __webpack_require__(18);
	
	var _MenuEmitter2 = _interopRequireDefault(_MenuEmitter);
	
	var _click = __webpack_require__(19);
	
	var _click2 = _interopRequireDefault(_click);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(11);
	
	var MOUSE_ENTER_DELAY = 0,
	    MOUSE_LEAVE_DELAY = 1000,
	    HINTS = function HINTS(depth) {
	    // default hints. Could be overridden via props
	    return !depth ? ['ss', 'se', 'sm', 'ns', 'ne', 'nm'] : // zero depth (first menu popup)
	    ['es', 'em', 'ee', 'ws', 'wm', 'we']; // all other depths
	};
	
	var DropdownMenu = function (_Component) {
	    _inherits(DropdownMenu, _Component);
	
	    //<editor-fold desc="Constructor">
	    function DropdownMenu(props) {
	        _classCallCheck(this, DropdownMenu);
	
	        var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));
	
	        _this.onButtonClick = _this.onButtonClick.bind(_this);
	        _this.onButtonTouchStart = _this.onButtonTouchStart.bind(_this);
	        _this.onButtonMouseEnter = _this.onButtonMouseEnter.bind(_this);
	        _this.onButtonMouseLeave = _this.onButtonMouseLeave.bind(_this);
	        _this.onButtonContextMenu = _this.onButtonContextMenu.bind(_this);
	        _this.onOpen = _this.onOpen.bind(_this);
	        _this.onClose = _this.onClose.bind(_this);
	        _this.setMenuVisibility = _this.setMenuVisibility.bind(_this);
	        _this.hideMenu = _this.hideMenu.bind(_this);
	
	        _this.state = {
	            isOpen: false
	        };
	        return _this;
	    }
	    //</editor-fold>
	
	    //<editor-fold desc="Toggle button handlers">
	
	
	    _createClass(DropdownMenu, [{
	        key: 'onButtonClick',
	        value: function onButtonClick(e) {
	            e.preventDefault();
	            if (!_click2.default.isGhostClickEvent(e)) {
	                this.isTouch = false;
	                this.openMenu();
	            }
	        }
	    }, {
	        key: 'onButtonContextMenu',
	        value: function onButtonContextMenu(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'onButtonTouchStart',
	        value: function onButtonTouchStart() {
	            this.isTouch = true;
	            this.openMenu();
	        }
	    }, {
	        key: 'onButtonMouseEnter',
	        value: function onButtonMouseEnter(e) {
	            if (_click2.default.isGhostClickEvent(e.nativeEvent)) {
	                return;
	            }
	            if (this.props.openOnMouseOver) {
	                _lodash2.default.delay(this.openMenu.bind(this), this.props.mouseEnterDelay);
	            }
	        }
	    }, {
	        key: 'onButtonMouseLeave',
	        value: function onButtonMouseLeave(e) {
	            if (_click2.default.isGhostClickEvent(e.nativeEvent)) {
	                return;
	            }
	            if (this.props.closeOnMouseOut) {
	                _lodash2.default.delay(this.closeMenu.bind(this), this.props.mouseLeaveDelay);
	            }
	        }
	
	        //</editor-fold>
	
	        //<editor-fold desc="Menu handlers">
	
	    }, {
	        key: 'onOpen',
	        value: function onOpen() {
	            // if we're in toggle mode, register button as toggle part,
	            // clicking or tapping the toggle parts produces 'onClickOutside' (so if the menu is open, clicking the button will close it)
	            // however, tap-and-hold won't produce 'onContextMenu' (which would close the menu)
	            var isToggle = this.props.toggleMode && !this.isTouch; // do not use toggle behaviour with touch, because it is currently problematic for MenuEmitter processing logic
	
	            _MenuEmitter2.default.getInstance().registerPart(this.buttonElement, isToggle);
	            this.props.onOpen();
	        }
	    }, {
	        key: 'onClose',
	        value: function onClose() {
	            // if the menu is closed by (this) dropdown menu, isOpen is already false
	            // we don't want to go circular, so short circuit here
	            if (this.state.isOpen) {
	                this.hideMenu();
	                this.props.onClose();
	            }
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="Actions">
	
	    }, {
	        key: 'hideMenu',
	        value: function hideMenu() {
	            var self = this;
	
	            _lodash2.default.defer(function () {
	                // we're deferring the hiding of the menu, so on close it doesn't go through the open->close->open transition
	                self.setMenuVisibility(false);
	            });
	        }
	    }, {
	        key: 'setMenuVisibility',
	        value: function setMenuVisibility(visible) {
	            this.setState({
	                isOpen: visible
	            });
	        }
	    }, {
	        key: 'openMenu',
	        value: function openMenu() {
	            if (!this.state.isOpen) {
	                // open only if currently closed
	                this.setMenuVisibility(true);
	            }
	            // else do nothing. If the menu is already open, it will close we'were clicking away from it.
	        }
	    }, {
	        key: 'closeMenu',
	        value: function closeMenu() {
	            if (this.state.isOpen) {
	                this.hideMenu();
	            }
	        }
	        //</editor-fold>
	
	        //<editor-fold desc="React">
	
	    }, {
	        key: 'renderButton',
	        value: function renderButton() {
	            var className = classnames('', _Dom2.default.buildClassNames(this.props.classPrefix, ['menu-button', this.state.isOpen ? 'menu-button-selected' : null])),
	
	            // render the child passed from the outside, or a default button
	            children = this.props.children || _react2.default.createElement(
	                'button',
	                { ref: 'button', className: className },
	                this.props.buttonText
	            ),
	                self = this;
	
	            return _react2.default.Children.map(children, function (child) {
	                return _react2.default.cloneElement(child, {
	                    ref: 'button',
	                    className: className,
	                    onMouseDown: self.onButtonClick, // TODO: onMouseDown
	                    onTouchStart: self.onButtonTouchStart,
	                    onMouseEnter: self.onButtonMouseEnter,
	                    onMouseLeave: self.onButtonMouseLeave,
	                    onContextMenu: self.onButtonContextMenu
	                });
	            }.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var buttonClassName = classnames(this.props.className, _Dom2.default.buildClassNames(this.props.classPrefix, ['drop-down', this.state.isOpen ? 'drop-down-open' : null])),
	                menu = this.state.isOpen ? _react2.default.createElement(_Menu2.default, {
	                config: this.props.config,
	                classPrefix: this.props.classPrefix,
	                onOpen: this.onOpen,
	                onClose: this.onClose,
	                onItemMouseEnter: this.props.onItemMouseEnter,
	                onItemMouseLeave: this.props.onItemMouseLeave,
	                onItemClick: this.props.onItemClick,
	                aligner: this.props.aligner,
	                alignTo: this.buttonElement,
	                hints: this.props.hints,
	                items: this.props.items,
	                autoCloseOtherMenuInstances: this.props.autoCloseOtherMenuInstances,
	                renderers: this.props.renderers,
	                mouseEnterDelay: this.props.mouseEnterDelay,
	                mouseLeaveDelay: this.props.mouseLeaveDelay
	            }) : null;
	
	            return _react2.default.createElement(
	                'div',
	                { className: buttonClassName },
	                this.renderButton(),
	                menu
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.buttonElement = _reactDom2.default.findDOMNode(this.refs.button);
	        }
	        //</editor-fold>
	
	    }]);
	
	    return DropdownMenu;
	}(_react.Component);
	
	//<editor-fold desc="Props">
	
	
	exports.default = DropdownMenu;
	DropdownMenu.propTypes = {
	    config: _react2.default.PropTypes.object, // config object visiting every menu item
	    classPrefix: _react2.default.PropTypes.string, // CSS class prefix for all the classes used by this dropdown menu
	    buttonText: _react2.default.PropTypes.string, // the text of the default button
	    toggleMode: _react2.default.PropTypes.bool.isRequired, // should menu be toggled (opened/closed) by clicking the button
	    openOnMouseOver: _react2.default.PropTypes.bool.isRequired, // should menu be opened on mouse over (Mac menu is opened on first *click*)
	    closeOnMouseOut: _react2.default.PropTypes.bool.isRequired, // should menu be closed on mouse over
	    items: _react2.default.PropTypes.array.isRequired, // menu items (data)
	    autoCloseOtherMenuInstances: _react2.default.PropTypes.bool.isRequired,
	    mouseEnterDelay: _react2.default.PropTypes.number,
	    mouseLeaveDelay: _react2.default.PropTypes.number,
	    hints: _react2.default.PropTypes.func.isRequired,
	    onOpen: _react2.default.PropTypes.func, // custom open handler
	    onClose: _react2.default.PropTypes.func, // custom close handler
	    onItemMouseEnter: _react2.default.PropTypes.func, // custom item mouse enter handler
	    onItemMouseLeave: _react2.default.PropTypes.func, // custom item mouse leave handler
	    onItemClick: _react2.default.PropTypes.func // custom item click handler
	};
	DropdownMenu.defaultProps = {
	    config: {},
	    classPrefix: '',
	    buttonText: '- Menu -',
	    openOnMouseOver: false,
	    closeOnMouseOut: false,
	    toggleMode: true,
	    items: [],
	    aligner: new _Aligner2.default(), // default aligner
	    autoCloseOtherMenuInstances: true,
	    mouseEnterDelay: MOUSE_ENTER_DELAY,
	    mouseLeaveDelay: MOUSE_LEAVE_DELAY,
	    hints: HINTS,
	    onOpen: function onOpen() {},
	    onClose: function onClose() {},
	    onItemMouseEnter: function onItemMouseEnter() {},
	    onItemMouseLeave: function onItemMouseLeave() {},
	    onItemClick: function onItemClick() {}
	};
	//</editor-fold>

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-data-menu.js.map