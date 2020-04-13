import Home from './components/Home.vue';
import Notes from './components/note/Notes.vue';
import NewNote from './components/note/NewNote.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/notes', component: Notes },
    { path: '/new-note', component: NewNote }
];
