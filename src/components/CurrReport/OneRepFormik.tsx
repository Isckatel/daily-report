import React from 'react';
import style from './CurrReport.module.css';
import {ReportElemType}from './CurrReportContainer';
import { Formik, Field, Form, FieldArray, FormikHelpers } from 'formik';

type PropsOneRep = {
    reportElem: ReportElemType
}

type TaskType = {
    taskName: string;
    time: Date;
    percent: number;
}

type TasksType = Array<TaskType>

interface Values {
    dateReport: string,
    projectName:string,
    tasks: TasksType
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
                projectName:props.reportElem.projectName,
                tasks: props.reportElem.tasks
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<any>
              ) => {
                alert('Click');                 
            }}
            render={({ values }) => (
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
                                    <div className={style.tabItem}>
                                        {t.taskName}
                                    </div>
                                    <div className={style.tabItem}>
                                        {[t.time.getHours(), t.time.getMinutes()].map(function (x) {
                                            return x < 10 ? "0" + x : x}).join(":")}
                                    </div>
                                    <div className={style.tabItemEnd}>
                                        {t.percent}
                                    </div>
                                </div>
                        )
                    }

                    <FieldArray
                        name="tasks"
                        render={arrayHelpers => (
                        <div>
                            {values.tasks.map((task, index) => (
                            <div key={index}>
                                {/** both these conventions do the same */}
                                <Field name={`tasks[${index}].taskName`} />
                                <Field name={`tasks.${index}.percent`} />
                    
                                <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                -
                                </button>
                            </div>
                            ))}
                            <button
                            type="button"
                            onClick={() => arrayHelpers.push({ name: '', age: '' })}
                            >
                            +
                            </button>
                        </div>
                        )}
                    />
                    </div>                                                
                </div>
        </Form>            
            )}
         >
        
        </Formik>
    );
}

export default OneRep