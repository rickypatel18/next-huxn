import type React from "react";

export interface AccessControlProps {
    roles: string[],
    fallbackComponent: React.ComponentType,
    injectedProps?: { [key: string]: unknown }
}

export interface InjectedProps {
    userName?: string,
    userPermission?: string[]
}

export interface WrapppedComponentProps extends InjectedProps {
    message: string
}