import {useEffect} from 'react'

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
      <ul>
        <li>Bid Number</li>
        <p>{bidNumber}</p>
        <li>Start Date</li>
        <p>{startDate}</p>
        <li>Bid Time</li>
        <p>{startTime}</p>
        <li>From city</li>
        <p>{fromCity}</p>
        <li>Vehicle Type</li>
        <p>{vehicleType}</p>
        <li>Material Weight</li>
        <p>{materialWeight}</p>
        <li>Assigned Staff</li>
        <p>{assignedStaff}</p>
      </ul>
    </div>
  )
}
export default Bid
