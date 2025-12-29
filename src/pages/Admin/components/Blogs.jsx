import React, { useState } from "react";

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      body,
      tags: tags.split(",").map(tag => tag.trim()),
    };

    onSubmit(blogData);

    // reset form
    setTitle("");
    setBody("");
    setTags("");
  };
  
  const onReset = (blogData) => {

    // reset form
    setTitle("");
    setBody("");
    setTags("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow border border-gray-300 mt-4 w-400"
    >
        <div className="justify-between items-center flex ">
      <h2 className="text-2xl font-semibold mb-6">Add New Blog</h2>
       {/* Submit */}
             <button
               type="submit"
               className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
             >
               Publish Blog
             </button>
             </div>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Blog Title
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Blog Body */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Blog Content
        </label>
        <textarea
          rows="6"
          className="w-full h-120 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Write your blog here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>

      {/* Tags */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Tags
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="react, tailwind, javascript"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <p className="text-xs text-gray-500 mt-1">
          Separate tags with commas
        </p>
      </div>
         {/* Submit */}
      <button
        type="reset"
        onClick={onReset}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
      >
        Reset
      </button>
     
    </form>
  );
};

export default BlogForm;
