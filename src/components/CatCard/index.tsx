import React from "react";
import {
  CatCardCss1,
  CatCardCss2,
  CatCardCss3,
  CatCardCss4,
  CatCardCss5,
} from "./style";
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { CarCardProps, CatCard3Props } from "./cardInterface";
import mouth from "../../assets/mouth.png";
import eye from "../../assets/eye.png";
import symbolsDrag from "../../assets/symbols_drag.png";

export const CatCard1: React.FC<CarCardProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <CatCardCss1
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDrag={snapshot.isDragging}
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
            isDrag={snapshot.isDragging}
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

export const CatCard3: React.FC<CatCard3Props> = ({
  item,
  title,
  valueKey,
}) => {
  return (
    <Droppable droppableId={valueKey}>
      {(provided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <CatCardCss3
          ref={provided.innerRef}
          {...provided.droppableProps}
          haveItem={item.length > 0}
          style={{}}
        >
          {item.length ? (
            item.map((ele, idx) => (
              <Draggable draggableId={valueKey} index={idx} key={idx}>
                {(provided, snapshot) => {
                  return (
                    <div
                      className="contain dCenter "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.length !== 0 && <CatCard4 text={ele.content} />}
                    </div>
                  );
                }}
              </Draggable>
            ))
          ) : (
            <div className="contain h-100 w-100 dCenter">
              {!dropSnapshot.isDraggingOver && (
                <p className="text text-center ">{title}</p>
              )}
            </div>
          )}
          {provided.placeholder}
        </CatCardCss3>
      )}
    </Droppable>
  );
};

export const CatCard4: React.FC<any> = ({ text }) => {
  return (
    <CatCardCss4>
      <img src={symbolsDrag} alt="" className="symbolsDrag" />
      <p className="text text-white">
        {text.split("<br/>")?.map((ele: string, idx: number) =>
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
      <div className="catFace dCenter">
        <div className="w-100 d-flex justify-content-between">
          <img src={eye} alt="" className="eye" />
          <img src={eye} alt="" className="eye" />
        </div>
        <img src={mouth} alt="" className="mouth" />
      </div>
    </CatCardCss4>
  );
};

export const CatCard5: React.FC<CarCardProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <CatCardCss5
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDrag={snapshot.isDragging}
          >
            <div className="contain h-100 w-100 dCenter">
              <div className="ball dCenter">
                <span>{item.priority}</span>
              </div>

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
              {!snapshot.isDragging && (
                <div className="catFace dCenter">
                  <div className="w-100 d-flex justify-content-between">
                    <img src={eye} alt="" className="eye" />
                    <img src={eye} alt="" className="eye" />
                  </div>
                  <img src={mouth} alt="" className="mouth" />
                </div>
              )}
            </div>
          </CatCardCss5>
        );
      }}
    </Draggable>
  );
};
