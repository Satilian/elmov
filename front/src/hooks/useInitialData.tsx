import { InitialDataType } from "interfaces/common";
import { useEffect, useState } from "react";

export const useInitialData = (initialData?: InitialDataType) => {
  const [data, setData] = useState(initialData);

  const handleSetData = (data?: InitialDataType) => setData(data);

  useEffect(() => {
    initialData && setData(initialData);
  }, [initialData]);

  return { initialData: data, setData: handleSetData };
};
