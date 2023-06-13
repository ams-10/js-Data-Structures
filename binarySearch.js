let arr = [22, 10, 45, 78, 35, 21, 45, 66];
let h = arr.length;
let l = 0;
function BinarySort(arr, l, h, x){
    if(h >= l){
        mid = Math.floor(h+l/2);
    
    if(arr[mid]==x){
        return mid;
    }
    if(arr[mid]>x){
        return BinarySort(arr, l, mid-1, x);
    }
    return BinarySort(arr,mid+1, h, x);
    
    return -1;}
    }

BinarySort(arr, 0, h-1, 21);



