let arr = [10, 20, 30, 40, 50];
var x = 40;
let len = arr.length;
function search(arr ,x){
    for(let i=0; i<len; i++){
        if(arr[i] === x){
            console.log(arr[i]+" "+i);
            break;
        }
        else{
            console.log("element not found")
        }
}
}
search(arr ,x);



