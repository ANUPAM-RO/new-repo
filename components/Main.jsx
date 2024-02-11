"use client";

import useLoadData from "@/Hooks/useLoadData";
import Box from "./Box";

export default function Main() {
  const { catInfo  , isLoading} = useLoadData();
  console.log( catInfo)
  return (
      <main className="min-h-screen p-4">
      <p className="text-3xl text-center font-semibold text-teal-700 py-6 uppercase">Show random cat</p>
      {isLoading ? (<p className="flex justify-center items-center h-[80vh]">
        <img src="loading.png" alt="loading-image" className="w-24 h-24" />
      </p>) :
        <>
          {
            !!catInfo.length &&
            (<div className="flex justify-center">
              <Box data={catInfo[0]} />
            </div>)
      
          }
        </>
      }
            
    </main>
  );
}
