import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create({ datas, setDatas }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: { city: "" },
  });
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Datas updated:", datas);
  }, [datas]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      values
    );

    setDatas([...datas, res.data]);
    console.log(datas);
    navigate("/");
  };
  return (
    <div className="add-user">
      <h1>Add user</h1>
      <form
        style={{
          width: "400px",
          height: "300px",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ width: "400px", height: "30px" }}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label>Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            style={{ width: "400px", height: "30px" }}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label>Enter Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            style={{ width: "400px", height: "30px" }}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>
        <div>
          <label>Enter City Name</label>
          <input
            type="text"
            placeholder="Enter City Name"
            style={{ width: "400px", height: "30px" }}
            onChange={(e) =>
              setValues({ ...values, address: { city: e.target.value } })
            }
          />
        </div>
        <span>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => handleSubmit(e)}
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
export default Create;
