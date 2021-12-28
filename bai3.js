function timMax2(arr) {
    let max1 = arr[0];
    let max2 ;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1 ;
            max1 = arr[i];

        }
         if (arr[i]>max2 && arr[i]!== max1){

            max2 = arr[i]
        }


    }
    return max2


}

document.write(timMax2([42, 8, 11, 7,13,43]))