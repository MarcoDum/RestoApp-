import React, { Component } from "react";
import { Media } from "react-bootstrap";
import ReactStars from "react-stars";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
      <div className="container" style={{ marginTop: 70 }}>
        <Media>
          {this.props.restaurants.map((restaurant, index) => (
            <div key={index}>
              <Media.Left>
                <img
                  width={180}
                  height={130}
                  src={restaurant.image_url}
                  alt="thumbnail"
                />
              </Media.Left>

              <Media.Body>
                <Media.Heading>{restaurant.name}</Media.Heading>
                <p>
                  {restaurant.mainCategory}, {restaurant.secondaryCategory}
                </p>
                <p>
                  {restaurant.address1}, {restaurant.address2}
                </p>
                <ReactStars
                  value={restaurant.editorial_rating}
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                  edit={false}
                />
              </Media.Body>
              <Media.Right>
                <IconButton
                  restaurant={restaurant}
                  // onClick={this.handleFavorite(restaurant)}
                  aria-label="Add to favorites"
                >
                  <FavoriteIcon color="secondary" />
                </IconButton>
              </Media.Right>
              <hr />
            </div>
          ))}
        </Media>
      </div>
    );
  }
}

export default CardList;
