"use client"

import { motion } from "framer-motion"
import { Users, Trophy, Code, Lightbulb } from "lucide-react"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function AboutUsPage() {
   const navigate = useNavigate()
  return (

    <>
     <Helmet>
        <title>About Us - GHRCE ACM Student Chapter</title>
        <meta name="description" content="Learn about GHRCE ACM Student Chapter, our mission, vision, and how we're building a vibrant tech community in Nagpur. Discover our journey, values, and commitment to computing education." />
        <meta name="keywords" content="About GHRCE ACM, ACM chapter mission, student tech organization, computing community Nagpur, ACM GHRCE team" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us - GHRCE ACM Student Chapter" />
        <meta property="og:description" content="Learn about our mission, vision, and commitment to building a vibrant tech community at GHRCE Nagpur." />
        <meta property="og:url" content="https://ghrce.acm.org/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ghrce.acm.org/acm_logo_white_png.png" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="About Us - GHRCE ACM" />
        <meta name="twitter:description" content="Learn about our mission and vision at GHRCE ACM Student Chapter" />
        
        <link rel="canonical" href="https://ghrce.acm.org/about" />
        
        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ghrce.acm.org/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://ghrce.acm.org/about"
              }
            ]
          })}
        </script>
      </Helmet>
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section with Gradient Background */}
      <section className="relative h-[500px] w-full overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Decorative Animated Shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-lg"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-lg"
          />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-40 w-20 h-20 bg-white/5 rounded-lg"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Innovating Tomorrow, <span className="text-cyan-300">Together</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-100 max-w-2xl mx-auto"
            >
              Empowering students to explore, learn, and create in the world of computing and technology.
            </motion.p>
          </div>
        </div>

        {/* Angled Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 L1200,20 L1200,120 L0,120 Z" fill="#000000" />
          </svg>
        </div>
      </section>

      {/* What is ACM Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
              What is ACM?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The <span className="font-semibold text-blue-400">Association for Computing Machinery (ACM)</span> is the world's largest
              computing society, dedicated to advancing computing as a science and profession.
              The <span className="font-semibold text-cyan-400">GHRCE ACM Student Chapter</span> brings this vision to our campus by
              fostering innovation, collaboration, and technical excellence among students.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our chapter aims to organize workshops, coding events, and expert talks to help
              students enhance their skills in AI, cybersecurity, web development, and more.
              Whether you're a beginner or an experienced coder, there's a place for you in our community.
            </p>
          </motion.div>

          {/* Right - Image with Geometric Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              
              {/* Main Image Container with Geometric Shape */}
              <div className="relative w-full max-w-md h-80 overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/50 border border-blue-500/30">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="ACM Team"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-transparent to-cyan-500/40" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-500 rounded-lg opacity-80"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-lg opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide our community and drive us towards excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Technical Excellence",
                description: "Fostering deep technical knowledge and hands-on learning experiences."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "Building a supportive community where ideas are shared and projects come to life."
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Encouraging creative thinking and pushing the boundaries of technology."
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Achievement",
                description: "Celebrating success through competitions, hackathons, and real-world projects."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-900/30"
              >
                <div className="text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of a vibrant community of innovators, learners, and tech enthusiasts.
            Start your journey with GHRCE ACM today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  )
}