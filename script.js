function greetUser() {
    var name = document.getElementById("name").value;
    var greetingMessage = document.getElementById("greetingMessage");
    if (name) {
        greetingMessage.textContent = "Chào " + name + "!";
    } else {
        greetingMessage.textContent = "Vui lòng nhập tên của bạn.";
    }
}
