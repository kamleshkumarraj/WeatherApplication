export default function Card() {
  return (
    <div className="flex flex-col w-[300px] h-[400px] shadow-lg">
    <div className="image-section w-[100%] h-[60%] ">
        <img className="w-[100%] h-[100%] " src="https://rukminim2.flixcart.com/image/850/1000/kzegk280/plant-sapling/w/k/n/no-biennial-no-climbing-red-rose-live-plant-1-shiv-shakti-group-original-imagbfygvgaczbax.jpeg?q=90&crop=false" alt="Rose Image" />
    </div>
    <div id="text-section" className="flex flex-col justify-around h-[40%] text-purple-700 font-semibold text-[24px] px-[20px]" >
        <p>Name : Rose</p>
        <p>Price : $2000</p>
        <p>Brand : Yellora</p>
    </div>     
</div>
  )
}
