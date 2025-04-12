'use server'

import { db, sql } from '@/lib/db'

export async function createPilot(formData: FormData) {
    const name = formData.get('name') as string
    const code = formData.get('code') as string
    const hours_fly = formData.get('hours_fly') as string
    console.log({ name, code, hours_fly })
    db.exec(sql`
        INSERT INTO Pilot (code, name, hours) VALUES (${code}, ${name}, ${hours_fly})    
    `)
}
