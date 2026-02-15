import React, { useState } from 'react';

const AdminSidebar = ({ activeItem, setActiveItem }) => {


  const links = [
    { id: 'blogs', label: "Blogs" },
    { id: 'articles', label: "Articles" },
    { id: 'research', label: "Research" },
    { id: 2, label: "Projects" },
  ];

  return (
    <div className='h-230 w-64 bg-gray-800 flex flex-col gap-2 p-4'>
      {links.map((link) => (
        <div
          key={link.id}
          onClick={() => setActiveItem(link.id)}
          className={`p-4 rounded cursor-pointer transition 
            ${activeItem === link.id
              ? "bg-white text-black"         // ACTIVE
              : "text-white hover:bg-gray-700 hover:text-white"}  // INACTIVE + HOVER
          `}
        >
          {link.label}
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
