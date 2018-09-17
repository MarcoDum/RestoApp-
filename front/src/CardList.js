import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ReactStars from "react-stars";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas,
      hasError: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ datas: nextProps.datas });
  }

  render() {
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
