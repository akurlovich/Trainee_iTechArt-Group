import React, { FC } from "react";
import { IBookResponse } from "../../../types/IBookResponse";

interface IProps {
  book: IBookResponse;
  isIssued: boolean;
  isBooked: boolean;
  canselBookingHandler: () => void;
  bookingHandler: () => void;
}

const BookItemMainInner: FC<IProps> = ({
  book,
  isIssued,
  isBooked,
  canselBookingHandler,
  bookingHandler,
}) => {
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
          {isIssued ? (
            <div className="bookitem__button booked">Already booked</div>
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
