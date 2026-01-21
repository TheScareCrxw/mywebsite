import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLOrSVGElement>;

export const NinjaIcon: FC<Props> = ({ className }: Props) => {
  return (

    <img
      className={className}
      src="/images/pfp.png"
      width="40"
      height="40"
      alt="icon"
      style={{ borderRadius: "50%" }}
    ></img>
  );
};
