import React, { useContext, useState , useEffect} from "react";
import { FileUpload } from "primereact/fileupload";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/saga-blue/theme.css";
import 'primereact/resources/themes/lara-light-cyan/theme.css'; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";




import { PiPlus , PiMinus } from "react-icons/pi";
import { useScheduler  } from "../../../APIContext/SchedulerContext";
import "./createevent.css";

const CreateEvent = () => {

const { eventFieldsData, fetchEventFieldsData, activityEquipmentFieldsData, fetchActivityEquipmentsFieldsData, addNewActivityData, createNewEvent } = useScheduler();

  const [activities, setActivities] = useState(['']);
  const [equipment, setEquipment] = useState(['']);
  const [equipmentDirect, setEquipmentDirect] = useState(['']);
  const [trainers, setTrainers] = useState(['']);
  const [fieldsData,  setFieldsData] = useState({});
  const [acteqData,  setacteqData] = useState({});
  const [dateValue, setDateValue] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  
  
  
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [newActivityName, setNewActivityName] = useState("");
  
  useEffect(() => {
    fetchEventFieldsData();
    fetchActivityEquipmentsFieldsData();
  }, []);
  
  useEffect(() => {
    if (eventFieldsData && activityEquipmentFieldsData) {
      
      setFieldsData(eventFieldsData);
      setacteqData(activityEquipmentFieldsData);
      
    }
  }, [eventFieldsData, activityEquipmentFieldsData]);
  

  const handleAddActivityAndEquipment = () => {
      setActivities([...activities, '']);
      setEquipment([...equipment, '']);
  };

  const handleRemoveActivityAndEquipment = (index) => {
      const newActivities = [...activities];
      const newEquipment = [...equipment];

      newActivities.splice(index, 1);
      newEquipment.splice(index, 1);

      setActivities(newActivities);
      setEquipment(newEquipment);
  };

  const handleAddTrainers = () => {
      setTrainers([...trainers, '']);
  };

  const handleActivityChange = (index, event) => {
      const value = event.target.value;
      if (value === "__add_new__") {
        setShowAddActivityModal(true);
        return; 
      }
      const newActivities = [...activities];
      newActivities[index] = value;
      setActivities(newActivities);
  };

  const handleEquipmentChange = (index, selectedValues) => {
      const newEquipment = [...equipment];
      newEquipment[index] = selectedValues; // store the array of selected IDs
      setEquipment(newEquipment);
  };

  const handleDirectEquipmentChange = (index, selectedValues) => {
      const newEquipment = [...equipmentDirect];
      newEquipment[index] = selectedValues; // store the array of selected IDs
      setEquipmentDirect(newEquipment);
  };

  const handleTrainersChange = (index, event) => {
      const newTrainers = [...trainers];
      newTrainers[index] = event.target.value;
      setTrainers(newTrainers);
  };

  const saveNewActivity = async (e) => {
      e.preventDefault();
      if (!newActivityName.trim()) return;
      const data = {
                    "name": newActivityName.trim(),
                  };

      try {
        await addNewActivityData(data);
        setNewActivityName("");
        setShowAddActivityModal(false);
      } catch (err) {
        console.error("Failed to add new activity:", err);
      }
  };






  const saveNewEvent = async (e) => {
      e.preventDefault();

      const eventName = document.querySelector('input[name="event_name"]')?.value.trim() || "";
      const eventType = document.querySelector('select[name="event_type"]')?.value.trim() || "";
      const eventDateObj = dateValue instanceof Date ? dateValue : null;
      const eventDate = eventDateObj ? eventDateObj.toISOString().split("T")[0] : "";
      const startTime = document.querySelector('input[name="event_time_slot_start"]')?.value || "";
      const endTime = document.querySelector('input[name="event_time_slot_end"]')?.value || "";
      const location = document.querySelector('input[name="event_location"]')?.value || "";
      const clientType = document.querySelector('input[name="event_client_type"]')?.value || "";
      const sports = document.querySelector('select[name="event_sports"]')?.value
        ? [Number(document.querySelector('select[name="event_sports"]').value)]
        : [];
      const notes = document.querySelector('textarea[name="event_notes"]')?.value.trim() || "";

      const trainersArr = trainers
        .filter((t) => t)
        .map((t) => ({ trainer: Number(t) }));

      const activitiesArr = activities.map((actId, i) => ({
        activity_id: Number(actId),
        equipments: (equipment[i] || []).map((eqId) => ({ equipment: Number(eqId) })),
      }));

      const formData = new FormData();
      formData.append("name", eventName);
      formData.append("event_type", eventType);
      formData.append("date", eventDate);
      formData.append("start_time", startTime);
      formData.append("end_time", endTime);
      formData.append("location", location);
      formData.append("client_type", clientType);
      formData.append("sports", JSON.stringify(sports));
      formData.append("notes", notes);
      formData.append("trainers", JSON.stringify(trainersArr));
      formData.append("activities", JSON.stringify(activitiesArr));

      // Append uploaded files
      uploadedFiles.forEach((file) => {
        formData.append("documents", file);
      });

      try {
        await createNewEvent(formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        console.error("Failed to add new activity:", err);
      }
  };




  const renderCrateEventForm = (eventFieldsData,acteqData) => {

      let event_type_arr = eventFieldsData?.event_types || [];
      let eq_obj = acteqData?.equipments || [];
      let eq_obj_dir = acteqData?.equipments || [];
      let ac_obj = acteqData?.activities || [];
      let sports_arr = eventFieldsData?.sports || [];
      let trainers_arr = eventFieldsData?.trainers || [];

      return(
        <>
            <div className="create-event-item">
              <h2>Event Information</h2>
              <form>

                  <div className="form-item">
                    <label>Event Name</label>
                    <input name="event_name" type="text" />
                  </div>

                  <div className="form-item">
                    <label>Event Type</label>
                    <select name="event_type">
                      {event_type_arr.map((eventType) => (
                        <option key={eventType.id} value={eventType.name}>
                          {eventType.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-item">
                    <label>Date</label>
                    <Calendar
                      name="event_date"
                      value={dateValue}
                      onChange={(e) => setDateValue(e.value)}
                      dateFormat="mm-dd-yy"
                      placeholder="mm-dd-yyyy" 
                      showIcon
                    />
                  </div>

                  <div className="form-item">
                    <label>Time Slot (Start Time)</label>
                    <input name="event_time_slot_start" type="time" />
                  </div>

                  <div className="form-item">
                    <label>Time Slot (End Time)</label>
                    <input name="event_time_slot_end" type="time" />
                  </div>

                  <div className="form-item">
                    <label>Sport</label>
                    <select name="event_sports">
                      {sports_arr.map((eventType) => (
                        <option key={eventType.id} value={eventType.id}>
                          {eventType.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="choose-ac">
                      <div className="form-item" style={{width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label>Choose Activities & Equipments</label>
                        <div className="form-item add-remove-btn-con">
                              <button type="submit" className="btn black" onClick={(e) => {
                                e.preventDefault();
                                handleAddActivityAndEquipment();
                              }}>
                                <PiPlus /> Add
                              </button>
                              <button type="submit" className="btn black" onClick={(e) => {
                                e.preventDefault();
                                handleRemoveActivityAndEquipment();
                              }}>
                                <PiMinus  /> Remove
                              </button>
                        </div>
                      </div>
                      {activities.map((item, index) => (
                        <div key={index} className="form-item">
                          <label>Activity {index+1}</label>
                          <select
                            name={`event_activity_${index}`}
                            value={item}
                            onChange={(e) => handleActivityChange(index, e)}
                          >
                            <option value="" disabled>Select a activity</option>
                            {ac_obj.map((eq) => (
                              <option key={eq.id} value={eq.id}>
                                {eq.name}
                              </option>
                            ))}
                            <option className="add-new-act" value="__add_new__"> + Add Activity</option>
                          </select>
                        </div>
                      ))}
                  </div>

                  <div className="choose-eq">
                      {equipment.map((item, index) => (
                        <div key={index} className="form-item">
                          <label>Equipments</label>
                          <MultiSelect
                              name={`event_equipment_${index}`}
                              value={equipment[index] || []} 
                              options={eq_obj.map(eq => ({ label: eq.name, value: eq.id }))}
                              onChange={(e) => handleEquipmentChange(index, e.value)}
                              placeholder="Select equipments"
                              display="chip"
                              filter
                              className="w-full"
                          />
                        
                        </div>
                      ))}
                  </div>


                  <div className="choose-eq">
                      {equipmentDirect.map((item, index) => (
                        <div key={index} className="form-item">
                          <label>Direct Equipments</label>
                          <MultiSelect
                              name={`event_direct_equipment_${index}`}
                              value={equipmentDirect[index] || []} 
                              options={eq_obj_dir.map(eq => ({ label: eq.name, value: eq.id }))}
                              onChange={(e) => handleDirectEquipmentChange(index, e.value)}
                              placeholder="Select equipments"
                              display="chip"
                              filter
                              className="w-full"
                          />
                        </div>
                      ))}
                  </div>

              </form> 
            </div>

            <hr/>

            <div className="create-event-item">
              <h2>Assign Team</h2>

              <form>

                
                  <div className="choose-ac">

                      <div className="form-item" style={{width: "100%" }}>
                        <label>Choose Trainers</label>
                      </div>

                      {trainers.map((item, index) => (
                        <div key={index} className="form-item">

                          <select
                            name={`event_trainers_${index}`}
                            value={item}
                            onChange={(e) => handleTrainersChange(index, e)}
                          >
                            <option value="" disabled>Select a trainers</option>
                            {trainers_arr.map((eq) => (
                              <option key={eq.id} value={eq.id}>
                                {eq.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}

                      <div className="form-item">
                        <button type="submit" className="btn black" onClick={(e) => {
                          e.preventDefault();
                          handleAddTrainers();
                        }}>
                          <PiPlus /> Add Trainers
                        </button>
                      </div>

                  </div>

              </form>


              <form className="map-form">
                <div className="map-form-container-1">

                    <div className="form-item">
                      <label>Status</label>
                      <select name="event_status">
                        <option value=""></option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    
                    <div className="form-item">
                      <label>Notes</label>
                      <textarea name="event_notes" rows="4" cols="50"></textarea>
                    </div>

                </div>

                <div className="map-form-container-2">
                  
                  <div className="form-item">
                    <label>Upload Files</label>

                    <FileUpload
                      name="files[]"
                      multiple
                      accept=".jpg,.png,.pdf,.docx"
                      customUpload
                      uploadHandler={async (e) => {
                      const files = e.files;

                      const base64Files = await Promise.all(
                        files.map((file) => {
                          return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve(reader.result.split(",")[1]); 
                            reader.onerror = (error) => reject(error);
                            reader.readAsDataURL(file);
                          });
                        })
                      );

                      setUploadedFiles(base64Files);
                    }}
                      emptyTemplate={
                        <p className="m-0">
                          Drag and drop files here or click to browse
                        </p>
                      }
                    />
                  </div>

                </div>
              </form>
              
            </div>

            <div className="from-btns">

                <button 
                  type="submit" 
                  className="btn gold" 
                  onClick={(e) => {
                    e.preventDefault();
                    saveNewEvent (e);
                    
                  }}
                >
                  Create New Event
                </button>

                <button type="reset" className="btn black">
                  Cancel
                </button>

            </div>
        </>
      );
  }






  return (
    <div className="create-event-page">
      

      {fieldsData && acteqData ? renderCrateEventForm(fieldsData, acteqData) : <div>Loading ....</div>}


        {showAddActivityModal && (
          <div className="modal-backdrop">
            <div className="modal">
              <div className="create-event-item"> 
                <form>
                  <div className="form-item">
                    <h2>Add New Activity</h2>
                  </div>
                    <div className="form-item">
                      <input
                        id="field_new_activity"
                        type="text"
                        value={newActivityName}
                        onChange={(e) => setNewActivityName(e.target.value)}
                        placeholder="Enter activity name"
                      />
                    </div>
                    <div className="modal-actions">
                        <button
                          className="btn gold"
                          onClick={(e) => {
                            e.preventDefault();
                            saveNewActivity (e);
                            
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="btn black"
                          onClick={() => setShowAddActivityModal(false)}
                        >
                          Cancel
                        </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        )}

        

    </div>
  );
};
export default CreateEvent;
