import { useState } from "react";
import axios from "axios";
import Profile from "../Profile";
import "../../Css/Admin/Foodaccess1.css";

export default function Foodaccess1() {
  const [foodType, setFoodType] = useState("");
  const [day, setDay] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodType || !image || (foodType === "snacks" && !day)) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("type", foodType);
    formData.append("image", image);
    if (foodType === "snacks") {
      formData.append("day", day);
    }

    try {
      const res = await axios.post("http://localhost:8080/api/food/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(res.data || "Upload successful");
      setFoodType("");
      setDay("");
      setImage(null);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="foodaccess1" id="foodaccess1">
      <div>
        <Profile />
      </div>
      <form onSubmit={handleSubmit} className="food-form">
        <h2>Upload Food Item</h2>
        <div>
          <label htmlFor="">Food Name : </label>
            <input type="text" placeholder="Food name"/>
        </div>
        <div>
          <label htmlFor="">Function Name : </label>
            <input type="text" placeholder="Function name"/>
        </div>
        <div>
          <label>Food Type : </label>
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)} required>
            <option value="">Select</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
            <option value="drinks">Drinks</option>
            <option value="special">Special Dish</option>
          </select>
        </div>

        {foodType === "snacks" && (
          <div>
            <label>Day : </label>
            <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="e.g., Monday" required/>
          </div>
        )}

        {foodType === "special" && (
          <div>
            <div>
              <label>Day : </label>
              <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="e.g., Monday" required/>
            </div><br></br>
            <div>
                <label>Timing : </label>
                <select name="" id="">
                    <option value="">Select</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Lunch</option>
                    <option value="lunch">Dinner</option>
                </select>
            </div>
          </div>
        )}

        <div id="foodaccess1-img">
          <label>Image Upload : </label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required/>
        </div>

        <button type="submit" className="foodaccess1-btn">Submit</button>
      </form>
    </div>
  );
}
