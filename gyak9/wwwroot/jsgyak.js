var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

var pascal = document.getElementById("pascal")
for (var i = 0; i < 10; i++) {
    var újSor = document.createElement("div")
    újSor.classList.add("sor")
    pascal.appendChild(újSor)
    for (var s = 0; s <= i; s++) {
        
        var újElem = document.createElement("div")
        újElem.innerHTML = faktoriálisR(i) / (faktoriálisR(s)*faktoriálisR(i-s))
        
        újElem.classList.add("elem")
        újSor.appendChild(újElem)
    }
}
