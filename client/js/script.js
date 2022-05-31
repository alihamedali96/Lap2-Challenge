const form = document.getElementById("form");
const post = document.getElementById("post");
form.addEventListener("submit", createPost);

// change of
window.addEventListener("hashchange", loadPost);

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
    console.log(whatisthis);
    // Set up  url - The WillTom way

    window.location.hash = `${whatisthis.id}`;
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "";
    displayPost(whatisthis);
  } catch (err) {
    console.log(err);
  }
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

async function loadPost(e) {
  e.preventDefault();
  // Clear all HTML contaniers
  const formContainer = document.getElementById("formContainer");
  const postContainer = document.getElementById("post");
  formContainer.innerHTML = "";
  postContainer.innerHTML = "";

  //get id for post
  const id = window.location.hash.substring(1);
  const response = await fetch(`http://localhost:3000/post/${id}`);
  const weknowwhatthisis = await response.json();
  // Reuse display function above
  displayPost(weknowwhatthisis);
}
