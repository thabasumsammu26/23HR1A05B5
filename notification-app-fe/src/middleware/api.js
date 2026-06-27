
const API_URL = "http://4.224.186.213/evaluation-service/notifications";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0aGFiYXN1bXNhbW11MjZAZ21haWwuY29tIiwiZXhwIjoxNzgyNTM5ODYzLCJpYXQiOjE3ODI1Mzg5NjMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkMGIwODcxOC1hNWU1LTQwNjctYjY1Ni0wZTliYzVmMGNhZmIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzeWVkIHNhbWVlZGEgdGhhYmFzdW0iLCJzdWIiOiJhZmRkM2Q3ZC1hOWFjLTRlMmUtOTYwNS03YmVkYzJjNDlkZTMifSwiZW1haWwiOiJ0aGFiYXN1bXNhbW11MjZAZ21haWwuY29tIiwibmFtZSI6InN5ZWQgc2FtZWVkYSB0aGFiYXN1bSIsInJvbGxObyI6IjIzaHIxYTA1YjUiLCJhY2Nlc3NDb2RlIjoiYVRreWJzIiwiY2xpZW50SUQiOiJhZmRkM2Q3ZC1hOWFjLTRlMmUtOTYwNS03YmVkYzJjNDlkZTMiLCJjbGllbnRTZWNyZXQiOiJaY2FlYWZRcXlOaEdNbUpQIn0.O0jHvpg21rNqHhzFXfYUzIC0WrCC5l2PkHJumlEHSVk";

export async function getNotifications(limit = 10, page = 1, notificationType = "") {
  let url = `${API_URL}?limit=${limit}&page=${page}`;

  if (notificationType) {
    url += `&notification_type=${notificationType}`;
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      }
    });

    if (!response.ok) {
      throw new Error("Request Failed");
    }

    const data = await response.json();
    return data.notifications;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}