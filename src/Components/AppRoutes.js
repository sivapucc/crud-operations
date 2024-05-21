import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Update from "./Update";
import Read from "./Read";
import Create from "./Create";
import { useEffect, useState } from "react";
import axios from "axios";
import Edit from "./Edit";
function AppRoutes() {
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    async function get() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setDatas(response.data);
    }
    get();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home datas={datas} setDatas={setDatas} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<Edit datas={datas} setDatas={setDatas} />}
        ></Route>
        <Route path="/read:id" element={<Read />}></Route>
        <Route
          path="/create"
          element={<Create datas={datas} setDatas={setDatas} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
