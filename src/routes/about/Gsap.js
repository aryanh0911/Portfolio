// ---GSAP---
onMount(() => {
	let mm = gsap.matchMedia();
	mm.add('(min-width:767px)', () => {
		const tl = gsap.timeline({
			onStart: () => {
				document.querySelector('#cover-page').style.visibility = 'visible';
				document.querySelector('#para').style.visibility = 'visible';
				document.querySelector('#pfp').style.visibility = 'visible';
				document.querySelector('#right-pane').style.visibility = 'visible';
			}
		});

		tl.from('#cover-page', {
			opacity: 0,
			y: 30,
			duration: 0.4
		});

		tl.from('#pfp', {
			opacity: 0
		});

		tl.from('#para', {
			y: 20,
			opacity: 0
		});

		tl.from(
			'#yt-reveal-container, #soundcloud-reveal-container, #spotify-reveal-container, #goodreads-reveal-container',
			{
				y: 20,
				x: 5,
				opacity: 0,
				stagger: { each: 0.15, from: 'start' }
			}
		);
	});

	//Match Media GSAP Mobile

	mm.add('(max-width:767px)', () => {
		let tl2 = gsap.timeline({
			onStart: () => {
				document.querySelector('#cover-page').style.visibility = 'visible';
				document.querySelector('#para').style.visibility = 'visible';
				document.querySelector('#pfp').style.visibility = 'visible';
				document.querySelector('#right-pane').style.visibility = 'visible';
			}
		});

		tl2.from('#cover-page', {
			opacity: 0,
			y: 30,
			duration: 0.4
		});

		tl2.from('#pfp', {
			opacity: 0
		});

		tl2.from('#para', {
			y: 20,
			opacity: 0
		});

		tl2.from(
			'#yt-reveal-container, #soundcloud-reveal-container, #spotify-reveal-container, #goodreads-reveal-container',
			{
				y: 20,
				x: 5,
				opacity: 0,
				stagger: { each: 0.15, from: 'start' },
				scrollTrigger: {
					trigger: '#right-pane',
					scrub: 2,
					markers: true,
					start: 'top 80%',
					end: 'bottom bottom'
				}
			}
		);
	});
});
