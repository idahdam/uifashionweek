import React, { useState, useEffect } from "react";
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
import { blogService } from "../../services/blogService";
import FadeLoader from "react-spinners/FadeLoader";
const Blogs = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await blogService.getBlogById(id);
      console.log(response);
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const createMarkup = (data) => {
    return { __html: data };
  };
  return (
    <>
      <BlogsContainer>
        {loading ? (
          <>
            <FadeLoader />
          </>
        ) : (
          <>
            <BlogsHero>
              <BlogsHeroImage src={data.Hero.url} />
            </BlogsHero>
            <BlogsContent>
              <BlogsTitleContainer>
                <BlogsTitle>{data.Title}</BlogsTitle>
              </BlogsTitleContainer>
              <BlogsDetails>
                <BlogsWriter>by {data.Author}</BlogsWriter>
                <BlogsDate>{data.Date}</BlogsDate>
              </BlogsDetails>
              <BlogsBody
                dangerouslySetInnerHTML={createMarkup(data.Content)}
              ></BlogsBody>
            </BlogsContent>
          </>
        )}
      </BlogsContainer>
    </>
  );
};

export default Blogs;
