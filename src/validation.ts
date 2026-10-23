export const VALIDATION_CODES = {
  REQUIRED: "validation.required",
  STRING: "validation.string",
  NUMBER: "validation.number",
  INTEGER: "validation.integer",
  OBJECT: "validation.object",
  ARRAY: "validation.array",
  MAX_LENGTH: "validation.maxLength",
  MIN: "validation.min",
  MAX: "validation.max",
  ARRAY_MAX_SIZE: "validation.arrayMaxSize",
  FORMAT: "validation.format",
  IMAGE_PATH: "validation.imagePath",
  UNKNOWN_FIELD: "validation.unknownField",
  INVALID_REQUEST: "validation.invalidRequest",
  EMPTY_UPDATE: "validation.emptyUpdate",
  INVALID_ID: "validation.invalidId",
  INVALID_JSON: "validation.invalidJson",
  REQUEST_TOO_LARGE: "validation.requestTooLarge",
  REFERENCE_NOT_FOUND: "validation.referenceNotFound",
  INVALID_VALUE: "validation.invalidValue",
} as const;

export type ValidationCode =
  (typeof VALIDATION_CODES)[keyof typeof VALIDATION_CODES];

export type ValidationPath = (string | number)[];

export interface ValidationParamsByCode {
  [VALIDATION_CODES.REQUIRED]: never;
  [VALIDATION_CODES.STRING]: never;
  [VALIDATION_CODES.NUMBER]: never;
  [VALIDATION_CODES.INTEGER]: never;
  [VALIDATION_CODES.OBJECT]: never;
  [VALIDATION_CODES.ARRAY]: never;
  [VALIDATION_CODES.MAX_LENGTH]: { max: number };
  [VALIDATION_CODES.MIN]: { min: number };
  [VALIDATION_CODES.MAX]: { max: number };
  [VALIDATION_CODES.ARRAY_MAX_SIZE]: { max: number };
  [VALIDATION_CODES.FORMAT]: never;
  [VALIDATION_CODES.IMAGE_PATH]: never;
  [VALIDATION_CODES.UNKNOWN_FIELD]: never;
  [VALIDATION_CODES.INVALID_REQUEST]: never;
  [VALIDATION_CODES.EMPTY_UPDATE]: never;
  [VALIDATION_CODES.INVALID_ID]: never;
  [VALIDATION_CODES.INVALID_JSON]: never;
  [VALIDATION_CODES.REQUEST_TOO_LARGE]: { maxBytes: number };
  [VALIDATION_CODES.REFERENCE_NOT_FOUND]: never;
  [VALIDATION_CODES.INVALID_VALUE]: never;
}

export type ValidationParamsFor<C extends ValidationCode> =
  ValidationParamsByCode[C];

export type ValidationIssueDetails<C extends ValidationCode = ValidationCode> =
  {
    [Code in C]: {
      code: Code;
    } & ([ValidationParamsFor<Code>] extends [never]
      ? { params?: never }
      : { params: ValidationParamsFor<Code> });
  }[C];

export type ValidationIssue<C extends ValidationCode = ValidationCode> =
  ValidationIssueDetails<C> & { path: ValidationPath };

export interface ValidationErrorData {
  validationErrors: ValidationIssue[];
}
