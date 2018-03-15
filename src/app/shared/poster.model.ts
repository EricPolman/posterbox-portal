interface PosterFile {
  type: string;
  path: string;
}

export class Poster {
  title: string;
  tags: [string];
  thumbnail: string;
  files = new Array<PosterFile>();
}
