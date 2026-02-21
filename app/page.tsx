"use client";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-6 relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dnyaneshwari Parbat
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer 💻",
              2000,
              "React & Next.js Developer ⚛️",
              2000,
              "Node.js Backend Developer 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-600 dark:text-gray-300"
          />

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Aspiring Full Stack Developer skilled in React, Node.js, and modern web technologies.
            Passionate about building scalable, responsive and user-friendly web applications.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf.docx"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:scale-110 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/dparbat78"
              target="_blank"
              className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image
            src="/profile.jpg.png"
            alt="Dnyaneshwari"
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <p>
            I am a Software Engineering student with strong foundation in frontend and backend
            technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js,
            MySQL and MongoDB. I enjoy solving problems and building real-world applications.
          </p>
        </motion.div>
      </section>
      {/* SKILLS SECTION */}
<section id="skills" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
  <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
  >
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>React.js & Next.js</li>
      <li>Node.js & Express.js</li>
      <li>MongoDB & MySQL</li>
      <li>Git & GitHub</li>
    </ul>
  </motion.div>
</section>

{/* PROJECTS SECTION */}
<section id="projects" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
  <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="grid md:grid-cols-2 gap-8"
  >
    {/* Live Project Link Updated */}
    <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="font-bold text-xl mb-2">My First Website</h3>
      <p>
        A responsive website built with Next.js and Tailwind CSS. Deployed live on Vercel. Features modern design, smooth animations, and interactive sections.
      </p>
      <a
        href="https://myfirstwebsite-azure.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
      >
        View Live Project
      </a>
    </div>

    {/* Example Second Project */}
    <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="font-bold text-xl mb-2">Hospital Management App</h3>
      <p>
        Full-stack hospital management system using Node.js, Express, and MongoDB. Includes authentication, role-based access, and patient management dashboard.
      </p>
      <a
        href="#"
        className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
      >
        View Project
      </a>
    </div>
  </motion.div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
  <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-center"
  >
    <p className="mb-4">Feel free to reach out for collaborations or just a friendly chat.</p>
    <a href="mailto:dnyaneshwari@example.com" className="text-blue-600 dark:text-blue-400 block mb-2">Email: dparbat78@gmail.com</a>
    <a href="tel:+919876543210" className="text-blue-600 dark:text-blue-400 block">Phone: +91 93566 11099</a>
  </motion.div>
</section>
      

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-600 dark:text-gray-400">
        © 2026 Dnyaneshwari Parbat | Full Stack Developer
      </footer>

    </div>
  );
}