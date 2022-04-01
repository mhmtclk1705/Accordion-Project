import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  // datayı kullanma işlemi

  return (
    <main>
      {/*  style={{display:"flex"}} */}
      <div className="container">
        {/*  style={{width:"30%"}} */}
        <h3>questions and answers about login</h3>

        <section className="info">
          {/* map ile data içerisinden id yi alıyoruz geri kalanını rest ile props kullanarak singlequestion
          componentine gönderiyoruz */}
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
