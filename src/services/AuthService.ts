import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async signUp(
    email: string,
    password: string,
    repeatPassword: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/sign-up", {
      user: { email, password, repeatPassword },
    });
  }

  static async signIn(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/sign-in", { user: { email, password } });
  }

  static async logout(): Promise<void> {
    $api.post<AuthResponse>("/logout");
  }
}
