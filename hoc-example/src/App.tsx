import MyComponent from "./components/MyComponent";
import NotAuthorized from "./components/NotAuthorized";
import { withAccessControl } from "./utils/withAccessControl";

const MyCompoWithAcessControl = withAccessControl(MyComponent);

const App = () => {
  return (
    <div className="">
      <MyCompoWithAcessControl
        roles={["admin", "manager"]}
        // roles={["user", "guest"]}
        fallbackComponent={NotAuthorized}
        message="Hello, admin"
        injectedProps={{
          userName: "Huxn Webdev",
          userPermission: ["dashboard", "view_setting"],
        }}
      />
    </div>
  );
};

export default App;
