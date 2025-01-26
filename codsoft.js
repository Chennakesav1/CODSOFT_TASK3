function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch {
        document.getElementById("result").value = "Error";
    }
}
