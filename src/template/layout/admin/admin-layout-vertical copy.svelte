<script>
    import {templateStore} from '../../template-store';
    import {Route} from 'svelte-router-spa'
    import Navigation from "../../Navigation.svelte";
    import Footer from "./footer.svelte";
    import SearchForm from "./search-form.svelte";
    import Header from "./header.svelte";

    let title = ''
    let pretitle = ''
    let themeColor ='light'
    const unsubscribe = templateStore.subscribe(value => {
        title = value.title
        pretitle = value.pretitle
        $: document.title = title
    });

    export let currentRoute
    const params = {}
</script>
<div class="page">
    <Header/>
    <aside class="navbar navbar-vertical navbar-expand-lg navbar-{themeColor}" style="margin-top: 2px;z-index: 0;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark">
                <a href=".">
                    <img src="./static/logo-white.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
                </a>
            </h1>
            <div class="collapse navbar-collapse" id="navbar-menu">
                <Navigation/>
            </div>
            <SearchForm/>
        </div>
    </aside>

    <div class="content">

        <div class="container-xl">

            <!-- Page title -->
            <div class="page-header d-print-none">

                <div class="row align-items-center">
                    <div class="col">
                        <!-- Page pre-title -->
                        <div class="page-pretitle">
                            {pretitle}
                        </div>
                        <h2 class="page-title">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row row-deck row-cards">
                <Route {currentRoute}  {params} />
            </div>
        </div>
        <Footer/>
    </div>
</div>
