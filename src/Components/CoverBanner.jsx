const CoverBanner = ({ title, subTitle, isTop = false }) => {
  return (
    <div
      className={`${
        isTop ? "pt-40" : ""
      } bg-home-about text-center py-24 bg-cover bg-center text-white`}
    >
      <div
        className={` ${
          isTop ? "w-[70%]" : "w-[60%]"
        } bg-[rgba(21,21,21,0.7)] py-20 px-20 mx-auto`}
      >
        <p
          className={`${
            isTop ? "text-6xl" : "text-3xl"
          } font-cinzel font-bold mb-2 uppercase`}
        >
          {title}
        </p>
        <p className="font-inter leading-6 text-sm">{subTitle}</p>
      </div>
    </div>
  );
};

export default CoverBanner;
