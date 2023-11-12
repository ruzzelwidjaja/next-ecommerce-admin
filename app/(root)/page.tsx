import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
        <p>Hello Admin Dashboard</p>
        <Button variant="outline">Button</Button>
        <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}
