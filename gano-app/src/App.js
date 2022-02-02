import "./App.css";
import Header from "./components/common/Header";
import PatientList from "components/patient/PatientList"
import RoomList from "components/patient/RoomList"

function App() {
  return (
    <>
      <Header />
      <RoomList/>
      <PatientList/>
    </>
  );
}

export default App;
