import { getWeather } from "@/api/weather";
import { WEATHER } from "@/constants/query";
import { WeatherResponse } from "@/types/weather";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetWeather = (city: string) =>
  useQuery<WeatherResponse, AxiosError>({
    queryKey: [WEATHER, city],
    queryFn: () => getWeather(city),
    select: (data) => data,
    retry: 1,
  });
