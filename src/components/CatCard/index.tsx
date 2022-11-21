import React from "react";
import { CatCardCss1, CatCardCss2, CatCardCss3 } from "./style";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface CarCardProps {
  item: any;
  index: any;
}

export const CatCard1: React.FC<CarCardProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <CatCardCss1
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="contain h-100 w-100 dCenter">
              <p className="text text-center ">
                {item.content.split("<br/>")?.map((ele: string, idx: number) =>
                  idx === 0 ? (
                    <React.Fragment key={idx}>{ele}</React.Fragment>
                  ) : (
                    <React.Fragment key={idx}>
                      <br />
                      {ele}
                    </React.Fragment>
                  )
                )}
              </p>
            </div>
          </CatCardCss1>
        );
      }}
    </Draggable>
  );
};

export const CatCard2: React.FC<CarCardProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <CatCardCss2
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="contain h-100 w-100 dCenter">
              <p className="text text-center ">
                {item.content.split("<br/>")?.map((ele: string, idx: number) =>
                  idx === 0 ? (
                    <React.Fragment key={idx}>{ele}</React.Fragment>
                  ) : (
                    <React.Fragment key={idx}>
                      <br />
                      {ele}
                    </React.Fragment>
                  )
                )}
              </p>
            </div>
          </CatCardCss2>
        );
      }}
    </Draggable>
  );
};

export const CatCard3: React.FC<CarCardProps> = ({ item, index }) => {
    console.log(item)
  return (
    <Droppable droppableId="productBacklog">
      {(provided, snapshot) => (
        <CatCardCss3 ref={provided.innerRef} {...provided.droppableProps}>
          <Draggable draggableId={item.id} index={index}>
            {(provided, snapshot) => {
              return (
                <div
                  className="contain h-100 w-100 dCenter"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <p className="text text-center ">{item.content}</p>
                </div>
              );
            }}
          </Draggable>
          {provided.placeholder}
        </CatCardCss3>
      )}
    </Droppable>
  );
};
