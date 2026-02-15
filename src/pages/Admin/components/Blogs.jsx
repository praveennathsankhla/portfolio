import React, { useState, useEffect } from "react";
import { contentService } from "../../../data/contentService";

const BlogForm = ({ contentType = 'blogs' }) => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Psychology");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [tags, setTags] = useState("");

  useEffect(() => {
    loadItems();
  }, [contentType]);

  const loadItems = () => {
    contentService.initialize(contentType);
    setItems(contentService.getAll(contentType));
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setContent(item.content);
    setCategory(item.category);
    setImage(item.image);
    setAuthor(item.author);
    setTags(item.keywords ? item.keywords.join(", ") : "");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this ${contentType.slice(0, -1)}?`)) {
      contentService.delete(contentType, id);
      loadItems();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemData = {
      id: currentId,
      title,
      description,
      content,
      category,
      image,
      author,
      keywords: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
    };

    contentService.save(contentType, itemData);
    loadItems();
    resetForm();
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentId(null);
    setTitle("");
    setDescription("");
    setContent("");
    setCategory("Psychology");
    setImage("");
    setAuthor("Admin");
    setTags("");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow border border-gray-300 w-full"
      >
        <div className="justify-between items-center flex mb-6">
          <h2 className="text-2xl font-semibold capitalize">{isEditing ? `Edit ${contentType.slice(0, -1)}` : `Add New ${contentType.slice(0, -1)}`}</h2>
          <div className="space-x-2">
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition capitalize"
            >
              {isEditing ? "Update" : "Publish"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Blog Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Psychology">Psychology</option>
              <option value="Science">Science</option>
              <option value="Society">Society</option>
              <option value="Thoughts">Thoughts</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="https://..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          {/* Author */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Short Description</label>
          <textarea
            rows="2"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Brief summary for the card view..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Blog Body */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Blog Content (HTML supported)</label>
          <textarea
            rows="10"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm"
            placeholder="<p>Write your blog here...</p>"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="react, tailwind, javascript"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </form>

      {/* List Section */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-300 w-full mb-8">
        <h2 className="text-2xl font-semibold mb-6 capitalize">Manage {contentType}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 truncate max-w-md">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
