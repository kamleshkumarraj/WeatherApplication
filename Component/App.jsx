import Button from "./Button"
import SearchBar from "./SearchBar"
import Temperature from "./Temperature"
import HourForcaste from "./HourForcaste"
import DailyForecast from "./Dailyforecast"

export default function App() {
  return (
    <>
      <div id="main-page" className="w-[70rem] border-[2px] rounded-[1rem] bg-gradient-to-tl from-blue-900 to-blue-500 px-[6rem] py-[1rem] shadow-2xl" >
          <Button/>
          <SearchBar/>
          <Temperature/>
          <HourForcaste/>
          <DailyForecast/>
      </div>
    </>
  )
}
