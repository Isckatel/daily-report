import React from 'react';

const CurrReport = (props) => {
    props.reports.
    return (
        <div>
            {
            props.reports.currentReport===null
            ?<div>Отчет не выбран.</div>
            :<div>Тут будет отчет</div>            
            }        
        </div>
    );
}

export default CurrReport;