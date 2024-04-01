'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {Input} from "@/components/forms/Input";

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required().min(6),
	})
	.required()

export default function LoginForm() {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const {register, handleSubmit, watch, formState:{errors}} = useForm({resolver: yupResolver(schema)})

	return (
		<form action={dispatch} className="space-y-3">
			<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
				<h1 className={`mb-3 text-2xl`}>
					Please log in to continue.
				</h1>

				<p>username: 'kminchelle',</p>
				<p>password: '0lelplR',</p>
				<div className="w-full">
					<div>
						<Input
							type="text"
							label="Email"
							placeholder="Escribe tu email"
							name="email"
							register={register}
							errors={errors}
							required={true}/>
					</div>
					<div className="mt-4">
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-900"
							htmlFor="password"
						>
							Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
								id="password"
								type="password"
								placeholder="Enter password"
								{...register('password')}
							/>
							{errors.password && <span>This field is required</span>}
						</div>
					</div>
				</div>
				<LoginButton />
				<div
					className="flex h-8 items-end space-x-1"
					aria-live="polite"
					aria-atomic="true"
				>
					{errorMessage && (
						<>
							<p className="text-sm text-red-500">{errorMessage}</p>
						</>
					)}
				</div>
			</div>
		</form>
	);
}

function LoginButton() {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="mt-4 w-full" aria-disabled={pending}>
			Login
		</button>
	);
}
