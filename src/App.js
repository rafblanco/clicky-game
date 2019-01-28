import React, { Component } from "react";
import CharactersCard from "./components/CharactersCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0
  };

  cardClick = id => {
    const array = this.state.characters
    for (let k = 0; k < array.length; k++) {
      if (array[k].id === id) {
        if (array[k].clicked === false) {
          array[k].clicked = true;
          this.setState({ score: this.state.score + 1 });
          // Randomizes characters array
          const characters = this.state.characters;
          for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
          }
          this.setState({ characters });
          return true;
        } else {
          this.resetScore();
        }
      }
    }

  };

  resetScore = () => {
    this.state.characters.forEach(character => {
      character.clicked = false;
    });
    alert(`Game Over!`);
    this.setState({ score: 0 });
    return true;
  }


  // Map over this.state.characters and render a CharacterCard component for each friend object
  render() {
    return (<div>
      <Title>
          <Score score={this.state.score} />
      </Title>
      <Wrapper>
        {this.state.characters.map(character => (
          <CharactersCard
            id={character.id}
            name={character.name}
            image={character.image}
            cardClick={this.cardClick}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
