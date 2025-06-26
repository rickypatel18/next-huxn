import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts, fetchTags } from "../api/api";
import { useState } from "react";

const PostList = () => {
  const [page, setpage] = useState(1);

  const {
    data: postData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", { page }],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 *60 *5,
    // placeholderData:keepPreviousData,
    // gcTime:0,
    // refetchInterval:1000*5
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
    staleTime: Infinity,
  });

  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
    onMutate: () => {
      return { id: 1 };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
        // predicate(query) {
        //   return query.queryKey[0] === "posts" && query.queryKey[1].page >= 2
        // },
      });
    },
    // onError: () => {},
    // onSettled: () => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === " true"
    );
    if (!title || !tags) return;
    mutate({ id: postData?.data?.length + 1, title, tags });
  };

  return (
    <div className="container flex flex-col gap-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post"
          className="p-1 border"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag) => {
            return (
              <div key={tag}>
                <input type="checkbox" name={tag} id={tag} />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>

        <button className="border p-1 bg-[green]">Post</button>
      </form>

      {isLoading && isPending && <p>Loading ...</p>}
      {isError && <p>{error?.message}</p>}
      {isPostError && <p onClick={() => reset()}>unable to post</p>}

      <div className="pages">
        <button
          onClick={() => setpage((oldpage) => Math.max(oldpage - 1, 0))}
          disabled={!postData?.prev}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          onClick={() => setpage((oldpage) => oldpage + 1)}
          disabled={!postData?.next}
        >
          {" "}
          Next
        </button>
      </div>

      {postData?.data?.map((post) => (
        <div key={post.id} className="flex items-center gap-2 p-2">
          <h2 className="text-black">{post.title}</h2>
          {post?.tags?.map((tag) => (
            <span key={tag} className="bg-[#cacaca] p-1 ml-2">
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;
