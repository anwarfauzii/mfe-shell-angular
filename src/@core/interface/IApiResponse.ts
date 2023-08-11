export interface IApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  response_message?: string;
  status_code: number;
  timestamp: number;
}
