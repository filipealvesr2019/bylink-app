import button1 from "./buttonStyles/Button1.module.css";
import button2 from "./buttonStyles/Button2.module.css";

export default function Buttons({
  button,
  link,
  backgroundButton,
  colorButton,
}) {
  const buttonStyles = () => {
    switch (button) {
      case "button1":
        return button1;
      case "button2":
        return button2;
    }
  };
  const styles = buttonStyles();
  const handleButtonsSwitch = () => {
    switch (button) {
      case "button1":
        return (
          <>
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
                // onChange={(e) =>
                //   updateLinkValue(
                //     link.id,
                //     "name",
                //     e.target.value
                //   )
                // }
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
          </>
        );
      case "button2":
        return (
          <>
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
                // onChange={(e) =>
                //   updateLinkValue(
                //     link.id,
                //     "name",
                //     e.target.value
                //   )
                // }
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
          </>
        );
    }
  };
  return <>{handleButtonsSwitch()}</>;
}
