//program to demonstrate binary sort
const arr = [10,20,22,36,47,88,95];
console.log("\n" + arr +"\n");
let high = arr.length;
console.log("length of array is :" + high + "\n");
let low = 0;

function binarySort(arr, low, high, x){
    if(high < low || arr.length === 0) return -1;
        let mid = low + Math.floor((high - low) / 2);
        if(arr[mid] === x){
            return mid;
        }
        else if(x > arr[mid]){
            return binarySort(arr, mid+1, high, x);
        }
        else if (x <arr[mid]){
            return binarySort(arr, low, mid-1, x);
        }
        else{
            return console.log("value not found in array");
        }
}

console.log("value present at index " + binarySort(arr, low, high, 95) + "\n");
