import { useEffect, useState } from "react";
import { connect } from "react-redux";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import HoclChart from "./../../components/hocl-chart";
import { fetchHistoricData } from "./actions";

export const Dashboard = ({ fetchHistoricData, historicData, isPending, error, volume }) => {
  const intervalData =[200, 400, 600,800,1000,1200,1400,1600,1800];

  const [interval, setInterval] = useState(0);
  useEffect(() => {
    fetchHistoricData(interval);
  }, [interval, fetchHistoricData]);
  const handleSelect=(e)=>{
    setInterval(e);
  }
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <label>Number of Data</label>
        <DropdownButton
          alignRight
          title={intervalData[interval]}
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          {intervalData.map((val,index) => (<Dropdown.Item key={`item-${index}`} eventKey={index} >{val}</Dropdown.Item>))}
        </DropdownButton>
      </div>
      <HoclChart data={historicData} volume={volume}></HoclChart>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHistoricData: (interval) => dispatch(fetchHistoricData(interval)),
  };
};
const mapStateToProps = (state) => ({
  historicData: state.historicDataReducer.historicData,
  volume: state.historicDataReducer.volume,
  isPending: state.historicDataReducer.isPending,
  error: state.historicDataReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
