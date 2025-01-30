import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Paginas() {
  const router = useRouter();
  const { name } = router.query; // Obtém o parâmetro `name` da rota

  const fetchPage = async () => {
    
    try{
      const reponse = await axios.get(`/api/routes/${name}`)
      console.log('fetchPage', reponse.data)

    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    if(name){
      fetchPage()

    }
  }, [name])
 
  return (
    <div>
      <h1>Página: {name}</h1>
      <p>Essa página foi acessada com o parâmetro "name" como: {name}</p>
    </div>
  );
}
