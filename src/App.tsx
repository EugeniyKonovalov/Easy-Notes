import Layout from "./components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { appActions } from "./store/appSlice";
import AppRouter from "./components/Router/AppRouter";
import { useLocation } from "react-router";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/uiSlice";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const notification = useAppSelector((state) => state.ui.notification);
  const fetchFolder = useCallback(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/directories`)
      .then((res) => {
        dispatch(appActions.setFolders(res.data));
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Getting folder data failed!",
          })
        );
      });
  }, [dispatch]);
  const fetchNotes = useCallback(async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/notices`,
    })
      .then((res) => {
        dispatch(appActions.setNotes(res.data));
      })
      .catch((err) => {
        throw err;
      });
  }, [dispatch]);
  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        fetchFolder();
        fetchNotes();
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    } catch (err) {
      throw new Error(err);
    }
  }, [dispatch, fetchFolder, fetchNotes, location]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
