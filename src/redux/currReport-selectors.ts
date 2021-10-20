import {createSelector} from "reselect"
import {StateType} from './store'
import {PropsReportsType} from '../components/CurrReport/CurrReportContainer'
const getReports = (state:StateType) => state.reports

//@ts-ignore
//Превращаем дату в нужный формат строки
// export const getReportSelector = createSelector(getReports,
//     (reports:any) => {
//         reports.reportsData.map( (r:any) => {
//             return {
//                 ...r,
//                 tasks: r.tasks.map( (t:any) => {
//                     let str = [t.time.getHours(), t.time.getMinutes()].map((x) => {
//                         return x < 10 ? "0" + x : x}).join(":")
//                     return {...t, time: str}
//                 }) 
//             }
//         })
//     }
// )
export const getReportSelector = createSelector(getReports,
    (reports:any) => {
        return {
            ...reports,
            reportsData:reports.reportsData.map( (r:any) => {
                            return {
                                ...r,
                                tasks: r.tasks.map( (t:any) => {
                                    let str = [t.time.getHours(), t.time.getMinutes()].map((x) => {
                                        return x < 10 ? "0" + x : x}).join(":")
                                    return {...t, time: str}
                                }) 
                            }
            })
        }
    }
)