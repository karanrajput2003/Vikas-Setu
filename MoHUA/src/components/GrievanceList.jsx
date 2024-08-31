import React, { useEffect, useState } from "react";
import Axios from "axios";

function GrievanceList() {
  const [fdata, setFdata] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000")
      .then((res) => {
        setFdata(res.data);
      })
      .catch((err) => {
        alert("Error fetching data");
        console.error("Fetch error:", err);
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
        console.error("Update error:", err);
      });
  };

  const deleteHandler = (id) => {
    Axios.post("http://localhost:4000/delete", { id })
      .then((res) => {
        if (res.status === 200) {
          setFdata((prevData) => prevData.filter((item) => item._id !== id));
          alert("Issue deleted successfully");
        } else {
          alert("Error deleting data");
          console.log("Delete response:", res);
        }
      })
      .catch((err) => {
        alert("Error deleting data");
        console.error("Delete error:", err);
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Inter-departmental Issues</th>
            <th className="py-2 px-14">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fdata.map((sdata, index) => (
            <tr key={sdata._id} className="border-b">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{sdata.issue}</td>
              <td className="py-2 px-4 flex space-x-4">
                <button
                  type="button"
                  className="px-4 py-1 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => updateHandler(sdata._id)}
                >
                  RESOLVE
                </button>
                <button
                  type="button"
                  className="px-4 py-1 text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={() => deleteHandler(sdata._id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrievanceList;
