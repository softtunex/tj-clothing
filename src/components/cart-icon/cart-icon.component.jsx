import React from "react";
import './cart-icon.styles.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingCart} from '../../assets/shopping-cart-outline-svgrepo-com.svg'

const CartIcon = ({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingCart className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps) (CartIcon);