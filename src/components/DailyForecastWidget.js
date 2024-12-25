import { useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherContext from "../context/weather.context";

function DailyForecastWidget({ data }) {
  const { units } = useContext(WeatherContext);
  const {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date()),
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(day)),
  };

  weather_date.day =
    now_date.day === weather_date.day ? "Today" : weather_date.day;

  return (
    <div className="widget">
      <div class="day">{weather_date.day}</div>
      <div class="icon-temp">
        <div class="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div class="temperature">
          <div class="max">
            {Math.round(temperature_max)} {units.temperature}{" "}
          </div>
          <div class="min">
            {Math.round(temperature_min)} {units.temperature}{" "}
          </div>
        </div>
      </div>
      <div class="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
    </div>
  );
}

export default DailyForecastWidget;
