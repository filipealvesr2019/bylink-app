import axios from "axios";
import Tema1 from "../components/temas/Tema1";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Login from "@/app/Login";
import Tema2 from "../components/temas/Tema2";
import Link from "next/link";
import styles from "./temas.module.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
export default function Temas() {
  const [links, setLinks] = useState([
    { id: 1, name: "LINK 1", value: "" },
    { id: 2, name: "LINK 2", value: "" },
    { id: 3, name: "LINK 3", value: "" },
    { id: 4, name: "LINK 4", value: "" },
  ]);
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
  const status = "RECEIVED";
  return (
    <>
      <MobileMenu />
      <Login />
      <div className={styles.container}>
        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <div className={styles.tema1}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema1Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema1`} className={styles.Link}>
              <div className={styles.tema1}>
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema1Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <div
                className={styles.tema2}
                style={{
                  backgroundImage: "url(https://i.imgur.com/qMgrYpd.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema2Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema2`} className={styles.Link}>
              <div
                className={styles.tema2}
                style={{
                  backgroundImage: "url(https://i.imgur.com/qMgrYpd.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {links.map((link) => (
                  <div key={link.id}>
                    <button
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        updateLinkValue(link.id, "name", e.target.value)
                      }
                      placeholder={`Nome do Link ${link.id}`}
                      className={styles.tema2Buttons}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/VmSupJW.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema6`} className={styles.Link}>
              <img
                src="https://i.imgur.com/VmSupJW.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/D1jiFKU.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema7`} className={styles.Link}>
              <img
                src="https://i.imgur.com/D1jiFKU.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/4XKNTU0.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema9`} className={styles.Link}>
              <img
                src="https://i.imgur.com/4XKNTU0.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/QhbXw40.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema12`} className={styles.Link}>
              <img
                src="https://i.imgur.com/QhbXw40.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/mav3lxQ.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema13`} className={styles.Link}>
              <img
                src="https://i.imgur.com/mav3lxQ.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <img
                src="https://i.imgur.com/3Ihomdv.png"
                className={styles.img}
              />

              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema14`} className={styles.Link}>
              <img
                src="https://i.imgur.com/3Ihomdv.png"
                className={styles.img}
              />
            </Link>
          </div>
        )}

        {status !== "RECEIVED" ? (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className={styles.Link}>
              <div className={styles.animatedBG}></div>
              <div className={styles.lock}>
                <LockOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link href={`/viewer/tema15`} className={styles.Link}>
              <div className={styles.animatedBG}></div>
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

        <Link href={`/viewer/tema8`} className={styles.Link}>
          <img src="https://i.imgur.com/mV8qrP5.png" className={styles.img} />
        </Link>

        <Link href={`/viewer/tema10`} className={styles.Link}>
          <img src="https://i.imgur.com/y36s0IW.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema11`} className={styles.Link}>
          <img src="https://i.imgur.com/g1Rhjsb.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema16`} className={styles.Link}>
          <img src="https://i.imgur.com/OuTFiLR.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema17`} className={styles.Link}>
          <img src="https://i.imgur.com/IF0sbEH.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema18`} className={styles.Link}>
          <img src="https://i.imgur.com/wqVrvcv.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema19`} className={styles.Link}>
          <img src="https://i.imgur.com/wjAVWQS.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema20`} className={styles.Link}>
          <img src="https://i.imgur.com/QtfJllw.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema21`} className={styles.Link}>
          <img src="https://i.imgur.com/dKd6Eiz.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema22`} className={styles.Link}>
          <img src="https://i.imgur.com/Ndl6ERS.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema23`} className={styles.Link}>
          <img src="https://i.imgur.com/yn7K7Tw.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema24`} className={styles.Link}>
          <img src="https://i.imgur.com/8tSZQhM.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema25`} className={styles.Link}>
          <img src="https://i.imgur.com/K7qT7Xw.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema26`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema27`} className={styles.Link}>
          <div className={styles.tema27}></div>
        </Link>
        <Link href={`/viewer/tema28`} className={styles.Link}>
          <div className={styles.tema28}></div>
        </Link>
        <Link href={`/viewer/tema29`} className={styles.Link}>
          <div className={styles.tema29}></div>
        </Link>
        <Link href={`/viewer/tema30`} className={styles.Link}>
          <img src="https://i.imgur.com/yn7K7Tw.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema31`} className={styles.Link}>
          <img src="https://i.imgur.com/8tSZQhM.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema32`} className={styles.Link}>
          <img src="https://i.imgur.com/K7qT7Xw.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema33`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema34`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema35`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema36`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema37`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
          tema37
        </Link>
        <Link href={`/viewer/tema38`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema39`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema40`} className={styles.Link}>
          <img src="https://i.imgur.com/uwULYgr.png" className={styles.img} />
        </Link>
        <Link href={`/viewer/tema41`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  placeholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema42`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema43`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema44`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema45`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema46`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema47`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema48`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema50`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema51`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema52`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>

        <Link href={`/viewer/tema54`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema55`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema56`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema57`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema58`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema59`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema60`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema61`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema62`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema63`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema64`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema65`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema66`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema67`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema68`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema69`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema70`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema71`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema72`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema73`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema74`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema75`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema76`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema77`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema78`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema79`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema80`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
        <Link href={`/viewer/tema82`} className={styles.Link}>
          <div className={styles.tema41}>
            {links.map((link) => (
              <div key={link.id} className={styles.tema41Buttons}>
                <button
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    updateLinkValue(link.id, "name", e.target.value)
                  }
                  pla
                  ceholder={`Nome do Link ${link.id}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}
