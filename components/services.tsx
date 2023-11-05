import React from "react";

function Services() {
  return (
    <div className="md:pl-8 md:pr-8 flex flex-col md:flex-col pl-1 pr-1 animate-fade-right ">
      <div className="mx-auto mt-20 flex  flex-col space-y-4 text-center">
        <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
          Our Services
        </h2>
      </div>
      <div className="our-story mb-10 flex-col md:flex-row md:p-0 p-2 ">
        <div className="our-story-item hover:bg-gray-950 relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Architecture</h2>
          <p className="dmsans text-muted-foreground p-4">
            Our team of skilled architects designs 
            innovative and functional spaces, whether it&apos;s your dream home or a
            business establishment. We bring together aesthetics and
            practicality to create spaces that ins pire and
            enhance your lifestyle or business operations.
          </p>
        </div>

        <div className="our-story-item hover:bg-gray-950  relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Project Management</h2>
          <p className="dmsans text-muted-foreground p-4">
            From conception to completion, our experienced project managers
            oversee every aspect of your architectural or interior design
            project. We handle budgeting, scheduling, procurement, and
            coordination of contractors, ensuring a
            seamless and efficient process while delivering results that exceed
            your expectations.
          </p>
        </div>

        <div className="our-story-item hover:bg-gray-950 relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Interior Design</h2>
          <p className="dmsans text-muted-foreground p-4">
            With a focus on aesthetics, functionality, and your unique style,
            our interior design services trans form spaces
            into captivating environments. We curate the perfect blend of
            furniture, colors, textures, and lighting, creating a harmonious
            atmosphere that reflects your personality and meets your needs.
          </p>
        </div>

        <div className="our-story-item hover:bg-gray-950 relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Illustration</h2>
          <p className="dmsans text-muted-foreground p-4">
            Our talented illustrators add an artistic touch to your designs
            . Through custom illustrations
             and visual representations
            , we bring concepts to life, enhancing the
            communication of ideas and creating visually captivating
            presentations that help you envision the end
            result.
          </p>
        </div>

        <div className="our-story-item hover:bg-gray-950 relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Branding</h2>
          <p className="dmsans text-muted-foreground p-4">
            We understand the importance of a strong brand identity. Our
            branding services encompass logo design, color schemes, typography,
            and visual elements that effectively communicate your brand&apos;s values
            and resonate with your target audience, giving your business a
            distinct and memorable presence.
          </p>
        </div>

        <div className="our-story-item hover:bg-gray-950 relative overflow-hidden rounded-lg border bg-background p-4">
          <h2 className="p-4 pb-0 dmsans">Signage</h2>
          <p className="dmsans  text-muted-foreground p-4">
            Make a lasting impression with our expert signage solutions
            . We design and produce impactful signage that
            enhances your brand visibility, whether it&apos;s for storefronts,
            exhibitions, or wayfinding systems. Our
            attention to detail and strategic placement ensure your message stands out and captures
            attention in any environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
