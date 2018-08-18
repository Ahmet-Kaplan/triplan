import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { inject } from 'mobx-react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;
`;

@inject(allStores => ({
  deletePlace: allStores.store.deletePlace}))
class Place extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.thePlace.id} index={this.props.index}>
      {provided => (
          <Container
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
            <button onClick={()=>this.props.deletePlace(this.props.index)}>X</button>
              {this.props.thePlace.name}
          </Container>
      )}

      </Draggable>
    );
  }
}

export default Place;