import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";




@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "double precision", default: 0 })
  lastLng: number;
  // null 이 될 순 없어서 default 0 설정

  @Column({ type: "double precision", default: 0 })
  lastLat: number;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "boolean" })
  isFav: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Place;
