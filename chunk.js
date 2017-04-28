let arr = [1,2,4,5,123,7,41,3,3,3,412,34,265];

console.log('start array = '+arr);

let chunk  = function(arr,size){
	if(arr.length<1){return []}
		
	let result = [];
    let num = 0;

	for(let i=0;i<arr.length;i+=size){

		result[num] = [];

		for (let j=0;j<size;j++){
				if(arr[i+j]){
					result[num].push(arr[i+j]);
				}
		}
		num++;
	}

	return result;


}

console.log(chunk(arr, 2));