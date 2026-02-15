import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Blogs from './components/Blogs';
import { useState } from 'react';

const AdminLayout = () => {
    const [activeItem, setActiveItem] = useState('blogs');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className='flex flex-row gap-4 min-h-screen bg-gray-50'>
            <AdminSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            <main className="flex-1 p-8">
                <div className="flex justify-end mb-6">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
                    >
                        Logout
                    </button>
                </div>
                {['blogs', 'articles', 'research'].includes(activeItem) && (
                    <Blogs contentType={activeItem} />
                )}
            </main>
        </div>
    );
}

export default AdminLayout;
