import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../componets/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* <Navbar /> */}

      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
        >
          <div className="h-96 bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Innovating Tomorrow, Together.
              </h1>
              <p className="mt-3 text-gray-100/90 max-w-2xl mx-auto">
                Empowering students to explore, learn, and create in the world of computing and technology.
              </p>
            </div>

            {/* Decorative shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute top-6 left-8 w-20 h-20 bg-white/10 rotate-45 rounded-lg" />
              <div className="absolute bottom-6 right-12 w-36 h-36 bg-white/15 rotate-45 rounded-lg" />
              <div className="absolute top-28 right-6 w-12 h-12 bg-white/5 rotate-45 rounded-lg" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">What is ACM?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The <strong>Association for Computing Machinery (ACM)</strong> is the world’s largest
                computing society, dedicated to advancing computing as a science and profession.
                The <strong>ACM GHRCE Student Chapter</strong> brings this vision to our campus by
                fostering innovation, collaboration, and technical excellence among students.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Our chapter aims to organize workshops, coding events, and expert talks to help
                students enhance their skills in AI, cybersecurity, web development, and more.
                Whether you’re a beginner or an experienced coder, there’s a place for you in our community.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="relative w-full max-w-md h-72 overflow-hidden rounded-xl shadow-2xl"
                style={{
                  clipPath:
                    'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                }}
              >
                <img
                  src="https://i.ibb.co/L5gL6R9/Whats-app-Image-2024-05-13-at-1-50-20-PM.jpg"
                  alt="ACM Team"
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute -inset-2 bg-cyan-500/40 transform -rotate-6"
                  style={{
                    clipPath:
                      'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                  }}
                />

                <div className="absolute top-3 left-3 w-6 h-6 bg-cyan-500 rounded-sm rotate-12" />
                <div className="absolute bottom-3 right-3 w-5 h-5 bg-cyan-500 rounded-sm rotate-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-cyan-300 mb-3">Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet our founding team — the pioneers who are shaping the ACM GHRCE chapter and building
              a strong community of passionate learners.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-start">
              {[
                ['Atharv Patil', 'Chairperson'],
                ['Jane Doe', 'Vice Chairperson'],
                ['John Smith', 'Secretary'],
                ['Aditi Sharma', 'Technical Lead'],
                ['Rahul Verma', 'Treasurer'],
                ['Priya Nair', 'Event Coordinator'],
              ].map(([name, role]) => (
                <div key={name} className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-cyan-400/20 ring-2 ring-cyan-400 mb-3 flex items-center justify-center text-lg font-semibold text-white">
                    {/* Placeholder circle */}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{name}</h4>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
