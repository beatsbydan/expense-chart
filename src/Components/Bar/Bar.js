import { useState } from "react";
import Price from "../Price/Price";
import './Bar.css'
const Bar = ({day, amount}) => {
    const [shown, setShown] = useState(false)
    const showPrices = () => {
        setShown(true)
    }
    const hidePrices = () => {
        setShown(false)
    }
    return ( 
        <div className="Bar">
            {shown &&<Price price={amount}/>}
            <div className="bars">
                <div className={day} onMouseEnter={showPrices} onMouseLeave={hidePrices}></div>
                <small>{day}</small>
            </div>
        </div>
     );
}
 
export default Bar;