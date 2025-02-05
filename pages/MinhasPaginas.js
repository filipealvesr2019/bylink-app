import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { useUser  } from "@clerk/nextjs"; 
import Login from "@/app/Login"; 
import MobileMenu from "../components/MobileMenu/MobileMenu"; 
import Link from "next/link";
export default function Settings() { 
  const { user } = useUser (); 

  const [data, setData] = useState([]); 
  const getTemas = async () => { 
    try { 
      const response = await axios.get("http://localhost:3000/api/routes/temas"); 
      setData(response.data.links); 
    } catch (error) { 
      console.log(error); 
    } 
  }; 

  useEffect(() => { 
    getTemas(); 
  }, []); 

  const formatLinkName = (name) => { 
    return name 
      .toLowerCase() // Torna tudo minúsculo 
      .replace(/\s+/g, '_'); // Substitui espaços por underscores 
  }; 

  const capas = [
    
  ]

  return ( 
    <div style={{ backgroundColor: "#fff", height: "100vh" }}> 
      <MobileMenu /> 
      <Login /> 

      {data.map((link) => { 
        const formattedName = formatLinkName(link.name); // Aplica a formatação 

        return ( 
          <div key={formattedName} style={{ position: "relative" }}> 
            <Link href={`http://localhost:3000/${formattedName}`} style={{
              
            }}>
              <span>
              {link.name}

              </span>
            <img src="https://i.imgur.com/mVgbAwI.png" style={{
              width: "25vw",
              marginTop:"5rem",
              border: '1px solid red'
            }}/>
              
            </Link>
        
          </div> 
        ); 
      })} 
    </div> 
  ); 
}