import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQAccordion() {
    return (
      <Accordion type="single" collapsible className="mx-auto mb-14 d-block md:max-w-4xl w-2/3 mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger className="mb-3 md:ml-0 ml-5 dmsans text-zinc-300">What services do you offer?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          We offer comprehensive architecture and interior design services for residential, commercial, and hospitality projects. Our services include conceptual design, space planning, 3D visualisation, material selection, project management, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">How do I start a project with your team?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground ">
          Starting a project with us is easy. Simply reach out to us through our contact form, email, or phone. We&apos;ll schedule an initial consultation to discuss your project requirements, goals, and budget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">What is the typical timeline for a project?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          The timeline for each project varies depending on its size, complexity, and client requirements. We work closely with our clients to establish realistic project timelines and keep them informed throughout the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">Can you help with both new construction and renovations?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Yes, we have expertise in both new construction and renovations. Whether you&apos;re starting from scratch or looking to transform an existing space, our team can help you achieve your vision.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">How do you ensure the design aligns with my preferences?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          We believe in a collaborative design process. We take the time to understand your preferences, lifestyle, and aesthetic goals. Through regular communication, mood boards, and design presentations, we ensure that the final design aligns with your vision.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">Will you work within my budget?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Absolutely. We understand the importance of working within a budget. During our initial consultation, we discuss your budget constraints and provide transparent pricing information. Our team strives to find creative solutions that meet your requirements while staying within your budget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">Do you handle project permits and regulations?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Yes, we have experience in navigating the necessary permits and regulations for architecture and interior projects. We will guide you through the process, ensuring compliance with local building codes and regulations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">Can you recommend reliable contractors and suppliers?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Yes, we have a network of trusted contractors and suppliers that we have collaborated with on previous projects. We can provide recommendations based on the specific needs of your project.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">Will I have access to design progress updates?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Absolutely. We believe in open communication with our clients. Throughout the project, we provide regular progress updates and involve you in key design decisions to ensure your satisfaction.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="mb-3 dmsans text-zinc-300">What sets your firm apart from others?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          Our firm stands out due to our commitment to delivering exceptional design solutions tailored to our clients&apos; needs. We prioritize creativity, functionality, and attention to detail, ensuring that each project reflects our clients&apos; unique vision and enhances their space.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="mb-3 md:ml-0 ml-6 dmsans text-zinc-300">Where are you located?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
          We are based in Chennai, Currently we are delivering South India
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  