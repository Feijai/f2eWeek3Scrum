import React from "react";
import { MeetingCardCss } from "./style";
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

const MeetingCard: React.FC<any> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index} >
      {(provided, snapshot) => {
        return (
          <MeetingCardCss
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDrag={snapshot.isDragging}
          >
            <div className="dCenter contain w-100 h-100">
              <p className="text text-center ">{item.content}</p>
            </div>
          </MeetingCardCss>
        );
      }}
    </Draggable>
  );
};

export default MeetingCard;
