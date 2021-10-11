import React from 'react';
import style from './CurrReport.module.css';
import {ReportElemType}from './CurrReportContainer';
import { Formik, Field, Form, FormikHelpers } from 'formik';

type PropsOneRep = {
    reportElem: ReportElemType
}

const OneRep:React.FC<PropsOneRep> = (props:PropsOneRep) => {
    let str = props.reportElem.date.getDay() + '-'
    + props.reportElem.date.getMonth() + '-'
    + props.reportElem.date.getFullYear();
    return (
        <Formik
            enableReinitialize={true}
            initialValues = {{
                dateReport: str,
                projectName:props.reportElem.projectName
            }}
            onSubmit={(
                values: any,
                { setSubmitting }: FormikHelpers<any>
              ) => {
                alert('Click');                 
              }}
        >
        <Form>
        <div className={style.tabAll}>
            <div className={style.tabColumn + " " + style.padding}>
                <Field id="dateReport" name="dateReport" /> 
            </div>
            <div className={style.tabColumn}>
                <Field component="textarea" id="projectName" name="projectName" /> 
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
        </Form>
        </Formik>
    );
}

export default OneRep