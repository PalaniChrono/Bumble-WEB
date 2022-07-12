import { Injectable } from '@angular/core';

import { HttpClient,HttpEvent,HttpResponse,HttpEventType, HttpErrorResponse, HttpProgressEvent} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  apiURL = 'http://localhost:8000/api/storecareers';

  constructor(private http: HttpClient) { }
  upload(formData: { get: (arg0: string) => { (): any; new(): any; name: any; }; }) {
    return this.http.post<any>(`${this.apiURL}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }
  private getEventMessage(event: HttpEvent<any>, formData: { get: (arg0: string) => { (): any; new(): any; name: any; }; }) {

    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
		break;
      case HttpEventType.Response:
        return this.apiResponse(event);
		break;
      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }
  private fileUploadProgress(event: HttpProgressEvent): { status: string; message: number; } {
    const percentDone = Math.round(100 * event.loaded );
    return { status: 'progress', message: percentDone };
  }
  private apiResponse(event: HttpResponse<any>) {
    return event.body;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}
