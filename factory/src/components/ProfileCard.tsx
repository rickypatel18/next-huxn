const ProfileCard = ({
  name,
  bio,
  avatar,
}: {
  name: string;
  bio: string;
  avatar: string;
}) => {
  return (
    <div className="border p-2 m-2">
      <img src={avatar} alt={name} className="w-[10rem]" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
