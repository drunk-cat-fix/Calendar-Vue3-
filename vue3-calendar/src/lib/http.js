import axios from "axios";
import KEY from '@/configs/keys';
import qs from 'qs';
/**
 * This file aims to encapsulate the Axios Object.
 */

/**
 *
 * @param options   The options for date, month and year
 * @return If Success, the corresponding information will be returned,
 * If failed, illustrates the error message
 */
export const axiosPost = options => {
    // console.log(KEY);
    // console.log(options.url);
    axios.post(
        options.url,
        qs.stringify({
                key: KEY,
                ...options.data,
            },
            {
                encode: false,
            }
        ),
    ).then(res => {
        options.success(res.data);
    }).catch(err => {
        options.error(err);
    });
};

/**
 *
 * @param options   The options for date, month and year
 * @return If Success, the corresponding information will be returned,
 * If failed, illustrates the error message
 */
export const axiosGet = options => {
    axios.get(options.url, {
        params: {
            key: KEYS,
            ...options.data,
        },
    }).then(res => {
        options.success(res.data);
    }).catch(err => {
        options.error(err);
    });
}

export default {
    axiosGet,
    axiosPost,
}