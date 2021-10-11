import React from 'react';
import style from './CurrReport.module.css';
import {ReportElemType}from './CurrReportContainer';

type PropsOneRep = {
    reportElem: ReportElemType
}

const OneRep:React.FC<PropsOneRep> = (props:PropsOneRep) => {
    return (
        <div className={style.tabAll}>
            <div className={style.tabColumn + " " + style.padding}>
                {props.reportElem.date.getDay() + '-'
                + props.reportElem.date.getMonth() + '-'
                + props.reportElem.date.getFullYear()}
            </div>
            <div className={style.tabColumn}>
                {props.reportElem.projectName}
            </div>
            <div className={style.tabRows}>        
            {
                props.reportElem.tasks.map(
                    (t)=><div className={style.tabInside}>
                        <div className={style.tabItem}>{t.taskName}</div>
                        <div className={style.tabItem}>
                            {[t.time.getHours(), t.time.getMinutes()].map(function (x) {
                                return x < 10 ? "0" + x : x}).join(":")}
                        </div>
                        <div className={style.tabItemEnd}>{t.percent}</div>
                    </div>
                )
            }
            </div>                                                
        </div>
    );
}

export default OneRep