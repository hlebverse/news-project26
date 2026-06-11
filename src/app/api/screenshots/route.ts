import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const screenshots = await prisma.screenshot.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ screenshots })
  } catch (error) {
    console.error('Error fetching screenshots:', error)
    return NextResponse.json({ error: 'Failed to fetch screenshots' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const screenshot = await prisma.screenshot.create({
      data: body,
    })

    return NextResponse.json({ screenshot }, { status: 201 })
  } catch (error) {
    console.error('Error creating screenshot:', error)
    return NextResponse.json({ error: 'Failed to create screenshot' }, { status: 500 })
  }
}
