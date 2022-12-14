import React, { useState, useEffect } from "react";
import { ThirdCss } from "./style";
import { MainCard } from "../../components/MainCard";
import chat from "../../assets/chat.png";
import poSit from "../../assets/po_sit.png";
import StartBtn from "../../components/StartBtn";
import { thirdData } from "./data";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { CatCard1, CatCard2, CatCard3 } from "../../components/CatCard";
import { handleFullDrop } from "../../utils/process";
import { PageProps } from "../../utils/interfaces";

const Third: React.FC<PageProps> = ({ nextPage }) => {
  const [itemObj, setItemObj] = useState(thirdData);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(handleFullDrop(itemObj, 0));
  }, [itemObj]);

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
    <ThirdCss className="position-relative">
      <div className="dCenter cards">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId={Object.entries(itemObj)[0][0]}
            key={Object.entries(itemObj)[0][0]}
          >
            {(provided, snapshot) => (
              <MainCard
                className="mainCard fdc"
                width={"594px"}
                height={"604px"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {Object.entries(itemObj)[0][1].items.map((item, index) => {
                  return parseInt(item.priority) % 2 !== 0 ? (
                    <CatCard1 item={item} index={index} key={index} />
                  ) : (
                    <CatCard2 item={item} index={index} key={index} />
                  );
                })}
                {provided.placeholder}
              </MainCard>
            )}
          </Droppable>

          <MainCard className="mainCard2 fdc" width={"594px"} height={"604px"}>
            <>
              <h2 className="Header text-center text-white">
                ?????????????????? Product Backlog
              </h2>
              {Object.entries(itemObj).map(([key, values], idx) => {
                return idx !== 0 ? (
                  <CatCard3
                    item={values.items}
                    title={values.title}
                    valueKey={key}
                    key={idx}
                  />
                ) : null;
              })}
            </>
          </MainCard>
        </DragDropContext>
      </div>
      <StartBtn to={disable ?"/forth" :''} text={"????????????"} disable={disable} handleClick={[nextPage]}/>
      <img src={chat} alt="" className="chat position-absolute" />
      <img src={poSit} alt="" className="poSit position-absolute" />
    </ThirdCss>
  );
};
export default Third;
