import Forecast from "./Forecat"
export default function HourForcaste() {
  return (
    <div className="mt-[3rem] text-[white]">
      <h1 className="text-[2.4rem] mb-[.5rem]">HOURLY FORECAST</h1>
      <hr />
      <div id="hour-fore" className="flex justify-between">
          <Forecast
            time = "01:00 PM"
            icon = ""
            temp = "19°"
          />
          <Forecast
            time = "01:00 PM"
            icon = {<i className="fa-solid fa-cloud"></i>}
            temp = "20°"
          />
          <Forecast
            time = "01:00 PM"
            icon = {<i className="fa-solid fa-cloud-meatball"></i>}
            temp = "21°"
          />
          <Forecast
            time = "01:00 PM"
            icon = {<i className="fa-solid fa-cloud-bolt"></i>}
            temp = "22°"
          />
          <Forecast
            time = "01:00 PM"
            icon = {<i className="fa-solid fa-cloud-meatball"></i>}
            temp = "23°"
          />

      </div>
    </div>
  )
}
