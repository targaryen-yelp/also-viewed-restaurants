import React,{Component} from 'react';
import styles from '../dist/style.css';
// import styled from 'styled-components';

// // Styled Components
// const BusinessesLi = styled.li`
//   display: grid;
//   grid-template-columns: 65px 10px 200px;
//   grid-template-rows: 22px 22px 22px 22px;
// `;

// const BusinessInfo = styled.div`
//   grid-column: 3;
//   grid-row: 1 / span 4;
// `;

// const Thumbnails = styled.img`
//   border-radius: 6px;
//   width: 60px;
//   height: 60px;
// `;
// const InfoStyle1 = styled.span`
//   color: #666;
//   font-size: 75%;
// `;
// const InfoStyle2 = styled.span`
//   color: #333;
//   font-size: 75%;
// `;
// const ReviewsStyle = styled.span`
//   vertical-align: middle;
// `;
// const Links = styled.a`
//   font-size: 90%;
//   &:link {
//     color: #0073bb;
//     margin: 0;
//     padding: 0;
//     text-decoration: none;
//   }
//   &:visited {
//     color: #0073bb;
//     text-decoration: none;
//   }
//   &:hover {
//     text-decoration: underline;
//   }
// `;
// const DotSpacing = styled.span`
//   padding: 0px 4px;
//   color: #999;
// `;

// const StyleStars = styled.span`
//   background: url(https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png);
//   background-size: 132px 560px;
//   display: inline-block;
//   vertical-align: middle;
//   width: 82px;
//   height: 14px;
//   margin: 6px 7px 5px 0px;
// `;
// const Star1 = StyleStars.extend`
//   background-position: 0 -434px;
// `;
// const Star15 = StyleStars.extend`
//   background-position: 0 -448px;
// `;
// const Star2 = StyleStars.extend`
//   background-position: 0 -462px;
// `;
// const Star25 = StyleStars.extend`
//   background-position: 0 -476px;
// `;
// const Star3 = StyleStars.extend`
//   background-position: 0 -490px;
// `;
// const Star35 = StyleStars.extend`
//   background-position: 0 -504px;
// `;
// const Star4 = StyleStars.extend`
//   background-position: 0 -518px;
// `;
// const Star45 = StyleStars.extend`
//   background-position: 0 -532px;
// `;
// const Star5 = StyleStars.extend`
//   background-position: 0 -546px;
// `;


export default class PlaceEntry extends Component {
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
    let starRating;
    if (rating === 1) {starRating = styles.star1}
    else if (rating === 1.5) {starRating = styles.star15}
    else if (rating === 2) {starRating = styles.star2}
    else if (rating === 2.5) {starRating = styles.star25}
    else if (rating === 3) {starRating = styles.star3}
    else if (rating === 3.5) {starRating = styles.star35}
    else if (rating === 4) {starRating = styles.star4}
    else if (rating === 4.5) {starRating = styles.star45}
    else if (rating === 5) {starRating = styles.star5}
    return <span className={[styles.stars, starRating].join(' ')}></span>

    // Styled Components
    // if (rating === 1) {return <Star1 />} 
    // else if (rating === 1.5) {return <Star15 />} 
    // else if (rating === 2) {return <Star2 />} 
    // else if (rating === 2.5) {return <Star25 />} 
    // else if (rating === 3) {return <Star3 />} 
    // else if (rating === 3.5) {return <Star35 />} 
    // else if (rating === 4) {return <Star4 />} 
    // else if (rating === 4.5) {return <Star45 />} 
    // else if (rating === 5) {return <Star5 />}
  }

  render () {
    return (
      <div>
        <li className={styles.businessLi}>
          <img className={styles.thumbnail} src={this.props.place.img} />
          <div className={styles.businessInfo}>
            <strong><a href="/ADD-LINK-FOR-BUSINESS-IN-DB">
              {this.props.place.name.charAt(0).toUpperCase() + this.props.place.name.slice(1)}
              </a>
            </strong>
            <br /> 
            <span className={styles.info1}>
              {/* <span className={this.handleRating(this.props.place.rating)}></span> */}
              {this.handleRating(this.props.place.rating)}
              <span className={styles.reviews}>{this.props.place.reviews}  reviews</span>
            </span>
            <br />
            <span className={styles.info2}>
              {this.handlePrice(this.props.place.price)} <span className={styles.descDot}>•</span> 
              {this.props.place.mainCategory}, {this.props.place.subCategories}
              <br />
              {this.props.place.city}
            </span>
          </div>
        </li>
      </div>
    )
  }
}

// Styled Components - exported Links style component
// export default { PlaceEntry, Links };