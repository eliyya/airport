'use server'

import { db, sql } from '@/lib/db'

export async function createBase(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string
    console.log({ name, code })
    db.exec(sql`
        INSERT INTO Base (code, name) VALUES (${code}, ${name})    
    `)
}
