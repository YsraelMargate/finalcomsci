<script>
	window.addEventListener('scroll', function() {
		var scrollToTopBtn = document.getElementById('scrollToTopBtn');
		var scrollPosition = window.pageYOffset;

		if (scrollPosition > 0) {
			scrollToTopBtn.style.display = 'block';
		} else {
			scrollToTopBtn.style.display = 'none';
		}
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>