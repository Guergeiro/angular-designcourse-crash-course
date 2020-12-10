import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Brewery } from "../types/Brewery";

@Injectable({
  providedIn: "root",
})
export class HttpBreweriesService {
  private uri = "https://api.openbrewerydb.org/breweries";
  private http: HttpClient;

  public constructor(http: HttpClient) {
    this.http = http;
  }

  public getOne(id: number) {
    return this.http.get<Brewery>(`${this.uri}/${id}`).toPromise();
  }

  public getAll() {
    return this.http.get<Brewery[]>(this.uri).toPromise();
  }

  public post(body: Omit<Brewery, "id">) {
    return this.http
      .post<Brewery>(this.uri, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .toPromise();
  }

  public put(id: number, body: Brewery) {
    return this.http
      .put<Brewery>(`${this.uri}/${id}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .toPromise();
  }
  public delete(id: number) {
    return this.http.delete<void>(`${this.uri}/${id}`).toPromise();
  }
}
