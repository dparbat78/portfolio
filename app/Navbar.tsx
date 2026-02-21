"use client";

import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-semibold text-lg">Dnyaneshwari</h1>
        <ul className="flex gap-8 text-sm">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`capitalize transition ${
                  active === sec
                    ? "text-black dark:text-white font-semibold"
                    : "text-gray-500 hover:text-black dark:hover:text-white"
                }`}
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}