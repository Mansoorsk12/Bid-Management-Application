import {useEffect} from 'react'
import './Bid.css'

const Bid = props => {
  const {
    id,
    bidNumber,
    startDate,
    startTime,
    fromCity,
    vehicleType,
    materialWeight,
    assignedStaff,
  } = props.obj
  return (
    <div>
      <ul>{[id,bidNumber,startDate,startTime,fromCity,vehicleType,materialWeight,assignedStaff]}
      </ul>
    </div>
  )
}
export default Bid
