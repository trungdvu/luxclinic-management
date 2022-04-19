import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { MedicalBill } from "./medical-bill.model";
import { Patient } from "./patient.model";
import { DEFAULT_MEDICAL_EXAMINATION_AMOUNT } from "../constants/medical-bill.constant";

export interface BillPaymentAttributes {
  id: string;
  medicalBillId: string;
  medicalCost: number;
  totalDrugCost: number;
  patientId: string;
}

@Table
export class BillPayment
  extends Model<BillPayment>
  implements BillPaymentAttributes {
  @PrimaryKey
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => MedicalBill)
  @Column(DataType.STRING)
  medicalBillId: string;

  @ForeignKey(() => Patient)
  @Column(DataType.STRING)
  patientId: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: DEFAULT_MEDICAL_EXAMINATION_AMOUNT,
  })
  medicalCost: number;

  @Column(DataType.INTEGER)
  totalDrugCost: number;

  // Associations
  @BelongsTo(() => MedicalBill)
  medicalBill: MedicalBill;

  @HasOne(() => Patient)
  patient: Patient;
}