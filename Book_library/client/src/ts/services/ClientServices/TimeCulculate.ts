import { BOOKING_TIME_MILLISECONDS } from "../../constants/user";

export const timeCulculate = (startDate: Date) => {
  // const date = new Date(startDate);
  // const value = ~~((BOOKING_TIME_MILLISECONDS - (Date.now() - new Date(startDate).getTime())) / 1000 / 60);
  const value = ~~(((Date.now() - new Date(startDate).getTime())) / 1000 / 60);
  // const count = new Date(Date.now() - date.getTime());
  return {
    hours: ~~(value / 60),
    minuts: value % 60,
  }
  // setTimer(count.getUTCHours().toString())
  // setTimer(date.getHours())
  // console.log(count.getHours());
  // console.log(count.getMinutes());
//   console.log(date.getUTCHours());
//   console.log(date.getMinutes());
//   console.log(date.getTime());
//   console.log(now.getTime());
}