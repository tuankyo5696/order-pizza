import React, { Component } from 'react'
import CartItem from './../../components/Cart/CartItem';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './_CartPage.scss';
class CartPage extends Component {
    render() {
        return (
            <div className="menu-cart">
                <section className="preview-cart">
                    <div className="container">
                        <div className="ModuleContent">
                            <div className="Side-cart">
                                <div className="Side-cart-title" />
                                <div className="Side-cart-list">
                                    <div className="Booking-details">
                                        <h4>Order Detail</h4>
                                        <div className="Booking-table">
                                            {this.props.cartItemCount
                                                ? this.props.cartItems.map(cart => (
                                                    <CartItem {...cart} key={cart._id} />
                                                ))
                                                : ""}
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-checkout-mobile">
                                    <div className="cart-icon">
                                        <span className="fas fa-shopping-bag" />
                                    </div>
                                    <div className="total-text">
                                        <p>Total:</p>
                                    </div>
                                    <div className="total">
                                        <strong>{this.props.totalPrice} ₫</strong>
                                    </div>
                                    <div className="button-checkout">
                                        <NavLink to={`/cart`} className="btn btn-checkout">
                                            Checkout
                                         </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.prices[0].price * curItem.quantity;
        }, 0)
    };
};
export default connect(mapStateToProps)(CartPage);