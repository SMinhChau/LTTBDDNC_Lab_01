var postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    var html = "";
    posts.forEach(function (post) {
      html += `<li>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </li>`;
    });
    var boxBlock = document.getElementById("comment-block");
    return (boxBlock.innerHTML = html);
  })
  .catch(function (err) {
    console.log("Error!!");
  })
  .finally(function () {
    console.log("Done!!");
  });
