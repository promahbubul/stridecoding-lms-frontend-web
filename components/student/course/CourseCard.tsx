import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { BsFillClockFill } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="w-full  flex flex-row items-start gap-5">
      <div className="w-max">
        <Image
          src={
            "https://demo.creativeitem.com/academy/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_121741669230.jpg"
          }
          width={300}
          height={70}
          alt="course-image"
          className="h-44 rounded-md w-80"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h4 className="text-base font-semibold text-[#68768b]">
            WordPress Theme Development with Bootstrap
          </h4>
          <FiMoreVertical className="text-[#6c757d] text-lg" />
        </div>
        <div className="mt-2 flex flex-row gap-10">
          <div className="flex flex-row items-center gap-0.5">
            <FaPlayCircle className="text-[#68768b] text-xs" />
            <p className="text-[#68768b]  text-xs font-normal">Lectures</p>
          </div>
          <div className="flex flex-row items-center gap-0.5">
            <CiCircleQuestion className="text-[#68768b] text-base" />
            <p className="text-[#68768b]  text-xs font-normal"> Quizzes 3</p>
          </div>
          <div className="flex flex-row items-center gap-0.5">
            <BsFillClockFill className="text-[#68768b] text-xs" />
            <p className="text-[#68768b]  text-xs font-normal">
              {" "}
              24:11:44 Hours
            </p>
          </div>
        </div>
        <div className="bg-[#d1e7dd] text-[#0a3622] py-4 text-center rounded-md border-[#0a3622] border font-medium text-base mt-5">
          <p className="">Upcoming live class 08:00 PM, 13 Dec 2022</p>
        </div>
        <div className="flex items-center gap-6 p-4 bg-white rounded-lg justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://demo.creativeitem.com/academy/uploads/user_image/optimized/aa6c72f7b21f21498acda57322b2a052.jpg"
              alt="John Doe"
              width={20}
              height={20}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-900">John Doe</span>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
              <p className="text-sm text-sky-700">
                Expiration on -{" "}
                <span className="font-medium">10 Feb 2026, 18:01 PM</span>
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-violet-600 text-white px-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-500  py-2 rounded-md text-sm font-medium hover:bg-violet-700 ">
            <FaRegPlayCircle className="text-white text-lg" />
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
