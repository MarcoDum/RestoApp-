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
          <div key={index}>
            <Media.Left>
              <img
                width={100}
                height={80}
                src={data.image_url}
                alt="thumbnail"
              />
            </Media.Left>

            <Media.Body>
              <Media.Heading>{data.name}</Media.Heading>
              <p>
                {data.mainCategory}, {data.secondaryCategory}
              </p>
              <p>
                {data.address1}, {data.address2}
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

export default CardList;


