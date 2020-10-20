const dec2base = () =>{
	var dec = parseInt(document.getElementById('dec').value);
	var base = parseInt(document.getElementById('base').value);
	if(base>16){
		document.getElementById('output').innerHTML = 'Use base less than 16';
		return;
	}
	var arr = []
	while (dec>0)
	{
		var r = dec%base;
		if(r<10){
			arr.push(String.fromCharCode(r+48));
		}else{
			arr.push(String.fromCharCode(r+55));
		}
		dec = parseInt(dec/base);
	}
	arr.reverse();
	console.log(arr);
	document.getElementById('output').innerHTML = arr.join("");
}