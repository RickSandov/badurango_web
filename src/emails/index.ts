import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { DonationReceiptEmail } from "./receipt-email";
import { TDonor, TProduct } from "@/types";

export async function sendSuccessDonationEmail({
  to,
  donor,
  donationDate,
  product,
  total,
}: {
  to: string;
  donor: TDonor;
  donationDate: string;
  product?: TProduct;
  total: number;
}) {
  try {
    const emailHtml = render(
      DonationReceiptEmail({ donor, donationDate, product, total })
    );

    const options = {
      from: `Banco de Alimentos Durango <${process.env.EMAIL}>`,
      to,
      // subject: `Tu pedido ${order.orderNumber} va en camino!`,
      subject: `Gracias por tu donación`,
      html: emailHtml,
    };

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL || "",
        pass: process.env.EMAIL_PASSWORD || "",
        // production
        // user: "i.s.ricardo.sandoval@gmail.com", // development
        // pass: "zsxyyrugfktoayzt", // development
      },
    });

    transporter.verify().then(async () => {
      const send = await transporter.sendMail(options);
      console.log({ send });
    });
  } catch (error) {
    console.log("error from email index", { error });
  }
}
