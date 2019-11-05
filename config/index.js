// Load Module Dependencies

module.exports = {
  // Database URL dialect(Mongodb)
  DB_URL:  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/blog_api",

  // HTTP Port
  HTTP_PORT: 9000
}