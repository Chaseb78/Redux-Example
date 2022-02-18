import React from 'react';
import './uiContainer.css';
import { connect } from 'react-redux';

const UIContainer = ({
  updateWeight,
  currentWeight,
  updateName,
  currentName,
  addTen,
  subTen,
  multiplyByTen,
  divideByTen,
  currentAmount,
}) => {
  return (
    <div className="uiformat">
      <h1> Redux Example </h1>
      <h3>{currentName}</h3>
      <h3>{currentWeight}</h3>
      <h3>{currentAmount}</h3>
      <input
        onChange={(event) => updateName(event.target.value)}
        placeholder="Change Name"
      />
      <input
        onChange={(event) => updateWeight(event.target.value)}
        placeholder="Change weight"
      />
      <button onClick={() => addTen()}>add by 10</button>
      <button onClick={() => subTen()}>sub by 10</button>
      <button onClick={() => multiplyByTen()}>multiply by ten</button>
      <button onClick={() => divideByTen()}>divide by 10</button>
    </div>
  );
};

const MapStateToProps = (state) => ({
  currentName: state.name,
  currentWeight: state.weight,
  currentAmount: state.amount,
});

const MapDispatchToProps = (dispatch) => {
  return {
    updateName: (value) => dispatch({ type: 'UPDATE_NAME', value }),
    updateWeight: (value) => dispatch({ type: 'UPDATE_WEIGHT', value }),
    addTen: () => dispatch({ type: 'ADD_TEN' }),
    subTen: () => dispatch({ type: 'SUB_TEN' }),
    multiplyByTen: () => dispatch({ type: 'MULTIPLY_BY_TEN' }),
    divideByTen: () => dispatch({ type: 'DIVIDE_BY_TEN' }),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(UIContainer);
