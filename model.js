const Tweeter = () => {
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
  let postIdCounter = 2; // to count total posts
  let commentIdCounter = 6; //to count total comments

  function getPosts() {
    return _posts;
  }

  function addPost(text) {
    postIdCounter++;
    //adds a new post object to posts
    const newPost = {text,id:`c${postIdCounter}`, comments = []};
    _posts.push(newPost);
  }
};
