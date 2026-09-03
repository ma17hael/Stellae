import type {LogContext, Logger} from "./logger.js";

export class ConsoleLogger implements Logger {
    public constructor(private readonly baseContext: LogContext = {}) {}

    public debug(message: string, context?: LogContext): void {
        console.debug(this.formatMessage(message), this.mergeContext(context));
    }

    public info(message: string, context?: LogContext): void {
        console.info(this.formatMessage(message), this.mergeContext(context));
    }

    public warn(message: string, context?: LogContext): void {
        console.warn(this.formatMessage(message), this.mergeContext(context));
    }

    public error(message: string, error?: unknown, context?: LogContext): void {
        console.error(this.formatMessage(message), {
            ...this.mergeContext(context),
            error,
            },
        );
    }

    public child(context: LogContext): Logger {
        return new ConsoleLogger({
            ...this.baseContext,
            ...context,
        });
    }

    private mergeContext(context?: LogContext): LogContext {
        return {
            ...this.baseContext,
            ...context,
        };
    }

    private formatMessage(message: string): string {
        return `[Stellae] ${message}`;
    }
}