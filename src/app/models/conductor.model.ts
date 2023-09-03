import { UserModel } from "./UserModel";
import { Auto } from "./auto.model";

export interface Conductor {
    user : UserModel | undefined;
    auto : Auto;
    
}