import { writable } from 'svelte/store';
export const templateStore = writable({
    pretitle:'',
    title:'',
    templateLayout:'admin-layout-vertical',
    themeColor: 'light'
});