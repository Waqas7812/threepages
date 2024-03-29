import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import ChartPage from './ChartPage';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter >
    <Routes>

      <Route path='/' element={<Homepage />} />
      <Route path="chart" element={<ChartPage />} />
      <Route path="todo" element={<TodoList />} />


    </Routes>
  </BrowserRouter >


  );
}

export default App;
