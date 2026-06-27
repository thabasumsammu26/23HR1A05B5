
import Notification from "./Notification";
import getPriorityNotifications from "../middleware/priorityHelper";

function PriorityList({ notifications, onView }) {
  const priorityNotifications = getPriorityNotifications(notifications);

  if (priorityNotifications.length === 0) {
    return <h3>No Priority Notifications</h3>;
  }

  return (
    <div>
      {priorityNotifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default PriorityList;