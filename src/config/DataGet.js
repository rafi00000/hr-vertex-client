const DataGet = async (apiLink) => {
    const res = await fetch(`http://localhost:5000/${apiLink}`, {
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        next: { revalidate: 10 }
    })
    return await res.json()
}

export default DataGet
