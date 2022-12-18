import { useState, useEffect } from "react";
import Header from "./components/Header";
import products from "./components/products.json";
import Product from "./components/Product";

const App = () => {
    const [money, setMoney] = useState(25000);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = basket.reduce((acc, item) => {
            return (
                acc +
                item.amount *
                    products.find((product) => product.id === item.id).price
            );
        }, 0);
        setTotal(total);
    }, [basket]);

    const resetBasket = () => {
        setBasket([]);
        setTotal(0);
    };

    return (
        <div className="App">
            <Header money={money} total={total} resetBasket={resetBasket} />

            {products.map((product, key) => (
                <Product
                    key={key}
                    total={total}
                    money={money}
                    basket={basket}
                    setBasket={setBasket}
                    product={product}
                />
            ))}
        </div>
    );
};

export default App;
