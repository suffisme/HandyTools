function grey_generate() 
{
	var bits = parseInt(document.getElementById('bits').value);
	var Par_element = document.getElementById("output");
	Par_element.innerHTML = '';
	Par_element.style.display = 'flex';
	document.getElementById('image').style.display = 'none';
	if(bits<=16)
	{
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
		var tag = document.createElement("h3");
	   	var text = document.createTextNode('Grey Code For '+ bits + ' Bits : (Total Numbers = '+String(2**bits)+ ' )');
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
	else
	{
		Par_element.innerHTML = '<h3>Data OverFlow</h3> <h4 style="margin-left:5%;">Please Use No. of BITS less than or equal to 16</h4>';
	}
}