const ImageCard = ({
  imgSrc,
  altText,
}: {
  imgSrc: string;
  altText: string;
}) => {
  return (
    <div className="border p-2 m-2">
      <img src={imgSrc} alt={altText} className="w-[5rem] h-[5rem]" />
    </div>
  );
};

export default ImageCard;
