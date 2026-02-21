"use client";

import Navbar from "./Navbar";

export default function Skills() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-16 text-center">
          My Skills
        </h1>

        <div className="space-y-10">

          {[
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "JavaScript", level: 88 },
            { name: "Node.js", level: 80 },
            { name: "MongoDB", level: 75 },
            { name: "Tailwind CSS", level: 92 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full">
                <div
                  className="bg-black dark:bg-white h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}