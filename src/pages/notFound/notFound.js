import React from "react";
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundTextContainer,
  NotFoundTitle,
} from "./notFound.element";
const NotFoundComp = () => {
  return (
    <NotFoundContainer>
      <NotFoundTextContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Page Not Found</NotFoundText>
      </NotFoundTextContainer>
    </NotFoundContainer>
  );
};

export default NotFoundComp;
