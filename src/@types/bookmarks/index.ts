import { User } from '../user';

export interface Bookmark {
  user: User;
  storyKey: {
    seasonKey: string;
    episodeKey: string;
  };
  meta: {
    locationOfPause: {
      orientText: string;
    };
    timeOfPause: Date;
    lastUpdatedAt: Date;
    [x: string]: any;
  };
}
