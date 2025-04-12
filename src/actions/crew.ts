'use server'

import { db } from '@/lib/db'

export async function createCrew(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string

    await db.crew.create({
        data: {
            name,
            code,
        },
    })
}
