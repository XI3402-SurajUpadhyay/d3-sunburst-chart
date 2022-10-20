import "./App.css";
import React, { useEffect, useRef } from "react";
import Sunburst from "sunburst-chart";
import 'chart.js';

// import SunBurstChart from './Components/SunBurstChart';
import D3Chart from './Components/D3Chart';
function App() {

  // const sunburstLoaded = useRef(false);
  // useEffect(() => {
  //   if(!sunburstLoaded.current){
  //     sunburstLoaded.current = true;
  //     console.log('a');
  //     const data ={
  //       name: "all txn",
  //       color: 'red',
  //       // value: 100,
  //       children: [
  //         {
  //           name: "Saving",
  //           value: 500,
  //           color: 'green'
  //         },
  //         {
  //           name: "entertainment",
  //           color:'blue',
  //           // value: 50,
  //           children: [
  //             {
  //               name: "shopping",
  //               color: 'yellow',
  //               children: [
  //                 {
  //                   name: 'Amazon',
  //                   color:'orange',
  //                   value: 200,
  //                 },
  //                 {
  //                   name: 'Flipkart',
  //                   color:'black',
  //                   value: 100,
  //                 }
  //               ]
  //             },
  //             {
  //               name: "Movie",
  //               value: 200,
  //               color:'pink'
  //             }
  //           ]
  //         }
  //       ]
  //     };
  
  //     Sunburst()
  //       .data(data)
  //       .size("value")
  //       .color("color")
  //       .radiusScaleExponent(1)
  //       (document.getElementById("mychart"));
  //   }

  // }, []);

  return (
    <div className="App">
      <D3Chart/>
      {/* <div id="mychart"></div> */}
    </div>
  );
}

export default App;
