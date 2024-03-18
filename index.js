const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT =  3000;


app.use(bodyParser.json());


app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;


    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];

    data.forEach((element) => {
      const isNumber = !isNaN(element);

      if (isNumber) {
        if (element % 2 === 0) {
          even_numbers.push(element.toString());
        } else {
          odd_numbers.push(element.toString());
        }
      } else if (typeof element === "string") {
        const alphaRegex = /^[a-zA-Z]+$/;
        if (alphaRegex.test(element)) {
          alphabets.push(element.toUpperCase());
        }
      }
    });

    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      even_numbers: even_numbers,
      odd_numbers: odd_numbers,
      alphabets: alphabets,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
