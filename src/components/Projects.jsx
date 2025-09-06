import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaFilter, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const filters = [
    { name: "All", count: 6 },
    { name: "Website development", count: 2 },
    { name: "AI/ML", count: 2 },
    // { name: "IoT", count: 0 },
  ];

  useEffect(() => {
    fetch("/portfolio/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);

        // Update filter counts
        filters[0].count = data.length;
        filters[1].count = data.filter((p) =>
          p.tags.includes("Website development")
        ).length;
        filters[2].count = data.filter((p) => p.tags.includes("AI/ML")).length;
        filters[3].count = data.filter((p) => p.tags.includes("IoT")).length;
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);

    if (filterName === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.tags.includes(filterName)
      );
      setFilteredProjects(filtered);
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {/* Project Header */}
      <div className="p-4 lg:p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-c-cream transition-colors">
              {project.name}
            </h3>
            {project.featured && (
              <FaStar
                className="text-yellow-500 text-sm"
                title="Featured Project"
              />
            )}
          </div>
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-c-cream hover:text-white transition-all duration-200"
              >
                <FaGithub className="w-3 lg:w-4 h-3 lg:h-4 text-c-cream" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-c-cream hover:text-white transition-all duration-200"
              >
                <FaExternalLinkAlt className="w-3 lg:w-4 h-3 lg:h-4 text-c-cream" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-start text-sm lg:text-base">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 lg:px-3 py-1 bg-c-cream/10 text-c-cream text-xs lg:text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {project.languages.map((lang, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              title={lang.name}
            >
              <img
                src={lang.logo}
                alt={lang.name}
                className="w-4 lg:w-5 h-4 lg:h-5 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-c-cream"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-10 bg-[#020617]">
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className="text-c-cream">Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-start">
            Explore my portfolio of projects spanning web development, AI/ML,
            and IoT solutions
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-start gap-4 mb-12"
        >
          {filters.map((filter, idx) => {
            const count =
              filter.name === "All"
                ? projects.length
                : projects.filter((p) => p.tags.includes(filter.name)).length;

            return (
              <button
                key={idx}
                onClick={() => handleFilterChange(filter.name)}
                className={`group relative px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm lg:text-base ${
                  activeFilter === filter.name
                    ? "bg-c-cream/80 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
                }`}
              >
                <FaFilter
                  className={`w-3 lg:w-4 h-3 lg:h-4 ${
                    activeFilter === filter.name ? "text-white" : "text-c-cream"
                  }`}
                />
                <span>{filter.name}</span>
                <span
                  className={`ml-1 px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.name
                      ? "bg-white/20 text-white"
                      : "bg-c-cream/10 text-c-cream"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try selecting a different filter to see more projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
