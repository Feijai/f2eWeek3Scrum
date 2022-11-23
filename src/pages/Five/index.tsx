import React, { useState, useEffect } from "react";
import { FiveCss } from "./style";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import {
  CatCard1,
  CatCard2,
  CatCard3,
  CatCard5,
} from "../../components/CatCard";
import { MainCard } from "../../components/MainCard";
import { fiveData } from "./fiveData";
import StartBtn from "../../components/StartBtn";

export default function Five() {
  const [itemObj, setItemObj] = useState(fiveData);
  const [disable, setDisable] = useState(false);
  const [productTotal, setProductTotal] = useState(0);
  const [runTotal, setRunTotal] = useState(0);

  useEffect(() => {
    let product = 0;
    let run = 0;
    Object.entries(itemObj).forEach(([key, value], idx) => {
      if (idx === 0) {
        product = itemObj[key].items.reduce(
          (pre, current) => pre + parseInt(current.priority),
          0
        );
      }
      if (idx !== 0) {
        run += itemObj[key].items[0]
          ? parseInt(itemObj[key].items[0].priority)
          : 0;
      }
    });

    setProductTotal(product);
    setRunTotal(run);
    run>20? setDisable(false) : setDisable(true)

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
    <FiveCss className="position-relative">
      <p className="headText text-center">
        把待辦清單在點數限制內移動到短衝代辦清單
      </p>
      <div className="dCenter cards">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId={Object.entries(itemObj)[0][0]}
            key={Object.entries(itemObj)[0][0]}
          >
            {(provided, snapshot) => (
              <MainCard
                className="mainCard fdc"
                width={"564px"}
                height={"644px"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <>
                  <h2 className="text-center">產品代辦清單 Product Backlog</h2>
                  <p className="text-center productTotal">
                    共<span className="totalHighLight">{productTotal}</span>點
                  </p>
                  {Object.entries(itemObj)[0][1].items.map((item, index) => (
                    <CatCard5 item={item} index={index} key={index} />
                  ))}
                  {provided.placeholder}
                </>
              </MainCard>
            )}
          </Droppable>

          <MainCard className="mainCard2 fdc" width={"564px"} height={"644px"}>
            <>
              <h2 className="Header text-center text-white">
                開發騎士的短衝代辦清單
              </h2>
              <p className="text-center productTotal">
                <span className="totalHighLight">{runTotal}</span> 點 / 20 點
                (5人)
              </p>
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
      <StartBtn
        to={""}
        text={disable ? "完成清單" : "超過20點！請再調整清單"}
        disable={disable}
      />
    </FiveCss>
  );
}
