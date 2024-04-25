//es schema mai hamne signupSchema pass ke hai hai routing ke time mai
export const validate = (schema) => async (req, res, next) => {
  try {
    //So ham data jo client side sai aa raha hai usko request.body ke through get kiya and agar error nahi hua tho ham use request,body mai pass kardiya fir voh data controller kai pass challa jayega.
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    //but agar vaha koi error aya tho ham error.message sai jo error zode schema sai ayega usko ham message mai store karke return kar denge client ko.
    const message = err.errors[0].message;
    const status = 422;
    // console.log(message);
    const error = {
      status,
      message,
    };
    // res.status(400).json({ message: message });
    next(error);
  }
};
