import StarFour from "../../assets/StarFour.svg";
import Button from "../ui/Button";
import hritik from "../../assets/hr.svg";
import background from "../../assets/bg.svg";
import bgVdo from "../../assets/bg.mp4";

export default function Hero() {
  return (
    <main
      className="pl-24 pt-20 justify-between flex items-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="inline-flex flex-col gap-16">
        <div className="">
          <div className="inline-flex gap-1 border-2 rounded-3xl px-2 py-1 border-text">
            <p className="text-text font-bricolage text-xs font-extrabold">
              AWESOME SERIES
            </p>
            <img
              src={StarFour}
              alt="Four-pointed star representing the series rating"
            />
          </div>
          <h1 className="text-desktop/large/h font-markot text-white py-6">
            A80
          </h1>
          <p className="text-base text-white uppercase font-markot font-medium">
            6.7" punch hole Display with 120Hz refresh rate <br />| 50MP camera
            | Up to 128GB + 8GB* Storage
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-white font-markot">
            Available at ₹<span className="font-bold">7,999/-</span>
          </p>
          <Button className="text-desktop/button font-extrabold">
            Buy Now
          </Button>
        </div>
      </div>
      <div className="relative">
        <video
          className="absolute bottom-0 right-8 w-full h-full object-cover mix-blend-lighten "
          src={bgVdo}
          autoPlay
          loop
          muted
        />
        <img className=" relative z-10" src={hritik} alt="Hritik Raushan" />
      </div>
    </main>
  );
}
