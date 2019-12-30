import { hello } from "./hello";
import { errorPage } from "./errorPage";
import { markdown } from "./markdown";
import { post, postM, postW } from './post';

export const pages = {
    "hello": {
        "a": hello,
        "err": errorPage,
    },
    "markdown": markdown,
    "post-m/:id": postM,
    "post-w/:id": postW,
    "post/:id": post,
}