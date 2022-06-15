import axios from "axios";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { folderActions } from "../../store/appSlice";
import { API_URL } from "../../utils/constants";
import FoldersList from "./FoldersItem";

const Folders: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const folderData = useAppSelector((state) => state.folderItem.folders);
  useEffect(() => {
    const fetchFolder = async () => {
      await axios
        .get(`${API_URL}/directories`)
        .then((res) => {
          dispatch(folderActions.setFolders(res.data));
        })
        .catch((err) => {
          throw err;
        });
    };
    const fetchNotes = async () => {
      await axios
        .get(`${API_URL}/notices`)
        .then((res) => {
          dispatch(folderActions.setNotes(res.data));
        })
        .catch((err) => {
          throw err;
        });
    };
    try {
      setTimeout(() => {
        fetchFolder();
        fetchNotes();
      }, 500);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  console.log(folderData);
  return (
    <ul>
      <FoldersList />
    </ul>
  );
};

export default Folders;
