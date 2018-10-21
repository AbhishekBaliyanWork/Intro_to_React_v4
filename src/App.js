const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt My Dog!"),
    React.createElement(Pet, {
      name: "Anny",
      animal: "Ants",
      breed: "Fire Ant"
    }),
    React.createElement(Pet, {
      name: "Nitin",
      animal: "monkey",
      breed: "Gelada"
    }),
    React.createElement(Pet, {
      name: "Mohan",
      animal: "dog",
      breed: "Bulldog"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
