import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type Data = {
  data: {
    users: User[];
  };
  headers: {
    "x-total-count": string;
  };
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers }: Data = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("en-us", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return {
    users,
    totalCount,
  };
}

export const useUsers = (page: number) => {
  return useQuery<GetUsersResponse>(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 mins
  });
};
