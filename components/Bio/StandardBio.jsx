import Buttons from "../Buttons/Buttons";
import styles from "./StandardBio.module.css";
export default function StandardBio({ 
    settings,
    button,
    link,
    backgroundButton,
    backgroundColor,
    colorButton,
    background

}) {
  const profileImageStyle = {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
  };

  return (
    <div className={styles.container}>
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
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "5px",
          color: settings.titleColor,
        }}
      >
        {settings.title || "Seu Nome"}
      </h2>
      <p
        style={{
          fontSize: "0.9rem",
          opacity: 0.9,
          marginBottom: "15px",
          color: settings.titleColor,
        }}
      >
        {settings.presentation || "@seu.usuario"}
      </p>

      <Buttons
        settings={settings}
        backgroundColor={backgroundColor}
        button={button}
        link={link}
        backgroundButton={backgroundButton}
        colorButton={colorButton}
      />
    </div>
  );
}
