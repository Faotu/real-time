"use client";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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

  return <div>Authentication</div>;
};

export default AuthentPage;
