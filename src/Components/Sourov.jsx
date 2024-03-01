import { Link } from "react-router-dom";

const Sourov = () => {
  return (
    <div className="min-h-screen pt-20">
      <p>Sourov Page</p>
      <div className="flex items-center justify-around">
        <Link to="/akib?name=green">
          <p className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer select-none duration-300 active:scale-90">
            Green
          </p>
        </Link>
        <Link to="/akib?name=blue">
          <p className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer select-none duration-300 active:scale-90">
            Blue
          </p>
        </Link>
        <Link to="/akib?name=yellow">
          <p className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer select-none duration-300 active:scale-90">
            Yellow
          </p>
        </Link>
        <Link to="/akib?name=purple">
          <p className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md cursor-pointer select-none duration-300 active:scale-90">
            Purple
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sourov;
