import React from "react";
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
} from "./blog.element";
import image_1 from "../../../assets/image/blog/card_photo.png";
const blog = () => {
  function ViewMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  };
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
                    <BlogCardLink>Read More</BlogCardLink>
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
                    <BlogCardLink>Read More</BlogCardLink>
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
                    <BlogCardLink>Read More</BlogCardLink>
                  </BlogCardLinkContainer>
                </BlogCardContentContainer>
              </BlogCard>
            </BlogCardContainer>
            <span id="dots"></span><span id="more">
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
                    <BlogCardLink>Read More</BlogCardLink>
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
                    <BlogCardLink>Read More</BlogCardLink>
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
                    <BlogCardLink>Read More</BlogCardLink>
                  </BlogCardLinkContainer>
                </BlogCardContentContainer>
              </BlogCard>
            </BlogCardContainer>
            </span>
            <button onclick="ViewMore()" id="myBtn">Read more</button>
          </BlogSection>
        </BlogContent>
      </BlogContainer>
    </>
  );
};

export default blog;
