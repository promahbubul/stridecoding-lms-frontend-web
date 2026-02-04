"use client";
import { useParams } from "next/navigation";
// import Video from "next-video";


const Course = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div className="fixed inset-0 bg-white h-full w-full ">
      <div className="bg-neutral-800 py-3 px-5 text-neutral-200">
        <h1 className="text-xl text-center font-medium">
          WordPress Theme Development with Bootstrap
        </h1>
        <p className="text-neutral-400 font-light text-sm text-center mt-1">28% Completed(7/25)</p>
      </div>
      <div className="h-[calc(100%-76px)] border-2 border-red-500 flex flex-row">
          <div className="w-full h-full">
            <div className="">
            {/* <Video  /> */}
            </div>
          </div>
          <div className="w-5/12 bg-neutral-500 h-full"></div>
      </div>
    </div>
  );
};
export default Course;
