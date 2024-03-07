import React from "react";
const AboutPage =()=>{


  return(
    <>
      {/* main page div */}
      <div class="lg:pl-[18rem]">
      <div className="flex flex-col justify-center max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[14rem] xl:pr-16">

        {/* Meet us / text div */}
        <div className="flex flex-col items-center text-bold text-white">
          <h1 className="text-center text-5xl font-extrabold">Meet the Team behind the scenes!</h1>
          <p className="text-center text-2xl"> </p>
        </div>
        
        <div className="divider"></div>

        {/* CARLOS PROFILE AND BUTTONS DIV*/}
        <div className="flex flex-row w-auto">

        {/* PROFILE */}
        <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar w-1/2">
          <div className="w-48 bg-zinc-100 mask mask-squircle">
            <img src="../assets/image/carlos.png" />
          </div>
          <p className='mt-4 mb-4'>Carlos Revilla</p>
          <div className="flex justify-center items-center space-x-2"> {/* Added flex container with space-x-2 for spacing */}
            <a href="https://github.com/carlosfrev123" target='_blank' className="bg-black text-white rounded p-6 inline-block">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/carlosfrevilla/" target='_blank' className="bg-blue-500 text-white rounded p-6 inline-block">
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
          </div>
        </div>

          {/* TEXT */}
          <div className="card bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600 flex flex-col w-1/2 p-8">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Front-end Engineer</h2>
              <p className="text-xl">
"Hello, I'm Carlos, the Front-end Engineer. I specialized in using React to enhance our website's interface, with a strong interest in AI and Machine Learning. This project allowed me to creatively merge front-end development with AI innovations."</p>
            </div>
          </div>

        </div>

              
  
            <div className="divider"></div>

            {/* DHRUV PROFILE AND BUTTONS DIV*/}
            <div className="flex flex-row w-auto">
              {/* TEXT */}
              <div className="card bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 flex flex-col w-1/2 p-8">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Back-end Engineer</h2>
                  <p className="text-xl">"Hello, I'm Dhruv! I've contributed to the backend part of this project. My interest lies in creating efficient, scalable systems and exploring new technologies."</p>
                </div>
              </div>
              {/* PROFILE */}
              <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar w-1/2">
                <div className="w-48 bg-zinc-100 mask mask-squircle">
                  <img src="../assets/image/dhruv.png" />
                </div>
                <p className='mt-4 mb-4'>Dhruv Batra</p>
                <div className="flex justify-center items-center space-x-2">
                  <a href="https://github.com/Dhruv-Batra" target='_blank' className="bg-black text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/db-dhruv-batra/" target='_blank' className="bg-blue-500 text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                  </a>
                </div>
              </div>
              
            </div>

            <div className="divider"></div>

            {/* KUNSH PROFILE AND BUTTONS DIV*/}
            <div className="flex flex-row w-auto">
              {/* PROFILE */}
              <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar w-1/2">
                <div className="w-48 bg-zinc-100 mask mask-squircle">
                  <img src="../assets/image/kunsh.png" />
                </div>
                <p className='mt-4 mb-4'>Kunsh Singh</p>
                <div className="flex justify-center items-center space-x-2">
                  <a href="https://github.com/kunshksingh" target='_blank' className="bg-black text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kunsh-singh/" target='_blank' className="bg-blue-500 text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                  </a>
                </div>
              </div>
              {/* TEXT */}
              <div className="card bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 flex flex-col w-1/2 p-8">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Machine-Learning Engineer</h2>
                  <p className="text-xl">"Hi, I'm Kunsh! My focus is on machine learning and data science. Working on this project allowed me to apply theoretical knowledge in a practical setting, enhancing my skills further."</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* SOOREN PROFILE AND BUTTONS DIV*/}
            <div className="flex flex-row w-auto">
              {/* TEXT */}
              <div className="card bg-gradient-to-r from-yellow-400 via-yellow-500 to-lime-600 flex flex-col w-1/2 p-8">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Back-end Engineer</h2>
                  <p className="text-xl">"Hi, I'm Sooren! Working on backend development was a highlight for me. I specialize in creating scalable server-side solutions. This project was a great chance to enhance our application's performance and reliability."</p>
                </div>
              </div>
              {/* PROFILE */}
              <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar w-1/2">
                <div className="w-48 bg-slate-100 mask mask-squircle">
                  <img src="../assets/image/sooren.png" />
                </div>
                <p className='mt-4 mb-4'>Sooren Ghodsi</p>
                <div className="flex justify-center items-center space-x-2">
                  <a href="https://github.com/SoorenGhodsi" target='_blank' className="bg-black text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sooren-ghodsi/" target='_blank' className="bg-blue-500 text-white rounded p-6 inline-block">
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                  </a>
                </div>
              </div>
              
            </div>
            <div className="divider"></div>
            <div className="p-8">
              <div className="card bg-white w-auto text-center text-xl font-bold text-black p-8">
                Acne-AI was made for the LEAP24 AI Oasis Hackathon
              </div>
            </div>
            

      </div>
      </div>
    
    </>
  );
};

export default AboutPage;
// Kunsh Singh
// Sooren Ghodsi - ln: sooren-ghodsi gh: SoorenGhodsi
// Dhruv Batra - ln: https://www.linkedin.com/in/db-dhruv-batra/ gh: https://github.com/Dhruv-Batra
// Carlos Revilla
// 

// // bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
// bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600
// bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600
// bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600