import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { validateBasis } from '@angular/flex-layout';
import { fb_accounts_infos } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
})
export class ProjectDashboardComponent implements OnInit, OnDestroy
{
    form: FormGroup;
    
    // tslint:disable-next-line:variable-name
    _fb_accounts_infos: fb_accounts_infos [] = [] ;

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
        private _FbAccountsInfosService: FbAccountsInfosService
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
        this._FbAccountsInfosService.getAccount().subscribe(data => {this._fb_accounts_infos = data; },
          err => console.error(err));
  
        console.log(this._fb_accounts_infos);
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
       
        DialogUtility.alert('test');
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    
}

