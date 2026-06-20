function showMessage() {
    alert("Karibu Kitomari! Uko kwenye IT journey nzuri 🔥");
}
function handleSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Asante " + name + "! Ujumbe wako umetumwa 🔥");

    document.querySelector("form").reset();
}