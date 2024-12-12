import UserAuth from "../../components/UserAuth/UserAuth";
import Login from "./Login";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Login />
      <UserAuth />
    </div>
  );
}
