import React from "react";
import { useDrop } from "react-dnd";
import { cn } from "@/lib/utils";
import { ContentBlock } from "./types";
import { Plus } from "lucide-react";

interface DropZoneProps {
  position: number;
  onBlockDrop: (block: ContentBlock, position: number) => void;
  isEmpty?: boolean;
}

export const DropZone: React.FC<DropZoneProps> = ({
  position,
  onBlockDrop,
  isEmpty = false,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "block",
      drop: (item: any, monitor) => {
        console.log("DropZone drop detected at position:", position, "item:", item);
        if (item && item.block) {
          console.log("Calling onBlockDrop with block type:", item.block.type);
          onBlockDrop(item.block, position);
          return { handled: true };
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [position, onBlockDrop]
  );

  if (isEmpty) {
    return (
      <div
        ref={drop}
        className={cn(
          "w-full py-12 px-4 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-all duration-200",
          isOver && canDrop
            ? "border-valasys-orange bg-orange-100 scale-105"
            : "border-gray-300 bg-gray-50 hover:border-valasys-orange hover:bg-orange-50"
        )}
        style={{ minHeight: "150px", cursor: "grab" }}
      >
        <Plus className={cn(
          "w-10 h-10 mb-3 transition-all",
          isOver ? "text-valasys-orange scale-125" : "text-gray-400"
        )} />
        <p className={cn(
          "font-semibold transition-colors",
          isOver ? "text-valasys-orange" : "text-gray-700"
        )}>
          {isOver ? "Release to add block" : "Drop a block here"}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Drag any block from the left sidebar
        </p>
      </div>
    );
  }

  return (
    <div
      ref={drop}
      className={cn(
        "w-full transition-all duration-150 rounded",
        isOver && canDrop
          ? "bg-valasys-orange h-8 my-1"
          : "h-1 my-3 bg-gray-300 hover:bg-orange-400 hover:h-2"
      )}
      style={{
        minHeight: isOver && canDrop ? "32px" : "4px",
        cursor: canDrop ? "grab" : "default",
      }}
    />
  );
};
