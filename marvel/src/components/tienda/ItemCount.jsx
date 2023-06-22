import Icon from '@mdi/react';
import { mdiPlusCircle, mdiMinusCircle } from '@mdi/js';
import { useEffect, useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }

    useEffect(()=>{
        setCount(parseInt(initial));
    }, [initial])



  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-center'>
            <button disabled={count <= 1} onClick={handleDecrement}  className="border border-2 border-secondary"><Icon path={mdiMinusCircle} size={1} color={"black"} /></button>
            <span className='border border-secondary col-2 text-center bg-light border-2'>{count}</span>
            <button disabled={count >= stock} onClick={handleIncrement} className="border border-2 border-secondary"><Icon path={mdiPlusCircle} size={1} color={"black"} /></button>
            </div>
            <div className='m-3'>
                <button disabled={stock <= 0} onClick={ () => onAdd(count) } className='btn btn-secondary'>Agregar al carrito</button>
            </div>
        
    </div>
  )
}
