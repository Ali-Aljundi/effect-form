export  function JoinField(field,form,List,fieldname){
       field[0]=fieldname;
        for (let index = 0; index < List.length; index++) {
  
         field[index+1]=(form.get(List[index]).value)
      }
     var filterd=field.filter(function(el){return  el !=null})
     var filterd=filterd.filter(function(em){return  em !=""})
    
     let unique = [...new Set(filterd)];
        

        return [form,unique]
    }