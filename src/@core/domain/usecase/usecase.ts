import { Observable } from 'rxjs';

export interface UseCase<Request, Response> {
  execute(request?: Request): Observable<Response> | Response;
}

export interface UseCaseId<Request, Response> {
  execute(id?: any, request?: Request): Observable<Response> | Response;
}
