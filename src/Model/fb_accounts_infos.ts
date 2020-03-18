// tslint:disable-next-line:class-name
export class  fb_accounts_infos{
    type:any="0";

    // tslint:disable-next-line:variable-name
    total_count: number = 0;
    // tslint:disable-next-line:variable-name
    active_count: number = 0;
    // tslint:disable-next-line:variable-name
}

export class Account{
    fb_accounts_info:fb_accounts_infos[]
    fb_account_types: any[]=["0"];
    fb_effect_types: any[]=["0"];
    fb_url_types: any[]=["0"];
    }