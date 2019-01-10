import bcrypt from "bcrypt";
import {IsEmail} from "class-validator";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";

const BCRYPT_ROUNDS = 10; 

@Entity()
class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @IsEmail()
    email:string;

    @Column({type:"boolean", default:false})
    verifiedEmail: boolean;
    
    @Column({type:"text"})
    firstName:string;
    
    @Column({ type: "text" })
    lasttName: string;

    @Column({type:"int"})
    age: number;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "text" })
    phoneNumber: string;
    
    @Column({ type: "bool", default:false })
    verifiedPhoneNumber: boolean;

    @Column({ type: "text" })
    profilePhoto: string;
    
    
    @Column({type:"boolean", default:false})     
    isDriving: boolean;
    
    @Column({type:"boolean", default:false})       
    isRiding: boolean;
    
    @Column({type:"boolean", default:false})      
    isTaken: boolean;
    
    @Column({type:"double precision", default: 0})     
    lastLng:number;
    @Column({type:"double precision", default: 0})         
    lastLat:number;
    @Column({type:"double precision", default: 0})       
    lastOrientation:number;

    get fullName(): string{
        return`${this.firstName}${this.lasttName}`;
    }

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;


    @BeforeInsert()

    @BeforeUpdate()

    async savePassword() : Promise<void>  {
        if(this.password){
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword
        }
    }

    private hashPassword(password: string): Promise<string> {
        // string 값을 더 받아야지 통과라는말 promise 라는 말은
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }
}



export default User;