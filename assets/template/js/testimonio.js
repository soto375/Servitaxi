$(document).ready(function(){
	
  tinymce.init({
    selector: 'textarea.descripcion',height: 200,
    language:'es_ES',
    plugins: [
      "advlist autolink lists link charmap print preview ",
      "searchreplace table visualblocks code",
      "insertdatetime paste wordcount"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tiny.cloud/css/codepen.min.css'
    ]
  });

});