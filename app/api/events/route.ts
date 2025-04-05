import { NextResponse } from 'next/server';
import { createEvent } from '@/lib/actions/event.actions';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('API Route received data:', body); // Log the incoming data

    const response = await createEvent(body);
    console.log('API Route response:', response); // Log the response from createEvent

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in API Route:', error); // Log any errors
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}