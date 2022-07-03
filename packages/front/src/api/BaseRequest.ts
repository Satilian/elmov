export class BaseRequest {
  constructor(private readonly baseUrl = "/api/") {
    this.headers.set("Accept", "application/json");
    this.headers.set("Content-type", "application/json");
  }

  public headers: Headers = new Headers();

  private handleError = (error: unknown) => {
    console.log(error);
    throw error;
  };

  private fetch = async (url: string, config?: Record<string, unknown>) => {
    try {
      const res = await fetch(this.baseUrl + url, { headers: this.headers, ...config });
      if (!res.status || res.status < 200 || res.status >= 300) throw res;
      return res.json();
    } catch (e) {
      this.handleError(e);
    }
  };

  protected get = async (url: string, config?: Record<string, unknown>) => this.fetch(url, config);

  protected post = async <R>(url: string, body: R, config?: Record<string, unknown>) =>
    this.fetch(url, { method: "POST", body: JSON.stringify(body), ...config });

  protected put = async <R>(url: string, body: R, config?: Record<string, unknown>) =>
    this.fetch(url, { method: "PUT", body: JSON.stringify(body), ...config });

  protected delete = async (url: string, config?: Record<string, unknown>) =>
    this.fetch(url, { method: "DELETE", ...config });
}
