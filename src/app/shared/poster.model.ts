export interface PosterFile {
  type: string;
  path: string;
}

export class Poster {
  title: string;
  tags: [string];
  thumbnail: string;
  files = new Array<PosterFile>();
  customerId: string;
  createdAt: Date;
}

export class PosterPost {
  title: string;
  tags: string;
  thumbnail: string;
  files: string;
  customerId: string;
}
