import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { UserContext } from '../../App'

const ShowDataNew = ({ obj }) => {
  const [user, steUser] = useContext(UserContext)
  // console.log(user)
  //   consolobj.log(obj)

  var pathArrayData = obj.station_path
  var userStationCodeData = user.station_code

  const closest = pathArrayData.reduce((prev, curr) =>
    Math.abs(curr - userStationCodeData) < Math.abs(prev - userStationCodeData)
      ? curr
      : prev,
  )

  //   consolobj.log(closest)

  return (
    <div class="row d-flex justify-content-around">
   
      {closest === user.station_code && (
        <Card
          value={obj.state}
          style={{
            width: '15rem',
            borderRadius: '1rem',
            padding: '10px',
            height: 'auto',
            margin: '1rem',
            backgroundColor: '#000000',
            color: 'white',
          }}
        >
          <div>
            <Card.Img
              style={{ height: 'auto', width: '100%' }}
              className="img-fluid"
              src={obj.map_url}
            />
          </div>
          <div>
            <Card.Body>
              <p> Ride Id:{obj.id} </p>
              <p> Origin Station:{obj.origin_station_code} </p>
              <p> station_path:{obj.station_path.join(', ')} </p>
              <p>Date: {obj.date}</p>
              <p>
                Distance:
                {obj.destination_station_code - user.station_code}
              </p>
            </Card.Body>
          </div>
        </Card>
      )}
    </div>
  )
}

export default ShowDataNew
