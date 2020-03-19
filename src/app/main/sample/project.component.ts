import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Account } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { PostDataService } from 'Services/post-data.service';
import {post_info} from 'Model/post_info';
import {post_response} from 'Model/post_response';
import { Router } from '@angular/router';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
})

export class ProjectDashboardComponent implements OnInit, OnDestroy
{
    @ViewChild('element',{static: true}) element;
    form: FormGroup;
    account=new Account();
    postResponse:post_response;
    postdata=new post_info();
    
    refreshSpinner = false;
    ApplySpinner=false;
    toastColor;
    // Public
    public position = { X: 'Right' };
    public message:string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _FbAccountsInfosService: FbAccountsInfosService,
        private postDataService:PostDataService,
        private router:Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
       
        this.getInfo(); 
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
            registerdAccountType:['',Validators.required],
            count   : [
                {
                    value   : '',
                    disabled: false
                }, [Validators.required,
                   Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]
            ],
             urls: [[''], [Validators.required,Validators.pattern('https?://.+')]],
             //Validators.pattern('http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()\+;]{1,6}')
             effectType   : ['', Validators.required],
             url_type  : ['', Validators.required],
            content      : [ {
                value   : '',
                disabled:true
            }
        ] 
        });
        this.element.hide('All');
        this.element.target = '#toast_pos_target';
        this.element.animation.show.effect="ZoomIn";
        this.element.animation.hide.effect="ZoomOut";
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    getInfo()
    {
        this._FbAccountsInfosService.getAccount()
            .subscribe(data =>{ this.account = 
                {
                    fb_accounts_info:(data as any ).fb_accounts_infos,
                    fb_account_types:(data as any).fb_account_types,
                    fb_effect_types:(data as any ).fb_effect_types,
                    fb_url_types:(data as any ).fb_url_types,    
                } 
            },
            err => { console.error(err); this.router.navigate(['/maintenance']) ;
             }
                );
      }

    SendInfo()
    {
        var stringArray = (<HTMLInputElement>document.getElementById("urls")).value.split(',');
        console.log(stringArray);
        this.form.value.urls=stringArray;
        this.postdata=this.form.value;
        this.postDataService.postdata(this.postdata)
        .subscribe(
            data=>{
                this.postResponse=data;
                this.message=this.postResponse.message;
                this.toastShow();
            },
            err => { console.error(err); this.router.navigate(['/maintenance']) ; }
        );  
    }

    toastShow()
    { var success="All effects created successfully.";
      var warning='No enough accounts to create this effect.';
        var index1 = success.localeCompare(this.message);
        var index2 = warning.localeCompare(this.message);
        if (index1==0) {
            this.toastColor="success";
        } else {if(index2==0)
           {this.toastColor="warning"; }
           else{this.toastColor="info";}
        }
        setTimeout(
      () => {
          this.element.show();
          this.refreshSpinner=false
          this.ApplySpinner=false;
      }, 500);
    }

    enableContent():void{ 
        this.form.controls.content.enable();
    }

    testEffectType():void{
          if (this.form.value.effectType == 'comment') {
            this.form.controls.content.enable(); 
          }else{
            this.form.controls.content.disable(); 
          }
    }

    refresh(){
        this.getInfo();
        this.message="Refresh Widget Value";
        this.toastShow();
    }
    
}

