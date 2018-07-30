import React,{Component} from 'react';
import PlaceEntry from './PlaceEntry.jsx';
import axios from 'axios';
import styles from '../dist/style.css';
import { Icon } from 'react-icons-kit';
import {cutlery} from 'react-icons-kit/fa/cutlery';
import {ic_local_cafe} from 'react-icons-kit/md/ic_local_cafe';
import {icecream} from 'react-icons-kit/ionicons/icecream'
import {ic_local_bar} from 'react-icons-kit/md/ic_local_bar';
import {ic_local_mall} from 'react-icons-kit/md/ic_local_mall';
import {hotel} from 'react-icons-kit/fa/hotel';
import {ic_account_balance} from 'react-icons-kit/md/ic_account_balance';
import {ic_more_horiz} from 'react-icons-kit/md/ic_more_horiz';
import {androidSearch} from 'react-icons-kit/ionicons/androidSearch';
import {ic_today} from 'react-icons-kit/md/ic_today';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      mainCategory: 'et',
      subCategories: '',
      city: 'Los Angeles',
      places: []
    };
  }
  
  componentDidMount () {
    this.getRestaurants();
    console.log('component mounted!');
  }

  createData (e) {
    for (e = 0; e < 100; e++) {
      axios.post('/api/yelp', {e: e})
      .then(() => console.log('created data #: ', e))
      .catch(err => console.log('error creating data: ', err));
    }
  }

  getRestaurants () {
    const { mainCategory } = this.state;
    let payload = {
      params: {
        mainCategory: mainCategory
      }
    }
    axios.get('/api/yelp', payload)
    .then(res => {
      this.setState({places: res.data.slice(0,10)});
    })
    .catch(err => console.log('error sending get request to server: ', err));
  }

  render () {
    let { places } = this.state;
    return (
      <div className={styles.colBody}>
        <h3 className={styles.title}>People also viewed</h3>
        {this.state.places.length > 0 && (
          <ul>
            {places.map((place, index) => <PlaceEntry key={index} place={place} />)}
          </ul>
        )}
        <div className={styles.otherLinks}>
        <h3 className={styles.title}>Other places nearby</h3>
        <ul>
          <li>Find more American (New) Restaurants near {this.state.city}</li>
          <li>Find more Cocktail Bars near {this.state.city}</li>
          <li>Find more Gastropubs near {this.state.city}</li>
        </ul>
        <h3 className={styles.title}>Browse nearby</h3>
        <ul>
          <li><span className={styles.icon}><Icon size={18} icon={cutlery} /></span>Restaurants</li>
          <li><span className={styles.icon}><Icon size={18} icon={ic_local_cafe} /></span>Cafes</li>
          <li><span className={styles.icon}><Icon size={18} icon={icecream} /></span>Food</li>
          <li><span className={styles.icon}><Icon size={18} icon={ic_local_bar} /></span>Bars</li>
          <li><span className={styles.icon}><Icon size={18} icon={ic_local_mall} /></span>Shopping</li>
          <li><span className={styles.icon}><Icon size={18} icon={hotel} /></span>Hotels</li>
          <li><span className={styles.icon}><Icon size={18} icon={ic_account_balance} /></span>Landmarks</li>
          <li><span className={styles.icon}><Icon size={18} icon={ic_more_horiz} /></span>Show all</li>
        </ul>
        <h3 className={styles.title}>Dining in {this.state.city}</h3>
        <ul>
          <li>
            <span className={styles.icon}><Icon size={18} icon={androidSearch} /></span>
            Search for reservations
          </li>
          <li>
            <span className={styles.icon}><Icon size={18} icon={ic_today} /></span>
            Book a Table in {this.state.city}
          </li>
        </ul>
        <h3 className={styles.title}>Best of {this.state.city}</h3>
        <ul>
          <li>Things to do in {this.state.city}</li>
        </ul>
        {/* <button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button> */}
        </div>
      </div>
    )
  }
}


