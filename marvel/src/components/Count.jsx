import { useState } from "react"



export const Count = (props)=>{

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count >= 1 && count < 30) { //30 es un stock mentiroso por ahora dps sera variable
            setCount(count +1)};
      };
    
      const handleDecrement = () => {
        if (count > 1){
            setCount(count -1)
        };
      };


    return (
        <>
            <h3 className='text-center mb-2' >Unidades</h3>

            <div className='d-flex justify-content-center ' >
                <button onClick={handleDecrement}>➖</button>
                <div className='border border-secondary col-2 text-center' > {count} </div>
                <button onClick={handleIncrement}>➕</button>
            </div>

        </>
    );
    
}