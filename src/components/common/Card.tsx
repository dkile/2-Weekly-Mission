import Image, { ImageProps } from "next/image";
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

export default function Card({
  children,
  ...props
}: ComponentPropsWithRef<"div">) {
  return <div {...props}>{children}</div>;
}

function Thumbnail({ src, alt, ...props }: ImageProps) {
  return <Image {...props} src={src} alt={alt} />;
}

interface TitleProps
  extends ComponentPropsWithoutRef<"h2" | "h3" | "h4" | "h5" | "h6"> {
  label: {
    content: ReactNode;
    headType: "h2" | "h3" | "h4" | "h5" | "h6";
  };
}
function Title({ label, ...props }: TitleProps) {
  const { content, headType: H } = label;
  return <H {...props}>{content}</H>;
}

interface DescriptionProps extends ComponentPropsWithoutRef<"p"> {
  description: ReactNode;
}
function Description({ description, ...props }: DescriptionProps) {
  return <p {...props}>{description}</p>;
}

Card.Thumbnail = Thumbnail;
Card.Title = Title;
Card.Description = Description;
