import { db } from '@/lib/db'

export default async function flightsPage() {
    const pilots = await db.pilot.findMany()
    const bases = await db.base.findMany()

    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Registro de Vuelos</h1>
            <form
                action=''
                className='flex flex-col gap-2 *:not-[label]:border'
            >
                <label htmlFor=''>Fecha y Hora de salida</label>
                <input type='datetime-local' name='departure_time' required />
                <label htmlFor=''> Fecha y hora de llegada</label>
                <input type='datetime-local' name='arrive_time' required />
                <label htmlFor=''>Piloto</label>
                <select name='pilot_id' id='' className='*:text-black'>
                    {pilots.map(function (pilot) {
                        return (
                            <option key={pilot.id} value={pilot.id}>
                                {pilot.name}
                            </option>
                        )
                    })}
                </select>
                <label htmlFor=''>Base de Salida</label>
                <select name='from_id' id=''>
                    {bases.map(base => (
                        <option key={base.id} value={base.id}>
                            {base.name}
                        </option>
                    ))}
                </select>
                <label htmlFor=''>Base de Llegada</label>
                <select name='to_id' id=''>
                    {bases.map(base => (
                        <option key={base.id} value={base.id}>
                            {base.name}
                        </option>
                    ))}
                </select>
                <input type='submit' />
            </form>
        </div>
    )
}
