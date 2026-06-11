import { prisma } from '../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const screenshot = await prisma.screenshot.findUnique({
      where: { id: params.id },
    })

    if (!screenshot) {
      return NextResponse.json({ error: 'Screenshot not found' }, { status: 404 })
    }

    return NextResponse.json({ screenshot })
  } catch (error) {
    console.error('Error fetching screenshot:', error)
    return NextResponse.json({ error: 'Failed to fetch screenshot' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const screenshot = await prisma.screenshot.update({
      where: { id: params.id },
      data: body,
    })

    return NextResponse.json({ screenshot })
  } catch (error) {
    console.error('Error updating screenshot:', error)
    return NextResponse.json({ error: 'Failed to update screenshot' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.screenshot.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting screenshot:', error)
    return NextResponse.json({ error: 'Failed to delete screenshot' }, { status: 500 })
  }
}
