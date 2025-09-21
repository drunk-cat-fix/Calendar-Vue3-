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
            return `${year}-${month}`;
        case 'year':
            return `${year}`;
    }
}

function formatDate(date, field) {
    let splitDate = date.split('-');
    switch (field) {
        case 'day':
            return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日`;
        case 'month':
            return `${splitDate[0]}年${splitDate[1]}月`;
        case 'year':
            return `${splitDate[0]}年`;
    }
}

export {
    getIconDate,
    getNowDate,
    formatDate,
}