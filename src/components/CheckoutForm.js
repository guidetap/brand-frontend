import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {

   handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  render() {
    return (
        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div>
                        <div class="product-info">
                        <h3 className="product-title">Apple MacBook Pro</h3>
                        <h4 className="product-price">$999</h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <CardSection />
                        </form>
                    </div>
                </div>
            </div>
        </div>
     
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}