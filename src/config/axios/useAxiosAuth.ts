"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import api from "./api";
import { auth } from "../firebase";

// todo if have expired token
// export const SESSION_LOGIN_ENTRY_URL = "session-login-entry-url";

// function saveCurrentUrlForNextLogin() {
//   const url = window.location.pathname + window.location.search;
//   window.sessionStorage.setItem(SESSION_LOGIN_ENTRY_URL, url);
// }

const useAxiosAuth = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      async (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${session?.accessToken}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const responseIntercept = api.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;

        // Handle unauthorized errors (e.g., token expired)
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true; // Mark the original request to avoid infinite loops
          try {
            const accessToken = await auth.currentUser?.getIdToken();

            if (session) {
              // Implement your refresh token logic
              session.accessToken = accessToken || "";
            }

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${session?.accessToken}`;
            return api(originalRequest);
          } catch (refreshError) {
            // Handle refresh token error
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return api;
};

export default useAxiosAuth;
