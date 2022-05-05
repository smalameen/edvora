import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import DataMatch from '../DataMatch/DataMatch'
import './Filter.css'

const Filter = () => {
  const [user, setUser] = useContext(UserContext)

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/rides')
      .then((response) => response.json())
      .then((data) => setItems(Object.values(data)))
  }, [])

  // Functions to get dropdown data
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedOption2, setSelectedOption2] = useState('')

  return (
    <div
      style={{ overflow: 'hidden' }}
      className="row d-flex wrapper justify-content-start p-4"
    >
      {/* The left navbar */}
      <div className="col-sm-3">
        <div
          style={{
            backgroundColor: 'black',
            height: 'auto',
            borderRadius: '1rem',
            padding: '1rem',
          }}
        >
          <h5 style={{ color: 'white' }}>Filters</h5>
          <div
            style={{
              height: '1px',
              width: '10rem',
              borderRadius: '2px',
              backgroundColor: '#CBCBCB',
            }}
          ></div>
          <br />

          <div>
            {/* Selection of State */}
            <select
              style={{
                backgroundColor: '#232323',
                color: 'white',
                border: 'none',
              }}
              onChange={(e) => {
                const selectedItem = e.target.value
                setSelectedOption(selectedItem)
              }}
              className="form-control"
              name="State"
            >
              <option>State</option>
              {items.map((e, key) => {
                return (
                  <option
                    key={key}
                    onBlur={(e) => setSelectedOption(e.target.state)}
                  >
                    {e.state}
                  </option>
                )
              })}
            </select>
          </div>

          <br />
          {/* Selection of City */}
          <div>
            <select
              style={{
                backgroundColor: '#232323',
                color: 'white',
                border: 'none',
              }}
              onChange={(e) => {
                const selectedItem = e.target.value
                setSelectedOption2(selectedItem)
              }}
              className="form-control"
              name="city"
            >
              <option>City</option>
              {items.map((e, key) => {
                return (
                  selectedOption === e.state && (
                    <option key={key} value={e.city}>
                      {e.city}
                    </option>
                  )
                )
              })}
            </select>
          </div>
        </div>
      </div>

      {/* End of the sidebar */}
      <div className="col-sm-9 main_content">
      

        <DataMatch
          mainData={items}
          stateData={selectedOption}
          cityData={selectedOption2}
        />
      </div>
    </div>
  )
}

export default Filter
