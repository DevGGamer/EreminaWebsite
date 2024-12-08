import ProductCard from "../ProductCard/ProductCard";
import Form from "../Form/Form";
import './ShopSection.css'
import { useState } from "react";


function ShopSection({titles, items, withForm = false, canBuy = false})
{
    const [selectedIndex, SetSelectedIndex] = useState(0)
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleCardClick = (item) => {
        setSelectedProduct(item);
        setShowPopup(true);
      };
    
    const closePopup = () => {
        setShowPopup(false);
      };

    return (
        <div className="shop-container">
            <div className="shop-header">
                {titles.map((title, index) => (
                <div key={index} className={selectedIndex == index ? "shop-title shop-active" : "shop-title"} onClick={() => SetSelectedIndex(index)}>{title}</div>
                ))}
            </div>
            <div className="shop-slider">
                {items[selectedIndex].map((item, index) => (
                <ProductCard key={index} item={item} onCardClick={handleCardClick}/>
                ))}
            </div>
            {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-item">
                        <div className="image"><img src={selectedProduct?.image} alt={selectedProduct?.title} /></div>
                        <div className="price"><p>{selectedProduct?.price}</p></div>
                        <div className="description">
                            <h4>Описание</h4>
                            <ul>
                                {
                                selectedProduct?.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                                }
                            </ul>
                            </div>
                    </div>
                    {
                        withForm && (
                            <Form />
                        )
                    }

                    <div className="popup-buttons">
                        {
                            canBuy && (
                                <button onClick={closePopup}>Купить гайд</button>
                            )
                        }
                        <button onClick={closePopup}>Вернуться к товарам</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default ShopSection;