import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Update from "./Update";

function Edit({ datas, setDatas }) {
  const [editdata, setEditdata] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setEditdata(res.data));
  }, [id]);

  const handleSubmit = async () => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      editdata
    );

    const updateuser = response.data;
    console.log(updateuser);
    const updateDatas = datas.map((data) =>
      data.id === updateuser.id ? updateuser : data
    );
    setDatas(updateDatas);
  };
  if (!editdata) {
    return <div>Loading...</div>;
  }
  return (
    <div className="add-user">
      <h1>Edit user</h1>
      <form
        style={{
          width: "400px",
          height: "300px",
        }}
      >
        <div>
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ width: "400px", height: "30px" }}
            value={editdata.name}
            onChange={(e) => setEditdata({ ...editdata, name: e.target.value })}
          />
        </div>
        <div>
          <label>Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            style={{ width: "400px", height: "30px" }}
            value={editdata.email}
            onChange={(e) =>
              setEditdata({ ...editdata, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>Enter Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            style={{ width: "400px", height: "30px" }}
            value={editdata.phone}
            onChange={(e) =>
              setEditdata({ ...editdata, phone: e.target.value })
            }
          />
        </div>
        <div>
          <label>Enter City Name</label>
          <input
            type="text"
            placeholder="Enter City Name"
            style={{ width: "400px", height: "30px" }}
            value={editdata.address.city}
            onChange={(e) =>
              setEditdata({ ...editdata, address: { city: e.target.value } })
            }
          />
        </div>
        <span>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleSubmit()}
            >
              submit
            </Button>
          </Link>
          <Link to={"/"}>
            {" "}
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </span>
      </form>
    </div>
  );
}
export default Edit;
