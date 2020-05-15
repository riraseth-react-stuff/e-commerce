import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_pl7LQjwpmt7krfYakk8ioMC900lMXYZiRZ';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
