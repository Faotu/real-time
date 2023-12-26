import { SiMessenger } from "react-icons/si";
import AuthentPage from "./components/AuthentPage";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <SiMessenger size={48} className="mx-auto w-auto text-green-950" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>

      {/* authentication */}

      <AuthentPage />
    </div>
  );
}
