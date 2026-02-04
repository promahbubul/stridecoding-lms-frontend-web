const PageHeadingOne = ({ title }: { title: string }) => {
  return (
    <div>
      <h3 className="text-xl  font-semibold px-10 text-[#0D0C23] mb-7">
        {title}
      </h3>
    </div>
  );
};
export default PageHeadingOne;
