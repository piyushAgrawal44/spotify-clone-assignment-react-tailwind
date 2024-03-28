import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { FormEvent, useEffect, useState } from 'react';
import { loadUserApi, loginApi } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { token } from '../redux/store';

export default function LoginPage() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email && password) {
            await dispatch(loginApi(email, password))
            await dispatch(loadUserApi())
            navigate('/')
        }
    }



    return (
        <>
            <div className='w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen '>
                <div className="relative  flex flex-wrap">

                    <div className='p-2 min-h-screen w-full '>
                        <Navbar page="login" />

                        <form onSubmit={login} className='w-full p-2.5 flex justify-center'>
                            <div className="max-w-96">
                                <h3 className='my-2.5 text-2xl font-bold'>Login, and Feel Smoothie</h3>
                                <div>

                                    <div className='mb-2.5'>
                                        <label htmlFor="" className='text-sm font-semibold mb-2'>Email</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='block w-full bg-transparent p-2.5 rounded-md border ' placeholder='name@domain.com' />
                                    </div>

                                    <div className='mb-2.5'>
                                        <label htmlFor="" className='text-sm font-semibold mb-2'>Password</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className='block w-full bg-transparent p-2.5 rounded-md border ' placeholder='******' />
                                    </div>

                                    <div className='my-2.5'>
                                        <button type="submit" className={`w-full py-3 px-5 text-[12px] font-medium text-black transition-all bg-white hover:bg-gray-100 focus:bg-gray-100 hover:scale-105 focus:scale-105 rounded-[24px] truncate`} onClick={() => { }}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>

                </div>
            </div >
        </>
    )
}
