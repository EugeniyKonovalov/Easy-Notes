import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddFolderForm from "./components/Folders/AddFolderForm";
import EditNotes from "./Pages/EditNotes";
import Notes from "./Pages/Notes";
import Folders from "./components/Folders/Folders";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder" element={<Folders />} />
          <Route path="/create_note" element={<EditNotes />} />
          <Route path="/notes_list" element={<Notes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
