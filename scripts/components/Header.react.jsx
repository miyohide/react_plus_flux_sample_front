var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require("../actions/SessionActionCreators.react.jsx");

var Header = React.createClass({
    propTypes: {
        isLoggedIn: ReactPropTypes.bool,
        email: ReactPropTypes.string
    },
    // TODO logoutの時に画面が特に遷移せずにいるのは分かりにくい用に思う。
    logout: function(e) {
        e.preventDefault();
        SessionActionCreators.logout();
    },
    // renderはComponentをひとつ返すことができる。複数返すことはできない。
    render: function() {
        // ログインしているときは、メールアドレスを表示させ、ログアウトリンクを出す
        var rightNav = this.props.isLoggedIn ? (
            <ul className="right">
                <li className="has-dropdown">
                    <a href="#">{this.props.email}</a>
                    <ul className="dropdown">
                        <li><a href="#" onClick={this.logout}>Logout</a></li>
                    </ul>
                </li>
            </ul>
        ) : (
            // ログインしていない時は、ログインリンクとサインアップリンクを出す
            <ul className="right">
                // ここのlogin/signupはscripts/routes.jsxでRouteタグで指定したもの？
                <li><Link to="login">Login</Link></li>
                <li><Link to="signup">Sign up</Link></li>
            </ul>
        );

        // ログインしているときは、New storyリンクを出し、ログインしていない時は何も出さない
        var leftNav = this.props.isLoggedIn ? (
            <ul className="left">
                <li>
                    // ここのnew-storyはscripts/routes.jsxでRouteタグで指定したもの？
                    <Link to="new-story">New story</Link>
                </li>
            </ul>
        ) : (
        <div></div>
        );

        return (
            <nav className="top-bar" data-topbar role="navigation">
                <ul className="title-area">
                    <li className="name">
                        <h1><a href="#"><strong>S</strong></a></h1>
                    </li>
                    <li className="toggle-topbar" menu-icon><a href="#"><span>Menu</span></a></li>
                </ul>

                // 上で宣言した変数は{}で参照できるっぽい。
                <section className="top-bar-section">
                    {rightNav}
                    {leftNav}
                </section>
            </nav>
        );
    }
});

module.exports = Header;
