import axios from "axios";
import { useEffect, useState } from "react";

const useGetStatus = () => {
  const [status, setStatus] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const headers = {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const getStatus = async () => {
    axios(
      `${process.env.NEXT_PUBLIC_URL}/api/proxy/shop/detail.php?shop_id=1362`,
      {
        headers: headers,
      }
    )
      .then((response) => {
        setStatus(
          response.data
            .split("ダーツ")
            .splice(-1)[0]
            .split(`<td class="vacant_table_right">`)[1]
            .split("/td>")[0]
            .split("<")[0]
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return [status, isLoading];
};

export { useGetStatus };
