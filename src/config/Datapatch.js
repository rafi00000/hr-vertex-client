
const Datapatch = async (apiLink, data) => {
    const res = await fetch(`http://localhost:5000/${apiLink}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await res.json()
}

export default Datapatch
