import React, { useState, useEffect } from "react";

function Jitsi() {
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    width: "100%",
    height: "700px",
  };

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "100%",
    height: "100%",
  };

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: "this-is-a-unique-room-name",
        parentNode: document.getElementById('jitsi-container'),
        configOverwrite: {
          disableDeepLinking: true,
        },
      };

      const api = new JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", "MyName");
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, []);

  return (
    <div style={containerStyle}>
      {loading && <span>Loading...</span>}
      <div id="jitsi-container" style={jitsiContainerStyle} />
    </div>
  );
}

export default Jitsi;
