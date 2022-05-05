// import React, { useContext } from 'react';
// import { UserContext } from '../../App';

// const ShowNearestRide = ({mapData}) => {
//     // const [itemes, setItemes] = useContext(UserContext)
//     console.log(mapData)
//       var pathArrayData = mapData.station_path
//       var userStationCodeData = mapData.station_code
    
//       var closest = pathArrayData.reduce(function (prev, curr) {
//         return Math.abs(curr - userStationCodeData) <
//           Math.abs(prev - userStationCodeData)
//           ? curr
//           : prev
//       })
//       console.log(closest)
    
//     return (
//         <div>
//             <p>as</p>
//         </div>
//     );
// };

// export default ShowNearestRide;



// import React, { useEffect, useState } from 'react';

// const totalMoney = () => {
    
//     const [total, setTotal] = useState(0);
    
//     // Data could be an external json, but let's take a simple example
//     // BTW: I don't have anything to do compared to these big fishes 😝
//     let people = {
        
//         'Erik':  {money: 2500},
//         'Musk':  {money: 350000000},
//         'Bezos': {money: 450000000000}
        
//     };
    
//     // We count the total of money on the first load of the component
  
    
//     return(
//         <div>The total amount of money is {total} $.</div>
//     );
    
// }

// export default totalMoney;
