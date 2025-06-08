/** @format */

const Container = ({ children, backgroundColor }) => {
  const bgClass =
    {
      slate: "bg-slate-50",
    }[backgroundColor] || "bg-white";

  return (
    <section
      className={`flex flex-col items-center ${bgClass} px-6  md:px-16 lg:px-24 xl:px-32 pt-20 pb-30`}>
      {children}
    </section>
  );
};
export default Container;
