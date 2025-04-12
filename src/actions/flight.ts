'use server'

import { db, sql } from '@/lib/db'

export async function createPilot(formData: FormData) {
    const departure = formData.get('departure') as string
    const arrive = formData.get('arrive') as string
    const pilot_id = formData.get('pilot_id') as string
    const from_id = formData.get('from_id') as string
    const to_id = formData.get('to_id') as string
    db.exec(sql`
        INSERT INTO Flight (departure, arrive, pilot_id, from_id, to_id) 
        VALUES (${departure}, ${arrive}, ${pilot_id}, ${from_id}, ${to_id})    
    `)
}
