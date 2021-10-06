<script>
    import {templateStore} from '../../template-store';
    import {Route} from 'svelte-router-spa'
    import Navigation from '../../navigation.svelte';
    import Footer from "./Footer.svelte";
    import Header from "./header.svelte";
    import SearchForm from "./search-form.svelte";

    let title = '';
    let pretitle = ''

    const unsubscribe = templateStore.subscribe(value => {
        pretitle = value.pretitle;
        title = value.title;
        $: document.title = title;
    });

    export let currentRoute
    const params = {}
</script>
<div class="page">
    <Header/>
    <!--Menu-->
    <div class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
            <div class="navbar navbar-light">
                <div class="container-xl">
                    <Navigation />
                    <SearchForm/>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-xl">
            <!-- Page title -->
            <div class="page-header d-print-none">
                <div class="row align-items-center">
                    <div class="col">
                        <div class="page-pretitle">
                            {pretitle}
                        </div>
                        <h2 class="page-title">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
            <Route {currentRoute}  {params} />
        </div>
        <Footer/>
    </div>
</div>