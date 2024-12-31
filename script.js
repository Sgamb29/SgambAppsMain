
// Traffic

const request = new Request("https://server.sgambapps.com/?site=sgambapps", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({site: "sgambapps"}),
});
fetch(request)
.then(res => {
    if (res.ok) {
    console.log("visit counted");
    }
})
.catch(err => console.log(err));
