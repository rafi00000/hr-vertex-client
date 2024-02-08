const DataPost = async (apiLink, data) => {
    const res = await fetch(`http://localhost:5000/${apiLink}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await res.json()
}

export default DataPost
