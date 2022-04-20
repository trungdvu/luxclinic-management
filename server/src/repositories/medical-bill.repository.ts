import {
  CreateMedicalBillDto,
  FindMedicalBillsQueryParams,
  UpdateMedicalBillDto,
} from "../dtos";
import { MedicalBill } from "../models";
import { Patient } from "../models/patient.model";
import { InternalServerError } from "../shared";

export interface CreateMedicalBillRecord {
  id?: string;
  diseaseTypeId: string;
  symptomDescription: string;
  patientId: string;
  prediction: string;
}
export class MedicalBillRepository {
  static async findMany(
    query: FindMedicalBillsQueryParams
  ): Promise<MedicalBill[]> {
    try {
      const { patientId, page, limit } = query;

      const defaultItemPerPage = 10;
      const defaultLimit: number = limit
        ? parseInt(limit.toString())
        : defaultItemPerPage;

      const defaultOffset: number =
        page && parseInt(page.toString()) > 1
          ? parseInt(page.toString()) * defaultItemPerPage
          : 0;

      return await MedicalBill.findAll({
        where: patientId
          ? {
              patientId,
            }
          : undefined,
        include: {
          model: Patient,
          attributes: ["fullName"],
        },
        limit: defaultLimit,
        offset: defaultOffset,
      });
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async findById(id: string): Promise<MedicalBill> {
    try {
      return await MedicalBill.findByPk(id);
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async create(dto: CreateMedicalBillDto): Promise<MedicalBill> {
    try {
      return await MedicalBill.create(dto);
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async update(id: string, dto: UpdateMedicalBillDto): Promise<any> {
    try {
      return await MedicalBill.update(dto, {
        where: {
          id,
        },
      });
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async delete(id: string): Promise<number> {
    try {
      return await MedicalBill.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }
}
