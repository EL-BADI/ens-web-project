import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const KeyBoardKey = ({
  Icon,
  symbol,
  className,
}: {
  Icon?: ReactNode;
  symbol?: string;
  className?: string;
}) => {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border  bg-zinc-300 px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto",
        className
      )}
    >
      {Icon && <span className="text-xs">{Icon}</span>}
      {symbol}
    </kbd>
  );
};

export default KeyBoardKey;
