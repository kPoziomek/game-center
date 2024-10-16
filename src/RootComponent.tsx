import {ReactNode, useState} from "react";
import {CustomProvider} from "rsuite";

type RootComponentProps = {
  children: ReactNode
}

export const RootComponent = ({children}:RootComponentProps) => {
  const [theme,] = useState<"dark" | "light" | "high-contrast" | undefined>('light');

  return( <CustomProvider theme={theme}>
      {children}
    </CustomProvider>
  )
};

