import { NextResponse } from 'next/server'
import { getAllTours, createTour } from '@/lib/tours'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  const tours = getAllTours()
  return NextResponse.json({ tours })
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const tour = createTour(body)
    return NextResponse.json({ tour }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
