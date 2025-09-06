const main = document.getElementById("root");

function loadPage(path) {
    switch (path) {
        case "":
            main.innerHTML = "<h1>Home Page</h1>";
            break;
        case "/about":
            main.innerHTML = "<h1>About Page</h1>";
            break;
        case "/contact":
            main.innerHTML = "<h1>Contact Page</h1>";
            break;
        case "/help":
            main.innerHTML = "<h1>Help Page</h1>";
            break;
        default:
            main.innerHTML = "<h1>Page Not Found</h1>";
    }
}

function route() {
    let hash = location.hash.replace("#", "");
    console.log(hash);
    loadPage(hash);
}

window.addEventListener("hashchange", route);
window.addEventListener("load", route);