import Service from "../model/servicesSchema.js";
export const deleteService = async (req, res) => {
  console.log("Delete working");
  try {
    const { id } = req.query;
    console.log(id);

    if (!id) {
      return res.status(400).json({ message: "Service ID is required" });
    }

    const deleteResult = await Service.deleteOne({ _id: id });

    if (deleteResult.deletedCount > 0) {
      return res.status(200).json({ message: "Service deleted successfully" });
    } else {
      return res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    console.error("Error deleting service:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Update by admin

export const updateService = async (req, res) => {
  try {
    const { id } = req.params; // Extract the service ID from request parameters
    const { name } = req.body; // Extract the updated name from request body

    // Check if the name is provided in the request body
    if (!name) {
      return res
        .status(400)
        .json({ error: "Name is required for updating service" });
    }

    // Find the service by ID and update its name
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    // Check if the service was found and updated successfully
    if (updatedService) {
      return res.status(200).json({
        message: "Service updated successfully",
        service: updatedService,
      });
    } else {
      return res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    console.error("Error updating service:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
