import React,{ Component } from 'react';
import axios from 'axios';
import styles from '../dist/style.css';
// import styled from 'styled-components';
// import { Links, PlaceEntry } from './PlaceEntry.jsx';
import PlaceEntry from './PlaceEntry.jsx';
import { Icon } from 'react-icons-kit';
import { cutlery } from 'react-icons-kit/fa/cutlery';
import { ic_local_cafe } from 'react-icons-kit/md/ic_local_cafe';
import { icecream } from 'react-icons-kit/ionicons/icecream'
import { ic_local_bar } from 'react-icons-kit/md/ic_local_bar';
import { ic_local_mall } from 'react-icons-kit/md/ic_local_mall';
import { hotel } from 'react-icons-kit/fa/hotel';
import { ic_account_balance } from 'react-icons-kit/md/ic_account_balance';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { androidSearch } from 'react-icons-kit/ionicons/androidSearch';
import { ic_today } from 'react-icons-kit/md/ic_today';

// // Styled Components
// const StyledBodyDiv = styled.div`
//   width: 270px;
//   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
// `;
// const StyledH3 = styled.h3`
//   color: #d32323;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 1.3125em;
//   font-family: sans-serif;
// `;
// const StyledUl = styled.ul`
//   margin: 0;
//   padding: 0;
// `;
// const StyledLi = styled.li`
//   margin: 12px 10px 12px 0px;
//   list-style: none;
//   vertical-align: top;
// `;
// const StyledIcon = styled.span`
//   padding: 0px 13px 0px 5px;
//   display: inline-flex;
//   vertical-align: top;
// `;

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: 'Starbucks',
      mainCategory: 'et',
      subCategories: 'Cafe',
      city: 'Los Angeles',
      places: []
    };
  }
  
  componentDidMount () {
    this.getRestaurants();
    console.log('component mounted!');
  }

  createData () {
    for (let e = 0; e < 100; e++) {
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
    axios.get('http://localhost:9001/api/yelp', payload)
    .then(res => {
      if (res.data.length) {
        this.setState({places: res.data.slice(0,10)});
      } else {
        this.createData();
      }
    })
    .catch(err => console.log('error sending get request to server: ', err));
  }

  render () {
    let { places } = this.state;
    return (
      <div className={styles.main}>
        <h3>People also viewed</h3>
        {this.state.places.length > 0 && (
          <span className={styles.list}>
            {places.map((place, index) => <PlaceEntry key={index} place={place} />)}
          </span>
        )}
        <h3>Other places nearby</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.mainCategory} Restaurants near {this.state.restaurant}
          </a></li>
          <li className={styles.listItem}><a href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.subCategories} Restaurants near {this.state.restaurant}
          </a></li>
        </ul>
        <h3>Browse nearby</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={cutlery} /></span>Restaurants</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_cafe} /></span>Cafes</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={icecream} /></span>Food</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_bar} /></span>Bars</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_local_mall} /></span>Shopping</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={hotel} /></span>Hotels</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_account_balance} /></span>Landmarks</a>
          </li>
          <li className={styles.listItem}>
            <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_more_horiz} /></span>Show all</a>
          </li>
        </ul>

        <h3>Dining in {this.state.city}</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={androidSearch} /></span>
            Search for reservations</a>
          </li>
          <li className={styles.listItem}>
          <a href="/ADD-LINK"><span className={styles.icon}><Icon size={18} icon={ic_today} /></span>
            Book a Table in {this.state.city}</a>
          </li>
        </ul>
        <h3>Best of {this.state.city}</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="/ADD-LINK">Things to do in {this.state.city}</a></li>
        </ul>
        {/* <button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button> */}
      </div>
    )
  }
}


// Styled Components - place inside return()
{/* <StyledBodyDiv>
        <StyledH3>People also viewed</StyledH3>
        {this.state.places.length > 0 && (
          <StyledUl>
            {places.map((place, index) => <PlaceEntry key={index} place={place} />)}
          </StyledUl>
        )}
        <StyledH3>Other places nearby</StyledH3>
        <StyledUl>
          <StyledLi><Links href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.mainCategory} Restaurants near {this.state.restaurant}
          </Links></StyledLi>
          <StyledLi><Links href="/ADD-LINK-FOR-SIMILAR-NEARBY-BUSINESSES">
            Find more {this.state.subCategories} Restaurants near {this.state.restaurant}
          </Links></StyledLi>

        </StyledUl>
        <StyledH3>Browse nearby</StyledH3>
        <StyledUl>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={cutlery} /></StyledIcon>Restaurants</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_local_cafe} /></StyledIcon>Cafes</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={icecream} /></StyledIcon>Food</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_local_bar} /></StyledIcon>Bars</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_local_mall} /></StyledIcon>Shopping</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={hotel} /></StyledIcon>Hotels</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_account_balance} /></StyledIcon>Landmarks</Links>
          </StyledLi>
          <StyledLi>
            <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_more_horiz} /></StyledIcon>Show all</Links>
          </StyledLi>
        </StyledUl>

        <StyledH3>Dining in {this.state.city}</StyledH3>
        <StyledUl>
          <StyledLi>
          <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={androidSearch} /></StyledIcon>
            Search for reservations</Links>
          </StyledLi>
          <StyledLi>
          <Links href="/ADD-LINK"><StyledIcon><Icon size={18} icon={ic_today} /></StyledIcon>
            Book a Table in {this.state.city}</Links>
          </StyledLi>
        </StyledUl>
        <StyledH3>Best of {this.state.city}</StyledH3>
        <StyledUl>
          <StyledLi><Links href="/ADD-LINK">Things to do in {this.state.city}</Links></StyledLi>
        </StyledUl>
          <button onClick={(e) => {this.createData(e)}}>Click To Create Fake Data</button>
      </StyledBodyDiv> */}