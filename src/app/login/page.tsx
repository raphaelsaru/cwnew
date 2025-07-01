'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { QrCode } from 'lucide-react'

export default function LoginPage() {
  const [qr, setQr] = useState<string | null>(null)

  async function handleLogin() {
    const res = await fetch('/api/start-session')
    if (res.ok) {
      const data = await res.json()
      setQr(data.qr)
    }
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4 p-4'>
      {qr ? (
        <Image src={qr} alt='QR Code' width={300} height={300} />
      ) : (
        <Button onClick={handleLogin} className='gap-2'>
          <QrCode className='h-4 w-4' />
          Entrar com WhatsApp
        </Button>
      )}
    </div>
  )
}
