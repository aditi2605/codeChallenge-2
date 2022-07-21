const db = require('../dbconfig')
class Blog {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.body = data.body
        this.date = data.date
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const blogsData = await db.query(`SELECT * FROM blogs;`)
                const blogs = blogsData.rows.map(blog => new Blog(blog))
                resolve(blogs);
            } catch (err) {
                reject("Error retrieving Blogs")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogData = await db.query(`SELECT * FROM blogs WHERE id = $1;`, [ id ]);
                let blog = new Blog(blogData.rows[0]);
                resolve(blog);
            } catch (err) {
                reject('Blog not found');
            }
        })
    }

    static create(title, name, body) {
        return new Promise (async (resolve, reject) => {
            try {
                let date = new Date().toUTCString().slice(0, 16);
                let blogData = await db.query(`INSERT INTO blogs (title, name, body, date) VALUES ($1, $2, $3, $4) RETURNING id;`, [ title, name, body, date]);
                let newBlog = new Blog(blogData.rows[0]);
                resolve(newBlog);
            } catch (err) {
                reject('Error creating blog')
            }
        })
    }

}

module.exports = Blog
