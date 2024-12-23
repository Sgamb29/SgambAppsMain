
// Traffic

const request = new Request("https://server.sgambapps.com", {
    method: "POST",
    headers: {
        "Content-Type": "text/plain"
    },
    body: "sgambapps",
});
fetch(request)
.then(res => {
    if (res.ok) {
    console.log("visit counted");
    }
})
.catch(err => console.log(err));