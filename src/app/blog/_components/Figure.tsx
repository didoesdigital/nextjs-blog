import Image from "next/image";
import type { ImageProps } from "next/image";

const Figure = (props: ImageProps) => {
  return <Image {...props} alt={props.alt ?? ""} />;
};

export default Figure;
