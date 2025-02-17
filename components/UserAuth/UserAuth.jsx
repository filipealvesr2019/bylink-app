"use client";
import { useAuth } from '@clerk/nextjs';
import LandinPage from '../LandinPage/LandinPage';
import Dashboard from '../../pages/Dashboard';
import CreateBanner from '../Banner/Banner';

export default function UserAuth() {
    const { isSignedIn } = useAuth();
  

  return (
    <div>
      {isSignedIn ? <CreateBanner /> : <LandinPage />}
    </div>
  );
}
