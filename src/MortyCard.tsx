import React from "react";
import { Result } from "./MortyCardsInterface";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export interface MortyCardProps {
  character: Result;
  // key: number;
}

const MortyCard: React.SFC<MortyCardProps> = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="10px"
          src={props.character.image}
          alt="Card image cap"
        />
        <CardBody>
          {props.character.name}
          <CardTitle>{props.character.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MortyCard;
