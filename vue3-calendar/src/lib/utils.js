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

function formatUserDate(date) {
    switch (date.length) {
        case 8:
            let year = date.substr(0, 4);
            let month = Number(date.substr(4, 2));
            let day = Number(date.substr(6, 2));
            return `${year}-${month}-${day}`;
        case 6:
            year = date.substr(0, 4);
            month = Number(date.substr(4, 2));
            return `${year}-${month}`;
        default:
            return date
    }
}

export {
    getIconDate,
    getNowDate,
    formatDate,
    formatUserDate,
}