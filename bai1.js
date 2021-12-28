let n = +prompt('nhap vao nam')
function kiemTra(n) {
    if ((n%4 ==0 && n %100!==0 && n %400!==0)  || (n%100==0 && n%400==0)){
        document.write(n+ " la nam nhuan");
        return n;
    }else {
        document.write(n+" khong phai nam nhuan")
    }


    
}
kiemTra(n);