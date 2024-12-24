import side from "../../assets/G.svg";
import arrow from '../../assets/arrow-right.svg';

export default function Button({ children }) {
  return (
    <div className="flex items-center ">
      <img src={side} alt="Side Image"  />
      <div className="flex items-center gap-2 bg-white px-4 py-3">
        <button className="uppercase font-semibold">{children}</button>
        <img src={arrow} alt="Arrow" className="w-4 h-4" />
      </div>
      <img src={side} alt="Side Image" className="scale-x-[-1]" />
    </div>
  );
}
