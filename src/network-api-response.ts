import { NetworkMessageCode } from "./network-message-codes";
import { NetworkMessageParamsValue } from "./network-message-params";

export interface ApiResponse<T = unknown> {
  status: "success" | "error";
  message: NetworkMessage | undefined;
  data?: T; // Основные данные ответа
  timestamp?: string; // Дата формирования ответа
}

export interface NetworkMessage {
  code: NetworkMessageCode;
  params?: NetworkMessageParamsValue;
}
