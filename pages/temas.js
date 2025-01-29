import axios from "axios";
import Tema1 from "../components/temas/Tema1";

export default function Temas(){
    const CriarPagina = async (settings) => {
        console.log("settings", settings);
        try {
          const response = await axios.post("http://localhost:3000/api/routes/temas", {
            name: settings.name ,
            linksColor: settings.linksColor ,
            backgroundColor: settings.backgroundColor ,
            buttonStyle: settings.buttonStyle ,
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
          });
        } catch (error) {
          console.error("Erro ao criar página:", error.response?.data || error.message);
        }
      
      };

    return (
        <>
        <Tema1  CriarPagina={CriarPagina}/>
        </>
    )
}