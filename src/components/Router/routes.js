import Home from "../../Pages/Home";
import Login from "../../Pages/LoginPage";
import NoteDetail from "../../Pages/NoteDetail";
import Register from "../../Pages/RegisterPage";
import Search from "../../Pages/Search";
import {
  FOLDERS_ROUTE,
  HOME_ROUTE,
  LOGIN,
  NEW_FOLDER,
  NEW_NOTE,
  REGISTRATION,
  SEARCH,
} from "../../utils/constants";
import AddFolderForm from "../Folders/AddFolderForm";
import Folders from "../Folders/Folders";
import AddNoteForm from "../Notes/AddNoteForm";
import FolderNotes from "../Notes/FolderNotes";

export const routes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: FOLDERS_ROUTE,
    element: <Folders />,
  },
  {
    path: NEW_FOLDER,
    element: <AddFolderForm />,
  },
  {
    path: NEW_NOTE,
    element: <AddNoteForm />,
  },
  {
    path: FOLDERS_ROUTE + ":folderId",
    element: <FolderNotes />,
  },
  {
    path: FOLDERS_ROUTE + ":folderId/:noteId",
    element: <NoteDetail />,
  },
  {
    path: REGISTRATION,
    element: <Register />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: SEARCH,
    element: <Search />,
  },
  {
    path: SEARCH + "/:noteId",
    element: <NoteDetail />,
  },
];
