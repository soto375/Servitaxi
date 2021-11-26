$(document).ready(function(){
	
	
	tinymce.init({
	    selector: 'textarea#descripcion',
	    theme: 'modern',
	    height: 400,
	    language: 'es_ES',
	    plugins: [
	      "advlist autolink lists link image lists charmap print preview hr anchor pagebreak",
	      "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking code",
	      "table paste contextmenu directionality emoticons textcolor responsivefilemanager"
	    ],
	    toolbar1: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
	    toolbar2: "link unlink anchor | image media | forecolor backcolor  | print preview code | caption",
	    image_caption: true,
	    image_advtab: true ,
	    content_css: [
	      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
	      '//www.tiny.cloud/css/codepen.min.css'
	    ],
	    external_filemanager_path:"/jch/resources/tinymce/filemanager2/",
	    filemanager_title:"Responsive Filemanager" ,
	    external_plugins: { "filemanager" : "filemanager2/plugin.min.js"},
	    visualblocks_default_state: true ,

	    style_formats_autohide: true,
	    style_formats_merge: true,
  	});

	let dataCod = $.map($(".referentes"), function(obj, index){
		
		return $(obj).data("cod");
	});

	$("#buscar").on("input",function(evt){
		let encontrado = 1;
		if(evt.target.value.trim().length >= 2){
			$.each($(".referentes"), function(key, value){
				const cod = $(value).data("cod");
				if($(value).val().toLowerCase().includes(evt.target.value.trim().toLowerCase())){
					if( encontrado < 3){
						$("#r-"+cod).removeClass("col-lg-3");	
						$("#r-"+cod).addClass("col-lg-12");	
					}
					$("#r-"+cod).css("display","block");

					encontrado ++;
				}else{
					$("#r-"+cod).css("display","none");
				}
			});
		}else if(evt.target.value.trim().length < 2){
			console.log("no hay valores");
			let i = 0;
			$.each($(".referentes"), function(key, value){
				const cod = $(value).data("cod");
				$("#r-"+cod).removeClass("col-lg-12");	
				$("#r-"+cod).addClass("col-lg-3");	
				if(i < 8){
					$("#r-"+cod).css("display","block");
				}else{
					$("#r-"+cod).css("display","none");
				}
				i++;
			});
		}

	});
})