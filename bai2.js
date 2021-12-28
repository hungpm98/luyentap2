
function demSo(arr,x) {
    let count = 0;
    for (let i = 0 ; i<arr.length; i++){
        if(arr[i] == x){
            count ++;
        }
    }
    return count;


}
document.write(demSo([1,2,3,4,1,1],1))