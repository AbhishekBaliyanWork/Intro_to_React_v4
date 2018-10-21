import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked Me");
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
        <h1 onClick={this.handleTitleClick}>Adopt My Dog!</h1>
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
