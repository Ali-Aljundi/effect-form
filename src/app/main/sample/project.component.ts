import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Account } from 'Model/fb_accounts_infos';
import { FbAccountsInfosService } from 'Services/fb-accounts-infos.service';
import { PostDataService } from 'Services/post-data.service';
import {post_info} from 'Model/post_info';
import {post_response} from 'Model/post_response';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    urlList:any = [];
    public urls:any[]=[];
    contentList:any = [];
    public contents:any[]=[];
    classURL;
    classContent;
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
             urls: ['', [Validators.required]],
             //,Validators.pattern('https?://.+')
             effectType   : ['', Validators.required],
             url_type  : ['', Validators.required],
            contents      : [ {
                value   : [''],
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
        if (this.form.value.effectType == 'comment'|| this.form.value.effectType == 'share' )
        {
            this.form.controls.contents.enable(); 
        }
        else
        {
             this.form.controls.contents.disable(); 
        }

       this.postdata.url_type=this.form.value.url_type;
       //this.postdata.contents=this.form.value.contents;
       this.postdata.count=this.form.value.count;
       this.postdata.effectType=this.form.value.effectType;
       this.postdata.registeredAccountType=this.form.value.registerdAccountType;
       // this.postdata=this.form.value;
        console.log(this.postdata);
        this.postDataService.postdata(this.postdata)
        .subscribe(
            data=>
            {
                this.postResponse=data;
                this.message=this.postResponse.message;
                this.toastShow();
            },
            err => { console.error(err); this.router.navigate(['/maintenance']) ; }
        );  
    }

    toastShow()
    {
        var success="All effects created successfully.";
        var warning='No enough accounts to create this effect.';
        var index1 = success.localeCompare(this.message);
        var index2 = warning.localeCompare(this.message);
        if (index1==0)
        {
            this.toastColor="success";
        } else {if(index2==0)
           {this.toastColor="warning"; }
           else{this.toastColor="info";}
        }

    setTimeout(
      () => {
        this.element.timeOut=1000;
          this.element.show();

          this.refreshSpinner=false
          this.ApplySpinner=false;
      }, 600);
    }

    enableContent():void{ 
        this.form.controls.contents.enable();
    }


    refreshWidget(){
        this.getInfo();
        this.message="Refresh Widget Value";
        this.toastShow();
    }


    addURLTextarea(){     
        this.form.addControl(('URL'+ (this.urlList.length + 1)), this._formBuilder.control(''))
        this.urlList.push('url'+ (this.urlList.length + 1));
        this.classURL="Groub"
       
    }

    removeURLTextArea(index){
        this.urlList.splice(index, 1);
        this.urls.splice(index+1,1);
        this.urlList.length -1;
        this.form.removeControl('URL'+(index+1));
        console.log(this.urlList.length)
        if (this.urlList.length==0) {
            this.classURL="";
        }
    }

    JoinUrls(){
       this.urls[0]=this.form.value.urls;
        for (let index = 0; index < this.urlList.length; index++) {
         this.urls[index+1]=(this.form.get('URL'+(index+1)).value)
      }
      this.form.value.urls=this.urls;
      this.postdata.urls=this.urls
    }

    addContentTextarea(){     
        this.form.addControl(('Content'+ (this.contentList.length + 1)), this._formBuilder.control(''))
        this.contentList.push('content'+ (this.contentList.length + 1));
       this.classContent="Groub";
    }

    removeContentTextArea(index){
        this.contentList.splice(index, 1);
        this.contents.splice(index+1,1);
        this.contentList.length -1;
        this.form.removeControl('Content'+(index+1));
        console.log(this.contentList.length)
        if (this.contentList.length==0) {
            this.classContent="";
        }
    }

    JoinContents(){
        this.contents[0]=this.form.value.contents;
         for (let index = 0; index < this.contentList.length; index++) {
          this.contents[index+1]=(this.form.get('Content'+(index+1)).value)
       }
        
       this.form.value.contents=this.contents;
       if (this.form.value.effectType == 'comment'|| this.form.value.effectType == 'share' ){
       this.postdata.contents=this.contents;
       }
     }
}

