import type { WrapppedComponentProps } from "../types/access-types";

const MyComponent = ({
  message,
  userName,
  userPermission,
}: WrapppedComponentProps) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Welcome, {userName}</p>
      <p>you permission : {userPermission?.join(", ")}</p>
    </div>
  );
};

export default MyComponent;
