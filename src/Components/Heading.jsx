const Heading = ({ subHeading, heading }) => {
  return (
    <div>
      <p className="text-[#D99904] font-inter italic mb-2 text-center">
        {subHeading}
      </p>
      <p className="text-[#151515] font-inter text-3xl uppercase p-5 border-y-4 w-max mx-auto">
        {heading}
      </p>
    </div>
  );
};

export default Heading;
