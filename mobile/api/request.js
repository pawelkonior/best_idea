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
        },
    };

    if (body !== undefined) {
        options["data"] = JSON.stringify(body);
    }

    if (credentials) {
        options.headers["Authorization"] = `Bearer ${credentials}`;
    }

    const response = await fetch(`http://localhost:3001/${endpoint}`, options);

    if (response.status === 401) {
        throw new Error("User is not logged in");
    }
    console.log(response)

    return await response.json();
}