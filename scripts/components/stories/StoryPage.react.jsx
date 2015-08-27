// Storyを表示する画面をレンダリングする
var React = require("react");
var WebAPIUtils = require("../../utils/WebAPIUtils.js");
var StoryStore = require("../../stores/StoryStore.react.jsx");
var StoryActionCreators = require("../../actions/StoryActionCreators.react.jsx");
var State = require("react-router");

var StoryPage = React.createClass({
    // mixin。複数のコンポーネント間で処理を共通化することができる。
    mixins: [ State ],

    // コンポーネントがマウントされる前に実行される。
    // 戻り値は、this.stateの初期値となる。
    getInitialState: function() {
        return {
            story: StoryStore.getAllStories(),
            errors: []
        };
    },

    // クライアント上でのみ、初期描画(rendering)が発生した直後に一度実行。
    componentDidMount: function() {
        StoryStore.addChangeListener(this._onChange);
        StoryActionCreators.loadStory(this.getParams().storyId);
    },

    // クライアント上でもサーバー上でも、初期描画(rendering)が発生する直前に一度実行
    componentWillUnmount: function() {
        StoryStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            stories: StoryStore.getStory(),
            errors: StoryStore.getErrors()
        });
    },

    render: function() {
        return (
            <div className="row">
                <div className="story__title">{this.state.story.title}</div>
                <div className="story__body">{this.state.story.body}</div>
                <div className="story__user">{this.state.story.user.username}</div>
            </div>
        );
    }
});

module.exports = StoryPage;
