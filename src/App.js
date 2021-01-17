import React from 'react';
import Counter from './components/Counter/Counter';

const App = () => (
  <div>
    <Counter />
    </div>
  );

export default App;

//Шаг3
//Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
//Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
//Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.

//Шаг4
//Расширь функционал приложения так, чтобы блок статистики рендерился только после того, как был собран хотя бы один отзыв. 
//Сообщение об отсутствиии статистики вынеси в компонент < Notification message = "No feedback given" >