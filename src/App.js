import React, { Component } from "react";
import "./styles.css";

//export default function App()
class App extends Component {
  //Introduce the state inside class
  //override the initializer "constructor with props"
  constructor(props) {
    super(props);
    console.log("This is my initializer");

    this.state = {
      rows: [
        <p> This is my row </p>,
        <p key="1"> This is my row </p>,
        <p key="2"> This is my row </p>
      ]
    };

    const movies = [
      {
        id: 0,
        title: "The Avengers",
        overview:
          "As the Avengers and friends face off against their greatest threat to defend the galaxy against the almighty Thanos..."
      },
      {
        id: 1,
        title: "Avengers: Infinity War",
        overview:
          "As the Avengers and friends face off against their greatest threat to defend the galaxy against the almighty Thanos..."
      }
    ];
    var movieRows = [];
    movies.forEach(movie => {
      console.log(movie.title);

      movieRows.push(<p key={movie.id}>{movie.title}</p>);
    });
    this.state = { rows: movieRows };
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td />
              <td>MovieDB Search</td>
            </tr>
          </tbody>
        </table>

        <input className="search" placeholder="Enter Search Item" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
