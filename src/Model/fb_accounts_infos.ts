// tslint:disable-next-line:class-name
<<<<<<< HEAD
export class Account {
    type: string;
=======
export class  fb_accounts_infos{
    type:any;

>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
    // tslint:disable-next-line:variable-name
    total_count: number;
    // tslint:disable-next-line:variable-name
    active_count: number;
}
export class FbAccountsInfos{
    account = [] ;
    // tslint:disable-next-line:variable-name
<<<<<<< HEAD
    fb_effect_types: [];
    // tslint:disable-next-line:variable-name
    fb_url_types: [];
    // tslint:disable-next-line:variable-name
    fb_account_types: []; 
=======
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
}

export class Account{
    fb_accounts_info:fb_accounts_infos[]= [
        {
            "type": "",
            "total_count": 0,
            "active_count": 0
        },
        {
            "type": "",
            "total_count": 0,
            "active_count": 0
        }
    ];
    fb_account_types: any[]=["0"];
    fb_effect_types: any[]=["0"];
    fb_url_types: any[]=["0"];
    }