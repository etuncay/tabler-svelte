<script>
	import { v4 as uuidv4 } from 'uuid';
	export let button_config={label:'Button Label',color:'white'}
	export let modal_config = {title:'Modal Title',}
	let id = uuidv4()
</script>
<a href="#" class="btn btn-{button_config.color}" data-bs-toggle="modal" data-bs-target="#modal-{id}">
	{button_config.label}
</a>
<div class="modal modal-blur fade" id="modal-{id}" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{modal_config.title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<slot></slot>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
			</div>
		</div>
	</div>
</div>