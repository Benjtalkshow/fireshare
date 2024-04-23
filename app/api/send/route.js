import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST (request) {
  try {
    // console.log('Request Body:', request.body);
    const response = await request.json()
    // console.log('Parsed Request Body:', response);
    const data = await resend.emails.send({
      from: 'fireshare@resend.dev',
      to: [`${response?.userEmail}`],
      subject: 'Testing',
      react: EmailTemplate({ response }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
