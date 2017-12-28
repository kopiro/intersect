window.activated = false;
window.images = [];

var activateIntersect = function()
{
	if (window.activated) return;
	window.activated = true;
	$("#message").text("intersect activating...");
	loadPack();
};

var loadPack = function(i)
{
	i = i || 0;
	var image = new Image();
	$(image).load(function(){
		var state = Math.round((i/window.pack.length)*100);
		$("#bar").animate({ width: state.toString()+'%' }, 1, function()
		{
			if (i>=window.pack.length-1) {
				$("#message").text("activation complete.");
				$("#bar").css("width", "100%");
				$("#bar").addClass('complete');
				setTimeout(uploadIntersect, 1000);
			} else {
				loadPack(++i);
			}
		});
	});
	image.src = window.pack[i];
	console.log("Loading %s..", window.pack[i]);
};

var uploadIntersect = function()
{
	$("#intersect").fadeIn();
	$("#audio").trigger('play');
	var i = 0;
	window.uploadInterval = setInterval(function()
	{
		if (i++>=window.pack.length*1.5) {
			clearInterval(window.uploadInterval);
			$("#audio").trigger('pause');
			$("#message").text("intersect uploaded.");
			$("#intersect").css('background-image', '').delay(1000).fadeOut('slow');
			return;
		}
		var img = window.pack[ Math.floor(Math.random()*window.pack.length) ];
		$("#intersect").css('background-image', 'url('+img+')');
	}, 50);
};

$(function(){
	$('#message').click(activateIntersect);
});
