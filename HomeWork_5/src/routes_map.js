
import {Home} from "./components/Home/Home";
import {Albums} from "./components/Albums/Albums";
import {Photo} from "./components/Photo/Photo";
import {Photos} from "./components/Photos/Photos";

import {Post} from "./components/Post/Post";
import {Posts} from "./components/Posts/Posts";
import {RandomPost} from "./components/RandomPost/RandomPost";

import {User} from "./components/User/User";
import {Users} from "./components/Users/Users";

import {Contacts} from "./components/Contacts/Contacts";
import {About} from "./components/About/About";
import {NotFound} from "./components/NotFound/NotFound";

const routes = [
    {
        title: "Home",
        path: `/`,
        component: Home,
        exact: true,
    },
    {
        title: "Users",
        path: `/users`,
        component: Users,
        exact: true
    },
    {
        path: `/users/:usersid`,
        component: User,
        exact: true
    },
    {
        path: `/users/:usersid/albums`,
        component: Albums,
        exact: true
    },
    {
        path: `/users/:usersid/posts`,
        component: Posts,
        exact: true
    },
    {
        path: `/albums/:albumsid/photos`,
        component: Photos,
        exact: true
    },
    {
        title: "Albums",
        path: `/albums`,
        component: Albums,
        exact: true
    },
    {
        path: `/photos/:photoid`,
        component: Photo,
        exact: true
    },
    {
        title: "Posts",
        path: `/posts`,
        component: Posts,
        exact: true
    },
    {
        path: `/posts/limit/:limit`,
        component: Posts,
        exact: true
    },
    {
        path: `/posts/:postid`,
        component: Post,
        exact: true
    },
    {
        title: "Random post",
        path: `/randomPost`,
        component: RandomPost,
        exact: true
    },
    {
        title: "Contacts",
        path: `/contacts`,
        component: Contacts,
        exact: true
    },
    {
        title: "About",
        path: `/about`,
        component: About,
        exact: true
    },    
    {
        component: NotFound
    }
];

export default routes;