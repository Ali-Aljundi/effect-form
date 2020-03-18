import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { validateBasis } from '@angular/flex-layout';
import { FbAccountsInfos } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { isThursday } from 'date-fns';
import { EffectActivity } from 'Model/effect_activity';
import { Router } from '@angular/router';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
})
export class ProjectDashboardComponent implements OnInit, OnDestroy
{
    form: FormGroup;
    textarea: {value: string}[];
    // tslint:disable-next-line:variable-name
    
    // tslint:disable-next-line:new-parens
    fbAccountsInfos: FbAccountsInfos [] = [];
    effectActivityResponse: any ;

    // Private
    private _unsubscribeAll: Subject<any>;
    
    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private fbAccountsInfosService: FbAccountsInfosService,
        private router: Router,
        textarea = [{value: 'http://ww..;'}]
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
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
            URLs   : ['', [Validators.required,
                Validators.pattern('http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()\+;]{1,6}')]],
            URLType  : ['', Validators.required],
            // tslint:disable-next-line:typedef
            Content : [] 
        });

        this.getInfo();
    }

    getInfo(): void{
        this.fbAccountsInfosService.getAccount().subscribe(data => { this.fbAccountsInfos = data;   console.log(this.fbAccountsInfos); },
          // tslint:disable-next-line:align
          err => { console.error(err); this.router.navigate(['/maintenance']) ; }  );
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
       let effectActivity = new EffectActivity(); 
       effectActivity = this.form.value;

       // tslint:disable-next-line:max-line-length
       this.fbAccountsInfosService.Post_Effect_Activity(effectActivity).subscribe(data => { this.effectActivityResponse = data;   DialogUtility.alert(this.effectActivityResponse.message); },
       err => { console.error(err); this.router.navigate(['/maintenance']) ; } );

        }
       
    }


    addURL(): void{
        this.form.patchValue({URLs: this.textarea });
    }
   // Post_Effect_Activity(accountsInfos: FbAccountsInfos){

    // }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    
}

