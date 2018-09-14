import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ReactStars from "react-stars";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas,
      //datasDescending: [],
      hasError: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ datas: nextProps.datas });
  }

/*
  descending = datasState => {

    if (datasState.lenght > 0) {

      datasState.map(data => {
      let tab5 = [];
      let tab4 = [];
      let tab3 = [];
      let tab2 = [];
      let tab1 = [];
      let tab0 = [];
      let decreaseDatas = [];

        switch (datasState.editorial_rating) {
          case "5":
            let tab5 = [...data];
            break;
          case "4":
            tab4 = [...data];
            break;
          case "3":
            tab3 = [...data];
            break;
          case "2":
            tab2 = [...data];
            break;
          case "1":
            tab1 = [...data];
            break;
          case "0":
            tab0 = [...data];
            break;
          default:
            tab0 = [...data];
        }
      });
    }
    decreaseDatas = [...tab5, ...tab4, ...tab3, ...tab2, ...tab1, ...tab0];
    return decreaseDatas;
  };
*/

  render() {
    //console.log()
    return (
      <Media>
        {this.state.datas.map((data, index) => (
          <div key={index} style={divStyle}>
            <Media.Left>
              {data.image ? (
                <img
                  width={100}
                  height={80}
                  src={data.image.url}
                  alt="thumbnail"
                />
              ) : (
                <img
                  width={100}
                  height={80}
                  src="http://images.math.cnrs.fr/IMG/png/section1-original.png"
                  alt="thumbnail"
                />
              )}
            </Media.Left>

            <Media.Body>
              <Media.Heading>{data.name}</Media.Heading>
              <p>
                {data.categorisation.primary.name},{" "}
                {data.categorisation.secondary.name}
              </p>
              <p>
                {data.address1} {data.address2}
              </p>
              <ReactStars
                value={data.editorial_rating}
                count={5}
                size={24}
                color2={"#ffd700"}
              />
            </Media.Body>
            <hr />
          </div>
        ))}
      </Media>
    );
  }
}
const divStyle = {
  // marginTop: "5px"
};

export default CardList;
