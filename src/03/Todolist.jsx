// 배열 컴포넌트 (key값 정의 반드시 필요)
import React, { Component } from 'react';

class Todolist extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finshed: true },
      { taskName: '공부하기', finshed: false },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
