$('img').each(function(){
	var $img = $(this);
	var filename = $img.attr('src');
	var $alt = $img.attr('alt');
	var $title = $img.attr('title');
	if (!$alt) {
		$img.attr('title', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
	}
	if (!$title) {
		$img.attr('alt', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
	}
});