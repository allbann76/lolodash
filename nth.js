/*
Gets the element at index n of array. If n is negative,
the nth element from the end is returned.
*/
let arr  = ['a','b','f','c','d',];

function nth(arr,num){
	if(num<0 ){
		if(num*-1<arr.length-1){
			return arr[arr.length+num];
		}else{
			console.log('very big ;)');
			return;
		}
	}else{
		return arr[num];
	}
}

console.log(nth(arr,-2));