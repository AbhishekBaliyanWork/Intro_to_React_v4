import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_KEY
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
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
      <div>
        <h1>Adopt My Dog!</h1>
        <Pet name="Anny" animal="Ants" breed="Fire Ant" />
        <Pet name="Nitin" animal="dog" breed="Bulldog" />
        <Pet name="Monny" animal="Monkey" breed="Gelada" />
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
render(<App />, document.getElementById("root"));
