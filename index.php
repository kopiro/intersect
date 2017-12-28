<!DOCTYPE html>
<html>
<head>
	<title>Intersect | Kopiro</title>
	<meta charset="utf-8" />
	<meta name="description" value="Upload the Intersect in your brain!" />
	<link type="text/css" href="style.css" rel="stylesheet" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="script.js"></script>
	<script>
	var pack = [];
	<?php foreach (glob("default/*") as $img) : ?>
	pack.push('<?=$img?>');
	<?php endforeach ?>
	</script>
</head>
<body>
	<div id="shadow"></div>
	<div id="popup">
		<div id="ipopup">
			<div id="message">do you wish to activate?</div>
			<div id="progress">
				<div id="bar"></div>
			</div>
		</div>
	</div>
	<div id="intersect"></div>
	<audio id="audio" src="audio.mp3" loop="loop" preload="auto"></audio>
</body>
</html>
