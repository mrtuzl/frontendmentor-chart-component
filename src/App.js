import React, { useRef, useState } from 'react';
import { Bar , getElementsAtEvent } from 'react-chartjs-2';
import logo from './logo.svg';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import './App.css';
import dataSet from './data.json';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function App() {

  const data = {
    labels: [dataSet[0].day,dataSet[1].day, dataSet[2].day, dataSet[3].day, dataSet[4].day, dataSet[5].day, dataSet[6].day],
    datasets: [
      {
        label: '$',
        data: [dataSet[0].amount, dataSet[1].amount, dataSet[2].amount, dataSet[3].amount, dataSet[4].amount, dataSet[5].amount, dataSet[6].amount],
        backgroundColor: color => {
            let colors = color.index === 2 ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
            return colors;
        },
        hoverBackgroundColor: color => {
          let colors = color.index === 2 ? 'hsl(186, 34%, 60%, 0.8)' : 'hsl(10, 79%, 65%, 0.8)' ;
          return colors;
        },
        hoverBorderColor:'hsl(33, 100%, 98%)',
        borderColor: 'hsl(10, 79%, 65%)',
        borderRadius:'5',
        borderSkipped: 'none',
       
      }
    ]
  }

const options ={
  onHover: (event, chartElement) => {
      if(chartElement.length === 1) {
        event.native.target.style.cursor = 'pointer';
      }
  },
  plugins: {
    legend: {display: false},
    tooltip: {
      displayColors: false,
    }
  },
 layout: {
padding: {
  top: 30,
  left: 0,
  bottom: 0,
  right: 0
}
 },
  scales: {
    x: {
      border: {
        display:false
      },
      grid: {
        display: false,
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    },
  },
  axes: {
    display: false
  }
}

    const chartRef = useRef();
    const [day, setDay] = useState({
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false
    });

   
    function onClickChart(e) {
      if (getElementsAtEvent(chartRef.current,e).length > 0) {
        switch (getElementsAtEvent(chartRef.current,e)[0].index) {
            case 0:
            setDay({mon: true})
            console.log(day)
            break;

            case 1:
            setDay({tue: true})
            console.log(day)
            break;

            case 2:
            setDay({wed: true})
            console.log(day)
            break;

            case 3:
            setDay({thu: true})
            console.log(day)
            break;

            case 4:
            setDay({fri: true})
            console.log(day)
            break;

            case 5:
            setDay({sat: true})
            console.log(day)
            break;

            case 6:
            setDay({sun: true})
            console.log(day)
            break;
        
          default:
            break;
        }
      }
     
    }
   

  return (
    <div className="App">
        <div className='container'> 
          <div className='first-box'> 
              <div className='mybalance'> 
                  <span> My balance </span>
                  <h1> $921.48 </h1>
              </div>
              <div className='logo'> <img src={logo} alt="logo"/> </div>
          </div>
          <div className='second-box'> 
          <h1> Spending - Last 7 Days</h1>
          <div className='chart'> 
            <Bar 
            data={data} 
            options={options}
            onClick={onClickChart}
            ref = {chartRef}
            className="bar"
            />
            </div>
            <hr className='hr'/>
            <div className='bottom'> 
              <div className='left'> 
              <span>Total this month </span>
              <h1> $478.33 </h1>
              </div>
              <div className='right'> 
              <span> +2.4%</span>
              <span> from last month</span>
              </div>
             </div>
          
          </div>
       </div>
    </div>
  );
}

export default App;



// console.log(data.datasets[getElementsAtEvent(chartRef.current,e)[0].datasetIndex].backgroundColor)
// data.datasets[getElementsAtEvent(chartRef.current,e)[0].datasetIndex].backgroundColor = 'black'