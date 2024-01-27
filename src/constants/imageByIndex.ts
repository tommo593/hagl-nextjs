import Image from "next/image";
export const images: string[] = ["/house1.jpg", "/house2.jpg", "/house3.jpg"];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
