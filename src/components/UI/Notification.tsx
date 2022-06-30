import { useAppDispatch } from "../../hooks/redux";
import { uiActions } from "../../store/uiSlice";
import { INotification } from "../../types/uiDataTypes";
import classes from "./Notification.module.css";

const Notification: React.FC<INotification> = (props) => {
  const dispatch = useAppDispatch();
  const closeNotificationHandler = () => {
    dispatch(uiActions.closeNotification());
  };
  let specialClasses = "";
  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses} `;
  return (
    <section className={cssClasses}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      <button
        className={classes["close-btn"]}
        onClick={closeNotificationHandler}
      >
        x
      </button>
    </section>
  );
};

export default Notification;
