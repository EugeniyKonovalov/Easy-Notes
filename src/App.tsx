import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditNotes from "./Pages/EditNotes";
import Notes from "./Pages/NoteDetail";
import Folders from "./components/Folders/Folders";
import AddFolderForm from "./components/Folders/AddFolderForm";
import FoldersList from "./components/Folders/FolderList";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "./utils/constants";
import { appActions } from "./store/appSlice";
import AllNotes from "./components/Notes/AllNotes";
import NoteDetail from "./Pages/NoteDetail";

function App() {
  const dispatch = useAppDispatch();
  const folderData = useAppSelector((state) => state.appItem.folders);
  const noteData = useAppSelector((state) => state.appItem.notes);

  console.log(folderData);
  console.log(noteData);
  useEffect(() => {
    const fetchFolder = async () => {
      await axios
        .get(`${API_URL}/directories`)
        .then((res) => {
          dispatch(appActions.setFolders(res.data));
        })
        .catch((err) => {
          throw err;
        });
    };
    const fetchNotes = async () => {
      await axios
        .get(`${API_URL}/notices`)
        .then((res) => {
          dispatch(appActions.setNotes(res.data));
        })
        .catch((err) => {
          throw err;
        });
    };
    try {
      const timer = setTimeout(() => {
        fetchFolder();
        fetchNotes();
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    } catch (err) {
      throw new Error(err);
    }
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folders" element={<Folders />} />
          <Route path="/new_folder" element={<AddFolderForm />} />
          <Route path="/create_note" element={<EditNotes />} />
          <Route path="folder/:folderId/" element={<AllNotes />} />
          <Route path="folder/:folderId/:noteId" element={<NoteDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
