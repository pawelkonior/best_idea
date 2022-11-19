import axiosPublic from "./axios";


export async function handleDataFromAPI({
                                            endpoint,
                                            method = "GET",
                                            body,
                                            credentials = false,
                                        } = {}) {
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

    const response = await axiosPublic({url: `/${endpoint}`, ...options});

    if (response.status === 401) {
        throw new Error("User is not logged in");
    }

    return response;
}