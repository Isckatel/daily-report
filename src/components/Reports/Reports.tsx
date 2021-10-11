import css from './Reports.module.css';
import React from 'react'

export type ReportDateType = {id: number, date: Date}

interface IReports {
  reportsDate:Array<ReportDateType>,
  setCurrentReport: (id:number) => void
}

const Reports: React.FC<IReports> = (props:IReports) => {
  let reportsElem = props.reportsDate.map((r)=>{
    return (
      <button onClick={()=>{props.setCurrentReport(r.id)}} className={css.buttList} >
        {r.date.getDay() + '-'
        + r.date.getMonth() + '-'
        + r.date.getFullYear()}
      </button>
    )
  });
  return (
    <div className={css.listReports}>
      {reportsElem}
    </div>
  );
}

export default Reports;
