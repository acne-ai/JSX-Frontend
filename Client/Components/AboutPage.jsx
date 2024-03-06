import React from "react";
const AboutPage =()=>{


  return(
    <>
    {/* OUR TEAM */}
      {/* main page div */}
      <div class="lg:pl-[18rem]">
      <div className="flex flex-col justify-center max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[14rem] xl:pr-16">

        <h1 className="">Meet the Team behind the scenes!</h1>

        <div className="flex-col w-screen h-1/2 bg-blue py-10">
          <h1 className="text-4xl font-black text-center">Our Team</h1>
          <div className="flex justify-center w-full mt-12 gap-24">

          <div className="divider">Default</div>
            {/* <div className=""></div> */}
              {/* CARLOS PROFILE AND BUTTONS DIV*/}
            <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar">
              <div className="w-36 bg-zinc-100 mask mask-squircle">
                <img src="../assets/image/carlos.png" />
              </div>
              <p className='mt-4'>Carlos Revilla</p>
              <div className=""><a href="https://github.com/carlosfrev123" target='_blank' className=""><i className="fa-brands p-1 bg-black text-white fa-github fa-1xl rounded "></i> </a>
              <a href="https://www.linkedin.com/in/carlosfrevilla/" target='_blank' className=""><i className="fa-brands bg-blue-500 text-white fa-linkedin-in p-1 rounded"></i></a></div>
            </div>

            <div className="divider">Default</div>

            {/* DHRUV */}
            <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar">
              <div className="w-36 bg-zinc-100 mask mask-squircle">
                <img src="../assets/image/dhruv.png" />
              </div>
              <p className='mt-4'>Dhruv Batra</p>
              <div className=""><a href="https://github.com/Dhruv-Batra" target='_blank' className=""><i className="fa-brands p-1 bg-black text-white fa-github fa-1xl rounded "></i> </a>
              <a href="https://www.linkedin.com/in/db-dhruv-batra/" target='_blank' className=""><i className="fa-brands bg-blue-500 text-white fa-linkedin-in p-1 rounded"></i></a></div>
            </div>
            
            <div className="divider">Default</div>

            {/* KUNSH */}
            <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar">
              <div className="w-36 bg-zinc-100 mask mask-squircle">
                <img src="../assets/image/kunsh.png" />
              </div>
              <p className='mt-4'>Kunsh Singh</p>
              <div className=""><a href="https://github.com/kunshksingh" target='_blank' className=""><i className="fa-brands p-1 bg-black fa-github text-white fa-1xl rounded"></i> </a>
              <a href="https://www.linkedin.com/in/kunsh-singh/" target='_blank' className=""><i className="fa-brands bg-blue-500 text-white fa-linkedin-in p-1 rounded"></i></a></div>
            </div>

            <div className="divider">Default</div>

            {/* SOOREN */}
            <div className="flex flex-col text-center items-center text-xl font-bold tracking-wider avatar">
              <div className="w-36 bg-slate-100 mask mask-squircle">
                <img src="../assets/image/sooren.png" />
              </div>
              <p className='mt-4'>Sooren Ghodsi</p>
              <div className=""><a href="https://github.com/SoorenGhodsi" target='_blank' className=""><i className="fa-brands p-1 bg-black text-white fa-github fa-1xl rounded "></i> </a>
              <a href="https://www.linkedin.com/in/sooren-ghodsi/" target='_blank' className=""><i className="fa-brands bg-blue-500 text-white fa-linkedin-in p-1 rounded"></i></a></div>
            </div>
            
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