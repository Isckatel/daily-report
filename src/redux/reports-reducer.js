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
      date: new Date(2021,10,1),
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
  ]
}

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reportsReducer;
