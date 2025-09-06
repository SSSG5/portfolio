import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sarthak-wadegaonkar/",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/SarthakWade",
    },
    {
      name: "Twitter",
      icon: <FaSquareXTwitter />,
      link: "https://x.com/Sarthak_Wade",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sarthak_wadegaonkar/",
    },
  ];

  return (
    <div className="flex mt-4 lg:mt-6 gap-2 relative">
      <div className="flex">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-${
              10 - index
            } -ml-2 first:ml-0 border border-gray-400 rounded-full p-3 lg:p-4 text-white hover:bg-gray-800 transition text-sm lg:text-base`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="w-full h-4 border-t-2 self-center mt-3 border-white/10"></div>
    </div>
  );
};

export default Socials;
