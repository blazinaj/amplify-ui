// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FavoriteColor = {
  "RED": "red",
  "GREEN": "green",
  "BLUE": "blue",
  "YELLOW": "yellow",
  "ORANGE": "orange",
  "PURPLE": "purple"
};

const { Blog, Post, Comment, Person } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Person,
  FavoriteColor
};