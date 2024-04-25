import "./servicecss.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Service() {
  const [services, setServices] = useState([]);
  console.log("serviCes", services);
  const navigate = useNavigate();

  const getServicesData = async () => {
    try {
      const response = await fetch("http://localhost:5000/serviceData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const serviceData = await response.json();
        console.log("hello");
        console.log("Response", serviceData);
        console.log("Response", serviceData._id);
        // console.log("Image Response", serviceData[0].image);

        setServices(serviceData);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.error("Services error:", error);
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

  return (
    <>
      <section className="section-services">
        {/* <div className="container">
          <h1 className="main-heading">Services</h1>
        </div> */}
        <div className="container">
          <div className="grid grid-four-cols">
            {services.map((curElem) => (
              <div
                className="card"
                key={curElem._id}
                style={{ maxWidth: "300px", marginBottom: "1px" }}
              >
                <div className="card-img">
                  <img
                    src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=600"
                    // src={`http://localhost:5000/${curElem.image}`}
                    alt="image"
                    className="imgCss"
                    style={{
                      height: "250px",
                      marginTop: "30px",
                      marginBottom: "-50px",
                      borderRadius: "3%",
                      width: "80%",
                    }}
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>
                      Provider:
                      <p>{curElem.provider}</p>
                    </p>
                    <p>Price:${curElem.price}</p>
                  </div>
                  <h2>{curElem.name}</h2>
                  <p>{curElem.description}</p>
                </div>
                <div className="action">
                  {/* <button
                    type="button"
                    style={{
                      marginLeft: "90px",
                      marginBottom: "50px",
                      width: "100px",
                    }}
                  >
                    Show Details
                  </button> */}
                  <button
                    className="butonCss"
                    onClick={() => {
                      navigate(
                        "/serveDetail" +
                          "?id=" +
                          curElem._id +
                          "&name=" +
                          curElem.name
                      );
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
