import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {rideStatus} from "../types/types.d"




@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        type: "text", 
        enum: ["ACCEPTED","FINISHED","CANCELED","REQUESTING","ON"
        ]})
    status: rideStatus;
    @Column({type:"text"})
    pickUpAddress: string;
    @Column({type:"double precision", default :0})
    pickUplat: number;
    @Column({ type: "double precision", default: 0 })
    pickUplng: number;
    @Column({type:"text"})
    dropOffAddress: string;
    @Column({ type: "double precision", default: 0 })
    dropOffLat: number;
    @Column({ type: "double precision", default: 0 })
    dropOffLng: number;
    @Column({ type: "double precision", default: 0 })
    price: number;
    @Column({type:"text"})
    distance: string;
    @Column({type:"text"})
    duration: string;


    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}

export default Ride;
