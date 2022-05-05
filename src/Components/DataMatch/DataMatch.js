import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { DataContext, UserContext } from '../../App'
import ShowNearData from './ShowNearData'
import ShowPastRide from './ShowPastRide'
import ShowUpcomingData from './ShowUpcomingData'
import "../Filterbar/Filter.css"

const DataMatch = ({ stateData, data2, cityData, mainData }) => {
  const [user, steUser] = useContext(UserContext)

  const [itemes, setItemes] = useContext(DataContext)

  const [count, setCount] = useState(0)

  const [count1, setCount1] = useState(0)
 
  const [count2, setCount2] = useState(0)


  return (
    <div>
      <div className="p-3">
        {/* topBar */}
        <div class="row d-flex justify-content-between">
          <div>
            <button class ="hover-underline-animation"
              onClick={() => {
                setCount(count + 1)
                setCount1(0)
                setCount2(0)
              }}
            >
              Nearest Ride
            </button>
            <button class ="hover-underline-animation"
              onClick={() => {
                setCount(0)
                setCount1(count1 + 1)
                setCount2(0)
              }}
            >
              Upcoming Ride
            </button>
            <button class ="hover-underline-animation"
              onClick={() => {
                setCount(0)
                setCount1(0)
                setCount2(count2 + 1)
              }}
            >
              Past Ride
            </button>
          </div>

          <div style={{ color: 'white' }}>
            <p>My name: {user.name}</p>
            <p>My Code: {user.station_code}</p>
            <img
              style={{ height: '3rem', width: '3rem' }}
              className="img-fluid rounded-circle"
              src={user.url}
              alt=""
            />
          </div>
        </div>

        <div class="row d-flex justify-content-around">
          {count1 === 0 &&
            count2 === 0 &&
            cityData.length === 0 &&
            stateData.length === 0 && (
              <tbody>
                {itemes.map((object, i) => (
                  <ShowNearData obj={object} key={i} />
                ))}
              </tbody>
            )}
        </div>

        {/* Components of Showing Data */}
        <div class="row d-flex justify-content-around">
          {count1 !== 0 &&
            count === 0 && count2 === 0 &&
            cityData.length === 0 &&
            stateData.length === 0 && (
              <tbody>
                {itemes.map((object, i) => (
                  <ShowUpcomingData obj={object} key={i} />
                ))}
              </tbody>
            )}
        </div>
        <div class="row d-flex justify-content-around">
          {count2 !== 0 &&
            count === 0 &&
            count1 === 0 &&
            cityData.length === 0 &&
            stateData.length === 0 && (
              <tbody>
                {itemes.map((object, i) => (
                  <ShowPastRide obj={object} key={i} />
                ))}
              </tbody>
            )}
        </div>
        {/* Showing Filter Data */}
        <div class="row d-flex justify-content-between">
          {/* One data Matched */}
          {mainData.map((e, key) => {
            if (e.state === stateData && e.city === cityData) {
              return (
                <div class="row d-flex justify-content-around">
                  <Card
                    value={e.state}
                    key={key}
                    style={{
                      width: 'auto',
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
                        src={e.map_url}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <p> Ride Id:{e.id} </p>
                        <p> Origin Station:{e.origin_station_code} </p>
                        <p> station_path:{e.station_path.join(', ')} </p>
                        <p>Date: {e.date}</p>
                        <p>
                          Distance:{' '}
                          {e.destination_station_code - user.station_code}
                        </p>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              )
            }
          })}
        </div>

        <div class="row d-flex justify-content-around">
          {/* One data Matched */}
          {mainData.map((e, key) => {
            if (e.state === stateData && cityData.length === 0) {
              return (
                <div class="row d-flex justify-content-around">
                  <Card
                    value={e.state}
                    key={key}
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
                        src={e.map_url}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <p> Ride Id:{e.id} </p>
                        <p> Origin Station:{e.origin_station_code} </p>
                        <p> station_path:{e.station_path.join(', ')} </p>
                        <p>Date: {e.date}</p>
                        <p>
                          Distance:{' '}
                          {e.destination_station_code - user.station_code}
                        </p>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              )
            }
          })}
        </div>

        {/* Two data Matched */}
        <div class="d-flex row justify-content-around m-2">
          {mainData.map((e, key) => {
            if (
              stateData.length === 0 &&
              cityData.length === 0 &&
              count2 !== 1
            ) {
              return (
                <div class="row d-flex justify-content-around">
                  <Card
                    value={e.state}
                    key={key}
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
                        src={e.map_url}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <p> Ride Id:{e.id} </p>
                        <p> Origin Station:{e.origin_station_code} </p>
                        <p> station_path:{e.station_path.join(', ')} </p>
                        <p>Date: {e.date}</p>
                        <p>
                          Distance:
                          {e.destination_station_code - user.station_code}
                        </p>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default DataMatch
