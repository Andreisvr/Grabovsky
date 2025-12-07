import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { success: false, error: "Missing Telegram credentials" },
        { status: 500 }
      );
    }

    let text = "";

    // =============================================================
    // 🟡 0) DETECTARE MESAJ DE PLATĂ (PAYMENT)
    // =============================================================
    if (body.payment === true || (body.message && body.message.includes("PAYMENT"))) {
      const now = new Date().toLocaleString("ro-RO", {
        timeZone: "Europe/Chisinau",
      });
    
      const { name, contact, plan, option } = body;
    
      text = `
    💳 *NEW PAYMENT REQUEST*
    ──────────────────────
    👤 *Nume:* ${name || "-"}
    📞 *Contact:* ${contact || "-"}
    📦 *Plan:* ${plan || "-"}
    🎯 *Pachet:* ${option || "-"}
    📅 *Data completării:* ${now}
    💰 *Status:* Payment – necesită verificare
    ──────────────────────
    🌐 Grabovsky Fitness Website
      `;
    }
    

    // =============================================================
    // 🔥 1) FORMULARUL PRINCIPAL — NAME + CONTACT => format complet
    // =============================================================
    else if (body.name && body.contact) {
      const { name, contact, message, meeting } = body;

      text = `
📩 *NEW FORM REQUEST*
──────────────────────
👤 *Name:* ${name}
📞 *Contact:* ${contact}
📝 *Message:* ${message || "-"}
📌 *Meeting Type:* ${meeting || "-"}
──────────────────────
Sent from website 🌐
      `;
    }

    // =============================================================
    // 🔥 2) FORMULAR COACH — doar MESSAGE
    // =============================================================
    else if (body.message) {
      text = body.message;
    }

    else {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    // =============================================================
    // 🚀 TRIMITEREA MESAJULUI CĂTRE TELEGRAM
    // =============================================================
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return NextResponse.json(
        { success: false, error: data.description },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
