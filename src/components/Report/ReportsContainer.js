

class ReportsContainer extends React.Component {
  render() {
    let reportsDate = this.props.reportsData.map((r)=>{{id:r.id,date:r.date}});
    return (
      <Reports reportsDate={reportsData}/>
    );
  }
}

//state = store.getState()
let mapStateToProps = (state) => ({
  reportsData: state.reports.reportsData
})

export default connect(mapStateToProps)(ReportsContainer);
