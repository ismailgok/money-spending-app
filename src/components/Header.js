import React from "react";

const Header = ({ money,total,resetBasket }) => {
    return (
        <div>
            {<div>Harcayacak ${money - total} paranız var</div>}
            <button onClick={resetBasket}>Sepeti sıfırla</button>
        </div>
    );
};

export default Header;
