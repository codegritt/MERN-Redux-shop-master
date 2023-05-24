// sk_test_51NAaeJSB5pYQ7COX67Udh2sdfbr0U2vBTRs18xkrv3WWT1oTAykBdnXNh6wA7ZCZjiei0Oq81KRvuWgzLBYMNZBn00Np6YoFdM
// Coffee: price_1NBFs3SB5pYQ7COX2suTMIZr
// Sunglasses: price_1NBFtCSB5pYQ7COXVbBSGbJn
// Camera: price_1NBFu3SB5pYQ7COXuup72aKT
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NAaeJSB5pYQ7COX67Udh2sdfbr0U2vBTRs18xkrv3WWT1oTAykBdnXNh6wA7ZCZjiei0Oq81KRvuWgzLBYMNZBn00Np6YoFdM"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3001/success",
    cancel_url: "http://localhost:3001/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
