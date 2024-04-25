function Cart() {
  return (
    <>
      <div className="continue-shopping">
        <img
          src="/client/src/images/images__2_-removebg-preview.png"
          alt="arrow"
          className="arrow-icon"
        />
        <h3>continue shopping</h3>
      </div>

      <div className="cart-icon">
        <img
          src="/client/src/images/images__2_-removebg-preview.png"
          alt="cart"
        />
        <p>Total Items</p>
      </div>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">Total Items </span> items
          in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="items-info">
              <div className="product-img">
                <img
                  src="/client/src/images/images__2_-removebg-preview.png"
                  alt="image"
                />
              </div>
              <div className="title">
                <h2>Samsung s22</h2>
                <p>Black Color</p>
              </div>
              <div className="add-minus-quantity">
                <p className="minus">M</p>
                <input type="text" placeholder="34" />
                <p className="add">P</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
