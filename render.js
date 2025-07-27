function Renderer() {
  function createCommentElement(comment) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.setAttribute("data-id", comment.id);

    const commentText = document.createElement("p");
    commentText.classList.add("comment-text");
    commentText.textContent = comment.text;

    const deleteCommentBtn = document.createElement("button");
    deleteCommentBtn.classList.add("delete-comment");
    deleteCommentBtn.textContent = "Delete Comment";

    commentDiv.appendChild(commentText);
    commentDiv.appendChild(deleteCommentBtn);

    return commentDiv;
  }

  function createPostElement(post) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.setAttribute("data-id", post.id);

    const postText = document.createElement("p");
    postText.classList.add("post-text");
    postText.textContent = post.text;

    const deletePostBtn = document.createElement("button");
    deletePostBtn.classList.add("delete-post");
    deletePostBtn.textContent = "Delete Post";

    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("comments");

    for (const comment of post.comments) {
      const commentElement = createCommentElement(comment);
      commentsDiv.appendChild(commentElement);
    }

    // Create input and button for adding comments
    const commentInput = document.createElement("input");
    commentInput.classList.add("comment-input");
    commentInput.setAttribute("type", "text");
    commentInput.setAttribute("placeholder", "Write a comment...");

    const commentButton = document.createElement("button");
    commentButton.classList.add("comment-button");
    commentButton.textContent = "Comment";

    postDiv.appendChild(postText);
    postDiv.appendChild(deletePostBtn);
    postDiv.appendChild(commentsDiv);
    postDiv.appendChild(commentInput);
    postDiv.appendChild(commentButton);

    return postDiv;
  }

  function renderPosts(posts) {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";

    for (const post of posts) {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    }
  }
  return {
    renderPosts,
  };
}

export default Renderer;
