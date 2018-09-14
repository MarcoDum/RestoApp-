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

  decrease(datas){
    JSON.parse(datas)
    .map(data => ({
      name: data.name,
      address1: data.address1,
      address2: data.address2,
      image: data.image,
      imageURL: data.image.url,
      cat1Name: data.categorisation.primary.name,
      cat2Name: data.categorisation.secondary.name,
      rate: data.editorial_rating,
    }))
    .filter(data => data.name && data.address1 && data.address2 && data.image && data.imageURL && data.cat1Name && data.cat2Name && data.rate)
    .sort((a,b) => b.rate - a.rate)
  }

  render() {
    //console.log()
    return (
      <Media>
        {this.decrease(this.state.datas).map((data, index) => (
          <div key={index} style={divStyle}>
            <Media.Left>
              {data.image ? (
                <img
                  width={100}
                  height={80}
                  src={data.imageURL}
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
                {data.cat1Name}, {data.cat2Name}
              </p>
              <p>
                {data.address1} {data.address2}
              </p>
              <ReactStars
                value={data.rate}
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
