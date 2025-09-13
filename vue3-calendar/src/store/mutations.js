export default {
    setHandlerTitle(state, title) {
        switch (title) {
            case 'day':
                state.handlerTitle = '当天信息';
                break;
            case 'month':
                state.handlerTitle = '近期假期';
                break;
            case 'year':
                state.handlerTitle = '当年假期';
                break;
            default:
                state.handlerTitle = '当天信息';
                break;
        }
    },
    setPlaceHolder(state, routerName) {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        switch (routerName) {
            case 'day':
                state.placeHolder = `格式: ${year}-${month}-${day}`;
                break;
            case 'month':
                state.placeHolder = `格式: ${year}-${month}`;
                break;
            case 'year':
                state.placeholder = `格式: ${year}`;
                break;
            default:
                state.placeholder = `格式：${year}-${month}-${day}`;
                break;
        }
    },
    setMaxLength(state, routerName) {
        switch (routerName) {
            case 'day':
                state.maxLength = 8;
                break;
            case 'month':
                state.maxLength = 6;
                break;
            case 'year':
                state.maxLength = 4;
                break;
            default:
                state.maxLength = 8;
                break;
        }
    },
    setField(state, routerName) {
        state.feild = routerName;
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode;
    },

    setData(state, payload) {
        const {field, data} = payload;
        console.log(field);
        console.log(data);
        switch (field) {
            case 'day':
                state.dayData = data;
                break;
            case 'month':
                state.monthData = data;
                break;
            case 'year':
                state.yearData = data;
                break;
        }

    },
}