const TextCard = ({ text }: { text: string }) => {
  return (
    <div className="border p-2 m-2">
      <p>{text}</p>
    </div>
  );
};

export default TextCard;
