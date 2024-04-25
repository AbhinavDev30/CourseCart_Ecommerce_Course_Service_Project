import "./updateDel.css";
import { useState, useEffect } from "react";

function UpdateAndDelete() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [form, setForm] = useState({ name: "", image: undefined });
  const [imagePreview, setImagePreview] = useState(null);

  const getServicesData = async () => {
    try {
      const response = await fetch("http://localhost:5000/serviceData");
      if (response.ok) {
        const serviceData = await response.json();
        setServices(serviceData);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

  const deleteService = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/deleteService?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Service deleted successfully");
        getServicesData();
      } else {
        console.log("Unable to delete service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const updateService = async () => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      // Append service ID
      formData.append("id", selectedService._id);

      const response = await fetch(
        `http://localhost:5000/updateService/${selectedService._id}`,
        {
          method: "PUT",
          body: formData,
          // Remove headers for multipart form data
        }
      );

      if (response.ok) {
        console.log("Service updated successfully");
        setForm({ name: "", image: undefined });
        setSelectedService(null);
        getServicesData();
      } else {
        console.log("Unable to update service");
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <div
        className="row p-2 m-2 d-flex justify-content-center"
        style={{ marginLeft: "40%" }}
      >
        <div
          className="card text-center max-auto"
          style={{ backgroundColor: "transparent", color: "white" }}
        >
          <div
            className="card-header bg-info text-white"
            style={{ marginLeft: "25px" }}
          >
            <h1>Edit Services</h1>
          </div>

          <div className="card-body">
            <div className="form-group row" style={{ marginBottom: "20px" }}>
              <label className="col-lg-4" htmlFor="txtname">
                Service Name
              </label>
              <div className="col-lg-4">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  placeholder="Service Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-4">Service Image</label>
              <div className="col-lg-4">
                <input
                  type="file"
                  name="image"
                  required
                  className="form-control"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Service Image Preview"
                    height="150"
                    width="150"
                  />
                )}
                {form.image && <p>Selected Image: {form.image.name}</p>}
              </div>
            </div>
          </div>
          <br />
          <div
            className="card-footer text-muted"
            style={{ marginLeft: "65px  " }}
          >
            <button
              className="btn btn-info btnclass"
              onClick={updateService}
              style={{ marginLeft: "60px" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="border p-2 m-2 mt-4" style={{ marginTop: "80px" }}>
        <table className="table table-bordered table-hover table-active custom-border-color">
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((data) => (
              <tr key={data._id}>
                <td>
                  <img
                    // src={`http://localhost:5000/${data.image}`}
                    src="https://images.pexels.com/photos/4497761/pexels-photo-4497761.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={data.name}
                    height="150"
                    width="150"
                  />
                </td>
                <td>{data.name}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      setSelectedService(data);
                      setForm({ name: data.name, image: data.image });
                      setImagePreview(`http://localhost:5000/${data.image}`);
                    }}
                    style={{ marginLeft: "60px" }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteService(data._id);
                    }}
                    style={{ backgroundColor: "red", marginLeft: "70px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UpdateAndDelete;
