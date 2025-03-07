export default function BioStandard({ settings }) {
    const profileImageStyle = {
      width: "5rem",
      height: "5rem",
      borderRadius: "50%",
    };
  
    return (
      <div>
        {settings.profileImage ? (
          <img
            src={settings.profileImage}
            alt="Profile"
            style={profileImageStyle}
          />
        ) : (
          <div
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://i.imgur.com/soSw6fY.png" alt="" />
          </div>
        )}
        sdsds
      </div>
    );
  }
  