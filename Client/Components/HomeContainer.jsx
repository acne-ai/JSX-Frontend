import React from 'react';

const HomeContainer = () =>{
  return(
    <>
    {/* HERO - invisible div */}
    <div className="hero h-auto bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className='w-100'>
          <div class="text-5xl font-extrabold float-left">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Welcome to Acne-AI</span>
            <div className="text-2xl font-bold max-w-96">
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>


  {/* MAIN CARD BODY */}
  <div className="card flex-col space-x-4 justify-center bg-primary text-primary-content p-4 m-4">
    {/* card title div */}
    <div className="flex items-center justify-center">
      <h1 className="text-2xl ml-6 font-semibold">Our Model</h1>
    </div>
    {/* breakdown and explanation div */}
    <div className="flex pb-8 space-x-8">
      {/* breakdown graphic and breakdown title div */}
      <div className="flex-col p-11 text-center ">
        {/* breakdown title */}
        <h2 className="text-xl ml-6 font-semibold">
          Breakdown
        </h2>
        {/* breakdown graphic */}
        <div className="flex justify-items-center mt-4">
                  <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start">Step 1</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box text-white">WORD1</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">Step 2</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box text-white">WORD2</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">Step 3</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box text-white">WORD3</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">Step 4</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box text-white">WORD4</div>
              <hr/>
            </li>
          </ul>
        </div>
      </div>
      {/* TEXT NEXT TO BREAKDOWN GRAPHIC */}
      <div className="flex-row p-8 text-wrap">
          <h3 className="">Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. </h3>
          <br/>
          <h3 className="">Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. </h3>    
      </div>
    </div>
  </div>

  {/* GITHUB AND TOOL BUTTONM LINKS */}
  <div className="flex pb-8 space-x-8 justify-center">
      {/* TOOL */}
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-center">Check out our AI tool!</h2>
          <p>ITest test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. </p>
          <div className="card-actions justify-end">
            <button className="btn">TOOL</button>
          </div>
        </div>
      </div>
      {/* GITHUB */}
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-center">Check out our Github</h2>
          <p>Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. Test test. </p>
          <div className="card-actions justify-end">
            <button className="btn">/acne-me</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default HomeContainer;


// <h1 className="text-5xl ml-6 font-bold italic text-center py-10">How it works</h1>
//       <div className="flex py-5 px-20"> {/* title paragraph and demo1: login and add server*/}
//         <div className="max-w-[50%] px-5">
//           <p className="text-xl ml-6 font-semibold">Provident cupiditate voluptatem et in.  aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//         </div>
//       </div>