import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

/**
 * Database path
 * https://live-posts-133db-default-rtdb.firebaseio.com/
 */

@Injectable({ providedIn: 'root' })
export class BackEndService {

    constructor(private postService: PostService, private http: HttpClient) { }

    //Fun 1
    saveData() {

        // get the list of post from post service
        const listOfPosts: Post[] = this.postService.getPosts();

        //send list of post to backend
        this.http
        .put('https://live-posts-133db-default-rtdb.firebaseio.com/post.json', listOfPosts)
        .subscribe((res) => {
            console.log(res);
        });
    }

    //Fun 2
    fetchData(){

        //step 1
        this.http
        .get<Post[]>(
            'https://live-posts-133db-default-rtdb.firebaseio.com/post.json'
        )
        .pipe(
            tap((listOfPosts: Post[]) => {
                console.log(listOfPosts);

                //step 2 send to post.service
            })
        )
        .subscribe();
    }
}