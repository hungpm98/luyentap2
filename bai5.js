function tichSNT(arr) {
    let tich = 1;
    for (let i = 0; i < arr.length; i++) {
        if (checkSNT(arr[i])) {
            tich *= arr[i];
        }
    }
    return tich;

}

function checkSNT(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;

}

document.write(tichSNT([1, 2, 5, 9, 7, 4]))