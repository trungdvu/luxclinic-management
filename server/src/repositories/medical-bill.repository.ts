import { CreateMedicalBillDto, UpdateMedicalBillDto } from "../dtos";
import { MedicalBill } from "../models";
import { FindMedicalBillsQueryParams } from "../dtos";
import { InternalServerError } from "../shared";
import { Patient } from "../models/patient.model";

export class MedicalBillRepository {
  static async findMany(
    query: FindMedicalBillsQueryParams
  ): Promise<MedicalBill[]> {
    try {
      const { patientId } = query;
      return await MedicalBill.findAll({
        where: {
          patientId,
        },
        include: {
          model: Patient,
          attributes: ["fullName"],
        },
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
