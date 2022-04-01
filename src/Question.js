import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* click yönteminde setShow ile show false ise true true ise false olması için  !showInfo kullanıyoruz */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* eğer show info true ise - false ise + iconu gözükmesi için  */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* show infonun true olduğu durumda collapse açılsın ve p tagi içerisindeki info gözüksün istiyoruz */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
