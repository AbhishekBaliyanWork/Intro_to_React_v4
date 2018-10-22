import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_KEY
});

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          // pets: pets
          pets
        });
      });
  }
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     {
    //       onClick: this.handleTitleClick
    //     },
    //     "Adopt My Dog!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Anny",
    //     animal: "Ants",
    //     breed: "Fire Ant"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Nitin",
    //     animal: "monkey",
    //     breed: "Gelada"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Mohan",
    //     animal: "dog",
    //     breed: "Bulldog"
    //   })
    // ]);

    return (
      <div className="search">
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt My Dog!"),
//     React.createElement(Pet, {
//       name: "Anny",
//       animal: "Ants",
//       breed: "Fire Ant"
//     }),
//     React.createElement(Pet, {
//       name: "Nitin",
//       animal: "monkey",
//       breed: "Gelada"
//     }),
//     React.createElement(Pet, {
//       name: "Mohan",
//       animal: "dog",
//       breed: "Bulldog"
//     })
//   ]);
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
// render(React.createElement(App), document.getElementById("root"));
// render(<App />, document.getElementById("root"));
export default Results;
