"use client";

import Password from "@/components/Password";
import Profile from "@/components/Profile";
import Srttings from "@/components/Srttings";

const Dashboard = () => {
  return (
    <div>
      <Srttings />
      <Profile />
      <Password />
    </div>
  );
};

export default Dashboard;
