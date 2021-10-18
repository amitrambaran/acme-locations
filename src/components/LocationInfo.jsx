import React from "react";
import UsersSvg from "../assets/Users.svg";
import TimezoneSvg from "../assets/Timezone.svg";
import ViewsSvg from "../assets/Views.svg";
import moment from "moment-timezone";
import {
  CardList,
  CardListItem,
  CardListIcon,
  CardListText,
} from "./Stylesheet";

//construct LocationInfo list (used in LocationCard and Modal)
function LocationInfo({ locationData, views }) {
  return (
    <CardList>
      <CardListItem>
        <CardListIcon src={UsersSvg} alt="users svg" />
        <CardListText>{locationData.userCount} Users</CardListText>
      </CardListItem>
      <CardListItem>
        <CardListIcon src={TimezoneSvg} alt="timezone svg" />
        <CardListText>
          {moment(locationData.createdAt).format("hh:mma ([GMT]Z)")}
        </CardListText>
      </CardListItem>
      <CardListItem>
        <CardListIcon src={ViewsSvg} alt="views svg" />
        <CardListText>
          {views} View{views !== 1 && "s"}
        </CardListText>
      </CardListItem>
    </CardList>
  );
}

export default LocationInfo;
