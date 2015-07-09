var React = requrie("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SmallApp = require("./components/SmallApp.react.jsx");
var LoginPage = require("./components/session/LoginPage.react.jsx");
var StoriesPage = require("./components/stories/StoriesPage.react.jsx");
var StoryPage = require("./components/stories/StoryNew.react.jsx");
var SignupPage = require("./components/session/SignupPage.react.jsx");

module.exports = (
    <Route name="app" path="/" handler={SmallApp}>
        <DefaultRoute handler={storiesPage} />
        <Route name="login" path="/login" handler={LoginPage} />
        <Route name="signup" path="/signup" handler={SignupPage} />
        <Route name="stories" page="/stories" handler={StoriesPage} />
        <Route name="story" page="/stories/:storyId" handler={StoryPage} />
        <Route name="new-story" path="/story/new" handler={StoryNew} />
    </Route>
);

