
import { Card, CardContent, Typography, Chip, Button } from "@mui/material";

function NotificationCard({ notification, onView }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.title}
        </Typography>

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {notification.message}
        </Typography>

        <Chip
          label={notification.type}
          sx={{ marginTop: 2, marginRight: 1 }}
        />

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {notification.timestamp}
        </Typography>

        {!notification.read && (
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={() => onView(notification.id)}
          >
            Mark as Viewed
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default NotificationCard;