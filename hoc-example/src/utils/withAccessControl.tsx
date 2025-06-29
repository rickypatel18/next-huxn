import type { AccessControlProps, InjectedProps } from "../types/access-types";

const currentUserRole = "admin";

export const withAccessControl = <P extends object>(
  WrappedComponent: React.ComponentType<P & InjectedProps>
) => {
  return (props: P & AccessControlProps) => {
    const {
      roles,
      fallbackComponent: Fallback,
      injectedProps = {},
      ...restProps
    } = props;

    const hasAccess = roles.includes(currentUserRole);
    if (!hasAccess) {
      return <Fallback />;
    }

    const mergedProps = {
      ...restProps,
      ...injectedProps,
    };

    return <WrappedComponent {...(mergedProps as P & InjectedProps)} />;
  };
};
