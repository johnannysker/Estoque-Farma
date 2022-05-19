import {BrowserRouter, Routes, Route} from "react-router-dom";
import MedList from "./componentes/MedList";
import AddMed from "./componentes/AddMed";
import EditMed from "./componentes/EditMed";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<MedList />}/>
        <Route path="add" element={<AddMed />}/>
        <Route path="edit/:id" element={<EditMed />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
