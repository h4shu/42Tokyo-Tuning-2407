import Axios from "../axios";

export type Role = "client" | "dispatcher" | "driver" | "admin";

export type User = {
  user_id: number;
  user_name: string;
  session_token: string;
} & (
  | {
      role: "dispatcher";
      dispatcher_id: number;
      area_id: number;
    }
  | {
      role: "client";
    }
  | {
      role: "driver";
      driver_id: number;
    }
  | {
      role: "admin";
    }
);

const AxiosInstance = Axios.getInstance();

// セッション情報をローカルにキャッシュ
let cachedSession: User | null = null;

export const login = async (username: string, password: string) => {
  try {
    const { data } = await AxiosInstance.post<User>("/api/login", {
      username,
      password
    });

    // セッション情報をサーバーサイドに保存
    await AxiosInstance.post("/session", data);

    // キャッシュに保存
    cachedSession = data;

  return data;
  } catch (error: any) {
    console.error("An error occurred during login:", error);
    throw error;
  }
};

export const logout = async (session_token: string | null) => {
  try {
  if (session_token) {
    await AxiosInstance.post(
      "/api/logout", 
      { session_token }, 
      { headers: { Authorization: session_token } }
    );
  }
  await AxiosInstance.delete("/session");
  // キャッシュをクリア
    cachedSession = null;
  } catch (error: any) {
    console.error("An error occurred during logout:", error);
    throw error;
  }
};

export const getSession = async () => {
  if (cachedSession) {
    // キャッシュからセッションを返す
    return cachedSession;
  }

  try {
    const response = await AxiosInstance.get<User>("/session");
    // キャッシュに保存
    cachedSession = response.data;
    return response.data;
  } catch (error: any) {
    console.error("An error occurred while fetching the session:", error);
    return undefined;
  }
};
