const form = document.getElementById("form");
const post = document.getElementById("post");
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
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "";
    displayPost(whatisthis);
  } catch (err) {
    console.log(err);
  }
}

function updateLink() {
  let hash = window.location.href;
  console.log(hash);
}

function displayPost(data) {
  console.log(data);
  const h2 = document.createElement("h2");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  h2.id = `title-${data.id}`;
  h2.class = "title";
  h2.textContent = `${data.title}`;
  h4.id = `author-${data.id}`;
  h4.class = "author";
  h4.textContent = `${data.posted_by}`;
  p.id = `story-${data.id}`;
  p.class = "story";
  p.textContent = `${data.story}`;

  post.append(h2, h4, p);
}
