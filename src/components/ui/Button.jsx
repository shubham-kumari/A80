import side from "../../assets/G.svg";
import arrow from "../../assets/arrow-right.svg";

export default function Button({ children, className, hidden, removeSide }) {
  return (
    <div className={`${hidden ? "hidden" : ""} md:flex items-center `}>
      <img src={side} alt="Side Image" className={`${removeSide}`} />
      <div className={`group flex items-center gap-2 bg-white px-6 py-3 relative overflow-hidden ${className}`}>
        <button className="uppercase font-bold text-base ">{children}</button>
        <img
          src={arrow}
          alt="Arrow"
          className="transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>

      <img src={side} alt="Side Image" className={`scale-x-[-1] ${removeSide}`} />
    </div>
  );
}
