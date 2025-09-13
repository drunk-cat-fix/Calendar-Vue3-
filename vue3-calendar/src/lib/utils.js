//获取tab栏图标的日期
function getIconDate(field) {
    const date = new Date();
    switch (field) {
        case 'day':
            return date.getDate().toString().padStart(2, '0');
        case 'month':
            return date.getMonth().toString().padStart(2, '0');
        case 'year':
            return date.getFullYear().toString().substring(2);
    }
}

//获取当前的日期
function getNowDate(field) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch (field) {
        case 'day':
            return `${year}-${month}-${day}`;
        case 'month':
            return `${month}-${day}`;
        case 'year':
            return `${year}`;
    }
}

export {
    getIconDate,
    getNowDate,

}