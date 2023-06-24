import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";

//BIODATA



@Entity('asset_entry')
export class AssetEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { default: new Date().getDate() })
  acquireDay: number;

  @Column('int', { default: new Date().getMonth() })
  acquireMonth: number;

  @Column('int', { default: new Date().getFullYear() })
  acquireYear: number;

  @Column('varchar')
  description: string;

  @Column('varchar')
  value: number;

  @Column('boolean', { default: true })
  tangible: boolean

  @Column('varchar', { nullable: true })
  firstName: string;

  @Column('varchar', { nullable: true })
  lastName: string;

  @Column('varchar', { nullable: true })
  middleName: string;

  @Column('int', { default: new Date().getDate() })
  dateOfBirth: Date;

  @Column('varchar', { nullable: true })
  homeAddress: string;

  @Column('int', { default: new Date().getDate() })
  dateOfRegistration: Date;

  @Column('boolean',{ default: true })
  _21120612479: boolean;

  @OneToMany(() => ClinicRecord, (clinicRecord) => clinicRecord.bioDatum)
  clinicRecords: ClinicRecord[]
}
