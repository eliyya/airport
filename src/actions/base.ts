'use server'

import { db } from '@/lib/db'

export async function createBase(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string
    console.log({ name, code })
    await db.base.create({
        data: {
            name,
            code,
        },
    })
}
