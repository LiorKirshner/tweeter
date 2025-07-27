const Tweeter = function () {
  let _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 2;
  let commentIdCounter = 6;

  // 🟢 Read
  function getPosts() {
    return _posts;
  }

  // 🟡 Create
  function addPost(text) {
    postIdCounter++;
    const newPost = { text, id: `p${postIdCounter}`, comments: [] };
    _posts.push(newPost);
    return newPost;
  }

  function addComment(postID, text) {
    const post = _posts.find((p) => p.id === postID);
    if (!post) return null;
    commentIdCounter++;
    const comment = { id: `c${commentIdCounter}`, text };
    post.comments.push(comment);
    return comment;
  }

  // 🔴 Delete
  function removePost(postID) {
    const initialLength = _posts.length;
    _posts = _posts.filter((p) => p.id !== postID);
    return _posts.length < initialLength;
  }

  function removeComment(postID, commentID) {
    const post = _posts.find((p) => p.id === postID);
    if (!post) return false;
    const initialLength = post.comments.length;
    post.comments = post.comments.filter((c) => c.id !== commentID);
    return post.comments.length < initialLength;
  }

  return {
    getPosts,
    addPost,
    addComment,
    removePost,
    removeComment,
  };
};

export default Tweeter;
