var posts=["2025/06/04/hello-world/","2025/06/04/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };