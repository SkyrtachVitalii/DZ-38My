import React from "react";
import "./Order.scss";
import ProductOrderStatus from "./ProductOrderStatus";

let textButtonStatus = true

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInCart: true,
            textByBtn: "Купити",
            chosen: false,
            textChosenBtn: "В обране"
        }
        
    }

    changeStatus(){
        this.setState({isInCart: !this.state.isInCart});
        this.setState({textByBtn: !this.state.isInCart ? "Купити" : "Видалити з кошика"})
    }

    getToСhosen(){
        this.setState({chosen: !this.state.chosen});
        this.setState({textChosenBtn: !this.state.chosen ? "З обраного" : "В обране"})
    }



    render(){
        let {basket} = this.props;
        console.log(basket);

        return(
            <div className="Order">
                <ProductOrderStatus data={basket} isInCart={this.state.isInCart} chosen={this.state.chosen}/>
                <div className="ProductOrderFunc">
                    <button type="button" className="ProductOrderFunc__btn" onClick={() => this.getToСhosen()}>{this.state.textChosenBtn}</button>
                    <button type="button" className="ProductOrderFunc__btn" onClick={() => this.changeStatus()}>{this.state.textByBtn}</button>
                </div>
            </div>
        )
    }
}



export default Order;