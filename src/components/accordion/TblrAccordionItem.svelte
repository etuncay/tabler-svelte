<script>
	import { v4 as uuidv4 } from 'uuid';
	export  let title=''
	export let expanded=false

	let id = uuidv4()
</script>

<div class="accordion-item">
	<h2 class="accordion-header" id="heading-{id}">
		<button class="accordion-button {expanded?'':'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{id}" aria-expanded="true">
			{title}
		</button>
	</h2>
	<div id="collapse-{id}" class="accordion-collapse collapse {expanded?'show':''}" data-bs-parent="#accordion-example">
		<div class="accordion-body pt-0">
			<slot></slot>
		</div>
	</div>
</div>