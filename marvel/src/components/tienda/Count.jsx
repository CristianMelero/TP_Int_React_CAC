import { useState } from "react"
import Icon from '@mdi/react';
import { mdiPlusCircle, mdiMinusCircle } from '@mdi/js';


export const Count = ()=>{

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        if (count >= 1 && count < 10) { // es un stock mentiroso por ahora dps sera variable
            setCount(count +1)};
      };
    
      const handleDecrement = () => {
        if (count > 1){
            setCount(count -1)
        };
      };


    return (
        <>
            {/* <h4 className='text-center mb-2 lead' >Unidades</h4> */}

            <div className='d-flex justify-content-center ' >
                <button onClick={handleDecrement}><Icon path={mdiMinusCircle} size={1} color={"grey"} /></button>
                <div className='border border-secondary col-2 text-center' > {count} </div>
                <button onClick={handleIncrement}><Icon path={mdiPlusCircle} size={1} color={"grey"} /></button>
            </div>

        </>
    );
    
}