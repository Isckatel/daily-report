import React from "react"
import CurrReport from "./CurrReport"
import {connect, ConnectedProps} from 'react-redux'
import {setCurrentReport} from '../../redux/reports-reducer'
import {StateType} from '../../redux/store'

let mapStateToProps = (state:StateType) => ({
    reports: state.reports
});

const connector = connect(mapStateToProps, {setCurrentReport})

export type PropsReportsType = ConnectedProps<typeof connector>
export type ReportElemType = PropsReportsType['reports']['reportsData'][number]

class CurrReportContainer extends React.Component<PropsReportsType> {
    render() {
        return (
            <CurrReport {...this.props}/>
        );
    }
}

export default connect(mapStateToProps, {setCurrentReport})(CurrReportContainer)