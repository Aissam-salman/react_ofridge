import { useEffect, useState } from "react";

/**
 *
 * @param {string} url
 * @param {FetchEventInit} options
 * @returns
 */
export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                }
            )
            .catch(e => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);
    return { data, loading, errors };
}