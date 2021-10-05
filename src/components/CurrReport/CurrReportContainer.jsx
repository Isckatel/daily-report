import React from "react";
import CurrReport from "./CurrReport";
import {connect} from 'react-redux';
import {setCurrentReport} from '../../redux/reports-reducer';

class CurrReportContainer extends React.Component {
    render() {
        return (
            <CurrReport {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    reports: state.reports
});

export default connect(mapStateToProps, {setCurrentReport})(CurrReportContainer);