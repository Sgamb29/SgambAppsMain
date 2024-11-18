

// Traffic
async function counterCall() {
    const request = new Request("http://159.203.39.191:3000/", {
        method: "POST",
        body: "sgambappsmain",
    });

    const response = await fetch(request);
}

counterCall();