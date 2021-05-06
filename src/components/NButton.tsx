import { Button, ButtonProps } from 'antd';
import { PropsWithoutRef } from 'react';

export type NButtonProps = {
  text?: string;
} & ButtonProps;

export default function NButton({ text, ...rest }: PropsWithoutRef<NButtonProps>) {
  return <Button {...rest}>{text}</Button>;
}
