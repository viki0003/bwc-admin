import React, { useState, useRef, useEffect } from "react";
import { useSports } from "../../../APIContext/SportsContext";
import SportsImg from "../../../Assets/Images/BasketBall3.png";
import { RadioButton } from "primereact/radiobutton";
import Loader from "../../../Components/Loader/Loader";
import { MEDIA_BASE_URL } from "../../../Config/Config";

const EditSportModal = ({ sport, onClose }) => {
  const { updateSport } = useSports();
  const [formData, setFormData] = useState({
    name: sport.name || "",
    description: sport.description || "",
    sport_type: sport.sport_type || "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (sport.image) {
      setPreview(sport.image);
    }
  }, [sport]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, sport_type: e.value }));
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
    data.append("sport_type", formData.sport_type);
    data.append("is_active", sport.is_active);
    if (formData.image) {
      data.append("image", formData.image);
    }

    await updateSport(sport.id, data);
    setIsSubmitting(false);
    onClose();
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
            <img
              src={
                preview
                  ? preview.startsWith("blob:")
                    ? preview
                    : MEDIA_BASE_URL + preview
                  : SportsImg
              }
              alt="Sport"
            />
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
                {isSubmitting ? <Loader /> : "Update Sport"}
              </button>
              <button type="button" className="btn grey" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSportModal;
