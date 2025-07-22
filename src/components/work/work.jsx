

import React, { useState } from 'react';
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-work-gradient">
      
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          PROJECTS
        </h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A showcase of my projects and contributions to the tech community
        </p>
      </div>

      {/* Project Grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:translate-y-2 transition-transform duration-300'
          >
            <div className='p-6'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-3xl font-bold text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative'>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className='absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500'
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className='p-6'>
              <h2 className='text-white text-2xl font-bold mb-4'>
                {selectedProject.title}
              </h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className='w-full h-64 object-cover rounded-xl mb-4'
              />
              <p className='text-gray-300 text-lg mb-4'>
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-purple-600 text-white text-sm px-3 py-1 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className='flex justify-start'>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=' w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:py-2 px-6 py-2 rounded-xl text-lg font-semibold text-center'
                >
                  View Code
                </a>
                 <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=' w-1/2 bg-purple-800 hover:bg-purple-800 text-gray-400 px-7 lg:py-2 py-2 rounded-xl text-lg font-semibold text-center'
                >
                  View Live
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
export default Work;
