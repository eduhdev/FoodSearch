import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dvI8oE50x-fvc1vCCIwKMK-5b_NPwt7QrTTW5uPcWthCRXzPHoYDsl5w0iD5WLGLJS_KYdBWUCQjSDBqTZ-1-hQGb4OdmA0ybJNCJuiA9XI02kkw65aCwlLo3n3cXXYx"
  }
});
