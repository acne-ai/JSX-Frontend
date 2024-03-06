import React, { useState } from "react";
import axios from "axios";

const Tool = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [acneType, setAcneType] = useState("Upload Scan to recieve AI response.");
  const [suggestion, setSuggestion] = useState("");
  // FROM AI RESPONSE
    // type of acne predicted by AI
    // ai regiment suggestion

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('No file selected');
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
      setAcneType(response.data.image_path);
      setSuggestion(response.data.message);

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleRemoveImage = () => {
    setImagePreviewUrl("");
    setSelectedFile(null);
  };

  return (
    <>
      <div className="mt-11 p-8 flex-col justify-center items-center bg-base-100">
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
                <img src={imagePreviewUrl} alt="Preview" className="max-w-full h-auto rounded-lg" />
              ) : (
                <span className="text-gray-400 opacity-75">No image selected</span>
              )}
            </div>
          </div>
          <button 
            type="submit" 
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
        <div className="bg-white w-auto text-black p-4">
        <h1 class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white">Hello my name is Albert. I am an AI and I am here to scan your face. Please upload an image of ther Acne on your face. .... Or dont I would not know.</h1>
          <div className="">
            {acneType && suggestion ? (
            <div className="">
              <p class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white text-wrap">Ah yes it seems you have, {acneType}.</p>
              {/* <p><strong>Type of Acne:</strong> {acneType}</p> */}
              
              <p class="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white text-wrap">I would suggest the following: {suggestion}.</p>
              {/* <p><strong>Suggested Regiment:</strong> {suggestion}</p> */}
            </div>
            ) : (
            <div className="">
              <p></p>
              <p></p>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
