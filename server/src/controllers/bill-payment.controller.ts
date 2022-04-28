import { Request, Response } from "express";
import { CreateBillPaymentDto } from "../dtos";
import { BillPaymentResponse } from "../dtos/bill-payment/bill-payment.response";
import { FindBillPaymentsQueryParams } from "../dtos/bill-payment/find-bill-payment.query";
import { BillPaymentService } from "../services";
import { BodyResponse, ErrorResponseHandler } from "../shared";

export class BillPaymentController {
  static async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const billPaymentFounded = await BillPaymentService.findById(id);

      const bodyResponse: BodyResponse<BillPaymentResponse> = {
        message: "Execute Successfully",
        data: billPaymentFounded,
        statusCode: 200,
      };

      res.status(bodyResponse.statusCode).json(bodyResponse);
    } catch (error) {
      ErrorResponseHandler(error, res);
    }
  }
  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const query: FindBillPaymentsQueryParams = req.query;
      const billPaymentSummaryResponses = await BillPaymentService.findMany(
        query
      );
    } catch (error) {
      ErrorResponseHandler(error, res);
    }
  }
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const dto: CreateBillPaymentDto = req.body;

      await BillPaymentService.create(dto);

      const bodyResponse: BodyResponse<void> = {
        message: "Execute Successfully",
        statusCode: 200,
      };

      res.status(bodyResponse.statusCode).json(bodyResponse);
    } catch (error) {
      ErrorResponseHandler(error, res);
    }
  }
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await BillPaymentService.delete(id);

      const bodyResponse: BodyResponse<void> = {
        message: "Execute Successfully",
        statusCode: 200,
      };

      res.status(bodyResponse.statusCode).json(bodyResponse);
    } catch (error) {
      ErrorResponseHandler(error, res);
    }
  }
}
