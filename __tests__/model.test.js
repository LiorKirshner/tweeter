import Tweeter from "./model.js";

describe("Tweeter Module", () => {
  test("should return all posts", () => {
    const posts = Tweeter.getPosts();
    expect(posts.length).toBeGreaterThan(0);
  });

  test("should add a post", () => {
    const prevLength = Tweeter.getPosts().length;
    Tweeter.addPost("New post for testing");
    const newLength = Tweeter.getPosts().length;
    expect(newLength).toBe(prevLength + 1);
  });

  test("should add comment to post", () => {
    const post = Tweeter.getPosts()[0];
    const prevComments = post.comments.length;
    Tweeter.addComment(post.id, "New comment!");
    const newComments = post.comments.length;
    expect(newComments).toBe(prevComments + 1);
  });
  test("removing non-existing post should not change posts array", () => {
    const prevPosts = Tweeter.getPosts();
    const prevLength = prevPosts.length;

    Tweeter.removePost("nonexistent-post-id");

    const newPosts = Tweeter.getPosts();
    expect(newPosts.length).toBe(prevLength);
  });
});
