
import './App.css'
import { Chart } from "react-google-charts"


function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
   const options = {
    is3D: true,
  };
  const data1 = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["China", 700],
  ];
  return(<div>
    <h3>My Daily Activities</h3>
  <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100vh"}
      height={"500px"}
    />
    <h3>Popularity</h3>
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100vh"
      height="500px"
      data={data1}
    />
  </div>)
}

export default App
