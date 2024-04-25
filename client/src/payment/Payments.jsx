import "./paymentcss.css";

function Payments() {
  return (
    <>
      <div className="mainscreen">
        {/* <img
          src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"
          className="bgimg "
          alt=""
        /> */}
        <div className="cardcs">
          <div className="leftside">
            <img
              // src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
              src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="product"
              alt="Shoes"
            />
          </div>
          <div className="rightside">
            <form action="">
              <h1>CheckOut</h1>
              <h2>Payment Information</h2>
              <p>Cardholder Name</p>
              <input
                type="text"
                className="inputbox"
                name="name"
                required
                style={{ color: "white" }}
              />
              <p>Card Number</p>
              <input
                type="number"
                className="inputbox"
                name="card_number"
                id="card_number"
                required
                style={{ color: "white" }}
              />

              <p>Card Type</p>
              <select
                className="inputbox"
                name="card_type"
                id="card_type"
                required
                style={{ color: "white" }}
              >
                <option value="">--Select a Card Type--</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <div className="expcvv">
                <p className="expcvv_text">Expiry</p>
                <input
                  type="date"
                  className="inputbox"
                  name="exp_date"
                  id="exp_date"
                  required
                  style={{ color: "white" }}
                />

                <p className="expcvv_text2">CVV</p>
                <input
                  type="password"
                  className="inputbox"
                  name="cvv"
                  id="cvv"
                  required
                  style={{ color: "white" }}
                />
              </div>
              <p></p>
              <button type="submit" className="button">
                CheckOut
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;
