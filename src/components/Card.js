import React from "react"
import data from "../data"

export default function Card(props) {
    return(
        <div>
         <div className="card">
          <img 
                src={props.imageUrl} 
                className="card--image" 
            />
            <div className="card--data">
                <div className="location">
                    <div className="country">
                        <img src="./images/location.png" className="nav--logo" />
                        <h4>{props.location}</h4>
                    </div>
                     <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                    <h1>{props.title}</h1>
                    <p className="card--date">{props.startDate} - {props.endDate}</p>
                    <p className="card--info">{props.description}</p>
            </div>
           
        </div>
         {props.id !== 3  && <div className="card--separation"></div>}
        </div>
    )
}