import axios from "axios";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import Login from "@/app/Login";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Link from "next/link";

export default function Settings() {
  const { user } = useUser();

  const [data, setData] = useState([]);
  const getTemas = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/routes/temas`
      );
      setData(response.data.links);
      console.log("setName", name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTemas();
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        height: "100vh",
      }}
    >
      <MobileMenu />
      <Login />

      {data.map((link) => (
        <div>
          <Link href={`http://localhost:3000/${link.name}`}>
          {link.name}
          
          </Link>
        </div>
      ))}
    </div>
  );
}
