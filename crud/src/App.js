import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Alluser from "./component/Alluser";
import Adduser from "./component/Adduser";
import Edit from "./component/Edit";
import Reg from "./Reg";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/all" element={<Alluser />} />
        <Route exact path="/all" element={<Alluser />} />
        <Route exact path="/add" element={<Adduser />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
      <Reg />
    </>
  );
}

export default App;
