function kk_price() {
    let frist_p = document.getElementById("f_price").value
    let one_price = document.getElementById("the_result_1").value
    let last_price = frist_p - one_price
    document.getElementById("the_result_2").value = last_price.toFixed(2)
}
document.getElementById("math_2").addEventListener('click', kk_price)

function k_price() {
    let frist_p = document.getElementById("f_price").value
    let percent_p = document.getElementById("percent").value
    var percent_result = (frist_p * percent_p) / 100
    document.getElementById("the_result_1").value = percent_result.toFixed(2)
}
document.getElementById("math_1").addEventListener('click', k_price)