import React from 'react'
import "./Mybox.css"

const Mybox = () => {
    const i = [
        {
            img: "/complain.png",
            name: "Govt. Compliant Vehicles"

        },
        { img: "/doorstep-delivery.png", name: "Doorstep Delivery of Vehicles" },
        { img: "/credit-card.png", name: "Instant & Secure Payments" },
        { img: "/customer-service.png", name: "Services & Maintenance" },
        { img: "/sanatizedbike.jpg", name: "Sanitized Vehicles" }
    ]
    const bikes = [
        {
            img: "https://freedo.rentals/images/model/HERO_GLAMOUR/RIGHT-GlamourRedTesterRightpng.png",
            name: "HERO Glamour",
            price: "₹199",
            button: "Book"
        },
          {
            img: "https://freedo.rentals/images/model/HERO_SPLENDOR_PLUS/RIGHT-Splendorpng.png",
            name: "HERO Splendor Plus",
            price: "₹299",
            button: "Book"
        },
         {
            img: "https://freedo.rentals/images/model/HERO_PLEASURE_PLUS/RIGHT-PleasurePlusBlueTesterRightpng.png",
            name: "HERO Pleasure Plus",
            price: "₹399",
            button: "Book"
        },
        {
            img: "https://freedo.rentals/images/model/HERO_XPULSE_200/RIGHT-XpulseWhiteTesterRightpng.png",
            name: "HERO Xpulse 200",
            price: "₹499",
            button: "Book"
        }
    ]
    return (
        <div>
            <div className="mybox">


                {i.map((j) => (
                    <div className="innerbox">
                        <img src={j.img} alt="Error" width={30} />
                        <p>{j.name}</p>
                    </div>



                ))}

            </div>
             <h4>Renting Fleet</h4>
            <div className="automobile">
                {bikes.map((item) => (
                    <div className="card" style={{width: "18rem"}}>
                        <img src={item.img} className="card-img-top" alt="Error"  width={200} style={{backgroundColor:"#d3e0e9",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}/>
                        <div class="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>{item.price}</p>
                            <button  className="btn btn-primary">{item.button}</button>


                        </div>
                    </div>
                ))}
            </div>


        </div>


    )
}

export default Mybox
