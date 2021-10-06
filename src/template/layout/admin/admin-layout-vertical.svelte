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
<div class="wrapper">
    <Header/>
    <div class="navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="navbar navbar-light">
          <div class="container-xl">
            <Navigation/>
            <SearchForm/>
          </div>
        </div>
      </div>
    </div>
    <div class="page-wrapper">
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
      </div>
      <div class="page-body">
        <div class="container-xl">
            <Route {currentRoute}  {params} />
        </div>
      </div>
      <Footer/>

    </div>
  </div>