import React, { useState, useEffect } from "react";
import { SevenCss } from "./style";
import { MainCard } from "../../components/MainCard";
import avatar_dev1 from "../../assets/avatar_dev1.png";
import chat_join from "../../assets/chat_join.png";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import StartBtn from "../../components/StartBtn";
import { sevenData, sevenAnswer } from "./sevenData";
import MeetingCard from "./MeetingCard";
import { handleFullDrop, handleAnswer } from "../../utils/process";

export default function Seven() {
  const [itemObj, setItemObj] = useState(sevenData);
  const [finish, setFinish] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [page, setPage] = useState(1);
  const handleClick = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  const handleFinish = () => {
    if (!answer) {
      setPage(3);
    }
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
  };
  useEffect(() => {
    setFinish(handleFullDrop(itemObj, 3));
    setAnswer(handleAnswer(itemObj, 3, sevenAnswer));
  }, [itemObj, finish]);

  console.log(answer);
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
              <div className="todo">
                {Object.entries(itemObj).map(([key, values], idx) => (
                  <>
                    {idx < 4 && (
                      <Droppable droppableId={key} key={key}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <>
                              {itemObj[key].items.length > 0 ? (
                                itemObj[key].items.map((item, index) => (
                                  <MeetingCard
                                    item={item}
                                    index={index}
                                    key={index}
                                  />
                                ))
                              ) : (
                                <div className="dropItem empty"></div>
                              )}
                              {provided.placeholder}
                            </>
                          </div>
                        )}
                      </Droppable>
                    )}
                  </>
                ))}
              </div>
              <div className="toDrop position-relative">
                {Object.entries(itemObj).map(([key, values], idx) => (
                  <>
                    {idx > 3 && (
                      <Droppable droppableId={key} key={key}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`dropItem d-flex toDrop${idx} position-absolute dCenter ${
                              itemObj[key].items.length !== 0 ? "full" : ""
                            }`}
                          >
                            <>
                              {!snapshot.isDraggingOver &&
                              itemObj[key].items.length === 0 ? (
                                <>{itemObj[key].title}</>
                              ) : (
                                itemObj[key].items.map((ele, idx) => (
                                  <Draggable
                                    draggableId={key}
                                    index={idx}
                                    key={idx}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          className="dCenter "
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <>{ele.content}</>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                ))
                              )}
                            </>

                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    )}
                  </>
                ))}
              </div>
              <StartBtn
                to={""}
                text={"完成挑戰"}
                disable={finish}
                handleClick={handleFinish}
              />
            </MainCard>
          </DragDropContext>
        )}
      </div>
    </SevenCss>
  );
}
