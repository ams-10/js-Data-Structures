// //program to demonstrate binary sort
// let arr = [10, 48, 99, 73, 94, 44, 13, 45];
// let high = arr.length;
// let low = 0;

// function BinarySort(arr, high, low, x){
//     var mid = ((high + low) / 2);
//     console.log("mid value : " +mid);
//     mid = Math.floor(mid);
//     if(high>low){
//         if(arr[mid]===x){
//             return mid;
//         }
//         else if(arr[mid] < x){
//             BinarySort(arr, mid+1, high, x);
//         }
//         else if(arr[mid] > x){
//             BinarySort(arr, low, mid-1, x);
//         }
//     }
//     else{
//         console.log("target value not present in array");
//     }
// }
// BinarySort(arr, low, high, 73);
let arr = [10, 48, 99, 73, 94, 44, 13, 45];
let high = arr.length;
let low = 0;

function BinarySort(arr, high, low, x) {
    var mid = Math.floor((high + low) / 2);
    console.log("mid value: " + mid);

    if (high > low) {
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            return BinarySort(arr, high, mid + 1, x);
        } else if (arr[mid] > x) {
            return BinarySort(arr, mid - 1, low, x);
        }
    } else {
        console.log("target value not present in array");
        return -1; // Return a default value indicating the target value was not found
    }
}

console.log(BinarySort(arr, high, low, 44));
