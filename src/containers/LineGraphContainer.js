import React,{useEffect,useState} from 'react';
import {LineGraph} from '../components'
import  {Line} from "react-chartjs-2"
import numeral from "numeral";

const options = {
    legend:{
        display:false,
    },
    elements:{
        point:{
            radius:0,
        }
    },
    maintainAspectRatio: false,
    tooltips:{
        mode:"index",
        intersect:false,
        callbacks:{
            label:function (tooltipItem,data){
                return numeral(tooltipItem.value).format("+0,0");
            }
        }
    },
    scales:{
        xAxes: [
            {
              type: "time",
              time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll",
              },
            },
          ],
        yAxes:[
            {
                gridLines:{
                    display:false,
                },
                ticks:{
                    callback:function(value,index,values){
                        return numeral(value).format("0a");
                    }
                }
            }
        ]
    }
}

const buildChartData = (data, casesType='cases') => {
    const chartData = [];
    let lastDataPoint;
    for(let date in data.cases) {
        if(lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint);
        }
     lastDataPoint = data[casesType][date];
        
    }
    return chartData
}

export function LineGraphContainer({casesType = "cases" }){

    const [data,setData] = useState({});

    useEffect(() => {
       const fetchData = async () => {
            await  fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                console.log("show me the history>> " ,data)
                const chartData = buildChartData(data,casesType);
                setData(chartData);
            })
       }
       fetchData();
    },[casesType])

 
    return(
        <LineGraph>
            {data?.length > 0 && (
                <Line
                data={{
                    datasets:[
                        {
                            backgroundColor:"rgba(220, 179, 96 ,0.5)",
                            borderColor:"#DCB360 ",
                            data:data
                        }
                    ]
                }}
                options ={options}
            />
            )}
        </LineGraph>
    )
}