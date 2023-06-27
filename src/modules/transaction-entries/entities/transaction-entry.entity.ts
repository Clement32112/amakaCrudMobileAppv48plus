import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
//CLINIC RECORT


@Entity('ClinicRecord')
export class TransactionEntry {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int', { default: new Date().getDate() })
  clinicDate: Date
  @Column('varchar', { nullable: true })
  natureOfAilment: String
  @Column('varchar', { nullable: true })
  procedureUndertaken: String
  @Column('int', { default: new Date().getDate() })
  dateOfNextAppointment: String
  @Column('int', { nullable: true })
  bioDataId: number
/*   @ManyToOne(()=>Biodatum,(bioDatum)=>bioDatum.clinicRecords)
  bioDatum:Biodatum */
}

/* 
  @Column('int', { default: new Date().getDate() })
  txnDay: number;

  @Column('int', { default: new Date().getMonth() })
  txnMonth: number;

  @Column('int', { default: new Date().getFullYear() })
  txnYear: number;

  @Column('varchar')
  description: string;

  @Column('int')
  amount: number;

  @Column('boolean', { default: true })
  expense: boolean
 */