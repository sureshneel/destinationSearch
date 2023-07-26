// Write your code here

import './index.css'

const DestinationItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="items">
      <img src={imgUrl} className="image" alt={name} />

      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
