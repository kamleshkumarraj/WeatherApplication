
function SearchBar() {
  return (
    <div className="mt-[3rem] flex justify-around">
        <div id="serch" className="flex gap-[2rem] items-center">
            <input className="w-[30rem] h-[4.5rem] focus:outline-none border-none shadow-lg placeholder:text-[2.4rem] text-[2rem] px-[1rem] rounded-[.75rem]" type="text" placeholder="Search Country...."/>
            <p><i className="fa-solid fa-magnifying-glass text-[2rem] text-[white]"></i></p>
            <p><i className="fa-solid fa-location-dot text-[2rem] text-[white]"></i></p>
        </div>
        <div id="conv" className="flex text-[2rem] items-center text-[white] gap-[.8rem]">
            <button>°C</button>
            <p>|</p>
            <button>°F</button>
        </div>
    </div>
  )
}

export default SearchBar
