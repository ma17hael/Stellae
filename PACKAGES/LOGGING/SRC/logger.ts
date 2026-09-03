export type LogValue = | string | number | boolean | null | undefined;

export type LogContext = Readonly<
    Record<string, LogValue>
>;

export interface Logger {
    debug(message: string, context?: LogContext): void;
    info(message: string, context?: LogContext): void;
    warn(message: string, context?: LogContext): void;

    error(message: string, error?: unknown, context?: LogContext): void;

    child(context: LogContext): Logger;
}