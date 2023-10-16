import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ModelProps {
  children: React.ReactNode;
  image: Image;
}

interface Image {
  url: StaticImageData;
  width: number;
  height: number;
  alt: string;
}

export default function Model({ children, image }: ModelProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-screen w-screen flex items-center justify-center flex-row bg-white">
      <div className="container h-full w-full px-6 py-24 flex flex-row items-center justify-center">
        <div className="flex justify-center items-center">{children}</div>
      </div>
      {windowWidth > 1280 && (
        <div className="container h-full w-3/4 flex-row bg-background-inital relative ">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto absolute bottom-40 -left-35 mx-auto sm:max-w-sm sm:mx-auto md:max-w-full lg:w-1/2 xl:w-2/5 2xl:w-3/10"
          />
        </div>
      )}
    </section>
  );
}
