"use client";

import useLoadData from "@/Hooks/useLoadData";
import Box from "./Box";

export default function Main() {
  const { catInfo, isLoading , handleRandom } = useLoadData();
  return (
    <main className="min-h-screen px-4">
      <p className="text-3xl text-center font-semibold text-teal-700 py-6 uppercase">
        Show random cat
      </p>
      <div className="flex justify-end w-full">
        <button
          type="button"
          onClick={handleRandom}
          className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Genetare new
        </button>
      </div>

      {isLoading ? (
        <p className="flex justify-center items-center h-[80vh]">
          <img src="loading.png" alt="loading-image" className="w-24 h-24" />
        </p>
      ) : (
        <>
          {!!catInfo.length && (
            <div className="flex justify-center">
              <Box data={catInfo[0]} />
            </div>
          )}
        </>
      )}
    </main>
  );
}
