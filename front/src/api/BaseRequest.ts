export class BaseRequest {
  constructor(
    private readonly baseuri = typeof window === "undefined"
      ? process.env.BACK_API_URL
      : process.env.FRONT_API_URL
  ) {
    this.headers.set("Accept", "application/json");
    this.headers.set("Content-type", "application/json");
  }

  public headers: Headers = new Headers();

  private handleError = (error: unknown) => {
    console.log(`\x1b[32m ${error} \x1b[0m`);
    throw error;
  };

  private fetch = async (uri: string, config?: Record<string, unknown>) => {
    const url = this.baseuri + uri;
    console.log(`\x1b[32m ${url} \x1b[0m`);

    try {
      const res = await fetch(url, { headers: this.headers, ...config });
      if (!res.status || res.status < 200 || res.status >= 300) throw res;
      return res.json();
    } catch (e) {
      this.handleError(e);
    }
  };

  protected get = async (uri: string, config?: Record<string, unknown>) => this.fetch(uri, config);

  protected post = async <R>(uri: string, body: R, config?: Record<string, unknown>) =>
    this.fetch(uri, { method: "POST", body: JSON.stringify(body), ...config });

  protected put = async <R>(uri: string, body: R, config?: Record<string, unknown>) =>
    this.fetch(uri, { method: "PUT", body: JSON.stringify(body), ...config });

  protected delete = async (uri: string, config?: Record<string, unknown>) =>
    this.fetch(uri, { method: "DELETE", ...config });
}
