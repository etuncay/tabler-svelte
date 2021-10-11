<script>
	export let image = null
	export let allign = 'bottom' || 'right' || 'left' || 'top'
	export let title = ''
	export let active = null
	export let subtitle = ''
	export let header = false
</script>


<div  class="card  {active==false?'card-inactive':''}" >
	<div class="{image!=null && allign!='top'?'row row-0':''}">
		{#if image!=null && (allign!='left' || allign!='right') && allign!='top' && allign!='bottom'}
			<div class="col-3 {allign=='right'?'order-md-last':''}">
				<div class="w-100 h-100 object-cover img-responsive img-responsive-16by9" style="background-image: url({image})"></div>
			</div>
		{/if}
		{#if image!=null && allign=='top'}
			<div class="card-img-top img-responsive img-responsive-16by9" style="background-image: url({image})"></div>	
		{/if}
		<div class="col">
			{#if header==true}
				<div class="card-header">	
					<div>
						{#if title!='' }
							<h3 class="card-title">{title} </h3>
						{/if}
						
						{#if subtitle!=''}
							<div  style="margin: 0 !important;" class="card-subtitle">{subtitle}</div>
						{/if}
					</div>
				</div>
			{/if}
			<div class="card-body {active==true?'card-active':''}">
				
				{#if header==false}
					{#if title!='' }
						<h3 class="card-title">{title} </h3>
					{/if}
					
					{#if subtitle!=''}
						<div  class="card-subtitle">{subtitle}</div>
					{/if}
				{/if}
				
				<slot></slot>
			</div>
		</div>
	</div>
	{#if image!=null && allign=='bottom'}
		<div  class="card-img-bottom img-responsive img-responsive-16by9" style="background-image: url({image})"></div>
	{/if}
	
</div>
