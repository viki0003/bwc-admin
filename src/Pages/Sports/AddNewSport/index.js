import React, { useState, useRef } from "react";
import { useSports } from "../../../APIContext/SportsContext";
import SportsImg from "../../../Assets/Images/BasketBall3.png";
import "./addsports.css";

const AddNewSport = () => {
  const { createSport } = useSports();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("is_active", true);
    if (formData.image) {
      data.append("image", formData.image);
    }

    await createSport(data);
    setIsSubmitting(false);

    setFormData({ name: "", description: "", image: null });
    setPreview(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className="add-new-sport">
      <form className="add-sport-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <div className="sport-img" onClick={handleImageClick} style={{ cursor: "pointer" }}>
            <img src={preview || SportsImg} alt="Sport" />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>

          <div className="form-fields-details">
            <div className="ff-fields">
              <div className="ff-item">
                <label>Sports Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ff-item">
                <label>Sports Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="ff-btns">
              <button type="submit" className="btn gold" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Sport"}
              </button>
              <button
                type="button"
                className="btn grey"
                onClick={() => {
                  setFormData({ name: "", description: "", image: null });
                  setPreview(null);
                  fileInputRef.current.value = null;
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewSport;
