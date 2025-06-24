import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { type ButtonProps, type ModalProps, type CardProps } from "./types";

export type ComponentConfig =
  | { type: "button"; props: ButtonProps }
  | { type: "card"; props: CardProps }
  | { type: "modal"; props: ModalProps };

export function Componentsfactory(config: ComponentConfig) {
  switch (config.type) {
    case "button":
      return <Button {...config.props} />;
    case "card":
      return <Card {...config.props} />;
    case "modal":
      return <Modal {...config.props} />;
    default:
      throw new Error("Invalid component type");
  }
}
