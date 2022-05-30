const form = document.getElementById("form");

form.addEventListener("submit", createPost);

async function createPost(e) {
  e.preventDefault();
  try {
    const postData = {
      title: e.target.title.value,
      posted_by: e.target.author.value,
      story: e.target.content.value,
    };
    console.log(postData);
    const options = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    const response = await fetch("http://localhost:3000/post", options);
    const whatisthis = await response.json();
    console.log(whatisthis);
  } catch (err) {
    console.log(err);
  }
}
