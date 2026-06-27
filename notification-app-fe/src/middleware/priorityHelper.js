
const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

function getPriorityNotifications(notifications, limit = 10) {
  const unreadNotifications = notifications.filter((notification) => {
    return !notification.read;
  });

  unreadNotifications.sort((first, second) => {
    const firstPriority = priority[first.type] || 0;
    const secondPriority = priority[second.type] || 0;

    if (firstPriority !== secondPriority) {
      return secondPriority - firstPriority;
    }

    return new Date(second.timestamp) - new Date(first.timestamp);
  });

  return unreadNotifications.slice(0, limit);
}

export default getPriorityNotifications;