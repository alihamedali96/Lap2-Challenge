const form = document.getElementById("form");

form.addEventListener("submit", createPost);

// async function createPost(e) {
//   e.preventDefault();
//   try {
//       const postData = {
//           title: e.target.name.value,
//           author: e.target.author.value,
//           content: e.target.content.value
//       }
//       const options = {
//           method: "Post",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify()
//       }
//       const response = await fetch("http://localhost:3000/")
//   }
// }
