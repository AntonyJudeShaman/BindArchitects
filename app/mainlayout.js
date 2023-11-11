import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <DefaultSeo
        title="About Us - Studio Bind Architects - Best Architects in Chennai"
        description="Studio Bind Architects, your premier destination for architectural innovation and interior design excellence in Chennai. From crafting iconic structures that redefine the city's skyline to curating bespoke interiors that harmonize style and functionality, we bring timeless elegance to every project. Explore visionary designs that transcend expectations and transform spaces into personalized works of art. Discover the seamless integration of architectural brilliance and interior creativity at Studio Bind Architects."
        keywords={[
          "best architects in chennai",
          "architects near me",
          "cheap price architects",
          "famous architects",
          "interior designs",
          "Architect in chennai",
          "Interior designer in chennai",
          "Top architects in chennai",
          "Best architects in chennai",
          "Home design in chennai",
          "Shop design in chennai",
          "Showroom designer in chennai",
        ]}
      />

      <Head>
        <link rel="canonical" href="https://www.bindhomes.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to Studio Bind, Your Premier Architectural Firm in Chennai. Transforming Visions into Stunning Reality. As a top architectural firm based in Chennai, we specialize in crafting innovative and sustainable architectural solutions. Explore our portfolio of breathtaking designs and discover how we bring your architectural dreams to life."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Studio Bind Architects" />
        <meta
          name="keywords"
          content="best architects in chennai, architects near me, cheap price architects, famous architects, interior designs, Architect in chennai, Interior designer in chennai, Top architects in chennnai, Best architects in chennai, Home design in chennai, Shop design in chennai, Showroom designer in chennai"
        />
      </Head>
      {children}
    </>
  );
};

export default Layout;
