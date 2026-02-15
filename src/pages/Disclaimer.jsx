import React from 'react';

const Disclaimer = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
            <div className="bg-white p-8 rounded-xl shadow-sm border space-y-6 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Website Disclaimer</h2>
                    <p>
                        The information provided by me, Praveen, on this website is for general informational purposes only. All information on the Site is provided in good faith, however I make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">External Links Disclaimer</h2>
                    <p>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Professional Disclaimer</h2>
                    <p>
                        The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Disclaimer;
