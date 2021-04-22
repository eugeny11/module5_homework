let arr = [1, 2, 2, 1, 3];

let result = true;

for (let i=0; i<arr.length; i++){
	if (arr[i] != arr[i+1]){
 result = false;
 console.log(result);
 break
  }
  
  else{
  console.log(result);
  }
  
}