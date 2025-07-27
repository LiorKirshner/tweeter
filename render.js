const Renderer = function () {
  function renderPosts(posts) {
    const $postsContainer = $("#postsContainer");
    $postsContainer.empty();

    for (const post of posts) {
      const $postDiv = $('<div class="post"></div>').attr("data-id", post.id);

      const $postText = $(`<p class="post-text">${post.text}</p>`);
      const $deletePostBtn = $(
        '<button class="delete-post">Delete Post</button>'
      );

      $postDiv.append($postText, $deletePostBtn);

      // קונטיינר תגובות
      const $commentsDiv = $('<div class="comments"></div>');

      for (const comment of post.comments) {
        const $commentDiv = $('<div class="comment"></div>').attr(
          "data-id",
          comment.id
        );
        const $commentText = $(`<p class="comment-text">${comment.text}</p>`);
        const $deleteCommentBtn = $(
          '<button class="delete-comment">Delete Comment</button>'
        );

        $commentDiv.append($commentText, $deleteCommentBtn);
        $commentsDiv.append($commentDiv);
      }

      $postDiv.append($commentsDiv);
      $postsContainer.append($postDiv);
    }
  }
  return {
    renderPosts,
  };
};

export default Renderer;
