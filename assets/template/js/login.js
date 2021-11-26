
	const inputs = document.querySelectorAll('.input');

	function focusFun(){
		let parent = this.parentNode.parentNode;
		parent.classList.add('focus');
	}

	function blurFun(){
		let parent = this.parentNode.parentNode;
		if(this.value == ""){
			parent.classList.remove('focus');
		}
	}

	inputs.forEach(input=>{
		input.addEventListener('focus', focusFun);
		input.addEventListener('blur', blurFun);
	});
$(document).ready(function(){
    if($(".alert")!=undefined){
		$(".alert").fadeOut(5000);
	}
});
