import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M19.2222 4H6.77778C5.8 4 5 4.8 5 5.77778V12.8889C5 14.8533 6.59111 16.4444 8.55556 16.4444H13.8889C15.8533 16.4444 17.4444 14.8533 17.4444 12.8889V10.2222H19.2222C20.2089 10.2222 21 9.42222 21 8.44444V5.77778C21 4.8 20.2 4 19.2222 4ZM19.2222 8.44444H17.4444V5.77778H19.2222V8.44444ZM5.88889 18.2222H18.3333C18.8222 18.2222 19.2222 18.6222 19.2222 19.1111C19.2222 19.6 18.8222 20 18.3333 20H5.88889C5.4 20 5 19.6 5 19.1111C5 18.6222 5.4 18.2222 5.88889 18.2222Z" fill="#6EA3AA"/>
    </Svg>
  );
};

export default Icon;
