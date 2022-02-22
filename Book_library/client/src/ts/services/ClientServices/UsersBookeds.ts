import { IBookResponse } from "../../types/IBookResponse";
import { IUsersAndBookeds } from "../../types/IUsersAndBookeds";
import BookedService from "../BookedService";
import BookService from "../BookService";
import UserService from "../UserService";

export const usersBookeds = async (userID: string) => {
  const bookeds = await (await BookedService.getAllBookedsByUserID(userID)).data;
  const userBooks = [] as IBookResponse[];

  for (let i = 0; i < bookeds.length; i++) {
    let book = await (await BookService.getBookByID(bookeds[i].bookID)).data;
    userBooks.push(book)
  };

  return userBooks;
};

export const allUserAndBookeds = async () => {
  const allBookeds = await (await BookedService.getBookeds()).data;
  const newUserID: string[] = [];
  const allUserBookeds: IUsersAndBookeds[] = [];

  for (let i = 0; i < allBookeds.length; i++) {
    if (!newUserID.includes(allBookeds[i].userID)) {
      newUserID.push(allBookeds[i].userID);
      const user = await (await UserService.getUserByID(allBookeds[i].userID)).data;
      const userBooks = await usersBookeds(allBookeds[i].userID);
      allUserBookeds.push({user: user, userBooks: userBooks})
    }
  }
  return allUserBookeds;
}