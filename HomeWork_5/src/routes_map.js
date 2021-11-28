import {About} from "./components/About/About";
import {Contacts} from "./components/Contacts/Contacts";
import {Home} from "./components/Home/Home";
import {Photo} from "./components/Photo/Photo";
import {Photos} from "./components/Photos/Photos";
import {NotFound} from "./components/NotFound/NotFound";
import {Posts} from "./components/Posts/Posts";
import {Post} from "./components/Post/Post";
import {Albums} from "./components/Albums/Albums";
import {RandomPost} from "./components/RandomPost/RandomPost";
import {Users} from "./components/Users/Users";
import {User} from "./components/User/User";


const basename = "/lesson/5";

const routes = [
    {
        title: "Home",
        path: `${basename}/`,
        component: Home,
        exact: true,
    },
    {
        title: "Users",
        path: `${basename}/users`,
        component: Users,
        exact: true
    },
    {
        path: `${basename}/users/:usersid`,
        component: User,
        exact: true
    },
    {
        path: `${basename}/users/:usersid/albums`,
        component: Albums,
        exact: true
    },
    {
        path: `${basename}/users/:usersid/posts`,
        component: Posts,
        exact: true
    },
    {
        path: `${basename}/albums/:albumsid/photos`,
        component: Photos,
        exact: true
    },
    {
        title: "Albums",
        path: `${basename}/albums`,
        component: Albums,
        exact: true
    },
    {
        path: `${basename}/photos/:photoid`,
        component: Photo,
        exact: true
    },
    {
        title: "Posts",
        path: `${basename}/posts`,
        component: Posts,
        exact: true
    },
    {
        path: `${basename}/posts/limit/:limit`,
        component: Posts,
        exact: true
    },
    {
        path: `${basename}/posts/:postid`,
        component: Post,
        exact: true
    },
    {
        title: "Random post",
        path: `${basename}/randomPost`,
        component: RandomPost,
        exact: true
    },
    {
        title: "About",
        path: `${basename}/about`,
        component: About,
        exact: true
    },
    {
        title: "Contacts",
        path: `${basename}/contacts`,
        component: Contacts,
        exact: true
    },
    {
        component: NotFound
    }
];

export default routes;