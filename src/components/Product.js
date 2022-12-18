import React from "react";

const Product = ({ product, total, money, basket, setBasket }) => {
    const basketItem = basket.find((item) => item.id === product.id);
    const addBasket = () => {
        const checkBasket = basket.find((item) => item.id === product.id);
        // ürün daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([
                ...basket.filter((item) => item.id !== product.id),
                checkBasket,
            ]);
        } else {
            setBasket((basket) => [
                ...basket,
                {
                    id: product.id,
                    amount: 1,
                },
            ]);
        }
    };

    const removeBasket = () => {
        const currentBasket = basket.find((item) => item.id === product.id);
        const basketWithoutCurrent = basket.filter(
            (item) => item.id !== product.id
        );
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent]);
        } else {
            setBasket([...basketWithoutCurrent, currentBasket]);
        }
    };

    return (
        <div className="product">
            <h4>{product.title}</h4>
            <h3>${product.price}</h3>
            <button disabled={!basketItem} onClick={removeBasket}>
                Sat
            </button>
            <span>{(basketItem && basketItem.amount) || 0}</span>
            <button
                disabled={total + product.price > money}
                onClick={addBasket}
            >
                Satın Al
            </button>
        </div>
    );
};

export default Product;
