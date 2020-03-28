 export function removeTextArea(form,List,classGroup,index,field,nameofField){      
        form.removeControl(List[index])
        List.splice(index, 1);
        field.splice(index,1);
      
        if (List.length==0) {
          classGroup="";
        }

        return [List,form,classGroup]
    }