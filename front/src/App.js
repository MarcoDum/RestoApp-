import React, { Component } from "react";
import CardList from "./CardList";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
  }

  componentDidMount() {
    axios
      .get("/restaurants?_limit=10")
      .then(response => {
        // handle success
        console.log(response.data);
        this.setState({
          datas: response.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Restos de Paris</h1>
        </header>
        {this.state.datas.length > 0 ? (
          <CardList datas={this.state.datas} />
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}

export default App;
