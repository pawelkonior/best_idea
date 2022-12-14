export async function handleDataFromAPI(
    {
        endpoint,
        method = "GET",
        body,
        credentials = false,
    } = {}) {

    console.log(endpoint)
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTAwOTUyLCJpYXQiOjE2Njg5MDg5NTIsImp0aSI6IjJjM2Y2NDE2YzJlZTQ2YTRiNjQ1OTlhODY1YWVkYjgwIiwidXNlcl9pZCI6MX0.1pxGdWVV2B9xlOgY7u4YZbUBjSmucHYJqsKIhhyCp3E`
        },
    };

    if (body !== undefined) {
        options["data"] = JSON.stringify(body);
    }

    const response = await fetch(`http://localhost:8000/${endpoint}`, options);

    if (response.status === 401) {
        throw new Error("User is not logged in");
    }
    console.log(response)

    return await response.json();
}
