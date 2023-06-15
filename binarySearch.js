//program to demonstrate binary sort
let arr = [10, 48, 99, 73, 41, 94, 44, 13, 45];
arr.sort();
console.log(arr);
let high = arr.length;
let low = 0;

function BinarySort(arr, high, low, x){
    var mid = ((high + low) / 2);
    console.log("mid value : " +mid);
    mid = Math.floor(mid);
    if(high>low){
        if(arr[mid]===x){
            return mid;
        }
        else if(arr[mid] < x){
            return BinarySort(arr, mid+1, high, x);
        }
        else if(arr[mid] > x){
            return BinarySort(arr, low, mid-1, x);4
        }
    }
    else{
        console.log("target value not present in array");
    }
}
BinarySort(arr, low, high, 73);

