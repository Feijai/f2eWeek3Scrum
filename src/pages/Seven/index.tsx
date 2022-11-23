import React, { useState } from "react";
import { SevenCss } from "./style";
import { MainCard } from "../../components/MainCard";
import avatar_dev1 from "../../assets/avatar_dev1.png";
import chat_join from "../../assets/chat_join.png";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import StartBtn from "../../components/StartBtn";
import { sevenData } from "./sevenData";

export default function Seven() {
  const [itemObj, setItemObj] = useState(sevenData);
  const [page, setPage] = useState(1);
  const handleClick = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = itemObj[source.droppableId];
      const destColumn = itemObj[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);
      setItemObj({
        ...itemObj,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = itemObj[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setItemObj({
        ...itemObj,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
    // setDisable(handleFullDrop());
  };

  return (
    <SevenCss>
      <div className="dCenter">
        {page === 1 && (
          <MainCard
            width={"100%"}
            height={"736px"}
            className="mainCard position-relative"
          >
            <div>
              <img src={avatar_dev1} alt="" className="avatar" />
              <button onClick={() => handleClick()}>
                <img
                  src={chat_join}
                  alt=""
                  className="join"
                  style={{ marginLeft: "1rem" }}
                />
              </button>
            </div>
          </MainCard>
        )}
        {page === 2 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <MainCard
              width={"100%"}
              height={"736px"}
              className="mainCard2 position-relative"
            >
              <Droppable
                droppableId={Object.entries(itemObj)[0][0]}
                key={Object.entries(itemObj)[0][0]}
              >
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {Object.entries(itemObj)[0][1].items.map((item, index) => (
                      <>123</>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <StartBtn to={""} text={"完成挑戰"} disable={false} />
            </MainCard>
          </DragDropContext>
        )}
      </div>
    </SevenCss>
  );
}
