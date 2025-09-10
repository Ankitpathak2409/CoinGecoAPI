import BannerImage from "../../assets/bannerImage1.webp";

function Banner() {
  return (
    <div className="w-full h-[25rem] object-cover relative">
      <img
        className="w-[80%] h-full mx-auto mt-10 rounded-sm"
        src={BannerImage}
      />

      <div className="absolute w-[20rem] left-0 right-0 mx-auto top-24">
         <div className="flex flex-col gap-4">
            <div className="text-5xl font-semibold text-center text-white">
                Crypto Tracker
            </div>

            <div className="font-semibold text-center text-white">
                Get all info regarding cryptocurrencies
            </div>
         </div>
      </div>
    </div>
  );
}

export default Banner;
