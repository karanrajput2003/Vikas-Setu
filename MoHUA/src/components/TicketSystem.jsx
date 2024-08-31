import React, { useState } from "react";
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
    <div className="form" style={{ position: "relative", left: "1%" }}>
      <form onSubmit={SubmitHandler}>
        <div className="mb-3">
          <label
            htmlFor="deptSelect"
            className="form-label"
            style={{ marginRight: "10px" }}
          >
            Department:
          </label>
          <select
            name="dept"
            value={fdata.dept}
            onChange={ChangeHandler}
            className="form-control"
            id="deptSelect"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              width: "85%", // Optional: To make it full width
            }}
          >
            <option value="">Select Department</option>
            <option value="Sanitation">Land Acquisition Department</option>
            <option value="Infrastructure">
              Forest and Environment Departments
            </option>
          </select>
        </div>

        <div className="mb-3">
          <label
            htmlFor="issueInput"
            className="form-label"
            style={{ marginRight: "60px" }}
          >
            Issue:
          </label>
          <input
            type="text"
            name="issue"
            value={fdata.issue}
            onChange={ChangeHandler}
            className="form-control"
            id="issueInput"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "5px",
              width: "85%", // Optional: To make it full width
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketSystem;
