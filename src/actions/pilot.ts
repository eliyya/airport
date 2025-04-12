'use server'

import { db } from '@/lib/db'

export async function createPilot(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string
    const hours_fly = formData.get('hours_fly') as string
    console.log({ name, code, hours_fly })
    await db.pilot.create({
        data: {
            name,
            code,
            hours_fly: Number(hours_fly),
        },
    })
}
