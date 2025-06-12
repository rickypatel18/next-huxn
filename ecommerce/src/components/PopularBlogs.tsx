import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

const PopularBlogs = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        const authorData: Author[] = data.results.map((user: RandomUser) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));

        setAuthors(authorData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prev) =>
      prev.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top Seller</h2>

      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full "
              />
              <span className="ml-4">{author.name}</span>
            </section>

            <button
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-[red] text-white"
                  : "bg-black text-white"
              }`}
              onClick={() => handleFollowClick(index)}
            >
              {author.isFollowing ? "unfollow" : "follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
