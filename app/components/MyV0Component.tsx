import React from "react";
import { Suspense } from 'react'

async function getTenure() {
  const startDate = new Date('2024-02-01')
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''}`
  } else {
    return `${days} day${days !== 1 ? 's' : ''}`
  }
}

async function TenureDisplay() {
  const tenure = await getTenure()
  
  return (
    <>
      <p className="text-lg">
        Helping customers optimize their Next.js applications since February 2024. <br></br><br></br>That's <span className="{styles.header}">{tenure}</span> of advocating, and counting!
      </p>
    </>
  )
}

export default async function JobInfo() {
  return (
    <div className="{styles.wrapper}">
      <h2 className="text-5xl font-bold mb-2 text-white">Customer Advocate</h2>
      <p className="text-2xl font-bold mb-2 text-white">at Vercel</p>
      <Suspense fallback={<p>Calculating tenure...</p>}>
        <TenureDisplay />
      </Suspense>
    </div>
  )
}

