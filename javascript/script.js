document.getElementById("input-box").innerHTML = " ";
document.getElementById("output-box").innerHTML = " ";


document.getElementById("clearInputBtn").onclick = function () {
    document.getElementById("input-box").innerHTML = " "
}

document.getElementById("clearOutputBtn").onclick = function () {
    document.getElementById("output-box").innerHTML = " "
}


// alert Name 
document.getElementById("alertName").onclick = function () {
    let userName = "kashif ali"
    alert(userName)
    document.getElementById("input-box").innerHTML = userName
}

// alert Number 
document.getElementById("alertNumber").onclick = function () {
    let number = 100
    alert(number)
    document.getElementById("input-box").innerHTML = number
}

// show variables 
document.getElementById("variableNames").onclick = function () {
    document.getElementById("output-box").innerHTML = "<ul><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
}

// show camelCase 
document.getElementById("camelCase").onclick = function () {
    document.getElementById("output-box").innerHTML = "weAreLearningJavaScript"
}





