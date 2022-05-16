import axios from "axios";
import React, { useState } from "react";
import "./modal.css";

const Modal = ({ modal, setModal }) => {
  const [inputName, setName] = useState("");
  const [inputAddress, setAddress] = useState("");
  const [inputTelNumber, setTelNumber] = useState("");
  const [inputDate, setDate] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [comment, setComment] = useState("");

  const [visibleModalNumber, setVisibleModalNumber] = useState(0);

  const http = axios.create({
    headers: {
      // Прикрепляем заголовок, отвечающий за параметры запуска.
      Authorization: "12345",
    },
  });

  const closeModal = () => {
    setModal({ isOpen: false, freeTime: [] });
    setVisibleModalNumber(0);
  };

  const clearInputs = () => {
    setName("");
    setAddress("");
    setTelNumber("");
    setDate("");
    setTimeStart("");
    setTimeEnd("");
    setComment("");
  };

  const sendRecord = () => {
    http
      .post("http://127.0.0.1:18301/" + "addZakaz", {
        name: inputName,
        address: inputAddress,
        fhoneNumber: inputTelNumber,
        date: inputDate,
        timeStart: timeStart,
        timeEnd: timeEnd,
      })
      .then(() => {
        clearInputs();
        setVisibleModalNumber(1);
      })
      .catch(() => {
        clearInputs();
        setVisibleModalNumber(2);
      });
  };

  return (
    <div
      className={
        modal.isOpen ? "modal__background modal_active" : "modal__background"
      }
      onClick={() => closeModal()}
    >
      <div
        className="modal__content"
        style={{
          display: `${visibleModalNumber === 0 ? "" : "none"}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__input">
          <p className="modal__input__p">Введите ваше имя</p>
          <input
            className="modal__input__input"
            value={inputName}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>

        <div className="modal__input">
          <p className="modal__input__p">Введите ваш адрес</p>
          <input
            className="modal__input__input"
            value={inputAddress}
            onChange={(event) => setAddress(event.target.value)}
          ></input>
        </div>

        <div className="modal__input">
          <p className="modal__input__p">Введите ваш номер телефона</p>
          <input
            className="modal__input__input"
            value={inputTelNumber}
            onChange={(event) => setTelNumber(event.target.value)}
          ></input>
        </div>

        <div className="modal__input">
          <p className="modal__input__p">Введите дату</p>
          <input
            className="modal__input__input"
            value={inputDate}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </div>

        <div>
          <p className="modal__input__p" style={{ marginTop: "20px" }}>
            Выберете время
          </p>
          <div className="modal__time_array">
            {modal.freeTime.map((time) => (
              <p className="modal__time_array__p">{time}</p>
            ))}
          </div>
          <div>
            <div className="modal__input">
              <p className="modal__input__p">Начало</p>
              <input
                className="modal__input__input"
                value={timeStart}
                onChange={(event) => setTimeStart(event.target.value)}
              ></input>
            </div>
            <div className="modal__input">
              <p className="modal__input__p">Конец</p>
              <input
                className="modal__input__input"
                value={timeEnd}
                onChange={(event) => setTimeEnd(event.target.value)}
              ></input>
            </div>
          </div>

          <div className="modal__input">
            <p className="modal__input__p">Комментарий к заказу</p>
            <input
              className="modal__input__input"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></input>
          </div>
        </div>

        <button className="modal__btn" onClick={sendRecord}>
          Отправить
        </button>
      </div>

      <div
        className="modal__content"
        style={{
          display: `${visibleModalNumber === 1 ? "" : "none"}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Успех
      </div>

      <div
        className="modal__content"
        style={{
          display: `${visibleModalNumber === 2 ? "" : "none"}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Не успех
      </div>
    </div>
  );
};

export { Modal };
