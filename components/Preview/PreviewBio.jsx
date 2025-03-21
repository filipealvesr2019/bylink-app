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
import PreviewBioStyles from "./PreviewBio.module.css";

// import Bio1 from "./BioList/Bio1";

// import StandardBio from "./BioList/StandardBio";
import Tema3 from "../temas/Tema3";
import StandardBio from "../Bio/BioList/StandardBio";
import Tema5 from "../temas/Tema5";
import Preview1 from "./Preview1";
import Preview2 from "./Preview2";
export default function PreviewBio({
  settings,
  bio,
  button,
  colorButton,
  link,
  backgroundButton,
  backgroundColor,
  colors,
  containerBackgroundColor,

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
      case "bio6":
        return bio6;
      case "bio7":
        return bio7;
      case "bio8":
        return bio8;
      case "bio9":
        return bio9;
      case "bio8":
        return bio10;
      default:
        return null;
    }
  };

  const styles = buttonStyles();

  const handleBioSwitch = () => {
    switch (bio) {
      case "standard":
        return (
          <div>
            <StandardBio
              settings={settings}
              backgroundColor={backgroundColor}
              backgroundButton={backgroundButton}
              button={button}
              link={link}
              colorButton={colorButton}
              containerBackgroundColor={containerBackgroundColor}

            />
          </div>
        );
      case "bio1":
        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Preview1
              settings={settings}
              colors={colors}
              backgroundColor={backgroundColor}
              backgroundButton={backgroundButton}
              button={button}
              link={link}
              colorButton={colorButton}
              containerBackgroundColor={containerBackgroundColor}
            />
          </div>
        );
      case "bio2":
        return (
          <Preview2
            settings={settings}
            colors={colors}
            backgroundColor={backgroundColor}
            backgroundButton={backgroundButton}
            button={button}
            link={link}
            colorButton={colorButton}
            containerBackgroundColor={containerBackgroundColor}

          />
        );
      case "bio3":
        return <></>;
      default:
        return null;
    }
  };
  console.log(colors);

  return (
    <>
      <div className={PreviewBioStyles.container}>
        <div>{handleBioSwitch()}</div>
        {/* {bio} */}
        {containerBackgroundColor}
      </div>
    </>
  );
}
