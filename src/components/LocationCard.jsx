import React, { useState } from "react";
import { Card, CardTitle, EditIcon, EditIconContainer } from "./Stylesheet";
import EditSvg from "../assets/Edit.svg";
import LocationInfo from "./LocationInfo";

function LocationCard(props) {
  const [views, setViews] = useState(0);

  //handle opening of modal and increment + send view count
  function openModal(id) {
    const updatedViews = views + 1;
    setViews(updatedViews);
    props.showModalFunction(id, updatedViews);
  }
  //construct card component
  return (
    <Card onClick={() => openModal(props.locationData.id)}>
      <EditIconContainer>
        <EditIcon src={EditSvg} alt="edit svg" />
      </EditIconContainer>
      <CardTitle>{props.locationData.name}</CardTitle>
      <LocationInfo locationData={props.locationData} views={views} />
    </Card>
  );
}

export default LocationCard;