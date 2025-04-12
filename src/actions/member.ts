'use server'

import { db, sql } from '@/lib/db'

export async function createCrew(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string
    db.exec(sql`
        INSERT INTO Member (code, name) VALUES (${code}, ${name})    
    `)
}
