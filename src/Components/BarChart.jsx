import { ResponsiveBar } from "@nivo/bar";
import { useEffect } from "react";

export const BarChart = ({ data }) => {

  useEffect(() => {
    console.log("Profile Change from barChart")
  }, [data])
    const CustomTooltip = (bar) => (
        <div className='bg-slate-200/10 backdrop-blur-xl text-white px-5 py-2 rounded-md '> 
            <p className="text-neutral-400"><p className="text-white">Date:</p> {bar.data.date}</p>
            <p className="text-neutral-400"><p className="text-white">Hours Watched:</p> {Math.floor(bar.value / 60)} hours {bar.value % 60} min</p>
            <ul className="pl-4">
                {
                    bar.data.details.map( content => (
                        <li className="text-[0.90rem]">{`${content.name}: ${content.time}`}</li>
                    ))
                }
            </ul>
        </div>
    );

    return (
        <div className="w-[59%] h-[100%] bg-[#52545f2d] pt-6 rounded-2xl">
          <h1 className="text-white text-3xl font-medium ml-8 mb-4 inline-block">Your Past <span className="text-[#e50914] font-semibold">7</span> Days Activity</h1>
            <ResponsiveBar 
                data={data}
                keys={['hours']}
                indexBy="date"
                margin={{
                    top: 10,
                    right: 50,
                    bottom: 110,
                    left: 60
                }}
                padding={0.4}
                valueScale={{
                    type: 'linear'
                }}
                indexScale={{
                    type: 'band',
                    round: true
                }}
                colors={['#365085ab']}
                tooltip={ ({ id, value, data}) => <CustomTooltip id={id} value={value} data={data}/>}
                label={ ({formattedValue}) => {
                    return `${Math.floor(formattedValue/60)} min ${formattedValue % 60} min`
                }}
                enableTotals = {true}
                labelTextColor={'white'}
                theme={{
                    axis: {
                      domain: {
                        line: {
                          stroke: "#777777", // Axis line color
                        },
                      },
                      ticks: {
                        line: {
                          stroke: "#888888", // Tick line color
                          strokeWidth: 1,
                        },
                        text: {
                          fill: "#eeeeee", // Tick label color
                          fontFamily: "Netflix Sans",
                          fontWeight: 500,
                          fontSize: 12, // Tick label font size
                        },
                      },
                      legend: {
                        text: {
                          fill: "#cccccc", // Axis legend color
                          fontSize: 6,
                        },
                      },
                    },
                  }}
            />
        </div>
        
    );
}