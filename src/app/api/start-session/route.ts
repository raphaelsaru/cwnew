import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const baseUrl = process.env.EVOLUTIONAPI_URL
    const token = process.env.EVOLUTIONAPI_TOKEN
    const sessionName = process.env.EVOLUTIONAPI_SESSION ?? 'mysession'

    const res = await fetch(`${baseUrl}/instance/init`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: token ?? '',
      },
      body: JSON.stringify({ sessionName }),
    })

    const data = await res.json()
    return NextResponse.json({ qr: data.qrCode || data.qrcode })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'failed to start session' }, { status: 500 })
  }
}
