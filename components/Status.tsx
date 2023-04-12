import { useGetStatus } from "./api/useGetStatus";

const Status = () => {
  const [statusFromApi, isStatusLoading] = useGetStatus();
  return (
    <>
      <h2>{statusFromApi}</h2>
    </>
  );
};

export default Status;
