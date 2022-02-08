import "./App.css";
import { Route, Routes } from "react-router-dom";
import PatientsPage from "pages/Patients";
import DetailPage from "pages/Detail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PatientsPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
