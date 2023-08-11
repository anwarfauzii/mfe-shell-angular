export class PaginationQuery {
  totalData?: number;
  totalPage?: number;
  perPage?: number = 25;
  page?: number = 1;
  
  sortBy?: string;
  sortDir?: number;
}