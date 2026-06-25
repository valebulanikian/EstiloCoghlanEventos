import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      guests,
      howDidYouKnow,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }

    const formattedDate = eventDate
      ? new Date(eventDate).toLocaleDateString('es-AR')
      : 'No especificada';

    const html = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.6;">
        <h2 style="color: #728d69; margin-bottom: 8px;">Nueva consulta desde Estilo Coghlan</h2>
        <p style="margin-top: 0;">Recibiste una nueva solicitud desde el formulario web.</p>

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

        <h3 style="color: #728d69;">Datos de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>

        <h3 style="color: #728d69; margin-top: 24px;">Datos del evento</h3>
        <p><strong>Tipo de evento:</strong> ${eventType || 'No especificado'}</p>
        <p><strong>Fecha del evento:</strong> ${formattedDate}</p>
        <p><strong>Cantidad de invitados:</strong> ${guests || 'No especificada'}</p>
        <p><strong>¿Cómo nos conoció?:</strong> ${howDidYouKnow || 'No especificado'}</p>

        <h3 style="color: #728d69; margin-top: 24px;">Mensaje</h3>
        <div style="background: #f8f8f8; padding: 16px; border-radius: 10px; border: 1px solid #eee;">
          ${message.replace(/\n/g, '<br />')}
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'Estilo Coghlan <onboarding@resend.dev>',
      to: 'estilocoghlan.eventos@gmail.com',
      replyTo: email,
      subject: `Nueva consulta de ${name} - ${eventType || 'Evento'}`,
      html,
    });

    if (error) {
      console.error('Error Resend:', error);

      return NextResponse.json(
        { error: 'No se pudo enviar el email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error en /api/contact:', error);

    return NextResponse.json(
      { error: 'Ocurrió un error al procesar la solicitud.' },
      { status: 500 }
    );
  }
}