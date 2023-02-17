import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const PhoneDetails = (props) => {
  const { phoneId } = useParams();
  const { phonesList } = props;

  const details = phonesList.find((phone) => {
    return phone.id === Number(phoneId);
  });

  const {
    name,
    manufacturer,
    description,
    imageFileName,
    color,
    price,
    screen,
    processor,
    ram,
  } = details;

  return (
    <div className="phones-details">
      <img src={require(`../assets/images/${imageFileName}`)} alt={name} />
      <div className="phones-details-content">
        <h3>
          {manufacturer} {name}
        </h3>
        <h4>${price}</h4>
        <p>{description}</p>
        <strong>More information</strong>
        <ul>
          <li>Color: {color}</li>
          <li>Screen: {screen}</li>
          <li>Processor: {processor}</li>
          <li>RAM: {ram}</li>
        </ul>
      </div>
    </div>
  );
};

export default PhoneDetails;
