let arr = [1,' ',0,4,null,'жопа',false,undefined,true,NaN];

function killFalse(arr){
	let result = [];
	for(let i=0;i<arr.length;i++){
		if(arr[i]){
			result.push(arr[i]);
		}

	}
	return result;
}


console.log(killFalse(arr));