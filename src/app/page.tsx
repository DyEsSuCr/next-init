import { ModeToggle } from '@/components/toggle'
import { auth } from '@/auth'

export default async function Home() {
  const session = await auth()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-center font-[family-name:var(--font-geist-sans)]'>
      <div className='absolute left-1/4 top-1/4 size-72 rounded-full bg-lime-300 opacity-70 mix-blend-multiply blur-xl filter dark:opacity-25 dark:mix-blend-lighten' />
      <div className='absolute bottom-1/4 right-1/4 size-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter dark:opacity-25 dark:mix-blend-lighten' />

      <div className='z-30'>
        <p className='font-[family-name:var(--font-geist-mono)] text-lg text-muted-foreground'>
          {session ? 'You are signed in.' : 'You are not signed in.'}
        </p>
        <h1 className='mb-8 text-[clamp(2rem,10vw,3rem)] font-bold'>
          Next.js Initialization Configuration
        </h1>
        <ModeToggle />
      </div>
    </div>
  )
}
