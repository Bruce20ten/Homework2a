var submit = document.getElementById('submit')
var result = document.getElementById('result')

amaze.addEventListener('click', amazing)
	function amazing(){
	var output = 'Im right!';
	result.innerHTML = output
}

believe.addEventListener('click', unbelievable)
	function unbelievable(){
	var output = 'No, Im right!'
	result.innerHTML = output
}