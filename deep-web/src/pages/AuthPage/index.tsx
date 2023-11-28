import { useSocialLogin } from "src/hooks/auth/useSocialLogin";

export default function AuthLoadingPage() {
    useSocialLogin();
    return <>Loading...</>;
}