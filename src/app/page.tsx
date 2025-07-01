import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Button asChild>
        <Link href='/login'>Entrar com WhatsApp</Link>
      </Button>
    </div>
  )
}
