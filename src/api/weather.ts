import { WeatherResponse } from "@/types/weather";
import axios from "axios";

export const getWeather = async (city: string) => {
  const res = await axios.get<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
  );
  return res.data;
};
