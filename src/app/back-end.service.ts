import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class BackEndService{

    constructor(private postService: PostService){}

    //Fun 1
    saveData(){
        const listOfPosts: Post[] = this.postService.getPosts();
    }

    //Fun 2

}