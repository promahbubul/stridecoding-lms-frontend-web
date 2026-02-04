import CourseCard from "@/components/student/course/CourseCard";
import PageHeadingOne from "@/components/ui/page-heading/PageHeadingOne";

const Courses = () => {
  return (
    <div className="h-full py-10">
      <PageHeadingOne title="Courses" />
      <div className="flex flex-col gap-10   h-[calc(100%-56px)] px-10 overflow-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <CourseCard key={i} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
