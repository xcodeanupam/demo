export interface User {
    upgrade: any;
    email: string;
    password: string;
    token?: string;
}


export class Socialusers {
    provider: string | undefined;
    id: string | undefined;
    email: string | undefined;
    name: string | undefined;
    image: string | undefined;
    token?: string;
    idToken?: string;
} 