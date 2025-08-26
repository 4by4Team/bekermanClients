import React from "react";
import axios from "axios";

const PaypalButton: React.FC = () => {
  const handleCreateOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/paypal/create-order");
      console.log("Order created:", response.data);
      // השלב הבא יהיה להציג את כפתור PayPal או לאשר את התשלום
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleCaptureOrder = async (orderID: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/paypal/capture-order", { orderID });
      console.log("Payment successful:", response.data);
    } catch (error) {
      console.error("Error capturing order:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCreateOrder}>Create Order</button>
      <button onClick={() => handleCaptureOrder("orderID_example")}>Capture Payment</button>
    </div>
  );
};

export default PaypalButton;
