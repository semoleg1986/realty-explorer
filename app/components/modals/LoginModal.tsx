'use client';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../navbar/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "./Button";
import { LOGIN_USER } from "@/app/graphql/mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";


const LoginModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false)

    const [loginUser] = useMutation(LOGIN_USER);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        loginUser({
            variables: {
              email: data.email,
              password: data.password,
            },
        })
        .then((callback) => {
            setIsLoading(false);
            if (!callback?.errors) {
                toast.success('Logged in');
                const token = callback.data.signin.access_token;
                const email = callback.data.signin.email;
                localStorage.setItem('accessToken', token);
                localStorage.setItem('email', email); 
                router.refresh(); 
                loginModal.onClose();
            }
        })
        .catch((error) => {
            toast.error(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <Heading 
                    title="Welcome back"
                    subtitle="Login to your account"
                />
                <Input 
                    id="email"
                    label="Email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id="password"
                    type="password"
                    label="Password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </form>
    )
    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <div
                className="
                text-neutral-500
                text-center
                mt-4
                font-light
                "
            >
                <div 
                    className="
                        justify-center
                        flex flex-row
                        items-center
                        gap-2
                ">
                    <div>
                        Would like to register?
                    </div>
                    <div
                        onClick={toggle}
                        className="
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        "
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal  
            disabled = {isLoading}
            isOpen = {loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
