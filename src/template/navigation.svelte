<script>
    import { Navigate } from 'svelte-router-spa'

    let NavItems = [
        {
            icon: 'home',
            title: 'Home',
            link:'/',
            role: '',
            group: false,
            items: []
        },
        {
            icon: 'home',
            title: 'Dashboard',
            link:'/admin',
            role: '',
            group: false,
            items: []
        },
        {
            icon: '',
            title: 'Interface',
            link:'/admin',
            role: '',
            group: false,
            items: [
                {
                    items: [
                        {
                            icon: '',
                            title: 'Empty page',
                            link: '/demo/empty',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Accordion',
                            link: '/demo/accordion',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Blank Page',
                            link: '/demo/blank',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Buttons',
                            link: '/demo/buttons',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Cards',
                            link: '/demo/cards',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Cards Masonry',
                            link: '/demo/cards-masonry',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Colors',
                            link: '/demo/colors',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Dropdowns',
                            link: '/demo/dropdowns',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Icons',
                            link: '/demo/icons',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Modals',
                            link: '/demo/modals',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Maps',
                            link: '/demo/maps',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Map Fullsize',
                            link: '/demo/maps',
                            role: '',
                            group: false
                        },
                    ]
                },
                {
                    items: [
                        {
                            icon: '',
                            title: 'Vektor Maps',
                            link: '/demo/vektor-maps',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Navigation',
                            link: '/demo/navigation',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Charts',
                            link: '/demo/charts',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Pagination',
                            link: '/demo/pagination',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Skeleton',
                            link: '/demo/skeleton',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Tabs',
                            link: '/demo/tabs',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Carouse',
                            link: '/demo/carousel',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Lists',
                            link: '/demo/lists',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Typography',
                            link: '/demo/typography',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Markdown',
                            link: '/demo/markdown',
                            role: '',
                            group: false
                        },
                        {
                            icon: '',
                            title: 'Authentication',
                            link: '',
                            role: '',
                            group: false,
                            items : []
                        },
                        {
                            icon: '',
                            title: 'Error Pages',
                            link: '',
                            role: '',
                            group: false,
                            items : []
                        },
                    ]
                },


                
            ]
        },
        {
            icon: '',
            title: 'Form elements',
            link:'/demo/form-elements',
            role: '',
            group: false,
            items: []
        },
        {
            icon: '',
            title: 'Extra',
            link:'',
            role: '',
            group: false,
            items: [
                {
                    items: [
                        {
                            icon: '',
                            title: 'Activity',
                            link:'/demo/activity',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Gallery',
                            link:'/demo/gallery',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Invoice',
                            link:'/demo/invoice',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Search results',
                            link:'/demo/search-results',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Pricing cards',
                            link:'/demo/pricing',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Users',
                            link:'/demo/users',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'License',
                            link:'/demo/license',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Music',
                            link:'/demo/music',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Widgets',
                            link:'/demo/widgets',
                            role: '',
                        },
                        {
                            icon: '',
                            title: 'Wizard',
                            link:'/demo/wizard',
                            role: '',
                        },
                    ]
                }

            ]
        },
        {
            icon: '',
            title: 'Layout',
            link:'',
            role: '',
            items: [
                {

                }
            ]
        },
        {
            icon: '',
            title: 'Documentation',
            link:'',
            role: '',
            items: [
                {

                }
            ]
        }

       
    ]
</script>

<ul class="navbar-nav">
    {#each NavItems as { icon, title, link,role, group, items }, i}
        {#if group}
            <hr style="margin: 1rem 0;"/>
        {/if}
        {#if items!=null && items.length>0}
            <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" role="button"
                   aria-expanded="false">
                    {#if icon!=null && icon!='' }
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            {#if icon!=null && icon!='' }
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <img   style="max-width:75%;opacity: 0.5;" src="/img/feather-icons/{icon}.svg" />
                                </span>
                            {/if}
                        </span>
                    {/if}
                    <span class="nav-link-title">{title}</span>
                </a>
                <div class="dropdown-menu">
                    <div class="dropdown-menu-columns">
                        {#each items as { items }, i}
                            {#if items!=null && items.length>0}
                                <div class="dropdown-menu-column">
                                    {#each items as { icon, title, link,role, items }, i}
                                        <Navigate styles ="dropdown-item" to="{link}">
                                            {#if icon!=null && icon!='' }
                                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                                    <img   style="max-width:75%;opacity: 0.5;" src="/img/feather-icons/{icon}.svg" />
                                                </span>
                                            {/if}
                                            {title}
                                        </Navigate>
                                    {/each}
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </li>
        {:else}
            <li class="nav-item">

                <Navigate styles="nav-link" to="{link}">
                    {#if icon!=null && icon!='' }
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <img   style="max-width:75%;opacity: 0.5;" src="/img/feather-icons/{icon}.svg" />
                        </span>
                    {/if}
                    {title}
                </Navigate>
            </li>
        {/if}
    {/each}
</ul>