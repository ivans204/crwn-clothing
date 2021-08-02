import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publichableKey =
        'pk_test_51JJxcFHMdU6k2iZ6ZFGuEbJyWY0i9sAE0x29YIbnsjpgDTre4jMu2au03qqp0lyRfqefvoi3407enO8jeiamtWyN002Mv2SGyu';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publichableKey}
        />
    );
};

export default StripeButton;
