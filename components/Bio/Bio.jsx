import bio1 from "./BioStyles/bio1.module.css";
import bio2 from "./BioStyles/bio2.module.css";
import bio3 from "./BioStyles/bio3.module.css";
import bio4 from "./BioStyles/bio4.module.css";
import bio5 from "./BioStyles/bio5.module.css";
import bio6 from "./BioStyles/bio6.module.css";
import bio7 from "./BioStyles/bio7.module.css";
import bio8 from "./BioStyles/bio8.module.css";
import bio9 from "./BioStyles/bio9.module.css";
import bio10 from "./BioStyles/bio10.module.css";
import styles from "./Bio.module.css";
export default function Bio({
bio
}) {
  const buttonStyles = () => {
    switch (bio) {
      case "bio1":
        return bio1;
      case "bio2":
        return bio2;
      case "bio3":
        return bio3;
      case "bio4":
        return bio4;
      case "bio5":
        return bio5;
      case " bio6":
        return  bio6;
      case "bio7":
        return bio7;
      case " bio8":
        return  bio8;
      case "bio9":
        return bio9;
      case "bio8":
        return bio10;
      default:
        return bio1;
    }
  };

  const styles = buttonStyles();

  const handleBioSwitch = () => {
    switch (bio) {
      case "bio1":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="text"
              value={link.name}
              placeholder={`Nome do Link ${link.id}`}
              className={styles.button}
              style={{
                backgroundColor: backgroundButton,
                color: colorButton,
                borderRadius: "4px",
              }}
            >
              {link.name}
            </button>
          </div>
        );
      case "bio2":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="text"
              value={link.name}
              placeholder={`Nome do Link ${link.id}`}
              className={styles.button}
              style={{
                backgroundColor: backgroundButton,
                color: colorButton,
                borderRadius: "50px",
                border: "0",
              }}
            >
              {link.name}
            </button>
          </div>
        );
      case "bio3":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="text"
              value={link.name}
              placeholder={`Nome do Link ${link.id}`}
              className={styles.button}
              style={{
                background: "transparent",
                color: backgroundButton,

                border: `2px solid ${backgroundButton}`,
                borderRadius: "6px",
              }}
            >
              {link.name}
            </button>
          </div>
        );
      case "bio4":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              type="text"
              value={link.name}
              placeholder={`Nome do Link ${link.id}`}
              className={styles.button}
              style={{
                background: "transparent",
                color: backgroundButton,

                border: `2px dashed ${backgroundButton}`,
                borderRadius: "10px",
              }}
            >
              {link.name}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.ButtonsContainer}>
        <div style={{
          marginBottom:"1rem"
        }}>

        {handleBioSwitch()}
        </div>
        </div>
    </>
  );
}
