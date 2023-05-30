export class ListResponse<T> {
  filters?: any;

  data?: [T];
  message?: string;
  success?: boolean;
  count?: number;
}
