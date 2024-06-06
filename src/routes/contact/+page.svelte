<!-- <h3 class="text-white">contacts page/</h3> -->
<script>
    
</script>

<div class="main">
	<div class="container">
		<form action="" id="contactForm">
			<div class="alert">Your message sent</div>

			<div class="inputBox">
				<input type="text" id="name" placeholder="Your name...." />
			</div>

			<div class="inputBox">
				<input type="email" id="emailid" placeholder="Your Email....." />
			</div>

			<div class="inputBox">
				<textarea id="msgContent" cols="30" rows="10" placeholder="Message"></textarea>
			</div>

			<div class="inputBox">
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>
</div>

<style>
	/* .main {
        margin-left: auto;
        margin-right: auto;
    } */

	.container {
		margin-left: auto;
		margin-right: auto;
		/* width: 90%; */
		max-width: 50rem;
		height: 60vh;
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		background-color: black;
	}

	.container form {
		width: 85%;
		/* max-width: ; */
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
	}

	.inputBox {
		width: 100%;
		margin: 10px 0;
		border-radius: 5px;
		overflow: hidden;
	}

	.inputBox input[type='text'],
	.inputBox input[type='email'] {
		width: 100%;
		height: 50px;
		border-radius: 5px;
		border: none;
		outline: none;
		overflow: hidden;
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 0px 10px;
		font-size: 16px;
		color: #444;
	}

	.inputBox textarea {
		width: 100%;
		height: 120px;
		border-radius: 5px;
		border: none;
		outline: none;
		overflow: hidden;
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 0px 10px;
		font-size: 16px;
		color: #444;
	}

	.inputBox button {
		width: 100%;
		padding: 10px 20px;
		border: none;
		outline: none;
		background: rgb(0, 119, 255);
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
	}

	.inputBox button:hover {
		background: rgb(0, 17, 255);
		transition: all 0.3s ease;
	}

	::placeholder {
		font-size: 16px;
	}

	.alert {
		width: 100%;
		background: rgb(0, 255, 106);
		padding: 10px 20px;
		border-radius: 5px;
		text-align: center;
		font-size: 18px;
		font-weight: 900;
		display: none;
	}
</style>
