import { app, InvocationContext, Timer } from "@azure/functions";

export async function triggerSample(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('triggerSample', {
    schedule: '0 */5 * * * *',
    handler: triggerSample
});
