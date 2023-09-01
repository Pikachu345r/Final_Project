// Write all the code here
import React from "react";
const OrderDetails = () => { 
return (
<section className="orderDetails">
<main>
<h1>Order Details</h1>
<div>
<h1>Shipping</h1>
<p>
<b>Address</b>
{"via xxxx 23"}
</p>
</div>
<div>
<h1>Contact</h1>
<p>
<b>Name</b>
{"Amy"}
</p>
<p>
<b>Phone</b>
{3392273615}
</p>
</div>
<div>
<h1>Status</h1>
<p>
<b>Order Status</b>
{"Processing"}
</p>
<p>
<b>Placed At</b>
{"23-02-2020"}
</p>
<p>
<b>Delivered At</b>
{"23-02-2020"}
</p>
</div>
<div>
<h1>Payment</h1>
<p>
<b>Payment Method</b>
{"COD"}
</p>
<p>
<b>Payment Reference</b>#{"asdasdsadsad"}
</p>
<p>
<b>Paid At</b>
{"23-02-2020"}
</p>
</div>
<div>
<h1>Amount</h1>
<p>
<b>Items Total</b>₹{250}
</p>
<p>
<b>Shipping Charges</b>₹{100}
</p>
<p>
<b>Tax</b>₹{150}
</p>
<p>
<b>Total Amount</b>₹{150 + 100 + 250}
</p>
</div>
<article>
<h1>Ordered Items</h1>
<div>
<h4>Cheese Burger</h4>
<div>
<span>{2}</span> x <span>{25}</span>
</div>
</div>
<div>
<h4>Veg Cheese Burger</h4>
<div>
<span>{2}</span> x <span>{25}</span>
</div>
</div>
<div>
<h4>Burger Fries</h4>
<div>
<span>{1}</span> x <span>{50}</span>
</div>
</div>
<div>
<h4
style={{ 
fontWeight: 800,
}}
>
Sub Total
</h4>
<div
style={{ 
fontWeight: 800,
}}
>
₹{150}
</div>
</div>
</article>
</main>
</section>
);
};
export default OrderDetails;