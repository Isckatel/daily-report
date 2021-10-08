import React from 'react';
import style from './CurrReport.module.css';
import OneRep from './OneRep';
import {PropsReportsType, ReportElemType} from './CurrReportContainer'

const CurrReport: React.FC<PropsReportsType> = (props:PropsReportsType) => {
    let oneRepData: ReportElemType;
    if (props.reports.currentReport){
        oneRepData = props.reports.reportsData[props.reports.currentReport-1];
    }    
    return (
        <div>
            {
            props.reports.currentReport===null
            ?<div>Отчет не выбран.</div>
            :<OneRep {...oneRepData} />           
            }        
        </div>
    );
}

export default CurrReport;