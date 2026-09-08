import { NextResponse } from 'next/server';
import { studio } from '@/data/studio';

// Destination des demandes : la boîte du salon, surchargeable par variable d'env.
const TO = process.env.CONTACT_TO_EMAIL ?? studio.email;
// Resend n'autorise un expéditeur personnalisé qu'avec un domaine vérifié.
// Sans domaine, son adresse de démarrage fait le travail.
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Barberousse Tattoo <onboarding@resend.dev>';

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  styles?: string[];
  size?: string;
  message?: string;
  // Champ invisible : seuls les robots le remplissent.
  website?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    if (body.website) {
      // Piège à robots : on répond comme si tout allait bien, sans rien envoyer.
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name) return NextResponse.json({ error: 'Nom requis' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    if (!message) return NextResponse.json({ error: 'Message requis' }, { status: 400 });

    const key = process.env.RESEND_API_KEY;
    if (!key) {
      // Pas encore de clé : le client bascule sur le mail pré-rempli.
      return NextResponse.json({ error: 'Envoi non configuré', configured: false }, { status: 503 });
    }

    const lignes = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${String(body.phone ?? '').trim() || 'non renseigné'}`,
      `Styles : ${(body.styles ?? []).join(', ') || 'non précisé'}`,
      `Taille : ${String(body.size ?? '').trim() || 'non précisée'}`,
      '',
      message,
    ].join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // Victor répond au visiteur d'un simple « Répondre ».
        reply_to: email,
        subject: `Demande de tatouage — ${name}`,
        text: lignes,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json({ error: `Envoi refusé : ${detail}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
