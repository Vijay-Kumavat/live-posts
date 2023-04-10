import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPosts: Post[] = [
    new Post(
      "Nature",
      "Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.",
      "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg",
      "test@test.com",
      new Date()
    ),
    new Post(
      "Araku Valley",
      "Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.",
      "https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      "test@test.com",
      new Date()
    ),
    new Post(
      "Cricket",
      "Awesome match 2",
      "https://d1e00ek4ebabms.cloudfront.net/production/a646c9b7-13a5-4420-ab42-13ac0cf8a158.jpg",
      "test@test.com",
      new Date()
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
