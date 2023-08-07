'use client'

import {useEffect} from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(()=>{
    if (pathname === '/dashboard') {
      router.push('/dashboard/testnets')
    }
  },[]);

  return <h1>Hello, dashboard here!</h1>
}