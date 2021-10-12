<script>
    export let label = ''
    export let link = ''
    export let target = '_self'
    export let divider = false
    export let active = null
    export let badge = null
    
</script>
{#if divider}
    <div class="dropdown-divider"></div>
{/if}

<a class="dropdown-item {active==true?'active':''} {active==false?'disabled':''}" href="{link}" target="{target}"> 
    {label}
    {#if badge>0}
        <span class="badge bg-primary ms-auto">12</span>
    {/if}
</a>