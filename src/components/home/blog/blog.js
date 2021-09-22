import React, { useState, useEffect } from "react";
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
  // BlogCardTitleType,
  BlogCardContentContainer,
  BlogCardImg,
  BlogCardLink,
  BlogCardLinkContainer,
  BlogButtonContainer,
  BlogButton,
} from "./blog.element";
// import image_1 from "../../../assets/image/blog/card_photo.png";
import { blogService } from "../../../services/blogService";
import FadeLoader from "react-spinners/FadeLoader";
const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await blogService.getAllBlog();
      console.log(response);
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const createMarkup = (data) => {
    return { __html: data };
  };
  const [show, setShow] = useState(false);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
              {loading ? (
                <div style={style}>
                  <FadeLoader />
                </div>
              ) : (
                <>
                  {data.map((data, index) => {
                    return (
                      <>
                        {index < 3 ? (
                          <BlogCard>
                            <BlogCardContentContainer>
                              <BlogCardImageContainer>
                                <BlogCardImg src={data.Hero.url} />
                              </BlogCardImageContainer>
                              {/* <BlogCardTitleType>Tipe BLOG</BlogCardTitleType> */}
                              <BlogCardTitle>{data.Title}</BlogCardTitle>
                              <BlogCardText
                                dangerouslySetInnerHTML={createMarkup(
                                  data.Content.slice(0, 150) + "..."
                                )}
                              ></BlogCardText>
                              <BlogCardLinkContainer>
                                <BlogCardLink to={`/blogs/${data.id}`}>
                                  Read More
                                </BlogCardLink>
                              </BlogCardLinkContainer>
                            </BlogCardContentContainer>
                          </BlogCard>
                        ) : null}
                        {index > 2 && show ? (
                          <BlogCard>
                            <BlogCardContentContainer>
                              <BlogCardImageContainer>
                                <BlogCardImg src={data.Hero.url} />
                              </BlogCardImageContainer>
                              {/* <BlogCardTitleType>Tipe BLOG</BlogCardTitleType> */}
                              <BlogCardTitle>{data.Title}</BlogCardTitle>
                              <BlogCardText
                                dangerouslySetInnerHTML={createMarkup(
                                  data.Content.slice(0, 150) + "..."
                                )}
                              ></BlogCardText>
                              <BlogCardLinkContainer>
                                <BlogCardLink to={`/blogs/${data.id}`}>
                                  Read More
                                </BlogCardLink>
                              </BlogCardLinkContainer>
                            </BlogCardContentContainer>
                          </BlogCard>
                        ) : null}
                      </>
                    );
                  })}
                  {show ? (
                    <>
                      {data.map((data, index) => {
                        return (
                          <>
                            {index > 3 ? (
                              <BlogCard>
                                <BlogCardContentContainer>
                                  <BlogCardImageContainer>
                                    <BlogCardImg src={data.Hero.url} />
                                  </BlogCardImageContainer>
                                  {/* <BlogCardTitleType>Tipe BLOG</BlogCardTitleType> */}
                                  <BlogCardTitle>{data.Title}</BlogCardTitle>
                                  <BlogCardText
                                    dangerouslySetInnerHTML={createMarkup(
                                      data.Content.slice(0, 50)
                                    )}
                                  ></BlogCardText>
                                  <BlogCardLinkContainer>
                                    <BlogCardLink to={`/blogs/${data.id}`}>
                                      Read More
                                    </BlogCardLink>
                                  </BlogCardLinkContainer>
                                </BlogCardContentContainer>
                              </BlogCard>
                            ) : null}
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </>
              )}
            </BlogCardContainer>
          </BlogSection>
        </BlogContent>
        {data.length > 3 && loading === false ? (
          <BlogButtonContainer>
            <BlogButton onClick={() => setShow(!show)}>
              {show ? "Show Less" : "View All"}
            </BlogButton>
          </BlogButtonContainer>
        ) : null}
      </BlogContainer>
    </>
  );
};

export default Blog;
