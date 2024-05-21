import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  timeout: 1000,
  headers: { batch: "b52wetamil" },
});
function Read() {
  useEffect(() => {
    async function get() {
      const response = await instance.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
    }
    get();
  }, []);
  return <div></div>;
}
export default Read;
