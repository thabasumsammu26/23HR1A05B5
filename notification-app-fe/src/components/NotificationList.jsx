

import Notification from "./NotificationCard";

function NotificationList({ notifications, onView }) {
  if (notifications.length === 0) {
    return <h3>No Notifications Found</h3>;
  }

  return (
    <div>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default NotificationList;