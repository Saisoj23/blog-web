import React from "react";

type ImageProps = {
  fileName: string;
  alt?: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({
  fileName,
  alt = "",
  className,
  ...rest
}) => {
  return (
    <>
      <img
        className={`Image${className ? ` ${className}` : ""}`}
        src={`https://raw.githubusercontent.com/Saisoj23/blog-web/refs/heads/main/src/assets/${fileName}`}
        alt={alt}
        {...rest}
      />
    </>
  );
};

export default Image;
