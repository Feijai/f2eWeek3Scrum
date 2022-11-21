import React, { useState } from "react";
import { ThirdCss } from "./style";
import { MainCard } from "../../components/MainCard";
import chat from "../../assets/chat.png";
import poSit from "../../assets/po_sit.png";
import StartBtn from "../../components/StartBtn";
import { thirdData } from "./data";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { CatCard1, CatCard2, CatCard3 } from "../../components/CatCard";

const Third: React.FC = () => {
  const [itemObj, setItemObj] = useState(thirdData);

  const onDragEnd = (event: DropResult) => {
    console.log("===event===", event);
    const { source, destination } = event;
    if (!destination) {
      return;
    }
    // // 拷貝新的items (來自state)
    // let newItemObj = { ...itemObj };
    // const a = source.droppableId as "candidate";
    // // splice(start, deleteCount, item )
    // // 從source剪下被拖曳的元素
    // const [remove] = newItemObj[
    //   source.droppableId as keyof typeof newItemObj
    // ].items.splice(source.index, 1);
    // // 在destination位置貼上被拖曳的元素
    // newItemObj[destination.droppableId as keyof typeof newItemObj].items.splice(
    //   destination.index,
    //   0,
    //   remove
    // );
    // set state新的 itemObj
    // setItemObj(newItemObj);

    // 確認productBacklog順序
    // const checkProductBacklogOrder = () => {
    //   const currentProductBacklogOrder = newItemObj.productBacklog.items.map(
    //     (ele) => {
    //       return ele.priority;
    //     }
    //   );
    //   return currentProductBacklogOrder.join("") === answerAry.join("")
    //     ? true
    //     : false;
    // };
    // setIsOrderCorret(checkProductBacklogOrder);
  };

  return (
    <ThirdCss className="position-relative">
      <div className="dCenter cards">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="candidate">
            {(provided, snapshot) => (
              <MainCard
                className="mainCard fdc"
                width={"594px"}
                height={"604px"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {itemObj.candidate.items.map((item, index) => {
                  return parseInt(item.priority) % 2 !== 0 ? (
                    <CatCard1 item={item} index={index} key={item.id} />
                  ) : (
                    <CatCard2 item={item} index={index} key={item.id} />
                  );
                })}
                {provided.placeholder}
              </MainCard>
            )}
          </Droppable>

          <MainCard className="mainCard2 fdc" width={"594px"} height={"604px"}>
            <h2 className="Header text-center text-white">
              產品代辦清單 Product Backlog
            </h2>
            {Object.keys(itemObj.productBacklog).map((item, index) => 
              <CatCard3
                item={
                  itemObj.productBacklog[
                    item as keyof typeof itemObj.productBacklog
                  ]
                }
                index={index}
                key={index}
              />
            )}
          </MainCard>
        </DragDropContext>
      </div>
      <StartBtn to={""} text={"完成清單"} disable={false} />
      <img src={chat} alt="" className="chat position-absolute" />
      <img src={poSit} alt="" className="poSit position-absolute" />
    </ThirdCss>
  );
};
export default Third;
