import { useState } from "react";
import "./addservices.css";
function AddServices() {
  const [services, setServices] = useState({
    name: "",
    description: "",
    skills: "",
    provider: "",
    image: undefined,
    price: "",
    detailDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setServices({
      ...services,
      [e.target.name]: e.target.value,
    });
  };

  function postServices() {
    const formData = new FormData();
    formData.append("name", services.name);
    formData.append("description", services.description);
    formData.append("skills", services.skills);
    formData.append("provider", services.provider);
    formData.append("image", services.image, services.image.name);
    formData.append("price", services.price);
    formData.append("detailDescription", services.detailDescription);

    fetch("http://localhost:5000/serviceDataImg", {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          alert("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        alert("Data Submission Success", res);
      });
  }

  //

  return (
    <>
      <section className="section-contact">
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help"
              style={{ height: "100%" }}
            />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <h1>Add All The Courses Here</h1>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={services.name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="description"
                  name="description"
                  id="email"
                  autoComplete="off"
                  value={services.description}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Skills</label>
                <input
                  type="skills"
                  name="skills"
                  id="skills"
                  autoComplete="off"
                  value={services.skills}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="provider">Provider</label>
                <input
                  type="provider"
                  name="provider"
                  id="provider"
                  autoComplete="off"
                  value={services.provider}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => {
                    const file = e.target.files[0]; // Get the first file from the FileList
                    setServices({ ...services, image: file });
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="off"
                  value={services.price}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="detailDescription">Detailed Description</label>
                <textarea
                  name="detailDescription"
                  type="text"
                  id="detailDescription"
                  autoComplete="off"
                  value={services.detailDescription}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={() => {
                    postServices();
                  }}
                >
                  submit
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default AddServices;
