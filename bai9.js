let n=+prompt('nhap vao so n')
function tinh(n) {
    let giaithua = 1;
    for (i=1;i<n;i++){
        giaithua *=i;
    }
    return giaithua;

}
document.write(tinh(n));