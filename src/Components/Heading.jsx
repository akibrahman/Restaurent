const Heading = ({ subHeading, heading, headingColor }) => {
  return (
    <div className="my-10">
      <p className="text-[#D99904] font-inter italic mb-2 text-center">
        {subHeading}
      </p>
      <p
        style={{ color: headingColor }}
        className="text-[#151515] font-inter text-3xl uppercase p-5 border-y-4 w-max mx-auto"
      >
        {heading}
      </p>
    </div>
  );
};

export default Heading;
