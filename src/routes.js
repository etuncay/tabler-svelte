import { templateStore } from './template/template-store';
export let templateLayout='';
templateStore.subscribe(value => {
    templateLayout = value.templateLayout;
});


import PublicLayout  from './template/layout/public/public.svelte'
import AdminLayoutVertical from './template/layout/admin/admin-layout-vertical.svelte'
import AdminLayoutHorizontal from './template/layout/admin/admin-layout-horizontal.svelte'


let AdminLayoutComponent =AdminLayoutVertical;

import LoginPage from './view/login.svelte'

import PublicIndex  from './view/public-index.svelte'
import AdminIndex  from './view/admin-index.svelte'

import {
    AccordionPage,
    ActivityPage,
    BlankPage,
    ButtonsPage,
    CardsMasonryPage,
    CarouselPage,
    CardsPage,
    EmptyPage,
    ColorsPage,
    ChartsPage,
    DropdownsPage,
    GalleryPage,
    FormElementsPage,
    IconsPage,
    InvoicePage,
    LicensePage,
    ListsPage ,
    MapFullsizePage ,
    MapsPage,
    MapsVectorPage ,
    MarkdownPage,
    ModalsPage,
    MusicPage,
    NavigationPage,
    PaginationPage,
    PricingPage,
    SkeletonPage,
    SearchResultsPage,
    TablesPage,
    TabsPage,
    TypographyPage,
    UsersPage,
    WidgetsPage,
    WizardPage} from './view/demo/index'

switch (templateLayout) {
    case 'admin-layout-horizontal':
        AdminLayoutComponent = AdminLayoutHorizontal
        break;
    case 'admin-layout-vertical':
        AdminLayoutComponent = AdminLayoutVertical
        break;
}


function userIsAdmin() {
    return true;
}

const routes = [
    {
        name: '/',
        component: PublicIndex,
        layout: PublicLayout,
    },
    { name: 'login', component: LoginPage },
    {
        name: 'demo',
        component: AdminLayoutComponent,
        nestedRoutes: [
            { name: 'empty',  component: EmptyPage },
            { name: 'accordion',  component: AccordionPage },
            { name: 'activity',  component: ActivityPage },
            { name: 'blank',  component: BlankPage },
            { name: 'buttons',  component: ButtonsPage },
            { name: 'cards-masonry',  component: CardsMasonryPage },
            { name: 'carousel',  component: CarouselPage },
            { name: 'cards',  component: CardsPage },
            { name: 'colors',  component: ColorsPage },
            { name: 'charts',  component: ChartsPage },
            { name: 'dropdowns',  component: DropdownsPage },
            { name: 'gallery',  component: GalleryPage },
            { name: 'form-elements',  component: FormElementsPage },
            { name: 'icons',  component: IconsPage },
            { name: 'invoice',  component: InvoicePage },
            { name: 'license',  component: LicensePage },
            { name: 'lists',  component: ListsPage },
            { name: 'map-full-size',  component: MapFullsizePage },
            { name: 'maps',  component: MapsPage },
            { name: 'maps-vector',  component: MapsVectorPage },
            { name: 'markdown',  component: MarkdownPage },
            { name: 'modals',  component: ModalsPage },
            { name: 'music',  component: MusicPage },
            { name: 'pricing',  component: PricingPage },
            { name: 'pagination',  component: PaginationPage },
            { name: 'skeleton',  component: SkeletonPage },
            { name: 'navigation',  component: NavigationPage },
            { name: 'search-results',  component: SearchResultsPage },
            { name: 'tables',  component: TablesPage },
            { name: 'tabs',  component: TabsPage },
            { name: 'typography ',  component: TypographyPage },
            { name: 'users',  component: UsersPage },
            { name: 'widgets',  component: WidgetsPage },
            { name: 'wizard',  component: WizardPage }

        ],
    },
    {
        name: 'admin',
        component: AdminLayoutComponent,
        onlyIf: { guard: userIsAdmin, redirect: '/login' },
        nestedRoutes: [
            { name: 'index',  component: AdminIndex }
        ],
    },
]

export { routes }