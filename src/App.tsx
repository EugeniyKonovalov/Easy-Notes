import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditNotes from "./Pages/EditNotes";
import Notes from "./Pages/Notes";
import Folders from "./components/Folders/Folders";
import AddFolderForm from "./components/Folders/AddFolderForm";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder" element={<Folders />} />
          <Route path="/new_folder" element={<AddFolderForm />} />
          <Route path="/create_note" element={<EditNotes />} />
          <Route path="/notes_list" element={<Notes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
