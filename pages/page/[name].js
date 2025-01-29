import { useRouter } from "next/router";

export default function Paginas() {
  const router = useRouter();
  const { name } = router.query; // Obtém o parâmetro `name` da rota

  return (
    <div>
      <h1>Página: {name}</h1>
      <p>Essa página foi acessada com o parâmetro "name" como: {name}</p>
    </div>
  );
}
