import css from './Reports.module.css';
import React from 'react'

export type ReportDateType = {id: number, date: Date}

interface IReports {
  reportsDate:Array<ReportDateType>
}

const Reports: React.FC<IReports> = (props:IReports) => {
  let reportsElem = props.reportsDate.map((r)=>{
    return (
      <p className={css.elemList}>{r.date.getDay() + '-'
       + r.date.getMonth() + '-'
       + r.date.getFullYear()}</p>
    )
  });
  return (
    <div className={css.listReports}>
      {reportsElem}
    </div>
  );
}

export default Reports;
