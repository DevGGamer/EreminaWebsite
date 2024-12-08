import './ProductCard.css'

function ProductCard( {item, onCardClick})
{
    return (
        <div className="item" onClick={() => onCardClick(item)}>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
            <div className="price">{item.price}</div>
        </div>
      );
}

export default ProductCard;