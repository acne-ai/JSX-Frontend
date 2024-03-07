import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

const HomeContainer = () => {
  const navigate = useNavigate();
  // dev branch comment
  // class="lg:pl-[19.5rem]"
  return (
    <div className="lg:pl-[18rem] home-container extra-padding">
      <div className="flex flex-col justify-center max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[14rem] xl:pr-16">
        {/* HERO - invisible div (DIV 1) */}
        <div className="flex flex-row min-h-full bg-base-100 p-8 space-x-8">
          <div class="text-5xl font-extrabold w-1/2">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Welcome to Acne-AI
            </span>
            <div className="text-2xl font-bold max-w-2/3">
              <p className="py-6 font-oxygen">
                Providing a solution to acne. The modern way.
              </p>
            </div>
          </div>
          <div class = "container w-1/2">
            <div className="homeimg"></div>
          </div>
        </div>

        <div className="divider"></div>

        {/* MAIN CARD BODY (DIV 2) */}
        <div className="flex flex-row space-x-8 justify-center extra-padding">
          <div className="card glass flex-col space-x-4 justify-center text-white m-4 shadow-md">
            {/* card title div */}
            <div className="flex items-center justify-center p-4">
              <h1 className="text-5xl ml-6 font-semibold mt-3 blend">Our Model</h1>
            </div>

            {/* breakdown and explanation div */}
            <div className="flex flex-row pb-8 space-x-8 font-oxygen be-container">
              {/* breakdown graphic and breakdown title div */}
              <div className="flex-col w-1/3 p-11 text-center ">
                {/* breakdown title */}
                <h2 className="text-xl ml-6 font-semibold ">Breakdown</h2>
                {/* breakdown graphic */}
                <div className="flex justify-items-center mt-4">
                  <ul className="timeline timeline-vertical">
                    <li>
                      <div className="timeline-start">Step 1</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box text-white">
                        The model takes in an image of your acne and classifies it
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-start">Step 2</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box text-white">
                        We use generative AI in order to develop a better understanding of your acne
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-start">Step 3</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box text-white">
                        We use chain-of-thought reasoning to help prepare a treatment plan for you (for educational purposes only)
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-start">Step 4</div>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end timeline-box text-white">
                        We serve all this data back in a more digestible format
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
              {/* TEXT NEXT TO BREAKDOWN GRAPHIC */}
              <div className="flex-row w-2/3 p-8 text-wrap text-2xl bg-blend">
                <h3 className="font-oxygen p-3">
                Pores are the small openings in your skin that release oil and sweat. They’re also connected to your hair follicles. Pores can become clogged with excess oil, dead skin cells, and bacteria. When this happens, you may develop a pimple or “zit.” Or is it a “zit”? What is causing it? Let us try to help you figure it out.
                </h3>
                <br />
                <h3 className="font-oxygen p-3">
                Our DinoV2 model classifies your acne and then provides a treatment plan using generative AI. This is for educational purposes only and should not be used as a substitute for professional medical advice, but we hope to provide a better understanding of your acne, and help you make more informed decisions about your skin.
                </h3>
                <h3 className="font-oxygen p-3">
                We're working on expanding our model to include more skin conditions, and to provide more accurate and helpful information with semantic segmentation — we've been able to use DinoV2 and linear segmentation with low accuracy. Though, we've had some success with getting our model to understand the difference between different types of acne, and we're excited to see where we can take it next.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* GITHUB AND TOOL BUTTONM LINKS (DIV 3) */}
        <div className="flex space-x-8 justify-center extra-padding">
          {/* TOOL */}
          <div className="card w-1/2 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title text-center">Check out our AI tool!</h2>
              <p>
                {" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn" onClick={() => navigate("/tool")}>
                  Try it Now!
                </button>
              </div>
            </div>
          </div>
          {/* GITHUB */}
          <div className="card w-1/2 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title text-center">Check out our code!</h2>
              <p className="font-oxygen">
                See our project, our pitfalls, and what we're working on next!{" "}
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/acne-ai"
                  target="_blank"
                  className="bg-slate-800 rounded-xl hover:bg-zinc-500 text-white btn p-2"
                >
                  Github Link<i className="fa-brands fa-github fa-2xl"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

// <h1 className="text-5xl ml-6 font-bold italic text-center py-10">How it works</h1>
//       <div className="flex py-5 px-20"> {/* title paragraph and demo1: login and add server*/}
//         <div className="max-w-[50%] px-5">
//           <p className="text-xl ml-6 font-semibold">Provident cupiditate voluptatem et in.  aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//         </div>
//       </div>
