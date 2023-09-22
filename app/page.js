import TopicsList from '@/components/TopicsList'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
    <Suspense fallback={<div>Loading.......</div>} >
        <TopicsList />
    </Suspense>
    </>
  )
}
