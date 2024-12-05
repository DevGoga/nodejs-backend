import { BadRequest } from 'http-errors';

export function validateDto<T>(dto: T, validationObject: Partial<T>): T {
  const errors: string[] = [];

  for (const [key, value] of Object.entries(validationObject)) {
    if (dto[key as keyof T] === undefined || dto[key as keyof T] === null) {
      errors.push(`${key} is required`);
    } else if (typeof dto[key as keyof T] !== typeof value) {
      errors.push(`${key} must be of type ${typeof value}`);
    }
  }

  if (errors.length > 0) {
    throw new BadRequest(errors.join(', '));
  }

  return dto;
}
