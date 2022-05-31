const form = document.getElementById("form");

form.addEventListener("submit", createPost);
window.addEventListener("hashchange", updateLink);

async function createPost(e) {
  e.preventDefault();
  try {
    const postData = {
      title: e.target.title.value,
      posted_by: e.target.author.value,
      story: e.target.content.value,
    };
    const options = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    const response = await fetch("http://localhost:3000/post", options);
    const whatisthis = await response.json();
    // Set up  url - The WillTom way
    window.location.hash = `${whatisthis.id}`;
  } catch (err) {
    console.log(err);
  }
}

function updateLink() {
  let hash = window.location.href.substring(1);
  console.log(hash);
}
