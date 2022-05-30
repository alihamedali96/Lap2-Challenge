const db = require("../init");

module.exports = class Posts {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.posted_by = data.posted_by;
    this.story = data.story;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        //  console.log(db);
        const result = await db.query("SELECT * FROM posts;");
        const posts = result.rows.map((a) => new Posts(a));
        resolve(posts);
      } catch (err) {
        reject("Error retrieving posts");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query(
          `SELECT * FROM posts WHERE posts.id = $1;`,
          [id]
        );
        let post = new Posts(result.rows[0]);
        resolve(post);
      } catch (err) {
        reject(`Post not found ${id}`);
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, posted_by, story } = postData;
        let result = await db.query(
          `INSERT INTO posts (title, posted_by, story)
           values ($1, $2, $3) 
           returning *;`,
          [title, posted_by, story]
        );
        resolve(result.rows[0]);
      } catch (err) {
        reject("Post could not be created");
      }
    });
  }
};
