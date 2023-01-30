import './Chart.css'
import '../../App.css'
import logo from '../../images/logo.svg'
import { useEffect,useState } from 'react'
import Bar from '../Bar/Bar'
const Chart = () => {
    const [data, setData] = useState([])
    const getData = () => {    
        fetch('./data.json')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setData(data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="Chart">
            <div className="myBalance">
                <div className="left">
                    <small>My balance</small>
                    <p>$921.48</p>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="expenseChart">
                <h1>Spending - Last 7 days</h1>
                <div className="chart">
                    {data.map(item=>{
                        return(
                            <Bar key={item.id} day={item.day} amount={item.amount}/>
                        )
                    })}
                </div>
                <div className="total">
                    <div className="totalLeft">
                        <small>Total this month</small>
                        <p>$478.33</p>
                    </div>
                    <div className="totalRight">
                        <small className='percent'>+2.4%</small>
                        <small>from last month</small>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Chart;