"use client"

import { publicRequest } from '@/requestMethods';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FC, useState, ChangeEvent, FormEvent } from "react";
import { toast } from './ui/Toast';

const OptForm: FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      const res = await axios.post(`https://parallel-ai.herokuapp.com/api/applicants/create`, {
        email: email
      })
      console.log(res)
      setIsLoading(false)
      setMessage(res.data.message)
    } catch (err: unknown) {
      setIsLoading(false)
      setErrorMessage("You're already on the list")
    }
  }

  return <div className="flex-1 w-full flex flex-col items-center justify-center mt-10 mb-10">
  <div className="relative w-full max-w-md mb-5">
    <>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={handleChange} className="w-full ring-transparent focus:outline-none focus:border-gray-400 py-3 px-8 md:pr-16 rounded-full bg-transparent border border-gray-700 transition hover:border-gray-400 hover:placeholder-white" placeholder="Enter Your Email" />
        <div className="md:absolute w-full md:w-fit right-0 top-0 bottom-0 flex items-center">
          <button disabled={email.length < 7} className="bg-white text-gray-500 border-2 w-full md:w-fit mt-6 md:mt-0 border-transparent h-10 mr-1.5 rounded-full font-medium py-4 px-6 flex justify-center items-center text-sm">Notify me</button>
        </div>
      </form>
    </>
  </div>
  {isLoading && <p>Setting up your spot...</p>}
  {message !== null && <p>{message}</p>}
  {errorMessage !== null && <p>{errorMessage}</p>}
</div>
}

export default OptForm