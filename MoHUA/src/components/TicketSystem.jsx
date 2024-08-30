import React from "react";
import { useState } from "react";
// import "../StyleSheet/home.css";
import Axios from "axios";
const TicketSystem = () => {
  const [fdata, setFdata] = useState({
    userid: "",
    issue: "",
    dept: "",
  });
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/insert", { fdata });
    alert("Issue Submitted");
  };

  return (
    <>
      <div className="form" style={{ position: "relative", left: "1%" }}>
        <form onSubmit={SubmitHandler}>
          <div class="mb-3">
            {/* <label for="exampleInputEmail1" class="form-label">
          USER ID: <input type="text" name="userid" value={fdata.userid} onChange={ChangeHandler} class="form-control" id="exampleInputEmail1"/>
        </label> */}
          </div>
          <div class="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ marginRight: "10px" }}
            >
              Issue:
            </label>
            <input
              type="text"
              name="issue"
              value={fdata.issue}
              onChange={ChangeHandler}
              className="form-control"
              id="exampleInputEmail1"
              style={{
                border: "2px solid #ccc",
                borderRadius: "5px",
                padding: "5px",
                width: "85%", // Optional: To make it full width
              }}
            />
          </div>
          <div class="mb-3">
            {/* <label for="exampleInputEmail1" class="form-label">
          Department: <input type="text" name="dept" value={fdata.dept} onChange={ChangeHandler} class="form-control" id="exampleInputEmail1"/>
        </label> */}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default TicketSystem;
