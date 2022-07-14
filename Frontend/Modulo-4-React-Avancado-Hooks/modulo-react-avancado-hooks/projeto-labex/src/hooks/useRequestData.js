import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect (() => {
        setIsLoading(true);
        axios
        .get(url)
        .then(({data}) => {
            setIsLoading(false)
            setData(data.trips)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [url])

    return [data, isLoading, error]
}