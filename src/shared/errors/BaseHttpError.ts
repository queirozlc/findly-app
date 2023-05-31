export class BaseHttpError extends Error {
  constructor(
    readonly message: string,
    readonly code: number,
    readonly data?: unknown,
  ) {
    super(message)
  }
}
