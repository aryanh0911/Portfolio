<script>
    import Techstacks from "./techStackData.json"

	let showPopup = false;
</script>

<section class="techStack-section max-w-[580px] mx-auto mt-16 mb-16 px-4 md:px-0">
	<div id="techStack-header" class="text-white text-2xl font-bold flex justify-center mb-6">Techstack</div>

	<div class="tech-grid grid grid-cols-5 gap-y-7 place-items-center">
        {#each Techstacks as tech}
            <div class="tech-stack-icon-container">
                <img class="tech-img"
                    src={tech.svgAddress}
                    alt="Icon"
                    on:mouseover={() => (showPopup = true)}
                    on:mouseout={() => (showPopup = false)}
                />
                <div class="popup">
                    {tech.popup}
                    <div class="arrow"></div>
                </div>
            </div>
        {/each}
	</div>
</section>

<style>
	/* *{
		visibility: hidden;
	} */

	.header {
		font-family: 'Poppins', sans-serif;
	}

	.tech-grid img {
		transition: scale 0.2s;
	}

	.tech-grid img:hover {
		cursor: pointer;
		scale: 1.08;
	}

	.tech-stack-icon-container {
		position: relative;
		width: fit-content;
		/* display: inline-block; */
	}

	.popup {
		/* visibility: hidden; */
		display: none;
		width: 100px;
		background-color: #4a4a4a7a;
		backdrop-filter: blur(3px);
		color: #fff;
		text-align: center;
		border-radius: 5px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 120%; /* Position the popup above the image */
		left: 50%;
		margin-left: -50px;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tech-stack-icon-container:hover .popup {
		/* visibility: visible; */
		display: block;
		opacity: 1;
	}

	.arrow {
		position: absolute;
		top: 100%; /* Position the arrow at the bottom of the popup */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #4a4a4a7a transparent transparent transparent;
	}
</style>
