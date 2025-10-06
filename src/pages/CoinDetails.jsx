import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from '../Services/fetchCoinDetails';
import { useEffect } from "react";
import currencyStore from '../zustand/store';
import PageLoader from '../components/PageLoader/PageLoader';
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";

function CoinDetails() {

  const  {coinId} = useParams();

  const {currency} = currencyStore();

  const {isError, isLoading, data: coin} = useQuery({
    queryKey: ['coin', coinId],
    queryFn: () => fetchCoinDetails(coinId),

    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(()=>{
    console.log(coin);
    
  }, [coin])

  if(isError){
    <div>Error: Something went wrong</div>
  }

  if(isLoading){
    return <PageLoader />
  }
    return(
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
            <img src={coin?.image?.large} alt={coin?.name} className="mb-5 h-52" loading="lazy" />
            <h1 className="mb-5 text-4xl font-bold"> {coin?.name} </h1>
            <p className="w-full px-6 py-4 text-justify" >{coin?.description?.en}</p>

            <div className="flex flex-col w-full md:flex-row md:justify-around">
              <div className="flex items-center mb-4 md:mb-0">
                <h2 className="text-xl font-bold ">
                  Rank
                </h2>
                <span className="ml-2 text-xl font-bold">{coin?.market_cap_rank}</span>
              </div>

              <div className="flex items-center mb-4 md:mb-0">
                <h2 className="text-xl font-bold text-yellow-500"> Current Price</h2>
                <span className="ml-3 text-xl font-bold">{coin?.market_data.current_price[currency]}</span>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-2/3">
            <CoinInfoContainer coinId={coinId} />
          </div>
          
        </div>
    );
}

export default CoinDetails;