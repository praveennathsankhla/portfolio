import React from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to collaborate on innovative AI and data engineering projects?
          Let's discuss how we can build something amazing together.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border p-10 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're looking for a data engineer, AI specialist, or just
            want to chat about technology, I'm always open to new opportunities
            and conversations.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Bikaner,RJ</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>pnath6745@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>

          <div className="space-y-4">
            <a
              href="mailto:pnath6745@gmail.com"
              className="flex items-center gap-3 border rounded-lg px-5 py-3 hover:bg-gray-50 transition"
            >
              <Mail size={18} />
              <span className="font-medium">Send Email</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-lg px-5 py-3 hover:bg-gray-50 transition"
            >
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/praveennathsankhla"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-lg px-5 py-3 hover:bg-gray-50 transition"
            >
              <Github size={18} />
              <span className="font-medium">GitHub Profile</span>
            </a>
          </div>

          <button className="mt-8 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition flex items-center justify-center gap-2">
            <Calendar size={18} />
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
