import React from "react";
import "./Basket.scss";
import Order from "../../components/Order/Order";

function Basket(){

    const basket= [
        {
        id: 0,
        title: "Tesla",
        price: "$40000",
        description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
        img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
        },
        {
          id: 1,
        title: "Tesla",
        price: "$40000",
        description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
        img: "https://3dnews.ru/assets/external/illustrations/2020/09/23/1021277/tesla1.jpg"
        }
    ]

    return(
        <div className="Basket">
            <h1 className="Basket__title">Кошик</h1>
            {basket.map(basket => <Order basket={basket}/>)}
        </div>
    );
}

export default Basket;