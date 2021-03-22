export class AppError extends Error {
  public readonly isExpectedError: boolean

  constructor(name: string, description: string, isOperational: boolean = false) {
    super(description)

    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.isExpectedError = isOperational

    Error.captureStackTrace(this)
  }
}
