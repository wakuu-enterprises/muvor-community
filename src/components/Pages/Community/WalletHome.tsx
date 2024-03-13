import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Element = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
`;

const App = () => {
  const [positions, setPositions] = useState({
    wallets: 0,
    offerings: 1,
    timeline: 2,
    photos: 3,
    portfolioSummary: 4,
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newPositions = { ...positions };
    const [removed] = newPositions[result.source.droppableId].splice(
      result.source.index,
      1
    );
    newPositions[result.destination.droppableId].splice(
      result.destination.index,
      0,
      removed
    );

    setPositions(newPositions);
  };

  return (
    <Container>
      <SummaryRow>
        <div>Xchange</div>
        <div>Value</div>
        <div>Power Index</div>
        <div>Hours Logged On</div>
        <div>Game Score</div>
      </SummaryRow>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {Object.entries(positions).map(([element, index]) => (
                <Draggable key={element} draggableId={element} index={index}>
                  {(provided) => (
                    <Element
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {element}
                    </Element>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default App;
