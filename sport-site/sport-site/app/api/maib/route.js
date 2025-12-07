import path from "path";
import { NextResponse } from "next/server";
import MAIB from "nodejs-maib";

const certPath = path.join(process.cwd(), "certs", "0149583.pem");

const maib = new MAIB(
  certPath,
  "Za86DuC$",
  "https://maib.ecommerce.md:21440/ecomm/MerchantHandler"
);

export async function POST(req) {
  try {
    const body = await req.json();
    const amount = body.amount ?? 2000;
    const ip = body.ip ?? "127.0.0.1";

    const result = await maib
      .setDescription("Plată test abonament antrenor")
      .setClientIpAddress(ip)
      .setLanguage("ro")
      .setCurrency(498)
      .setAmount(amount)
      .createTransaction();

    const redirectUrl = `https://maib.ecommerce.md:21443/ecomm/ClientHandler?trans_id=${result.TRANSACTION_ID}`;
    return NextResponse.json({ redirectUrl });
  } catch (err) {
    console.error("Eroare tranzacție MAIB:", err);
    return NextResponse.json({ error: "Eroare la crearea tranzacției MAIB" }, { status: 500 });
  }
}
