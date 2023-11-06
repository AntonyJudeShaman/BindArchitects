"use client";
import Link from "next/link";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Icons } from "../icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-red-100 ", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm  transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-6 pt-0 flex-col">
      {children}
      <br />
      <Link href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId" target="_blank">
        <Button variant="ghost" className="h-8 w-8 mr-1 px-1 ">
          <Icons.linkedin className="hover:text-blue-500  text-white" />
        </Button>
      </Link>
      <Link href="https://www.instagram.com/studio_bind/" target="_blank">
        <Button variant="ghost" className="h-8 w-8 mr-1 px-1">
          <Icons.insta className="hover:text-blue-500  text-white" />
        </Button>
      </Link>
      <Link href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank">
        <Button variant="ghost" className="h-8 w-8 mr-1 px-1 mt-3">
          <Icons.fab className="hover:text-blue-500  text-white" />
        </Button>
      </Link>
      <Link href="https://twitter.com/intent/tweet?url=https://www.bindarchitects.com/faq?questionId=bbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank">
        <Button variant="ghost" className="h-8 w-8 px-1 mt-3">
          <Icons.twitter className="hover:text-blue-500  text-white" />
        </Button>
      </Link>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
