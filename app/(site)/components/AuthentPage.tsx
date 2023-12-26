"use client";
import Button from "@/app/components/Button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Input from "@/app/components/inputs/Input";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthenSocialButton from "./AuthenSocialButton";

type Variant = "LOGIN" | "REGISTER";

const AuthentPage = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  // Toggle the form to register or login
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Register with axios in the future
    }

    if (variant === "LOGIN") {
      // Login with NextAuth in the future
    }
  };

  const scoialAction = (action: string) => {
    setIsLoading(true);

    // Login with Social account in the future
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md pt-0">
      <div className="bg-white border border-green-700 px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6  " onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Log in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-green-400 " />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2 text-green-500">
            <AuthenSocialButton
              icon={BsGithub}
              onClick={() => scoialAction("github")}
            />
            <AuthenSocialButton
              icon={BsGoogle}
              onClick={() => scoialAction("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 to-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to real time?"
              : "Already have an account"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthentPage;
