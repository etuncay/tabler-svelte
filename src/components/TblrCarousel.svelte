<script>
	import { v4 as uuidv4 } from 'uuid';
	export let title;
	export let config = {
		indicators:true,
		captions:false,
		controls:false
	}
	export let images = []
	let id = uuidv4()
</script>
<div class="card">
	<div class="card-header">
		<h3 class="card-title">Carousel with indicators</h3>
	</div>
	<div class="card-body">
		<div id="{id}" class="carousel slide" data-bs-ride="carousel">
			{#if config.indicators}
				<ol class="carousel-indicators">
					{#each images as image, i}
						<li data-bs-target="#{id}" data-bs-slide-to="{i}" class="{i==0?'active':''}"></li>
					{/each}
				</ol>
			{/if}
			<div class="carousel-inner">
				{#each images as image, i}
					<div class="carousel-item {i==0?'active':''}">
						<img class="d-block w-100" alt="{image.alt}" src="{image.url}">
						{#if image.label!=null || image.description!=null}
							<div class="carousel-item-background d-none d-md-block"></div>
							<div class="carousel-caption d-none d-md-block">
								{#if image.label!=null}
									<h3>{image.label}</h3>
								{/if}
								{#if image.description!=null}
									<p>{image.description}</p>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
				{#if config.controls}
					<a class="carousel-control-prev" href="#{id}" role="button" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</a>
					<a class="carousel-control-next" href="#{id}" role="button" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>