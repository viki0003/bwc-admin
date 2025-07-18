import React, { useState, useRef } from "react";
import { useSports } from "../../../APIContext/SportsContext";
import SportsImg from "../../../Assets/Images/BasketBall3.png";
import { RadioButton } from "primereact/radiobutton";
import "./addsports.css";
import Loader from "../../../Components/Loader/Loader";

const AddNewSport = () => {
  const { createSport, toastRef } = useSports();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sport_type: "",
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
  
    if (!formData.name.trim()) {
      toastRef.current?.show({
        severity: "warn",
        summary: "Validation Error",
        detail: "Please enter the Sports Name.",
        life: 3000,
      });
      return;
    }
  
    if (!formData.sport_type) {
      toastRef.current?.show({
        severity: "warn",
        summary: "Validation Error",
        detail: "Please select a Sports Type.",
        life: 3000,
      });
      return;
    }
  
    if (!formData.image) {
      toastRef.current?.show({
        severity: "warn",
        summary: "Validation Error",
        detail: "Please upload a Sport Image.",
        life: 3000,
      });
      return;
    }
  
    setIsSubmitting(true);
  
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("sport_type", formData.sport_type);
    data.append("is_active", true);
    data.append("image", formData.image);
  
    await createSport(data);
    setIsSubmitting(false);
  
    setFormData({ name: "", description: "", sport_type: "", image: null });
    setPreview(null);
    fileInputRef.current.value = null;
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      sport_type: e.value,
    }));
  };

  return (
    <div className="add-new-sport">
      <form
        className="add-sport-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <div
            className="sport-img"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          >
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

              <div className="ff-item">
                <label>Sports Type</label>
                <div className="st-radios">
                  <div className="st-radios-item">
                    <RadioButton
                      inputId="1to1Sport"
                      name="sport_type"
                      value="1-1"
                      onChange={handleRadioChange}
                      checked={formData.sport_type === "1-1"}
                    />
                    <label htmlFor="1to1Sport">1 - 1</label>
                  </div>

                  <div className="st-radios-item">
                    <RadioButton
                      inputId="groupSport"
                      name="sport_type"
                      value="Group"
                      onChange={handleRadioChange}
                      checked={formData.sport_type === "Group"}
                    />
                    <label htmlFor="groupSport">Group</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="ff-btns">
              <button
                type="submit"
                className="btn gold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                     <Loader/>
                  </>
                ) : (
                  "Save Sport"
                )}
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
