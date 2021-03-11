export interface RegistrationFormValues {
    name: string;
    phone: string;
    password: string;
}

export interface RegistrationFormErrors {
    name: string | null;
    phone: string | null;
    password: string | null;
}

export interface RegistrationFormPristine {
    name: boolean;
    phone: boolean;
    password: boolean;
}

export interface RegistrationFormState {
    errors: RegistrationFormErrors;
    pending: boolean;
    pristine: RegistrationFormPristine;
    values: RegistrationFormValues;
}

export interface AuthorizationFormValues {
    phone: string;
    password: string;
}

export interface AuthorizationFormErrors {
    phone: string | null;
    password: string | null;
}

export interface AuthorizationFormPristine {
    phone: boolean;
    password: boolean;
}

export interface AuthorizationFormState {
    errors: AuthorizationFormErrors;
    pending: boolean;
    pristine: AuthorizationFormPristine;
    values: AuthorizationFormValues;
}

export interface RecoveryFormState {
    phone: string;
    code: string;
    password: string;
}

export interface Event {
    duration: number;
    imageURI: string;
    label: string;
    timestamp: string;
    type: string;
}

export type EventsState = Record<string, Event>;

export interface UserCompany {
    address: string;
    avatarURI: string;
    backgroundImageURI: string;
    description: string;
    email: string;
    facebookURL: string;
    industryId: string;
    instagramURL: string;
    isPrivate: boolean;
    label: string;
    linkedInURL: string;
    locationId: string;
    office: string;
    phone: string;
    website: string;
}

export interface UserSettings {
    benefitsNotificationsEnabled: boolean;
    language: string;
    meetingRoomNotificationsEnabled: boolean;
    newCompanyNotificationEnabled: boolean;
    newPostNotificationsEnabled: boolean;
    socialNotificationsEnabled: boolean;
}

export interface UserState {
    about: string;
    avatarURI: string;
    birthday: string;
    company: UserCompany;
    companyId: string | null;
    email: string;
    events: Array<string>;
    facebookURL: string;
    instagramURL: string;
    interests: string;
    isPrivate: boolean;
    linkedInURL: string;
    name: string;
    phone: string;
    position: string;
    role: string;
    settings: UserSettings;
    skills: string;
    surname: string;
}

export interface PersonalInfoFormState {
    values: {
        about: string;
        birthday: string;
        companyId: string | null;
        email: string;
        facebookURL: string;
        instagramURL: string;
        interests: string;
        isPrivate: boolean;
        linkedInURL: string;
        name: string;
        phone: string;
        position: string;
        skills: string;
        surname: string;
    },
    pristine: {
        about: boolean;
        birthday: boolean;
        email: boolean;
        facebookURL: boolean;
        instagramURL: boolean;
        interests: boolean;
        linkedInURL: boolean;
        name: boolean;
        phone: boolean;
        position: boolean;
        skills: boolean;
        surname: boolean;
    },
    errors: {
        about: string | null;
        birthday: string | null;
        email: string | null;
        facebookURL: string | null;
        instagramURL: string | null;
        interests: string | null;
        linkedInURL: string | null;
        name: string | null;
        phone: string | null;
        position: string | null;
        skills: string | null;
        surname: string | null;
    },
}

export interface State {
    authorizationForm: AuthorizationFormState;
    events: EventsState;
    personalInfoForm: PersonalInfoFormState;
    recoveryForm: RecoveryFormState;
    registrationForm: RegistrationFormState;
    user: UserState;
}
