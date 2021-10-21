import Post from "./Post";

const posts = [
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
  {
    id: "346",
    username: "mark23",
    userImg:
      "https://pbs.twimg.com/profile_images/1447566459740196870/XXiimuyq_400x400.jpg",
    img: "https://links.papareact.com/3ke",
    caption: "THIS IS THE DUMMY DATA",
  },
];

function Posts() {
  return (
    <div className="max-w-6xl mx-auto">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
