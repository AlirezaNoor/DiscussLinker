export class Art {
  Title: string;
  Link: string;
  Likecounter: number;

  constructor(title: string, link: string, likecounter?: number) {
    this.Title = title;
    this.Link = link;
    this.Likecounter = likecounter || 0;

  }
  upvote():boolean{
    this.Likecounter+=1;
    return  false;
  }
  downvote():boolean{
    this.Likecounter-=1;
    return  false;
  }
}
