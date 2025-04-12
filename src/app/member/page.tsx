import { createCrew } from '@/actions/member'

export default async function crewPage() {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Registro de Tripulantes</h1>
            <form
                action={createCrew}
                className='flex flex-col gap-2 *:not-[label]:border'
            >
                <label htmlFor=''>Nombre</label>
                <input type='text' name='name' required />
                <label htmlFor=''> Codigo </label>
                <input type='text' name='code' required />
                <input type='submit' />
            </form>
        </div>
    )
}
