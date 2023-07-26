/* eslint-disable import/extensions */
// Write your code here
import {Component} from 'react'
// eslint-disable-next-line import/extensions

import DestinationItem from './components/DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  // eslint-disable-next-line react/destructuring-assignment
  state = {searchInput: '', reDestinationsList: this.props.destinationsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, reDestinationsList} = this.state
    const searchResults = reDestinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="search-container">
        <h1 className="main-heading">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
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
