import React from 'react';

const OneRep = (props) => {
    return (
        <div>
            <div>
                {props.date.getDay() + '-'
                + props.date.getMonth() + '-'
                + props.date.getFullYear()}
            </div>
            <div>
                {props.projectName}
            </div>         
            {
                props.tasks.map(
                    (t)=><div>
                        <div>{t.taskName}</div>
                        <div>t.time</div>
                        <div>{t.percent}</div>
                    </div>
                )
            }                                               
        </div>
    );
}


const CurrReport = (props) => {
    let oneRepData;
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