// Get Data
import {getDayDate, getMonthDate, getYearDate} from './request';


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
    console.log('data', data);
    store.commit('setErrorCode', data.errorCode);
    if (data.errorCode !== 0) {
        return;
    }

    store.commit('setData', {
        field,
        data,
    });

}

export default getData;