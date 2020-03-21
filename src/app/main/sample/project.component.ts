import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
<<<<<<< HEAD
import { Account } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { PostDataService } from 'Services/post-data.service';
import {post_info} from 'Model/post_info';
import {post_response} from 'Model/post_response';
=======
<<<<<<< HEAD
import { DialogUtility } from '@syncfusion/ej2-popups';
import { validateBasis } from '@angular/flex-layout';
import { FbAccountsInfos } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { isThursday } from 'date-fns';
import { EffectActivity } from 'Model/effect_activity';
=======
import { Account } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { PostDataService } from 'Services/post-data.service';
import {post_info} from 'Model/post_info';
import {post_response} from 'Model/post_response';
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
import { Router } from '@angular/router';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
})

export class ProjectDashboardComponent implements OnInit, OnDestroy
{
    @ViewChild('element', {static: true}) element;
    form: FormGroup;
<<<<<<< HEAD
    account = new Account();
    postResponse: post_response;
    postdata = new post_info();
    
    refreshSpinner = false;
    ApplySpinner = false;
    toastColor;
    // Public
    public position = { X: 'Right' };
    public message: string;
=======
<<<<<<< HEAD
    // tslint:disable-next-line:variable-name
    
    // tslint:disable-next-line:new-parens
    fbAccountsInfos: FbAccountsInfos [] = [];
    effectActivityResponse: any ;
=======
    account=new Account();
    postResponse:post_response;
    postdata=new post_info();
    
    refreshSpinner = false;
    ApplySpinner=false;
    toastColor;
    // Public
    public position = { X: 'Right' };
    public message:string;
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
<<<<<<< HEAD
        private _FbAccountsInfosService: FbAccountsInfosService,
        private postDataService: PostDataService,
        private router: Router
=======
<<<<<<< HEAD
        private fbAccountsInfosService: FbAccountsInfosService,
        private router: Router,
=======
        private _FbAccountsInfosService: FbAccountsInfosService,
        private postDataService:PostDataService,
        private router:Router
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
<<<<<<< HEAD
       
        this.getInfo(); 
=======
<<<<<<< HEAD
=======
       
        this.getInfo(); 
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
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
<<<<<<< HEAD
            registerdAccountType: ['', Validators.required],
            count   : [
=======
<<<<<<< HEAD
            Count   : [
=======
            registerdAccountType:['',Validators.required],
            count   : [
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
                {
                    value   : '',
                    disabled: false
                }, [Validators.required,
                   Validators.pattern('^[0-9]*$'), Validators.maxLength(5)]
            ],
<<<<<<< HEAD
             urls: [[''], [Validators.required, Validators.pattern('https?://.+')]],
             // Validators.pattern('http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()\+;]{1,6}')
             effectType   : ['', Validators.required],
             url_type  : ['', Validators.required],
            content      : [ {
                value   : '',
                disabled: true
            }
        ] 
=======
<<<<<<< HEAD
            EffectType   : ['', Validators.required],
            URLs   : ['', [Validators.required,
                Validators.pattern('http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()\+;]{1,6}')]],
            URLType  : ['', Validators.required],
            // tslint:disable-next-line:typedef
            Content : [] 
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
        });
        this.element.hide('All');
        this.element.target = '#toast_pos_target';
        this.element.animation.show.effect = 'ZoomIn';
        this.element.animation.hide.effect = 'ZoomOut';
    } 


<<<<<<< HEAD
=======
    getInfo(): void{
        this.fbAccountsInfosService.getAccount().subscribe(data => { this.fbAccountsInfos = data;   console.log(this.fbAccountsInfos); },
          // tslint:disable-next-line:align
          err => { console.error(err); this.router.navigate(['/maintenance']) ; }  );
      }
=======
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


>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

<<<<<<< HEAD
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
=======
<<<<<<< HEAD
    
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
    // tslint:disable-next-line:typedef
    getInfo()
    {
        this._FbAccountsInfosService.getAccount()
            .subscribe(data => { this.account = 
                {
                    fb_accounts_info: (data as any ).fb_accounts_infos,
                    fb_account_types: (data as any).fb_account_types,
                    fb_effect_types: (data as any ).fb_effect_types,
                    fb_url_types: (data as any ).fb_url_types,    
                }; 
            },
            err => { console.error(err); this.router.navigate(['/maintenance']) ;
             }
                );
      }

    // tslint:disable-next-line:typedef
    SendInfo()
    {
        const stringArray = (document.getElementById('urls') as HTMLInputElement).value.split(',');
        console.log(stringArray);
        this.form.value.urls = stringArray;
        this.postdata = this.form.value;
        this.postDataService.postdata(this.postdata)
        .subscribe(
            data => {
                this.postResponse = data;
                this.message = this.postResponse.message;
                this.toastShow();
            },
            err => { console.error(err); this.router.navigate(['/maintenance']) ; }
        );  
    }

    // tslint:disable-next-line:typedef
    toastShow()
    { const success = 'All effects created successfully.';
      const warning = 'No enough accounts to create this effect.';
      const index1 = success.localeCompare(this.message);
      const index2 = warning.localeCompare(this.message);
      if (index1 === 0) {
            this.toastColor = 'success';
        } else {if (index2 === 0)
           {this.toastColor = 'warning'; }
           else{this.toastColor = 'info'; }
        }
      setTimeout(
      () => {
          this.element.show();
          this.refreshSpinner = false;
          this.ApplySpinner = false;
      }, 500);
    }

<<<<<<< HEAD
    enableContent(): void{ 
        this.form.controls.content.enable();
=======
    
    addURL(event: Event): void{
        this.form.patchValue({URLs: 'http://www..;' });
=======
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
>>>>>>> da98d46aac862433dc86a43b228f8fc89b3af9ce
>>>>>>> 0253df4c28e438a8b6b591a4ea2ca940d18f2569
    }

    testEffectType(): void{
          if (this.form.value.effectType === 'comment') {
            this.form.controls.content.enable(); 
          }else{
            this.form.controls.content.disable(); 
          }
    }

    // tslint:disable-next-line:typedef
    refresh(){
        this.getInfo();
        this.message = 'Refresh Widget Value';
        this.toastShow();
    }
    
}
