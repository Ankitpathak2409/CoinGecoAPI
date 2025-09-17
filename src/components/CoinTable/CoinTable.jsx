// import { useEffect } from "react";
import {  useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from '../../zustand/store';
import { useNavigate } from "react-router-dom";

function CoinTable() {

   // useEffect(()=>{
   //    fetchCoinData(2, 'inr');
   //    },[]);

//   const {currency} = useContext(CurrencyContext);
const {currency} = currencyStore();

const navigate = useNavigate();
  

   const [page, setPage] = useState(1);
   const  { data, isLoading, isError, error} = useQuery({
      queryKey: ["coins", page, currency],
      queryFn: () => fetchCoinData(page, currency), 
      // retry: 2,
      // retryDelay: 1000,
      gcTime: 1000 * 60 * 2, 
      staleTime: 1000 * 60 * 2, 
      // It will not make an API call for the old data to update for 2 minutes.
   });

   //  useEffect(()=>{
   //    console.log(data);
      
   // }, [data]);  

   // if(isLoading){
   //    return <div>Loading...</div>
   // }
   
   function handleCoinRedirect(id) {
       navigate(`/details/${id}`)
   }

   if(isError){
      <div>Error: {error.message}</div>
   }
   

  return (

     <div className="w-[80vw] flex justify-center items-center mx-auto flex-col my-5 gap-5">
     {/* Coin Table <button onClick={() => setPage(page + 1)} >click</button> {page} */}
       <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400 border">
         <div className="basis-[35%]">
            Coin
         </div>
         <div className="basis-[25%]">
            Price
         </div>
         <div className="basis-[20%]">
            24h Change
         </div>
         <div className="basis-[20%]">
            Market Cap
         </div>
       </div>

       <div className="flex flex-col w-[80vw] mx-auto">
         {isLoading && <div>Loading...</div>}
           {data?.map((coin) => {
               return(
                  <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-black bg-transparent cursor-pointer">
                     <div className="flex items-center justify-start gap-3 basis-[35%]">
                        <div className="w-[5rem] h-[5rem]">
                           <img src={coin.image} alt={coin.name} />
                        </div>

                        <div className="flex flex-col">
                           <div className="text-3xl">{coin.name}</div>
                           <div className="text-xl">{coin.symbol}</div>

                        </div>
                     </div>

                     <div className="basis-[25%] text-2xl">
                          {coin.high_24h}
                     </div>

                     <div className="basis-[20%]">
                        {coin.price_change_24h}
                     </div>

                     <div className="basis-[20%]">
                        {coin.market_cap}
                     </div>
                  </div>
               );
           })}
       </div>

       <div className="flex items-center justify-center gap-4">
         <button 
           disabled={page == 1}
           onClick={() => setPage(page - 1)} 
           className="text-xl text-white btn btn-info btn-wide"
         >
            Prev
         </button>
         <button 
           onClick={() => setPage(page + 1)}
           className="text-xl text-white btn btn-success btn-wide"
         >
            Next
         </button>
       </div>
    </div>
  );
}

export default CoinTable;
