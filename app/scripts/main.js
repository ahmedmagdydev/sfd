jQuery(document).ready(function($) {
	$('.newsticker').newsTicker({
    row_height: 43,
    max_rows: 1,
    speed: 600,
    direction: 'up',
    duration: 4000,
    autostart: 1,
    pauseOnHover: 0,
    prevButton:  $('#prev-button'),
    nextButton:  $('#next-button')
});


$('#input-file').change(function() {
        $('#input-file-wrapper').attr('data-file', this.value);
    });
});