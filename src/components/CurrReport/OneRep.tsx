import React from 'react';
import style from './CurrReport.module.css';
import {ReportElemType}from './CurrReportContainer';

const OneRep:React.FC<ReportElemType> = (props:ReportElemType) => {
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

export default OneRep