import { useEffect } from "react";
import { connect } from "react-redux";
import { initSocket, closeSocket } from "./actions";
import HoclChart from "./../../components/hocl-chart";

const LiveChart = ({
  initSocketCall,
  closeSocketCall,
  liveChartData,
  liveChartVolume,
}) => {
  useEffect(() => {
    initSocketCall();
    return () => {
      closeSocketCall();
    };
  },[closeSocketCall,initSocketCall]);

  return (
    <>
      <h1>Live HOCL Chart</h1>
      {liveChartData && (
        <HoclChart data={liveChartData} volume={liveChartVolume} />
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    initSocketCall: () => dispatch(initSocket()),
    closeSocketCall: () => dispatch(closeSocket()),
  };
};
const mapStateToProps = (state) => ({
  liveChartData: state.liveChartReducer.liveChartData,
  liveChartVolume: state.liveChartReducer.liveChartVolume,
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveChart);
