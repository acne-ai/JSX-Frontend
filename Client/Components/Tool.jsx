import React, { useState } from "react";
import axios from "axios";

const Tool = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  // use state for classification
  const [classification, setClassification] =useState("");

  // states for prompt answers -- init to empty string
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState([]);
  const [q3, setq3] = useState([]);
  const [q4, setq4] = useState([]);
  const [q5, setq5] = useState([]);
  
  const [resultImagePath, setResultImagePath] = useState("");

  const [loadingStatus, setLoadingStatus] = useState(false);

  const [treatmentsComponent, setTreatmentsComponent] = useState(null);
  const [skincareComponent, setSkincareComponent] = useState(null);
  const [causesComponent, setCausesComponent] = useState(null);

  // Image preview handler 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
      // console.log("output(line 30 Tool.jsx: )", file);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  //  ------------------------ FORM SUBMIT - DATA RETIEVAL FUNC ------------------------
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoadingStatus(true);

    if (!selectedFile) {
      console.error('No file selected');
      setLoadingStatus(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('https://acneai.pythonanywhere.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);

      setClassification(response.data.classification);

      setq1(response.data.q1.answer);
      setq2(response.data.q2.answer);
      setq3(response.data.q3.answer);
      setq4(response.data.q4.answer);
      setq5(response.data.q5.answer);
      

      setTreatmentsComponent(<div className="card bg-black text-white p-4 flex flex-col space-y-8">{response.data.q2.answer.map(item => <p key={item}>{item}</p>)}</div>);
      setSkincareComponent(<div className="card bg-black text-white p-4 flex flex-col space-y-8">{response.data.q3.answer.map(item => <p key={item}>{item}</p>)}</div>);
      setCausesComponent(<div className="card bg-black text-white p-4 flex flex-col space-y-8">{response.data.q4.answer.concat(response.data.q5.answer).map(item => <p key={item}>{item}</p>)}</div>);

      setResultImagePath(response.data.result_path);
      setLoadingStatus(false);
      
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
//  ------------------------ FORM SUBMIT handler end ------------------------



// IMAGE REMOVAL FUNC
  const handleRemoveImage = () => {
    setImagePreviewUrl("");
    setSelectedFile(null);
    setSelectedFileName("");
  };

  return (
    <>
    {/* TOOL PAGE MAIN BODY DIV */}
      <div class="lg:pl-[18rem]">
        <div className="flex flex-col justify-center max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[14rem] xl:pr-16">
      
        

        

        {/* TOOL MAIN BODY DIV START**********************/}
          <div className="flex flex-row w-auto space-x-4">


            {/* IMAGE PREVIEW UPLOAD AND PROMPTS INFO DIV */}
            <div className="flex flex-col w-1/2">

              {/* FORM DIV */}
              <div className="mt-11 p-8 flex-col w-1/2 justify-center items-center bg-base-100">
                <form onSubmit={handleFormSubmit} className="w-full md:w-1/2">
                  <div className="relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
                    <div className="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
                      <label className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                        Select image
                        <input 
                          id="faceImage" 
                          className="text-sm cursor-pointer w-36 hidden" 
                          type="file" 
                          onChange={handleImageChange} 
                          accept=".jpeg, .jpg, .png, .webp, .heic" // Restrict file types
                        />
                      </label>
                      <button 
                        type="button"
                        className='inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'
                        onClick={handleRemoveImage} // Set the click handler to remove the image
                      >
                        Remove image
                      </button>
                    </div>
                    <div className="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                      {imagePreviewUrl ? (
                        <img src={imagePreviewUrl} alt="Preview" className="w-auto max-h-full rounded-lg" />
                      ) : (
                        <span className="text-gray-400 opacity-75">No image selected</span>
                      )}
                    </div>
                  </div>


                  {/* UPLOAD IMAGEUPLOADEDPATH/LOADING ---------------------- */}
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <button 
                        type="submit" 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Upload
                      </button>
                      {selectedFileName && (
                      <div className="ml-4 text-gray-500">
                        File: {selectedFileName}
                      </div>)}
                    </div>
                    {loadingStatus && (
                      <div className="flex flex-row ml-4 text-white">
                        Processing your upload, Please wait.
                        <span className="loading loading-spinner loading-md">  </span>
                      </div>
                    )}
                    
                  </div>
                </form>
              </div>

          {/* OUTPUT IMAGE START**********************/}
          <div className="">
            {resultImagePath && (
            <div className="flex flex-col items-center justify-center mt-4">
              <img src={resultImagePath} alt="Result" className="w-auto max-h-64 rounded-lg" />
            </div>)}
          </div>
          
        
        {/* Output Image END ------------------------------------*/}

              {/* INSTRUCTIONS DIV START**********************/}
              <div className="flex flex-col">
                <div className="collapse bg-base-200">
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Need Help? Click here for instructions and More information
                  </div>
                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>Step 1: Select image and choose image of a frontal face profile</p>
                    <p>Step 2: Click on Upload once you are happy with your selected image.</p>
                    <p>Step 3: Wait for Results!</p>
                  </div>
                </div>
              </div>
            {/* INSTRUCTIONS DIV END ------------------------------------*/}
            </div>
            
            {/* RESPONSE BOX */}
            <div className="card glass w-1/2 p-4 flex flex-col"> 
              
                {/* classification card */}
                <div className="card bg-black text-white p-4 flex flex-col space-y-8"> 
                  <h3>Classification: {classification}</h3>
                  <p>{q1}</p>
                </div>
              
                {/* Treatment card */}
                {treatmentsComponent}

                {/* Skincare tips card */}
                {skincareComponent}

                {/* Possible Causes card */}
                {causesComponent}
                
            </div>

          </div>
          {/* UPLOAD AND OUTPUT DIVS DIV END----------------------------------------*/}
      
        </div>
      </div>
    </>
  );
};

