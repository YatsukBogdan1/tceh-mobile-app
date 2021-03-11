export interface AuthorizationRequestSuccessResponseData {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    photo: string;
    profile:{
        about: string;
        birthday: string;
        facebook: string;
        instagram: string;
        interests: string;
        is_activated: boolean;
        is_private: boolean;
        linkedin: string;
        skills: string;
    };
    settings: {
        comment: boolean;
        company: boolean;
        language: string;
        post: boolean;
        promotions: boolean;
        reservation: boolean;
    },
    token: string;
}
