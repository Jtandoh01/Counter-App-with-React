import { useState } from "react"



const Mostrador = ({countLog}) => {
    //count handler functions
    const [count , setCount] = useState(0)
    const Increment = () =>{
        setCount(count + countLog)
    }
    const Decrement = () =>{
        setCount(count - countLog)
    }
    const Reset = () =>{
        setCount(0)
    }

   
    
  return (
    <div className=" flex flex-col items-center">
        <p className="text-6xl font-bold mb-4 mr-7">{count}</p>
        <div className="flex space-x-4 " >
            
        <button onClick={Increment} className=" h-[3rem] w-[4rem] rounded-lg bg-blue-600  hover:bg-green-600 text-white font-bold text-[2rem]" >
            +
        </button>
        <button onClick={Decrement} className="h-[3rem] w-[4rem] rounded-lg bg-red-500  hover:bg-zinc-700 text-white font-bold text-[2rem]" >
            -
        </button>
        <button onClick={Reset} className="h-[3rem] w-[6rem] rounded-lg bg-yellow-500  hover:bg-emerald-600 text-white font-bold text-[2rem]" >
            Reset
        </button>

        </div>
       
    </div>
  )
}

export default Mostrador