const SET_CURRENT_REPORT = 'SET_CURRENT_REPORT';

export const setCurrentReport = (id) => ({type:SET_CURRENT_REPORT, id});

let initialState = {
  reportsData:[
    {
      id: 1,
      date: new Date(2021,9,1),
      projectName: 'Ежедневные отчеты',
      tasks: [
        {
        taskName:'Создать проект, установить библиотеки',
        time: new Date(2021,9,1,0,30),
        percent: 100
        },
        {
        taskName:'Верстка страницы',
        time: new Date(2021,9,1,0,30),
        percent: 100
        },
        {
        taskName:'Создание стора',
        time: new Date(2021,9,1,2,30),
        percent: 100
        }
      ]//task
    },//day
    {
      id: 2,
      date: new Date(2021,9,2),
      projectName: 'Ежедневные отчеты',
      tasks: [
        {
        taskName:'Создание презент.-го компонента Edit',
        time: new Date(2021,9,1,1,0),
        percent: 100
        },
        {
        taskName:'Создание контейнерного компонента Edit',
        time: new Date(2021,9,1,2,30),
        percent: 100
        },
        {
        taskName:'Создание презент.-го компонента Reports',
        time: new Date(2021,9,1,0,30),
        percent: 100
        }
      ]//task
    }//day
  ],
  currentReport:null
}

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_REPORT:
      return {
        ...state,
        currentReport: action.id
      }
    default:
      return state;
  }
}



export default reportsReducer;
