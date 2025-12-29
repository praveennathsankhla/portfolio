import React from 'react';
import AdminSidebar from './AdminSidebar';
import Blogs from './components/Blogs';
import { useState } from 'react';

const AdminLayout = () => {

    const [activeItem, setActiveItem] = useState(1);
    return (
        <div className='flex flex-row gap-4'>
        <AdminSidebar activeItem={activeItem} setActiveItem={setActiveItem}/>
        <main>
            {activeItem===1&&<Blogs/>}
        </main>
        
        </div>
    );
}

export default AdminLayout;
