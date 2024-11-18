

// Traffic
async function counterCall() {
    const request = new Request("https://server.sgambapps.com", {
        method: "POST",
        body: "sgambappsmain",
    });
    try {
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);

        }
    } catch (error) {
        console.log(error.message);
    }
}

counterCall();