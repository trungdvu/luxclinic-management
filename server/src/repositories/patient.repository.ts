import { Op } from "sequelize";
import { InternalServerError } from "../shared";
import { CreatePatientDto, FindPatientsQuery, UpdatePatientDto } from "../dtos";
import { Patient } from "../models";

export class PatientRepository {
  static async findMany(query: FindPatientsQuery): Promise<Patient[]> {
    try {
      const { text } = query;
      return await Patient.findAll();
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async findById(id: string): Promise<Patient> {
    try {
      return await Patient.findByPk(id);
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }

  static async create(dto: CreatePatientDto): Promise<Patient> {
    try {
      return await Patient.create(dto);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(id: string, dto: UpdatePatientDto): Promise<any> {
    try {
      return await Patient.update(dto, {
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
      return await Patient.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }
}
