import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_7pSNh6St_HnTYUG2V3nATGPon2zVYwPwu");

export async function POST (request) {
  try {
    // console.log('Request Body:', request.body);
    const response = await request.json()
    // console.log('Parsed Request Body:', response);
    const data = await resend.emails.send({
      from: 'fireshare@resend.dev',
      to: [`${response?.email}`],
      subject: 'Testing',
      react: EmailTemplate({ response }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
