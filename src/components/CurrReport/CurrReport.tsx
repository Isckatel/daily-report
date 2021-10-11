import React from 'react';
import style from './CurrReport.module.css';
import OneRep from './OneRep';
import {PropsReportsType, ReportElemType} from './CurrReportContainer'

const CurrReport: React.FC<PropsReportsType> = (props:PropsReportsType) => {
    let oneRepData: ReportElemType;
    if (props.reports.currentReport){
        oneRepData = props.reports.reportsData[props.reports.currentReport-1];
    } else {
        oneRepData = {
            id: 1000,
            date: new Date(),
            projectName: 'Нет текущего отчета',
            tasks: []
        }
    }    
    return (
        <div>
            {
            props.reports.currentReport===null
            ?<div>Отчет не выбран.</div>
            :<OneRep reportElem={oneRepData} />           
            }        
        </div>
    );
}

export default CurrReport;