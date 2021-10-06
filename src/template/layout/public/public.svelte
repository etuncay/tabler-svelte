<script>
    import { Route } from 'svelte-router-spa'
    export let currentRoute
    const params = {}
</script>
<div class="flex-fill d-flex align-items-center justify-content-center">
    <div class="container-tight py-6">
        <div class="empty">
            <Route {currentRoute}  {params} />
        </div>
    </div>
</div>
