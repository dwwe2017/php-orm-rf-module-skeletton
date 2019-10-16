"use strict";

/**
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAction = function (_React$Component) {
    _inherits(ReactAction, _React$Component);

    function ReactAction(props) {
        _classCallCheck(this, ReactAction);

        var _this = _possibleConstructorReturn(this, (ReactAction.__proto__ || Object.getPrototypeOf(ReactAction)).call(this, props));

        _this.state = {
            data: null
        };
        var baseUrl = _this.props.baseUrl;

        /**
         * @see src/src/Controllers/ApiController.php
         */

        axios.get("index.php?module=dashboard&controller=api&action=index").then(function (_ref) {
            var data = _ref.data;
            return _this.setState({ data: data });
        });
        return _this;
    }

    _createClass(ReactAction, [{
        key: "render",
        value: function render() {
            var data = this.state.data;


            if (!data) {
                return null;
            } else if (data.hasOwnProperty("example_message")) {
                return React.createElement(
                    "div",
                    { className: "col-md-12" },
                    data.example_message
                );
            }

            return React.createElement(
                "div",
                { className: "col-md-12" },
                "In the event that a JS file is found instead of a Twig template, the TSI automatically uses React as a view in the fronted @see fronted/IndexController/reactAction.tpl.jsx @see views/IndexController/indexAction.tpl.js"
            );
        }
    }]);

    return ReactAction;
}(React.Component);