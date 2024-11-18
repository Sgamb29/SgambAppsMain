

// Traffic
async function counterCall() {
    const request = new Request("https://server.sgambapps.com", {
        method: "POST",
        body: "sgambappsmain",
    });

    const response = await fetch(request);
}

counterCall();