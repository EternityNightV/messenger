'use client'

import clsx from "clsx";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form'

interface InputProps {
    label : string,
    id : string,
    type ?: string,
    required ?: boolean,
    register : UseFormRegister<FieldValues>,
    erros : FieldErrors,
    disabled ?: boolean
}

const Input  = ({
    label,
    id,
    type,
    required,
    register,
    erros,
    disabled
} : InputProps) => {
    return (
         <div>
            <label 
             htmlFor={id}
             className="block text-sm font-medium text-gray-900 leading-6"
            >
                {label}
            </label>
            <div className="mt-2">
              <input 
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                {...register(id, {required})}
                    className={clsx('form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6',
                    erros[id] && 'focus:ring-rose-500'
    
                )}
              />
            </div>
         </div>
    );
}
 
export default Input;