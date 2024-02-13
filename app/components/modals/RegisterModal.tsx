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
import Modal from "./Modal";
import Heading from "../navbar/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "./Button";
import { REGISTER_USER } from "@/app/graphql/mutations";
import { useMutation } from "@apollo/client";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false)

    const [registerUser] = useMutation(REGISTER_USER);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        registerUser({
            variables: {
                    email: data.email,
                    name: data.name,
                    password: data.password
            }
        })
        .then(() => {
            registerModal.onClose();
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
                    title="Welcome"
                    subtitle="Create an account"
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
                    id="name"
                    label="Name"
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
        loginModal.onOpen();
        registerModal.onClose();
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
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className="
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        "
                    >
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal  
            disabled = {isLoading}
            isOpen = {registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
