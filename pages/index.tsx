import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Footer from "../components/footer";
import Link from "next/link";

export default function Index({ allPosts: { edges }, preview }) {
  return (
    <>
      <div
        className="elementor-element elementor-element-33a44a0 e-flex e-con-boxed e-con e-child"
        data-id="33a44a0"
        data-element_type="container"
        data-settings='{"container_type":"flex","content_width":"boxed"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1bddd29 elementor-widget elementor-widget-image"
            data-id="1bddd29"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div className="header-img-wrapper">
              <a href="https://projectolivegrove.org">
                <img
                  fetchPriority="high"
                  decoding="async"
                  width="250"
                  height="auto"
                  src="https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2-1024x405.webp"
                  className="attachment-large size-large wp-image-35"
                  alt=""
                  srcSet="https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2-1024x405.webp 1024w, https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2-300x119.webp 300w, https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2-768x304.webp 768w, https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2-1536x608.webp 1536w, https://projectolivegrove.org/wp-content/uploads/2023/11/ProjectOliveGrove_logo-2.webp 1708w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="description-wrapper">
          <p className="main-description">
            This is our mission: Our mission is to cultivate an informed
            electorate by empowering American voters through education. We are
            dedicated to creating a nonpartisan and impartial space that allows
            voters to confidently align their choices with their values,
            fostering a stronger democracy.
          </p>
        </div>
      </div>
      <div className="homepage-button-container">
        <Link className="btn btn-primary home-btn" href={`/posts`}>
          BLOG POSTS
        </Link>

        <Link
          className="btn btn-primary home-btn"
          href={`https://www.zeffy.com/en-US/donation-form/db0a88a5-4c47-434a-b952-a92e0af0cafb`}
        >
          DONATE
        </Link>
        <Link
          className="btn btn-primary home-btn"
          href={`https://www.propublica.org/`}
        >
          PROPUBLICA
        </Link>
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
