import { Sidebar } from "@/components/student";
import React from "react";

const LayoutDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full p-5 gap-5 bg-white flex flex-row">
      <Sidebar />
      <div className="w-full p-5 text-black bg-white shadow-md shadow-slate-300  ">
        {children}
      </div>
    </div>
  );
};
export default LayoutDashboardLayout;
