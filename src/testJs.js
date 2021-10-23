let a = [
  {
    _id: "3 fl",
    name: "3 fl",
    email: "duc@mail.com",
    pathAvatar: "images/dog.jpg",
    posts: [],
    followers: [
      "6172afc8e1783daaf7e5a3a8",
      "6172afc8e1783daaf7e5a3a8",
      "6172afc8e1783daaf7e5a3a8",
    ],
    following: [],
    createdAt: "2021-10-22T12:34:16.940Z",
    __v: 0,
  },
  {
    _id: "1 fl",
    name: "1 fl",
    email: "tai@mail.com",
    pathAvatar: "images/dog.jpg",
    posts: [],
    followers: ["6172afc8e1783daaf7e5a3a8"],
    following: [],
    createdAt: "2021-10-22T12:41:52.662Z",
    __v: 0,
  },
  {
    _id: "2 fl",
    name: "2 fl",
    email: "tai@mail.com",
    pathAvatar: "images/dog.jpg",
    posts: [],
    followers: ["6172afc8e1783daaf7e5a3a8", "6172afc8e1783daaf7e5a3a8"],
    following: [],
    createdAt: "2021-10-22T12:41:52.662Z",
    __v: 0,
  },
];
let b = a.sort((a, b) => b.followers.length - a.followers.length);
console.log("🚀 ~ file: a.js ~ line 3 ~ b", b);
