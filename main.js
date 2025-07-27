import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();
window.Tweeter = Tweeter;

// This should render the initial dummy data
renderer.renderPosts(tweeter.getPosts());
