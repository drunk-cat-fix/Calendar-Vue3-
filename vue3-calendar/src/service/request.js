import {axiosPost, axiosGet} from "@/lib/http"


// 获取当天的数据
export const getDayDate = day => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/day",
            data: {
                'date': day,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            },
        })
    })
};

//获取月份里面的假期
export const getMonthDate = yearMonth => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/month",
            data: {
                'year-month': yearMonth,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            },
        })
    })
};

// 获取当年的假期
export const getYearDate = year => {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/year",
            data: {
                year,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            },
        })
    })
};

/**
 *
 * @param day
 * @return {Promise<unknown>}
 */
const getDayDateByGet = day => {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/day",
            data: {
                'date': day,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        })
    })
};

/**
 *
 * @param month
 * @return {Promise<unknown>}
 */
const getMonthDateByGet = month => {

    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/month",
            data: {
                'year-month': month,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            },
        })
    })
}

/**
 *
 * @param year
 * @return {Promise<unknown>}
 */
const getYearDateByGet = year => {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/year",
            data: {
                year,
            },
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            },
        })
    })
}


export default {
    getDayDate,
    getMonthDate,
    getYearDate,
    getDayDateByGet,
    getMonthDateByGet,
    getYearDateByGet,
}