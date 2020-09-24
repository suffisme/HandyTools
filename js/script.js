function grey_generate() 
{
	var bits = parseInt(document.getElementById('bits').value);
	var grey = new Array(2**bits);
	grey[0] = '0';
	grey[1] = '1';
	for(var i=1;i<bits;i++)
	{
		var temp = grey.slice(0,2**i);
		for(var j=0;j<2**i;j++)
		{
			grey[j] = '0'+temp[j];
		}
		for(var j=0;j<2**i;j++)
		{
			grey[2**i+j] = '1'+temp[2**i-1-j];
		}
	}
	var Par_element = document.getElementById("output");
	Par_element.innerHTML = '';
	Par_element.style.display = 'flex';
	
	var tag = document.createElement("h3");
   	var text = document.createTextNode('Grey Code For '+ bits + ' Bits :');
   	tag.appendChild(text);
   	Par_element.appendChild(tag);	

	for(var i=0;i<2**bits;i++)
	{
		var tag = document.createElement("span");
   		var text = document.createTextNode(grey[i]);
   		tag.appendChild(text);
   		Par_element.appendChild(tag);	
	}
}