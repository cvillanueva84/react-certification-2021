import React from "react";
import { CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardDescription} from "./Card.style";
export default function CardVideo({ name, description, image }) {
  return (
      <CardWrapper>
         <CardHeader>
           <img src={image} style={{margin:"auto",width:200 ,display:"block"}} alt=""/>
        </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardHeading>{name}</CardHeading>
            </CardFieldset>
            <CardFieldset>
                <CardDescription>{description}</CardDescription>
            </CardFieldset>
          </CardBody>
      </CardWrapper>
  );
}