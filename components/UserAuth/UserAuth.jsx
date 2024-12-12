"use client";
import { useAuth } from '@clerk/nextjs';
import Metas from '../Metas/Metas';
import LandinPage from '../LandinPage/LandinPage';

export default function UserAuth() {
    const { isSignedIn } = useAuth();
  

  return (
    <div>
      {isSignedIn ? <Metas /> : <LandinPage />}
    </div>
  );
}
