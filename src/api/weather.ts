import { WeatherResponse } from "@/types/weather";
import axios from "axios";

export const getWeather = async (city: string) => {
  const res = await axios.get<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0b12918a87a709f9e9b4bf71ff9f27af`
  );
  return res.data;
};
