import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Add the 'spinner' class to make the SVG spin */}
      <img className="w-5 h-5 mr-4 spinner" src={loading} alt="Loading" />
      AI is generating ...
    </div>
  );
};

export default Generating;
