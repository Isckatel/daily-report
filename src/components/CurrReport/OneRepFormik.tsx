import React from 'react';
import style from './CurrReport.module.css';

import { Formik, Field, Form, FieldArray, FormikHelpers } from 'formik';

type PropsOneRep = {
    reportElem: any
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
                    <div className={style.titleTab}>
                        <div className={style.titleItem + " " + style.titDate}>Дата</div>
                        <div className={style.titleItem + " " + style.nameProj}>Проект</div>
                        <div className={style.titleItem + " " + style.per15}>Задача</div>
                        <div className={style.titleItem + " " + style.per15}>Время</div>
                        <div className={style.titleItem + " " + style.per15}>Выполнение, %</div>
                    </div>
                    <div className={style.contentTab}>
                        <div className={style.tabColumn + " " + style.padding + '' +style.titDate }>
                            <Field id="dateReport" name="dateReport" /> 
                        </div>
                        <div className={style.tabColumn}>
                            <Field component="textarea" id="projectName" name="projectName" /> 
                        </div>
                        <div className={style.tabRows}> 
                            <FieldArray
                                name="tasks"
                                render={arrayHelpers => (
                                <div>
                                    {values.tasks.map((task, index) =>{                                
                                        return (
                                            <div className={style.tabInside} key={index}>
                                                {/** both these conventions do the same */}
                                                <Field className={style.itemTask} name={`tasks[${index}].taskName`} />
                                                <Field className={style.itemTime} name={`tasks.${index}.time`} />
                                                <Field className={style.itemPerc} name={`tasks.${index}.percent`} />
                                            </div>
                                        )}
                                    )}
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
                </div>
        </Form>            
            )}
         >
        
        </Formik>
    );
}

export default OneRep