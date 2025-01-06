import { Client } from "square";
import { randomUUID } from 'crypto';

(BigInt.prototype).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN_SERVER,
  environment: (process.env.NODE_ENV === 'production') ? 'production' : 'sandbox'
});


export async function POST(req) {
    const { result } = await paymentsApi.createPayment({
        idempotencyKey: randomUUID(),
        sourceId: req.body.sourceId,
        amountMoney: {
          currency: 'USD',
          amount: 500
        },

      })
      console.log(result);
      res.status(200).json(result);





}