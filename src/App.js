import React from 'react';
import Counter from './components/Counter/Counter';

const App = () => (
  <div>
    <Counter />
    </div>
  );

export default App;



//Шаг4
//Расширь функционал приложения так, чтобы блок статистики рендерился только после того, как был собран хотя бы один отзыв. 
//Сообщение об отсутствиии статистики вынеси в компонент < Notification message = "No feedback given" >