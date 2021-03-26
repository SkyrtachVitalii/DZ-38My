import "./Order.scss";

function ProductOrderStatus(props) {
    let { id, title, price, description, img } = props.data;
    let {isInCart} = props;
    let {chosen} = props;
    return (
        <div className="ProductOrderStatus">
            <div className="ProductOrderStatus__item">
                <p className="ProductOrderStatus__title">Назва товару: {title}</p>
                <p className="ProductOrderStatus__id">ID товару: {id}</p>
                <p className="ProductOrderStatus__price">Ціна товару: {price}</p>
                <p className="ProductOrderStatus__descr">Опис: {description}</p>
                <p className="ProductOrderStatus__status">Статус: {!isInCart ? "В кошику" : "Купити"}</p>
            </div>
            <div className="ProductOrderStatus__item">
                <img className="ProductOrderStatus__img" src={img} alt="" />
                <img className={chosen ? "ProductOrderStatus__chosen" : "ProductOrderStatus__none"} src="http://pngimg.com/uploads/heart/heart_PNG51341.png" alt=""/>
            </div>

        </div>
    )
}

export default ProductOrderStatus;