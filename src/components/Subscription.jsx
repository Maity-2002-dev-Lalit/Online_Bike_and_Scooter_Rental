import React from 'react'
import "./Subscription.css"

const Subscription = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹499/month',
      features: ['1 vehicle', 'Basic support', 'Up to 100 km/day'],
    },
    {
      name: 'Standard Plan',
      price: '₹999/month',
      features: ['3 vehicles', 'Priority support', 'Up to 300 km/day'],
    },
    {
      name: 'Premium Plan',
      price: '₹1499/month',
      features: ['Unlimited vehicles', '24/7 support', 'Unlimited km'],
    }
  ];

  const handleSubscribe = (plan) => {
    alert(`Subscribed to: ${plan.name}`);
    console.log("User subscribed to:", plan);
  };
  return (
    <div>
      <div className="subscription">
        <div className="container mt-5  pt-5">
          <h2 className="text-center mb-4">Choose Your Subscription Plan</h2>
          <div className="row justify-content-center">
            {plans.map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title text-center">{plan.name}</h4>
                    <h5 className="text-center text-primary">{plan.price}</h5>
                    <ul className="list-group list-group-flush mt-3 mb-3">
                      {plan.features.map((feature, i) => (
                        <li className="list-group-item" key={i}>{feature}</li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-success mt-auto"
                      onClick={() => handleSubscribe(plan)}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Subscription
