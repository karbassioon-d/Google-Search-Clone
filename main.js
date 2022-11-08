const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&ei=9Z1PY_qFA9eU2roP8_utyAw&ved=0ahUKEwi61PHf2ev6AhVXilYBHfN9C8kQ4dUDCA4&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyDwguENQCEMgDELADEEMYATIPCC4Q1AIQyAMQsAMQQxgBMg8ILhDUAhDIAxCwAxBDGAFKBAhBGABKBAhGGABQ9gRY9gRgtgZoAXABeACAAQCIAQCSAQCYAQCgAQHIAQvAAQHaAQQIARgI&sclient=gws-wiz"
}