export default Tool;

/*
sample RESPONSE

{
    "classification": "papulosapustulosa",
    "q1": {
        "answer": "The patient has papulopustular acne, which is characterized by red bumps and pus-filled lesions on the skin.",
        "context": "Papulopustular acne is a moderate form of acne that consists of papules (small red bumps) and pustules (white or yellow pus-filled lesions). It is typically seen on the face, chest, and back.",
        "patient_data": "The patient has papulopustular acne.",
        "prompt": "Identify what type of acne the patient has and explain what characterizes this type of acne?",
        "reasoning": "Papulopustular acne can be challenging to treat because it requires addressing both the inflammation and infection associated with the lesions.",
        "thoughts": "This type of acne is characterized by inflammation, and it can be painful and have a significant impact on the patient's self-esteem."
    },
    "q2": {
        "answer": [
            "Benzoyl peroxide can help reduce inflammation and kill bacteria on the skin.",
            "Salicylic acid can help unclog pores and prevent new breakouts.",
            "Using a gentle cleanser and moisturizer suitable for acne-prone skin can also help maintain skin health.",
            "Home remedies like tea tree oil or green tea extract can have antibacterial and anti-inflammatory properties, but their efficacy may vary.",
            "It's recommended to visit a dermatologist if over-the-counter treatments are not effective, as prescription medications may be necessary for more severe cases."
        ],
        "context": "Since this type of acne is moderate, it may not respond well to just over-the-counter treatments.",
        "patient_data": "The patient has papulopustular acne.",
        "prompt": "Identify treatment options for such acne of the patient, and any nuances or complexities in treatment.",
        "reasoning": "Over-the-counter treatments like benzoyl peroxide can help reduce inflammation and kill bacteria, while salicylic acid can help unclog pores and prevent new breakouts.",
        "thoughts": "It's important to have a combination approach to target both the inflammation and infection associated with papulopustular acne."
    },
    "q3": {
        "answer": [
            "Use a mild, non-comedogenic cleanser to wash the face twice daily.",
            "Moisturize the skin with a gentle, oil-free moisturizer to prevent dryness and irritation.",
            "Avoid touching or picking at the acne lesions to prevent further inflammation and scarring.",
            "Regularly wash any items that come in contact with the face, such as pillowcases and makeup brushes, to prevent bacterial transfer.",
            "Maintain a healthy diet and drink plenty of water to support overall skin health."
        ],
        "context": "Taking care of the skin is crucial to managing papulopustular acne.",
        "patient_data": "The patient has papulopustular acne.",
        "prompt": "What are some general skincare or cleanliness tips that could help with this form of acne?",
        "reasoning": "Regularly washing the face and keeping the skin moisturized can help maintain skin health and prevent further breakouts.",
        "thoughts": "Mild, non-comedogenic cleansers should be used to avoid blocking pores and worsening the acne."
    },
    "q4": {
        "answer": [
            "Hormonal changes, such as puberty, menstruation, or pregnancy, can lead to increased oil production and acne flare-ups.",
            "Genetics can influence a person's likelihood of developing acne and the severity of their symptoms.",
            "Using skincare products that are too heavy or contain ingredients that clog pores can worsen acne.",
            "Certain foods high in sugar or dairy may trigger inflammation and contribute to acne development.",
            "Stress can trigger hormonal changes that may exacerbate acne symptoms and lead to more frequent breakouts."
        ],
        "context": "Understanding the potential causes or triggers can help identify factors contributing to the acne.",
        "patient_data": "The patient has papulopustular acne.",
        "prompt": "What are some potential causes or triggers of the acne that the patient has and provide details on how each cause is relevant?",
        "reasoning": "For some individuals, certain foods or dietary habits may also trigger breakouts, and stress can exacerbate acne symptoms.",
        "thoughts": "Hormonal changes, genetics, and skincare products can all play a role in the development of papulopustular acne."
    },
    "q5": {
        "answer": [
            "Poor dietary habits, such as consuming high amounts of processed foods or sugary snacks, can lead to inflammation and trigger acne breakouts.",
            "High stress levels may disrupt hormonal balance and increase sebum production, leading to more severe acne symptoms.",
            "Irregular sleep patterns can affect skin regeneration and repair, potentially worsening acne and delaying healing.",
            "Engaging in regular physical activity can help reduce stress levels and improve circulation, which can benefit skin health.",
            "Practicing good hygiene, including regular hand washing and avoiding touching the face, can help prevent bacterial transfer and reduce acne flare-ups."
        ],
        "context": "Considering lifestyle factors can provide insight into potential influences on the acne.",
        "patient_data": "The patient has papulopustular acne.",
        "prompt": "Are there any lifestyle factors that could be influencing the acne and explain how?",
        "reasoning": "A balanced diet, stress management techniques, and maintaining a regular sleep schedule can help support overall skin health and potentially improve acne symptoms.",
        "thoughts": "Poor dietary habits, high stress levels, and irregular sleep patterns can all impact the skin and contribute to acne development."
    },
    "result_path": "/home/acneai/flaskbackend/processed/uploaded_image_20240306_220602.png"
}

 */


// func for conditional rendering

// <div className="">
//                   {acneType && suggestion ? (
//                   <div className="">
//                 //     {/* <p class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white text-wrap">Ah yes it seems you have, {acneType}.</p> */}
//                 //     <p><strong>Type of Acne:</strong> {acneType}</p>
//                 //     {/* <p class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white text-wrap">I would suggest the following: {suggestion}.</p> */}
//                 //     <p><strong>Suggested Regiment:</strong> {suggestion}</p>
//                 //   </div>
//                 //   ) : (
//                 //   <div className="">
//                 //     <p></p>
//                 //     <p></p>
//                 //   </div>
//                 //   )}
//                 // </div>



