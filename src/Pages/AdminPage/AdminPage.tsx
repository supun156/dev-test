import { lazy, Suspense } from "react";

const AdminHomeContainer = lazy(
  () => import("../../Container/AdminHomeContainer/AdminHomeContainer")

);

const Admin = (props: any) => {
  return (
    <Suspense fallback={<>Lodging component</>}>
      <AdminHomeContainer {...props} />
    </Suspense>
  );
};

export default Admin;
