// Get Data
import {getDayDate, getMonthDate, getYearDate} from './request';
import {formatDate} from "@/lib/utils";

export const getData = async (store, field, currentDate) => {
    let data = {};
    switch (field) {
        case 'day':
            data = await getDayDate(currentDate);
            break;
        case 'month':
            data = await getMonthDate(currentDate);
            break;
        case 'year':
            data = await getYearDate(currentDate);
            break;
        default:
            break;
    }
    console.log("try to get data " + data)
    console.log('data', data);
    store.commit('setErrorCode', data.error_code);
    console.log("error_code is :" + store.state.errorCode);
    if (data.error_code !== 0) {
        return;
    }

    let res = null;
    switch (field) {
        case 'day':
            res = data.result.data;
            // The process for date
            res.data = formatDate(res.date, 'day');
            res['year-month'] = formatDate(res['year-month'], 'month');
            break;
        case 'month':
            res = data.result.data.holiday_array;
            for (let item of res) {
                item.festival = formatDate(item.festival, 'day');
            }
            console.log(res);
            break;
        case 'year':
            res = data.result.data.holiday_list;
            for (let item of res) {
                item.startday = formatDate(item.startday, 'day');
            }
            break;
    }

    store.commit('setData', {
        field,
        data: res,
    });

    console.log("The data is " + data);
    console.log("The data in vuex is ", store.state.dayData)
}
export default getData