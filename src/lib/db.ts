/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFile } from 'node:fs/promises'
import { DatabaseSync } from 'node:sqlite'

declare const globalThis: {
    dbGlobal: DatabaseSync
} & typeof global

const db =
    globalThis.dbGlobal ??
    (await (async () => {
        const db = new DatabaseSync('./database.db')
        const sqlinit = await readFile('./src/lib/init.sql', 'utf-8')
        db.exec(sqlinit)
        return db
    })())

if (process.env.NODE_ENV !== 'production') globalThis.dbGlobal = db

function sql(strings: TemplateStringsArray, ...values: any[]): string {
    let result = ''
    for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i < values.length) {
            const value = values[i]
            if (typeof value === 'string') {
                result += `'${value.replace(/'/g, "''")}'` // Escapa comillas simples
            } else if (value === null || value === undefined) {
                result += 'NULL'
            } else {
                result += value
            }
        }
    }
    return result
}

function query(strings: TemplateStringsArray, ...values: any[]) {
    let prepare = ''
    const params: any[] = []

    for (let i = 0; i < strings.length; i++) {
        prepare += strings[i]
        if (i < values.length) {
            prepare += '?'
            params.push(values[i])
        }
    }

    return [prepare, params]
}

export { db, sql, query }
