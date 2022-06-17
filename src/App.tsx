import Layout from "./components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "./utils/constants";
import { appActions } from "./store/appSlice";
import AppRouter from "./components/Router/AppRouter";

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
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
