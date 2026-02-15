import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Have a question or want to work together? Fill out the form below or reach out directly.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-700">
                            <span className="font-semibold w-24">Email:</span>
                            <a href="mailto:pnath6745@gmail.com" className="text-blue-600 hover:underline">pnath6745@gmail.com</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="font-semibold w-24">Location:</span>
                            <span>India</span>
                        </div>
                    </div>
                </div>

                <form className="bg-white p-8 rounded-xl shadow-sm border flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows="4" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
