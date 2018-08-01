import React,{Component} from 'react';
import styled from 'styled-components';

// Styled Components
const BusinessesLi = styled.li`
  display: grid;
  grid-template-columns: 65px 10px 200px;
  grid-template-rows: 22px 22px 22px 22px;
`;

const BusinessInfo = styled.div`
  grid-column: 3;
  grid-row: 1 / span 4;
`;

const Thumbnails = styled.img`
  border-radius: 6px;
  width: 60px;
  height: 60px;
`;
const InfoStyle1 = styled.span`
  color: #666;
  font-size: 75%;
`;
const InfoStyle2 = styled.span`
  color: #333;
  font-size: 75%;
`;
const ReviewsStyle = styled.span`
  vertical-align: middle;
`;
const Links = styled.a`
  font-size: 90%;
  &:link {
    color: #0073bb;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  &:visited {
    color: #0073bb;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const DotSpacing = styled.span`
  padding: 0px 4px;
  color: #999;
`;

const StyleStars = styled.span`
  background: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png);
  background-size: 132px 560px;
  display: inline-block;
  vertical-align: middle;
  width: 82px;
  height: 14px;
  margin: 6px 7px 5px 0px;
`;
const Star1 = StyleStars.extend`
  background-position: 0 -434px;
`;
const Star15 = StyleStars.extend`
  background-position: 0 -448px;
`;
const Star2 = StyleStars.extend`
  background-position: 0 -462px;
`;
const Star25 = StyleStars.extend`
  background-position: 0 -476px;
`;
const Star3 = StyleStars.extend`
  background-position: 0 -490px;
`;
const Star35 = StyleStars.extend`
  background-position: 0 -504px;
`;
const Star4 = StyleStars.extend`
  background-position: 0 -518px;
`;
const Star45 = StyleStars.extend`
  background-position: 0 -532px;
`;
const Star5 = StyleStars.extend`
  background-position: 0 -546px;
`;

// Component
class PlaceEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.handlePrice = this.handlePrice.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handlePrice (price) {
    let dollars = '';
    for (let i = 0; i < price; i++) {
      dollars += '$';
    }
    return dollars;
  }

  handleRating (rating) {
    if (rating === 1) {return <Star1 />} 
    else if (rating === 1.5) {return <Star15 />} 
    else if (rating === 2) {return <Star2 />} 
    else if (rating === 2.5) {return <Star25 />} 
    else if (rating === 3) {return <Star3 />} 
    else if (rating === 3.5) {return <Star35 />} 
    else if (rating === 4) {return <Star4 />} 
    else if (rating === 4.5) {return <Star45 />} 
    else if (rating === 5) {return <Star5 />}
  }

  render () {
    return (
      <div>
        <BusinessesLi>
          <Thumbnails src={this.props.place.img} />
          <BusinessInfo>
            <strong><Links href="/ADD-LINK-FOR-BUSINESS-IN-DB">
              {this.props.place.name.charAt(0).toUpperCase() + this.props.place.name.slice(1)}
              </Links>
            </strong>
            <br /> 
            <InfoStyle1>
              {this.handleRating(this.props.place.rating)} 
              <ReviewsStyle>{this.props.place.reviews}  reviews</ReviewsStyle>
            </InfoStyle1>
            <br />
            <InfoStyle2>
              {this.handlePrice(this.props.place.price)} <DotSpacing>•</DotSpacing> 
              {this.props.place.mainCategory}, {this.props.place.subCategories}
              <br />
              {this.props.place.city}
            </InfoStyle2>
          </BusinessInfo>
        </BusinessesLi>
      </div>
    )
  }
}

module.exports = { PlaceEntry, Links };