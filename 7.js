let arr = [1,2,3,4,5];
let odd = 0;
let even = 0;
let zero = 0;
for (let i=0; i <= arr.length; i++){
if (arr[i] == arr[0]){
zero +=1;
}
else if (arr[i] % 2 == 0){
even +=1;
}
else if (arr[i] % 2 != 0){
odd +=1;
}
}
console.log(even + ' - количество чётных элеметов');
console.log(odd + ' - количество нечётных элементов');
console.log(zero + ' - количество нулевых элементов');