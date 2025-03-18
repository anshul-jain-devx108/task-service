// const { google } = require("googleapis");

// const createGoogleCalendarEvent = async (task, accessToken) => {
//   try {
//     if (!accessToken) {
//       throw new Error("Missing access token for Google Calendar API");
//     }

//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });

//     const calendar = google.calendar({ version: "v3", auth: oauth2Client });

//     const event = {
//       summary: task.title,
//       start: { dateTime: task.dueDate, timeZone: "UTC" },
//       end: { dateTime: task.dueDate, timeZone: "UTC" },
//     };

//     const response = await calendar.events.insert({
//       calendarId: "primary",
//       resource: event,
//     });

//     return response.data.id;
//   } catch (error) {
//     console.error("❌ Google Calendar Sync Error:", error.message);
//     throw new Error("Failed to sync with Google Calendar");
//   }
// };

// const updateGoogleCalendarEvent = async (eventId, updatedData, accessToken) => {
//   try {
//     if (!accessToken) throw new Error("Missing access token for Google Calendar API");

//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });

//     const calendar = google.calendar({ version: "v3", auth: oauth2Client });

//     const eventUpdate = {
//       summary: updatedData.title,
//       start: { dateTime: updatedData.dueDate, timeZone: "UTC" },
//       end: { dateTime: updatedData.dueDate, timeZone: "UTC" },
//     };

//     await calendar.events.update({
//       calendarId: "primary",
//       eventId: eventId,
//       resource: eventUpdate,
//     });

//   } catch (error) {
//     console.error("❌ Google Calendar Update Error:", error.message);
//     throw new Error("Failed to update Google Calendar event");
//   }
// };

// const deleteGoogleCalendarEvent = async (eventId, accessToken) => {
//   try {
//     if (!accessToken) throw new Error("Missing access token for Google Calendar API");

//     const oauth2Client = new google.auth.OAuth2();
//     oauth2Client.setCredentials({ access_token: accessToken });

//     const calendar = google.calendar({ version: "v3", auth: oauth2Client });

//     await calendar.events.delete({
//       calendarId: "primary",
//       eventId: eventId,
//     });

//   } catch (error) {
//     console.error("❌ Google Calendar Delete Error:", error.message);
//     throw new Error("Failed to delete Google Calendar event");
//   }
// };

// module.exports = {
//   createGoogleCalendarEvent,
//   updateGoogleCalendarEvent,
//   deleteGoogleCalendarEvent,
// };


const { google } = require("googleapis");

// Convert Date to ISO Format
const formatDateToISO = (date) => {
  if (!date) return null;
  return new Date(date).toISOString();
};

const createGoogleCalendarEvent = async (task, accessToken) => {
  try {
    if (!accessToken) {
      throw new Error("Missing access token for Google Calendar API");
    }

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const event = {
      summary: task.title,
      description: task.description || "",
      start: { dateTime: formatDateToISO(task.dueDate), timeZone: "UTC" },
      end: { dateTime: formatDateToISO(task.dueDate), timeZone: "UTC" },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    return response.data.id;
  } catch (error) {
    console.error("❌ Google Calendar Sync Error:", error.message);
    throw new Error("Failed to sync with Google Calendar");
  }
};

const updateGoogleCalendarEvent = async (eventId, updatedData, accessToken) => {
  try {
    if (!accessToken) throw new Error("Missing access token for Google Calendar API");

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    const eventUpdate = {};
    if (updatedData.title) eventUpdate.summary = updatedData.title;
    if (updatedData.description) eventUpdate.description = updatedData.description;
    if (updatedData.dueDate) {
      eventUpdate.start = { dateTime: formatDateToISO(updatedData.dueDate), timeZone: "UTC" };
      eventUpdate.end = { dateTime: formatDateToISO(updatedData.dueDate), timeZone: "UTC" };
    }

    await calendar.events.patch({
      calendarId: "primary",
      eventId,
      resource: eventUpdate,
    });

  } catch (error) {
    console.error("❌ Google Calendar Update Error:", error.message);
    throw new Error("Failed to update Google Calendar event");
  }
};

const deleteGoogleCalendarEvent = async (eventId, accessToken) => {
  try {
    if (!accessToken) throw new Error("Missing access token for Google Calendar API");

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    await calendar.events.delete({
      calendarId: "primary",
      eventId,
    });

  } catch (error) {
    console.error("❌ Google Calendar Delete Error:", error.message);
    throw new Error("Failed to delete Google Calendar event");
  }
};

module.exports = {
  createGoogleCalendarEvent,
  updateGoogleCalendarEvent,
  deleteGoogleCalendarEvent,
};
