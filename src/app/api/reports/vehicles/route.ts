import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'

import { APICall } from '@/utils/apiUtils'

export async function GET(req: NextRequest) {
  const token = await getToken({ req })

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const startDate = searchParams.get('start_date')
  const endDate = searchParams.get('end_date')

  const getUsersInSchool = await APICall(`/v1/vehicle_type?start_date=${startDate}&end_date=${endDate}`, {
    method: 'GET',
    token: token!.backendToken
  })

  return NextResponse.json(getUsersInSchool)
}
