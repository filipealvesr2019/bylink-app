import styles from "./BioButtonsStylesCovers.module.css";
export default function BioButtonsStylesCovers({
  setButton,
  settings,
  status,
}) {
  const Button3 = () => {
    switch (status) {
      case "RECEIVED":
        return (
          <button
            onClick={() => setButton("button3")}
            style={{
              background: "transparent",
              color: settings.linkColor,
              width: "10vw",
              padding: ".5rem",
              border: `2px solid ${settings.linkColor}`,
              borderRadius: "6px",
            }}
          >
            button3
          </button>
        );
      case "CONFIRMED":
        return (
          <button
            onClick={() => setButton("button3")}
            style={{
              background: "transparent",
              color: settings.linkColor,
              width: "10vw",
              padding: ".5rem",
              border: `2px solid ${settings.linkColor}`,
              borderRadius: "6px",
            }}
          >
            button3
          </button>
        );
      default:
        return (
          <button
            style={{
              background: "transparent",
              color: settings.linkColor,
              width: "10vw",
              padding: ".5rem",
              border: `2px solid ${settings.linkColor}`,
              borderRadius: "6px",
            }}
          >
            button3
          </button>
        );
    }
  };

  const Button4 = () => {
    switch (status) {
      case "RECEIVED":
        return (
          <button
            onClick={() => setButton("button4")}
            style={{
              width: "10vw",
              padding: ".5rem",
              background: "transparent",
              color: settings.linkColor,

              border: `2px dashed ${settings.linkColor}`,
              borderRadius: "10px",
            }}
          >
            button4
          </button>
        );
      case "CONFIRMED":
        return (
          <button
            onClick={() => setButton("button4")}
            style={{
              width: "10vw",
              padding: ".5rem",
              background: "transparent",
              color: settings.linkColor,

              border: `2px dashed ${settings.linkColor}`,
              borderRadius: "10px",
            }}
          >
            button4
          </button>
        );
      default:
        return (
          <button
            style={{
              width: "10vw",
              padding: ".5rem",
              background: "transparent",
              color: settings.linkColor,

              border: `2px dashed ${settings.linkColor}`,
              borderRadius: "10px",
            }}
          >
            button4
          </button>
        );
    }
  };
  return (
    <div
      style={{
        width: "35vw",
      }}
    >
      <h1> Estilo dos Botões</h1>
      <div className={styles.buttons}>
        <button
          onClick={() => setButton("button1")}
          style={{
            backgroundColor: settings.linkColor,
            color: settings.backgroundColor,
            borderRadius: "4px",
            border: "0",
            width: "10vw",
            padding: ".5rem",
          }}
        >
          button1
        </button>

        <button
          onClick={() => setButton("button2")}
          style={{
            backgroundColor: settings.linkColor,
            color: settings.backgroundColor,
            borderRadius: "100px",
            border: "0",
            width: "10vw",
            padding: ".5rem",
          }}
        >
          button2
        </button>
        {Button3()}
        {Button4()}
        {/* {status !== "RECEIVED" ? (
                     <button
                     style={{
                       width: "10vw",
                       padding: ".5rem",
                       background: "transparent",
                       color: settings.linkColor,
 
                       border: `2px dashed ${settings.linkColor}`,
                       borderRadius: "10px",
                     }}
                   >
                     button4
                   </button>
                  ) : (
                  
                    <button
                    onClick={() => setButton("button4")}
                    style={{
                      width: "10vw",
                      padding: ".5rem",
                      background: "transparent",
                      color: settings.linkColor,

                      border: `2px dashed ${settings.linkColor}`,
                      borderRadius: "10px",
                    }}
                  >
                    button4
                  </button>
              
                  )}
          */}
        <button onClick={() => setButton("button5")}>button2</button>
        {/* <Buttons button={button} /> */}
      </div>
    </div>
  );
}
