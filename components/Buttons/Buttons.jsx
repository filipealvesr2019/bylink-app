import button1 from "./buttonStyles/Button1.module.css";
import button2 from "./buttonStyles/Button2.module.css";
import button3 from "./buttonStyles/Button3.module.css";
import button4 from "./buttonStyles/Button4.module.css";
import button5 from "./buttonStyles/button5.module.css";
import button6 from "./buttonStyles/button6.module.css";
import button7 from "./buttonStyles/button7.module.css";
import button8 from "./buttonStyles/button8.module.css";
import button9 from "./buttonStyles/button9.module.css";
import button10 from "./buttonStyles/button10.module.css";
import styles from "./Buttons.module.css";
import Link from "next/link";
export default function Buttons({
  button,
  link,

  backgroundButton,
  colorButton,
  backgroundColor,
}) {
  const buttonStyles = () => {
    switch (button) {
      case "button1":
        return button1;
      case "button2":
        return button2;
      case "button3":
        return button3;
      case "button4":
        return button4;
      case "button5":
        return button5;
      case "button6":
        return button6;
      case "button7":
        return button7;
      case "button8":
        return button8;
      case "button9":
        return button9;
      case "button10":
        return button10;
      default:
        return button1;
    }
  };


  const styles = buttonStyles();

  const handleButtonsSwitch = () => {
    switch (button) {
      case "button1":
        return (
          <div >
            {link.map((link) => (
              <Link href={`${link.value}`} >
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
                      marginBottom:"1rem"
                    }}
                  >
                    {link.name}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        );
      case "button2":
        return (
          <>
            {link.map((link) => (
            <Link href={`${link.value}`} >
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
                marginBottom:"1rem"

              }}
            >
              {link.name}
            </button>
          </div>
            </Link>
          ))
    }
          </>
        
        );
      case "button3":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
              {link.map((link) => (
            <Link href={`${link.value}`} >
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
                marginBottom:"1rem"

              }}
            >
              {link.name}
            </button>
          </div>
            </Link>
          ))
    }
           
          </div>
        );
      case "button4":
        return (

          <div
          key={link.id}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
            {link.map((link) => (
          <Link href={`${link.value}`} >
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
                marginBottom:"1rem"

              }}
            >
              {link.name}
            </button>
        </div>
          </Link>
        ))
  }
         
        </div>
      );
          
  
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.ButtonsContainer}>
        <div
         
        >
          {handleButtonsSwitch()}
        </div>
      </div>
    </>
  );
}
