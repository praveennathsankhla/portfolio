import React from 'react';

const TermsConditions = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="bg-white p-8 rounded-xl shadow-sm border space-y-6 text-gray-700 leading-relaxed">
                <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
                    <p>
                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Praveen (“I,” “me,” or “my”), concerning your access to and use of this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is my proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by me or licensed to me, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Prohibited Activities</h2>
                    <p>
                        You may not access or use the Site for any purpose other than that for which I make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by me.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined following the laws of India. I and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
