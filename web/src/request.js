export async function handleDataFromAPI(
    {
        endpoint,
        method = "GET",
        body,
    } = {}) {

    console.log(endpoint)
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTAwOTUyLCJpYXQiOjE2Njg5MDg5NTIsImp0aSI6IjJjM2Y2NDE2YzJlZTQ2YTRiNjQ1OTlhODY1YWVkYjgwIiwidXNlcl9pZCI6MX0.1pxGdWVV2B9xlOgY7u4YZbUBjSmucHYJqsKIhhyCp3E",
        },
    };

    if (body !== undefined) {
        options["data"] = JSON.stringify(body);
    }

    const response = await fetch(`http://0.0.0.0:8000/api/v1/${endpoint}`, options);

    if (response.status === 401) {
        throw new Error("User is not logged in");
    }
    console.log(response)

    const data = await response.json()
    console.log("Data", data)
    return data
}
