import React, { useContext, useState , useEffect} from "react";
import { FileUpload } from "primereact/fileupload";
import { PiPlus } from "react-icons/pi";
import { useScheduler  } from "../../../APIContext/SchedulerContext";
import "./createevent.css";

const CreateEvent = () => {

const { eventFieldsData, fetchEventFieldsData, addNewActivityData } = useScheduler();

  const [activities, setActivities] = useState(['']);
  const [equipment, setEquipment] = useState(['']);
  const [trainers, setTrainers] = useState(['']);
  const [fieldsData,  setFieldsData] = useState({});


  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [newActivityName, setNewActivityName] = useState("");

  useEffect(() => {
    fetchEventFieldsData();
  }, []);

  useEffect(() => {
    if (eventFieldsData) {
      setFieldsData(eventFieldsData);
    }
  }, [eventFieldsData]);

  // const handleAddActivity = () => {
  //   setActivities([...activities, '']);
  // };

  // const handleAddEquipment = () => {
  //   setEquipment([...equipment, '']);
  // };

  // Unified add function
  const handleAddActivityAndEquipment = () => {
    setActivities([...activities, '']);
    setEquipment([...equipment, '']);
  };

  const handleAddTrainers = () => {
    setTrainers([...trainers, '']);
  };

  const handleActivityChange = (index, event) => {
    const value = event.target.value;
  if (value === "__add_new__") {
    setShowAddActivityModal(true); // open popup
    return; // don't overwrite activities yet
  }
  const newActivities = [...activities];
  newActivities[index] = value;
  setActivities(newActivities);
  };

 
  const handleEquipmentChange = (index, event) => {
    const newEquipment = [...equipment];
    newEquipment[index] = event.target.value;
    setEquipment(newEquipment);
  };

  const handleTrainersChange = (index, event) => {
    const newTrainers = [...trainers];
    newTrainers[index] = event.target.value;
    setTrainers(newTrainers);
  };

  const saveNewActivity = async (e) => {
    e.preventDefault();

    // console.log();
    

    if (!newActivityName.trim()) return;

    const data = {
                  "name": "test2 event",
                  "event_type": "instruction",
                  "date": "2025-08-10",
                  "start_time": "9:00",
                  "end_time": "10:00",
                  "location": "1",
                  "client_type": "1",
                  "sports": [24],
                  "notes": "string",
                  "trainers": [{"trainer":6}, {"trainer": 5}],
                  "activities": [
                    {
                      "activity_id": 1,  
                      "equipments": [
                        {"equipment": 1 },
                        {"equipment": 1 }
                      ]
                    },
                    {
                      "activity_data": {
                        "name": newActivityName.trim()
                      },
                      "equipments": [
                        {"equipment": 2}
                      ]
                    },
                    {
                      "activity_data": {
                        "name": newActivityName.trim()
                      },
                      "equipments": [
                        {"equipment": 2}
                      ]
                    }
                  ],
                  "direct_equipments": [
                    {"equipment": 1}
                  ],
                  "documents":[]
                };

    try {
      await addNewActivityData(data);
      // setNewActivityName("");
      // setShowAddActivityModal(false);
    } catch (err) {
      console.error("Failed to add new activity:", err);
    }
  };


  const renderCrateEventForm = (eventFieldsData) =>{
    let event_type_arr = eventFieldsData?.event_types || [];
    let eq_obj = eventFieldsData?.equipments || [];
    let ac_obj = eventFieldsData?.activities || [];
    let sports_arr = eventFieldsData?.sports || [];
    let trainers_arr = eventFieldsData?.trainers || [];
    return(
      <>
      
      <div className="create-event-item">
        <h2>Event Information</h2>
         <form>
            <div className="form-item">
              <label>Event Name</label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label>Event Type</label>
              <select>
                {event_type_arr.map((eventType) => (
                  <option key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-item">
              <label>Date</label>
              <input type="text" placeholder="mm-dd-yyy" onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}/>
            </div>

            <div className="form-item">
              <label>Time Slot</label>
              <input type="text" />
            </div>

            <div className="form-item">
              <label>Sport</label>
              <select>
                {sports_arr.map((eventType) => (
                  <option key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="choose-ac">
                <div className="form-item" style={{width: "100%" }}>
                  <label>Choose Activities</label>
                </div>

                {activities.map((item, index) => (
                  <div key={index} className="form-item">

                    <select
                      value={item}
                      onChange={(e) => handleActivityChange(index, e)}
                    >
                      <option value="" disabled>Select a activity</option>
                      {ac_obj.map((eq) => (
                        <option key={eq.id} value={eq.id}>
                          {eq.name}
                        </option>
                      ))}
                      <option value="__add_new__">➕ Add Activity</option>
                    </select>
                  </div>
                ))}

                <div className="form-item">
                  <button type="submit" className="btn black" onClick={(e) => {
                    e.preventDefault();
                    handleAddActivityAndEquipment();
                  }}>
                    <PiPlus /> Add Activity
                  </button>
                </div>
            </div>
                

            <div className="choose-eq">
                <div className="form-item" style={{width: "100%" }}>
                  <label>Choose Equipment</label>
                </div>

                {equipment.map((item, index) => (
                  <div key={index} className="form-item">

                    <select
                      value={item}
                      onChange={(e) => handleEquipmentChange(index, e)}
                    >
                      <option value="" disabled>Select a piece of equipment</option>
                      {eq_obj.map((eq) => (
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
                    handleAddActivityAndEquipment();
                  }}>
                    <PiPlus /> Add Equipment
                  </button>
                </div>

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
                <select>
                  <option value=""></option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="form-item">
                <label>Notes</label>
                <textarea rows="4" cols="50"></textarea>
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
                uploadHandler={(e) => {
                  console.log("Files selected:", e.files);
                  // You can store the files in state for later API upload
                  // setUploadedFiles(e.files);
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
          <button type="submit" className="btn gold">
            Create New Event
          </button>
          <button type="reset" className="btn black">
            Cancel
          </button>
      </div>
      
      </>
    );

  }


  const renderFormEventInformation = (eventFieldsData) => {
        // console.log(eventFieldsData)
        let event_type_arr = eventFieldsData?.event_types || [];
        let eq_obj = eventFieldsData?.equipments || [];
        let ac_obj = eventFieldsData?.activities || [];
        let sports_arr = eventFieldsData?.sports || [];
    
        return (
        <>
          <form>
            <div className="form-item">
              <label>Event Name</label>
              <input type="text" />
            </div>
            <div className="form-item">
              <label>Event Type</label>
              <select>
                {event_type_arr.map((eventType) => (
                  <option key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-item">
              <label>Date</label>
              <input type="text" placeholder="mm-dd-yyy" onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}/>
            </div>

            <div className="form-item">
              <label>Time Slot</label>
              <input type="text" />
            </div>

            <div className="form-item">
              <label>Sport</label>
              <select>
                {sports_arr.map((eventType) => (
                  <option key={eventType.id} value={eventType.id}>
                    {eventType.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="choose-ac">
                <div className="form-item" style={{width: "100%" }}>
                  <label>Choose Activities</label>
                </div>

                {activities.map((item, index) => (
                  <div key={index} className="form-item">

                    <select
                      value={item}
                      onChange={(e) => handleActivityChange(index, e)}
                    >
                      <option value="" disabled>Select a activity</option>
                      {ac_obj.map((eq) => (
                        <option key={eq.id} value={eq.id}>
                          {eq.name}
                        </option>
                      ))}
                      <option value="__add_new__">➕ Add Activity</option>
                    </select>
                  </div>
                ))}

                <div className="form-item">
                  <button type="submit" className="btn black" onClick={(e) => {
                    e.preventDefault();
                    handleAddActivityAndEquipment();
                  }}>
                    <PiPlus /> Add Activity
                  </button>
                </div>
            </div>
                

            <div className="choose-eq">
                <div className="form-item" style={{width: "100%" }}>
                  <label>Choose Equipment</label>
                </div>

                {equipment.map((item, index) => (
                  <div key={index} className="form-item">

                    <select
                      value={item}
                      onChange={(e) => handleEquipmentChange(index, e)}
                    >
                      <option value="" disabled>Select a piece of equipment</option>
                      {eq_obj.map((eq) => (
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
                    handleAddActivityAndEquipment();
                  }}>
                    <PiPlus /> Add Equipment
                  </button>
                </div>

            </div>
          </form> 
        </>
        )
  };


  const renderFormAssignTeam = (eventFieldsData) => {
        // console.log(eventFieldsData)
        let event_type_arr = eventFieldsData?.event_types || [];
        let sports_arr = eventFieldsData?.sports || [];
        let trainers_arr = eventFieldsData?.trainers || [];
 
    
        return (
        <>
        <form>
            <div className="choose-ac">
                <div className="form-item" style={{width: "100%" }}>
                  <label>Choose Trainers</label>
                </div>

                {trainers.map((item, index) => (
                  <div key={index} className="form-item">

                    <select
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
        </>
        )

  };


  const renderUploadDoc = () => {


    return (

      <>
        <form className="map-form">
          <div className="map-form-container-1">
              <div className="form-item">
                <label>Status</label>
                <select>
                  <option value=""></option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="form-item">
                <label>Notes</label>
                <textarea rows="4" cols="50"></textarea>
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
                uploadHandler={(e) => {
                  console.log("Files selected:", e.files);
                  // You can store the files in state for later API upload
                  // setUploadedFiles(e.files);
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
    
      </>


    );
       
  }





  return (
    <div className="create-event-page">
      {/* <div className="create-event-item">
        <h2>Event Information</h2>
        {fieldsData ? renderFormEventInformation(fieldsData) : <div>Loading...</div>}
      </div>
      <hr/>
      <div className="create-event-item">
        <h2>Assign Team</h2>

        {fieldsData ? renderFormAssignTeam(fieldsData) : <div>Loading...</div>}


        {renderUploadDoc()}

      
        
      </div>
      <div className="from-btns">
          <button type="submit" className="btn gold">
            Create New Event
          </button>
          <button type="reset" className="btn black">
            Cancel
          </button>
      </div> */}

      {renderCrateEventForm(fieldsData)}


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
