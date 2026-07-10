import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ContentTooltipProps {
  rule: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContentTooltip = ({ rule, open, onOpenChange }: ContentTooltipProps) => {
  // After a tap/click opens the tooltip, Radix fires onOpenChange(false) via pointerleave.
  // We block that one automatic close so the tooltip stays visible on mobile.
  const skipNextCloseRef = useRef(false);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && skipNextCloseRef.current) {
      skipNextCloseRef.current = false;
      return;
    }
    onOpenChange(newOpen);
  };

  return (
    <Tooltip open={open} onOpenChange={handleOpenChange}>
      <TooltipTrigger asChild>
        <button
          onPointerDown={(e) => {
            e.preventDefault();
            if (!open) {
              // We're opening — mark to skip the immediate Radix close
              skipNextCloseRef.current = true;
            }
            onOpenChange(!open);
          }}
          className="text-muted-foreground/50 hover:text-primary transition-colors leading-none font-display text-[10px] uppercase tracking-wider border border-current rounded px-1 py-0.5"
          aria-label="Show grammar hint"
        >
          hint
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-56 text-center font-display text-sm">
        {rule}
      </TooltipContent>
    </Tooltip>
  );
};

export default ContentTooltip;
