import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Upload = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data,setData] = useState({
    author:""
  });

  const handleImageupload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }

      setLoading(true);

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }

      formData.append("upload_preset", "ml_default");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzvxsgooe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();

      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (imageUrl.length === 0) {
      console.error("No image to save");
      return;
    }

    try {
      const def = {
        image_url: imageUrl[0],
        author: data.author, // Adjust this if you want to handle multiple images
      };

      // Make an API call to send the image URL to the backend
      const response = await axios.post("https://scoutverse.onrender.com/auth/upload/image", def);

      // Handle the response from the backend
      console.log("Save operation complete", response.data);
    } catch (err) {
      console.error(err, "Save operation failed");
      
    }
  };
  console.log(data ,"author")

  return (
    <div>
      <input
        type="file"
   
             className="input-email"
             id="passwordInput"
             placeholder="Enter your text"
        name="image_url"
        onChange={handleImageupload}
        required
      />
      
      <div className="input-margin">
           <input
             type="text"
             className="input-email"
             id="emailInput"
             placeholder="Enter your text"
             value={data.author}
             onChange={(e) => setData({ ...data, author: e.target.value })}
           />
         </div>

         <div className="save-it">
            <button onClick={handleSave} disabled={imageUrl.length === 0 || loading}>
        Post Image
      </button>
      </div>
      {loading && <p>Hang On Image is being uploaded ...</p>}
    </div>
  );
};

export default Upload;
