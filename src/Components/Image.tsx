import React from "react";
import useImage from "./UseImage";

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
  const { loading, error, image } = useImage(fileName);

  if (error) return <>{alt}</>;

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <img
          className={`Image${className ? ` ${className}` : ""}`}
          src={image || ""}
          alt={alt}
          {...rest}
        />
      )}
    </>
  );
};

export default Image;
