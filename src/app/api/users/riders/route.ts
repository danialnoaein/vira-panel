import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'

import { APICall } from '@/utils/apiUtils'

export async function GET(req: NextRequest) {
  const token = await getToken({ req })

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = await APICall(`/user/drivers_list`, {
    method: 'GET',
    token: token!.backendToken
  })

  return NextResponse.json(res)
}
