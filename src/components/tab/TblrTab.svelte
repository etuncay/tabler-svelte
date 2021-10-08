<script>
	export let navigations= []
	export let handleChange = function(navigation) {
		navigations.push(navigation)
	};
</script>
<div class="card">
	<ul class="nav nav-tabs" data-bs-toggle="tabs">
		{#each navigations as navigation}
			<li class="nav-item">
				<a href="#tabs-home-7" class="nav-link active" data-bs-toggle="tab">Home</a>
			</li>
		{/each}
		<li class="nav-item">
			<a href="#tabs-profile-7" class="nav-link" data-bs-toggle="tab">Profile</a>
		</li>
		<li class="nav-item ms-auto">
			<a href="#tabs-settings-7" class="nav-link" title="Settings" data-bs-toggle="tab"><!-- Download SVG icon from http://tabler-icons.io/i/settings -->
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
						 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><circle cx="12" cy="12" r="3" /></svg>
			</a>
		</li>
	</ul>
	<div class="card-body">
		<div class="tab-content">

			<slot navigation={navigations}/>
		</div>
	</div>
</div>