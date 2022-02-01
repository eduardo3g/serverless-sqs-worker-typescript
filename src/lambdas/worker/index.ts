import { SQSHandler, SQSEvent, SQSRecord, SQSBatchResponse } from "aws-lambda";

export const handler: SQSHandler = async (
  event: SQSEvent
): Promise<SQSBatchResponse> => {
  const records: SQSRecord[] = event.Records;
  const failedMessageIds = [];

  records.forEach((record) => {
    try {
      console.log(`Processing message [${record.messageId}]`);
      console.log(JSON.parse(record.body));

      // do something ...
    } catch (e) {
      failedMessageIds.push(record.messageId);
      console.log(
        `Pushed message ${record.messageId} to batchItemFailures`,
        JSON.parse(record.body)
      );
    }
  });

  return {
    batchItemFailures: failedMessageIds.map((id) => {
      return {
        itemIdentifier: id,
      };
    }),
  };
};
