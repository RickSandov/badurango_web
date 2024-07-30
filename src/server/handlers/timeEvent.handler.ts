import { TPostTimeEvent, TPutTimeEvent, TTimeEvent } from "@/types";
import TimeEvent from "../models/timeEvent.model";
import { bucketAccessName, deleteFile, uploadFile } from "@/lib/s3";

export const createTimeEvent = async (
  timeEvent: TPostTimeEvent
): Promise<TTimeEvent> => {
  const { date, description, title, image } = timeEvent;
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const imageKey = `${date}.${image.name.split(".").pop()}`;
    await uploadFile(buffer, imageKey);
    const newTimeEvent = new TimeEvent({
      date: new Date(date),
      description,
      title,
      image: {
        url: `${bucketAccessName}/${imageKey}`,
        key: imageKey,
      },
    });
    await newTimeEvent.save();
    return newTimeEvent;
  } catch (error) {
    console.log("Error from createTimeEvent:", error);
    throw error;
  }
};

export const updateTimeEvent = async (
  timeEvent: TPutTimeEvent
): Promise<TTimeEvent> => {
  const { _id, date, description, title, image } = timeEvent;
  try {
    const timeEventToUpdate = await TimeEvent.findById(_id);
    if (!timeEventToUpdate) {
      throw Error("No se encontro el evento");
    }
    if (image) {
      await deleteFile(timeEventToUpdate.image.key);
      const buffer = Buffer.from(await image.arrayBuffer());
      const imageKey = `${date || timeEventToUpdate.date}.${image.name
        .split(".")
        .pop()}`;
      await uploadFile(buffer, imageKey);
      timeEventToUpdate.image = {
        url: `${bucketAccessName}/${imageKey}`,
        key: imageKey,
      };
    }
    const newTimeEvent = timeEventToUpdate({
      date: date ? new Date(date) : undefined,
      description,
      title,
    });
    await newTimeEvent.save();
    return newTimeEvent;
  } catch (error) {
    console.log("Error from editTimeEvent:", error);
  }
  throw Error("No implementado");
};

export const getTimeEvents = async (): Promise<TTimeEvent[]> => {
  try {
    const timeEvents = await TimeEvent.find();
    return timeEvents;
  } catch (error) {
    console.log("Error from getTimeEvents:", error);
    return [];
  }
};
