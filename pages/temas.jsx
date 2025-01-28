import Tema1 from "../components/temas/Tema1";

export default function Temas(){

    const createPageBio =  async (value) => {
        console.log('createPageBio', value)
    }
    return (
        <>
        <Tema1  handleCreateBio={createPageBio}/>
        </>
    )
}