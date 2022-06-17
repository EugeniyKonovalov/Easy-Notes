import Home from "../../Pages/Home";
import NoteDetail from "../../Pages/NoteDetail";
import {
  FOLDERS_ROUTE,
  HOME_ROUTE,
  NEW_FOLDER,
  NEW_NOTE,
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
];
