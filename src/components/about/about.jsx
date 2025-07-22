// import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';

// const About = () => {
//   return (
//     <section
//     id="about"
//       className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg-mt-32 "
//     >
//       <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
//         {/* left side */}
//         <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
//           {/* greetings */}
//           <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>Hi, I am</h1>
//           {/* name */}
//           <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Atul Ranjan</h2>
//           {/* skills typing effect */}
//           <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8245ec] leading-tight mb-6'>
//             <span className='text-white'>
//               I am a
//             </span>
//               <ReactTypingEffect
//               text={[
//                 'Full Stack Developer',
//                 'App Developer',
//                 'MERN Stack Developer',
//                 'Software Engineer',
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={1000}
//               eraseDelay={2000}
            
//             />
//             <span className="text-[#8245ec] animate-pulse text-2xl">|</span>

//           </h3>
          
          
//         </div>
//        </div>
      
//     </section>
//   )
// }


// export default About;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profile2 from '../../assets/profile2.jpg';
import Tilt from 'react-parallax-tilt'; // Add this line if not already

// Inside your JSX
<Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full">
  <img
    src={profile2}  // ✅ Fixed
    alt="Profile"
    className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
  />
</Tilt>

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg-mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Atul Ranjan
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8245ec] leading-tight mb-6">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec] font-bold drop-shadow-[#8245ec_0_0_2px]">
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Problem Solver',
                  'MERN Stack Developer',
                  'Software Engineer',
                ]}
                loop
                cursor
                cursorStyle="|"
                speed={100}
                typeSpeed={100}
                deleteSpeed={100}
                typingDelay={500}
                delaySpeed={500}
                eraseDelay={2000}
               eraseSpeed={50}
              />
            </span>
          </h3>
          {/* about me */}
    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed tracking-wide text-justify max-w-[550px]">
  I’m a <span className="font-semibold italic text-white">Full Stack Developer</span> with a strong grasp of <span className="italic">Data Structures and Algorithms</span>. I love building sleek web apps and writing clean, efficient code. Always ready to <span className="italic">learn</span> and <span className="italic">solve real-world problems</span> through tech.
</p>

  {/* resume download button */}
          <a href="https://drive.google.com/file/d/19PQryxcy9HSTQK2q9qOf4gOEU0JyUPXy/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer"
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec,0 0 2px #a855f7,0 0 40px #a855f7',
            }}
          >
            Download Resume

          </a>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end overflow:hidden">
          <Tilt
            className="w-[22rem] h-[22rem] sm:w-[24rem] sm:h-[24rem] md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full flex items-center justify-center shadow-xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
>
  <img
    src={profile2}
    alt="Profile"
    className="w-full h-full object-cover object-top rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
  />
</Tilt>

          </div>
      </div>
    </section>
  );
};

export default About;



