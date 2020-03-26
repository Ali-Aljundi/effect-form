export  function JoinField(field,form,List,postdata,nameofField){
       field[0]=nameofField;
        for (let index = 0; index < List.length; index++) {
         field[index+1]=(form.get(List[index]).value)
      }
      nameofField=field;
      postdata=field

        return [form,postdata]
    }