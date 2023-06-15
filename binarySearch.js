//program to demonstrate binary sort
let arr = [10, 12, 16, 19, 24, 45, 34, 92];
let high = arr.length;
let low = 0;

function BinarySort(arr, high, low, x){
    var mid = ((high + low) / 2);
    console.log("mid value : " +mid);
    mid = Math.floor(mid);
        if(arr[mid]===x){
            return mid;
        }
        else if(arr[mid] < x){
            return BinarySort(arr, mid+1, high, x);
        }
        else if(arr[mid] > x){
            return BinarySort(arr, low, mid-1, x);
}
    else{
        console.log("target value not present in array");
    }
}
BinarySort(arr, low, high, 73);

