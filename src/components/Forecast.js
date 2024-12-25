import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import "../styles/components/Forecast.scss";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forecast({ title, type, data }) {
  return (
    <div className="Forecast">
      <div class="forecast-conatiner">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((singledata) => (
            <div key={singledata.date || singledata.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singledata} />
              ) : (
                <DailyForecastWidget data={singledata} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
}

export default Forecast;
