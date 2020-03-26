
 
export function addTextarea(List,form,_formBuilder,nameofField){  
     form.controls.urls.invalid
        if(List.length==0)
        {
      form.addControl((nameofField+ (List.length+1)), _formBuilder.control(null))
        List.push(nameofField+ (List.length+1));
        }
        else{
        if(isValidform(List,form)){
        form.addControl((nameofField+ (List.length+1)), _formBuilder.control(null))
        List.push(nameofField+ (List.length+1));
        }}

        return[ List,form]
       
    }
   function isValidform(List,form){
        var valid:boolean[]=[];
        for (let index = 0; index < List.length; index++) {
             valid[index]=form.get(List[index]).valid
        }
        return valid.every(Boolean)

    }