import React,{Component} from 'react';
import styles from '../dist/style.css';

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
    let starclass;
    if (rating === 1) {starclass = styles.star1;} 
    else if (rating === 1.5) {starclass = styles.star15;} 
    else if (rating === 2) {starclass = styles.star2;} 
    else if (rating === 2.5) {starclass = styles.star25;} 
    else if (rating === 3) {starclass = styles.star3;} 
    else if (rating === 3.5) {starclass = styles.star35;} 
    else if (rating === 4) {starclass = styles.star4;} 
    else if (rating === 4.5) {starclass = styles.star45;} 
    else if (rating === 5) {starclass = styles.star5;}
    return <span className={styles.stars + ' ' + starclass}></span>
  }

  render () {
    return (
      <div>
        <li className={styles.container}>
        <img src={this.props.place.img} className={styles.thumbnails} />
        <div className={styles.desc}>
          <strong>
            {this.props.place.name.charAt(0).toUpperCase() + this.props.place.name.slice(1)}
          </strong>
          <br />
          <span className={styles.desc1}>
            {this.handleRating(this.props.place.rating)} 
            <span className={styles.reviews}>{this.props.place.reviews}  reviews</span>
          </span>
          <br />
          <span className={styles.desc2}>
            {this.handlePrice(this.props.place.price)} <span className={styles.spacing}>•</span> 
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