document.querySelector('#balance').oninput = () => {
    let balance = document.getElementById('balance').value;
let money = document.getElementById('money').value;

document.getElementById('balanced').value = Number(balance) - Number(money);
document.querySelector('#h1').innerHTML = document.getElementById('balanced').value;
}