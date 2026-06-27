
import { useState } from "react";
import { Button, Container, Pagination, Typography } from "@mui/material";
import NotificationList from "../components/Notificationlist";
import PriorityList from "../components/Prioritylist";
import Filter from "../components/filter";
import { getNotifications } from "../middleware/api";
import { Log } from "../middleware/logger";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  async function loadNotifications() {
    const data = await getNotifications(10, page, type);
    setNotifications(data);

    Log(
      "frontend",
      "info",
      "page",
      "Notifications Loaded"
    );
  }

  function markAsViewed(id) {
    const updated = notifications.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          read: true
        };
      }

      return item;
    });

    setNotifications(updated);

    Log(
      "frontend",
      "info",
      "component",
      "Notification Viewed"
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notification Center
      </Typography>

      <Button
        variant="contained"
        onClick={loadNotifications}
        sx={{ marginBottom: 2 }}
      >
        Load Notifications
      </Button>

      <Filter
        value={type}
        onChange={setType}
      />

      <Typography
        variant="h5"
        sx={{ marginTop: 3, marginBottom: 2 }}
      >
        Priority Notifications
      </Typography>

      <PriorityList
        notifications={notifications}
        onView={markAsViewed}
      />

      <Typography
        variant="h5"
        sx={{ marginTop: 3, marginBottom: 2 }}
      >
        All Notifications
      </Typography>

      <NotificationList
        notifications={notifications}
        onView={markAsViewed}
      />

      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => setPage(value)}
        sx={{ marginTop: 3 }}
      />
    </Container>
  );
}

export default Home;