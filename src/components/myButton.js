const MyButton = ({ title }) => {
  return (
    <button className="bg-[#006BFD] md:px-6 px-2 md:py-3 py-1 rounded-full text-white whitespace-pre lg:flex hidden">
      {title}
    </button>
  );
};

export default MyButton;
