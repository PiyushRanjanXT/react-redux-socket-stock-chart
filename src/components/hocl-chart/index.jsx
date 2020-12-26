import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const HoclChart = ({ data, volume }) => {
  const getOptions = (data, volume) => {
    return {
      boost: {
        useGPUTranslations: true,
        seriesThreshold: 0,
      },
      xAxis: [
        {
          labels: {
            align: "left",
            style: {
              color: "blue",
            },
          },
        },
        {
          labels: {
            align: "left",
            style: {
              color: "#000",
            },
          },
        },
      ],
      yAxis: [
        {
          labels: {
            align: "left",
            style: {
              color: "blue",
            },
          },
          height: "80%",
          resize: {
            enabled: true,
          },
        },
        {
          labels: {
            align: "left",
          },
          top: "80%",
          height: "20%",
          offset: 0,
          style: {
            color: "blue",
          },
        },
      ],

      title: {
        text: "Summary",
      },
      plotOptions: {
        ohlc: {
          color: "red",
          upColor: "green",
        },
      },
      series: [
        {
          type: "ohlc",
          name: "INFY",
          data: data,
        },
        {
          type: "column",
          name: "Volume",
          data: volume,
          yAxis: 1,
          color: "blue",
        },
      ],
    };
  };
  return (
    data && (
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={getOptions(data, volume)}
      />
    )
  );
};
export default HoclChart;
