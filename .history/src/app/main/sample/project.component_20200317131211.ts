import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { validateBasis } from '@angular/flex-layout';
import { FbAccountsInfos } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { isThursday } from 'date-fns';
import { EffectActivity } from 'Model/effect_activity';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
})
export class ProjectDashboardComponent implements OnInit, OnDestroy
{
    form: FormGroup;
    
    // tslint:disable-next-line:variable-name
    
    // tslint:disable-next-line:new-parens
    fbAccountsInfos: FbAccountsInfos [] = [];
    effectActivityResponse: any ;

    ALL: number;
    Active: number;

    // Private
    private _unsubscribeAll: Subject<any>;
    
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private fbAccountsInfosService: FbAccountsInfosService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.ALL = 150;
        this.Active = 10;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Reactive Form
        this.form = this._formBuilder.group({
            Count   : [
                {
                    value   : '',
                    disabled: false
                }, [Validators.required,
                   Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]
            ],
            EffectType   : ['', Validators.required],
            URLs   : ['', Validators.required],
            URLType  : ['', Validators.required],
            // tslint:disable-next-line:typedef
            Content      : ['', Validators.required] 
        });

        this.getInfo();
    }

    getInfo(): void{
        this.fbAccountsInfosService.getAccount().subscribe(data => { this.fbAccountsInfos = data;   console.log(this.fbAccountsInfos); },
          err => console.error(err));
      }
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    
    // tslint:disable-next-line:typedef
    SendInfo(event: any): void  {
        if (this.form.valid) {
       const effectActivity: EffectActivity = this.form.value;
       effectActivity.registerAccountType = 'email' ;
       effectActivity.count = this.form.Count;
       effectActivity.urls = this.form.URLs;
       effectActivity.effectType = this.form.EffectType;
       effectActivity.urltype = this.form.URLType;
       effectActivity.contents = this.form.Content;
       // tslint:disable-next-line:max-line-length
       this.fbAccountsInfosService.Post_Effect_Activity(effectActivity).subscribe(data => { this.effectActivityResponse = data;   DialogUtility.alert(this.effectActivityResponse.message); },
       err => console.error(err));

       console.log(effectActivity);
        }
       
    }

   // Post_Effect_Activity(accountsInfos: FbAccountsInfos){

    // }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    
}

