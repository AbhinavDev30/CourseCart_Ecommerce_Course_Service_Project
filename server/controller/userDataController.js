import UserData from "../model/userDataSchema.js";

export const addUserData = async (req, res) => {
  console.log(req.body);
  try {
    const {
      username,
      email,
      phone,
      streetaddress,
      city,
      state,
      postalcode,
      userId,
    } = req.body;

    // Check if required fields are provided
    if (!streetaddress || !city || !postalcode || !state) {
      return res
        .status(400)
        .json({ error: "Street address, city, and postal code are required" });
    }

    // Create a new user directly using create()
    const userDataSaved = await UserData.create({
      username,
      email,
      phone,
      streetaddress,
      city,
      state,
      postalcode,
      userId,
    });

    res
      .status(201)
      .json({ message: "User data added successfully", userDataSaved });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getuserDataforcheckout = async (req, res) => {
  try {
    console.log("Context data is getting data of user", req.query);
    console.log("User ID:", req.query.id); // Accessing the 'id' parameter

    const userId = req.query.id; // Retrieve user ID from the query parameters
    // Fetch user data from the database based on the user ID
    const userData = await UserData.findOne({ userId });
    console.log(userData);
    // if (!userData) {
    //   // If user data not found, send a 404 response
    //   return res.status(404).json({ error: "User data not found" });
    // }
    // // Send the fetched user data as the response
    // res.json(userData);
    if (userData) {
      res.status(201).json(userData);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

////User Detail for summary.
