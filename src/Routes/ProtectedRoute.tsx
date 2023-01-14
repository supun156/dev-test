import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const isAuthenticated = true;
  const authenticationPath = "/login";

  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
