import ImageCard from "../components/ImageCard";
import ProfileCard from "../components/ProfileCard";
import TextCard from "../components/TextCard";

export const CardFactory = ({ type, data }: any) => {
  switch (type) {
    case "image":
      return <ImageCard imgSrc={data.src} altText={data.alt} />;
    case "text":
      return <TextCard text={data.text} />;
    case "profile":
      return (
        <ProfileCard avatar={data.avatar} bio={data.bio} name={data.name} />
      );
    default:
      return <div>Unknowen card type</div>;
  }
};
