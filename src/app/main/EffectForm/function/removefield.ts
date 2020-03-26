 export function removeTextArea(form,List,classGroup,index,field){
        //List.splice(index, 1);
        field.splice(index,1);
        form.removeControl('URL'+(index));
        //console.log(List.length)
        if (List.length==0) {
          classGroup="";
        }

        return [List,form,classGroup]
    }