"use client";
import { useAuth } from '@clerk/nextjs';
import LandinPage from '../LandinPage/LandinPage';
import Dashboard from '../../pages/Dashboard';

export default function UserAuth() {
    const { isSignedIn } = useAuth();
  

  return (
    <div>
      {isSignedIn ? <Dashboard /> : <LandinPage />}
    </div>
  );
}
