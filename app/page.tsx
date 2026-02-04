import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-neutral-900
     p-20  text-neutral-700  "
    >
      <div className="shadow-2xl rounded-2xl shadow-neutral-600 h-full w-full flex justify-center items-center flex-col ">
        <h1 className="text-5xl font-extrabold text-center">Stride Coding</h1>
        <div className="mt-10">
          <Link
            className="bg-neutral-500 py-3 px-5 rounded-md ml-5 text-base font-medium hover:scale-95 hover:bg-neutral-950 active:scale-100 transition-all ease-out"
            href={"/student"}
          >
            Student
          </Link>
          <Link
            className="bg-neutral-500 py-3 px-5 rounded-md ml-5 text-base font-medium hover:scale-95 hover:bg-neutral-950 active:scale-100 transition-all ease-out"
            href={"/admin"}
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
