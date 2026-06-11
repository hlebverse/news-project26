import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const article = await prisma.article.findUnique({
      where: { slug: params.slug },
      include: { author: true, comments: { include: { author: true } } },
    })

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }

    // Increment views
    await prisma.article.update({
      where: { id: article.id },
      data: { views: { increment: 1 } },
    })

    return NextResponse.json({ article })
  } catch (error) {
    console.error('Error fetching article:', error)
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()

    const article = await prisma.article.update({
      where: { slug: params.slug },
      data: body,
    })

    return NextResponse.json({ article })
  } catch (error) {
    console.error('Error updating article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.article.delete({
      where: { slug: params.slug },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting article:', error)
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 })
  }
}
