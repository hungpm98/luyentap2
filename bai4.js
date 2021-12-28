function tinhHieu(arr) {
    let Minus =arr[0];
    for(let i = 1; i<arr.length; i++){
        Minus -= arr[i];

    }
    return Minus;

}
document.write(tinhHieu([1,2,3]))