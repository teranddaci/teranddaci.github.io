window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const body = document.body;

    if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    body.style.opacity = "1";
});
