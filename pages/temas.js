import axios from "axios";
import Tema1 from "../components/temas/Tema1";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
import Tema2 from "../components/temas/Tema2";
import Link from "next/link";
import styles from "./temas.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
export default function Temas() {
  const CriarPagina = async (settings) => {
    console.log("settings", settings);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/routes/temas",
        {
          name: settings.name,
          linksColor: settings.linksColor,
          backgroundColor: settings.backgroundColor,
          buttonStyle: settings.buttonStyle,
          // mainFont: settings.font,
          // gradient: {
          //   firstColor: settings.gradientColor1,
          //   secondColor: settings.gradientColor2,
          //   direction: settings.gradientDirection,
          //   isGradientSelected: settings.gradient ?  true : false
          //   },
          // title: settings.title,
          // description: settings.presentation,
          // titleColor: settings.titleColor,
          // titleSize: settings.titleSize ,
          // profileImage: settings.profileImage,
          // BackgroundImage: settings.backgroundImage,
          // Adicione mais campos aqui, se necessário
        }
      );
    } catch (error) {
      console.error(
        "Erro ao criar página:",
        error.response?.data || error.message
      );
    }
  };
  // RECEIVED
  const status = "sRECEIVED";
  return (
    <>
      <MobileMenu />
      <Login />
      <div
       className={styles.container}
      >
        {status !== "RECEIVED" ? (
          <div style={{
            display:"flex",
            gap:"1rem"
          }}>
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/PRsKLfE.png"
                className={styles.img}
              />
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/egPRNRC.png"
                className={styles.img}
              />
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
            <div className={styles.Link}>
            <img src="https://i.imgur.com/VmSupJW.png" className={styles.img} />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            display:"flex",
            gap:"1rem"

          }}>
            <Link href={`/viewer/tema1`} className={styles.Link}>
              <img
                src="https://i.imgur.com/PRsKLfE.png"
                className={styles.img}
              />
            </Link>

            <Link href={`/viewer/tema2`} className={styles.Link}>
              <img
                src="https://i.imgur.com/egPRNRC.png"
                className={styles.img}
              />
            </Link>
            <Link href={`/viewer/tema6`} className={styles.Link}>
          <img src="https://i.imgur.com/VmSupJW.png" className={styles.img} />
        </Link>
          </div>
        )}

        <Link href={`/viewer/tema3`} className={styles.Link}>
          <img src="https://i.imgur.com/c6f2Hww.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema4`} className={styles.Link}>
          <img src="https://i.imgur.com/4M5S4S5.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema5`} className={styles.Link}>
          <img src="https://i.imgur.com/EMTRpIq.png" className={styles.img} />
        </Link>
      
      </div>
    </>
  );
}
