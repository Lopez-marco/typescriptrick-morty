import React from "react";
import { MortyCharacterResponse, Result } from "./MortyCardsInterface";
import MortyCard from "./MortyCard";
import { CardColumns } from "reactstrap";

export interface MortyCardsProps {
  url: string;
}

export interface MortyCardsState {
  mortyInformation: any;
}

class MortyCards extends React.Component<MortyCardsProps, MortyCardsState> {
  constructor(props: MortyCardsProps) {
    super(props);
    this.state = { mortyInformation: [] };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((json: MortyCharacterResponse) => {
        console.log(json);
        this.setState({ mortyInformation: json.results });
      });
  }
  render() {
    return (
      <CardColumns>
        {this.state.mortyInformation.length > 0 ? (
          this.state.mortyInformation.map(
            (character: Result, index: number) => (
              <MortyCard character={character} key={index} />
            )
          )
        ) : (
          <></>
        )}
      </CardColumns>
    );
  }
}

export default MortyCards;
