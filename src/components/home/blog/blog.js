import React from "react";
import {
  BlogContainer,
  BlogContent,
  BlogSectionHeader,
  BlogHeader,
} from "./blog.element";
const blog = () => {
  return (
    <>
      <BlogContainer>
        <BlogContent>
          <BlogSectionHeader>
            <BlogHeader>Blog</BlogHeader>
          </BlogSectionHeader>
        </BlogContent>
      </BlogContainer>
    </>
  );
};

export default blog;
