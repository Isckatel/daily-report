import React from 'react';
import style from './CurrReport.module.css';

const OneRep = (props) => {
    return (
        <div className={style.tabAll}>
            <div className={style.tabColumn + " " + style.padding}>
                {props.date.getDay() + '-'
                + props.date.getMonth() + '-'
                + props.date.getFullYear()}
            </div>
            <div className={style.tabColumn}>
                {props.projectName}
            </div>
            <div className={style.tabRows}>        
            {
                props.tasks.map(
                    (t)=><div className={style.tabInside}>
                        <div className={style.tabItem}>{t.taskName}</div>
                        <div className={style.tabItem}>t.time</div>
                        <div className={style.tabItemEnd}>{t.percent}</div>
                    </div>
                )
            }
            </div>                                                
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