import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase.js";
import DataTest from "./DataTest.jsx";
import Signup from "./Signup.jsx";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/Abhinav"), {
      id: 1,
      name: "Abhinav",
      age: 21,
    });
  };

  return (
    <>
      <DataTest />
      <button onClick={putData}>Put Data</button>
      <br />
      <br />
      <br />
      <Signup />
    </>
  );
}

export default App;
