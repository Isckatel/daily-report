import css from './Reports.module.css';

const Reports = (props) => {
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
