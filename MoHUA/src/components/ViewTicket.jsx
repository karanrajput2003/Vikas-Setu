import React, { useEffect, useState } from "react";
import Axios from "axios";

function ViewTicket() {
  const [fdata, setFdata] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      setFdata(res.data);
    });
  }, []);

  const updateHandler = (id) => {
    const updatedData = {
      _id: id,
      userid: "newUserId", // Replace with actual updated data
      issue: "newIssue", // Replace with actual updated data
      dept: "newDept", // Replace with actual updated data
    };

    Axios.post("http://localhost:4000/update", updatedData)
      .then((res) => {
        if (res.status === 204) {
          alert("Data updated successfully");
        } else {
          alert("Error updating data");
        }
      })
      .catch((err) => {
        alert("Error updating data");
        console.error("Error details:", err);
      });
  };

  const deleteHandler = (id) => {
    console.log("ID for delete:", id); // Log the ID to confirm it's correct
    Axios.post("http://localhost:4000/delete", { id })
      .then((res) => {
        if (res.status === 200) {
          setFdata((prevData) => prevData.filter((item) => item._id !== id));
          alert("Issue will be deleted");
        } else {
          alert("Error deleting data");
          console.log("Delete response:", res);
        }
      })
      .catch((err) => {
        alert("Error deleting data");
        console.error("Error details:", err);
      });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">USER ID</th> */}
            <th scope="col">Issue</th>
            {/* <th scope="col">Department</th> */}
          </tr>
        </thead>
        <tbody>
          {fdata.map((sdata, index) => (
            <tr key={sdata._id}>
              <th scope="row">{index + 1}</th>
              {/* <td>{sdata.userid}</td> */}
              <td>{sdata.issue}</td>
              {/* <td>{sdata.dept}</td> */}
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => updateHandler(sdata._id)}
                >
                  RESOLVE
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => deleteHandler(sdata._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ViewTicket;
