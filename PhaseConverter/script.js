const c2r = () =>{
	var real = eval(document.getElementById('real').value);
	var img = eval(document.getElementById('img').value);
	var mod = Math.sqrt(real**2 + img**2);
	var angle = Math.atan(img/real)*180/Math.PI;
	document.getElementById('output').innerHTML = String(mod.toFixed(6)) + "<strong> @ </strong>" + String((Math.atan(img/real)*180/Math.PI).toFixed(6));
}

const r2c = () =>{
	var mod = eval(document.getElementById('mod').value);
	var angle = eval(document.getElementById('angle').value)*Math.PI/180;
	var real = (mod*Math.cos(angle)).toFixed(6);
	var img = (mod*Math.sin(angle)).toFixed(6);
	document.getElementById('output2').innerHTML = String(real) + " + <strong> j </strong>" + String(img);
}

const complexProduct = () =>{
	var real1 = eval(document.getElementById('realm1').value);
	var img1 = eval(document.getElementById('imgm1').value);
	var real2 = eval(document.getElementById('realm2').value);
	var img2 = eval(document.getElementById('imgm2').value);
	document.getElementById('output3').innerHTML = String((real1*real2-img1*img2).toFixed(6)) + " + <strong> j </strong>" + String((real1*img2+real2*img1).toFixed(6));
}

const complexQuotient = () =>{
	var real1 = eval(document.getElementById('reald1').value);
	var img1 = eval(document.getElementById('imgd1').value);
	var real2 = eval(document.getElementById('reald2').value);
	var img2 = eval(document.getElementById('imgd2').value);
	var real = (real1*real2+img1*img2)/(real2**2 + img2**2);
	var img = (real2*img1-img2*real1)/(real2**2 + img2**2);
	document.getElementById('output4').innerHTML = String(real.toFixed(6)) + " + <strong> j </strong>" + String(img.toFixed(6));
}