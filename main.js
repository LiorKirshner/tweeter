import Tweeter from "./model.js";
import Renderer from "./render.js";

const tweeter = Tweeter();
const renderer = Renderer();

// Initial render of all posts when the page loads
renderer.renderPosts(tweeter.getPosts());

/**
 * Event listener for creating a new post.
 * Triggered when the main comment button is clicked.
 * Adds the post to the model and re-renders all posts.
 */
document.getElementById("twit-btn").addEventListener("click", () => {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (text) {
    // Add a new post to the data model
    tweeter.addPost(text);
    input.value = ""; // Clear the input field after posting
    renderer.renderPosts(tweeter.getPosts()); // Refresh the post list
  }
});

/**
 * Event delegation for dynamic actions inside the posts container.
 * Handles post deletion, comment deletion, and adding comments to specific posts.
 */
document.getElementById("postsContainer").addEventListener("click", (event) => {
  // Find the closest post element related to the clicked target
  const postElement = event.target.closest(".post");
  const postID = postElement?.getAttribute("data-id");
  if (!postID) return;

  // Handle deleting a post
  if (event.target.classList.contains("delete-post")) {
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
  }

  // Handle deleting a comment from a post
  if (event.target.classList.contains("delete-comment")) {
    const commentElement = event.target.closest(".comment");
    const commentID = commentElement?.getAttribute("data-id");
    if (commentID) {
      tweeter.removeComment(postID, commentID);
      renderer.renderPosts(tweeter.getPosts());
    }
  }

  // Handle adding a comment to a specific post
  if (event.target.classList.contains("comment-button")) {
    const input = postElement.querySelector(".comment-input");
    const text = input?.value.trim();
    if (text) {
      // Add the comment to the selected post
      tweeter.addComment(postID, text);
      input.value = ""; // Clear the comment input field
      renderer.renderPosts(tweeter.getPosts());
    }
  }
});
