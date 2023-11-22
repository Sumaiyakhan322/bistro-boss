import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOutForm = () => {
  const [error,setError]=useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [transitionID,setTransitionID]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useContext(AuthContext)
   
    const axiosSecure=useAxiosSecure()
  
    const [data,refetch]=useCart()
    const totalPrice=data?.reduce((total,item)=>total+item.price,0)
    useEffect(()=>{
   if(totalPrice>0){
    axiosSecure.post('/create-payment-intent',{price:totalPrice})
    .then(res=>{
     console.log(res.data.clientSecret);
     setClientSecret(res.data.clientSecret)
    })
   }
    },[totalPrice,axiosSecure])



    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }
          //confirm payments
          const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
              card:card,
              billing_details:{
                email:user?.email || 'anonymous',
                name:user?.displayName || 'anonymous'

                
              }
            }
          })
          if(confirmError){
            console.log('confirm error');
          }
          else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status==='succeeded'){
              console.log('transition id',paymentIntent.id);
              setTransitionID(paymentIntent.id)
              //set the payment history to database
              const payment={
                email:user?.email,
                price:totalPrice,
                date:new Date(),
                cartID:data.map(item=>item._id),
                menuItemID:data.map(item=>item.menuId),
                status:'pending',
                transitionID:paymentIntent.id
              
              }
            const res=await  axiosSecure.post('/payments',payment)
            console.log('payment saved',res.data);
            refetch()
            if(res.data.result.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }
            }
          }
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-primary my-4" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {
        <p className="text-2xl text-red-500">{error}</p>
      }
      {transitionID && <p className="text-green-400">Your transition ID:{transitionID}</p>}
    </form>
 
        </div>
    );
};

export default CheckOutForm;