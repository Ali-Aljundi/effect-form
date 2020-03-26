 
export function addTextarea(List,form,_formBuilder,nameofField,controlerCount){  

        if(List.length==0)
        {List.push(nameofField+ (controlerCount+1));
      form.addControl((nameofField+ (controlerCount+1)), _formBuilder.control(null))
        controlerCount=controlerCount+1
        }
        else{
        if(isValidform(List,form)){
          List.push(nameofField+ (controlerCount+1));
        form.addControl((nameofField+ (controlerCount+1)), _formBuilder.control(null))  
        controlerCount=controlerCount+1
        }}
        return[ List,form,controlerCount]
       
    }
   function isValidform(List,form){
        var valid:boolean[]=[];
        for (let index = 0; index < List.length; index++) {
             if (form.get(List[index]).value != null){valid[index]=true} else {valid[index]=false}
        }
        return valid.every(Boolean)

    }