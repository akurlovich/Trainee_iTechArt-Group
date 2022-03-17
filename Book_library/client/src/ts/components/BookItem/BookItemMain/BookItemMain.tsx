import React, { FC, useEffect } from "react";
import { IBookResponse } from "../../../types/IBookResponse";

interface IProps {
  book: IBookResponse;
  isIssued: boolean;
  isBooked: boolean;
  blocked: boolean;
  canselBookingHandler: () => void;
  bookingHandler: () => void;
};

interface IMSGProps {
  id: string,
  bookTitle: string,
  method: string,
};

const BookItemMainInner: FC<IProps> = ({
  book,
  isIssued,
  isBooked,
  blocked,
  canselBookingHandler,
  bookingHandler,
}) => {

  const socket = new WebSocket(`ws://localhost:4000/`);

  useEffect(() => {
    socket.onopen = () => {
      console.log('Connect to server');
      socket.send(JSON.stringify({
        id: book._id,
        bookTitle: book.title,
        method: 'connection',
      }))
   };
    socket.onmessage = (event) => {
      let msg: IMSGProps = JSON.parse(event.data);
      switch (msg.method) {
        case 'connection':
          console.log(`!!!!!!!!!! ${msg.bookTitle}`)
          break;
      }

    };
  // const socketHandler = () => {
  //   socket.send('hi server')
  // }
  }, [])

  const socketHandler = () => {
    socket.send(JSON.stringify({
      id: book._id,
      bookTitle: book.title,
      method: 'connection',
    }))
  }
  

  return (
    <div className="bookitem__main">
      <div className="bookitem__main__cover">
        <img
          className="bookitem__main__cover__image"
          src={book?.coverImage}
          alt="book cover"
        />
      </div>
      <div className="bookitem__info">
        <div className="bookitem__title">
          <button onClick={socketHandler}>click</button>
          {/* {commentsByBookID.length && commentsByBookID[0].comment} */}
          {book?.title}
        </div>
        <div className="bookitem__detaile">
          <div className="bookitem__author">{book?.author}</div>
          <div className="bookitem__year">{book?.year}</div>
          <div className="bookitem__year">{book?.genre[0]}</div>
        </div>
        <div className="bookitem__description">{book?.description}</div>
        <div className="bookitem__buttons">
          {blocked ? <div className="bookitem__button booked warning">You are blocked!</div>
            :
          isIssued ? (
            <div className="bookitem__button booked">Already issued</div>
          ) : isBooked ? (
            <>
              <div className="bookitem__button booked">Already booked</div>
              <button
                onClick={canselBookingHandler}
                className="bookitem__button booking"
              >
                Cansel Booking
              </button>
            </>
          ) : book.amount <= 0 ? (
            <div className="bookitem__button booked warning">
              Sorry, out of stock
            </div>
          ) : (
            <button
              onClick={bookingHandler}
              className="bookitem__button booking"
            >
              Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const BookItemMain = React.memo(BookItemMainInner);
