// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      placeDestinationsList: props.destinationsList,
    }
  }
  // eslint-disable-next-line react/destructuring-assignment

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, placeDestinationsList} = this.state
    const searchResults = placeDestinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="search-container">
        <h1 className="main-heading">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          className="input-field"
          placeholder="Search"
          alt="search icon"
        />
        <ul className="destination-items">
          {searchResults.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
