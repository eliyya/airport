import { createPilot } from '@/actions/pilot'

export default async function pilotPage() {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Registro de Pilotos</h1>
            <form
                action={createPilot}
                className='flex flex-col gap-2 *:not-[label]:border'
            >
                <label htmlFor=''>Nombre</label>
                <input type='text' name='name' required />
                <label htmlFor=''> Codigo </label>
                <input type='text' name='code' required />
                <label htmlFor=''>Horas de vuelo</label>{' '}
                <input
                    type='number'
                    name='hours_fly'
                    defaultValue={0}
                    min={0}
                    required
                />
                <input type='submit' />
            </form>
        </div>
    )
}
