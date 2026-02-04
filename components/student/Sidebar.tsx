"use client";
import { sideMenuData } from "@/constant/student/index.constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="w-80 bg-white shadow-lg border-neutral-300 border rounded-xl pt-10 h-full">
      <div className="px-10">
        <Image
          src={
            "https://demo.creativeitem.com/academy/uploads/user_image/optimized/aa6c72f7b21f21498acda57322b2a052.jpg"
          }
          alt="avatar"
          height={80}
          width={80}
          className="rounded-full mx-auto"
        />
        <h2 className="text-[#0D0C23] text-lg font-semibold text-center mt-5">
          Signe Thompson
        </h2>
        <p className="text-[#6E798A] text-xs font-medium  text-center mt-1">
          student@example.com
        </p>
      </div>
      <div className="mt-8 px-5 pb-5 flex flex-col gap-1 h-[calc(100%-180px)]  overflow-auto">
        {sideMenuData?.map(({ Icon, id, link, title }) => (
          <Link
            className={`px-4 py-3 rounded-lg text-[14px] ease-in-out transition-all ${
              pathname === link
                ? "bg-[#754FFE] text-white"
                : "bg-white text-[#0D0C23]"
            } hover:bg-[#754FFE] hover:text-white`}
            key={id}
            href={link}
          >
            <div className="flex gap-2  flex-row items-center ">
              <Icon className="font-bold text-lg" />
              <span className="font-semibold">{title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
