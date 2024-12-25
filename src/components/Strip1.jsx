import monkey from "../assets/monkey.svg";
import Button from "./ui/Button";
export default function Strip1() {
  return (
    <>
      <div className="py-6 md:px-32 px-4 bg-[linear-gradient(to_right,#FFBD6D,#FF8657)] ">
        <div className="flex justify-between items-center font-markot">
          <div className="flex items-center gap-3">
            <img src={monkey} alt="A monkey wearing sun-glasses " className="md:w-full w-[40px]"/>
            <p className="text-desktop/h3 font-markot font-medium md:text-4xl text-[28px]">A80</p>
          </div>
          <div className="md:flex hidden gap-8 text-base ">
            <p className="font-bold">Overview</p>
            <p className="">Specification</p>
          </div>
          <Button
            removeSide="hidden"
            className="relative rounded-full bg-[#FEFAD7] border border-[linear-gradient(to_right,#4F4F4F,#B3B3B3)]">
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
}
