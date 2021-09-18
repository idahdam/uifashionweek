import React, { useState } from "react";
import {
  BlogContainer,
  BlogContent,
  BlogSectionHeader,
  BlogHeader,
  BlogSection,
  BlogCard,
  BlogCardImageContainer,
  BlogCardText,
  BlogCardTitle,
  BlogCardContainer,
  BlogCardTitleType,
  BlogCardContentContainer,
  BlogCardImg,
  BlogCardLink,
  BlogCardLinkContainer,
  BlogButtonContainer,
  BlogButton,
} from "./blog.element";
import image_1 from "../../../assets/image/blog/card_photo.png";
const Blog = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <BlogContainer>
        <BlogContent>
          <BlogSectionHeader>
            <BlogHeader>Blog</BlogHeader>
          </BlogSectionHeader>
          <BlogSection>
            <BlogCardContainer>
              <BlogCard>
                <BlogCardContentContainer>
                  <BlogCardImageContainer>
                    <BlogCardImg src={image_1} />
                  </BlogCardImageContainer>
                  <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                  <BlogCardTitle>Judul Blog</BlogCardTitle>
                  <BlogCardText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </BlogCardText>
                  <BlogCardLinkContainer>
                    <BlogCardLink href="/blogs/test">Read More</BlogCardLink>
                  </BlogCardLinkContainer>
                </BlogCardContentContainer>
              </BlogCard>
              <BlogCard>
                <BlogCardContentContainer>
                  <BlogCardImageContainer>
                    <BlogCardImg src={image_1} />
                  </BlogCardImageContainer>
                  <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                  <BlogCardTitle>Judul Blog</BlogCardTitle>
                  <BlogCardText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </BlogCardText>
                  <BlogCardLinkContainer>
                    <BlogCardLink href="/blogs/test">Read More</BlogCardLink>
                  </BlogCardLinkContainer>
                </BlogCardContentContainer>
              </BlogCard>
              <BlogCard>
                <BlogCardContentContainer>
                  <BlogCardImageContainer>
                    <BlogCardImg src={image_1} />
                  </BlogCardImageContainer>
                  <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                  <BlogCardTitle>Judul Blog</BlogCardTitle>
                  <BlogCardText>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </BlogCardText>
                  <BlogCardLinkContainer>
                    <BlogCardLink href="/blogs/test">Read More</BlogCardLink>
                  </BlogCardLinkContainer>
                </BlogCardContentContainer>
              </BlogCard>
              {/* </BlogCardContainer>
            <BlogCardContainer> */}
              {show ? (
                <>
                  <BlogCard>
                    <BlogCardContentContainer>
                      <BlogCardImageContainer>
                        <BlogCardImg src={image_1} />
                      </BlogCardImageContainer>
                      <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                      <BlogCardTitle>Judul Blog</BlogCardTitle>
                      <BlogCardText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation
                      </BlogCardText>
                      <BlogCardLinkContainer>
                        <BlogCardLink href="/blogs/test">
                          Read More
                        </BlogCardLink>
                      </BlogCardLinkContainer>
                    </BlogCardContentContainer>
                  </BlogCard>
                  <BlogCard>
                    <BlogCardContentContainer>
                      <BlogCardImageContainer>
                        <BlogCardImg src={image_1} />
                      </BlogCardImageContainer>
                      <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                      <BlogCardTitle>Judul Blog</BlogCardTitle>
                      <BlogCardText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation
                      </BlogCardText>
                      <BlogCardLinkContainer>
                        <BlogCardLink href="/blogs/test">
                          Read More
                        </BlogCardLink>
                      </BlogCardLinkContainer>
                    </BlogCardContentContainer>
                  </BlogCard>
                  <BlogCard>
                    <BlogCardContentContainer>
                      <BlogCardImageContainer>
                        <BlogCardImg src={image_1} />
                      </BlogCardImageContainer>
                      <BlogCardTitleType>Tipe BLOG</BlogCardTitleType>
                      <BlogCardTitle>Judul Blog</BlogCardTitle>
                      <BlogCardText>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation
                      </BlogCardText>
                      <BlogCardLinkContainer>
                        <BlogCardLink href="/blogs/test">
                          Read More
                        </BlogCardLink>
                      </BlogCardLinkContainer>
                    </BlogCardContentContainer>
                  </BlogCard>
                  <br />
                </>
              ) : null}
            </BlogCardContainer>
          </BlogSection>
        </BlogContent>
        <BlogButtonContainer>
          <BlogButton onClick={() => setShow(!show)}>
            {show ? "Show Less" : "View All"}
          </BlogButton>
        </BlogButtonContainer>
      </BlogContainer>
    </>
  );
};

export default Blog;
