import { NextRequest, NextResponse } from "next/server";
import {
  createTimeEvent,
  getTimeEvents,
  updateTimeEvent,
} from "@/server/handlers/timeEvent.handler";
import { connect, disconnect } from "@/server/db";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const image = (body.image as File) || null;
  const description = (body.description as string) || "";
  const date = (body.date as string) || "";
  const title = (body.title as string) || "";

  if (!image || !description || !date || !title) {
    return NextResponse.json(
      {
        msg: "Completa los campos obligatorios",
      },
      { status: 400 }
    );
  }

  try {
    await connect();
    const timeEvent = await createTimeEvent({
      date,
      description,
      title,
      image,
    });
    await disconnect();
    return NextResponse.json(timeEvent, { status: 201 });
  } catch (error) {
    console.log("POST /time-event: ", error);
    await disconnect();
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const image = (body.image as File) || null;
  const description = (body.description as string) || "";
  const date = (body.date as string) || "";
  const title = (body.title as string) || "";

  if (!image || !description || !date || !title) {
    return NextResponse.json(
      {
        msg: "Completa los campos obligatorios",
      },
      { status: 400 }
    );
  }

  try {
    await connect();
    const timeEvent = await updateTimeEvent({
      _id: body._id as string,
      date,
      description,
      title,
      image,
    });
    await disconnect();
    return NextResponse.json(timeEvent, { status: 204 });
  } catch (error) {
    console.log("PUT /time-event: ", error);
    await disconnect();
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connect();
    const timeEvents = await getTimeEvents();
    await disconnect();
    return NextResponse.json(timeEvents, { status: 200 });
  } catch (error) {
    console.log("GET /time-event: ", error);
    await disconnect();
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
};
