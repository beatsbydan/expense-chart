import './Price.css'
const Price = ({price}) => {
    return (
        <div className="Price">
            <small>${price}</small>
        </div>
      );
}
 
export default Price;