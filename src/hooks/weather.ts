import { getWeather } from "@/api/weather";
import { WEATHER } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";

export const useGetWeather = (city: string) =>
  useQuery({
    queryKey: [WEATHER, city],
    queryFn: () => getWeather(city),
    select: (data) => data,
  });
