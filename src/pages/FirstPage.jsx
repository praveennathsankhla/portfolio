import React from 'react';

const FirstPage = () => {
    return (
        <div className='justify-center items-center flex h-screen gap-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex-row'>
            <a href="/home" className="hover:text-white transition inline-flex  justify-center items-center gap-2 h-20 w-60
                       px-6 py-3 rounded-lg bg-black text-violet-600
                       text-3xl font-bold hover:bg-neutral-800 transition
                       inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                        font-medium hover:bg-neutral-800 transition">Porfolio</a>
                        
                        <a href="#arya" className="hover:text-white transition inline-flex items-center gap-3

                       px-6 py-3 rounded-lg bg-black text-violet-500
                       text-3xl font-medium hover:bg-neutral-800 transition h-20 w-60  justify-center
                       inline-flex items-center gap-2
                       px-6 py-3 rounded-lg bg-black text-white
                       font-medium hover:bg-neutral-800 transition">Arya</a>
        </div>
    );
}

export default FirstPage;
