import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Shared/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_APIKEY);
const Payment = () => {
    return (
        <div>
            <Title heading={'Payment'} subHeading={'Please pay it'}></Title>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
                
            </div>
        </div>
    );
};

export default Payment;