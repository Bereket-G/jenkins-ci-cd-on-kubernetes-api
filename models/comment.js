/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Article
const Comment = new Schema({
  title:   { type: String },
  content: { type: String },
  username:  { type: String },
  article: [{ type: Schema.Types.ObjectId, ref: "Article" }],
  created_at: { type: Date },
  updated_at: { type: Date }
});

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Comment.pre("save", (next)=>{
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;

  next();
});


// Construct Schema and Collection
// Expose Model
module.exports = mongoose.model("Comment", Comment);
