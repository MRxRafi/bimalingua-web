import { cache } from "react";
import { blogPosts } from "./blog-data";

export const getPostBySlug = cache((slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
});
