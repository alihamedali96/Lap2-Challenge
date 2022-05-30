module.exports = class Posts {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
    };
 static get all(){ 
    return new Promise (async (resolve, reject) => {
        try {
            //  console.log(db);
            const result = await db.query('SELECT * FROM posts;')
            console.log(result)
            const posts = result.rows.map(a => ({ id: a.id, name: a.name }))
            resolve(posts);
        } catch (err) {
            reject("Error retrieving posts")
        }
    })
};

}
