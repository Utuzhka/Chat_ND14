
document.querySelector("form.register")?.addEventListener("submit", (e)=>{
    let data = new FormData(e.target)
    let login = data.get("login")
    let password = data.get("password")
    let passwordR = data.get("passwordR")
    e.preventDefault();
    console.log(login, password, passwordR)
    if(password != passwordR){
        alert("gavno napisal, lechiss")
        return
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({login,password})
    }).then(res=>res.json()).then(res=>{
        if(res.status == "ok"){
            window.location = "/login"
        }
    })
})

document.querySelector("form.login")?.addEventListener("submit", (e)=>{
    let data = new FormData(e.target)
    let login = data.get("login")
    let password = data.get("password")
    e.preventDefault();
    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({login,password})
    }).then(res=>res.json()).then(res=>{
        if(res.status == "ok"){
            document.cookie = "token=" + res.token
            document.cookie = "login=" + res.login
            document.cookie = "id=" + res.id
            window.location = "/"
        }
    })
})