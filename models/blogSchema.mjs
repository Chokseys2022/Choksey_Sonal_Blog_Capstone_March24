import mongoose from "mongoose";

//define blog schema
const blogSchema = new mongoose.Schema({
  //topic of blog
  topic: {
    type: String,
    required: [true, "Topic is required"],
    enum: ["family", "health/fitness", "reflection", "dance"],
  },
  //blog title
  title: { type: String, required: [true, "Title is required"] },
  //actual blog content
  content: { type: String, required: [true, "Content is required"] },
  //date blog is created
  date: { type: Date, default: Date.now },

  //add tags
  tags: { type: String },
});

export default mongoose.model("blog", blogSchema);

// schemas:
//_id
// title
//subject or topic or content
//author name
//tags , eg: reflection, dance, family, nutrition, menatal and emotional health,
//date created
