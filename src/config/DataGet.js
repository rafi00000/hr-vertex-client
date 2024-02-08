import React from 'react'

const DataGet = async (apiLink) => {
    const res = await fetch(`http://localhost:5000/${apiLink}`, {
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        next: { revalidate: 3600 }
    })
    return await res.json()
}

export default DataGet
