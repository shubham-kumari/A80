import screen from "../assets/screen.svg";
import ip54 from "../assets/IP54.svg";
import splash from "../assets/splash.svg";
import waterResistant from "../assets/waterResistant.svg";

export default function Feature() {
  return (
    <>
      <div className="flex flex-col px-32 items-center text-[#161410]">
        <div className="flex text-[#161410] pt-32">
          <p className="font-markot font-medium text-5xl">
            Built for Life’s Unexpected Moments
          </p>
          <p className="font-markot text-base text-grey/grey/3">
            A80's built to handle the challenges of an active lifestyle, whether
            you’re caught in a rain or out in a dusty environment.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={screen}
            alt="A phone that has screen on"
            className="relative"
          />
          <img
            src={ip54}
            alt="A phone that has screen on"
            className=""
          />
          <div className="flex items-center">
            <div className="flex gap-1">
              <img src={waterResistant} alt="water Resistant icon" />
              <p className="font-markot font-medium text-xl">Splash Resistant</p>
            </div>
            <img
              src={splash}
              alt="A water splash"
              className=" "
            />
          </div>
        </div>
      </div>
    </>
  );
}
