import React from "react";
import { useParams } from "react-router";
import {
  BlogsContainer,
  BlogsHero,
  BlogsHeroImage,
  BlogsContent,
  BlogsTitleContainer,
  BlogsTitle,
  BlogsBody,
  BlogsDetails,
  BlogsWriter,
  BlogsDate,
} from "./blogs.element";
import hero from "../../assets/image/blogs/hero.png";

const Blogs = () => {
  const { title } = useParams();
  return (
    <>
      <BlogsContainer>
        <BlogsHero>
          <BlogsHeroImage src={hero} />
        </BlogsHero>
        <BlogsContent>
          <BlogsTitleContainer>
            <BlogsTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </BlogsTitle>
          </BlogsTitleContainer>
          <BlogsDetails>
            <BlogsWriter>by {title}</BlogsWriter>
            <BlogsDate>28 August 2021</BlogsDate>
          </BlogsDetails>
          <BlogsBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </BlogsBody>
        </BlogsContent>
      </BlogsContainer>
    </>
  );
};

export default Blogs;
