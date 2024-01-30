import React, { useState } from "react";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the caption and image
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
      const response = await fetch("/api/post/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Post created successfully!");
        // You can handle success as needed (e.g., redirect or show a success message)
      } else {
        console.error("Failed to create post.");
        // Handle error accordingly
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle error accordingly
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            name="caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
