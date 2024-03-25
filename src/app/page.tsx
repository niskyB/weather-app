"use client";

import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import useDebounce from "@/hooks/useDebounce";
import { useGetWeather } from "@/hooks/weather";
import { useCallback, useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string>("Ho Chi Minh");
  const debounceValue = useDebounce(value, 500);
  const { data: weather, isFetching } = useGetWeather(debounceValue);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return (
    <main>
      <Header />
      <div className="max-w-screen-xl min-h-screen mx-auto px-4 lg:px-6 flex flex-col items-center py-10">
        <Input value={value} onChangeInput={onChangeInput} />
        {isFetching ? (
          <>
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        ) : (
          <>
            {weather && weather.weather?.length > 0 ? (
              <>
                <div className="max-h-screen w-full flex items-center justify-center">
                  <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
                    <div className="font-bold text-xl text-gray-600">
                      <span className="text-2xl ">{weather?.name}, </span>
                      <span className="uppercase text-2xl">
                        {weather?.sys.country}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date().toDateString()}
                    </div>
                    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                      <svg
                        className="w-32 h-32"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-6 text-gray-600">
                      <div className="font-medium text-6xl">
                        {Math.ceil(weather?.main.temp ? weather.main.temp : 0)}°
                      </div>
                      <div className="flex flex-col items-center ml-6">
                        <div>{weather?.weather[0].main}</div>
                        <div className="mt-1">
                          <span className="text-sm">
                            <i className="far fa-long-arrow-up"></i>
                          </span>
                          <span className="text-sm font-light text-gray-500">
                            {Math.ceil(
                              weather?.main.temp_max ? weather.main.temp_max : 0
                            )}
                            °C
                          </span>
                        </div>
                        <div>
                          <span className="text-sm">
                            <i className="far fa-long-arrow-down"></i>
                          </span>
                          <span className="text-sm font-light text-gray-500">
                            {Math.ceil(
                              weather?.main.temp_min ? weather.main.temp_min : 0
                            )}
                            °C
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mt-6 text-gray-500">
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Wind</div>
                        <div className="text-sm text-gray-500">
                          {weather?.wind.speed}m/s
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Humidity</div>
                        <div className="text-sm text-gray-500">
                          {weather?.main.humidity}%
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Visibility</div>
                        <div className="text-sm text-gray-500">
                          {weather?.visibility ? weather.visibility / 1000 : 0}
                          km
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <span className="text-red-500 mt-4">No result</span>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
