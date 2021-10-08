<script>
	export let card_config = {
		image :null,
		allign: 'bottom' || 'right' || 'left',
	}
	export let title = ''

</script>

<div class="card">
	<div class="card-body">
        {#if title!=''}
		    <h3 class="card-title">{title}</h3>
        {/if}
		<slot></slot>
	</div>
	{#if card_config.image!=null && card_config.allign=='bottom'}
		<div  class="card-img-bottom img-responsive img-responsive-16by9" style="background-image: url({card_config.image})"></div>
	{/if}
</div>
