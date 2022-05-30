const db = require("../init");

module.exports = class Posts {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
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
  //   static findById(id){
  //       return new Promise(async (resolve, reject) => {
  //           try {
  //               const result = await db.query("SELECT posts.*,")
  //           }
  //       })
  //   }
};
