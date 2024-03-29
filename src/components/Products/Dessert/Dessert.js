import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../store/actions/index';
class Dessert extends Component{
  addCart =  e => {
    e.preventDefault();
    this.props.onAddCart({...this.props.dessert})
  }
  render() {
    return(
      <div className="col-6 col-md-4 col-lg-6 col-xl-4">
        <a className="item btn-buy" href="/" onClick = {this.addCart}>
          <figure>
            <div className="box-img">
              <img src={this.props.dessert.picture} alt={this.props.dessert.name} />
              <figcaption>
                <h4>{this.props.dessert.name}</h4>
                <p className="price"> {this.props.dessert.prices[0].price}</p>
                <div className="btn-addcart">
                  Add To Cart
                  <span className="lnr lnr-arrow-right" />
                </div>
              </figcaption>
            </div>
          </figure>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCart: (product) => dispatch(actions.addToCart(product))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dessert);
