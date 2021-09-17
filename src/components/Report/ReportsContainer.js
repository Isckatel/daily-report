import React from 'react';
import Reports from './Reports';
import {connect} from 'react-redux';


class ReportsContainer extends React.Component {
  render() {
    let reportsDate = this.props.reportsData.map((r)=>({id:r.id, date:r.date}));
    return (
      <Reports reportsDate={reportsDate}/>
    );
  }
}

//state = store.getState()
let mapStateToProps = (state) => ({
  reportsData: state.reports.reportsData
})

export default connect(mapStateToProps)(ReportsContainer);
