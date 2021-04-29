import { Button, ButtonProps } from "antd";
import { PropsWithoutRef } from "react";

export type NButtonProps = {
  text?: string
} & ButtonProps;

export default function NButton(props: PropsWithoutRef<NButtonProps>) {
  return (<Button {...props}>{ props.text }</Button>)
}