import { EmailBookingOwner } from '@/components/emails/email-booking-owner';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { booking, email } = body;

    const response = await resend.emails.send({
      from: 'Stenbrottsvägen 3 <bokning@sbv-booking.dtangerfors.se>',
      to: email,
      subject: 'Bokningsbekräftelse',
      react: EmailBookingOwner({ booking: booking }),
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
