import StarFour from "../../assets/StarFour.svg";
import Button from "../ui/Button";
import hritik from "../../assets/hr.svg";
import background from "../../assets/bg.svg";
import bgVdo from "../../assets/bg.mp4";

export default function Hero() {
  return (
    <main
      className=" md:pl-32 px-5 md:pt-20 pt-8 flex flex-col justify-between items-center md:flex-row bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="inline-flex flex-col md:gap-16 gap-4">
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
          <h1 className=" md:text-desktop/large/h text-mobile/h1 font-markot text-white md:py-6 py-4">
            A80
          </h1>
          <p className="md:text-base text-sm text-white uppercase font-markot font-medium">
            6.7" punch hole Display with 120Hz refresh rate <br className="md:flex hidden"/>| 50MP camera
            | Up to 128GB + 8GB* Storage
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="md:text-xl text-sm text-white font-markot">
            Available at  <span className="font-bold text-xl">₹7,999/-</span>
          </p>
          <Button className="uppercase font-markot text-desktop/button font-extrabold " hidden>
            Buy Now
          </Button>
        </div>
      </div>
      <div className="relative">
        <video
          className="absolute bottom-0 md:right-8 w-full h-full object-cover mix-blend-lighten "
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
