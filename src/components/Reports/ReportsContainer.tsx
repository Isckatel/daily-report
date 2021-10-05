import React from 'react';
import Reports, {ReportDateType} from './Reports';
import {connect, ConnectedProps} from 'react-redux';
import {StateType} from '../../redux/store'

let mapStateToProps = (state:StateType) => ({
  reportsData: state.reports.reportsData
})

const connector = connect(mapStateToProps)

type PropsReportsType = ConnectedProps<typeof connector>

const ReportsContainer = (props:PropsReportsType) => {  
  let reportsDate:Array<ReportDateType> = props.reportsData.map(
    (r)=>({id:r.id, date:r.date})
  );  
  return (
    <Reports reportsDate={reportsDate}/>
  );  
}

export default connect(mapStateToProps)(ReportsContainer);
