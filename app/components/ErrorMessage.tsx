import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";

// interface Props {
//     children: ReactNode
// } // Doesn't need to be defined cause we already defined PropsWithChildren

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <div>
      <Text color="red" as="p">
        {children}
      </Text>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

export default ErrorMessage;
